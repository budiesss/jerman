'use client';

import React from 'react';
import { WordResult } from '@/lib/types';
import WordTypeBadge from './WordTypeBadge';
import AudioButton from './AudioButton';
import FavoriteButton from './FavoriteButton';
import SynonymTable from './SynonymTable';
import AntonymTable from './AntonymTable';
import ExampleSentenceTable from './ExampleSentenceTable';
import CompoundWordCard from './CompoundWordCard';
import InflectionAlert from './InflectionAlert';
import TypoAlert from './TypoAlert';

interface WordResultCardProps {
  result: WordResult;
  onNavigateWord?: (word: string) => void;
  onEnrichWithAI?: () => void;
  isEnriching?: boolean;
}

export default function WordResultCard({
  result,
  onNavigateWord,
  onEnrichWithAI,
  isEnriching,
}: WordResultCardProps) {
  const grammar = result.grammar;
  const isNoun = grammar.type === 'nomen';
  const isVerb = grammar.type === 'verb';
  const isAdjective = grammar.type === 'adjektiv';
  const isPreposition = grammar.type === 'praeposition';

  const article = isNoun ? grammar.data.artikel : undefined;
  const gender = isNoun ? grammar.data.gender : undefined;

  return (
    <div className="card animate-fade-in" style={{ marginTop: 24, padding: 'clamp(16px, 3vw, 32px)' }}>
      {/* Typo Recommendation Alert */}
      {result.typoCorrection && (
        <TypoAlert
          typoCorrection={result.typoCorrection}
          onSelectWord={onNavigateWord}
        />
      )}

      {/* Grammatical Inflection Alert (Cases, Conjugation, Plural, Comparison) */}
      {result.inflectionInfo && (
        <InflectionAlert
          inflectionInfo={result.inflectionInfo}
          onNavigateBaseWord={onNavigateWord}
        />
      )}

      {/* Top Header: Word, Badges, Audio, Favorite */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 16,
          paddingBottom: 20,
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
            <h2
              className="word-main-title"
              style={{
                color: isNoun
                  ? article === 'der'
                    ? 'var(--color-der)'
                    : article === 'die'
                    ? 'var(--color-die)'
                    : article === 'das'
                    ? 'var(--color-das)'
                    : 'var(--text-primary)'
                  : 'var(--text-primary)',
              }}
            >
              {result.displayWord || result.word}
            </h2>

            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <AudioButton text={result.word} size="lg" />
              <FavoriteButton wordResult={result} size="lg" />
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginTop: 10,
              flexWrap: 'wrap',
            }}
          >
            {result.ipa && (
              <span
                style={{
                  fontSize: '1.05rem',
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-mono)',
                  background: 'var(--bg-surface-elevated)',
                  padding: '2px 8px',
                  borderRadius: 6,
                }}
              >
                {result.ipa}
              </span>
            )}

            <WordTypeBadge
              wordClass={result.wordClass}
              gender={gender}
              article={article}
              cefrLevel={result.cefrLevel}
              size="md"
            />

            {result.aiProviderUsed && (
              <span
                style={{
                  fontSize: '0.78rem',
                  padding: '3px 10px',
                  borderRadius: 'var(--radius-pill)',
                  background: 'rgba(16, 185, 129, 0.12)',
                  color: '#10b981',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 4,
                }}
              >
                ✨ {result.aiProviderUsed}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* False Friends Alert Box */}
      {result.falseFriendsWarning && (
        <div
          style={{
            marginTop: 20,
            padding: '14px 18px',
            borderRadius: 'var(--radius-md)',
            background: 'rgba(239, 68, 68, 0.1)',
            border: '1px solid rgba(239, 68, 68, 0.35)',
            display: 'flex',
            alignItems: 'flex-start',
            gap: 12,
          }}
        >
          <span style={{ fontSize: '1.4rem' }}>⚠️</span>
          <div>
            <strong
              style={{
                color: '#ef4444',
                fontSize: '0.92rem',
                display: 'block',
                marginBottom: 4,
                textTransform: 'uppercase',
                letterSpacing: '0.4px',
              }}
            >
              Peringatan False Friend (Kemiripan Menipu)
            </strong>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
              {result.falseFriendsWarning}
            </p>
          </div>
        </div>
      )}

      {/* Translations & Meanings */}
      <div style={{ marginTop: 24 }}>
        <h3
          style={{
            fontSize: '0.85rem',
            textTransform: 'uppercase',
            letterSpacing: '0.6px',
            color: 'var(--text-muted)',
            fontWeight: 700,
            marginBottom: 8,
          }}
        >
          Arti Bahasa Indonesia
        </h3>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 10 }}>
          {result.translations.map((trans, idx) => (
            <span
              key={idx}
              style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                background: 'var(--bg-surface-elevated)',
                border: '1px solid var(--border-subtle)',
                padding: '4px 14px',
                borderRadius: 'var(--radius-sm)',
              }}
            >
              {trans}
            </span>
          ))}
        </div>

        {result.meaningSummary && (
          <p
            style={{
              fontSize: '0.95rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
            }}
          >
            {result.meaningSummary}
          </p>
        )}
      </div>

      {/* Compound Word Breakdown (Kompositum) */}
      <CompoundWordCard
        breakdown={result.compoundBreakdown}
        displayWord={result.displayWord || result.word}
        onWordClick={onNavigateWord}
      />

      {/* Detailed Grammar Information Section */}
      <div
        style={{
          marginTop: 24,
          padding: '18px 20px',
          borderRadius: 'var(--radius-md)',
          background: 'var(--bg-surface-subtle)',
          border: '1px solid var(--border-subtle)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
          <span style={{ fontSize: '1.1rem' }}>📐</span>
          <h4
            style={{
              fontSize: '0.95rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              color: 'var(--text-primary)',
            }}
          >
            Informasi Grammar & Bentuk Kata
          </h4>
        </div>

        {/* Noun Grammar */}
        {isNoun && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: 14,
            }}
          >
            <div style={{ background: 'var(--bg-surface)', padding: 12, borderRadius: 8, border: '1px solid var(--border-subtle)' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Artikel & Gender</div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--accent-primary)', marginTop: 2 }}>
                {grammar.data.artikel} ({grammar.data.gender})
              </div>
            </div>
            <div style={{ background: 'var(--bg-surface)', padding: 12, borderRadius: 8, border: '1px solid var(--border-subtle)' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Singular (Tunggal)</div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: 2 }}>
                {grammar.data.singular}
              </div>
            </div>
            <div style={{ background: 'var(--bg-surface)', padding: 12, borderRadius: 8, border: '1px solid var(--border-subtle)' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Plural (Jamak)</div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-plural)', marginTop: 2 }}>
                {grammar.data.plural}
              </div>
            </div>
            {grammar.data.genitivSingular && (
              <div style={{ background: 'var(--bg-surface)', padding: 12, borderRadius: 8, border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Genitiv Singular</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-secondary)', marginTop: 2 }}>
                  {grammar.data.genitivSingular}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Verb Grammar */}
        {isVerb && (
          <div>
            <div style={{ display: 'flex', gap: 8, marginBottom: 12, flexWrap: 'wrap' }}>
              {grammar.data.isIrregular ? (
                <span
                  style={{
                    padding: '3px 10px',
                    borderRadius: 6,
                    background: 'rgba(239, 68, 68, 0.15)',
                    color: '#ef4444',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                  }}
                >
                  Unregelmäßiges Verb (Tidak Beraturan)
                </span>
              ) : (
                <span
                  style={{
                    padding: '3px 10px',
                    borderRadius: 6,
                    background: 'rgba(16, 185, 129, 0.15)',
                    color: '#10b981',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                  }}
                >
                  Regelmäßiges Verb (Beraturan)
                </span>
              )}

              {grammar.data.prefix && (
                <span
                  style={{
                    padding: '3px 10px',
                    borderRadius: 6,
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: 'var(--text-secondary)',
                  }}
                >
                  {grammar.data.prefix}
                </span>
              )}
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                gap: 12,
              }}
            >
              <div style={{ background: 'var(--bg-surface)', padding: 10, borderRadius: 8, border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Infinitiv</div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: 2 }}>
                  {grammar.data.infinitiv}
                </div>
              </div>
              <div style={{ background: 'var(--bg-surface)', padding: 10, borderRadius: 8, border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Präsens (er/sie/es)</div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--accent-primary)', marginTop: 2 }}>
                  {grammar.data.praesens}
                </div>
              </div>
              <div style={{ background: 'var(--bg-surface)', padding: 10, borderRadius: 8, border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Präteritum</div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: 2 }}>
                  {grammar.data.praeteritum}
                </div>
              </div>
              <div style={{ background: 'var(--bg-surface)', padding: 10, borderRadius: 8, border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Partizip II</div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--accent-gold)', marginTop: 2 }}>
                  {grammar.data.partizip2}
                </div>
              </div>
              <div style={{ background: 'var(--bg-surface)', padding: 10, borderRadius: 8, border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Hilfsverb (Perfekt)</div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#059669', marginTop: 2 }}>
                  {grammar.data.hilfsverb}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Adjective Grammar */}
        {isAdjective && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: 12,
            }}
          >
            <div style={{ background: 'var(--bg-surface)', padding: 12, borderRadius: 8, border: '1px solid var(--border-subtle)' }}>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Positiv (Dasar)</div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: 2 }}>
                {grammar.data.positiv}
              </div>
            </div>
            <div style={{ background: 'var(--bg-surface)', padding: 12, borderRadius: 8, border: '1px solid var(--border-subtle)' }}>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Komparativ (Lebih)</div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--accent-primary)', marginTop: 2 }}>
                {grammar.data.komparativ}
              </div>
            </div>
            <div style={{ background: 'var(--bg-surface)', padding: 12, borderRadius: 8, border: '1px solid var(--border-subtle)' }}>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Superlativ (Paling)</div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--accent-gold)', marginTop: 2 }}>
                {grammar.data.superlativ}
              </div>
            </div>
          </div>
        )}

        {/* Preposition Grammar */}
        {isPreposition && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Kasus yang dituntut:</span>
              <span
                style={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: 'var(--accent-primary)',
                  background: 'var(--accent-glow)',
                  padding: '4px 12px',
                  borderRadius: 6,
                }}
              >
                + {grammar.data.kasus}
              </span>
            </div>
            {grammar.data.exampleUsage && (
              <p style={{ marginTop: 8, fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                {grammar.data.exampleUsage}
              </p>
            )}
          </div>
        )}

        {/* General Grammar */}
        {grammar.type === 'general' && grammar.data.hinweis && (
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            {grammar.data.hinweis}
          </p>
        )}
      </div>

      {/* Learning Tips */}
      {result.learningTips && (
        <div
          style={{
            marginTop: 18,
            padding: '12px 16px',
            borderRadius: 'var(--radius-sm)',
            background: 'rgba(59, 130, 246, 0.08)',
            border: '1px solid rgba(59, 130, 246, 0.2)',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <span style={{ fontSize: '1.1rem' }}>🎓</span>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-primary)', margin: 0 }}>
            <strong>Tips Belajar:</strong> {result.learningTips}
          </p>
        </div>
      )}

      {/* Synonyms & Antonyms */}
      <SynonymTable synonyms={result.synonyms} onWordClick={onNavigateWord} />
      <AntonymTable antonyms={result.antonyms} onWordClick={onNavigateWord} />

      {/* Multi-AI Contextual Enrichment Action */}
      {onEnrichWithAI && (
        <div
          style={{
            marginTop: 20,
            marginBottom: 20,
            padding: '14px 18px',
            borderRadius: 'var(--radius-md)',
            background: 'var(--bg-surface-elevated)',
            border: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ fontSize: '1.05rem' }}>🤖</span>
              <strong style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                Perkaya Kosakata dengan Multi-AI
              </strong>
            </div>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: '4px 0 0' }}>
              Dapatkan contoh kalimat baru yang lebih beragam sesuai konteks serta sinonim dan antonim tambahan dari AI terhubung (Gemini, ChatGPT, Claude, Grok, DeepSeek).
            </p>
          </div>
          <button
            type="button"
            onClick={onEnrichWithAI}
            disabled={isEnriching}
            className="btn btn-secondary"
            style={{
              fontSize: '0.82rem',
              padding: '8px 16px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              cursor: isEnriching ? 'not-allowed' : 'pointer',
            }}
          >
            {isEnriching ? '⏳ Menghubungi AI...' : '✨ Perkaya Contoh & Sinonim AI'}
          </button>
        </div>
      )}

      {/* Example Sentences */}
      <ExampleSentenceTable examples={result.examples} />
    </div>
  );
}
