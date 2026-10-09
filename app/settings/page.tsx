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

  const [testStatus, setTestStatus] = useState<{
    success: boolean;
    message: string;
    latency?: number;
  } | null>(null);

  useEffect(() => {
    setSettings(getSettings());
  }, []);

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
    const updated = saveSettings({ theme: newTheme });
    setSettings(updated);
    showNotice('Tema tampilan berhasil diubah.');
  };

  const handleSaveAllApiKeys = () => {
    const updated = saveSettings({
      customApiKey: settings.customApiKey,
      openaiApiKey: settings.openaiApiKey,
      claudeApiKey: settings.claudeApiKey,
      grokApiKey: settings.grokApiKey,
      deepseekApiKey: settings.deepseekApiKey,
      aiProvider: settings.aiProvider,
    });
    setSettings(updated);
    showNotice('Semua konfigurasi kunci AI dan provider berhasil disimpan!');
  };

  const testProviderConnection = async (provider: string, apiKey?: string) => {
    setTestStatus({ success: true, message: `Menguji koneksi ke ${provider}...` });
    try {
      const res = await fetch('/api/ai-test', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ provider, apiKey }),
      });
      const data = await res.json();
      if (data.success) {
        setTestStatus({
          success: true,
          message: `✓ Terhubung ke ${data.provider} (${data.model})`,
          latency: data.latencyMs,
        });
      } else {
        setTestStatus({
          success: false,
          message: `✗ ${data.error || 'Gagal terhubung'}`,
        });
      }
    } catch (e: any) {
      setTestStatus({
        success: false,
        message: `✗ Kesalahan jaringan: ${e.message}`,
      });
    }
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

        {/* Multi-AI Engine & API Providers Configuration */}
        <div className="card" style={{ padding: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10, marginBottom: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: '1.4rem' }}>🤖</span>
              <div>
                <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>
                  Pusat Integrasi Multi-AI (LLM Providers)
                </h2>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', margin: 0 }}>
                  Hubungkan Google Gemini, ChatGPT, Claude, Grok, & DeepSeek untuk contoh kalimat bervariasi dan sinonim terlengkap.
                </p>
              </div>
            </div>
            <span
              style={{
                fontSize: '0.78rem',
                padding: '4px 10px',
                borderRadius: '999px',
                background: 'rgba(59, 130, 246, 0.12)',
                color: '#3b82f6',
                border: '1px solid rgba(59, 130, 246, 0.3)',
                fontWeight: 600,
              }}
            >
              Multi-AI Hub v2.0
            </span>
          </div>

          <div
            style={{
              padding: '12px 16px',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(59, 130, 246, 0.08)',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              fontSize: '0.86rem',
              color: 'var(--text-secondary)',
              marginBottom: 20,
              lineHeight: 1.5,
            }}
          >
            💡 <strong>Kekuatan Multi-AI:</strong> Setiap AI memiliki keahlian linguistik berbeda. Mode <strong>Otomatis (Cascade)</strong> akan secara cerdas memilih provider tercepat yang aktif sehingga Anda selalu mendapatkan contoh kalimat nyata yang kaya konteks (bukan kalimat template) serta sinonim dan antonim lengkap.
          </div>

          {/* Provider Selection */}
          <div style={{ marginBottom: 22 }}>
            <label
              style={{
                fontSize: '0.86rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                display: 'block',
                marginBottom: 10,
              }}
            >
              Pilih Mesin AI Utama (Active Provider):
            </label>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))',
                gap: 10,
              }}
            >
              {[
                {
                  id: 'auto',
                  name: '🔄 Otomatis (Multi-AI Cascade)',
                  badge: 'Rekomendasi',
                  desc: 'Mencoba semua AI aktif berurutan agar pencarian terluas & tanpa gagal.',
                },
                {
                  id: 'gemini',
                  name: '🌟 Google Gemini',
                  badge: 'Aktif di Server',
                  desc: 'Gemini 3.1 Flash Lite / 3.8 Flash super cepat & analisis gramatikal mendalam.',
                },
                {
                  id: 'openai',
                  name: '⚡ OpenAI ChatGPT',
                  badge: 'GPT-4o',
                  desc: 'Model GPT-4o-mini & GPT-4o dengan nuansa percakapan penutur asli.',
                },
                {
                  id: 'claude',
                  name: '🧠 Anthropic Claude',
                  badge: 'Claude 3.5',
                  desc: 'Claude 3.5 Sonnet / Haiku unggul dalam penjelasan pedagogi tata bahasa Jerman.',
                },
                {
                  id: 'grok',
                  name: '🚀 xAI Grok',
                  badge: 'Grok-2',
                  desc: 'Grok-2 xAI dengan wawasan kosakata kontekstual modern & idiomatik.',
                },
                {
                  id: 'deepseek',
                  name: '💡 DeepSeek AI',
                  badge: 'DeepSeek-V3',
                  desc: 'Penalaran bahasa canggih untuk struktur kalimat Jerman kompleks C1-C2.',
                },
              ].map((p) => {
                const isSelected = (settings.aiProvider || 'auto') === p.id;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => {
                      const updated = saveSettings({ aiProvider: p.id as any });
                      setSettings(updated);
                      showNotice(`Penyedia AI utama diubah ke: ${p.name}`);
                    }}
                    style={{
                      textAlign: 'left',
                      padding: '12px 14px',
                      borderRadius: 'var(--radius-md)',
                      border: isSelected
                        ? '2px solid var(--accent-red, #ef4444)'
                        : '1px solid var(--border-subtle)',
                      background: isSelected
                        ? 'rgba(239, 68, 68, 0.08)'
                        : 'var(--bg-input, rgba(255, 255, 255, 0.03))',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                      <span style={{ fontSize: '0.88rem', fontWeight: 700, color: isSelected ? 'var(--text-primary)' : 'var(--text-secondary)' }}>
                        {p.name}
                      </span>
                      <span
                        style={{
                          fontSize: '0.68rem',
                          padding: '2px 6px',
                          borderRadius: '4px',
                          background: isSelected ? 'rgba(239, 68, 68, 0.2)' : 'rgba(255,255,255,0.06)',
                          color: isSelected ? '#ef4444' : 'var(--text-muted)',
                          fontWeight: 600,
                        }}
                      >
                        {p.badge}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.74rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.35 }}>
                      {p.desc}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* API Key Inputs Section */}
          <div style={{ marginTop: 20, paddingTop: 18, borderTop: '1px solid var(--border-subtle)' }}>
            <h3 style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4 }}>
              Kunci API Penyedia (API Keys Configuration)
            </h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: 16 }}>
              Kunci API disimpan secara aman di browser lokal Anda. Masukkan kunci penyedia yang Anda miliki untuk membuka kapasitas penuh.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {/* Gemini Key */}
              <div style={{ padding: '12px 14px', borderRadius: 'var(--radius-sm)', background: 'var(--bg-input)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                  <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    🌟 Google Gemini API Key
                  </label>
                  <span style={{ fontSize: '0.72rem', color: '#10b981', fontWeight: 600 }}>
                    ✓ Kunci default server aktif
                  </span>
                </div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  <input
                    type="password"
                    value={settings.customApiKey || ''}
                    onChange={(e) => setSettings({ ...settings, customApiKey: e.target.value })}
                    placeholder="AIzaSy... (opsional jika ingin menggunakan kunci pribadi)"
                    style={{
                      flex: '1 1 220px',
                      padding: '8px 12px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-primary)',
                      fontSize: '0.85rem',
                      fontFamily: 'var(--font-mono)',
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => testProviderConnection('gemini', settings.customApiKey)}
                    className="btn btn-secondary"
                    style={{ fontSize: '0.8rem', padding: '6px 12px' }}
                  >
                    ⚡ Uji Gemini
                  </button>
                </div>
              </div>

              {/* OpenAI Key */}
              <div style={{ padding: '12px 14px', borderRadius: 'var(--radius-sm)', background: 'var(--bg-input)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                  <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    ⚡ OpenAI ChatGPT API Key
                  </label>
                  <a
                    href="https://platform.openai.com/api-keys"
                    target="_blank"
                    rel="noreferrer"
                    style={{ fontSize: '0.72rem', color: '#3b82f6', textDecoration: 'none' }}
                  >
                    Dapatkan Kunci OpenAI →
                  </a>
                </div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  <input
                    type="password"
                    value={settings.openaiApiKey || ''}
                    onChange={(e) => setSettings({ ...settings, openaiApiKey: e.target.value })}
                    placeholder="sk-proj-... atau sk-..."
                    style={{
                      flex: '1 1 220px',
                      padding: '8px 12px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-primary)',
                      fontSize: '0.85rem',
                      fontFamily: 'var(--font-mono)',
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => testProviderConnection('openai', settings.openaiApiKey)}
                    className="btn btn-secondary"
                    style={{ fontSize: '0.8rem', padding: '6px 12px' }}
                  >
                    ⚡ Uji OpenAI
                  </button>
                </div>
              </div>

              {/* Claude Key */}
              <div style={{ padding: '12px 14px', borderRadius: 'var(--radius-sm)', background: 'var(--bg-input)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                  <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    🧠 Anthropic Claude API Key
                  </label>
                  <a
                    href="https://console.anthropic.com/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ fontSize: '0.72rem', color: '#3b82f6', textDecoration: 'none' }}
                  >
                    Dapatkan Kunci Claude →
                  </a>
                </div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  <input
                    type="password"
                    value={settings.claudeApiKey || ''}
                    onChange={(e) => setSettings({ ...settings, claudeApiKey: e.target.value })}
                    placeholder="sk-ant-api03-..."
                    style={{
                      flex: '1 1 220px',
                      padding: '8px 12px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-primary)',
                      fontSize: '0.85rem',
                      fontFamily: 'var(--font-mono)',
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => testProviderConnection('claude', settings.claudeApiKey)}
                    className="btn btn-secondary"
                    style={{ fontSize: '0.8rem', padding: '6px 12px' }}
                  >
                    ⚡ Uji Claude
                  </button>
                </div>
              </div>

              {/* Grok Key */}
              <div style={{ padding: '12px 14px', borderRadius: 'var(--radius-sm)', background: 'var(--bg-input)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                  <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    🚀 xAI Grok API Key
                  </label>
                  <a
                    href="https://console.x.ai/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ fontSize: '0.72rem', color: '#3b82f6', textDecoration: 'none' }}
                  >
                    Dapatkan Kunci Grok →
                  </a>
                </div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  <input
                    type="password"
                    value={settings.grokApiKey || ''}
                    onChange={(e) => setSettings({ ...settings, grokApiKey: e.target.value })}
                    placeholder="xai-..."
                    style={{
                      flex: '1 1 220px',
                      padding: '8px 12px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-primary)',
                      fontSize: '0.85rem',
                      fontFamily: 'var(--font-mono)',
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => testProviderConnection('grok', settings.grokApiKey)}
                    className="btn btn-secondary"
                    style={{ fontSize: '0.8rem', padding: '6px 12px' }}
                  >
                    ⚡ Uji Grok
                  </button>
                </div>
              </div>

              {/* DeepSeek Key */}
              <div style={{ padding: '12px 14px', borderRadius: 'var(--radius-sm)', background: 'var(--bg-input)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                  <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    💡 DeepSeek AI API Key
                  </label>
                  <a
                    href="https://platform.deepseek.com/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ fontSize: '0.72rem', color: '#3b82f6', textDecoration: 'none' }}
                  >
                    Dapatkan Kunci DeepSeek →
                  </a>
                </div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  <input
                    type="password"
                    value={settings.deepseekApiKey || ''}
                    onChange={(e) => setSettings({ ...settings, deepseekApiKey: e.target.value })}
                    placeholder="sk-..."
                    style={{
                      flex: '1 1 220px',
                      padding: '8px 12px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-primary)',
                      fontSize: '0.85rem',
                      fontFamily: 'var(--font-mono)',
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => testProviderConnection('deepseek', settings.deepseekApiKey)}
                    className="btn btn-secondary"
                    style={{ fontSize: '0.8rem', padding: '6px 12px' }}
                  >
                    ⚡ Uji DeepSeek
                  </button>
                </div>
              </div>
            </div>

            {/* Test result status banner */}
            {testStatus && (
              <div
                className="animate-fade-in"
                style={{
                  marginTop: 14,
                  padding: '10px 14px',
                  borderRadius: 'var(--radius-sm)',
                  background: testStatus.success ? 'rgba(16, 185, 129, 0.12)' : 'rgba(239, 68, 68, 0.12)',
                  border: `1px solid ${testStatus.success ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`,
                  color: testStatus.success ? '#10b981' : '#ef4444',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span>{testStatus.message}</span>
                {testStatus.latency && (
                  <span style={{ fontSize: '0.74rem', opacity: 0.85 }}>Latensi: {testStatus.latency}ms</span>
                )}
              </div>
            )}

            <div style={{ marginTop: 18, display: 'flex', gap: 10 }}>
              <button
                type="button"
                onClick={handleSaveAllApiKeys}
                className="btn btn-primary"
                style={{ padding: '10px 22px' }}
              >
                💾 Simpan Semua Pengaturan AI
              </button>
              <button
                type="button"
                onClick={() => testProviderConnection('auto', '')}
                className="btn btn-secondary"
                style={{ padding: '10px 16px' }}
              >
                🔄 Uji Multi-AI Hub
              </button>
            </div>
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
