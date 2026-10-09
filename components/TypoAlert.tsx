'use client';

import React from 'react';
import { TypoCorrection } from '@/lib/types';

interface TypoAlertProps {
  typoCorrection: TypoCorrection;
  onSelectWord?: (word: string) => void;
}

export default function TypoAlert({
  typoCorrection,
  onSelectWord,
}: TypoAlertProps) {
  if (!typoCorrection || !typoCorrection.suggestedWord) return null;

  return (
    <div
      className="card animate-fade-in"
      style={{
        marginBottom: 20,
        padding: '16px 20px',
        background: 'linear-gradient(135deg, rgba(120, 53, 15, 0.28) 0%, rgba(245, 158, 11, 0.15) 100%)',
        border: '1px solid rgba(245, 158, 11, 0.45)',
        borderRadius: 'var(--radius-md)',
        boxShadow: '0 8px 24px -4px rgba(245, 158, 11, 0.2)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative top gold accent bar */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: 'linear-gradient(90deg, #f59e0b, #fbbf24, #fde68a)',
        }}
      />

      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 12,
          marginBottom: 10,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: '1.4rem' }}>💡</span>
          <div>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.6px',
                background: 'rgba(245, 158, 11, 0.25)',
                color: '#fbbf24',
                padding: '2px 8px',
                borderRadius: 'var(--radius-pill)',
                border: '1px solid rgba(245, 158, 11, 0.4)',
              }}
            >
              Koreksi Saltik (Typo)
            </span>
            <h4
              style={{
                fontSize: '1.1rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginTop: 4,
                marginBottom: 0,
              }}
            >
              Apakah maksud Anda:{' '}
              <span style={{ color: '#fbbf24', fontWeight: 800 }}>
                &ldquo;{typoCorrection.displaySuggestedWord || typoCorrection.suggestedWord}&rdquo;
              </span>
              ?
            </h4>
          </div>
        </div>

        {onSelectWord && (
          <button
            type="button"
            onClick={() => onSelectWord(typoCorrection.suggestedWord)}
            className="btn btn-primary"
            style={{
              fontSize: '0.86rem',
              padding: '6px 14px',
              borderRadius: 'var(--radius-sm)',
              background: 'linear-gradient(135deg, #d97706, #b45309)',
              border: 'none',
              boxShadow: '0 4px 12px rgba(217, 119, 6, 0.35)',
              color: '#fff',
            }}
          >
            Cari: <strong>{typoCorrection.suggestedWord}</strong> →
          </button>
        )}
      </div>

      <div
        style={{
          marginTop: 8,
          padding: '10px 14px',
          borderRadius: 8,
          background: 'rgba(15, 23, 42, 0.4)',
          border: '1px solid rgba(245, 158, 11, 0.2)',
          fontSize: '0.9rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.55,
        }}
      >
        <p style={{ margin: 0 }}>
          <strong style={{ color: '#fbbf24' }}>Saran Koreksi: </strong>
          {typoCorrection.explanation}
        </p>
      </div>
    </div>
  );
}
