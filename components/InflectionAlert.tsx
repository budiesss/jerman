'use client';

import React from 'react';
import { InflectionInfo } from '@/lib/types';

interface InflectionAlertProps {
  inflectionInfo: InflectionInfo;
  onNavigateBaseWord?: (word: string) => void;
}

export default function InflectionAlert({
  inflectionInfo,
  onNavigateBaseWord,
}: InflectionAlertProps) {
  if (!inflectionInfo || !inflectionInfo.isInflectedForm) return null;

  return (
    <div
      className="card animate-fade-in"
      style={{
        marginBottom: 20,
        padding: '16px 20px',
        background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.28) 0%, rgba(59, 130, 246, 0.15) 100%)',
        border: '1px solid rgba(59, 130, 246, 0.45)',
        borderRadius: 'var(--radius-md)',
        boxShadow: '0 8px 24px -4px rgba(37, 99, 235, 0.2)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative top subtle accent bar */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: 'linear-gradient(90deg, #3b82f6, #60a5fa, #93c5fd)',
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
          <span style={{ fontSize: '1.4rem' }}>🔍</span>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.6px',
                  background: 'rgba(59, 130, 246, 0.25)',
                  color: '#60a5fa',
                  padding: '2px 8px',
                  borderRadius: 'var(--radius-pill)',
                  border: '1px solid rgba(59, 130, 246, 0.4)',
                }}
              >
                Bentuk Gramatikal Terdeteksi
              </span>
              <span
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  color: '#93c5fd',
                  background: 'rgba(15, 23, 42, 0.5)',
                  padding: '2px 10px',
                  borderRadius: 6,
                }}
              >
                {inflectionInfo.grammaticalForm}
              </span>
            </div>
            <h4
              style={{
                fontSize: '1.05rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginTop: 4,
                marginBottom: 0,
              }}
            >
              Pencarian:{' '}
              <span style={{ color: '#93c5fd', textDecoration: 'underline' }}>
                &ldquo;{inflectionInfo.searchedForm}&rdquo;
              </span>
            </h4>
          </div>
        </div>

        {/* Action Button to inspect Base Lemma */}
        {onNavigateBaseWord && (
          <button
            type="button"
            onClick={() => onNavigateBaseWord(inflectionInfo.baseWord)}
            className="btn btn-primary"
            style={{
              fontSize: '0.86rem',
              padding: '6px 14px',
              borderRadius: 'var(--radius-sm)',
              background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
              border: 'none',
              boxShadow: '0 4px 12px rgba(37, 99, 235, 0.35)',
            }}
          >
            Lihat Bentuk Dasar: <strong>{inflectionInfo.baseForm}</strong> →
          </button>
        )}
      </div>

      {/* Explanation Box */}
      <div
        style={{
          marginTop: 8,
          padding: '10px 14px',
          borderRadius: 8,
          background: 'rgba(15, 23, 42, 0.4)',
          border: '1px solid rgba(59, 130, 246, 0.2)',
          fontSize: '0.9rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.55,
        }}
      >
        <p style={{ margin: 0 }}>
          <strong style={{ color: '#60a5fa' }}>Penjelasan Tata Bahasa: </strong>
          {inflectionInfo.explanation}
        </p>
        <div style={{ marginTop: 6, fontSize: '0.84rem', color: 'var(--text-muted)' }}>
          Kamus bahasa Jerman mengindeks kata dalam <em>Grundform (bentuk leksikal dasar)</em>:{' '}
          <strong style={{ color: '#93c5fd' }}>{inflectionInfo.baseForm}</strong>.
        </div>
      </div>
    </div>
  );
}
