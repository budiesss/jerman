'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import SearchInput from '@/components/SearchInput';
import WordRecommendation from '@/components/WordRecommendation';
import WordResultCard from '@/components/WordResultCard';
import SentenceResultCard from '@/components/SentenceResultCard';
import LoadingState from '@/components/LoadingState';
import ErrorState from '@/components/ErrorState';
import {
  AnalyzeResponse,
  LanguageMode,
} from '@/lib/types';
import { saveHistoryItem } from '@/lib/storage';

// Wrap in Suspense so useSearchParams doesn't block prerendering (Next.js 16)
export default function HomePage() {
  return (
    <Suspense fallback={null}>
      <HomePageInner />
    </Suspense>
  );
}

function HomePageInner() {
  const searchParams = useSearchParams();
  const [inputText, setInputText] = useState('');
  const [mode, setMode] = useState<LanguageMode>('de-id');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<AnalyzeResponse | null>(null);

  // Auto-trigger from URL params (e.g., redirected from PDF reader)
  useEffect(() => {
    const q = searchParams?.get('q');
    const m = searchParams?.get('mode') as LanguageMode | null;
    if (q) {
      const resolvedMode: LanguageMode = m === 'id-de' ? 'id-de' : 'de-id';
      setInputText(q);
      setMode(resolvedMode);
      executeAnalysis(q, resolvedMode);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Perform search / analysis
  const executeAnalysis = async (textToAnalyze: string, searchMode: LanguageMode = mode) => {
    const trimmed = textToAnalyze.trim();
    if (!trimmed) return;

    setIsLoading(true);
    setError(null);

    try {
      // Check if user has custom API key in settings
      let customApiKey = '';
      try {
        const storedSettings = JSON.parse(
          localStorage.getItem('deutsch_lernen_settings_v1') || '{}'
        );
        customApiKey = storedSettings.customApiKey || '';
      } catch (e) {}

      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          input: trimmed,
          mode: searchMode,
          userApiKey: customApiKey,
        }),
      });

      if (!res.ok) {
        throw new Error(`Gagal menghubungi server (${res.status})`);
      }

      const data: AnalyzeResponse = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      setResult(data);

      // Automatically save to search history
      saveHistoryItem(trimmed, data);
    } catch (err: any) {
      console.error('Analysis error:', err);
      setError(
        err.message ||
          'Terjadi kesalahan saat menghubungi AI. Silakan coba lagi.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectRecommendation = (word: string) => {
    setInputText(word);
    executeAnalysis(word, mode);
  };

  const handleSelectSentenceRecommendation = (newSentence: string) => {
    setInputText(newSentence);
    executeAnalysis(newSentence, mode);
  };

  const handleQuickExample = (text: string, exMode: LanguageMode) => {
    setInputText(text);
    setMode(exMode);
    executeAnalysis(text, exMode);
  };

  return (
    <div>
      {/* Hero Header */}
      <div style={{ textAlign: 'center', marginBottom: 28 }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '6px 16px',
            borderRadius: 'var(--radius-pill)',
            background: 'var(--accent-glow)',
            color: 'var(--accent-primary)',
            fontSize: '0.85rem',
            fontWeight: 700,
            marginBottom: 12,
            border: '1px solid var(--border-subtle)',
          }}
        >
          <span>✨</span>
          <span>AI-Powered German Learning & Pedagogy</span>
        </div>

        <h1 className="hero-title">
          Penerjemah & Kamus Bahasa Jerman Cerdas
        </h1>
        <p className="hero-subtitle">
          Bukan sekadar terjemahan harfiah — pahami konteks, tata bahasa (grammar),
          artikel <em>(der/die/das)</em>, deteksi umlaut, dan analisis kata secara mendalam.
        </p>
      </div>

      {/* Main Search Input */}
      <SearchInput
        value={inputText}
        onChange={setInputText}
        onSubmit={(val) => executeAnalysis(val, mode)}
        mode={mode}
        onModeChange={(newMode) => {
          setMode(newMode);
          if (inputText.trim()) {
            executeAnalysis(inputText, newMode);
          }
        }}
        isLoading={isLoading}
      />

      {/* Quick Example Pills */}
      <div
        style={{
          marginTop: 14,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          flexWrap: 'wrap',
        }}
      >
        <span
          style={{
            fontSize: '0.78rem',
            color: 'var(--text-muted)',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}
        >
          Coba contoh:
        </span>
        <button
          type="button"
          onClick={() => handleQuickExample('schon', 'de-id')}
          className="btn btn-ghost"
          style={{
            fontSize: '0.82rem',
            padding: '4px 10px',
            borderRadius: 'var(--radius-pill)',
            background: 'var(--bg-surface-elevated)',
            border: '1px solid var(--border-subtle)',
          }}
        >
          schon (deteksi umlaut)
        </button>
        <button
          type="button"
          onClick={() => handleQuickExample('bekommen', 'de-id')}
          className="btn btn-ghost"
          style={{
            fontSize: '0.82rem',
            padding: '4px 10px',
            borderRadius: 'var(--radius-pill)',
            background: 'var(--bg-surface-elevated)',
            border: '1px solid var(--border-subtle)',
          }}
        >
          bekommen (false friend)
        </button>
        <button
          type="button"
          onClick={() => handleQuickExample('der Tisch', 'de-id')}
          className="btn btn-ghost"
          style={{
            fontSize: '0.82rem',
            padding: '4px 10px',
            borderRadius: 'var(--radius-pill)',
            background: 'var(--bg-surface-elevated)',
            border: '1px solid var(--border-subtle)',
          }}
        >
          der Tisch (A1)
        </button>
        <button
          type="button"
          onClick={() => handleQuickExample('die Herausforderung', 'de-id')}
          className="btn btn-ghost"
          style={{
            fontSize: '0.82rem',
            padding: '4px 10px',
            borderRadius: 'var(--radius-pill)',
            background: 'var(--bg-surface-elevated)',
            border: '1px solid var(--border-subtle)',
          }}
        >
          Herausforderung (C1)
        </button>
        <button
          type="button"
          onClick={() => handleQuickExample('unumgänglich', 'de-id')}
          className="btn btn-ghost"
          style={{
            fontSize: '0.82rem',
            padding: '4px 10px',
            borderRadius: 'var(--radius-pill)',
            background: 'var(--bg-surface-elevated)',
            border: '1px solid var(--border-subtle)',
          }}
        >
          unumgänglich (C2)
        </button>
        <button
          type="button"
          onClick={() => handleQuickExample('dem Mann', 'de-id')}
          className="btn btn-ghost"
          style={{
            fontSize: '0.82rem',
            padding: '4px 10px',
            borderRadius: 'var(--radius-pill)',
            background: 'var(--bg-surface-elevated)',
            border: '1px solid var(--border-subtle)',
          }}
        >
          dem Mann (Kasus Dativ)
        </button>
        <button
          type="button"
          onClick={() => handleQuickExample('Häuser', 'de-id')}
          className="btn btn-ghost"
          style={{
            fontSize: '0.82rem',
            padding: '4px 10px',
            borderRadius: 'var(--radius-pill)',
            background: 'var(--bg-surface-elevated)',
            border: '1px solid var(--border-subtle)',
          }}
        >
          Häuser (Bentuk Jamak)
        </button>
        <button
          type="button"
          onClick={() => handleQuickExample('freziet', 'de-id')}
          className="btn btn-ghost"
          style={{
            fontSize: '0.82rem',
            padding: '4px 10px',
            borderRadius: 'var(--radius-pill)',
            background: 'var(--bg-surface-elevated)',
            border: '1px solid var(--border-subtle)',
          }}
        >
          freziet (Salah Ketik / Typo)
        </button>
        <button
          type="button"
          onClick={() =>
            handleQuickExample(
              'Ich möchte morgen nach Berlin fahren.',
              'de-id'
            )
          }
          className="btn btn-ghost"
          style={{
            fontSize: '0.82rem',
            padding: '4px 10px',
            borderRadius: 'var(--radius-pill)',
            background: 'var(--bg-surface-elevated)',
            border: '1px solid var(--border-subtle)',
          }}
        >
          Kalimat Jerman (Satzklammer)
        </button>
        <button
          type="button"
          onClick={() =>
            handleQuickExample('Saya ingin pergi ke Jerman.', 'id-de')
          }
          className="btn btn-ghost"
          style={{
            fontSize: '0.82rem',
            padding: '4px 10px',
            borderRadius: 'var(--radius-pill)',
            background: 'var(--bg-surface-elevated)',
            border: '1px solid var(--border-subtle)',
          }}
        >
          ID → DE (Pergi ke Jerman)
        </button>
        <button
          type="button"
          onClick={() => handleQuickExample('Saya suka makan.', 'id-de')}
          className="btn btn-ghost"
          style={{
            fontSize: '0.82rem',
            padding: '4px 10px',
            borderRadius: 'var(--radius-pill)',
            background: 'var(--bg-surface-elevated)',
            border: '1px solid var(--border-subtle)',
          }}
        >
          ID → DE (Suka makan / gerne)
        </button>
      </div>

      {/* Typo and Umlaut Recommendations Box */}
      {result && (
        <WordRecommendation
          recommendations={result.recommendations}
          sentenceOptions={result.sentenceUmlautOptions}
          onSelectWord={handleSelectRecommendation}
          onSelectSentence={handleSelectSentenceRecommendation}
        />
      )}

      {/* Loading State */}
      {isLoading && <LoadingState />}

      {/* Error State */}
      {error && !isLoading && (
        <ErrorState
          message={error}
          onRetry={() => executeAnalysis(inputText, mode)}
        />
      )}

      {/* Word Result View */}
      {result?.wordResult && !isLoading && (
        <WordResultCard
          result={result.wordResult}
          onNavigateWord={(targetWord) => {
            setInputText(targetWord);
            executeAnalysis(targetWord, 'de-id');
            window.scrollTo({ top: 120, behavior: 'smooth' });
          }}
        />
      )}

      {/* Sentence Result View */}
      {result?.sentenceResult && !isLoading && (
        <SentenceResultCard
          result={result.sentenceResult}
          onNavigateWord={(targetWord) => {
            setInputText(targetWord);
            setMode('de-id');
            executeAnalysis(targetWord, 'de-id');
            window.scrollTo({ top: 120, behavior: 'smooth' });
          }}
        />
      )}

      {/* Educational Footer Banner */}
      {!result && !isLoading && (
        <div
          className="card"
          style={{
            marginTop: 40,
            padding: '32px',
            background: 'var(--bg-surface-subtle)',
            border: '1px solid var(--border-subtle)',
          }}
        >
          <h3
            style={{
              fontSize: '1.15rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: 12,
            }}
          >
            Mengapa Belajar Bahasa Jerman dengan DeutschLernen AI?
          </h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 20,
            }}
          >
            <div>
              <div
                style={{
                  fontSize: '1.25rem',
                  marginBottom: 6,
                }}
              >
                🔵🔴🟢
              </div>
              <strong style={{ color: 'var(--text-primary)' }}>
                Gender & Artikel (der, die, das)
              </strong>
              <p
                style={{
                  fontSize: '0.88rem',
                  color: 'var(--text-secondary)',
                  marginTop: 4,
                }}
              >
                Setiap kata benda Jerman selalu ditampilkan bersama artikel
                dan kode warna standar untuk mempermudah daya ingat Anda.
              </p>
            </div>
            <div>
              <div
                style={{
                  fontSize: '1.25rem',
                  marginBottom: 6,
                }}
              >
                🛡️
              </div>
              <strong style={{ color: 'var(--text-primary)' }}>
                Deteksi Umlaut & Typo
              </strong>
              <p
                style={{
                  fontSize: '0.88rem',
                  color: 'var(--text-secondary)',
                  marginTop: 4,
                }}
              >
                Mengetik <em>schon</em> akan mendeteksi apakah Anda bermaksud{' '}
                <em>schön</em> (cantik) atau <em>schon</em> (sudah) tanpa mengubahnya
                secara sepihak.
              </p>
            </div>
            <div>
              <div
                style={{
                  fontSize: '1.25rem',
                  marginBottom: 6,
                }}
              >
                🧩
              </div>
              <strong style={{ color: 'var(--text-primary)' }}>
                Analisis Kalimat Kata-demi-Kata
              </strong>
              <p
                style={{
                  fontSize: '0.88rem',
                  color: 'var(--text-secondary)',
                  marginTop: 4,
                }}
              >
                Pahami struktur kalimat Jerman (posisi kata kerja V2,
                Satzklammer, dan kasus Dativ/Akkusativ) dalam setiap kalimat yang Anda terjemahkan.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
