'use client';

import React, { useState } from 'react';
import { speakGerman, isSpeechSupported } from '@/lib/speech';

interface AudioButtonProps {
  text: string;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function AudioButton({
  text,
  label,
  size = 'md',
}: AudioButtonProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!text) return;

    setIsPlaying(true);
    const ok = speakGerman(text);
    if (!ok && !isSpeechSupported()) {
      alert('Perangkat atau browser ini belum mendukung Web Speech API untuk pelafalan audio.');
    }
    setTimeout(() => setIsPlaying(false), 1200);
  };

  const dimension = size === 'sm' ? 28 : size === 'lg' ? 42 : 34;
  const iconSize = size === 'sm' ? 14 : size === 'lg' ? 20 : 17;

  return (
    <button
      type="button"
      onClick={handlePlay}
      className="btn btn-ghost"
      title={`Dengarkan pelafalan "${text}" dalam bahasa Jerman`}
      aria-label={`Dengarkan audio untuk ${text}`}
      style={{
        width: label ? 'auto' : dimension,
        height: dimension,
        padding: label ? '0 12px' : 0,
        borderRadius: size === 'sm' ? '6px' : 'var(--radius-md)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,
        color: isPlaying ? 'var(--accent-primary)' : 'var(--text-secondary)',
        background: isPlaying ? 'var(--accent-glow)' : 'var(--bg-surface-elevated)',
        border: `1px solid ${isPlaying ? 'var(--accent-primary)' : 'var(--border-subtle)'}`,
        transition: 'all 0.15s ease',
      }}
    >
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          transform: isPlaying ? 'scale(1.15)' : 'scale(1)',
          transition: 'transform 0.15s ease',
        }}
      >
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
        {size !== 'sm' && <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />}
      </svg>
      {label && <span style={{ fontSize: '0.85rem', fontWeight: 500 }}>{label}</span>}
    </button>
  );
}
