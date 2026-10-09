/**
 * Web Speech API helper for German text-to-speech pronunciation
 */

let germanVoice: SpeechSynthesisVoice | null = null;

function getGermanVoice(): SpeechSynthesisVoice | null {
  if (typeof window === 'undefined' || !window.speechSynthesis) return null;

  const voices = window.speechSynthesis.getVoices();
  // Find a German voice
  const de = voices.find(
    (v) => v.lang === 'de-DE' || v.lang.startsWith('de')
  );
  return de || voices[0] || null;
}

// Pre-load voices
if (typeof window !== 'undefined' && window.speechSynthesis) {
  window.speechSynthesis.onvoiceschanged = () => {
    germanVoice = getGermanVoice();
  };
}

export function isSpeechSupported(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
}

export function speakGerman(text: string, rate: number = 0.88): boolean {
  if (!isSpeechSupported()) {
    console.warn('Speech synthesis is not supported on this device/browser.');
    return false;
  }

  try {
    window.speechSynthesis.cancel(); // Stop any active playback

    // Clean word of articles for pure pronunciation if preferred, or speak phrase
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'de-DE';
    utterance.rate = rate; // slightly slower for language learners

    if (!germanVoice) {
      germanVoice = getGermanVoice();
    }
    if (germanVoice) {
      utterance.voice = germanVoice;
    }

    window.speechSynthesis.speak(utterance);
    return true;
  } catch (err) {
    console.error('Speech error:', err);
    return false;
  }
}
