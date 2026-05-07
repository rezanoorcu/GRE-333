export interface WordEntry {
  word: string;
  context: string;
  definition: string;
  nuance?: string;
  example: string;
}

export interface WordBlock {
  id: string;
  title: string;
  words: WordEntry[];
}
