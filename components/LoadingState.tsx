'use client';

import React from 'react';

interface LoadingStateProps {
  message?: string;
}

export default function LoadingState({
  message = 'AI sedang menganalisis grammar & konteks...',
}: LoadingStateProps) {
  return (
    <div
      className="card animate-fade-in"
      style={{
        marginTop: 24,
        padding: '48px 24px',
        textAlign: 'center',
        background: 'var(--bg-surface)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16,
      }}
    >
      <div style={{ position: 'relative', width: 64, height: 64 }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            border: '3px solid var(--border-subtle)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            border: '3px solid transparent',
            borderTopColor: 'var(--accent-primary)',
            borderRightColor: 'var(--accent-gold)',
            animation: 'spin 1s cubic-bezier(0.5, 0, 0.5, 1) infinite',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.25rem',
          }}
        >
          🇩🇪
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>

      <div>
        <h3
          style={{
            fontSize: '1.2rem',
            fontWeight: 700,
            color: 'var(--text-primary)',
            letterSpacing: '-0.2px',
          }}
        >
          Analysiere...
        </h3>
        <p
          style={{
            fontSize: '0.92rem',
            color: 'var(--text-secondary)',
            marginTop: 4,
          }}
        >
          {message}
        </p>
      </div>

      <div
        style={{
          display: 'flex',
          gap: 8,
          fontSize: '0.75rem',
          color: 'var(--text-muted)',
          marginTop: 6,
        }}
      >
        <span>• Memeriksa Wortart</span>
        <span>• Deklinasi & Kasus</span>
        <span>• Konjugasi Verb</span>
        <span>• Deteksi Typo / Umlaut</span>
      </div>
    </div>
  );
}
