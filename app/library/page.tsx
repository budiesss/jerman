'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  getAllBooks,
  addBook,
  removeBook,
  savePdfBlob,
  deletePdfBlob,
  generateId,
  randomCoverColor,
  formatFileSize,
  BookMeta,
} from '@/lib/libraryStorage';
import Link from 'next/link';

export default function LibraryPage() {
  const [books, setBooks] = useState<BookMeta[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load from localStorage on mount
  useEffect(() => {
    setBooks(getAllBooks());
  }, []);

  const refresh = () => setBooks(getAllBooks());

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!fileInputRef.current) fileInputRef.current = null as any;
    if (!file) return;
    if (file.type !== 'application/pdf') {
      setUploadError('File harus berformat PDF.');
      return;
    }
    setUploading(true);
    setUploadError('');

    try {
      // Count pages using pdfjs
      const arrayBuffer = await file.arrayBuffer();
      const { getDocument, GlobalWorkerOptions } = await import('pdfjs-dist');
      GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const pdf: any = await getDocument({ data: arrayBuffer }).promise;
      const pageCount = pdf.numPages;


      const id = generateId();
      const meta: BookMeta = {
        id,
        title: file.name.replace(/\.pdf$/i, ''),
        fileName: file.name,
        fileSize: file.size,
        pageCount,
        addedAt: new Date().toISOString(),
        coverColor: randomCoverColor(),
      };

      // Save blob to IndexedDB
      await savePdfBlob(id, file);
      addBook(meta);
      refresh();
    } catch (err) {
      console.error(err);
      setUploadError('Gagal membaca file PDF. Pastikan file tidak rusak.');
    } finally {
      setUploading(false);
      // Reset file input
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleDelete = async (id: string) => {
    await deletePdfBlob(id);
    removeBook(id);
    setDeleteConfirm(null);
    refresh();
  };

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div style={{ marginBottom: 28 }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '6px 16px',
            borderRadius: 'var(--radius-pill)',
            background: 'var(--accent-glow)',
            color: 'var(--accent-primary)',
            fontSize: '0.85rem',
            fontWeight: 700,
            marginBottom: 12,
            border: '1px solid var(--border-subtle)',
          }}
        >
          <span>📚</span>
          <span>Perpustakaan Buku Jerman</span>
        </div>
        <h1 className="hero-title">Bibliothek — Perpustakaan</h1>
        <p className="hero-subtitle">
          Upload buku PDF bahasa Jerman. Buka buku dan <strong>pilih teks</strong> untuk menerjemahkan
          kata atau kalimat secara langsung — seperti Google Lens.
        </p>
      </div>

      {/* Upload Zone */}
      <div
        className="card"
        style={{
          marginBottom: 28,
          padding: '28px',
          background: 'var(--bg-surface)',
          border: '2px dashed var(--border-strong)',
          textAlign: 'center',
          cursor: 'pointer',
          transition: 'all var(--transition-fast)',
          position: 'relative',
        }}
        onClick={() => fileInputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          e.currentTarget.style.borderColor = 'var(--accent-primary)';
          e.currentTarget.style.background = 'var(--accent-glow)';
        }}
        onDragLeave={(e) => {
          e.currentTarget.style.borderColor = 'var(--border-strong)';
          e.currentTarget.style.background = 'var(--bg-surface)';
        }}
        onDrop={async (e) => {
          e.preventDefault();
          e.currentTarget.style.borderColor = 'var(--border-strong)';
          e.currentTarget.style.background = 'var(--bg-surface)';
          const file = e.dataTransfer.files?.[0];
          if (file) {
            // Simulate file input change
            const dt = new DataTransfer();
            dt.items.add(file);
            if (fileInputRef.current) {
              fileInputRef.current.files = dt.files;
              fileInputRef.current.dispatchEvent(new Event('change', { bubbles: true }));
            }
          }
        }}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="application/pdf"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />

        {uploading ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
            <div className="lib-spinner" />
            <p style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>Memproses PDF...</p>
          </div>
        ) : (
          <>
            <div style={{ fontSize: '2.5rem', marginBottom: 10 }}>📄</div>
            <p style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)', marginBottom: 4 }}>
              Drag & drop PDF di sini, atau klik untuk memilih file
            </p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Format: PDF · Tidak ada batas ukuran
            </p>
          </>
        )}

        {uploadError && (
          <div
            style={{
              marginTop: 12,
              padding: '8px 14px',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(220,38,38,0.12)',
              border: '1px solid rgba(220,38,38,0.3)',
              color: '#f87171',
              fontSize: '0.88rem',
              fontWeight: 500,
            }}
          >
            ⚠️ {uploadError}
          </div>
        )}
      </div>

      {/* Book Grid */}
      {books.length === 0 ? (
        <div
          className="card"
          style={{
            textAlign: 'center',
            padding: '48px 24px',
            background: 'var(--bg-surface-subtle)',
            border: '1px solid var(--border-subtle)',
          }}
        >
          <div style={{ fontSize: '3rem', marginBottom: 12 }}>📚</div>
          <p style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: 6 }}>
            Perpustakaan Kosong
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Upload file PDF buku bahasa Jerman untuk mulai membaca dan menerjemahkan.
          </p>
        </div>
      ) : (
        <>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 16,
            }}
          >
            <h2 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-secondary)' }}>
              {books.length} Buku Tersimpan
            </h2>
          </div>
          <div className="library-grid">
            {books.map((book) => (
              <div key={book.id} className="book-card">
                {/* Cover */}
                <Link href={`/library/${book.id}`} style={{ textDecoration: 'none', display: 'block' }}>
                  <div
                    className="book-cover"
                    style={{ background: `linear-gradient(135deg, ${book.coverColor}cc, ${book.coverColor}66)` }}
                  >
                    <div className="book-spine" style={{ background: book.coverColor }} />
                    <div className="book-cover-content">
                      <div style={{ fontSize: '2rem', marginBottom: 8 }}>📖</div>
                      <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#fff', textAlign: 'center', lineHeight: 1.3, padding: '0 8px', wordBreak: 'break-word' }}>
                        {book.title.length > 40 ? book.title.slice(0, 40) + '…' : book.title}
                      </div>
                    </div>
                    {book.lastPage && (
                      <div className="book-progress-badge">
                        Hal. {book.lastPage}/{book.pageCount}
                      </div>
                    )}
                  </div>
                </Link>

                {/* Info */}
                <div className="book-info">
                  <Link href={`/library/${book.id}`} style={{ textDecoration: 'none' }}>
                    <h3 className="book-title">{book.title}</h3>
                  </Link>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 4 }}>
                    <span className="badge badge-general" style={{ fontSize: '0.72rem' }}>
                      {book.pageCount} hal.
                    </span>
                    <span className="badge badge-general" style={{ fontSize: '0.72rem' }}>
                      {formatFileSize(book.fileSize)}
                    </span>
                  </div>
                  <div style={{ marginTop: 8, display: 'flex', gap: 8 }}>
                    <Link href={`/library/${book.id}`} className="btn btn-primary" style={{ flex: 1, fontSize: '0.85rem', padding: '8px 12px', justifyContent: 'center' }}>
                      Buka &amp; Baca
                    </Link>
                    <button
                      type="button"
                      className="btn btn-ghost btn-icon"
                      style={{ borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', color: '#f87171', width: 38, height: 38 }}
                      title="Hapus buku"
                      onClick={() => setDeleteConfirm(book.id)}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="3 6 5 6 21 6" />
                        <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                        <path d="M10 11v6" />
                        <path d="M14 11v6" />
                        <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Delete Confirm Modal */}
      {deleteConfirm && (
        <div className="modal-overlay" onClick={() => setDeleteConfirm(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div style={{ fontSize: '2rem', marginBottom: 12 }}>🗑️</div>
            <h3 style={{ fontWeight: 700, marginBottom: 8, color: 'var(--text-primary)' }}>Hapus Buku?</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: 20 }}>
              File PDF akan dihapus permanen dari perangkat Anda.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              <button className="btn btn-secondary" style={{ flex: 1 }} onClick={() => setDeleteConfirm(null)}>
                Batal
              </button>
              <button
                className="btn"
                style={{ flex: 1, background: '#dc2626', color: '#fff', border: 'none' }}
                onClick={() => handleDelete(deleteConfirm)}
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
