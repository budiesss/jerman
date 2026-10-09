import type { Metadata } from 'next';
import { Suspense } from 'react';
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'German AI Translator & Dictionary | Belajar Bahasa Jerman dengan AI',
  description:
    'Aplikasi penerjemah dan kamus bahasa Jerman bertenaga AI yang fokus pada pembelajaran bahasa Jerman, pemahaman konteks, tata bahasa (grammar), deteksi umlaut, dan analisis kata demi kata.',
  keywords: [
    'German Translator',
    'Kamus Bahasa Jerman',
    'Belajar Bahasa Jerman',
    'German Grammar',
    'Umlaut',
    'Deutsche Grammatik',
    'Wortschatz',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const settings = JSON.parse(localStorage.getItem('deutsch_lernen_settings_v1') || '{}');
                const theme = settings.theme || 'dark';
                if (theme === 'system') {
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
                } else {
                  document.documentElement.setAttribute('data-theme', theme);
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body>
        <Suspense fallback={<div style={{ height: 'var(--header-height)' }} />}>
          <Navbar />
        </Suspense>
        <main className="app-container" style={{ paddingTop: 32 }}>
          <Suspense fallback={null}>
            {children}
          </Suspense>
        </main>
      </body>
    </html>
  );
}
