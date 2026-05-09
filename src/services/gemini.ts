/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export interface EvaluationResult {
  isCorrect: boolean;
  score: number; // 0-100
  feedback: {
    grammar: string;
    usage: string;
    nuance: string;
    suggestion: string;
  };
}

export async function evaluateSentence(word: string, definition: string, nuance: string, sentence: string): Promise<EvaluationResult> {
  const prompt = `
    Evaluate the following sentence where the user is practicing using the vocabulary word "${word}".
    
    Word: ${word}
    Definition: ${definition}
    Nuance/Context: ${nuance}
    User Sentence: "${sentence}"
    
    Analyze the sentence for:
    1. Grammar: Is the sentence grammatically correct?
    2. Usage: Is the word "${word}" used correctly according to its definition?
    3. Nuance: Does the sentence capture the specific nuance or context of the word?
    4. Suggestion: Provide a better version or tips for improvement.
    
    Return the result in JSON format.
  `;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          isCorrect: { type: Type.BOOLEAN },
          score: { type: Type.NUMBER },
          feedback: {
            type: Type.OBJECT,
            properties: {
              grammar: { type: Type.STRING },
              usage: { type: Type.STRING },
              nuance: { type: Type.STRING },
              suggestion: { type: Type.STRING },
            },
            required: ["grammar", "usage", "nuance", "suggestion"]
          }
        },
        required: ["isCorrect", "score", "feedback"]
      }
    }
  });

  return JSON.parse(response.text);
}
