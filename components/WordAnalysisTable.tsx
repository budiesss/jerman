'use client';

import React from 'react';
import { SentenceTokenAnalysis } from '@/lib/types';
import WordTypeBadge from './WordTypeBadge';
import AudioButton from './AudioButton';

interface WordAnalysisTableProps {
  tokens: SentenceTokenAnalysis[];
  isGermanSource?: boolean;
  onTokenClick?: (tokenText: string) => void;
}

export default function WordAnalysisTable({
  tokens,
  isGermanSource = true,
  onTokenClick,
}: WordAnalysisTableProps) {
  if (!tokens || tokens.length === 0) return null;

  return (
    <div style={{ marginTop: 24 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
        <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)' }}>
          Analisis Kata demi Kata (Wort-für-Wort-Analyse)
        </h4>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          (Klik kata untuk melihat kamus lengkap)
        </span>
      </div>

      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th style={{ width: '22%' }}>Kata</th>
              <th style={{ width: '25%' }}>Arti</th>
              <th style={{ width: '23%' }}>Jenis Kata</th>
              <th style={{ width: '30%' }}>Informasi Grammar</th>
            </tr>
          </thead>
          <tbody>
            {tokens.map((token, index) => {
              const cleanToken = token.lemma || token.token.replace(/[.,!?;:()]/g, '');

              return (
                <tr key={index}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span
                        onClick={() => onTokenClick && onTokenClick(cleanToken)}
                        style={{
                          fontWeight: 700,
                          fontSize: '1rem',
                          color: 'var(--accent-primary)',
                          cursor: onTokenClick ? 'pointer' : 'default',
                          textDecoration: onTokenClick ? 'underline' : 'none',
                        }}
                        title={`Klik untuk membuka kamus: ${cleanToken}`}
                      >
                        {token.token}
                      </span>
                      {isGermanSource && <AudioButton text={token.token} size="sm" />}
                    </div>
                    {token.lemma && token.lemma !== token.token && (
                      <div
                        style={{
                          fontSize: '0.72rem',
                          color: 'var(--text-muted)',
                          fontFamily: 'var(--font-mono)',
                          marginTop: 2,
                        }}
                      >
                        Grundform: {token.lemma}
                      </div>
                    )}
                  </td>
                  <td style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
                    {token.translation}
                  </td>
                  <td>
                    <WordTypeBadge wordClass={token.wordClass} size="sm" />
                  </td>
                  <td
                    style={{
                      fontSize: '0.86rem',
                      color: 'var(--text-secondary)',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    {token.grammaticalInfo}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
