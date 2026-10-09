'use client';

import React from 'react';
import { WordClass, Gender, CEFRLevel, GermanArticle } from '@/lib/types';

interface WordTypeBadgeProps {
  wordClass?: WordClass | string;
  gender?: Gender;
  article?: GermanArticle;
  cefrLevel?: CEFRLevel;
  size?: 'sm' | 'md' | 'lg';
}

export default function WordTypeBadge({
  wordClass,
  gender,
  article,
  cefrLevel,
  size = 'md',
}: WordTypeBadgeProps) {
  const isSmall = size === 'sm';

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        flexWrap: 'wrap',
      }}
    >
      {/* Article / Gender Badge if Nomen */}
      {article && article !== '-' && (
        <span
          className={`badge badge-${
            article === 'der'
              ? 'der'
              : article === 'die'
              ? 'die'
              : article === 'das'
              ? 'das'
              : 'general'
          }`}
          style={{
            fontSize: isSmall ? '0.72rem' : '0.82rem',
            fontWeight: 700,
          }}
        >
          {article}
          {gender && (
            <span
              style={{
                opacity: 0.85,
                fontWeight: 500,
                fontSize: '0.7em',
                textTransform: 'capitalize',
              }}
            >
              • {gender}
            </span>
          )}
        </span>
      )}

      {/* Word Class Badge */}
      {wordClass && (
        <span
          className="badge badge-general"
          style={{
            fontSize: isSmall ? '0.72rem' : '0.82rem',
            background: 'var(--bg-surface-elevated)',
            border: '1px solid var(--border-subtle)',
            color: 'var(--text-primary)',
          }}
        >
          {wordClass}
        </span>
      )}

      {/* CEFR Level Badge */}
      {cefrLevel && cefrLevel !== 'Level tidak pasti' && (
        <span
          className={`badge badge-cefr badge-cefr-${cefrLevel}`}
          style={{
            fontSize: isSmall ? '0.7rem' : '0.78rem',
          }}
        >
          {cefrLevel}
        </span>
      )}
    </div>
  );
}
