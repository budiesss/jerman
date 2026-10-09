'use client';

import React from 'react';
import { CompoundBreakdown } from '@/lib/types';
import AudioButton from './AudioButton';

interface CompoundWordCardProps {
  breakdown?: CompoundBreakdown;
  displayWord: string;
  onWordClick?: (word: string) => void;
}

export default function CompoundWordCard({
  breakdown,
  displayWord,
  onWordClick,
}: CompoundWordCardProps) {
  if (!breakdown || !breakdown.isCompound || !breakdown.components || breakdown.components.length === 0) {
    return null;
  }

  return (
    <div
      className="card animate-fade-in"
      style={{
        marginTop: 20,
        padding: '18px 22px',
        background: 'var(--bg-surface-elevated)',
        border: '1px solid rgba(139, 92, 246, 0.35)',
        borderRadius: 'var(--radius-md)',
        boxShadow: '0 4px 20px rgba(139, 92, 246, 0.08)',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 10,
          marginBottom: 16,
          paddingBottom: 12,
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: '1.4rem' }}>🧩</span>
          <div>
            <h4
              style={{
                fontSize: '1.05rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                margin: 0,
              }}
            >
              Kata Majemuk (Kompositum / Wortzusammensetzung)
            </h4>
            <p
              style={{
                fontSize: '0.82rem',
                color: 'var(--text-muted)',
                margin: '2px 0 0 0',
              }}
            >
              Penjelasan gabungan kata dasar pembentuk <strong style={{ color: 'var(--accent-primary)' }}>{displayWord}</strong>
            </p>
          </div>
        </div>

        <span
          style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            padding: '3px 10px',
            borderRadius: 'var(--radius-pill)',
            background: 'rgba(139, 92, 246, 0.15)',
            color: '#a78bfa',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}
        >
          {breakdown.components.length} Komponen Kata
        </span>
      </div>

      {/* Visual Component Formula / Equation */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 10,
          marginBottom: 18,
          padding: '14px 16px',
          borderRadius: 'var(--radius-sm)',
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-subtle)',
        }}
      >
        {breakdown.components.map((comp, idx) => {
          const isLast = idx === breakdown.components.length - 1;
          const isFugenelement = comp.role === 'Fugenelement' || comp.wordClass === 'Fugenelement';
          const cleanWord = comp.part.replace(/^(der|die|das)\s+/i, '');

          return (
            <React.Fragment key={idx}>
              {/* Component Card */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '10px 14px',
                  borderRadius: 'var(--radius-sm)',
                  background: isFugenelement
                    ? 'rgba(245, 158, 11, 0.08)'
                    : isLast
                    ? 'rgba(139, 92, 246, 0.12)'
                    : 'var(--bg-surface-elevated)',
                  border: `1px solid ${
                    isFugenelement
                      ? 'rgba(245, 158, 11, 0.3)'
                      : isLast
                      ? 'rgba(139, 92, 246, 0.35)'
                      : 'var(--border-subtle)'
                  }`,
                  minWidth: '130px',
                  flex: '1 1 auto',
                  transition: 'all 0.15s ease',
                }}
              >
                {/* Role / Badge */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 6,
                    gap: 6,
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.3px',
                      color: isFugenelement
                        ? 'var(--accent-gold)'
                        : isLast
                        ? '#c084fc'
                        : 'var(--text-muted)',
                    }}
                  >
                    {comp.role || (isLast ? 'Grundwort (Dasar)' : `Kata #${idx + 1}`)}
                  </span>

                  {comp.wordClass && (
                    <span
                      style={{
                        fontSize: '0.68rem',
                        color: 'var(--text-muted)',
                        background: 'var(--bg-surface)',
                        padding: '1px 6px',
                        borderRadius: 4,
                      }}
                    >
                      {comp.wordClass}
                    </span>
                  )}
                </div>

                {/* Word & Audio */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                  <span
                    onClick={() => {
                      if (!isFugenelement && onWordClick) {
                        onWordClick(cleanWord);
                      }
                    }}
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: isFugenelement
                        ? 'var(--accent-gold)'
                        : isLast
                        ? '#c084fc'
                        : 'var(--accent-primary)',
                      cursor: !isFugenelement && onWordClick ? 'pointer' : 'default',
                      textDecoration: !isFugenelement && onWordClick ? 'underline' : 'none',
                    }}
                    title={
                      !isFugenelement && onWordClick
                        ? `Cari "${cleanWord}" di kamus`
                        : undefined
                    }
                  >
                    {comp.part}
                  </span>
                  {!isFugenelement && <AudioButton text={cleanWord} size="sm" />}
                </div>

                {/* Indonesian Meaning */}
                <div
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)',
                    fontWeight: 500,
                  }}
                >
                  = {comp.meaning}
                </div>
              </div>

              {/* Plus Sign (if not last) */}
              {!isLast && (
                <div
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: 'var(--text-muted)',
                    padding: '0 4px',
                    userSelect: 'none',
                  }}
                >
                  +
                </div>
              )}
            </React.Fragment>
          );
        })}

        {/* Equals Sign */}
        <div
          style={{
            fontSize: '1.3rem',
            fontWeight: 800,
            color: 'var(--accent-primary)',
            padding: '0 4px',
            userSelect: 'none',
          }}
        >
          =
        </div>

        {/* Combined Result Card */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '10px 16px',
            borderRadius: 'var(--radius-sm)',
            background: 'rgba(59, 130, 246, 0.12)',
            border: '1px solid rgba(59, 130, 246, 0.4)',
            minWidth: '140px',
            flex: '1 1 auto',
          }}
        >
          <span
            style={{
              fontSize: '0.68rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              color: 'var(--accent-primary)',
              marginBottom: 6,
            }}
          >
            Hasil Gabungan
          </span>
          <strong
            style={{
              fontSize: '1.1rem',
              color: 'var(--accent-primary)',
              marginBottom: 4,
            }}
          >
            {displayWord}
          </strong>
          <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
            (Kata Utuh)
          </span>
        </div>
      </div>

      {/* Semantic Explanation */}
      {breakdown.explanation && (
        <div
          style={{
            padding: '12px 16px',
            borderRadius: 'var(--radius-sm)',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            fontSize: '0.9rem',
            lineHeight: 1.55,
            color: 'var(--text-primary)',
            marginBottom: 10,
          }}
        >
          <strong style={{ color: 'var(--accent-primary)', display: 'block', marginBottom: 4 }}>
            💡 Makna & Logika Gabungan:
          </strong>
          {breakdown.explanation}
        </div>
      )}

      {/* Grundwort / Head Word Rule Callout */}
      {breakdown.headWordRule && (
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 10,
            padding: '10px 14px',
            borderRadius: 'var(--radius-sm)',
            background: 'rgba(139, 92, 246, 0.08)',
            border: '1px solid rgba(139, 92, 246, 0.25)',
            fontSize: '0.86rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.5,
          }}
        >
          <span style={{ fontSize: '1.1rem' }}>📌</span>
          <div>
            <strong style={{ color: '#c084fc', display: 'block', marginBottom: 2 }}>
              Kaidah Tata Bahasa (Grundwort-Regel):
            </strong>
            {breakdown.headWordRule}
          </div>
        </div>
      )}
    </div>
  );
}
