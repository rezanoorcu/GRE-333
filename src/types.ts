export interface WordEntry {
  word: string;
  context: string;
  definition: string;
  nuance?: string;
  example: string;
  synonyms?: string[];
  antonyms?: string[];
}

export interface WordBlock {
  id: string;
  title: string;
  words: WordEntry[];
}

export interface QuizQuestion {
  id: string;
  word: WordEntry;
  type: 'definition' | 'synonym' | 'antonym';
  options: string[];
  correctAnswer: string;
}

export interface QuizScore {
  score: number;
  total: number;
  missedWords: string[];
  duration: number;
}
