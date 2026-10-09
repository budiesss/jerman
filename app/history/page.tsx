'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { HistoryItem } from '@/lib/types';
import { getHistory, deleteHistoryItem, clearAllHistory } from '@/lib/storage';
import WordResultCard from '@/components/WordResultCard';
import SentenceResultCard from '@/components/SentenceResultCard';

export default function HistoryPage() {
  const [historyItems, setHistoryItems] = useState<HistoryItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState<HistoryItem | null>(null);

  useEffect(() => {
    setHistoryItems(getHistory());
  }, []);

  const handleDelete = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    deleteHistoryItem(id);
    const updated = getHistory();
    setHistoryItems(updated);
    if (selectedItem?.id === id) {
      setSelectedItem(null);
    }
  };

  const handleClearAll = () => {
    if (confirm('Apakah Anda yakin ingin menghapus seluruh riwayat pencarian?')) {
      clearAllHistory();
      setHistoryItems([]);
      setSelectedItem(null);
    }
  };

  const filteredItems = historyItems.filter((item) => {
    const q = searchTerm.toLowerCase();
    return (
      item.input.toLowerCase().includes(q) ||
      item.translationSummary.toLowerCase().includes(q)
    );
  });

  const formatTimestamp = (iso: string) => {
    try {
      const d = new Date(iso);
      return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ' ' + d.toLocaleDateString([], { month: 'short', day: 'numeric' });
    } catch {
      return '';
    }
  };

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
            Verlauf (Riwayat Pencarian)
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginTop: 4 }}>
            Semua kata dan kalimat yang pernah Anda terjemahkan dan pelajari.
          </p>
        </div>

        {historyItems.length > 0 && (
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
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
            </svg>
            Hapus Seluruh Riwayat
          </button>
        )}
      </div>

      {/* Empty State */}
      {historyItems.length === 0 ? (
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
            📜
          </div>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)' }}>
            Belum ada riwayat pencarian.
          </h2>
          <p
            style={{
              fontSize: '0.95rem',
              color: 'var(--text-secondary)',
              maxWidth: 440,
              margin: '8px auto 20px auto',
            }}
          >
            Setiap kata atau kalimat yang Anda cari akan otomatis tersimpan di sini
            sehingga Anda dapat mengulasnya kembali kapan saja.
          </p>
          <Link href="/" className="btn btn-primary">
            Mulai Menerjemahkan →
          </Link>
        </div>
      ) : (
        <div>
          {/* Search within History Filter */}
          <div style={{ marginBottom: 16 }}>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Cari dalam riwayat pencarian..."
              style={{
                width: '100%',
                maxWidth: 420,
                padding: '10px 16px',
                fontSize: '0.95rem',
                color: 'var(--text-primary)',
                background: 'var(--bg-input)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                outline: 'none',
              }}
            />
          </div>

          {/* Master-Detail or Table View */}
          <div className={selectedItem ? "responsive-split-col" : ""}>
            {/* History Table List */}
            <div className="table-container" style={{ margin: 0 }}>
              <table className="data-table">
                <thead>
                  <tr>
                    <th style={{ width: '30%' }}>Input Asli</th>
                    <th style={{ width: '35%' }}>Hasil Terjemahan</th>
                    <th style={{ width: '15%' }}>Mode</th>
                    <th style={{ width: '12%' }}>Waktu</th>
                    <th style={{ width: '8%', textAlign: 'right' }}>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredItems.map((item) => {
                    const isSelected = selectedItem?.id === item.id;
                    const isDe = item.mode === 'de-id';

                    return (
                      <tr
                        key={item.id}
                        onClick={() => setSelectedItem(item)}
                        style={{
                          cursor: 'pointer',
                          background: isSelected ? 'var(--accent-glow)' : undefined,
                        }}
                      >
                        <td>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                            <strong
                              style={{
                                color: isSelected
                                  ? 'var(--accent-primary)'
                                  : 'var(--text-primary)',
                              }}
                            >
                              {item.input}
                            </strong>
                            <span
                              style={{
                                fontSize: '0.68rem',
                                color: 'var(--text-muted)',
                                background: 'var(--bg-surface-elevated)',
                                padding: '1px 5px',
                                borderRadius: 4,
                              }}
                            >
                              {item.inputType === 'word' ? 'Kata' : 'Kalimat'}
                            </span>
                          </div>
                        </td>
                        <td style={{ color: 'var(--text-secondary)' }}>
                          {item.translationSummary}
                        </td>
                        <td>
                          <span
                            className="badge badge-general"
                            style={{
                              fontSize: '0.72rem',
                              fontWeight: 600,
                            }}
                          >
                            {isDe ? 'DE → ID' : 'ID → DE'}
                          </span>
                        </td>
                        <td
                          style={{
                            fontSize: '0.78rem',
                            color: 'var(--text-muted)',
                            fontFamily: 'var(--font-mono)',
                          }}
                        >
                          {formatTimestamp(item.createdAt)}
                        </td>
                        <td style={{ textAlign: 'right' }}>
                          <button
                            type="button"
                            onClick={(e) => handleDelete(e, item.id)}
                            className="btn btn-ghost btn-icon"
                            style={{
                              width: 28,
                              height: 28,
                              color: 'var(--text-muted)',
                            }}
                            title="Hapus item riwayat ini"
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="18" y1="6" x2="6" y2="18" />
                              <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Selected History Detail Card */}
            {selectedItem && (
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
                    Detail Riwayat: "{selectedItem.input}"
                  </h3>
                  <button
                    type="button"
                    onClick={() => setSelectedItem(null)}
                    className="btn btn-ghost btn-icon"
                    style={{ width: 30, height: 30 }}
                    title="Tutup detail"
                  >
                    ✕
                  </button>
                </div>

                {selectedItem.fullResult?.wordResult && (
                  <WordResultCard result={selectedItem.fullResult.wordResult} />
                )}

                {selectedItem.fullResult?.sentenceResult && (
                  <SentenceResultCard result={selectedItem.fullResult.sentenceResult} />
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
