
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  Volume2, 
  Star, 
  Loader2, 
  ChevronRight, 
  AlertCircle 
} from 'lucide-react';
import { WordEntry } from '../types';
import { speakWord } from '../services/aiService';

type WordStatus = 'new' | 'mastered' | 'review';

interface WordListEntryProps {
  word: WordEntry;
  status: WordStatus;
  onToggleStatus: (word: string, status: WordStatus) => void;
  isBookmarked: boolean;
  onToggleBookmark: (word: string) => void;
}

export const WordListEntry: React.FC<WordListEntryProps> = ({ 
  word, 
  status, 
  onToggleStatus, 
  isBookmarked, 
  onToggleBookmark 
}) => {
  const [expanded, setExpanded] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isSpeaking) return;
    setIsSpeaking(true);
    speakWord(word.word, () => setIsSpeaking(false));
  };

  return (
    <div className={`group border-b border-editorial-border p-4 md:p-6 hover:bg-white transition-all ${status === 'mastered' ? 'bg-emerald-50/10' : status === 'review' ? 'bg-amber-50/10' : 'bg-transparent'}`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3 md:gap-6">
          <button 
            onClick={(e) => { e.stopPropagation(); onToggleStatus(word.word, 'mastered'); }}
            className={`transition-all duration-300 transform shrink-0 ${status === 'mastered' ? 'text-emerald-700 scale-110' : 'text-editorial-border hover:text-editorial-meta hover:scale-110'}`}
            title="Mark as Mastered"
          >
            <CheckCircle2 size={20} className="md:size-24" />
          </button>
          <div className="flex items-baseline flex-wrap gap-x-3 md:gap-x-8 cursor-pointer" onClick={() => setExpanded(!expanded)}>
            <h4 className="text-xl md:text-2xl font-serif italic tracking-tight text-editorial-text group-hover:underline underline-offset-8 decoration-editorial-muted">{word.word}</h4>
                <div className="flex items-center gap-1.5 md:gap-2">
                  <button 
                    onClick={handleSpeak}
                    className={`p-1.5 md:p-2 rounded-full transition-all ${isSpeaking ? 'text-editorial-text animate-pulse' : 'text-editorial-meta hover:text-editorial-text hover:bg-editorial-accent'}`}
                  >
                    {isSpeaking ? <Loader2 size={12} className="animate-spin md:size-16" /> : <Volume2 size={12} className="md:size-16" />}
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); onToggleBookmark(word.word); }}
                    className={`p-1.5 md:p-2 rounded-full transition-all ${isBookmarked ? 'text-editorial-text bg-editorial-accent' : 'text-editorial-meta hover:text-editorial-text hover:bg-editorial-accent'}`}
                    title="Bookmark Word"
                  >
                    <Star size={12} fill={isBookmarked ? "currentColor" : "none"} className="md:size-16" />
                  </button>
                  <span className="text-[8px] md:text-[9px] text-editorial-meta font-bold uppercase tracking-[0.25em]">{word.context}</span>
                </div>
          </div>
        </div>
          <div className="flex items-center justify-between sm:justify-end gap-4 md:gap-10">
            <p className="text-editorial-muted text-sm md:text-base max-w-[200px] md:max-w-sm truncate hidden lg:block">{word.definition}</p>
            <div className="flex items-center gap-2 md:gap-4 overflow-x-auto">
              {status === 'review' && (
                <span className="whitespace-nowrap text-[8px] md:text-[9px] uppercase font-bold text-amber-700 px-2 md:px-3 py-1 md:py-1.5 bg-amber-100 rounded-sm border border-amber-200">Review</span>
              )}
              {status === 'mastered' && (
                <span className="whitespace-nowrap text-[8px] md:text-[9px] uppercase font-bold text-emerald-700 px-2 md:px-3 py-1 md:py-1.5 bg-emerald-100 rounded-sm border border-emerald-200">Mastered</span>
              )}
              <button 
                onClick={() => setExpanded(!expanded)}
                className={`p-2 md:p-3 transition-transform duration-500 border border-transparent rounded-full hover:bg-editorial-accent shrink-0 ${expanded ? 'rotate-180 text-editorial-text bg-editorial-accent' : 'text-editorial-meta'}`}
              >
                <ChevronRight size={16} className="rotate-90 md:size-18" />
              </button>
            </div>
          </div>
      </div>
      
      <AnimatePresence>
        {expanded && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-6">
              <div className="md:col-span-8">
                <p className="text-[9px] md:text-[10px] uppercase font-bold tracking-widest text-editorial-meta mb-3 md:mb-4">Definition</p>
                <div className="text-lg md:text-2xl text-editorial-text leading-relaxed font-medium">
                  <div>{word.definition}</div>
                </div>
                {word.nuance && (
                  <div className="mt-6 md:mt-8 pl-4 md:pl-6 border-l-4 border-editorial-border">
                    <div className="text-base md:text-lg italic text-editorial-muted font-serif leading-relaxed">“{word.nuance}”</div>
                  </div>
                )}

                <div className="mt-8 space-y-8">
                  {word.derivatives && word.derivatives.length > 0 && (
                    <div className="bg-editorial-accent/20 border border-editorial-border p-4 rounded-sm">
                      <p className="text-[9px] uppercase font-bold tracking-widest text-editorial-meta mb-3 border-b border-editorial-border pb-2">Morphological Derivatives</p>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {word.derivatives.map((d, i) => (
                          <div key={i} className="flex flex-col">
                            <span className="text-[8px] font-black text-editorial-meta uppercase mb-0.5">{d.form}</span>
                            <span className="text-sm font-serif italic text-editorial-text">{d.word}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row flex-wrap gap-x-12 gap-y-6">
                    {word.synonyms && word.synonyms.length > 0 && (
                      <div>
                        <p className="text-[9px] uppercase font-bold tracking-widest text-editorial-meta mb-3">Architectural Synonyms</p>
                        <div className="flex flex-wrap gap-2">
                          {word.synonyms.map(s => (
                            <span key={s} className="px-3 py-1 bg-white text-[11px] font-bold tracking-tight border border-editorial-border rounded-sm">{s}</span>
                          ))}
                        </div>
                      </div>
                    )}
                    {word.antonyms && word.antonyms.length > 0 && (
                      <div>
                        <p className="text-[9px] uppercase font-bold tracking-widest text-editorial-meta mb-3">Lexical Antonyms</p>
                        <div className="flex flex-wrap gap-2">
                          {word.antonyms.map(a => (
                            <span key={a} className="px-3 py-1 bg-white text-[11px] font-bold tracking-tight border border-editorial-border rounded-sm italic text-editorial-muted">{a}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-8 md:mt-12">
                  <button 
                    onClick={() => onToggleStatus(word.word, 'mastered')}
                    className={`flex items-center justify-center gap-2 md:gap-3 px-4 md:px-6 py-2.5 md:py-3 text-[10px] md:text-xs font-bold uppercase tracking-widest border-2 transition-all duration-300 ${status === 'mastered' ? 'bg-editorial-text text-white border-editorial-text shadow-md' : 'bg-white border-editorial-border hover:border-editorial-text hover:shadow-md'}`}
                  >
                    <CheckCircle2 size={14} className="md:size-16" /> {status === 'mastered' ? 'Mastered' : 'Mark Mastered'}
                  </button>
                  <button 
                    onClick={() => onToggleStatus(word.word, 'review')}
                    className={`flex items-center justify-center gap-2 md:gap-3 px-4 md:px-6 py-2.5 md:py-3 text-[10px] md:text-xs font-bold uppercase tracking-widest border-2 transition-all duration-300 ${status === 'review' ? 'bg-amber-600 text-white border-amber-600 shadow-md' : 'bg-white border-editorial-border hover:border-editorial-text hover:shadow-md'}`}
                  >
                    <AlertCircle size={14} className="md:size-16" /> {status === 'review' ? 'In Review' : 'Mark Review'}
                  </button>
                  <button 
                    onClick={() => onToggleBookmark(word.word)}
                    className={`flex items-center justify-center gap-2 md:gap-3 px-4 md:px-6 py-2.5 md:py-3 text-[10px] md:text-xs font-bold uppercase tracking-widest border-2 transition-all duration-300 ${isBookmarked ? 'bg-editorial-text text-white border-editorial-text shadow-md' : 'bg-white border-editorial-border hover:border-editorial-text hover:shadow-md'}`}
                  >
                    <Star size={14} fill={isBookmarked ? "currentColor" : "none"} className="md:size-16" /> {isBookmarked ? 'Bookmarked' : 'Bookmark'}
                  </button>
                </div>
              </div>
              <div className="md:col-span-4 py-6 md:py-8 px-6 md:px-8 bg-white border-2 border-editorial-border shadow-sm rounded-sm">
                <p className="text-[9px] md:text-[10px] uppercase font-bold tracking-widest text-editorial-meta mb-3 md:mb-4">Contextual Application</p>
                <p className="text-sm md:text-base text-editorial-text font-serif italic leading-relaxed tracking-wide">“{word.example}”</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
