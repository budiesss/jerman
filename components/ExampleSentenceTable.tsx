'use client';

import React from 'react';
import { ExampleSentence } from '@/lib/types';
import WordTypeBadge from './WordTypeBadge';
import AudioButton from './AudioButton';

interface ExampleSentenceTableProps {
  examples: ExampleSentence[];
}

export default function ExampleSentenceTable({ examples }: ExampleSentenceTableProps) {
  if (!examples || examples.length === 0) return null;

  return (
    <div style={{ marginTop: 24 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
        <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)' }}>
          Contoh Kalimat (Beispielsätze)
        </h4>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          (Sesuai tingkatan CEFR)
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {examples.map((ex, index) => (
          <div
            key={index}
            style={{
              padding: '14px 18px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-subtle)',
              transition: 'border-color var(--transition-fast)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 6,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <WordTypeBadge cefrLevel={ex.level} size="sm" />
                {ex.contextNote && (
                  <span
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--accent-gold)',
                      fontWeight: 600,
                      background: 'var(--accent-gold-bg)',
                      padding: '2px 8px',
                      borderRadius: 4,
                    }}
                  >
                    {ex.contextNote}
                  </span>
                )}
              </div>
              <AudioButton text={ex.german} size="sm" />
            </div>

            <div
              style={{
                fontSize: '1.05rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                lineHeight: 1.4,
              }}
            >
              {ex.german}
            </div>

            <div
              style={{
                fontSize: '0.92rem',
                color: 'var(--text-secondary)',
                marginTop: 4,
              }}
            >
              {ex.indonesian}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
