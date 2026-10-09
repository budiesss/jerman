'use client';

import React, { useRef, useState, useEffect } from 'react';
import { LanguageMode } from '@/lib/types';
import UmlautKeyboard from './UmlautKeyboard';

// Extend window interface for Web Speech Recognition
declare global {
  interface Window {
    SpeechRecognition?: any;
    webkitSpeechRecognition?: any;
  }
}

interface SearchInputProps {
  value: string;
  onChange: (val: string) => void;
  onSubmit: (val: string) => void;
  mode: LanguageMode;
  onModeChange: (mode: LanguageMode) => void;
  isLoading: boolean;
  placeholder?: string;
}

export default function SearchInput({
  value,
  onChange,
  onSubmit,
  mode,
  onModeChange,
  isLoading,
  placeholder,
}: SearchInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isListening, setIsListening] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hasSpeech = !!(window.SpeechRecognition || window.webkitSpeechRecognition);
      setSpeechSupported(hasSpeech);
    }
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (value.trim() && !isLoading) {
        onSubmit(value);
      }
    }
  };

  const handleInsertChar = (char: string) => {
    if (!textareaRef.current) {
      onChange(value + char);
      return;
    }
    const el = textareaRef.current;
    const start = el.selectionStart ?? value.length;
    const end = el.selectionEnd ?? value.length;
    const nextVal = value.substring(0, start) + char + value.substring(end);
    onChange(nextVal);

    setTimeout(() => {
      el.focus();
      el.setSelectionRange(start + char.length, start + char.length);
    }, 10);
  };

  const handleClear = () => {
    onChange('');
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  const handleSwapMode = () => {
    onModeChange(mode === 'de-id' ? 'id-de' : 'de-id');
  };

  const handleToggleVoice = () => {
    if (!speechSupported) {
      alert('Fitur input suara belum didukung di browser ini. Anda dapat menggunakan keyboard biasa.');
      return;
    }

    if (isListening) {
      setIsListening(false);
      return;
    }

    try {
      const SpeechRecognitionClass =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognitionClass();
      recognition.lang = mode === 'de-id' ? 'de-DE' : 'id-ID';
      recognition.continuous = false;
      recognition.interimResults = false;

      setIsListening(true);

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        if (transcript) {
          onChange(transcript);
        }
        setIsListening(false);
      };

      recognition.onerror = () => {
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } catch (err) {
      console.error('Speech recognition error:', err);
      setIsListening(false);
    }
  };

  const defaultPlaceholder =
    mode === 'de-id'
      ? 'Ketik satu kata (misal: schön, Tisch, gehen, bekommen) atau kalimat Jerman lengkap...'
      : 'Ketik kata (misal: cantik, meja, makan) atau kalimat Indonesia lengkap (misal: Saya ingin pergi ke Jerman)...';

  return (
    <div className="card" style={{ padding: '20px 24px', background: 'var(--bg-surface)' }}>
      {/* Mode Switcher Tabs */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 12,
          marginBottom: 16,
          paddingBottom: 14,
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            flexWrap: 'wrap',
            maxWidth: '100%',
          }}
        >
          <button
            type="button"
            onClick={() => onModeChange('de-id')}
            className={`btn ${mode === 'de-id' ? 'btn-primary' : 'btn-ghost'}`}
            style={{
              padding: '8px 14px',
              fontSize: '0.85rem',
              borderRadius: 'var(--radius-pill)',
              minHeight: 38,
            }}
          >
            <span>🇩🇪 DE</span>
            <span style={{ opacity: 0.6 }}>→</span>
            <span>🇮🇩 ID</span>
          </button>

          <button
            type="button"
            onClick={handleSwapMode}
            className="btn btn-ghost btn-icon"
            title="Tukar arah bahasa (Deutsch ⇄ Indonesia)"
            style={{ borderRadius: '50%', minHeight: 38, width: 38, height: 38 }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
            </svg>
          </button>

          <button
            type="button"
            onClick={() => onModeChange('id-de')}
            className={`btn ${mode === 'id-de' ? 'btn-primary' : 'btn-ghost'}`}
            style={{
              padding: '8px 14px',
              fontSize: '0.85rem',
              borderRadius: 'var(--radius-pill)',
              minHeight: 38,
            }}
          >
            <span>🇮🇩 ID</span>
            <span style={{ opacity: 0.6 }}>→</span>
            <span>🇩🇪 DE</span>
          </button>
        </div>

        {/* Umlaut quick keys if German source */}
        {mode === 'de-id' && (
          <div style={{ maxWidth: '100%', overflowX: 'auto' }}>
            <UmlautKeyboard onInsertChar={handleInsertChar} />
          </div>
        )}
      </div>

      {/* Main Textarea Input */}
      <div style={{ position: 'relative' }}>
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder || defaultPlaceholder}
          rows={3}
          style={{
            width: '100%',
            padding: '14px 18px',
            fontSize: '1.15rem',
            lineHeight: 1.5,
            color: 'var(--text-primary)',
            background: 'var(--bg-input)',
            border: '1.5px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            resize: 'vertical',
            outline: 'none',
            fontFamily: 'inherit',
            transition: 'border-color var(--transition-fast), box-shadow var(--transition-fast)',
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = 'var(--accent-primary)';
            e.currentTarget.style.boxShadow = '0 0 0 3px var(--accent-glow)';
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = 'var(--border-subtle)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        />
      </div>

      {/* Action Toolbar Below Input */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 12,
          flexWrap: 'wrap',
          gap: 12,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {value && (
            <button
              type="button"
              onClick={handleClear}
              className="btn btn-ghost"
              style={{ fontSize: '0.85rem', padding: '6px 12px' }}
              title="Bersihkan input teks"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
              Hapus
            </button>
          )}

          {speechSupported && (
            <button
              type="button"
              onClick={handleToggleVoice}
              className={`btn ${isListening ? 'btn-primary' : 'btn-ghost'}`}
              style={{
                fontSize: '0.85rem',
                padding: '6px 12px',
                color: isListening ? '#ffffff' : 'var(--text-secondary)',
                background: isListening ? '#ef4444' : undefined,
              }}
              title={
                isListening
                  ? 'Sedang mendengarkan... Klik untuk berhenti'
                  : `Ucapkan dalam ${mode === 'de-id' ? 'bahasa Jerman' : 'bahasa Indonesia'}`
              }
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                <line x1="12" y1="19" x2="12" y2="22" />
              </svg>
              <span>{isListening ? 'Mendengarkan...' : 'Suara'}</span>
            </button>
          )}

          <span
            style={{
              fontSize: '0.78rem',
              color: 'var(--text-muted)',
              display: 'none',
            }}
            className="keyboard-hint"
          >
            Tekan Enter ↵ untuk mencari
          </span>
        </div>

        <button
          type="button"
          onClick={() => onSubmit(value)}
          disabled={!value.trim() || isLoading}
          className="btn btn-primary btn-submit-responsive"
          style={{
            padding: '10px 24px',
            fontSize: '0.98rem',
            opacity: !value.trim() || isLoading ? 0.6 : 1,
            cursor: !value.trim() || isLoading ? 'not-allowed' : 'pointer',
          }}
        >
          {isLoading ? (
            <>
              <span
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: '50%',
                  border: '2px solid rgba(255,255,255,0.4)',
                  borderTopColor: '#ffffff',
                  display: 'inline-block',
                  animation: 'spin 0.8s linear infinite',
                }}
              />
              <span>Menganalisis...</span>
            </>
          ) : (
            <>
              <span>Terjemahkan & Analisis</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
