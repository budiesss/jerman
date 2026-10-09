/**
 * Library Storage — IndexedDB for PDF blobs + localStorage for metadata
 * Uses IndexedDB because PDFs can be megabytes (too large for localStorage).
 */

export interface BookMeta {
  id: string;
  title: string;
  fileName: string;
  fileSize: number;
  pageCount: number;
  addedAt: string;
  lastOpenedAt?: string;
  lastPage?: number;
  coverColor: string; // random color for cover placeholder
}

const DB_NAME = 'deutschlernen_library';
const DB_VERSION = 1;
const STORE_NAME = 'pdfs';
const META_KEY = 'deutsch_library_meta_v1';

// ─── IndexedDB helpers ─────────────────────────────────────────────────────

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      req.result.createObjectStore(STORE_NAME);
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

export async function savePdfBlob(id: string, blob: Blob): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    tx.objectStore(STORE_NAME).put(blob, id);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

export async function getPdfBlob(id: string): Promise<Blob | null> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readonly');
    const req = tx.objectStore(STORE_NAME).get(id);
    req.onsuccess = () => resolve(req.result ?? null);
    req.onerror = () => reject(req.error);
  });
}

export async function deletePdfBlob(id: string): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    tx.objectStore(STORE_NAME).delete(id);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

// ─── Metadata helpers (localStorage) ──────────────────────────────────────

export function getAllBooks(): BookMeta[] {
  try {
    return JSON.parse(localStorage.getItem(META_KEY) || '[]');
  } catch {
    return [];
  }
}

function saveAllBooks(books: BookMeta[]): void {
  try {
    localStorage.setItem(META_KEY, JSON.stringify(books));
  } catch {
    // storage full – ignore
  }
}

export function getBook(id: string): BookMeta | null {
  return getAllBooks().find((b) => b.id === id) ?? null;
}

export function addBook(meta: BookMeta): void {
  const books = getAllBooks().filter((b) => b.id !== meta.id);
  books.unshift(meta);
  saveAllBooks(books);
}

export function updateBook(id: string, patch: Partial<BookMeta>): void {
  const books = getAllBooks().map((b) => (b.id === id ? { ...b, ...patch } : b));
  saveAllBooks(books);
}

export function removeBook(id: string): void {
  saveAllBooks(getAllBooks().filter((b) => b.id !== id));
}

// ─── Misc ──────────────────────────────────────────────────────────────────

const COVER_COLORS = [
  '#2563eb', '#7c3aed', '#db2777', '#dc2626',
  '#d97706', '#059669', '#0891b2', '#4f46e5',
];

export function randomCoverColor(): string {
  return COVER_COLORS[Math.floor(Math.random() * COVER_COLORS.length)];
}

export function generateId(): string {
  return `book_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
