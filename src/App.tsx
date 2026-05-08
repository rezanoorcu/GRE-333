/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Search, 
  ChevronLeft, 
  ChevronRight, 
  GraduationCap, 
  CheckCircle2,
  AlertCircle,
  Volume2,
  Loader2,
  Menu,
  X
} from 'lucide-react';
import { VOCABULARY_DATA } from './data';
import { WordEntry, WordBlock } from './types';
import { speakWord } from './services/aiService';

type WordStatus = 'new' | 'mastered' | 'review';

export default function App() {
  const [currentBlockId, setCurrentBlockId] = useState<string | null>(VOCABULARY_DATA[0].id);
  const [view, setView] = useState<'study' | 'list'>('study');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // Persistent Word Status
  const [wordStatus, setWordStatus] = useState<Record<string, WordStatus>>(() => {
    try {
      const saved = localStorage.getItem('lexicon_progress');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem('lexicon_progress', JSON.stringify(wordStatus));
  }, [wordStatus]);

  const toggleStatus = (word: string, status: WordStatus) => {
    setWordStatus(prev => ({
      ...prev,
      [word]: prev[word] === status ? 'new' : status
    }));
  };

  // Current active block
  const currentBlock = useMemo(() => 
    VOCABULARY_DATA.find(b => b.id === currentBlockId) || VOCABULARY_DATA[0], 
  [currentBlockId]);

  // Flattened words for search
  const allWords = useMemo(() => VOCABULARY_DATA.flatMap(b => b.words), []);
  
  // Filtered words for list view
  const filteredWords = useMemo(() => {
    if (!searchQuery) return allWords;
    const query = searchQuery.toLowerCase();
    return allWords.filter(w => 
      w.word.toLowerCase().includes(query) || 
      w.definition.toLowerCase().includes(query) || 
      w.context.toLowerCase().includes(query)
    );
  }, [searchQuery, allWords]);

  const handleSelectBlock = (blockId: string) => {
    setCurrentBlockId(blockId);
    setView('study');
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex h-screen w-full bg-editorial-bg text-editorial-text font-sans overflow-hidden relative">
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-editorial-text/40 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Left Sidebar: Block Navigation */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-80 border-r border-editorial-border flex flex-col bg-white shrink-0 transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div 
          className="p-8 pb-10 cursor-pointer"
          onClick={() => { setView('study'); }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-editorial-text p-2 rounded-sm text-editorial-bg">
              <BookOpen size={18} />
            </div>
            <h1 className="text-xs tracking-[0.2em] font-bold uppercase text-editorial-muted">Lexicon Study</h1>
          </div>
          <div className="h-[2px] w-12 bg-editorial-text"></div>
        </div>
        
        <nav className="flex-1 px-4 overflow-y-auto py-4">
          <div className="px-4 mb-10">
            <div className="flex items-center justify-between mb-4">
              <p className="text-[10px] uppercase tracking-widest text-editorial-meta font-bold">Main Navigation</p>
              <button 
                onClick={() => setIsSidebarOpen(false)}
                className="lg:hidden p-1 hover:bg-neutral-100 rounded"
              >
                <X size={16} />
              </button>
            </div>
            <div className="space-y-1">
              <button 
                onClick={() => {
                  setView('study');
                  setIsSidebarOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-sm text-sm font-medium transition-all ${view === 'study' ? 'bg-editorial-accent text-editorial-text' : 'text-editorial-muted hover:text-editorial-text hover:bg-neutral-50'}`}
              >
                <div className="flex items-center gap-3">
                  <GraduationCap size={16} />
                  Flashcards
                </div>
              </button>
              <button 
                onClick={() => {
                  setView('list');
                  setIsSidebarOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-sm text-sm font-medium transition-all ${view === 'list' ? 'bg-editorial-accent text-editorial-text' : 'text-editorial-muted hover:text-editorial-text hover:bg-neutral-50'}`}
              >
                <div className="flex items-center gap-3">
                  <Search size={16} />
                  Dictionary
                </div>
              </button>
            </div>
          </div>

          <div className="px-4">
            <p className="text-[10px] uppercase tracking-widest text-editorial-meta mb-5 font-bold">Study Blocks</p>
            <div className="space-y-6">
              {VOCABULARY_DATA.map((block, idx) => {
                const masteredCount = block.words.filter(w => wordStatus[w.word] === 'mastered').length;
                const progress = (masteredCount / block.words.length) * 100;
                
                return (
                  <div 
                    key={block.id}
                    onClick={() => handleSelectBlock(block.id)}
                    className={`group cursor-pointer transition-all ${currentBlockId === block.id && view === 'study' ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}
                  >
                    <div className="flex justify-between items-baseline mb-2">
                      <p className="text-[9px] font-bold tracking-tighter uppercase text-editorial-muted">
                        Block {String(idx + 1).padStart(2, '0')}
                      </p>
                      <span className="text-[9px] font-mono text-editorial-meta">{masteredCount}/{block.words.length}</span>
                    </div>
                    <p className="text-base font-serif italic text-editorial-text mb-2 leading-tight">{block.title.split(': ')[1]}</p>
                    <div className="h-[1px] w-full bg-editorial-border overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.5 }}
                        className="h-full bg-editorial-text"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </nav>
        
        <div className="p-8 border-t border-editorial-border bg-editorial-accent/30">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-2 w-2 rounded-full bg-editorial-text" />
            <p className="text-[10px] uppercase tracking-widest font-bold">Learning Mastery</p>
          </div>
          <p className="text-3xl font-serif italic text-editorial-text mb-1">
            {allWords.filter(w => wordStatus[w.word] === 'mastered').length} <span className="text-sm not-italic font-sans text-editorial-muted">/ {allWords.length} words</span>
          </p>
          <div className="h-1 w-full bg-editorial-border rounded-full overflow-hidden mt-4">
            <motion.div 
               className="h-full bg-editorial-text"
               initial={{ width: 0 }}
               animate={{ width: `${(allWords.filter(w => wordStatus[w.word] === 'mastered').length / allWords.length) * 100}%` }}
            />
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative overflow-y-auto bg-editorial-bg w-full">
        {/* Mobile Header */}
        <header className="lg:hidden h-16 border-b border-editorial-border bg-white flex items-center justify-between px-6 sticky top-0 z-30 shrink-0">
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 -ml-2 text-editorial-muted hover:text-editorial-text"
          >
            <Menu size={20} />
          </button>
          <div className="flex items-center gap-2">
            <div className="bg-editorial-text p-1.5 rounded-sm text-editorial-bg">
              <BookOpen size={14} />
            </div>
            <span className="text-[10px] tracking-widest font-bold uppercase text-editorial-muted">Lexicon</span>
          </div>
          <div className="w-8" /> {/* Spacer */}
        </header>

        <AnimatePresence mode="wait">
          {view === 'study' && currentBlock && (
            <motion.div
              key={`study-${currentBlock.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col h-full"
            >
              <StudySession 
                block={currentBlock} 
                wordStatus={wordStatus}
                onToggleStatus={toggleStatus}
              />
            </motion.div>
          )}

          {view === 'list' && (
            <motion.div
              key="list-view"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-6 md:p-12 max-w-5xl mx-auto w-full"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16 border-b border-editorial-border pb-8">
                <div>
                  <h2 className="text-3xl md:text-5xl font-serif tracking-tight text-editorial-text mb-2 md:mb-4">The Lexicon</h2>
                  <p className="text-editorial-muted uppercase text-[8px] md:text-[10px] tracking-[0.2em] font-bold">Systematic Vocabulary Archive</p>
                </div>
                <div className="relative w-full md:w-80">
                  <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-editorial-meta" size={16} />
                  <input
                    type="text"
                    placeholder="Search entry..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-6 pr-4 py-2 bg-transparent border-b border-editorial-border focus:outline-none focus:border-editorial-text transition-all text-sm font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-1">
                {filteredWords.map((word, idx) => (
                  <WordListEntry 
                    key={word.word + idx} 
                    word={word} 
                    status={wordStatus[word.word] || 'new'}
                    onToggleStatus={toggleStatus}
                  />
                ))}
                {filteredWords.length === 0 && (
                  <div className="py-20 text-center font-serif italic text-editorial-muted text-xl">
                    No matching records found in the archive.
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Visual Detail: The Vert Rail */}
      <div className="w-14 border-l border-editorial-border hidden md:flex flex-col items-center justify-center bg-white shrink-0">
        <p className="rotate-90 whitespace-nowrap text-[10px] uppercase tracking-[0.5em] font-bold text-editorial-meta h-fit">
          GRE Vocabulary System • 2024 Edition
        </p>
      </div>
    </div>
  );
}

function StudySession({ 
  block, 
  wordStatus, 
  onToggleStatus 
}: { 
  block: WordBlock; 
  wordStatus: Record<string, WordStatus>;
  onToggleStatus: (word: string, status: WordStatus) => void;
}) {
  const [index, setIndex] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const word = block.words[index];
  const blockIdx = VOCABULARY_DATA.findIndex(b => b.id === block.id) + 1;
  const status = wordStatus[word.word] || 'new';

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % block.words.length);
    setIsSpeaking(false);
  };
  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + block.words.length) % block.words.length);
    setIsSpeaking(false);
  };

  const handleSpeak = async () => {
    if (isSpeaking) return;
    setIsSpeaking(true);
    await speakWord(word.word);
    setTimeout(() => setIsSpeaking(false), 1000);
  };

  return (
    <div className="flex-1 flex flex-col h-full min-h-0">
      <div className="absolute top-0 right-0 p-6 md:p-12 pointer-events-none z-0">
        <p className="text-6xl md:text-8xl font-serif text-editorial-border opacity-50 select-none">
          {String(blockIdx).padStart(2, '0')}
        </p>
      </div>

      <header className="p-6 md:p-12 pb-0 flex flex-col sm:flex-row items-center gap-4 justify-between relative z-10">
        <div className="flex items-center gap-2 md:gap-4 text-[8px] md:text-[10px] uppercase tracking-[0.25em] font-bold text-editorial-muted">
          <span>Block {blockIdx}</span>
          <span className="w-4 md:w-8 h-[1px] bg-editorial-border"></span>
          <span>Study Mode</span>
          <span className="w-4 md:w-8 h-[1px] bg-editorial-border"></span>
          {status === 'mastered' ? (
            <span className="text-emerald-700 flex items-center gap-1 md:gap-2 font-black"><CheckCircle2 size={10} /> Mastered</span>
          ) : status === 'review' ? (
            <span className="text-amber-700 flex items-center gap-1 md:gap-2 font-black"><AlertCircle size={10} /> Review</span>
          ) : (
            <span className="font-bold">New Entry</span>
          )}
        </div>
        <div className="text-[9px] md:text-[10px] font-mono text-editorial-meta bg-editorial-accent px-3 py-1.5 rounded-sm font-bold border border-editorial-border shadow-sm">
          WORD {index + 1} / {block.words.length}
        </div>
      </header>

      <section className="flex-1 flex items-center px-6 md:px-12 py-8 relative z-10 overflow-visible">
        <div className="max-w-4xl w-full mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={word.word}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8 mb-8 md:mb-10">
                <div className="flex items-center gap-4 md:gap-6 overflow-hidden">
                  <h2 
                    className="text-5xl md:text-7xl lg:text-[120px] font-serif leading-none tracking-tight text-editorial-text select-all cursor-pointer hover:text-editorial-muted transition-colors truncate"
                    onClick={handleSpeak}
                  >
                    {word.word}
                  </h2>
                  <button 
                    onClick={handleSpeak}
                    disabled={isSpeaking}
                    className={`p-3 md:p-4 rounded-full border-2 border-editorial-border hover:border-editorial-text transition-all shrink-0 ${isSpeaking ? 'animate-pulse text-editorial-muted' : 'text-editorial-meta hover:text-editorial-text'}`}
                  >
                    {isSpeaking ? <Loader2 size={24} className="animate-spin md:size-32" /> : <Volume2 size={24} className="md:size-32" />}
                  </button>
                </div>
                <div className="flex gap-2 md:gap-3 shrink-0">
                  <button 
                    onClick={() => onToggleStatus(word.word, 'mastered')}
                    className={`flex-1 md:flex-none flex items-center justify-center p-3 md:p-4 rounded-sm border-2 transition-all duration-300 shadow-md md:shadow-lg ${status === 'mastered' ? 'bg-editorial-text text-editorial-bg border-editorial-text' : 'bg-white text-editorial-meta border-editorial-border hover:border-editorial-text'}`}
                    title="Toggle Mastery"
                  >
                    <CheckCircle2 size={20} className="md:size-24" />
                    <span className="md:hidden ml-2 text-[10px] font-bold uppercase tracking-widest">Mastered</span>
                  </button>
                  <button 
                    onClick={() => onToggleStatus(word.word, 'review')}
                    className={`flex-1 md:flex-none flex items-center justify-center p-3 md:p-4 rounded-sm border-2 transition-all duration-300 shadow-md md:shadow-lg ${status === 'review' ? 'bg-amber-600 text-white border-amber-600' : 'bg-white text-editorial-meta border-editorial-border hover:border-editorial-text'}`}
                    title="Mark for Review"
                  >
                    <AlertCircle size={20} className="md:size-24" />
                    <span className="md:hidden ml-2 text-[10px] font-bold uppercase tracking-widest">Review</span>
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
                  </div>
                  
                  {/* Synonyms and Antonyms */}
                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {word.synonyms && word.synonyms.length > 0 && (
                      <div>
                        <p className="text-[9px] uppercase font-bold tracking-widest text-editorial-meta mb-2">Synonyms</p>
                        <div className="flex flex-wrap gap-2">
                          {word.synonyms.map(s => (
                            <span key={s} className="px-2 py-1 bg-editorial-accent text-[11px] font-medium border border-editorial-border rounded-sm">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {word.antonyms && word.antonyms.length > 0 && (
                      <div>
                        <p className="text-[9px] uppercase font-bold tracking-widest text-editorial-meta mb-2">Antonyms</p>
                        <div className="flex flex-wrap gap-2">
                          {word.antonyms.map(a => (
                            <span key={a} className="px-2 py-1 bg-white text-[11px] font-medium border border-editorial-border rounded-sm italic">
                              {a}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="bg-editorial-text text-white p-6 md:p-12 rounded-sm shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 md:w-48 h-32 md:h-48 bg-white/5 -rotate-45 translate-x-12 md:translate-x-24 -translate-y-12 md:-translate-y-24 group-hover:scale-110 transition-transform"></div>
                <p className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] opacity-40 mb-6 md:mb-8 font-bold text-center">In Practice</p>
                <div className="text-xl md:text-3xl lg:text-4xl font-serif italic text-center leading-relaxed max-w-3xl mx-auto tracking-wide">
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
      <section className="h-40 md:h-44 border-t-2 border-editorial-text bg-white relative z-10 shrink-0">
        <div className="flex h-full divide-x divide-editorial-border">
          <button 
            onClick={handlePrev}
            className="flex-1 p-4 md:p-8 flex flex-col justify-between hover:bg-editorial-accent transition-all text-left group"
          >
            <p className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-editorial-meta flex items-center gap-1 md:gap-2 group-hover:-translate-x-1 transition-transform">
              <ChevronLeft size={10} className="md:size-12" /> Prev
            </p>
            <div>
              <p className="text-lg md:text-2xl font-serif italic text-editorial-text group-hover:opacity-60 transition-opacity truncate">
                {block.words[(index - 1 + block.words.length) % block.words.length].word}
              </p>
            </div>
          </button>
          
          <button 
            onClick={handleNext}
            className="flex-1 p-4 md:p-8 flex flex-col justify-between hover:bg-editorial-accent transition-all text-left group"
          >
            <p className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-editorial-meta flex items-center justify-end gap-1 md:gap-2 group-hover:translate-x-1 transition-transform">
              Next <ChevronRight size={10} className="md:size-12" />
            </p>
            <div className="text-right">
              <p className="text-lg md:text-2xl font-serif italic text-editorial-text group-hover:opacity-60 transition-opacity truncate">
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

      <div className="p-4 border-t border-editorial-border flex justify-center gap-12 bg-white">
        <div className="flex items-center gap-3 text-[10px] text-editorial-meta font-bold uppercase tracking-widest">
          <kbd className="px-2 py-1 bg-neutral-100 border border-editorial-border rounded-sm shadow-sm font-mono text-[10px] text-editorial-text font-black">←</kbd>
          Navigate
        </div>
        <div className="flex items-center gap-3 text-[10px] text-editorial-meta font-bold uppercase tracking-widest">
          <kbd className="px-2 py-1 bg-neutral-100 border border-editorial-border rounded-sm shadow-sm font-mono text-[10px] text-editorial-text font-black">→</kbd>
          Navigate
        </div>
      </div>
    </div>
  );
}

const WordListEntry: React.FC<{ 
  word: WordEntry; 
  status: WordStatus;
  onToggleStatus: (word: string, status: WordStatus) => void;
}> = ({ word, status, onToggleStatus }) => {
  const [expanded, setExpanded] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleSpeak = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isSpeaking) return;
    setIsSpeaking(true);
    await speakWord(word.word);
    setTimeout(() => setIsSpeaking(false), 1000);
  };

  return (
    <div className={`group border-b border-editorial-border p-4 md:p-8 hover:bg-white transition-all ${status === 'mastered' ? 'bg-emerald-50/10' : status === 'review' ? 'bg-amber-50/10' : 'bg-transparent'}`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4 md:gap-6">
          <button 
            onClick={(e) => { e.stopPropagation(); onToggleStatus(word.word, 'mastered'); }}
            className={`transition-all duration-300 transform shrink-0 ${status === 'mastered' ? 'text-emerald-700 scale-110' : 'text-editorial-border hover:text-editorial-meta hover:scale-110'}`}
            title="Mark as Mastered"
          >
            <CheckCircle2 size={24} />
          </button>
          <div className="flex items-baseline flex-wrap gap-x-4 md:gap-x-8 cursor-pointer" onClick={() => setExpanded(!expanded)}>
            <h4 className="text-xl md:text-3xl font-serif italic tracking-tight text-editorial-text group-hover:underline underline-offset-8 decoration-editorial-muted">{word.word}</h4>
            <div className="flex items-center gap-2">
              <button 
                onClick={handleSpeak}
                className={`p-1.5 md:p-2 rounded-full transition-all ${isSpeaking ? 'text-editorial-text animate-pulse' : 'text-editorial-meta hover:text-editorial-text hover:bg-editorial-accent'}`}
              >
                {isSpeaking ? <Loader2 size={14} className="animate-spin md:size-16" /> : <Volume2 size={14} className="md:size-16" />}
              </button>
              <span className="text-[8px] md:text-[10px] text-editorial-meta font-bold uppercase tracking-[0.25em]">{word.context}</span>
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

                {/* Synonyms and Antonyms in List View */}
                <div className="mt-8 flex flex-wrap gap-x-12 gap-y-6">
                  {word.synonyms && word.synonyms.length > 0 && (
                    <div>
                      <p className="text-[9px] uppercase font-bold tracking-widest text-editorial-meta mb-3">Synonyms</p>
                      <div className="flex flex-wrap gap-2">
                        {word.synonyms.map(s => (
                          <span key={s} className="px-2 py-1 bg-editorial-accent text-[10px] font-medium border border-editorial-border rounded-sm">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {word.antonyms && word.antonyms.length > 0 && (
                    <div>
                      <p className="text-[9px] uppercase font-bold tracking-widest text-editorial-meta mb-3">Antonyms</p>
                      <div className="flex flex-wrap gap-2">
                        {word.antonyms.map(a => (
                          <span key={a} className="px-2 py-1 bg-white text-[10px] font-medium border border-editorial-border rounded-sm italic">
                            {a}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
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
