'use client';

import React, { useState, useEffect } from 'react';
import { WordResult } from '@/lib/types';
import { isFavorite, toggleFavorite } from '@/lib/storage';

interface FavoriteButtonProps {
  wordResult: WordResult;
  onToggle?: (isFav: boolean) => void;
  size?: 'md' | 'lg';
}

export default function FavoriteButton({
  wordResult,
  onToggle,
  size = 'md',
}: FavoriteButtonProps) {
  const [favorited, setFavorited] = useState(false);

  useEffect(() => {
    if (wordResult?.word) {
      setFavorited(isFavorite(wordResult.word));
    }
  }, [wordResult?.word]);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!wordResult) return;
    const newState = toggleFavorite(wordResult);
    setFavorited(newState);
    if (onToggle) {
      onToggle(newState);
    }
  };

  const dimension = size === 'lg' ? 44 : 36;
  const iconSize = size === 'lg' ? 22 : 18;

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="btn btn-ghost"
      title={favorited ? 'Hapus dari Meine Wörter' : 'Simpan ke Meine Wörter (Favorit)'}
      aria-label={favorited ? 'Hapus favorit' : 'Tambah favorit'}
      style={{
        width: dimension,
        height: dimension,
        padding: 0,
        borderRadius: 'var(--radius-md)',
        color: favorited ? '#f59e0b' : 'var(--text-muted)',
        background: favorited ? 'rgba(245, 158, 11, 0.12)' : 'var(--bg-surface-elevated)',
        border: `1px solid ${favorited ? 'rgba(245, 158, 11, 0.35)' : 'var(--border-subtle)'}`,
        transition: 'all 0.18s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
        fill={favorited ? '#f59e0b' : 'none'}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          transform: favorited ? 'scale(1.1)' : 'scale(1)',
          transition: 'transform 0.18s ease',
        }}
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    </button>
  );
}
