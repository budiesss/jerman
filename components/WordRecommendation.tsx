'use client';

import React from 'react';
import { WordRecommendation as RecommendationType, UmlautSentenceOption } from '@/lib/types';

interface WordRecommendationProps {
  recommendations?: RecommendationType[];
  sentenceOptions?: UmlautSentenceOption[];
  onSelectWord: (word: string) => void;
  onSelectSentence?: (newSentence: string) => void;
}

export default function WordRecommendation({
  recommendations,
  sentenceOptions,
  onSelectWord,
  onSelectSentence,
}: WordRecommendationProps) {
  const hasWordRecs = recommendations && recommendations.length > 0;
  const hasSentenceRecs = sentenceOptions && sentenceOptions.length > 0;

  if (!hasWordRecs && !hasSentenceRecs) return null;

  return (
    <div
      className="card animate-fade-in"
      style={{
        marginTop: 16,
        padding: '16px 20px',
        background: 'var(--accent-gold-bg)',
        border: '1px solid rgba(245, 158, 11, 0.35)',
        borderRadius: 'var(--radius-md)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          marginBottom: 12,
        }}
      >
        <span style={{ fontSize: '1.25rem' }}>💡</span>
        <h3
          style={{
            fontSize: '0.95rem',
            fontWeight: 700,
            color: 'var(--accent-gold)',
            letterSpacing: '0.2px',
          }}
        >
          Apakah yang Anda maksud?
        </h3>
      </div>

      {/* Word Recommendations */}
      {hasWordRecs && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {recommendations.map((rec, index) => (
            <div
              key={index}
              onClick={() => onSelectWord(rec.word)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 14px',
                borderRadius: 'var(--radius-sm)',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-primary)';
                e.currentTarget.style.transform = 'translateX(4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
                e.currentTarget.style.transform = 'none';
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <strong
                    style={{
                      fontSize: '1.05rem',
                      color: 'var(--accent-primary)',
                      fontWeight: 700,
                    }}
                  >
                    {rec.word}
                  </strong>
                  <span
                    style={{
                      fontSize: '0.88rem',
                      color: 'var(--text-secondary)',
                      fontWeight: 500,
                    }}
                  >
                    = {rec.translation}
                  </span>
                </div>
                {rec.reason && (
                  <p
                    style={{
                      fontSize: '0.78rem',
                      color: 'var(--text-muted)',
                      marginTop: 3,
                    }}
                  >
                    {rec.reason}
                  </p>
                )}
              </div>
              <button
                type="button"
                className="btn btn-secondary"
                style={{
                  fontSize: '0.82rem',
                  padding: '6px 12px',
                  borderRadius: 6,
                }}
              >
                Pilih Ini →
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Sentence Umlaut Options */}
      {hasSentenceRecs && onSelectSentence && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {sentenceOptions.map((opt, idx) => (
            <div
              key={idx}
              onClick={() => onSelectSentence(opt.suggestedSentence)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
                padding: '12px 14px',
                borderRadius: 'var(--radius-sm)',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span
                  style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                  }}
                >
                  "{opt.suggestedSentence}"
                </span>
                <button
                  type="button"
                  className="btn btn-secondary"
                  style={{
                    fontSize: '0.82rem',
                    padding: '6px 12px',
                    borderRadius: 6,
                  }}
                >
                  Gunakan Kalimat Ini →
                </button>
              </div>

              {opt.changedWords && opt.changedWords.length > 0 && (
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  {opt.changedWords.map((cw, cIdx) => (
                    <span
                      key={cIdx}
                      style={{
                        fontSize: '0.82rem',
                        color: 'var(--accent-gold)',
                        fontWeight: 600,
                        background: 'var(--accent-gold-bg)',
                        padding: '3px 8px',
                        borderRadius: 4,
                      }}
                    >
                      {cw.meaning}
                    </span>
                  ))}
                </div>
              )}

              {opt.explanation && (
                <p
                  style={{
                    fontSize: '0.82rem',
                    color: 'var(--text-muted)',
                  }}
                >
                  {opt.explanation}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
