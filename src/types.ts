export interface WordEntry {
  word: string;
  context: string;
  definition: string;
  nuance?: string;
  example: string;
  synonyms?: string[];
  antonyms?: string[];
  derivatives?: { form: string; word: string }[];
}

export interface WordBlock {
  id: string;
  title: string;
  words: WordEntry[];
}

export interface SavedVocab extends WordEntry {
  source: string;
  date: string;
}

export interface PracticeStats {
  attempts: number;
  correct: number;
  lastAttempt: number;
  weight: number;
}
