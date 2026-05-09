export async function speakWord(text: string) {
  try {
    if (!window.speechSynthesis) return;

    // Mobile browsers often require a clean slate
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    
    // Voices might be empty on mobile if not "primed"
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(v => 
      (v.lang.startsWith('en') && v.name.includes('Google')) || 
      (v.lang === 'en-US' && v.name.includes('Samantha'))
    );

    if (preferredVoice) utterance.voice = preferredVoice;
    
    utterance.lang = 'en-US';
    utterance.rate = 0.85;
    utterance.volume = 1.0;

    // Direct execution is vital for mobile user-activation records
    window.speechSynthesis.speak(utterance);
  } catch (error) {
    console.error("Pronunciation error:", error);
  }
}
