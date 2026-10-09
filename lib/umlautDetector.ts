import { UMLAUT_PAIRS, UmlautMapping } from './germanDictionaryData';
import { WordRecommendation, UmlautSentenceOption } from './types';

// Map of vowels to potential umlaut replacements
const UMLAUT_REPLACEMENTS: Record<string, string[]> = {
  a: ['ä', 'ae'],
  o: ['ö', 'oe'],
  u: ['ü', 'ue'],
  A: ['Ä', 'Ae'],
  O: ['Ö', 'Oe'],
  U: ['Ü', 'Ue'],
  ss: ['ß'],
  ae: ['ä'],
  oe: ['ö'],
  ue: ['ü'],
};

/**
 * Checks if a single word has umlaut ambiguities or missing umlauts
 */
export function detectWordUmlauts(rawWord: string): WordRecommendation[] {
  const normalized = rawWord.trim().toLowerCase();
  const recommendations: WordRecommendation[] = [];

  // 1. Direct curated match in UMLAUT_PAIRS
  if (UMLAUT_PAIRS[normalized]) {
    const pair = UMLAUT_PAIRS[normalized];
    for (const opt of pair.options) {
      recommendations.push({
        word: opt.word,
        translation: opt.translation,
        reason: opt.reason,
        confidence: opt.confidence,
      });
    }
    return recommendations;
  }

  // 2. Check transliterated forms: ae -> ä, oe -> ö, ue -> ü, ss -> ß
  let hasTransliteration = false;
  let transliterated = normalized;

  if (normalized.includes('ae')) {
    transliterated = transliterated.replace(/ae/g, 'ä');
    hasTransliteration = true;
  }
  if (normalized.includes('oe')) {
    transliterated = transliterated.replace(/oe/g, 'ö');
    hasTransliteration = true;
  }
  if (normalized.includes('ue')) {
    transliterated = transliterated.replace(/ue/g, 'ü');
    hasTransliteration = true;
  }
  if (normalized.includes('ss')) {
    transliterated = transliterated.replace(/ss/g, 'ß');
    hasTransliteration = true;
  }

  if (hasTransliteration && transliterated !== normalized) {
    recommendations.push({
      word: transliterated,
      translation: `Bentuk dengan karakter khas Jerman (${transliterated})`,
      reason: 'Mengubah transliterasi huruf rangkap (ae/oe/ue/ss) menjadi karakter umlaut/eszett (ä/ö/ü/ß).',
      confidence: 0.9,
    });
  }

  // 3. Heuristic single vowel umlauts: e.g. "tur" -> "Tür", "uber" -> "über", "fruhstuck" -> "Frühstück"
  const commonUmlautReplacements: Record<string, { target: string; trans: string }> = {
    freizeitbeschaftigung: { target: 'die Freizeitbeschäftigung', trans: 'aktivitas santai / hobi waktu luang' },
    beschaftigung: { target: 'die Beschäftigung', trans: 'aktivitas / kesibukan / pekerjaan' },
    beschaftigt: { target: 'beschäftigt', trans: 'sibuk' },
    tur: { target: 'die Tür', trans: 'pintu' },
    uber: { target: 'über', trans: 'di atas / tentang' },
    unter: { target: 'unter', trans: 'di bawah' },
    fruhstuck: { target: 'das Frühstück', trans: 'sarapan pagi' },
    kuh: { target: 'die Kuh', trans: 'sapi' },
    spat: { target: 'spät', trans: 'terlambat / larut' },
    zahne: { target: 'die Zähne', trans: 'gigi (jamak)' },
    bucher: { target: 'die Bücher', trans: 'buku-buku (jamak)' },
    hauser: { target: 'die Häuser', trans: 'rumah-rumah (jamak)' },
    plane: { target: 'die Pläne', trans: 'rencana-rencana' },
    arzte: { target: 'die Ärzte', trans: 'para dokter' },
    stuhle: { target: 'die Stühle', trans: 'kursi-kursi' },
    schuler: { target: 'der Schüler', trans: 'murid / siswa' },
    schulerin: { target: 'die Schülerin', trans: 'murid perempuan' },
    mutter: { target: 'die Mutter', trans: 'ibu' },
    mutter_pl: { target: 'die Mütter', trans: 'para ibu (jamak)' },
    bruder: { target: 'der Bruder', trans: 'saudara laki-laki' },
    bruder_pl: { target: 'die Brüder', trans: 'saudara-saudara laki-laki' },
  };

  if (commonUmlautReplacements[normalized]) {
    const item = commonUmlautReplacements[normalized];
    recommendations.push({
      word: item.target,
      translation: item.trans,
      reason: 'Penulisan standar bahasa Jerman menggunakan tanda umlaut.',
      confidence: 0.94,
    });
  }

  return recommendations;
}

/**
 * Checks a German sentence for words that have umlaut alternatives (e.g. "mochte" vs "möchte")
 */
export function detectSentenceUmlauts(sentence: string): UmlautSentenceOption[] {
  const options: UmlautSentenceOption[] = [];
  const words = sentence.split(/\s+/);

  for (let i = 0; i < words.length; i++) {
    const cleanWord = words[i].replace(/[.,!?;:()]/g, '').toLowerCase();

    // Check if this word is known to have a crucial distinction (like mochte vs möchte, schon vs schön)
    if (cleanWord === 'mochte') {
      const suggestedWords = [...words];
      suggestedWords[i] = words[i].replace(/mochte/i, 'möchte');
      options.push({
        originalSentence: sentence,
        suggestedSentence: suggestedWords.join(' '),
        changedWords: [
          {
            from: 'mochte',
            to: 'möchte',
            meaning: 'möchte = ingin / mau (Konjunktiv II) vs mochte = menyukai (Präteritum)',
          },
        ],
        explanation:
          'Dalam kalimat ini, apakah Anda bermaksud menggunakan "möchte" (ingin / hendak melakukan sesuatu) daripada "mochte" (bentuk lampau dari mögen)?',
      });
    }

    if (cleanWord === 'fur') {
      const suggestedWords = [...words];
      suggestedWords[i] = words[i].replace(/fur/i, 'für');
      options.push({
        originalSentence: sentence,
        suggestedSentence: suggestedWords.join(' '),
        changedWords: [
          {
            from: 'fur',
            to: 'für',
            meaning: 'für = untuk / bagi (+ Akkusativ)',
          },
        ],
        explanation: 'Kata depan "für" (untuk) memerlukan tanda umlaut ü.',
      });
    }

    if (cleanWord === 'schon' && sentence.toLowerCase().includes('ist schon') || sentence.toLowerCase().includes('sehr schon')) {
      const suggestedWords = [...words];
      suggestedWords[i] = words[i].replace(/schon/i, 'schön');
      options.push({
        originalSentence: sentence,
        suggestedSentence: suggestedWords.join(' '),
        changedWords: [
          {
            from: 'schon',
            to: 'schön',
            meaning: 'schön = indah / cantik vs schon = sudah',
          },
        ],
        explanation:
          'Berdasarkan konteks ("ist / sehr"), kemungkinan Anda bermaksud menggunakan kata sifat "schön" (indah/cantik) daripada "schon" (sudah).',
      });
    }
  }

  return options;
}
