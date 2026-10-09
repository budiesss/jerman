'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FavoriteWordItem } from '@/lib/types';
import { getFavorites, removeFavorite, clearAllFavorites } from '@/lib/storage';
import WordTypeBadge from '@/components/WordTypeBadge';
import AudioButton from '@/components/AudioButton';
import WordResultCard from '@/components/WordResultCard';

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<FavoriteWordItem[]>([]);
  const [selectedFav, setSelectedFav] = useState<FavoriteWordItem | null>(null);
  const [filterClass, setFilterClass] = useState<string>('all');
  const [filterLevel, setFilterLevel] = useState<string>('all');
  const [isFlashcardMode, setIsFlashcardMode] = useState(false);
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  const handleRemove = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    removeFavorite(id);
    const updated = getFavorites();
    setFavorites(updated);
    if (selectedFav?.id === id) {
      setSelectedFav(null);
    }
  };

  const handleClearAll = () => {
    if (confirm('Apakah Anda yakin ingin menghapus semua kata favorit?')) {
      clearAllFavorites();
      setFavorites([]);
      setSelectedFav(null);
      setIsFlashcardMode(false);
    }
  };

  const filteredFavorites = favorites.filter((item) => {
    const matchesClass =
      filterClass === 'all' || item.wordClass === filterClass;
    const matchesLevel =
      filterLevel === 'all' || item.cefrLevel === filterLevel;
    return matchesClass && matchesLevel;
  });

  return (
    <div>
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 16,
          marginBottom: 24,
        }}
      >
        <div>
          <h1
            style={{
              fontSize: '2.2rem',
              fontWeight: 800,
              letterSpacing: '-0.5px',
              color: 'var(--text-primary)',
            }}
          >
            Meine Wörter (Kata Saya)
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginTop: 4 }}>
            Koleksi kosakata bahasa Jerman yang Anda simpan untuk diulang dan dipelajari.
          </p>
        </div>

        {favorites.length > 0 && (
          <div style={{ display: 'flex', gap: 10 }}>
            <button
              type="button"
              onClick={() => {
                setIsFlashcardMode(!isFlashcardMode);
                setFlashcardIndex(0);
                setIsFlipped(false);
              }}
              className={`btn ${isFlashcardMode ? 'btn-primary' : 'btn-secondary'}`}
              style={{ fontSize: '0.88rem' }}
            >
              <span>🗂️</span>
              <span>{isFlashcardMode ? 'Tutup Flashcard' : 'Mode Flashcard'}</span>
            </button>

            <button
              type="button"
              onClick={handleClearAll}
              className="btn btn-ghost"
              style={{
                color: '#ef4444',
                borderColor: 'rgba(239, 68, 68, 0.3)',
                background: 'rgba(239, 68, 68, 0.08)',
                fontSize: '0.88rem',
              }}
            >
              Hapus Semua
            </button>
          </div>
        )}
      </div>

      {/* Empty State */}
      {favorites.length === 0 ? (
        <div
          className="card"
          style={{
            textAlign: 'center',
            padding: '60px 20px',
            background: 'var(--bg-surface)',
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: '50%',
              background: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              margin: '0 auto 16px auto',
            }}
          >
            ⭐
          </div>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)' }}>
            Belum ada kata yang disimpan.
          </h2>
          <p
            style={{
              fontSize: '0.95rem',
              color: 'var(--text-secondary)',
              maxWidth: 440,
              margin: '8px auto 20px auto',
            }}
          >
            Klik ikon bintang ⭐ di samping kata yang Anda pelajari untuk
            menambahkannya ke daftar kosakata pribadi ini.
          </p>
          <Link href="/" className="btn btn-primary">
            Cari Kata Sekarang →
          </Link>
        </div>
      ) : isFlashcardMode ? (
        /* Flashcard Study Mode */
        <div
          className="card"
          style={{
            maxWidth: 580,
            margin: '0 auto',
            padding: 36,
            textAlign: 'center',
            background: 'var(--bg-surface)',
          }}
        >
          <div
            style={{
              fontSize: '0.82rem',
              color: 'var(--text-muted)',
              marginBottom: 16,
              fontWeight: 600,
            }}
          >
            Kartu {flashcardIndex + 1} dari {favorites.length}
          </div>

          <div
            onClick={() => setIsFlipped(!isFlipped)}
            style={{
              minHeight: 220,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 24,
              borderRadius: 'var(--radius-lg)',
              background: 'var(--bg-surface-elevated)',
              border: '2px dashed var(--border-strong)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            {!isFlipped ? (
              <div>
                <div
                  style={{
                    fontSize: '2.4rem',
                    fontWeight: 800,
                    color: 'var(--accent-primary)',
                    marginBottom: 10,
                  }}
                >
                  {favorites[flashcardIndex].word}
                </div>
                <WordTypeBadge
                  wordClass={favorites[flashcardIndex].wordClass}
                  article={favorites[flashcardIndex].article}
                  cefrLevel={favorites[flashcardIndex].cefrLevel}
                />
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: 14 }}>
                  (Klik kartu untuk melihat arti & penjelasan)
                </div>
              </div>
            ) : (
              <div>
                <div
                  style={{
                    fontSize: '1.6rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: 10,
                  }}
                >
                  {favorites[flashcardIndex].translations.join(', ')}
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  {favorites[flashcardIndex].fullWordResult.meaningSummary}
                </p>
                <div style={{ marginTop: 12 }}>
                  <AudioButton text={favorites[flashcardIndex].word} label="Dengarkan" />
                </div>
              </div>
            )}
          </div>

          {/* Controls */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 12,
              marginTop: 24,
            }}
          >
            <button
              type="button"
              disabled={flashcardIndex === 0}
              onClick={() => {
                setFlashcardIndex((i) => Math.max(0, i - 1));
                setIsFlipped(false);
              }}
              className="btn btn-secondary"
            >
              ← Sebelumnya
            </button>

            <button
              type="button"
              onClick={() => setIsFlipped(!isFlipped)}
              className="btn btn-primary"
            >
              {isFlipped ? 'Lihat Bahasa Jerman' : 'Buka Jawaban'}
            </button>

            <button
              type="button"
              disabled={flashcardIndex >= favorites.length - 1}
              onClick={() => {
                setFlashcardIndex((i) => Math.min(favorites.length - 1, i + 1));
                setIsFlipped(false);
              }}
              className="btn btn-secondary"
            >
              Berikutnya →
            </button>
          </div>
        </div>
      ) : (
        /* Standard Vocabulary Grid & Detail View */
        <div>
          {/* Filters */}
          <div
            style={{
              display: 'flex',
              gap: 12,
              marginBottom: 16,
              flexWrap: 'wrap',
            }}
          >
            <select
              value={filterClass}
              onChange={(e) => setFilterClass(e.target.value)}
              style={{
                padding: '8px 14px',
                borderRadius: 'var(--radius-sm)',
                background: 'var(--bg-surface-elevated)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-primary)',
                fontSize: '0.88rem',
                outline: 'none',
              }}
            >
              <option value="all">Semua Jenis Kata</option>
              <option value="Nomen">Nomen</option>
              <option value="Verb">Verb</option>
              <option value="Modalverb">Modalverb</option>
              <option value="Adjektiv">Adjektiv</option>
              <option value="Adverb">Adverb</option>
              <option value="Präposition">Präposition</option>
            </select>

            <select
              value={filterLevel}
              onChange={(e) => setFilterLevel(e.target.value)}
              style={{
                padding: '8px 14px',
                borderRadius: 'var(--radius-sm)',
                background: 'var(--bg-surface-elevated)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-primary)',
                fontSize: '0.88rem',
                outline: 'none',
              }}
            >
              <option value="all">Semua Level</option>
              <option value="A1">A1</option>
              <option value="A2">A2</option>
              <option value="B1">B1</option>
              <option value="B2">B2</option>
              <option value="C1">C1</option>
              <option value="C2">C2</option>
            </select>
          </div>

          <div
            className={selectedFav ? "responsive-split-col" : ""}
            style={{
              display: 'grid',
              gridTemplateColumns: selectedFav ? undefined : 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: 16,
              alignItems: 'start',
            }}
          >
            {/* List / Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {filteredFavorites.map((item) => {
                const isSelected = selectedFav?.id === item.id;

                return (
                  <div
                    key={item.id}
                    onClick={() => setSelectedFav(item)}
                    className="card"
                    style={{
                      padding: '16px 20px',
                      cursor: 'pointer',
                      background: isSelected
                        ? 'var(--accent-glow)'
                        : 'var(--bg-surface)',
                      borderColor: isSelected
                        ? 'var(--accent-primary)'
                        : 'var(--border-subtle)',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <strong
                            style={{
                              fontSize: '1.2rem',
                              color: 'var(--text-primary)',
                            }}
                          >
                            {item.article ? `${item.article} ` : ''}
                            {item.word}
                          </strong>
                          <AudioButton text={item.word} size="sm" />
                        </div>
                        <div
                          style={{
                            fontSize: '0.9rem',
                            color: 'var(--text-secondary)',
                            marginTop: 4,
                          }}
                        >
                          {item.translations.join(', ')}
                        </div>
                        <div style={{ marginTop: 8 }}>
                          <WordTypeBadge
                            wordClass={item.wordClass}
                            article={item.article}
                            cefrLevel={item.cefrLevel}
                            size="sm"
                          />
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={(e) => handleRemove(e, item.id)}
                        className="btn btn-ghost btn-icon"
                        style={{ color: '#f59e0b' }}
                        title="Hapus dari favorit"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="#f59e0b" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Selected Word Full Card */}
            {selectedFav && (
              <div style={{ position: 'sticky', top: 90 }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 10,
                  }}
                >
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    Kamus Lengkap: {selectedFav.word}
                  </h3>
                  <button
                    type="button"
                    onClick={() => setSelectedFav(null)}
                    className="btn btn-ghost btn-icon"
                    style={{ width: 30, height: 30 }}
                  >
                    ✕
                  </button>
                </div>
                <WordResultCard result={selectedFav.fullWordResult} />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
