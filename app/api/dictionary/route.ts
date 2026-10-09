import { NextRequest, NextResponse } from 'next/server';
import { largeLexiconService } from '@/lib/largeLexiconService';
import { GERMAN_DICTIONARY } from '@/lib/germanDictionaryData';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  try {
    const query = searchParams.get('q') || '';
    const level = searchParams.get('level') || 'all';
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '30', 10);
    const lookupWord = searchParams.get('lookup') || '';

    // If requesting statistics
    if (searchParams.get('stats') === 'true') {
      const stats = largeLexiconService.getStats();
      return NextResponse.json({
        success: true,
        stats,
      });
    }

    // If requesting specific word details
    if (lookupWord) {
      // 1. Check curated dictionary first
      const cleanLower = lookupWord.toLowerCase().replace(/^(der|die|das)\s+/i, '').trim();
      const curatedMatch = GERMAN_DICTIONARY[cleanLower] || GERMAN_DICTIONARY[lookupWord];
      if (curatedMatch) {
        return NextResponse.json({
          success: true,
          source: 'curated',
          wordResult: curatedMatch,
        });
      }

      // 2. Check 250k lexicon
      const lexiconMatch = largeLexiconService.lookupWord(lookupWord);
      if (lexiconMatch) {
        const wordResult = largeLexiconService.toWordResult(lexiconMatch);
        return NextResponse.json({
          success: true,
          source: '250k_lexicon',
          wordResult,
        });
      }

      return NextResponse.json(
        { success: false, message: 'Kata tidak ditemukan dalam kamus 250.000 kata.' },
        { status: 404 }
      );
    }

    // Default: Search & paginate through the 250k database
    const searchResult = largeLexiconService.search(query, level, page, limit);

    return NextResponse.json({
      success: true,
      query,
      level,
      ...searchResult,
      totalCatalogWords: largeLexiconService.getStats().totalWords,
    });
  } catch (error: any) {
    console.error('API /api/dictionary error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
