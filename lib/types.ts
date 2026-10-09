export type LanguageMode = 'de-id' | 'id-de';

export type WordClass =
  | 'Nomen'
  | 'Verb'
  | 'Modalverb'
  | 'Hilfsverb'
  | 'Vollverb'
  | 'Adjektiv'
  | 'Adverb'
  | 'Pronomen'
  | 'Personalpronomen'
  | 'Possessivpronomen'
  | 'Reflexivpronomen'
  | 'Demonstrativpronomen'
  | 'Relativpronomen'
  | 'Interrogativpronomen'
  | 'Indefinitpronomen'
  | 'Artikel'
  | 'Bestimmter Artikel'
  | 'Unbestimmter Artikel'
  | 'Präposition'
  | 'Konjunktion'
  | 'Subjunktion'
  | 'Partikel'
  | 'Interjektion'
  | 'Numerale'
  | 'Eigenname'
  | 'Redewendung';

export type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2' | 'Level tidak pasti';

export type Gender = 'maskulin' | 'feminin' | 'neutral' | 'plural' | 'kein Gender';
export type GermanArticle = 'der' | 'die' | 'das' | '-';

export interface NounGrammar {
  artikel: GermanArticle;
  gender: Gender;
  singular: string;
  plural: string;
  genitivSingular?: string;
}

export interface VerbGrammar {
  infinitiv: string;
  praesens: string; // 3. Person (er/sie/es)
  praeteritum: string;
  partizip2: string;
  hilfsverb: 'haben' | 'sein' | 'haben / sein';
  isIrregular: boolean; // Unregelmäßiges Verb
  isSeparable?: boolean; // Trennbares Verb
  prefix?: string;
  reflexiv?: boolean;
}

export interface AdjectiveGrammar {
  positiv: string;
  komparativ: string;
  superlativ: string;
}

export interface PrepositionGrammar {
  kasus: 'Akkusativ' | 'Dativ' | 'Genitiv' | 'Wechselpräposition (Akk/Dat)' | 'Dativ / Genitiv';
  exampleUsage?: string;
}

export interface GeneralGrammar {
  kasus?: 'Nominativ' | 'Akkusativ' | 'Dativ' | 'Genitiv';
  numerus?: 'Singular' | 'Plural';
  person?: '1. Person' | '2. Person' | '3. Person';
  hinweis?: string;
}

export type GrammarDetails =
  | { type: 'nomen'; data: NounGrammar }
  | { type: 'verb'; data: VerbGrammar }
  | { type: 'adjektiv'; data: AdjectiveGrammar }
  | { type: 'praeposition'; data: PrepositionGrammar }
  | { type: 'general'; data: GeneralGrammar };

export interface SynonymItem {
  word: string;
  article?: GermanArticle;
  wordClass: string;
  translation: string;
}

export interface AntonymItem {
  word: string;
  article?: GermanArticle;
  wordClass: string;
  translation: string;
}

export interface ExampleSentence {
  level: CEFRLevel;
  german: string;
  indonesian: string;
  contextNote?: string;
}

export interface CompoundPart {
  part: string; // kata komponen (e.g. "die Hand", "der Schuh", "krank", dll.)
  article?: GermanArticle;
  wordClass?: string; // e.g. "Nomen", "Verb", "Adjektiv", "Präposition", "Fugenelement"
  meaning: string; // arti dalam bahasa Indonesia
  role?: 'Bestimmungswort' | 'Grundwort' | 'Fugenelement' | string;
}

export interface CompoundBreakdown {
  isCompound: boolean;
  components: CompoundPart[];
  explanation: string; // Penjelasan ringkas proses pembentukan dan arti harfiah vs arti sebenarnya
  headWordRule?: string; // Penjelasan aturan gender/artikel yang ditentukan oleh kata terakhir (Grundwort)
}

export interface InflectionInfo {
  isInflectedForm: boolean;
  searchedForm: string; // Kata yang dicari pengguna (misal "dem Mann", "Häuser", "ging", "schönen")
  baseForm: string; // Bentuk dasar lengkap kamus (misal "der Mann", "das Haus", "gehen", "schön")
  baseWord: string; // Bentuk kata dasar tanpa artikel (misal "Mann", "Haus", "gehen", "schön")
  grammaticalForm: string; // Nama bentuk (misal "Kasus Dativ Singular", "Plural (Bentuk Jamak)", "Präteritum Lampau")
  explanation: string; // Penjelasan bahasa Indonesia edukatif lengkap
  originalCaseOrTense?: string;
}

export interface TypoCorrection {
  originalInput: string; // Kata typo yang diketik pengguna (misal "freziet")
  suggestedWord: string; // Kata yang disarankan (misal "Freizeit")
  displaySuggestedWord: string; // misal "die Freizeit"
  explanation: string; // Penjelasan koreksi typo
  confidence: number;
}

export interface WordResult {
  word: string;
  displayWord: string;
  ipa?: string;
  translations: string[];
  meaningSummary: string;
  wordClass: WordClass;
  cefrLevel?: CEFRLevel;
  grammar: GrammarDetails;
  synonyms: SynonymItem[];
  antonyms: AntonymItem[];
  examples: ExampleSentence[];
  learningTips?: string;
  falseFriendsWarning?: string; // e.g., bekommen != become
  compoundBreakdown?: CompoundBreakdown;
  inflectionInfo?: InflectionInfo;
  typoCorrection?: TypoCorrection;
}

export interface SentenceTokenAnalysis {
  token: string;
  lemma: string;
  translation: string;
  wordClass: WordClass;
  grammaticalInfo: string;
  isSearchableWord?: boolean;
}

export interface SentenceResult {
  originalSentence: string;
  translatedSentence: string;
  sourceLang: 'de' | 'id';
  targetLang: 'de' | 'id';
  literalTranslation?: string;
  sentenceStructureExplanation: string;
  grammarHighlights: string[];
  alternatives?: Array<{
    sentence: string;
    nuance: string;
  }>;
  wordByWordAnalysis: SentenceTokenAnalysis[];
  keyVocabulary: Array<{
    word: string;
    article?: GermanArticle;
    wordClass: string;
    translation: string;
  }>;
}

export interface WordRecommendation {
  word: string;
  article?: GermanArticle;
  translation: string;
  reason: string;
  confidence: number;
}

export interface UmlautSentenceOption {
  originalSentence: string;
  suggestedSentence: string;
  changedWords: Array<{
    from: string;
    to: string;
    meaning: string;
  }>;
  explanation: string;
}

export interface AnalyzeResponse {
  input: string;
  mode: LanguageMode;
  inputType: 'word' | 'sentence';
  recommendations?: WordRecommendation[];
  sentenceUmlautOptions?: UmlautSentenceOption[];
  wordResult?: WordResult;
  sentenceResult?: SentenceResult;
  error?: string;
  inflectionInfo?: InflectionInfo;
  typoCorrection?: TypoCorrection;
}

export interface HistoryItem {
  id: string;
  input: string;
  translationSummary: string;
  mode: LanguageMode;
  inputType: 'word' | 'sentence';
  createdAt: string; // ISO string
  fullResult: AnalyzeResponse;
}

export interface FavoriteWordItem {
  id: string;
  word: string;
  article?: GermanArticle;
  wordClass: string;
  translations: string[];
  cefrLevel?: CEFRLevel;
  createdAt: string;
  fullWordResult: WordResult;
}

export interface UserSettings {
  theme: 'light' | 'dark' | 'system';
  customApiKey?: string;
  aiProvider?: 'gemini' | 'openai' | 'default';
  speechRate: number; // 0.8 - 1.2
  autoPronounce: boolean;
}
