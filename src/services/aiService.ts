export async function speakWord(text: string) {
  try {
    // Check if SpeechSynthesis is supported
    if (!window.speechSynthesis) {
      console.error("Speech synthesis not supported in this browser.");
      return;
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    // Create the utterance
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Attempt to find a high-quality English voice
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(v => 
      (v.lang.startsWith('en') && v.name.includes('Google')) || 
      (v.lang.startsWith('en') && v.name.includes('Premium')) ||
      (v.lang === 'en-US' && v.name.includes('Samantha'))
    );

    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    utterance.lang = 'en-US';
    utterance.rate = 0.85; // Slightly slower for clarity
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    // Handle silence/stuck state in some browsers
    // Chrome sometimes requires a resume if it gets into a weird state
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
    }

    // Force start
    window.speechSynthesis.speak(utterance);

    // Some browsers need a "kickstart" if they are stuck
    const timer = setInterval(() => {
      if (!window.speechSynthesis.speaking) {
        clearInterval(timer);
      } else {
        window.speechSynthesis.pause();
        window.speechSynthesis.resume();
      }
    }, 10000);

  } catch (error) {
    console.error("Pronunciation error:", error);
  }
}
