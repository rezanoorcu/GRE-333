/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Loader2, Sparkles, AlertCircle, CheckCircle2 } from 'lucide-react';
import { evaluateSentence, EvaluationResult } from '../services/evaluationService';

interface SentenceEvaluatorProps {
  word: string;
  definition: string;
  nuance: string;
}

export const SentenceEvaluator: React.FC<SentenceEvaluatorProps> = ({ word, definition, nuance }) => {
  const [userInput, setUserInput] = useState('');
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [result, setResult] = useState<EvaluationResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || isEvaluating) return;

    setIsEvaluating(true);
    setError(null);
    try {
      const evaluation = await evaluateSentence(word, definition, nuance, userInput);
      setResult(evaluation);
    } catch (err) {
      console.error(err);
      setError('The evaluation service is currently unavailable. Please try again shortly.');
    } finally {
      setIsEvaluating(false);
    }
  };

  return (
    <div className="mt-8 md:mt-12 bg-white border border-editorial-border p-4 md:p-8 rounded-sm shadow-sm">
      <div className="flex items-center gap-3 mb-5 md:mb-6">
        <Sparkles className="text-editorial-text" size={18} />
        <h3 className="text-base md:text-lg font-serif italic text-editorial-text">Sentence Practice</h3>
      </div>

      <form onSubmit={handleSubmit} className="mb-6 md:mb-8">
        <p className="text-[9px] md:text-[10px] uppercase font-bold tracking-widest text-editorial-meta mb-3">Compose Your Sentence</p>
        <div className="relative">
          <textarea
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder={`Draft a sentence utilizing "${word}"...`}
            className="w-full h-28 md:h-32 p-3 md:p-4 bg-editorial-accent border border-editorial-border focus:outline-none focus:border-editorial-text transition-all rounded-sm text-sm font-medium resize-none"
            disabled={isEvaluating}
          />
          <button
            type="submit"
            disabled={isEvaluating || !userInput.trim()}
            className={`absolute bottom-3 right-3 p-2 rounded-sm transition-all ${
              isEvaluating || !userInput.trim() 
                ? 'text-neutral-300' 
                : 'text-editorial-text hover:bg-white hover:shadow-md'
            }`}
          >
            {isEvaluating ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
          </button>
        </div>
      </form>

      <AnimatePresence mode="wait">
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="space-y-4 md:space-y-6 pt-6 border-t border-editorial-border"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 md:gap-3">
                {result.isCorrect ? (
                  <CheckCircle2 className="text-emerald-600" size={20} />
                ) : (
                  <AlertCircle className="text-amber-600" size={20} />
                )}
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-editorial-text">
                    {result.isCorrect ? 'Masterful Usage' : 'Needs Reinforcement'}
                  </p>
                  <p className="text-[10px] text-editorial-meta font-medium">Evaluation Score: {result.score}/100</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6">
              <FeedbackItem label="Grammar & Structure" content={result.feedback.grammar} />
              <FeedbackItem label="Contextual Usage" content={result.feedback.usage} />
              <FeedbackItem label="Nuance Retention" content={result.feedback.nuance} />
              <FeedbackItem label="Refinement Tip" content={result.feedback.suggestion} variant="dark" />
            </div>
            
            <button 
              onClick={() => {
                setResult(null);
                setUserInput('');
              }}
              className="w-full py-3 text-[9px] uppercase font-bold tracking-[0.2em] text-editorial-meta hover:text-editorial-text transition-colors border-t border-editorial-border mt-2 md:mt-4"
            >
              Clear Practice Field
            </button>
          </motion.div>
        )}

        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-4 bg-red-50 border border-red-100 text-red-600 text-sm font-medium rounded-sm flex items-center gap-2"
          >
            <AlertCircle size={16} />
            {error}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FeedbackItem = ({ label, content, variant = 'light' }: { label: string, content: string, variant?: 'light' | 'dark' }) => (
  <div className={`p-4 rounded-sm border ${variant === 'dark' ? 'bg-editorial-text text-white border-editorial-text' : 'bg-neutral-50 border-editorial-border text-editorial-text'}`}>
    <p className={`text-[8px] uppercase font-bold tracking-widest mb-2 ${variant === 'dark' ? 'text-white/60' : 'text-editorial-meta'}`}>{label}</p>
    <p className="text-xs font-serif italic leading-relaxed">“{content}”</p>
  </div>
);
