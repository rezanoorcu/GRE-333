export interface SentenceCompletionQuestion {
  id: string;
  question: string;
  choices: { key: string; text: string }[];
  correctAnswer: string; // "a" | "b" | "c" | "d" | "e"
  explanation: string;
  difficulty: 'easy' | 'intermediate' | 'advanced';
  type: 'restatement' | 'comparison' | 'contrast' | 'cause_effect';
  chapter: number;
  vocab: { word: string; definition: string }[];
}

import { CompactQuestion, chunk1 } from './sc_chunk_1';
import { chunk2 } from './sc_chunk_2';
import { chunk3 } from './sc_chunk_3';
import { chunk4 } from './sc_chunk_4';
import { chunk5 } from './sc_chunk_5';

function expandQuestions(chunk: CompactQuestion[]): SentenceCompletionQuestion[] {
  return chunk.map(q => ({
    id: `sc-${q.i}`,
    question: q.q,
    choices: [
      { key: 'a', text: q.c[0] },
      { key: 'b', text: q.c[1] },
      { key: 'c', text: q.c[2] },
      { key: 'd', text: q.c[3] },
      { key: 'e', text: q.c[4] }
    ],
    correctAnswer: q.a,
    explanation: q.e,
    difficulty: q.d,
    type: q.t,
    chapter: q.ch,
    vocab: q.v ? q.v.map(v => ({ word: v[0], definition: v[1] })) : []
  }));
}

export const SENTENCE_COMPLETION_DATA: SentenceCompletionQuestion[] = [
  ...expandQuestions(chunk1),
  ...expandQuestions(chunk2),
  ...expandQuestions(chunk3),
  ...expandQuestions(chunk4),
  ...expandQuestions(chunk5)
];
