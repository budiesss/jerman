'use client';

import React, { useState, useEffect } from 'react';
import { UserSettings } from '@/lib/types';
import { getSettings, saveSettings, clearAllHistory, clearAllFavorites } from '@/lib/storage';
import { speakGerman } from '@/lib/speech';

export default function SettingsPage() {
  const [settings, setSettings] = useState<UserSettings>({
    theme: 'dark',
    customApiKey: '',
    aiProvider: 'default',
    speechRate: 0.9,
    autoPronounce: false,
  });
  const [saveStatus, setSaveStatus] = useState<string | null>(null);

  useEffect(() => {
    setSettings(getSettings());
  }, []);

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
    const updated = saveSettings({ theme: newTheme });
    setSettings(updated);
    showNotice('Tema tampilan berhasil diubah.');
  };

  const handleSaveApiKey = () => {
    saveSettings({ customApiKey: settings.customApiKey });
    showNotice('Pengaturan API Key berhasil disimpan.');
  };

  const handleSpeechRateChange = (rate: number) => {
    const updated = saveSettings({ speechRate: rate });
    setSettings(updated);
  };

  const showNotice = (msg: string) => {
    setSaveStatus(msg);
    setTimeout(() => setSaveStatus(null), 3000);
  };

  const testSpeech = () => {
    speakGerman('Guten Tag! Willkommen beim Deutschlernen mit künstlicher Intelligenz.', settings.speechRate);
  };

  const handleClearHistory = () => {
    if (confirm('Apakah Anda yakin ingin menghapus seluruh riwayat pencarian?')) {
      clearAllHistory();
      showNotice('Riwayat pencarian telah dibersihkan.');
    }
  };

  const handleClearFavorites = () => {
    if (confirm('Apakah Anda yakin ingin menghapus seluruh kata favorit tersimpan?')) {
      clearAllFavorites();
      showNotice('Daftar kata favorit telah dibersihkan.');
    }
  };

  return (
    <div style={{ maxWidth: 760, margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: 28 }}>
        <h1
          style={{
            fontSize: '2.2rem',
            fontWeight: 800,
            letterSpacing: '-0.5px',
            color: 'var(--text-primary)',
          }}
        >
          Pengaturan Aplikasi
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginTop: 4 }}>
          Konfigurasi tampilan, mesin AI, pelafalan audio, dan data penyimpanan lokal.
        </p>
      </div>

      {saveStatus && (
        <div
          className="animate-fade-in"
          style={{
            marginBottom: 20,
            padding: '12px 18px',
            borderRadius: 'var(--radius-md)',
            background: 'rgba(16, 185, 129, 0.15)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            color: '#10b981',
            fontWeight: 600,
            fontSize: '0.92rem',
          }}
        >
          ✓ {saveStatus}
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {/* Theme Settings */}
        <div className="card" style={{ padding: 24 }}>
          <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 6 }}>
            Tema Tampilan (Erscheinungsbild)
          </h2>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: 16 }}>
            Pilih mode terang, gelap, atau sesuaikan dengan sistem perangkat Anda.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={() => handleThemeChange('dark')}
              className={`btn ${settings.theme === 'dark' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ padding: '10px 20px' }}
            >
              🌙 Gelap (Dark Mode)
            </button>
            <button
              type="button"
              onClick={() => handleThemeChange('light')}
              className={`btn ${settings.theme === 'light' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ padding: '10px 20px' }}
            >
              ☀️ Terang (Light Mode)
            </button>
            <button
              type="button"
              onClick={() => handleThemeChange('system')}
              className={`btn ${settings.theme === 'system' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ padding: '10px 20px' }}
            >
              💻 Mengikuti Sistem
            </button>
          </div>
        </div>

        {/* AI Engine & API Key Configuration */}
        <div className="card" style={{ padding: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
            <span style={{ fontSize: '1.25rem' }}>🤖</span>
            <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              Integrasi AI (LLM Engine)
            </h2>
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: 16 }}>
            Aplikasi dilengkapi basis data linguistik bahasa Jerman berstandar tinggi.
            Untuk analisis kalimat tak terbatas di luar basis data kurasi, Anda dapat memasukkan Gemini API Key pribadi.
          </p>

          <div style={{ marginBottom: 16 }}>
            <label
              style={{
                fontSize: '0.82rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                display: 'block',
                marginBottom: 6,
              }}
            >
              Google Gemini API Key (Opsional / Override)
            </label>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <input
                type="password"
                value={settings.customApiKey || ''}
                onChange={(e) =>
                  setSettings({ ...settings, customApiKey: e.target.value })
                }
                placeholder="AIzaSy... (atau gunakan environment AI_API_KEY server)"
                style={{
                  flex: '1 1 240px',
                  padding: '10px 14px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--bg-input)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-primary)',
                  fontSize: '0.92rem',
                  fontFamily: 'var(--font-mono)',
                  outline: 'none',
                }}
              />
              <button
                type="button"
                onClick={handleSaveApiKey}
                className="btn btn-secondary"
              >
                Simpan Key
              </button>
            </div>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: 6 }}>
              API Key Anda disimpan aman di browser dan hanya dikirimkan ke server backend Anda.
            </p>
          </div>
        </div>

        {/* Audio & Pronunciation Settings */}
        <div className="card" style={{ padding: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
            <span style={{ fontSize: '1.25rem' }}>🔊</span>
            <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              Pelafalan & Audio Jerman (Aussprache)
            </h2>
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: 16 }}>
            Sesuaikan kecepatan pelafalan audio penutur asli bahasa Jerman agar lebih mudah dipahami bagi pembelajar.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16, flexWrap: 'wrap' }}>
            <label style={{ fontSize: '0.88rem', color: 'var(--text-primary)', minWidth: 140 }}>
              Kecepatan Suara: <strong>{settings.speechRate}x</strong>
            </label>
            <input
              type="range"
              min="0.7"
              max="1.2"
              step="0.05"
              value={settings.speechRate}
              onChange={(e) => handleSpeechRateChange(parseFloat(e.target.value))}
              style={{ flex: 1 }}
            />
            <button
              type="button"
              onClick={testSpeech}
              className="btn btn-secondary"
              style={{ fontSize: '0.85rem' }}
            >
              Uji Suara
            </button>
          </div>
        </div>

        {/* Storage & Data Management */}
        <div className="card" style={{ padding: 24 }}>
          <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 6 }}>
            Manajemen Data & Penyimpanan
          </h2>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: 16 }}>
            Kelola data riwayat pencarian dan daftar kosakata favorit yang disimpan di perangkat ini.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={handleClearHistory}
              className="btn btn-ghost"
              style={{
                color: '#ef4444',
                background: 'rgba(239, 68, 68, 0.08)',
                border: '1px solid rgba(239, 68, 68, 0.25)',
              }}
            >
              Kosongkan Riwayat Pencarian
            </button>

            <button
              type="button"
              onClick={handleClearFavorites}
              className="btn btn-ghost"
              style={{
                color: '#ef4444',
                background: 'rgba(239, 68, 68, 0.08)',
                border: '1px solid rgba(239, 68, 68, 0.25)',
              }}
            >
              Kosongkan Meine Wörter (Favorit)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
