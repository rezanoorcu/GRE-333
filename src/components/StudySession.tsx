
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  AlertCircle, 
  ChevronLeft, 
  ChevronRight, 
  Volume2, 
  Star, 
  Loader2 
} from 'lucide-react';
import { WordBlock, WordEntry } from '../types';
import { VOCABULARY_DATA } from '../data';
import { speakWord } from '../services/aiService';

type WordStatus = 'new' | 'mastered' | 'review';

interface StudySessionProps {
  block: WordBlock;
  wordStatus: Record<string, WordStatus>;
  onToggleStatus: (word: string, status: WordStatus) => void;
  onBulkUpdateStatus: (words: string[], status: WordStatus) => void;
  isSidebarOpen: boolean;
  bookmarks: Set<string>;
  onToggleBookmark: (word: string) => void;
  preferences: any;
}

export const StudySession: React.FC<StudySessionProps> = ({ 
  block, 
  wordStatus, 
  onToggleStatus,
  onBulkUpdateStatus,
  bookmarks,
  onToggleBookmark,
  preferences
}) => {
  const [index, setIndex] = useState(() => {
    try {
      const saved = localStorage.getItem(`lexicon_pos_${block.id}`);
      return saved ? parseInt(saved, 10) : 0;
    } catch (e) {
      return 0;
    }
  });

  useEffect(() => {
    localStorage.setItem(`lexicon_pos_${block.id}`, index.toString());
  }, [index, block.id]);

  const [isSpeaking, setIsSpeaking] = useState(false);
  const [bulkConfirm, setBulkConfirm] = useState<'mastered' | 'review' | null>(null);
  const word = block.words[index] || block.words[0];
  const blockIdx = VOCABULARY_DATA.findIndex(b => b.id === block.id) + 1;
  const status = wordStatus[word.word] || 'new';
  const isBookmarked = bookmarks.has(word.word);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % block.words.length);
    setIsSpeaking(false);
  };
  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + block.words.length) % block.words.length);
    setIsSpeaking(false);
  };

  const handleSpeak = () => {
    if (isSpeaking) return;
    setIsSpeaking(true);
    speakWord(word.word, () => setIsSpeaking(false), preferences.pronunciationSpeed);
  };

  useEffect(() => {
    if (preferences.autoPlayAudio) {
      handleSpeak();
    }
  }, [index, preferences.autoPlayAudio]);

  const handleBulkAction = (status: 'mastered' | 'review') => {
    onBulkUpdateStatus(block.words.map(w => w.word), status);
    setBulkConfirm(null);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === 'INPUT' || 
        document.activeElement?.tagName === 'TEXTAREA'
      ) return;

      if (e.code === 'ArrowRight') handleNext();
      if (e.code === 'ArrowLeft') handlePrev();
      if (e.key.toLowerCase() === 'm') onToggleStatus(word.word, 'mastered');
      if (e.key.toLowerCase() === 'r') onToggleStatus(word.word, 'review');
      if (e.key.toLowerCase() === 's') handleSpeak();
      if (e.key.toLowerCase() === 'b') onToggleBookmark(word.word);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [index, word.word, onToggleStatus]);

  return (
    <div className="flex-1 flex flex-col h-full min-h-0 relative bg-editorial-bg">
      <div className="absolute top-0 right-0 p-6 md:p-12 pointer-events-none z-0">
        <p className="text-6xl md:text-8xl font-serif text-editorial-border opacity-50 select-none">
          {String(blockIdx).padStart(2, '0')}
        </p>
      </div>

      <header className="p-6 md:p-12 pb-0 flex flex-col sm:flex-row items-center gap-4 justify-between relative z-10 transition-colors">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 md:gap-4 text-[8px] md:text-[10px] uppercase tracking-[0.25em] font-bold text-editorial-muted">
          <span className="shrink-0">Block {blockIdx}</span>
          <span className="hidden sm:inline w-8 h-[1px] bg-editorial-border"></span>
          <span className="shrink-0">Study Mode</span>
          <span className="hidden sm:inline w-8 h-[1px] bg-editorial-border"></span>
          {status === 'mastered' ? (
            <span className="text-emerald-500 flex items-center gap-1 md:gap-2 font-black shrink-0"><CheckCircle2 size={10} /> Mastered</span>
          ) : status === 'review' ? (
            <span className="text-amber-500 flex items-center gap-1 md:gap-2 font-black shrink-0"><AlertCircle size={10} /> Review</span>
          ) : (
            <span className="font-bold shrink-0">New Entry</span>
          )}
          
          <div className="flex items-center gap-4 border-l border-editorial-border pl-4 md:pl-6 ml-2 md:ml-4">
            <button 
              onClick={() => setBulkConfirm('mastered')}
              className="text-[9px] uppercase font-bold tracking-widest text-emerald-500/60 hover:text-emerald-500 transition-colors flex items-center gap-2"
              title="Mark All as Mastered"
            >
              <CheckCircle2 size={12} className="sm:size-14" /> <span className="hidden sm:inline">Bulk Master</span>
            </button>
            <button 
              onClick={() => setBulkConfirm('review')}
              className="text-[9px] uppercase font-bold tracking-widest text-amber-500/60 hover:text-amber-500 transition-colors flex items-center gap-2"
              title="Mark All for Review"
            >
              <AlertCircle size={12} className="sm:size-14" /> <span className="hidden sm:inline">Bulk Review</span>
            </button>
          </div>
        </div>
        <div className="text-[9px] md:text-[10px] font-mono text-editorial-meta bg-editorial-accent px-3 py-1.5 rounded-sm font-bold border border-editorial-border shadow-sm">
          WORD {index + 1} / {block.words.length}
        </div>
      </header>

      {/* Block Progress Bar */}
      <div className="h-1 w-full bg-editorial-border overflow-hidden relative z-10 shrink-0 mt-4">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${((index + 1) / block.words.length) * 100}%` }}
          className="h-full bg-editorial-text"
          transition={{ type: 'spring', damping: 20, stiffness: 100 }}
        />
      </div>

      <section className="flex-1 overflow-y-auto px-4 md:px-12 py-6 md:py-8 relative z-10 custom-scrollbar">
        <div className="max-w-4xl w-full mx-auto min-h-full flex items-center py-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={word.word}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <button 
                onClick={() => onToggleBookmark(word.word)}
                className={`absolute -top-4 -right-4 md:-right-8 p-3 md:p-5 rounded-full border-2 transition-all shadow-lg hover:scale-110 active:scale-95 ${isBookmarked ? 'bg-editorial-text text-white border-editorial-text' : 'bg-white border-editorial-border text-editorial-meta hover:border-editorial-text hover:text-editorial-text'}`}
                title="Bookmark Word (B)"
              >
                <Star size={24} fill={isBookmarked ? "currentColor" : "none"} />
              </button>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8 mb-6 md:mb-10">
                <div className="flex items-center gap-4 md:gap-6 overflow-visible">
                  <h2 
                    className="text-3xl sm:text-5xl md:text-7xl lg:text-[120px] font-serif leading-none tracking-tight text-editorial-text select-all cursor-pointer hover:text-editorial-muted transition-colors break-words"
                    onClick={handleSpeak}
                  >
                    {word.word}
                  </h2>
                  <button 
                    onClick={handleSpeak}
                    disabled={isSpeaking}
                    className={`p-2.5 sm:p-3 md:p-4 rounded-full border-2 border-editorial-border hover:border-editorial-text transition-all shrink-0 ${isSpeaking ? 'animate-pulse text-editorial-muted' : 'text-editorial-meta hover:text-editorial-text'}`}
                  >
                    {isSpeaking ? <Loader2 size={18} className="animate-spin" /> : <Volume2 size={18} />}
                  </button>
                </div>
                <div className="flex gap-2 md:gap-3 shrink-0">
                  <button 
                    onClick={() => onToggleStatus(word.word, 'mastered')}
                    className={`flex-1 md:flex-none flex items-center justify-center p-3 md:p-4 rounded-sm border-2 transition-all duration-300 shadow-sm md:shadow-lg ${status === 'mastered' ? 'bg-editorial-text text-editorial-bg border-editorial-text' : 'bg-white border-editorial-border text-editorial-meta hover:border-editorial-text'}`}
                    title="Toggle Mastery"
                  >
                    <CheckCircle2 size={18} className="md:size-24" />
                    <span className="md:hidden ml-2 text-[9px] font-bold uppercase tracking-widest">Master</span>
                  </button>
                  <button 
                    onClick={() => onToggleStatus(word.word, 'review')}
                    className={`flex-1 md:flex-none flex items-center justify-center p-3 md:p-4 rounded-sm border-2 transition-all duration-300 shadow-sm md:shadow-lg ${status === 'review' ? 'bg-amber-600 text-white border-amber-600' : 'bg-white border-editorial-border text-editorial-meta hover:border-editorial-text'}`}
                    title="Mark for Review"
                  >
                    <AlertCircle size={18} className="md:size-24" />
                    <span className="md:hidden ml-2 text-[9px] font-bold uppercase tracking-widest">Review</span>
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-8 md:mb-12">
                <div className="w-full md:w-1/3">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-editorial-meta mb-3">Context</p>
                  <p className="text-sm md:text-base font-semibold border-l-4 border-editorial-text pl-4 md:pl-5 py-2">
                    {word.context}
                  </p>
                </div>
                <div className="w-full md:w-2/3">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-editorial-meta mb-3">Definition</p>
                  <div className="text-xl md:text-2xl leading-snug text-editorial-text font-medium">
                    <div className="mb-4">{word.definition}</div>
                    {word.nuance && (
                      <div className="mt-4 md:mt-6 text-base md:text-lg italic text-editorial-muted border-t border-editorial-border pt-4 md:pt-6 font-serif leading-relaxed">
                        “{word.nuance}”
                      </div>
                    )}

                    <div className="mt-8 space-y-8">
                      {word.derivatives && word.derivatives.length > 0 && (
                        <div className="bg-neutral-50 border border-editorial-border p-4 rounded-sm">
                          <p className="text-[9px] uppercase font-bold tracking-widest text-editorial-meta mb-3 border-b border-editorial-border pb-2">Morphological Derivatives</p>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {word.derivatives.map((d, i) => (
                              <div key={i} className="flex flex-col">
                                <span className="text-[8px] font-black text-editorial-meta uppercase mb-0.5">{d.form}</span>
                                <span className="text-sm font-serif italic text-editorial-text">{d.word}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {word.synonyms && word.synonyms.length > 0 && (
                          <div>
                            <p className="text-[9px] uppercase font-bold tracking-widest text-editorial-meta mb-2">Architectural Synonyms</p>
                            <div className="flex flex-wrap gap-2">
                              {word.synonyms.map(s => (
                                <span key={s} className="px-3 py-1 bg-editorial-accent text-[11px] font-bold tracking-tight border border-editorial-border rounded-sm hover:translate-y-[-1px] transition-transform cursor-default">
                                  {s}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        {word.antonyms && word.antonyms.length > 0 && (
                          <div>
                            <p className="text-[9px] uppercase font-bold tracking-widest text-editorial-meta mb-2">Lexical Antonyms</p>
                            <div className="flex flex-wrap gap-2">
                              {word.antonyms.map(a => (
                                <span key={a} className="px-3 py-1 bg-white text-[11px] font-bold tracking-tight border border-editorial-border rounded-sm italic text-editorial-muted hover:translate-y-[-1px] transition-transform cursor-default">
                                  {a}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-editorial-text text-white p-5 md:p-12 rounded-sm shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 md:w-48 h-32 md:h-48 bg-white/5 -rotate-45 translate-x-12 md:translate-x-24 -translate-y-12 md:-translate-y-24 group-hover:scale-110 transition-transform"></div>
                <p className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] opacity-40 mb-4 md:mb-8 font-bold text-center">In Practice</p>
                <div className="text-lg md:text-3xl lg:text-4xl font-serif italic text-center leading-relaxed max-w-3xl mx-auto tracking-wide">
                  “{word.example.split(new RegExp(`(${word.word})`, 'gi')).map((part, i) => (
                    part.toLowerCase() === word.word.toLowerCase() 
                      ? <span key={i} className="text-[#C7B7A3] not-italic font-bold border-b border-[#C7B7A3]/30">{part}</span> 
                      : part
                  ))}”
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Bottom Control Bar */}
      <section className="h-28 md:h-44 border-t-2 border-editorial-text bg-white relative z-10 shrink-0 transition-colors">
        <div className="flex h-full divide-x divide-editorial-border">
          <button 
            onClick={handlePrev}
            className="flex-1 p-3 md:p-8 flex flex-col justify-between hover:bg-editorial-accent transition-all text-left group"
          >
            <p className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-editorial-meta flex items-center gap-1 md:gap-2 group-hover:-translate-x-1 transition-transform">
              <ChevronLeft size={10} className="md:size-12" /> Prev
            </p>
            <div>
              <p className="text-sm md:text-2xl font-serif italic text-editorial-text group-hover:opacity-60 transition-opacity truncate max-w-[120px] md:max-w-none">
                {block.words[(index - 1 + block.words.length) % block.words.length].word}
              </p>
            </div>
          </button>
          
          <button 
            onClick={handleNext}
            className="flex-1 p-3 md:p-8 flex flex-col justify-between hover:bg-editorial-accent transition-all text-left group"
          >
            <p className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-editorial-meta flex items-center justify-end gap-1 md:gap-2 group-hover:translate-x-1 transition-transform">
              Next <ChevronRight size={10} className="md:size-12" />
            </p>
            <div className="text-right">
              <p className="text-sm md:text-2xl font-serif italic text-editorial-text group-hover:opacity-60 transition-opacity truncate max-w-[120px] md:max-w-none">
                {block.words[(index + 1) % block.words.length].word}
              </p>
            </div>
          </button>

          <div className="hidden xl:flex flex-[2] p-8 bg-editorial-accent overflow-hidden">
            <div className="w-full">
              <p className="text-[9px] font-bold uppercase tracking-widest text-editorial-meta mb-4">Block Manifest Archive</p>
              <div className="grid grid-cols-3 gap-x-6 gap-y-2 overflow-hidden">
                {block.words.slice(Math.max(0, index - 4), index + 8).map((w, i) => (
                  <div 
                    key={i} 
                    className={`text-[11px] font-medium truncate flex items-center gap-2 ${w.word === word.word ? 'text-editorial-text font-bold' : 'text-editorial-muted opacity-60'}`}
                  >
                    {w.word === word.word && <div className="w-1 h-1 bg-editorial-text rounded-full" />}
                    {w.word}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Sticky Navigation Bar */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-30 pointer-events-none w-full max-w-sm px-6">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="pointer-events-auto bg-white/80 backdrop-blur-md border border-editorial-text/20 shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-full px-6 py-3 flex items-center justify-between gap-4"
        >
          <button 
            onClick={handlePrev}
            className="p-2 text-editorial-muted hover:text-editorial-text transition-colors"
            title="Previous (←)"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className="flex items-center gap-2 border-x border-editorial-border px-4 mx-2">
            <button 
              onClick={() => onToggleStatus(word.word, 'mastered')}
              className={`p-2 rounded-full transition-all ${status === 'mastered' ? 'bg-emerald-600 text-white' : 'text-emerald-500 hover:bg-emerald-50'}`}
              title="Mastered (M)"
            >
              <CheckCircle2 size={20} />
            </button>
            <button 
              onClick={() => onToggleBookmark(word.word)}
              className={`p-2 rounded-full transition-all ${isBookmarked ? 'bg-editorial-text text-white' : 'text-editorial-meta hover:bg-neutral-100'}`}
              title="Bookmark (B)"
            >
              <Star size={20} fill={isBookmarked ? "currentColor" : "none"} />
            </button>
            <button 
              onClick={() => onToggleStatus(word.word, 'review')}
              className={`p-2 rounded-full transition-all ${status === 'review' ? 'bg-amber-600 text-white' : 'text-amber-500 hover:bg-amber-50'}`}
              title="Review (R)"
            >
              <AlertCircle size={20} />
            </button>
          </div>

          <button 
            onClick={handleNext}
            className="p-2 text-editorial-muted hover:text-editorial-text transition-colors"
            title="Next (→)"
          >
            <ChevronRight size={24} />
          </button>
        </motion.div>
      </div>

      {/* Bulk Actions Confirmation Overlay */}
      <AnimatePresence>
        {bulkConfirm && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-editorial-text/40 backdrop-blur-md pointer-events-auto"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white p-8 md:p-12 max-w-sm w-full border border-editorial-border shadow-2xl rounded-sm text-center"
            >
              <div className="flex justify-center mb-6">
                {bulkConfirm === 'mastered' ? (
                  <div className="p-4 bg-emerald-50 rounded-full text-emerald-500 border border-emerald-100">
                    <CheckCircle2 size={32} />
                  </div>
                ) : (
                  <div className="p-4 bg-amber-50 rounded-full text-amber-500 border border-amber-100">
                    <AlertCircle size={32} />
                  </div>
                )}
              </div>
              <h3 className="text-xl font-serif italic text-editorial-text mb-4">Bulk Systematic Update</h3>
              <p className="text-xs text-editorial-muted mb-8 leading-relaxed">
                Apply <span className={`font-bold ${bulkConfirm === 'mastered' ? 'text-emerald-500' : 'text-amber-500'}`}>{bulkConfirm === 'mastered' ? 'Mastery' : 'Review'}</span> status to all {block.words.length} lexemes in this block? This operation is comprehensive and will overwrite existing progress indicators for this specific set.
              </p>
              <div className="flex flex-col gap-3">
                <button 
                  onClick={() => handleBulkAction(bulkConfirm)}
                  className={`w-full py-4 rounded-sm text-[10px] uppercase font-bold tracking-[0.2em] transition-all hover:shadow-lg active:scale-[0.98] ${bulkConfirm === 'mastered' ? 'bg-editorial-text text-white hover:bg-emerald-600' : 'bg-editorial-text text-white hover:bg-amber-600'}`}
                >
                  Verify and Execute
                </button>
                <button 
                  onClick={() => setBulkConfirm(null)}
                  className="w-full py-4 rounded-sm text-[10px] uppercase font-bold tracking-[0.2em] text-editorial-meta hover:text-editorial-text transition-colors bg-neutral-50"
                >
                  Cancel Operation
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
