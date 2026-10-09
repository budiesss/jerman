'use client';

import React, { useEffect, useRef, useState, useCallback, Suspense } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getBook, getPdfBlob, updateBook, BookMeta } from '@/lib/libraryStorage';
import { AnalyzeResponse, LanguageMode } from '@/lib/types';

interface SelectionPopup {
  x: number;
  y: number;
  text: string;
}

interface TranslationPopupState {
  x: number;
  y: number;
  text: string;
  result: AnalyzeResponse | null;
  loading: boolean;
  error: string | null;
  previewImage?: string | null;
  source?: 'gemini-vision' | 'tesseract-ocr' | null;
}

// ─── Small sub-components ──────────────────────────────────────────────────

function ModeToggle({ mode, onChange }: { mode: LanguageMode; onChange: (m: LanguageMode) => void }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 4, background: 'var(--bg-surface-elevated)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-pill)', padding: '3px', flexShrink: 0 }}>
      <button
        type="button"
        onClick={() => onChange('de-id')}
        className={`btn ${mode === 'de-id' ? 'btn-primary' : 'btn-ghost'}`}
        style={{ padding: '5px 12px', fontSize: '0.8rem', borderRadius: 'var(--radius-pill)', minHeight: 32 }}
      >
        DE → ID
      </button>
      <button
        type="button"
        onClick={() => onChange('id-de')}
        className={`btn ${mode === 'id-de' ? 'btn-primary' : 'btn-ghost'}`}
        style={{ padding: '5px 12px', fontSize: '0.8rem', borderRadius: 'var(--radius-pill)', minHeight: 32 }}
      >
        ID → DE
      </button>
    </div>
  );
}

// ─── Main PDF reader ───────────────────────────────────────────────────────

export default function PdfReaderPage() {
  return (
    <Suspense fallback={
      <div style={{ textAlign: 'center', padding: '60px 24px', color: 'var(--text-muted)' }}>
        <div className="lib-spinner" style={{ margin: '0 auto 16px' }} />
        <p>Memuat PDF reader…</p>
      </div>
    }>
      <PdfReaderInner />
    </Suspense>
  );
}

function PdfReaderInner() {
  const params = useParams();
  const router = useRouter();

  const bookId = params?.id as string;

  const [book, setBook] = useState<BookMeta | null>(null);
  const [numPages, setNumPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [scale, setScale] = useState(1.4);
  const [mode, setMode] = useState<LanguageMode>('de-id');
  const [loadError, setLoadError] = useState('');
  const [pdfReady, setPdfReady] = useState(false);

  // Selection state (text mode)
  const [selectionPopup, setSelectionPopup] = useState<SelectionPopup | null>(null);
  const [translation, setTranslation] = useState<TranslationPopupState | null>(null);

  // Google Lens state (crop / image selection mode)
  const [lensMode, setLensMode] = useState(false);
  const [isScannedPage, setIsScannedPage] = useState(false);
  const [cropBox, setCropBox] = useState<{ x: number; y: number; width: number; height: number } | null>(null);
  const [dragBox, setDragBox] = useState<{ startX: number; startY: number; currentX: number; currentY: number } | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [isEditingExtractedText, setIsEditingExtractedText] = useState(false);
  const [editTextValue, setEditTextValue] = useState('');

  const containerRef = useRef<HTMLDivElement>(null);
  const pdfDocRef = useRef<any>(null);
  const renderTaskRef = useRef<any>(null);
  const isRenderingRef = useRef(false);   // mutex: prevent overlapping renders
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textLayerRef = useRef<HTMLDivElement>(null);
  const lensOverlayRef = useRef<HTMLDivElement>(null);

  // ── Load PDF from IndexedDB ──
  useEffect(() => {
    const bookMeta = getBook(bookId);
    if (!bookMeta) {
      setLoadError('Buku tidak ditemukan di perpustakaan.');
      return;
    }
    setBook(bookMeta);
    setCurrentPage(bookMeta.lastPage || 1);

    (async () => {
      try {
        const blob = await getPdfBlob(bookId);
        if (!blob) throw new Error('File PDF tidak ditemukan di penyimpanan lokal.');

        const { getDocument, GlobalWorkerOptions } = await import('pdfjs-dist');
        GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

        const arrayBuffer = await blob.arrayBuffer();
        const pdfDoc = await getDocument({ data: arrayBuffer }).promise;
        pdfDocRef.current = pdfDoc;
        setNumPages(pdfDoc.numPages);
        setPdfReady(true);
      } catch (e: any) {
        console.error(e);
        setLoadError(e.message || 'Gagal memuat file PDF.');
      }
    })();

    return () => {
      try {
        pdfDocRef.current?.destroy?.();
      } catch {}
      pdfDocRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookId]);

  // ── Render current page ──
  const renderPage = useCallback(async (pageNum: number) => {
    if (!pdfDocRef.current || !canvasRef.current || !textLayerRef.current) return;

    // Reset crop and selection on page change
    setCropBox(null);
    setDragBox(null);
    setSelectionPopup(null);

    // Cancel any in-progress render and wait for it to stop
    if (renderTaskRef.current) {
      try {
        renderTaskRef.current.cancel();
        await renderTaskRef.current.promise.catch(() => {});
      } catch { /* ignore RenderingCancelledException */ }
      renderTaskRef.current = null;
    }

    // Bail if another call already started rendering while we were cancelling
    if (isRenderingRef.current) return;
    isRenderingRef.current = true;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) { isRenderingRef.current = false; return; }

    try {
      const page = await pdfDocRef.current.getPage(pageNum);
      const viewport = page.getViewport({ scale });

      // Resize canvas BEFORE starting render
      canvas.width = viewport.width;
      canvas.height = viewport.height;

      // Render PDF page to canvas
      const renderTask = page.render({ canvasContext: ctx, viewport });
      renderTaskRef.current = renderTask;
      await renderTask.promise;
      renderTaskRef.current = null;

      // Build text layer for text selection
      const textContent = await page.getTextContent();
      const hasText = Boolean(textContent?.items && textContent.items.length > 0);
      setIsScannedPage(!hasText);

      // Auto-activate Lens Mode if this page has no text layer (scanned book / image PDF)
      if (!hasText) {
        setLensMode(true);
      }

      const textLayerDiv = textLayerRef.current;
      if (!textLayerDiv) return;
      textLayerDiv.innerHTML = '';
      textLayerDiv.style.width = `${viewport.width}px`;
      textLayerDiv.style.height = `${viewport.height}px`;

      // Use pdfjs TextLayer class (modern API)
      if (hasText) {
        const pdfjsLib = await import('pdfjs-dist');
        const pdfjsAny = pdfjsLib as any;
        if (pdfjsAny.renderTextLayer) {
          const tlTask = pdfjsAny.renderTextLayer({
            textContentSource: textContent,
            container: textLayerDiv,
            viewport,
          });
          await tlTask.promise;
        } else if (pdfjsAny.TextLayer) {
          const tl = new pdfjsAny.TextLayer({
            textContentSource: textContent,
            container: textLayerDiv,
            viewport,
          });
          await tl.render();
        }
      }

      // Save last page
      updateBook(bookId, { lastOpenedAt: new Date().toISOString(), lastPage: pageNum });
    } catch (e: any) {
      if (e?.name !== 'RenderingCancelledException') {
        console.error('Render error:', e);
      }
    } finally {
      isRenderingRef.current = false;
    }
  }, [scale, bookId]);

  useEffect(() => {
    if (pdfReady) renderPage(currentPage);
  }, [pdfReady, currentPage, scale, renderPage]);

  // ── Text selection handler (Normal Text Mode) ──
  const handleMouseUp = useCallback(() => {
    if (lensMode) return; // Ignore text selection while in Google Lens mode

    const selection = window.getSelection();
    const text = selection?.toString().trim();
    if (!text || text.length < 1) {
      setSelectionPopup(null);
      return;
    }

    const range = selection?.getRangeAt(0);
    if (!range) return;
    const rect = range.getBoundingClientRect();
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) return;

    // Position relative to the container
    setSelectionPopup({
      x: rect.left - containerRect.left + rect.width / 2,
      y: rect.top - containerRect.top - 10,
      text,
    });
    setTranslation(null);
  }, [lensMode]);

  // ── Touch selection (mobile) ──
  const handleTouchEnd = useCallback(() => {
    if (lensMode) return;
    setTimeout(() => {
      const selection = window.getSelection();
      const text = selection?.toString().trim();
      if (!text || text.length < 1) return;
      const range = selection?.getRangeAt(0);
      if (!range) return;
      const rect = range.getBoundingClientRect();
      const containerRect = containerRef.current?.getBoundingClientRect();
      if (!containerRect) return;
      setSelectionPopup({
        x: rect.left - containerRect.left + rect.width / 2,
        y: rect.top - containerRect.top - 10,
        text,
      });
      setTranslation(null);
    }, 200);
  }, [lensMode]);

  // ── Google Lens Drag-To-Select Gestures ──
  const handleLensMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0 || isScanning) return;
    // Do not start new drag if clicking on the action buttons
    if ((e.target as HTMLElement).closest('.lens-action-bubble')) return;

    const overlay = lensOverlayRef.current;
    if (!overlay) return;
    const rect = overlay.getBoundingClientRect();
    const startX = e.clientX - rect.left;
    const startY = e.clientY - rect.top;
    setDragBox({ startX, startY, currentX: startX, currentY: startY });
    setCropBox(null);
    setTranslation(null);
    setIsEditingExtractedText(false);
  };

  const handleLensMouseMove = (e: React.MouseEvent) => {
    if (!dragBox || isScanning) return;
    const overlay = lensOverlayRef.current;
    if (!overlay) return;
    const rect = overlay.getBoundingClientRect();
    const currentX = Math.max(0, Math.min(rect.width, e.clientX - rect.left));
    const currentY = Math.max(0, Math.min(rect.height, e.clientY - rect.top));
    setDragBox((prev) => (prev ? { ...prev, currentX, currentY } : null));
  };

  const handleLensMouseUp = () => {
    if (!dragBox || isScanning) return;
    const x = Math.min(dragBox.startX, dragBox.currentX);
    const y = Math.min(dragBox.startY, dragBox.currentY);
    const width = Math.abs(dragBox.currentX - dragBox.startX);
    const height = Math.abs(dragBox.currentY - dragBox.startY);

    if (width >= 20 && height >= 15) {
      setCropBox({ x, y, width, height });
    } else {
      setCropBox(null);
    }
    setDragBox(null);
  };

  // Touch handlers for Lens Mode on mobile
  const handleLensTouchStart = (e: React.TouchEvent) => {
    if (isScanning || e.touches.length !== 1) return;
    if ((e.target as HTMLElement).closest('.lens-action-bubble')) return;

    const touch = e.touches[0];
    const overlay = lensOverlayRef.current;
    if (!overlay) return;
    const rect = overlay.getBoundingClientRect();
    const startX = touch.clientX - rect.left;
    const startY = touch.clientY - rect.top;
    setDragBox({ startX, startY, currentX: startX, currentY: startY });
    setCropBox(null);
    setTranslation(null);
    setIsEditingExtractedText(false);
  };

  const handleLensTouchMove = (e: React.TouchEvent) => {
    if (!dragBox || isScanning || e.touches.length !== 1) return;
    const touch = e.touches[0];
    const overlay = lensOverlayRef.current;
    if (!overlay) return;
    const rect = overlay.getBoundingClientRect();
    const currentX = Math.max(0, Math.min(rect.width, touch.clientX - rect.left));
    const currentY = Math.max(0, Math.min(rect.height, touch.clientY - rect.top));
    setDragBox((prev) => (prev ? { ...prev, currentX, currentY } : null));
  };

  const handleLensTouchEnd = () => {
    handleLensMouseUp();
  };

  // ── Google Lens Crop & OCR Scan ──
  const handleLensScan = async () => {
    if (!cropBox || !canvasRef.current || !containerRef.current) return;
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const rect = canvas.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    // Map screen coordinates to internal canvas buffer resolution
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    const sx = Math.max(0, Math.round(cropBox.x * scaleX));
    const sy = Math.max(0, Math.round(cropBox.y * scaleY));
    const sw = Math.min(canvas.width - sx, Math.round(cropBox.width * scaleX));
    const sh = Math.min(canvas.height - sy, Math.round(cropBox.height * scaleY));

    if (sw < 5 || sh < 5) return;

    // Create high-res crop
    const offCanvas = document.createElement('canvas');
    offCanvas.width = sw;
    offCanvas.height = sh;
    const ctx = offCanvas.getContext('2d');
    if (!ctx) return;
    ctx.drawImage(canvas, sx, sy, sw, sh, 0, 0, sw, sh);
    const base64Image = offCanvas.toDataURL('image/jpeg', 0.92);

    // Compute exact position relative to containerRef so popup appears right by the box
    const boxScreenLeft = rect.left + cropBox.x;
    const boxScreenTop = rect.top + cropBox.y;
    const popupX = boxScreenLeft - containerRect.left + cropBox.width / 2;
    const popupY = boxScreenTop - containerRect.top + cropBox.height + 12;

    setIsScanning(true);
    setTranslation({
      x: popupX,
      y: popupY,
      text: 'Memindai teks gambar dengan Google Lens…',
      result: null,
      loading: true,
      error: null,
      previewImage: base64Image,
    });

    try {
      let customApiKey = '';
      try {
        const s = JSON.parse(localStorage.getItem('deutsch_lernen_settings_v1') || '{}');
        customApiKey = s.customApiKey || '';
      } catch {}

      const res = await fetch('/api/lens', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: base64Image, mode, userApiKey: customApiKey }),
      });

      const data = await res.json();
      if (!res.ok || data.error) throw new Error(data.error || 'Gagal memproses gambar.');

      setTranslation((prev) =>
        prev
          ? {
              ...prev,
              text: data.extractedText,
              result: data.result,
              loading: false,
              source: data.source,
            }
          : null
      );
    } catch (err: any) {
      setTranslation((prev) =>
        prev
          ? {
              ...prev,
              loading: false,
              error: err.message || 'Gagal memindai teks dari gambar.',
            }
          : null
      );
    } finally {
      setIsScanning(false);
    }
  };

  // ── Translate selected text (Text Mode or Re-analyzing) ──
  const handleTranslate = async (text: string) => {
    const x = selectionPopup?.x ?? (containerRef.current?.offsetWidth ? containerRef.current.offsetWidth / 2 : 180);
    const y = selectionPopup?.y ?? 50;

    setTranslation({ x, y, text, result: null, loading: true, error: null });
    setSelectionPopup(null);
    window.getSelection()?.removeAllRanges();

    try {
      let customApiKey = '';
      try {
        const s = JSON.parse(localStorage.getItem('deutsch_lernen_settings_v1') || '{}');
        customApiKey = s.customApiKey || '';
      } catch {}

      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input: text, mode, userApiKey: customApiKey }),
      });
      const data: AnalyzeResponse = await res.json();
      if (data.error) throw new Error(data.error);
      setTranslation((prev) => (prev ? { ...prev, result: data, loading: false } : null));
    } catch (e: any) {
      setTranslation((prev) => (prev ? { ...prev, loading: false, error: e.message || 'Terjadi kesalahan.' } : null));
    }
  };

  const handleReAnalyze = async (newText: string) => {
    if (!newText.trim()) return;
    setIsEditingExtractedText(false);
    if (!translation) return;

    setTranslation((prev) =>
      prev
        ? {
            ...prev,
            text: newText.trim(),
            loading: true,
            error: null,
            result: null,
          }
        : null
    );

    try {
      let customApiKey = '';
      try {
        const s = JSON.parse(localStorage.getItem('deutsch_lernen_settings_v1') || '{}');
        customApiKey = s.customApiKey || '';
      } catch {}

      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input: newText.trim(), mode, userApiKey: customApiKey }),
      });
      const data: AnalyzeResponse = await res.json();
      if (data.error) throw new Error(data.error);
      setTranslation((prev) => (prev ? { ...prev, result: data, loading: false } : null));
    } catch (e: any) {
      setTranslation((prev) => (prev ? { ...prev, loading: false, error: e.message || 'Terjadi kesalahan.' } : null));
    }
  };

  const closeTranslation = () => {
    setTranslation(null);
    setSelectionPopup(null);
    setCropBox(null);
    setIsEditingExtractedText(false);
  };

  const goToFullTranslate = () => {
    if (translation?.text) {
      router.push(`/?q=${encodeURIComponent(translation.text)}&mode=${mode}`);
    }
  };

  // ── Click outside → close popups ──
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest('.translate-popup') ||
        target.closest('.selection-bubble') ||
        target.closest('.lens-action-bubble') ||
        target.closest('.btn-lens-toggle')
      ) {
        return;
      }
      setSelectionPopup(null);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  if (loadError) {
    return (
      <div style={{ textAlign: 'center', padding: '60px 24px' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>❌</div>
        <h2 style={{ color: 'var(--text-primary)', marginBottom: 8 }}>Gagal Memuat Buku</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: 20 }}>{loadError}</p>
        <button className="btn btn-primary" onClick={() => router.push('/library')}>
          ← Kembali ke Perpustakaan
        </button>
      </div>
    );
  }

  return (
    <div style={{ position: 'relative' }}>
      {/* ── Top toolbar ── */}
      <div className="reader-toolbar">
        <button
          type="button"
          className="btn btn-ghost btn-icon"
          onClick={() => router.push('/library')}
          title="Kembali ke Perpustakaan"
          style={{ borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {book?.title || '…'}
          </div>
          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
            {numPages > 0 ? `${numPages} halaman` : 'Memuat…'}
          </div>
        </div>

        {/* Mode toggle */}
        <ModeToggle mode={mode} onChange={setMode} />

        {/* Google Lens Toggle */}
        <button
          type="button"
          className={`btn-lens-toggle ${lensMode ? 'active' : ''}`}
          onClick={() => {
            const next = !lensMode;
            setLensMode(next);
            setCropBox(null);
            setDragBox(null);
            setSelectionPopup(null);
          }}
          title={lensMode ? 'Mode Lensa Aktif (Klik untuk matikan)' : 'Aktifkan Mode Lensa (Google Lens) untuk menyeleksi kata dari gambar/scan'}
        >
          <span>📷</span>
          <span>{lensMode ? 'Mode Lensa Aktif' : 'Mode Lensa'}</span>
        </button>

        {/* Zoom */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, flexShrink: 0 }}>
          <button
            className="btn btn-ghost btn-icon"
            style={{ width: 34, height: 34, borderRadius: 8, border: '1px solid var(--border-subtle)' }}
            onClick={() => setScale((s) => Math.max(0.6, +(s - 0.2).toFixed(1)))}
            title="Perkecil"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /></svg>
          </button>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', minWidth: 36, textAlign: 'center' }}>
            {Math.round(scale * 100)}%
          </span>
          <button
            className="btn btn-ghost btn-icon"
            style={{ width: 34, height: 34, borderRadius: 8, border: '1px solid var(--border-subtle)' }}
            onClick={() => setScale((s) => Math.min(3.0, +(s + 0.2).toFixed(1)))}
            title="Perbesar"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
          </button>
        </div>
      </div>

      {/* ── Scanned notice banner (if detected as image PDF) ── */}
      {isScannedPage && (
        <div className="lens-scanned-notice">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: '1.2rem' }}>📷</span>
            <span>
              <strong>Halaman Gambar / Scan:</strong> Teks tertanam tidak terdeteksi. <strong>Mode Lensa</strong> aktif otomatis — tarik kotak (drag) di atas gambar untuk memindai &amp; menerjemahkan kata layaknya Google Lens!
            </span>
          </div>
        </div>
      )}

      {/* ── Hint Banner ── */}
      <div className="reader-hint">
        <span>💡</span>
        <span>
          {lensMode ? (
            <>
              <strong>Mode Lensa Aktif (Google Lens):</strong> Tarik kotak (drag) di atas teks/gambar yang ingin dipindai, lalu klik <strong>&quot;Scan &amp; Terjemahkan&quot;</strong>.
            </>
          ) : (
            <>
              <strong>Cara pakai:</strong> Blok teks di halaman PDF untuk menerjemahkan, atau aktifkan <strong>&quot;Mode Lensa&quot;</strong> di atas untuk memindai teks dari gambar/scan.
            </>
          )}
        </span>
      </div>

      {/* ── PDF Canvas + Text Layer + Lens Overlay ── */}
      <div
        ref={containerRef}
        style={{ position: 'relative', userSelect: lensMode ? 'none' : 'auto' }}
        onMouseUp={handleMouseUp}
        onTouchEnd={handleTouchEnd}
      >
        {!pdfReady && (
          <div style={{ textAlign: 'center', padding: '60px 24px', color: 'var(--text-muted)' }}>
            <div className="lib-spinner" style={{ margin: '0 auto 16px' }} />
            <p>Memuat halaman PDF…</p>
          </div>
        )}

        {/* Scrollable page container */}
        <div
          className="pdf-page-wrap"
          style={{ display: pdfReady ? 'flex' : 'none' }}
        >
          <div style={{ position: 'relative', display: 'inline-block', userSelect: lensMode ? 'none' : 'text' }}>
            <canvas ref={canvasRef} className="pdf-canvas" />
            <div
              ref={textLayerRef}
              className="pdf-text-layer"
              style={{ pointerEvents: lensMode ? 'none' : 'auto' }}
            />

            {/* ── Google Lens Selection Overlay ── */}
            {lensMode && (
              <div
                ref={lensOverlayRef}
                className="lens-overlay"
                onMouseDown={handleLensMouseDown}
                onMouseMove={handleLensMouseMove}
                onMouseUp={handleLensMouseUp}
                onTouchStart={handleLensTouchStart}
                onTouchMove={handleLensTouchMove}
                onTouchEnd={handleLensTouchEnd}
              >
                {/* Dragging in-progress box */}
                {dragBox && (
                  <div
                    className="lens-selection-box"
                    style={{
                      left: Math.min(dragBox.startX, dragBox.currentX),
                      top: Math.min(dragBox.startY, dragBox.currentY),
                      width: Math.abs(dragBox.currentX - dragBox.startX),
                      height: Math.abs(dragBox.currentY - dragBox.startY),
                    }}
                  >
                    <div className="lens-corner lens-corner-tl" />
                    <div className="lens-corner lens-corner-tr" />
                    <div className="lens-corner lens-corner-bl" />
                    <div className="lens-corner lens-corner-br" />
                  </div>
                )}

                {/* Final selected crop box */}
                {cropBox && (
                  <div
                    className={`lens-selection-box ${isScanning ? 'scanning' : ''}`}
                    style={{
                      left: cropBox.x,
                      top: cropBox.y,
                      width: cropBox.width,
                      height: cropBox.height,
                    }}
                  >
                    <div className="lens-corner lens-corner-tl" />
                    <div className="lens-corner lens-corner-tr" />
                    <div className="lens-corner lens-corner-bl" />
                    <div className="lens-corner lens-corner-br" />
                    {isScanning && <div className="lens-laser" />}
                  </div>
                )}

                {/* Floating Action Bubble */}
                {cropBox && !isScanning && (
                  <div
                    className="lens-action-bubble"
                    style={{
                      left: Math.max(8, cropBox.x),
                      top: cropBox.y > 48 ? cropBox.y - 44 : cropBox.y + cropBox.height + 8,
                    }}
                    onMouseDown={(e) => e.stopPropagation()}
                    onTouchStart={(e) => e.stopPropagation()}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      type="button"
                      className="btn-lens-scan"
                      onMouseDown={(e) => e.stopPropagation()}
                      onTouchStart={(e) => e.stopPropagation()}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleLensScan();
                      }}
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M3 7V5a2 2 0 0 1 2-2h2" />
                        <path d="M17 3h2a2 2 0 0 1 2 2v2" />
                        <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
                        <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
                      </svg>
                      Scan &amp; Terjemahkan
                    </button>
                    <button
                      type="button"
                      className="btn btn-ghost"
                      style={{ fontSize: '0.8rem', padding: '6px 10px', minHeight: 32, border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-pill)' }}
                      onMouseDown={(e) => e.stopPropagation()}
                      onTouchStart={(e) => e.stopPropagation()}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCropBox(null);
                      }}
                      title="Batalkan seleksi"
                    >
                      ✕
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* ── Selection bubble (Text Mode) ── */}
        {selectionPopup && !lensMode && (
          <div
            className="selection-bubble"
            style={{
              left: selectionPopup.x,
              top: selectionPopup.y,
            }}
          >
            <button
              className="btn btn-primary"
              style={{ fontSize: '0.82rem', padding: '6px 14px', minHeight: 34 }}
              onClick={() => handleTranslate(selectionPopup.text)}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m5 8 6 6" /><path d="m4 14 6-6 2-3" /><path d="M2 5h12" /><path d="M7 2h1" />
                <path d="m22 22-5-10-5 10" /><path d="M14 18h6" />
              </svg>
              Terjemahkan
            </button>
            <button
              className="btn btn-ghost"
              style={{ fontSize: '0.82rem', padding: '6px 10px', minHeight: 34, border: '1px solid var(--border-subtle)' }}
              onClick={() => setSelectionPopup(null)}
            >
              ✕
            </button>
          </div>
        )}

        {/* ── Translation popup ── */}
        {translation && (
          <div
            className="translate-popup"
            style={{
              left: Math.max(8, Math.min(translation.x - 180, (containerRef.current?.offsetWidth ?? 500) - 376)),
              top: Math.max(8, translation.y - 20),
            }}
          >
            {/* Header */}
            <div className="translate-popup-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: '1rem' }}>{translation.previewImage ? '📷' : '🔍'}</span>
                <span style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                  {translation.previewImage ? 'Google Lens OCR' : 'Terjemahan'} — {mode === 'de-id' ? 'DE → ID' : 'ID → DE'}
                </span>
                {translation.previewImage && (
                  <span className="lens-preview-badge">Lens</span>
                )}
              </div>
              <button
                className="btn btn-ghost btn-icon"
                style={{ width: 28, height: 28, borderRadius: 6 }}
                onClick={closeTranslation}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Selected / Extracted text */}
            <div className="translate-popup-query" style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
              {translation.previewImage && (
                <img
                  src={translation.previewImage}
                  alt="Crop preview"
                  style={{
                    width: 44,
                    height: 44,
                    objectFit: 'cover',
                    borderRadius: 6,
                    border: '1px solid var(--border-subtle)',
                    flexShrink: 0,
                  }}
                />
              )}
              <div style={{ flex: 1, minWidth: 0 }}>
                {isEditingExtractedText ? (
                  <div style={{ display: 'flex', gap: 6, marginTop: 2 }}>
                    <input
                      type="text"
                      value={editTextValue}
                      onChange={(e) => setEditTextValue(e.target.value)}
                      style={{
                        flex: 1,
                        background: 'var(--bg-input)',
                        border: '1px solid var(--border-strong)',
                        borderRadius: 6,
                        color: 'var(--text-primary)',
                        padding: '4px 8px',
                        fontSize: '0.85rem',
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') handleReAnalyze(editTextValue);
                      }}
                    />
                    <button
                      className="btn btn-primary"
                      style={{ padding: '4px 10px', fontSize: '0.78rem', minHeight: 28 }}
                      onClick={() => handleReAnalyze(editTextValue)}
                    >
                      Cari
                    </button>
                  </div>
                ) : (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 6 }}>
                    <span style={{ fontStyle: 'italic', wordBreak: 'break-word' }}>
                      &ldquo;{translation.text.length > 120 ? translation.text.slice(0, 120) + '…' : translation.text}&rdquo;
                    </span>
                    {translation.previewImage && !translation.loading && (
                      <button
                        type="button"
                        title="Edit teks hasil scan jika ada koreksi huruf"
                        style={{
                          background: 'none',
                          border: 'none',
                          color: 'var(--text-muted)',
                          cursor: 'pointer',
                          fontSize: '0.85rem',
                          padding: '2px 4px',
                        }}
                        onClick={() => {
                          setIsEditingExtractedText(true);
                          setEditTextValue(translation.text);
                        }}
                      >
                        ✏️
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Body */}
            <div className="translate-popup-body">
              {translation.loading && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--text-muted)' }}>
                  <div className="lib-spinner lib-spinner-sm" />
                  <span style={{ fontSize: '0.88rem' }}>
                    {translation.previewImage ? 'Google Lens memindai teks & AI menganalisis…' : 'AI sedang menganalisis…'}
                  </span>
                </div>
              )}

              {translation.error && (
                <p style={{ color: '#f87171', fontSize: '0.85rem' }}>⚠️ {translation.error}</p>
              )}

              {translation.result && !translation.loading && (
                <TranslationResult
                  result={translation.result}
                  onNavigate={() => {
                    setTranslation(null);
                    setSelectionPopup(null);
                  }}
                />
              )}
            </div>

            {/* Footer */}
            {translation.result && !translation.loading && (
              <div className="translate-popup-footer">
                <button
                  className="btn btn-ghost"
                  style={{ fontSize: '0.8rem', padding: '6px 10px', minHeight: 32 }}
                  onClick={goToFullTranslate}
                >
                  Lihat analisis lengkap →
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* ── Page Navigation ── */}
      {pdfReady && numPages > 0 && (
        <div className="reader-pagination">
          <button
            className="btn btn-secondary"
            style={{ padding: '8px 16px', fontSize: '0.9rem' }}
            disabled={currentPage <= 1}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          >
            ← Sebelumnya
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>Hal.</span>
            <input
              type="number"
              min={1}
              max={numPages}
              value={currentPage}
              onChange={(e) => {
                const v = parseInt(e.target.value, 10);
                if (v >= 1 && v <= numPages) setCurrentPage(v);
              }}
              style={{
                width: 52,
                textAlign: 'center',
                background: 'var(--bg-input)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 8,
                color: 'var(--text-primary)',
                padding: '6px',
                fontSize: '0.9rem',
                fontFamily: 'inherit',
              }}
            />
            <span style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>/ {numPages}</span>
          </div>

          <button
            className="btn btn-secondary"
            style={{ padding: '8px 16px', fontSize: '0.9rem' }}
            disabled={currentPage >= numPages}
            onClick={() => setCurrentPage((p) => Math.min(numPages, p + 1))}
          >
            Berikutnya →
          </button>
        </div>
      )}
    </div>
  );
}

// ─── Translation Result Component ─────────────────────────────────────────

function TranslationResult({ result }: { result: AnalyzeResponse; onNavigate: (w: string) => void }) {
  if (result.wordResult) {
    const w = result.wordResult;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, flexWrap: 'wrap' }}>
          <span style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)' }}>{w.displayWord || w.word}</span>
          {w.cefrLevel && <span className={`badge badge-cefr badge-cefr-${w.cefrLevel}`} style={{ fontSize: '0.68rem' }}>{w.cefrLevel}</span>}
        </div>
        {w.translations?.length > 0 && (
          <p style={{ fontSize: '0.9rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
            {w.translations.slice(0, 3).join(' · ')}
          </p>
        )}
        {w.meaningSummary && (
          <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
            {w.meaningSummary.length > 180 ? w.meaningSummary.slice(0, 180) + '…' : w.meaningSummary}
          </p>
        )}
        {w.examples?.[0] && (
          <div style={{ background: 'var(--bg-surface-subtle)', borderRadius: 8, padding: '8px 10px', fontSize: '0.82rem' }}>
            <div style={{ color: 'var(--text-primary)', fontStyle: 'italic', marginBottom: 2 }}>{w.examples[0].german}</div>
            <div style={{ color: 'var(--text-muted)' }}>{w.examples[0].indonesian}</div>
          </div>
        )}
        {w.falseFriendsWarning && (
          <div style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.3)', borderRadius: 8, padding: '6px 10px', fontSize: '0.8rem', color: '#f59e0b' }}>
            ⚠️ {w.falseFriendsWarning}
          </div>
        )}
      </div>
    );
  }

  if (result.sentenceResult) {
    const s = result.sentenceResult;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <p style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--accent-primary)', lineHeight: 1.4 }}>
          {s.translatedSentence}
        </p>
        {s.literalTranslation && s.literalTranslation !== s.translatedSentence && (
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
            Harfiah: {s.literalTranslation}
          </p>
        )}
        {s.grammarHighlights?.[0] && (
          <div style={{ background: 'var(--bg-surface-subtle)', borderRadius: 8, padding: '8px 10px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            📌 {s.grammarHighlights[0]}
          </div>
        )}
      </div>
    );
  }

  return (
    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
      Hasil terjemahan tidak tersedia. Coba lagi atau gunakan halaman Terjemahan utama.
    </p>
  );
}
