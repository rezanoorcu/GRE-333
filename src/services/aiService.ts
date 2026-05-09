export async function speakWord(text: string) {
  try {
    // Use high-quality browser TTS
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    
    // Reset and speak
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  } catch (error) {
    console.error("Pronunciation error:", error);
  }
}
