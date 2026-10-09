'use client';

import React from 'react';
import { AntonymItem } from '@/lib/types';
import WordTypeBadge from './WordTypeBadge';
import AudioButton from './AudioButton';

interface AntonymTableProps {
  antonyms: AntonymItem[];
  onWordClick?: (word: string) => void;
}

export default function AntonymTable({ antonyms, onWordClick }: AntonymTableProps) {
  if (!antonyms || antonyms.length === 0) {
    return (
      <div style={{ marginTop: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
          <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
            Antonim
          </h4>
        </div>
        <div
          style={{
            padding: '12px 16px',
            borderRadius: 'var(--radius-md)',
            background: 'var(--bg-surface-subtle)',
            border: '1px dashed var(--border-subtle)',
            fontSize: '0.88rem',
            color: 'var(--text-muted)',
          }}
        >
          Tidak ada lawan kata mutlak langsung untuk entri ini dalam konteks umum.
        </div>
      </div>
    );
  }

  return (
    <div style={{ marginTop: 20 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
        <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
          Antonim
        </h4>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          (Lawan kata yang relevan)
        </span>
      </div>

      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th style={{ width: '40%' }}>Kata Jerman</th>
              <th style={{ width: '25%' }}>Jenis Kata</th>
              <th style={{ width: '35%' }}>Arti Indonesia</th>
            </tr>
          </thead>
          <tbody>
            {antonyms.slice(0, 5).map((item, index) => {
              const trimmedWord = (item.word || '').trim();
              const hasArticleInWord = /^(der|die|das)\s+/i.test(trimmedWord);
              const articlePrefix =
                !hasArticleInWord && item.article && item.article !== '-'
                  ? `${item.article} `
                  : '';
              const fullDisplay = `${articlePrefix}${trimmedWord}`;
              const cleanBaseWord = trimmedWord.replace(/^(der|die|das)\s+/i, '');

              return (
                <tr key={index}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span
                        onClick={() => onWordClick && onWordClick(cleanBaseWord)}
                        style={{
                          fontWeight: 600,
                          color: 'var(--accent-primary)',
                          cursor: onWordClick ? 'pointer' : 'default',
                          textDecoration: onWordClick ? 'underline' : 'none',
                        }}
                        title={onWordClick ? `Lihat detail "${cleanBaseWord}"` : undefined}
                      >
                        {fullDisplay}
                      </span>
                      <AudioButton text={cleanBaseWord} size="sm" />
                    </div>
                  </td>
                  <td>
                    <WordTypeBadge wordClass={item.wordClass} size="sm" />
                  </td>
                  <td style={{ color: 'var(--text-secondary)' }}>{item.translation}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
