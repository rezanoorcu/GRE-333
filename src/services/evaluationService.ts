/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

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
  // Local heuristic evaluation
  const hasWord = sentence.toLowerCase().includes(word.toLowerCase());
  const wordsCount = sentence.trim().split(/\s+/).length;
  const hasCapital = /^[A-Z]/.test(sentence.trim());
  const hasPunctuation = /[.!?]$/.test(sentence.trim());

  let score = 0;
  if (hasWord) score += 50;
  if (wordsCount >= 5) score += 20;
  if (hasCapital) score += 15;
  if (hasPunctuation) score += 15;

  const isCorrect = hasWord && wordsCount >= 3;

  return {
    isCorrect,
    score,
    feedback: {
      grammar: wordsCount < 5 ? "The sentence is quite brief. Consider expanding it for better clarity." : "Sentence structure appears functional.",
      usage: hasWord ? `Excellent usage of "${word}".` : `You missed the target word "${word}".`,
      nuance: score > 80 ? "You've captured a good depth of context." : "Try to incorporate more specific details to reflect the word's nuance.",
      suggestion: !hasWord ? `Ensure you include the word "${word}" in your practice sentence.` : "Try adding more descriptive adjectives to enrich the context."
    }
  };
}
