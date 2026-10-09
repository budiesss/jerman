'use client';

import React from 'react';
import { SentenceResult } from '@/lib/types';
import AudioButton from './AudioButton';
import WordAnalysisTable from './WordAnalysisTable';

interface SentenceResultCardProps {
  result: SentenceResult;
  onNavigateWord?: (word: string) => void;
}

export default function SentenceResultCard({
  result,
  onNavigateWord,
}: SentenceResultCardProps) {
  const isGermanSource = result.sourceLang === 'de';

  return (
    <div className="card animate-fade-in" style={{ marginTop: 24, padding: 'clamp(16px, 3vw, 32px)' }}>
      {/* Original Sentence */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: 16,
          paddingBottom: 16,
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div>
          <div
            style={{
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
              letterSpacing: '0.6px',
              fontWeight: 700,
              marginBottom: 4,
            }}
          >
            {isGermanSource ? 'Kalimat Asli (Deutsch)' : 'Kalimat Asli (Bahasa Indonesia)'}
          </div>
          <div
            style={{
              fontSize: '1.4rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
              lineHeight: 1.35,
            }}
          >
            {result.originalSentence}
          </div>
        </div>

        {isGermanSource && <AudioButton text={result.originalSentence} size="lg" />}
      </div>

      {/* Translated Sentence */}
      <div style={{ marginTop: 20 }}>
        <div
          style={{
            fontSize: '0.75rem',
            color: 'var(--accent-primary)',
            textTransform: 'uppercase',
            letterSpacing: '0.6px',
            fontWeight: 700,
            marginBottom: 6,
          }}
        >
          {isGermanSource ? 'Terjemahan (Bahasa Indonesia)' : 'Terjemahan Alami (Deutsch)'}
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 12,
            padding: '16px 20px',
            background: 'var(--bg-surface-elevated)',
            border: '1px solid var(--accent-glow)',
            borderRadius: 'var(--radius-md)',
          }}
        >
          <div
            style={{
              fontSize: '1.45rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
              lineHeight: 1.3,
            }}
          >
            {result.translatedSentence}
          </div>

          {!isGermanSource && <AudioButton text={result.translatedSentence} size="lg" />}
        </div>

        {result.literalTranslation && result.literalTranslation !== result.translatedSentence && (
          <div
            style={{
              marginTop: 8,
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
              fontStyle: 'italic',
            }}
          >
            <strong>Terjemahan Harfiah:</strong> "{result.literalTranslation}"
          </div>
        )}
      </div>

      {/* Sentence Structure & Grammar Insights */}
      {result.sentenceStructureExplanation && (
        <div
          style={{
            marginTop: 24,
            padding: '18px 20px',
            borderRadius: 'var(--radius-md)',
            background: 'var(--bg-surface-subtle)',
            border: '1px solid var(--border-subtle)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <span style={{ fontSize: '1.2rem' }}>🧠</span>
            <h4
              style={{
                fontSize: '0.95rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                color: 'var(--text-primary)',
              }}
            >
              Analisis Struktur & Tata Bahasa
            </h4>
          </div>
          <p
            style={{
              fontSize: '0.92rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
            }}
          >
            {result.sentenceStructureExplanation}
          </p>

          {result.grammarHighlights && result.grammarHighlights.length > 0 && (
            <ul
              style={{
                marginTop: 12,
                paddingLeft: 20,
                display: 'flex',
                flexDirection: 'column',
                gap: 6,
                fontSize: '0.88rem',
                color: 'var(--text-primary)',
              }}
            >
              {result.grammarHighlights.map((pt, pIdx) => (
                <li key={pIdx}>{pt}</li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* Translation Alternatives */}
      {result.alternatives && result.alternatives.length > 0 && (
        <div style={{ marginTop: 24 }}>
          <h4
            style={{
              fontSize: '0.92rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              color: 'var(--text-muted)',
              marginBottom: 10,
            }}
          >
            Alternatif Terjemahan Alami
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {result.alternatives.map((alt, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 12,
                  padding: '12px 16px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <div>
                  <div style={{ fontWeight: 600, fontSize: '1.02rem', color: 'var(--text-primary)' }}>
                    {alt.sentence}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: 2 }}>
                    {alt.nuance}
                  </div>
                </div>
                <AudioButton text={alt.sentence} size="sm" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Word-by-word Analysis Table */}
      <WordAnalysisTable
        tokens={result.wordByWordAnalysis}
        isGermanSource={isGermanSource}
        onTokenClick={onNavigateWord}
      />

      {/* Key Vocabulary Pills */}
      {result.keyVocabulary && result.keyVocabulary.length > 0 && (
        <div style={{ marginTop: 24 }}>
          <h4
            style={{
              fontSize: '0.92rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              color: 'var(--text-muted)',
              marginBottom: 10,
            }}
          >
            Kosakata Penting dalam Kalimat
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {result.keyVocabulary.map((vocab, vIdx) => (
              <div
                key={vIdx}
                onClick={() => onNavigateWord && onNavigateWord(vocab.word)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '8px 14px',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-subtle)',
                  cursor: onNavigateWord ? 'pointer' : 'default',
                  transition: 'all 0.15s ease',
                }}
              >
                <strong style={{ color: 'var(--accent-primary)', fontSize: '0.95rem' }}>
                  {vocab.article ? `${vocab.article} ` : ''}
                  {vocab.word}
                </strong>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                  = {vocab.translation}
                </span>
                <span
                  style={{
                    fontSize: '0.7rem',
                    color: 'var(--text-muted)',
                    background: 'var(--bg-surface)',
                    padding: '2px 6px',
                    borderRadius: 4,
                  }}
                >
                  {vocab.wordClass}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
