import { GoogleGenAI, Modality } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

let audioContext: AudioContext | null = null;

export async function speakWord(text: string) {
  try {
    if (!process.env.GEMINI_API_KEY) {
      // Fallback to browser TTS if no key
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
      return;
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.1-flash-tts-preview",
      contents: [{ parts: [{ text: `Say clearly: ${text}` }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Kore' },
          },
        },
      },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (base64Audio) {
      if (!audioContext) {
        audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      }

      const binaryString = atob(base64Audio);
      const len = binaryString.length;
      const bytes = new Uint8Array(len);
      for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }

      // Gemini TTS (PCM) is 16-bit, 24kHz, mono
      const sampleRate = 24000;
      const pcmData = new Int16Array(bytes.buffer);
      const audioBuffer = audioContext.createBuffer(1, pcmData.length, sampleRate);
      const channelData = audioBuffer.getChannelData(0);

      for (let i = 0; i < pcmData.length; i++) {
        channelData[i] = pcmData[i] / 32768; // Convert Int16 to Float32
      }

      const source = audioContext.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(audioContext.destination);
      source.start();
    }
  } catch (error) {
    console.error("Pronunciation error:", error);
    // Final fallback
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  }
}
