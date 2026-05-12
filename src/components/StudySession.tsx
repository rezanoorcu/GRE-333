
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  AlertCircle, 
  ChevronLeft, 
  ChevronRight, 
  Volume2, 
  Star, 
  Loader2,
  Search,
  LayoutGrid,
  List as ListIcon
} from 'lucide-react';
import { WordBlock, WordEntry } from '../types';
import { VOCABULARY_DATA } from '../data';
import { speakWord } from '../services/aiService';
import { WordListEntry } from './WordListEntry';

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

  const [viewMode, setViewMode] = useState<'card' | 'list'>('card');

  useEffect(() => {
    // Reset to card view when block changes
    setViewMode('card');
  }, [block.id]);

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

      <header className="py-8 px-8 md:px-12 border-b border-editorial-border flex flex-col md:flex-row items-center justify-between gap-8 bg-white/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="flex items-center gap-6">
          <div className="bg-editorial-text text-white p-4 rounded-sm shadow-xl">
            <h3 className="text-[10px] uppercase font-black tracking-[0.3em]">Block {blockIdx}</h3>
          </div>
          <div>
            <h2 className="text-2xl font-serif italic text-editorial-text leading-none mb-2">Unit Mastery</h2>
            <div className="flex items-center gap-2 text-[9px] uppercase tracking-widest font-black text-editorial-meta">
              {status === 'mastered' ? (
                <span className="text-emerald-600 flex items-center gap-1"><CheckCircle2 size={10} /> MASTERED</span>
              ) : status === 'review' ? (
                <span className="text-amber-600 flex items-center gap-1"><AlertCircle size={10} /> REVIEW</span>
              ) : (
                <span className="opacity-40">STATUS: NEW</span>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <div className="flex flex-col items-end">
            <p className="text-[10px] font-mono text-editorial-meta mb-1 font-bold">Lexical Progress</p>
            <div className="text-lg font-serif italic text-editorial-text">
              Word {index + 1} <span className="text-xs opacity-40 mx-1">of</span> {block.words.length}
            </div>
          </div>
          
          <div className="flex items-center gap-1 p-1 bg-neutral-100 rounded-sm border border-editorial-border">
            <button 
              onClick={() => setViewMode('card')}
              className={`p-2 rounded-sm transition-all ${viewMode === 'card' ? 'bg-editorial-text text-white shadow-md' : 'text-editorial-meta hover:text-editorial-text'}`}
              title="Card View"
            >
              <LayoutGrid size={16} />
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-sm transition-all ${viewMode === 'list' ? 'bg-editorial-text text-white shadow-md' : 'text-editorial-meta hover:text-editorial-text'}`}
              title="List View"
            >
              <ListIcon size={16} />
            </button>
          </div>

          <div className="hidden md:flex flex-col gap-2">
            <button 
              onClick={() => setBulkConfirm('mastered')}
              className="text-[9px] uppercase font-bold text-emerald-600 border border-emerald-100 bg-emerald-50/50 px-3 py-1 rounded-full hover:bg-emerald-50 transition-colors"
            >
              Mark Block Mastered
            </button>
            <button 
              onClick={() => setBulkConfirm('review')}
              className="text-[9px] uppercase font-bold text-amber-600 border border-amber-100 bg-amber-50/50 px-3 py-1 rounded-full hover:bg-amber-50 transition-colors"
            >
              Mark Block Review
            </button>
          </div>
        </div>
      </header>

      <div className="h-1.5 w-full bg-editorial-accent relative z-40 overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${((index + 1) / block.words.length) * 100}%` }}
          className="h-full bg-editorial-text"
          transition={{ type: 'spring', damping: 20, stiffness: 100 }}
        />
      </div>

      <section 
        className="flex-1 overflow-y-auto px-6 md:px-12 pt-12 pb-16 relative z-10 custom-scrollbar"
      >
        <div className="max-w-5xl w-full mx-auto min-h-full flex flex-col py-8">
          <AnimatePresence mode="wait">
            {viewMode === 'card' ? (
              <motion.div
                key={`card-${word.word}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
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
                <div className="w-full">
                  <div className="flex items-center gap-4 md:gap-6 mb-8 overflow-visible">
                    <h2 
                      className="text-4xl sm:text-6xl lg:text-8xl font-serif leading-tight tracking-tight text-editorial-text select-all cursor-pointer hover:text-editorial-muted transition-colors break-words max-w-full"
                      onClick={handleSpeak}
                    >
                      {word.word}
                    </h2>
                    <div className="flex flex-col gap-2 shrink-0">
                      <button 
                        onClick={handleSpeak}
                        disabled={isSpeaking}
                        className={`p-2.5 sm:p-3 md:p-3.5 rounded-full border border-editorial-border hover:border-editorial-text transition-all ${isSpeaking ? 'animate-pulse text-editorial-muted' : 'text-editorial-meta hover:text-editorial-text'}`}
                      >
                        {isSpeaking ? <Loader2 size={16} className="animate-spin" /> : <Volume2 size={16} />}
                      </button>
                      <a 
                        href={`https://www.collinsdictionary.com/dictionary/english/${word.word}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 border border-editorial-border rounded-full text-editorial-meta hover:text-editorial-text hover:border-editorial-text transition-all flex items-center justify-center"
                        title="Open in Collins Dictionary"
                      >
                        <Search size={12} />
                      </a>
                    </div>
                  </div>

                  <div className="space-y-10">
                    <div>
                      <p className="text-[10px] uppercase font-bold tracking-widest text-editorial-meta mb-3">Core Definition</p>
                      <div className="text-xl md:text-2xl lg:text-3xl leading-[1.3] text-editorial-text font-medium">
                        {word.definition}
                      </div>
                      {word.nuance && (
                        <div className="mt-6 text-base md:text-lg italic text-editorial-muted border-l-2 border-editorial-border pl-6 py-1 font-serif">
                          “{word.nuance}”
                        </div>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                      {word.synonyms && word.synonyms.length > 0 && (
                        <div>
                          <p className="text-[10px] uppercase font-bold tracking-widest text-editorial-meta mb-3">Synonyms</p>
                          <div className="flex flex-wrap gap-2">
                            {word.synonyms.map(s => (
                              <span key={s} className="px-3 py-1 bg-editorial-accent text-[11px] font-bold tracking-tight border border-editorial-border rounded-sm">
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      {word.antonyms && word.antonyms.length > 0 && (
                        <div>
                          <p className="text-[10px] uppercase font-bold tracking-widest text-editorial-meta mb-3">Antonyms</p>
                          <div className="flex flex-wrap gap-2">
                            {word.antonyms.map(a => (
                              <span key={a} className="px-3 py-1 bg-white text-[11px] font-bold tracking-tight border border-editorial-border rounded-sm italic text-editorial-muted">
                                {a}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {word.derivatives && word.derivatives.length > 0 && (
                      <div className="bg-editorial-accent/30 border border-editorial-border p-6 rounded-sm">
                        <p className="text-[10px] uppercase font-bold tracking-widest text-editorial-meta mb-4 border-b border-editorial-border/50 pb-2">Lexical Derivatives</p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                          {word.derivatives.map((d, i) => (
                            <div key={i} className="flex flex-col">
                              <span className="text-[9px] font-black text-editorial-meta uppercase mb-1">{d.form}</span>
                              <span className="text-base font-serif italic text-editorial-text">{d.word}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="bg-editorial-text text-white p-8 md:p-16 rounded-sm shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 -rotate-45 translate-x-24 -translate-y-24 group-hover:scale-110 transition-transform"></div>
                <p className="text-[10px] uppercase tracking-[0.5em] opacity-30 mb-8 font-bold text-center">Contextual Prototype</p>
                <div className="text-xl md:text-3xl lg:text-5xl font-serif italic text-center leading-tight max-w-4xl mx-auto tracking-tight">
                  “{word.example.split(new RegExp(`(${word.word})`, 'gi')).map((part, i) => (
                    part.toLowerCase() === word.word.toLowerCase() 
                      ? <span key={i} className="text-[#C7B7A3] not-italic font-bold border-b border-[#C7B7A3]/30">{part}</span> 
                      : part
                  ))}”
                </div>
              </div>
            </motion.div>
            ) : (
              <motion.div
                key="list-view"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-1 w-full"
              >
                {block.words.map((w, idx) => (
                  <WordListEntry 
                    key={w.word + idx} 
                    word={w} 
                    status={wordStatus[w.word] || 'new'} 
                    onToggleStatus={onToggleStatus} 
                    isBookmarked={bookmarks.has(w.word)} 
                    onToggleBookmark={onToggleBookmark} 
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Deleted bulky bottom control bar */}

      {/* Navigation Controls */}
      {viewMode === 'card' && (
        <section className="h-28 md:h-44 border-t border-editorial-border bg-white shrink-0 z-30 flex items-center px-6 md:px-12 relative">
          <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-6 md:gap-12">
            <button 
              onClick={handlePrev}
              className="group flex items-center gap-4 text-editorial-muted hover:text-editorial-text transition-all"
            >
              <div className="p-3 md:p-5 border-2 border-editorial-border rounded-full group-hover:border-editorial-text transition-colors">
                <ChevronLeft size={24} />
              </div>
              <div className="hidden sm:block text-left">
                <p className="text-[10px] uppercase font-black tracking-widest opacity-40">Previous</p>
                <p className="text-xl font-serif italic">Entry Archive</p>
              </div>
            </button>

            <div className="flex items-center gap-2 md:gap-4 flex-1 justify-center max-w-sm">
              <button 
                onClick={() => onToggleStatus(word.word, 'mastered')}
                className={`flex-1 py-4 md:py-6 rounded-sm text-[10px] uppercase font-bold tracking-[0.2em] transition-all flex flex-col md:flex-row items-center justify-center gap-2 shadow-sm ${status === 'mastered' ? 'bg-emerald-600 text-white' : 'bg-white text-editorial-meta border border-editorial-border hover:border-emerald-600 hover:text-emerald-600'}`}
              >
                <CheckCircle2 size={18} />
                <span className="hidden md:inline">Mastered</span>
              </button>
              <button 
                onClick={() => onToggleStatus(word.word, 'review')}
                className={`flex-1 py-4 md:py-6 rounded-sm text-[10px] uppercase font-bold tracking-[0.2em] transition-all flex flex-col md:flex-row items-center justify-center gap-2 shadow-sm ${status === 'review' ? 'bg-amber-600 text-white' : 'bg-white text-editorial-meta border border-editorial-border hover:border-amber-600 hover:text-amber-600'}`}
              >
                <AlertCircle size={18} />
                <span className="hidden md:inline">Review</span>
              </button>
            </div>

            <button 
              onClick={handleNext}
              className="group flex items-center gap-4 text-editorial-muted hover:text-editorial-text transition-all"
            >
              <div className="hidden sm:block text-right">
                <p className="text-[10px] uppercase font-black tracking-widest opacity-40">Proceed</p>
                <p className="text-xl font-serif italic">Next Lexeme</p>
              </div>
              <div className="p-3 md:p-5 border-2 border-editorial-border rounded-full group-hover:border-editorial-text transition-colors">
                <ChevronRight size={24} />
              </div>
            </button>
          </div>
        </section>
      )}

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
