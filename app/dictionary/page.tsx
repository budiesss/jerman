'use client';

import React, { useState, useEffect } from 'react';
import { GERMAN_DICTIONARY } from '@/lib/germanDictionaryData';
import { WordResult, WordClass, CEFRLevel } from '@/lib/types';
import WordResultCard from '@/components/WordResultCard';
import WordTypeBadge from '@/components/WordTypeBadge';
import AudioButton from '@/components/AudioButton';
import UmlautKeyboard from '@/components/UmlautKeyboard';
import LoadingState from '@/components/LoadingState';
import ErrorState from '@/components/ErrorState';
import { saveHistoryItem } from '@/lib/storage';
import { detectInflectedGermanForm, detectGermanTypo } from '@/lib/inflectionDetector';

const POPULAR_WORDS = [
  // A1
  'schön',
  'buch',
  'kind',
  'tag',
  'nacht',
  'haus',
  'gehen',
  'kaufen',
  'gross',
  'klein',
  // A2
  'termin',
  'rezept',
  'medikament',
  'koffer',
  'anfangen',
  'bezahlen',
  'schmecken',
  'gesund',
  'zufrieden',
  // B1
  'bewerbung',
  'lebenslauf',
  'vertrag',
  'meinung',
  'vertrauen',
  'mut',
  'zustimmen',
  'ablehnen',
  'zuverlaessig',
  // B2
  'unternehmen',
  'branche',
  'kompromiss',
  'bewaeltigen',
  'scheitern',
  'beruecksichtigen',
  'ausschlaggebend',
  'differenziert',
  'nachhaltig',
  // C1
  'paradigma',
  'implikation',
  'ambivalenz',
  'plaedoyer',
  'antizipieren',
  'relativieren',
  'stringent',
  'subtil',
  'akribisch',
  // C2 & Native
  'koinzidenz',
  'animositaet',
  'hybris',
  'chuzpe',
  'evozieren',
  'desavouieren',
  'diametral',
  'lapidar',
  // Idiome & Kolokasi
  'daumen_druecken',
  'schwein_haben',
  'auf_die_nerven_gehen',
  'nagel_auf_den_kopf',
  'kirche_im_dorf_lassen',
  'bock_haben',
  'alles_in_butter',
  'klartext_reden',
  'zur_verfuegung_stehen',
  'in_betracht_ziehen',
  'eine_entscheidung_treffen',
  'in_kauf_nehmen',
  // Komposita
  'handschuh',
  'krankenhaus',
  'flughafen',
  'fahrrad',
  'kuehlschrank',
  'woerterbuch',
  'hauptbahnhof',
];

export default function DictionaryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedWord, setSelectedWord] = useState<WordResult | null>(null);
  const [filterClass, setFilterClass] = useState<string>('all');
  const [filterLevel, setFilterLevel] = useState<string>('all');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 250k Lexicon Database States
  const [catalogMode, setCatalogMode] = useState<'lexicon250k' | 'curated'>('lexicon250k');
  const [lexiconResults, setLexiconResults] = useState<any[]>([]);
  const [lexiconTotal, setLexiconTotal] = useState(250533);
  const [lexiconPage, setLexiconPage] = useState(1);
  const [lexiconTotalPages, setLexiconTotalPages] = useState(1);
  const [isFetchingLexicon, setIsFetchingLexicon] = useState(false);
  const [lexiconStats, setLexiconStats] = useState<any>(null);

  // Default to first word on initial mount
  useEffect(() => {
    if (!selectedWord && GERMAN_DICTIONARY['schön']) {
      setSelectedWord(GERMAN_DICTIONARY['schön']);
    }
  }, [selectedWord]);

  // Load 250k stats on mount
  useEffect(() => {
    fetch('/api/dictionary?stats=true')
      .then((r) => r.json())
      .then((d) => {
        if (d.success && d.stats) {
          setLexiconStats(d.stats);
          setLexiconTotal(d.stats.totalWords);
        }
      })
      .catch((err) => console.error('Failed to load lexicon stats:', err));
  }, []);

  // Fetch paginated words from the 250k database
  useEffect(() => {
    if (catalogMode === 'lexicon250k') {
      setIsFetchingLexicon(true);
      const timer = setTimeout(() => {
        fetch(
          `/api/dictionary?q=${encodeURIComponent(searchTerm)}&level=${filterLevel}&page=${lexiconPage}&limit=30`
        )
          .then((r) => r.json())
          .then((data) => {
            if (data.success) {
              setLexiconResults(data.results || []);
              setLexiconTotal(data.total || 0);
              setLexiconTotalPages(data.totalPages || 1);
            }
          })
          .catch((err) => console.error('Lexicon query error:', err))
          .finally(() => setIsFetchingLexicon(false));
      }, 180);

      return () => clearTimeout(timer);
    }
  }, [catalogMode, searchTerm, filterLevel, lexiconPage]);

  // Reset to page 1 on filter or search term change
  useEffect(() => {
    setLexiconPage(1);
  }, [searchTerm, filterLevel]);

  const handleSearchWord = async (wordToSearch: string) => {
    const trimmed = wordToSearch.trim();
    if (!trimmed) return;

    setIsLoading(true);
    setError(null);

    // 1. Direct local dictionary match
    const clean = trimmed.toLowerCase().replace(/^(der|die|das)\s+/i, '');
    if (GERMAN_DICTIONARY[clean]) {
      const match = GERMAN_DICTIONARY[clean];
      setSelectedWord(match);
      setIsLoading(false);
      saveHistoryItem(trimmed, {
        input: trimmed,
        mode: 'de-id',
        inputType: 'word',
        wordResult: match,
      });
      return;
    }

    // 2. Check local inflected form (Cases: Akkusativ/Dativ/Genitiv, Plural, Verbtempus, Adjektivdeklination)
    const localInflection = detectInflectedGermanForm(trimmed);
    if (localInflection) {
      const baseKey = localInflection.baseWord.toLowerCase();
      if (GERMAN_DICTIONARY[baseKey]) {
        const enrichedMatch: WordResult = {
          ...GERMAN_DICTIONARY[baseKey],
          inflectionInfo: localInflection,
        };
        setSelectedWord(enrichedMatch);
        setIsLoading(false);
        saveHistoryItem(trimmed, {
          input: trimmed,
          mode: 'de-id',
          inputType: 'word',
          wordResult: enrichedMatch,
        });
        return;
      }
    }

    // 2.5. Check 250,000-word Lexicon database
    try {
      const lexRes = await fetch(`/api/dictionary?lookup=${encodeURIComponent(clean)}`);
      if (lexRes.ok) {
        const lexData = await lexRes.json();
        if (lexData.success && lexData.wordResult) {
          setSelectedWord(lexData.wordResult);
          setIsLoading(false);
          saveHistoryItem(trimmed, {
            input: trimmed,
            mode: 'de-id',
            inputType: 'word',
            wordResult: lexData.wordResult,
          });
          return;
        }
      }
    } catch {
      // Continue to typo check if lookup fails
    }

    // 3. Check local typo correction
    const localTypo = detectGermanTypo(trimmed);
    if (localTypo) {
      const suggestedKey = localTypo.suggestedWord.toLowerCase();
      if (GERMAN_DICTIONARY[suggestedKey]) {
        const enrichedMatch: WordResult = {
          ...GERMAN_DICTIONARY[suggestedKey],
          typoCorrection: localTypo,
        };
        setSelectedWord(enrichedMatch);
        setIsLoading(false);
        saveHistoryItem(trimmed, {
          input: trimmed,
          mode: 'de-id',
          inputType: 'word',
          wordResult: enrichedMatch,
        });
        return;
      }
    }

    // 4. Fetch from backend AI analyzer (handles unknown words, rare inflections, complex typos)
    try {
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
          mode: 'de-id',
          userApiKey: customApiKey,
        }),
      });

      if (!res.ok) {
        throw new Error(`Gagal mencari kata (${res.status})`);
      }

      const data = await res.json();
      if (data.wordResult) {
        const wordRes: WordResult = {
          ...data.wordResult,
          inflectionInfo: data.wordResult.inflectionInfo || data.inflectionInfo || localInflection || undefined,
          typoCorrection: data.wordResult.typoCorrection || data.typoCorrection || localTypo || undefined,
        };
        setSelectedWord(wordRes);
        saveHistoryItem(trimmed, { ...data, wordResult: wordRes });
      } else {
        throw new Error('Kata tidak ditemukan dalam kamus.');
      }
    } catch (err: any) {
      console.error('Dictionary search error:', err);
      setError(err.message || 'Kata tidak ditemukan.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectLexiconWord = async (item: any) => {
    const clean = item.word.toLowerCase();
    if (GERMAN_DICTIONARY[clean]) {
      setSelectedWord(GERMAN_DICTIONARY[clean]);
      setError(null);
      return;
    }

    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/dictionary?lookup=${encodeURIComponent(item.word)}`);
      const data = await res.json();
      if (data.success && data.wordResult) {
        setSelectedWord(data.wordResult);
      } else {
        handleSearchWord(item.word);
      }
    } catch {
      handleSearchWord(item.word);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInsertChar = (char: string) => {
    setSearchTerm((prev) => prev + char);
  };

  // Pre-detect inflection or typo from user search term in real time
  const detectedSearchInflection = searchTerm.trim() ? detectInflectedGermanForm(searchTerm.trim()) : null;
  const detectedSearchTypo = searchTerm.trim() ? detectGermanTypo(searchTerm.trim()) : null;

  // Filter dictionary items for the sidebar list
  const dictionaryEntries = Object.values(GERMAN_DICTIONARY).filter((w) => {
    const termLower = searchTerm.toLowerCase();
    const isBaseMatch = detectedSearchInflection && w.word.toLowerCase() === detectedSearchInflection.baseWord.toLowerCase();
    const isTypoMatch = detectedSearchTypo && w.word.toLowerCase() === detectedSearchTypo.suggestedWord.toLowerCase();

    const matchesSearch =
      !searchTerm ||
      w.word.toLowerCase().includes(termLower) ||
      w.translations.some((t) => t.toLowerCase().includes(termLower)) ||
      Boolean(isBaseMatch) ||
      Boolean(isTypoMatch);

    const matchesClass =
      filterClass === 'all' || w.wordClass === filterClass;

    const matchesLevel =
      filterLevel === 'all' || w.cefrLevel === filterLevel;

    return matchesSearch && matchesClass && matchesLevel;
  });

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
          <h1
            style={{
              fontSize: '2.2rem',
              fontWeight: 800,
              letterSpacing: '-0.5px',
              color: 'var(--text-primary)',
              margin: 0,
            }}
          >
            Wörterbuch (Kamus Bahasa Jerman)
          </h1>
          <span
            style={{
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              color: '#ffffff',
              padding: '4px 12px',
              borderRadius: 20,
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.3px',
              boxShadow: '0 2px 8px rgba(16, 185, 129, 0.25)',
            }}
          >
            250.533+ Kosakata Aktif
          </span>
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginTop: 6, marginBottom: 12 }}>
          Database kamus komprehensif dari level A1 hingga C2 & Native Speaker dengan artikel, konjugasi, dan contoh penggunaan.
        </p>

        {/* Level Stats Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            flexWrap: 'wrap',
            padding: '8px 14px',
            background: 'var(--bg-surface-elevated)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.8rem',
            color: 'var(--text-secondary)',
          }}
        >
          <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>📊 Cakupan Level:</span>
          <span>A1 (5.064 kata)</span>
          <span>•</span>
          <span>A2 (10.029 kata)</span>
          <span>•</span>
          <span>B1 (22.543 kata)</span>
          <span>•</span>
          <span>B2 (50.098 kata)</span>
          <span>•</span>
          <span>C1 (75.140 kata)</span>
          <span>•</span>
          <span>C2 & Native (87.659 kata)</span>
        </div>
      </div>

      {/* Search Bar & Umlauts */}
      <div
        className="card"
        style={{
          padding: '18px 24px',
          background: 'var(--bg-surface)',
          marginBottom: 24,
        }}
      >
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 260, position: 'relative' }}>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleSearchWord(searchTerm);
                }
              }}
              placeholder="Cari kata Jerman atau Indonesia (misal: Tisch, schön, Häuser, freziet)..."
              style={{
                width: '100%',
                padding: '12px 18px',
                fontSize: '1.05rem',
                color: 'var(--text-primary)',
                background: 'var(--bg-input)',
                border: '1.5px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                outline: 'none',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-primary)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
              }}
            />
          </div>

          <button
            type="button"
            onClick={() => handleSearchWord(searchTerm)}
            disabled={!searchTerm.trim() || isLoading}
            className="btn btn-primary"
            style={{ padding: '0 24px' }}
          >
            Cari Kata
          </button>
        </div>

        {/* Live Detected Inflection Hint */}
        {detectedSearchInflection && (
          <div
            style={{
              marginTop: 10,
              padding: '8px 14px',
              borderRadius: 'var(--radius-sm)',
              background: 'rgba(99, 102, 241, 0.12)',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 10,
              flexWrap: 'wrap',
              fontSize: '0.85rem',
            }}
          >
            <div style={{ color: 'var(--text-primary)' }}>
              📘 <strong>Bentuk Lain Terdeteksi:</strong> "{searchTerm}" merupakan{' '}
              <span style={{ color: '#818cf8', fontWeight: 600 }}>{detectedSearchInflection.grammaticalForm}</span> dari{' '}
              <strong>{detectedSearchInflection.baseForm || detectedSearchInflection.baseWord}</strong>.
            </div>
            <button
              type="button"
              onClick={() => {
                const target = detectedSearchInflection.baseWord;
                setSearchTerm(target);
                handleSearchWord(target);
              }}
              style={{
                background: 'var(--accent-primary)',
                color: '#fff',
                border: 'none',
                padding: '3px 10px',
                borderRadius: 4,
                fontSize: '0.78rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Lihat Bentuk Dasar →
            </button>
          </div>
        )}

        {/* Live Detected Typo Hint */}
        {detectedSearchTypo && (
          <div
            style={{
              marginTop: 10,
              padding: '8px 14px',
              borderRadius: 'var(--radius-sm)',
              background: 'rgba(245, 158, 11, 0.12)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 10,
              flexWrap: 'wrap',
              fontSize: '0.85rem',
            }}
          >
            <div style={{ color: 'var(--text-primary)' }}>
              💡 <strong>Kemungkinan Salah Ketik:</strong> Apakah maksud Anda{' '}
              <strong style={{ color: 'var(--accent-gold)' }}>
                {detectedSearchTypo.displaySuggestedWord || detectedSearchTypo.suggestedWord}
              </strong>?
            </div>
            <button
              type="button"
              onClick={() => {
                const target = detectedSearchTypo.suggestedWord;
                setSearchTerm(target);
                handleSearchWord(target);
              }}
              style={{
                background: 'var(--accent-gold)',
                color: '#1a1005',
                border: 'none',
                padding: '3px 10px',
                borderRadius: 4,
                fontSize: '0.78rem',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              Gunakan Rekomendasi →
            </button>
          </div>
        )}

        {/* Quick test pills for inflection and typo demonstration */}
        <div
          style={{
            marginTop: 12,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            flexWrap: 'wrap',
          }}
        >
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>
            Uji Coba Cepat:
          </span>
          <button
            type="button"
            onClick={() => {
              setSearchTerm('Häuser');
              handleSearchWord('Häuser');
            }}
            className="btn btn-ghost"
            style={{ fontSize: '0.78rem', padding: '3px 8px', borderRadius: 4, background: 'var(--bg-surface-elevated)' }}
          >
            Häuser (Plural)
          </button>
          <button
            type="button"
            onClick={() => {
              setSearchTerm('dem Mann');
              handleSearchWord('dem Mann');
            }}
            className="btn btn-ghost"
            style={{ fontSize: '0.78rem', padding: '3px 8px', borderRadius: 4, background: 'var(--bg-surface-elevated)' }}
          >
            dem Mann (Dativ)
          </button>
          <button
            type="button"
            onClick={() => {
              setSearchTerm('ging');
              handleSearchWord('ging');
            }}
            className="btn btn-ghost"
            style={{ fontSize: '0.78rem', padding: '3px 8px', borderRadius: 4, background: 'var(--bg-surface-elevated)' }}
          >
            ging (Lampau)
          </button>
          <button
            type="button"
            onClick={() => {
              setSearchTerm('freziet');
              handleSearchWord('freziet');
            }}
            className="btn btn-ghost"
            style={{ fontSize: '0.78rem', padding: '3px 8px', borderRadius: 4, background: 'var(--bg-surface-elevated)' }}
          >
            freziet (Typo)
          </button>
        </div>

        {/* Umlaut quick keys */}
        <div style={{ marginTop: 14 }}>
          <UmlautKeyboard onInsertChar={handleInsertChar} />
        </div>
      </div>

      {/* Filter and Browse Section */}
      <div className="responsive-two-col">
        {/* Left Column: Word List & Filters */}
        <div className="card" style={{ padding: 20 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 14,
            }}
          >
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              Daftar Kosakata ({dictionaryEntries.length})
            </h3>
          </div>

          {/* Filters */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 16 }}>
            <div>
              <label
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--text-muted)',
                  display: 'block',
                  marginBottom: 4,
                  textTransform: 'uppercase',
                }}
              >
                Jenis Kata (Wortart)
              </label>
              <select
                value={filterClass}
                onChange={(e) => setFilterClass(e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-primary)',
                  fontSize: '0.88rem',
                  outline: 'none',
                }}
              >
                <option value="all">Semua Jenis Kata</option>
                <option value="Nomen">Nomen (Kata Benda)</option>
                <option value="Verb">Verb (Kata Kerja)</option>
                <option value="Modalverb">Modalverb</option>
                <option value="Adjektiv">Adjektiv (Kata Sifat)</option>
                <option value="Adverb">Adverb (Keterangan)</option>
                <option value="Präposition">Präposition (Kata Depan)</option>
              </select>
            </div>

            <div>
              <label
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--text-muted)',
                  display: 'block',
                  marginBottom: 4,
                  textTransform: 'uppercase',
                }}
              >
                Level CEFR
              </label>
              <div
                style={{
                  display: 'flex',
                  gap: 4,
                  flexWrap: 'wrap',
                  marginBottom: 8,
                }}
              >
                {(['all', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as const).map((lvl) => (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => setFilterLevel(lvl)}
                    style={{
                      padding: '4px 8px',
                      borderRadius: 4,
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      border: 'none',
                      cursor: 'pointer',
                      background:
                        filterLevel === lvl
                          ? 'var(--accent-primary)'
                          : 'var(--bg-surface-elevated)',
                      color:
                        filterLevel === lvl
                          ? '#ffffff'
                          : 'var(--text-secondary)',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    {lvl === 'all' ? 'Semua' : lvl}
                  </button>
                ))}
              </div>
              <select
                value={filterLevel}
                onChange={(e) => setFilterLevel(e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-primary)',
                  fontSize: '0.88rem',
                  outline: 'none',
                }}
              >
                <option value="all">Semua Level (A1 - C2)</option>
                <option value="A1">A1 (Pemula)</option>
                <option value="A2">A2 (Dasar)</option>
                <option value="B1">B1 (Menengah)</option>
                <option value="B2">B2 (Lanjutan)</option>
                <option value="C1">C1 (Tingkat Mahir)</option>
                <option value="C2">C2 (Tingkat Sangat Mahir / Fasih)</option>
              </select>
            </div>
          </div>

          {/* Mode Switcher Tabs */}
          <div
            style={{
              display: 'flex',
              gap: 8,
              marginBottom: 14,
            }}
          >
            <button
              type="button"
              onClick={() => setCatalogMode('lexicon250k')}
              style={{
                flex: 1,
                padding: '8px 10px',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.8rem',
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
                background:
                  catalogMode === 'lexicon250k'
                    ? 'var(--accent-primary)'
                    : 'var(--bg-surface-elevated)',
                color: catalogMode === 'lexicon250k' ? '#ffffff' : 'var(--text-secondary)',
                transition: 'all 0.15s ease',
              }}
            >
              📚 250.000+ Kosakata ({lexiconTotal.toLocaleString()})
            </button>
            <button
              type="button"
              onClick={() => setCatalogMode('curated')}
              style={{
                flex: 1,
                padding: '8px 10px',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.8rem',
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
                background:
                  catalogMode === 'curated'
                    ? 'var(--accent-primary)'
                    : 'var(--bg-surface-elevated)',
                color: catalogMode === 'curated' ? '#ffffff' : 'var(--text-secondary)',
                transition: 'all 0.15s ease',
              }}
            >
              ⭐ Inti & Idiom ({dictionaryEntries.length})
            </button>
          </div>

          {/* Word Scroll List */}
          <div
            style={{
              maxHeight: '480px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: 6,
              paddingRight: 4,
            }}
          >
            {catalogMode === 'lexicon250k' ? (
              isFetchingLexicon ? (
                <div style={{ textAlign: 'center', padding: '30px 10px', color: 'var(--text-muted)' }}>
                  Memuat data dari 250.000+ kosakata...
                </div>
              ) : lexiconResults.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '30px 10px', color: 'var(--text-muted)' }}>
                  Tidak ada kata yang cocok dalam 250.000+ database.
                </div>
              ) : (
                lexiconResults.map((item, idx) => {
                  const isSelected = selectedWord?.word === item.word;
                  return (
                    <div
                      key={idx}
                      onClick={() => handleSelectLexiconWord(item)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '10px 12px',
                        borderRadius: 'var(--radius-sm)',
                        background: isSelected
                          ? 'var(--accent-glow)'
                          : 'var(--bg-surface-elevated)',
                        border: `1px solid ${
                          isSelected ? 'var(--accent-primary)' : 'var(--border-subtle)'
                        }`,
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                      }}
                    >
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                          <span
                            style={{
                              fontWeight: 700,
                              fontSize: '0.95rem',
                              color: isSelected
                                ? 'var(--accent-primary)'
                                : 'var(--text-primary)',
                            }}
                          >
                            {item.displayWord || item.word}
                          </span>
                          {item.level && (
                            <span
                              className={`badge badge-cefr badge-cefr-${item.level}`}
                              style={{ fontSize: '0.65rem', padding: '1px 5px' }}
                            >
                              {item.level}
                            </span>
                          )}
                          <span
                            style={{
                              fontSize: '0.68rem',
                              color: 'var(--text-muted)',
                              background: 'rgba(255,255,255,0.06)',
                              padding: '1px 5px',
                              borderRadius: 4,
                            }}
                          >
                            {item.wordClass}
                          </span>
                        </div>
                        <div
                          style={{
                            fontSize: '0.78rem',
                            color: 'var(--text-secondary)',
                            marginTop: 2,
                          }}
                        >
                          {item.translation}
                        </div>
                      </div>
                      <AudioButton text={item.word} size="sm" />
                    </div>
                  );
                })
              )
            ) : dictionaryEntries.length === 0 ? (
              <div
                style={{
                  textAlign: 'center',
                  padding: '30px 10px',
                  color: 'var(--text-muted)',
                  fontSize: '0.88rem',
                }}
              >
                Tidak ada kata yang cocok dengan filter.
              </div>
            ) : (
              dictionaryEntries.map((w, idx) => {
                const isSelected = selectedWord?.word === w.word;

                return (
                  <div
                    key={idx}
                    onClick={() => {
                      setSelectedWord(w);
                      setError(null);
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '10px 12px',
                      borderRadius: 'var(--radius-sm)',
                      background: isSelected
                        ? 'var(--accent-glow)'
                        : 'var(--bg-surface-elevated)',
                      border: `1px solid ${
                        isSelected ? 'var(--accent-primary)' : 'var(--border-subtle)'
                      }`,
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <span
                          style={{
                            fontWeight: 700,
                            fontSize: '0.95rem',
                            color: isSelected
                              ? 'var(--accent-primary)'
                              : 'var(--text-primary)',
                          }}
                        >
                          {w.displayWord || w.word}
                        </span>
                        {w.cefrLevel && w.cefrLevel !== 'Level tidak pasti' && (
                          <span
                            className={`badge badge-cefr badge-cefr-${w.cefrLevel}`}
                            style={{ fontSize: '0.65rem', padding: '1px 5px' }}
                          >
                            {w.cefrLevel}
                          </span>
                        )}
                      </div>
                      <div
                        style={{
                          fontSize: '0.78rem',
                          color: 'var(--text-secondary)',
                          marginTop: 2,
                        }}
                      >
                        {w.translations.slice(0, 2).join(', ')}
                      </div>
                    </div>
                    <AudioButton text={w.word} size="sm" />
                  </div>
                );
              })
            )}
          </div>

          {/* Pagination for 250k mode */}
          {catalogMode === 'lexicon250k' && lexiconTotalPages > 1 && (
            <div
              style={{
                marginTop: 12,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: 10,
                borderTop: '1px solid var(--border-subtle)',
                fontSize: '0.78rem',
              }}
            >
              <button
                type="button"
                disabled={lexiconPage <= 1}
                onClick={() => setLexiconPage((p) => Math.max(1, p - 1))}
                className="btn btn-ghost"
                style={{ padding: '4px 10px', fontSize: '0.75rem', borderRadius: 4 }}
              >
                ← Sebelumnya
              </button>
              <span style={{ color: 'var(--text-muted)', fontWeight: 600 }}>
                Halaman {lexiconPage.toLocaleString()} dari {lexiconTotalPages.toLocaleString()}
              </span>
              <button
                type="button"
                disabled={lexiconPage >= lexiconTotalPages}
                onClick={() => setLexiconPage((p) => Math.min(lexiconTotalPages, p + 1))}
                className="btn btn-ghost"
                style={{ padding: '4px 10px', fontSize: '0.75rem', borderRadius: 4 }}
              >
                Berikutnya →
              </button>
            </div>
          )}
        </div>

        {/* Right Column: Detailed Word Card */}
        <div>
          {isLoading && <LoadingState message="Mencari entri kamus lengkap..." />}

          {error && !isLoading && (
            <ErrorState
              message={error}
              onRetry={() => handleSearchWord(searchTerm)}
            />
          )}

          {selectedWord && !isLoading && (
            <div style={{ marginTop: 0 }}>
              <WordResultCard
                result={selectedWord}
                onNavigateWord={(w) => {
                  setSearchTerm(w);
                  handleSearchWord(w);
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
