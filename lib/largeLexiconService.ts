import fs from 'fs';
import path from 'path';
import { WordResult, CEFRLevel, WordClass } from './types';

export interface CompactLexiconEntry {
  word: string;
  displayWord: string;
  level: CEFRLevel;
  wordClass: WordClass;
  article: string;
  translation: string;
}

export interface LexiconStats {
  totalWords: number;
  levels: Record<CEFRLevel, number>;
}

class LargeLexiconService {
  private wordsMap: Map<string, CompactLexiconEntry> | null = null;
  private wordsList: CompactLexiconEntry[] | null = null;
  private stats: LexiconStats | null = null;
  private isInitializing = false;

  private ensureLoaded() {
    if (this.wordsMap && this.wordsList) {
      return;
    }
    if (this.isInitializing) {
      return;
    }
    this.isInitializing = true;

    try {
      const tsvPath = path.join(process.cwd(), 'lib', 'data', 'german_lexicon_250k.tsv');
      if (!fs.existsSync(tsvPath)) {
        console.warn(`[LargeLexiconService] TSV not found at ${tsvPath}`);
        this.wordsMap = new Map();
        this.wordsList = [];
        this.stats = {
          totalWords: 0,
          levels: { A1: 0, A2: 0, B1: 0, B2: 0, C1: 0, C2: 0, 'Level tidak pasti': 0 },
        };
        return;
      }

      const content = fs.readFileSync(tsvPath, 'utf8');
      const lines = content.split('\n');

      const map = new Map<string, CompactLexiconEntry>();
      const list: CompactLexiconEntry[] = [];
      const levels: Record<CEFRLevel, number> = {
        A1: 0,
        A2: 0,
        B1: 0,
        B2: 0,
        C1: 0,
        C2: 0,
        'Level tidak pasti': 0,
      };

      // Skip header line (index 0)
      for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;

        const parts = line.split('\t');
        if (parts.length >= 5) {
          const word = parts[0];
          const level = (parts[1] as CEFRLevel) || 'Level tidak pasti';
          const wordClass = (parts[2] as WordClass) || 'Nomen';
          const article = parts[3];
          const translation = parts[4];

          const displayWord = article && article !== '-' ? `${article} ${word}` : word;

          const entry: CompactLexiconEntry = {
            word,
            displayWord,
            level,
            wordClass,
            article,
            translation,
          };

          map.set(word.toLowerCase(), entry);
          list.push(entry);

          if (levels[level] !== undefined) {
            levels[level]++;
          }
        }
      }

      this.wordsMap = map;
      this.wordsList = list;
      this.stats = {
        totalWords: list.length,
        levels,
      };

      console.log(`[LargeLexiconService] Loaded ${list.length} words from 250k lexicon.`);
    } catch (err) {
      console.error('[LargeLexiconService] Failed to load lexicon:', err);
      this.wordsMap = new Map();
      this.wordsList = [];
    } finally {
      this.isInitializing = false;
    }
  }

  public getStats(): LexiconStats {
    this.ensureLoaded();
    return (
      this.stats || {
        totalWords: 0,
        levels: { A1: 0, A2: 0, B1: 0, B2: 0, C1: 0, C2: 0, 'Level tidak pasti': 0 },
      }
    );
  }

  public lookupWord(word: string): CompactLexiconEntry | null {
    this.ensureLoaded();
    if (!this.wordsMap || !word) return null;

    const lower = word.toLowerCase().trim();
    // 1. Direct match
    if (this.wordsMap.has(lower)) {
      return this.wordsMap.get(lower)!;
    }

    // 2. Without leading article
    const withoutArt = lower.replace(/^(der|die|das|ein|eine|einen|einem|einer)\s+/i, '').trim();
    if (this.wordsMap.has(withoutArt)) {
      return this.wordsMap.get(withoutArt)!;
    }

    return null;
  }

  public search(
    query: string,
    levelFilter: string = 'all',
    page: number = 1,
    limit: number = 30
  ): {
    results: CompactLexiconEntry[];
    total: number;
    page: number;
    totalPages: number;
  } {
    this.ensureLoaded();
    if (!this.wordsList) {
      return { results: [], total: 0, page: 1, totalPages: 0 };
    }

    const cleanQuery = query.toLowerCase().trim();
    const hasQuery = cleanQuery.length > 0;
    const hasLevel = levelFilter && levelFilter !== 'all';

    let matched: CompactLexiconEntry[] = [];

    // Optimize: if empty query, filter by level and slice
    if (!hasQuery && !hasLevel) {
      matched = this.wordsList;
    } else {
      matched = this.wordsList.filter((item) => {
        if (hasLevel && item.level !== levelFilter) {
          return false;
        }
        if (hasQuery) {
          const wordLower = item.word.toLowerCase();
          const transLower = item.translation.toLowerCase();
          return wordLower.includes(cleanQuery) || transLower.includes(cleanQuery);
        }
        return true;
      });
    }

    const total = matched.length;
    const safePage = Math.max(1, page);
    const safeLimit = Math.max(1, Math.min(100, limit));
    const offset = (safePage - 1) * safeLimit;
    const paginated = matched.slice(offset, offset + safeLimit);

    return {
      results: paginated,
      total,
      page: safePage,
      totalPages: Math.ceil(total / safeLimit),
    };
  }

  /**
   * Convert a compact entry into a rich WordResult structure for UI rendering
   */
  public toWordResult(entry: CompactLexiconEntry): WordResult {
    const isNoun = entry.wordClass === 'Nomen';
    const isVerb = entry.wordClass === 'Verb';
    const isAdj = entry.wordClass === 'Adjektiv';

    return {
      word: entry.word,
      displayWord: entry.displayWord,
      ipa: undefined,
      translations: [entry.translation],
      meaningSummary: isNoun
        ? `Kata benda (${entry.article}) dalam bahasa Jerman yang berarti "${entry.translation}". Bagian dari kosakata komprehensif level ${entry.level}.`
        : isVerb
        ? `Kata kerja dalam bahasa Jerman yang berarti "${entry.translation}". Bagian dari kosakata komprehensif level ${entry.level}.`
        : `Kosakata bahasa Jerman (${entry.wordClass}) yang berarti "${entry.translation}" (Level ${entry.level}).`,
      wordClass: entry.wordClass,
      cefrLevel: entry.level,
      grammar: isNoun
        ? {
            type: 'nomen',
            data: {
              artikel: (entry.article as any) || 'der',
              gender:
                entry.article === 'die'
                  ? 'feminin'
                  : entry.article === 'das'
                  ? 'neutral'
                  : 'maskulin',
              singular: entry.displayWord,
              plural: `${entry.word} (Plural)`,
            },
          }
        : isVerb
        ? {
            type: 'verb',
            data: {
              infinitiv: entry.word,
              praesens: `${entry.word}t`,
              praeteritum: `${entry.word}te`,
              partizip2: `ge${entry.word}t`,
              hilfsverb: 'haben',
              isIrregular: false,
            },
          }
        : isAdj
        ? {
            type: 'adjektiv',
            data: {
              positiv: entry.word,
              komparativ: `${entry.word}er`,
              superlativ: `am ${entry.word}sten`,
            },
          }
        : {
            type: 'general',
            data: {
              hinweis: `${entry.wordClass} bahasa Jerman level ${entry.level}.`,
            },
          },
      synonyms: [
        {
          word: entry.word,
          wordClass: entry.wordClass,
          translation: entry.translation,
        },
      ],
      antonyms: [],
      examples: [
        {
          level: entry.level,
          german: isNoun
            ? `Ich kenne ${entry.displayWord}.`
            : isVerb
            ? `Wir ${entry.word} regelmäßig.`
            : `Das ist sehr ${entry.word}.`,
          indonesian: `Contoh kalimat kontekstual untuk kata "${entry.word}".`,
          contextNote: `Penggunaan kosakata level ${entry.level}`,
        },
      ],
      learningTips: `Kata "${entry.word}" tergolong dalam kosakata level ${entry.level} (${entry.wordClass}). Perhatikan penulisan huruf besar/kecil dan konteks penggunaannya.`,
    };
  }
}

export const largeLexiconService = new LargeLexiconService();
