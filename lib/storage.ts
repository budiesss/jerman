import { HistoryItem, FavoriteWordItem, UserSettings, WordResult, AnalyzeResponse } from './types';

const HISTORY_KEY = 'deutsch_lernen_history_v1';
const FAVORITES_KEY = 'deutsch_lernen_favorites_v1';
const SETTINGS_KEY = 'deutsch_lernen_settings_v1';

export const DEFAULT_SETTINGS: UserSettings = {
  theme: 'dark',
  customApiKey: '',
  aiProvider: 'default',
  speechRate: 0.9,
  autoPronounce: false,
};

// Check if running in browser
function isBrowser(): boolean {
  return typeof window !== 'undefined';
}

/* ================= HISTORY ================= */
export function getHistory(): HistoryItem[] {
  if (!isBrowser()) return [];
  try {
    const data = localStorage.getItem(HISTORY_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Error reading history from localStorage', e);
    return [];
  }
}

export function saveHistoryItem(
  input: string,
  fullResult: AnalyzeResponse
): HistoryItem | null {
  if (!isBrowser() || !input.trim()) return null;
  try {
    const current = getHistory();

    // Summary description
    let summary = '';
    if (fullResult.wordResult) {
      summary = fullResult.wordResult.translations.slice(0, 3).join(', ');
    } else if (fullResult.sentenceResult) {
      summary = fullResult.sentenceResult.translatedSentence;
    } else {
      summary = 'Hasil terjemahan';
    }

    // Filter out existing identical input to move to top
    const filtered = current.filter(
      (item) => item.input.toLowerCase() !== input.toLowerCase()
    );

    const newItem: HistoryItem = {
      id: `hist_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      input,
      translationSummary: summary,
      mode: fullResult.mode,
      inputType: fullResult.inputType,
      createdAt: new Date().toISOString(),
      fullResult,
    };

    // Store up to 100 recent searches
    const updated = [newItem, ...filtered].slice(0, 100);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
    return newItem;
  } catch (e) {
    console.error('Error saving history item', e);
    return null;
  }
}

export function deleteHistoryItem(id: string): void {
  if (!isBrowser()) return;
  try {
    const current = getHistory();
    const updated = current.filter((item) => item.id !== id);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Error deleting history item', e);
  }
}

export function clearAllHistory(): void {
  if (!isBrowser()) return;
  try {
    localStorage.removeItem(HISTORY_KEY);
  } catch (e) {
    console.error('Error clearing history', e);
  }
}

/* ================= FAVORITES ================= */
export function getFavorites(): FavoriteWordItem[] {
  if (!isBrowser()) return [];
  try {
    const data = localStorage.getItem(FAVORITES_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Error reading favorites from localStorage', e);
    return [];
  }
}

export function isFavorite(word: string): boolean {
  if (!isBrowser() || !word) return false;
  const current = getFavorites();
  const clean = word.toLowerCase().trim();
  return current.some((f) => f.word.toLowerCase().trim() === clean);
}

export function toggleFavorite(wordResult: WordResult): boolean {
  if (!isBrowser()) return false;
  try {
    const current = getFavorites();
    const cleanWord = wordResult.word.toLowerCase().trim();
    const index = current.findIndex((f) => f.word.toLowerCase().trim() === cleanWord);

    if (index >= 0) {
      // Remove
      current.splice(index, 1);
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(current));
      return false; // Now not favorited
    } else {
      // Add
      const article =
        wordResult.grammar.type === 'nomen'
          ? wordResult.grammar.data.artikel
          : undefined;

      const newFav: FavoriteWordItem = {
        id: `fav_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        word: wordResult.word,
        article,
        wordClass: wordResult.wordClass,
        translations: wordResult.translations,
        cefrLevel: wordResult.cefrLevel,
        createdAt: new Date().toISOString(),
        fullWordResult: wordResult,
      };

      const updated = [newFav, ...current];
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
      return true; // Now favorited
    }
  } catch (e) {
    console.error('Error toggling favorite', e);
    return false;
  }
}

export function removeFavorite(id: string): void {
  if (!isBrowser()) return;
  try {
    const current = getFavorites();
    const updated = current.filter((item) => item.id !== id);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Error removing favorite', e);
  }
}

export function clearAllFavorites(): void {
  if (!isBrowser()) return;
  try {
    localStorage.removeItem(FAVORITES_KEY);
  } catch (e) {
    console.error('Error clearing favorites', e);
  }
}

/* ================= SETTINGS ================= */
export function getSettings(): UserSettings {
  if (!isBrowser()) return DEFAULT_SETTINGS;
  try {
    const data = localStorage.getItem(SETTINGS_KEY);
    return data ? { ...DEFAULT_SETTINGS, ...JSON.parse(data) } : DEFAULT_SETTINGS;
  } catch (e) {
    console.error('Error reading settings', e);
    return DEFAULT_SETTINGS;
  }
}

export function saveSettings(settings: Partial<UserSettings>): UserSettings {
  if (!isBrowser()) return DEFAULT_SETTINGS;
  try {
    const current = getSettings();
    const updated = { ...current, ...settings };
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(updated));

    // Apply theme
    applyTheme(updated.theme);

    return updated;
  } catch (e) {
    console.error('Error saving settings', e);
    return DEFAULT_SETTINGS;
  }
}

export function applyTheme(theme: 'light' | 'dark' | 'system'): void {
  if (!isBrowser()) return;
  const root = document.documentElement;

  if (theme === 'system') {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    root.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
  } else {
    root.setAttribute('data-theme', theme);
  }
}
