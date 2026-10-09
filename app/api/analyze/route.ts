import { NextRequest, NextResponse } from 'next/server';
import { analyzeGermanText } from '@/lib/aiService';
import { LanguageMode } from '@/lib/types';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { input, mode = 'de-id', userApiKey, provider, providerKeys, forceEnrich } = body;

    // 1. Validation
    if (!input || typeof input !== 'string') {
      return NextResponse.json(
        { error: 'Input teks tidak boleh kosong.' },
        { status: 400 }
      );
    }

    const trimmed = input.trim();
    if (trimmed.length > 1000) {
      return NextResponse.json(
        { error: 'Teks terlalu panjang (maksimum 1.000 karakter).' },
        { status: 400 }
      );
    }

    const validMode: LanguageMode = mode === 'id-de' ? 'id-de' : 'de-id';

    // 2. Perform deep linguistic and multi-AI analysis
    const result = await analyzeGermanText(
      trimmed,
      validMode,
      userApiKey,
      provider,
      providerKeys,
      forceEnrich
    );

    return NextResponse.json(result, { status: 200 });
  } catch (err: unknown) {
    console.error('API /api/analyze error:', err);
    return NextResponse.json(
      {
        error:
          'Terjadi kesalahan saat menghubungi layanan AI. Silakan periksa koneksi atau coba beberapa saat lagi.',
      },
      { status: 500 }
    );
  }
}
