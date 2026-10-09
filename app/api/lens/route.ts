import path from 'path';
import { NextRequest, NextResponse } from 'next/server';
import { analyzeGermanText } from '@/lib/aiService';
import { LanguageMode, AnalyzeResponse } from '@/lib/types';
import { createWorker } from 'tesseract.js';

interface LensRequestBody {
  image: string; // base64 data url
  mode?: LanguageMode;
  userApiKey?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: LensRequestBody = await req.json();
    const { image, mode = 'de-id', userApiKey } = body;

    if (!image || typeof image !== 'string' || !image.startsWith('data:image/')) {
      return NextResponse.json(
        { error: 'Data gambar tidak valid atau kosong.' },
        { status: 400 }
      );
    }

    const validMode: LanguageMode = mode === 'id-de' ? 'id-de' : 'de-id';
    const apiKey =
      userApiKey ||
      process.env.AI_API_KEY ||
      process.env.GEMINI_API_KEY ||
      '';

    let extractedText = '';
    let analysisResult: AnalyzeResponse | null = null;
    let source: 'gemini-vision' | 'tesseract-ocr' = 'gemini-vision';

    // 1. Try Gemini Vision if API key is present
    if (apiKey) {
      try {
        const visionData = await callGeminiVision(image, validMode, apiKey);
        if (visionData && visionData.extractedText) {
          extractedText = visionData.extractedText;
          analysisResult = visionData.result;
          source = 'gemini-vision';
        }
      } catch (geminiErr) {
        console.warn('Gemini Vision failed, attempting Tesseract OCR fallback:', geminiErr);
      }
    }

    // 2. If Gemini Vision didn't return text, fallback to Tesseract OCR
    if (!extractedText) {
      try {
        const ocrText = await runTesseractOcr(image, validMode);
        if (ocrText) {
          extractedText = ocrText;
          source = 'tesseract-ocr';
          analysisResult = await analyzeGermanText(extractedText, validMode, apiKey);
        }
      } catch (ocrErr) {
        console.error('Tesseract OCR failed:', ocrErr);
      }
    }

    if (!extractedText) {
      return NextResponse.json(
        {
          error:
            'Tidak dapat mendeteksi teks pada area gambar yang dipilih. Pastikan area teks tajam, jelas, dan coba seleksi ulang.',
        },
        { status: 422 }
      );
    }

    return NextResponse.json(
      {
        extractedText,
        result: analysisResult,
        source,
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    console.error('API /api/lens error:', err);
    return NextResponse.json(
      { error: 'Terjadi kesalahan saat memproses gambar.' },
      { status: 500 }
    );
  }
}

/**
 * Call Gemini 1.5 Flash Multimodal Vision
 */
async function callGeminiVision(
  base64Image: string,
  mode: LanguageMode,
  apiKey: string
): Promise<{ extractedText: string; result: AnalyzeResponse } | null> {
  const modelName = 'gemini-1.5-flash';
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`;

  const cleanData = base64Image.replace(/^data:image\/\w+;base64,/, '');
  const mimeMatch = base64Image.match(/^data:(image\/\w+);base64,/);
  const mimeType = mimeMatch ? mimeMatch[1] : 'image/jpeg';

  const prompt = `Anda adalah asisten Google Lens OCR dan Tutor Linguistik Bahasa Jerman-Indonesia.
Tugas Anda:
1. Baca (OCR) semua teks bahasa Jerman atau Indonesia yang tampak pada gambar potongan ini secara sangat akurat. Pertahankan huruf kapital, tanda baca, serta huruf Jerman khusus (ä, ö, ü, ß).
2. Tentukan apakah teks tersebut berupa "word" (kata tunggal / frasa kata benda seperti "der Tisch") atau "sentence" (kalimat / klausa).
3. Analisis teks tersebut dalam mode "${mode}".
   - Jika "word": sertakan displayWord, translations, meaningSummary, wordClass, cefrLevel (A1-C2), grammar (artikel, gender, plural jika Nomen; infinitiv, praesens, praeteritum, partizip2 jika Verb), synonyms, antonyms, examples, falseFriendsWarning.
   - Jika "sentence": sertakan translatedSentence, literalTranslation, sentenceStructureExplanation, grammarHighlights, wordByWordAnalysis, keyVocabulary.

KEMBALIKAN HANYA JSON MURNI TANPA BACKTICK \`\`\`json:
{
  "extractedText": "teks yang terbaca dari gambar",
  "mode": "${mode}",
  "inputType": "word" atau "sentence",
  "wordResult": {
    "word": "kata dasar",
    "displayWord": "kata dengan artikel jika nomen",
    "translations": ["arti 1"],
    "meaningSummary": "ringkasan makna",
    "wordClass": "Nomen",
    "cefrLevel": "A1 | A2 | B1 | B2 | C1 | C2",
    "grammar": { "type": "nomen", "data": { "artikel": "der", "gender": "maskulin", "singular": "...", "plural": "..." } },
    "synonyms": [{ "word": "...", "article": "der/die/das", "wordClass": "...", "translation": "..." }],
    "antonyms": [{ "word": "...", "article": "der/die/das", "wordClass": "...", "translation": "..." }],
    "examples": [{ "level": "A1 | A2 | B1 | B2 | C1 | C2", "german": "...", "indonesian": "...", "contextNote": "..." }]
  },
  "sentenceResult": {
    "originalSentence": "teks asli",
    "translatedSentence": "terjemahan",
    "sourceLang": "${mode === 'de-id' ? 'de' : 'id'}",
    "targetLang": "${mode === 'de-id' ? 'id' : 'de'}",
    "sentenceStructureExplanation": "penjelasan struktur",
    "grammarHighlights": ["..."],
    "wordByWordAnalysis": [{ "token": "...", "lemma": "...", "translation": "...", "wordClass": "..." }],
    "keyVocabulary": []
  }
}`;

  const body = {
    contents: [
      {
        parts: [
          { text: prompt },
          {
            inlineData: {
              mimeType,
              data: cleanData,
            },
          },
        ],
      },
    ],
    generationConfig: {
      temperature: 0.1,
    },
  };

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 18000);

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      signal: controller.signal,
    });

    if (!res.ok) {
      const errText = await res.text();
      console.warn('Gemini Vision error status:', res.status, errText);
      return null;
    }

    const data = await res.json();
    const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!rawText) return null;

    const cleaned = rawText
      .replace(/^```json\s*/i, '')
      .replace(/^```\s*/i, '')
      .replace(/```\s*$/i, '')
      .trim();

    const parsed = JSON.parse(cleaned);
    if (parsed.extractedText) {
      return {
        extractedText: parsed.extractedText.trim(),
        result: parsed,
      };
    }
  } finally {
    clearTimeout(timeoutId);
  }

  return null;
}

/**
 * Fallback local Tesseract OCR engine
 */
async function runTesseractOcr(base64Image: string, mode: LanguageMode): Promise<string | null> {
  const cleanData = base64Image.replace(/^data:image\/\w+;base64,/, '');
  const buffer = Buffer.from(cleanData, 'base64');
  const lang = mode === 'de-id' ? 'deu' : 'ind';
  const workerPath = path.resolve(process.cwd(), 'node_modules/tesseract.js/src/worker-script/node/index.js');

  const worker = await createWorker(lang, 1, { workerPath });
  try {
    const ret = await worker.recognize(buffer);
    const text = ret.data?.text ? ret.data.text.trim().replace(/\r?\n+/g, ' ') : '';
    return text || null;
  } finally {
    await worker.terminate();
  }
}
