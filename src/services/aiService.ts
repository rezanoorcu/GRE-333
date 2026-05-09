export async function speakWord(text: string, onEnd?: () => void) {
  try {
    if (!window.speechSynthesis) return;

    // Clear any pending speech immediately
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    
    // Mobile browsers often lose voices. We re-fetch them every time.
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(v => 
      (v.lang.startsWith('en') && v.localService) || // Prefer local high-quality voices
      (v.lang.startsWith('en') && (v.name.includes('Google') || v.name.includes('Samantha')))
    );

    if (preferredVoice) utterance.voice = preferredVoice;
    
    utterance.lang = 'en-US';
    utterance.rate = 0.88; 
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    if (onEnd) {
      utterance.onend = () => onEnd();
      utterance.onerror = () => onEnd();
    }

    // Direct execution
    window.speechSynthesis.speak(utterance);

    // Safari/Chrome Mobile workaround: if speech gets stuck in a 'paused' state
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
    }
  } catch (error) {
    console.error("Pronunciation error:", error);
    if (onEnd) onEnd();
  }
}
