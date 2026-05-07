/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Search, 
  ChevronLeft, 
  ChevronRight, 
  RotateCcw, 
  Home, 
  LayoutGrid, 
  GraduationCap, 
  Tag,
  Lightbulb,
  ExternalLink
} from 'lucide-react';
import { VOCABULARY_DATA } from './data';
import { WordEntry, WordBlock } from './types';

export default function App() {
  const [currentBlockId, setCurrentBlockId] = useState<string | null>(VOCABULARY_DATA[0].id);
  const [view, setView] = useState<'study' | 'list'>('study');
  const [searchQuery, setSearchQuery] = useState('');
  
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
  };

  return (
    <div className="flex h-screen w-full bg-editorial-bg text-editorial-text font-sans overflow-hidden">
      {/* Left Sidebar: Block Navigation */}
      <aside className="w-72 border-r border-editorial-border flex flex-col bg-white">
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
        
        <nav className="flex-1 px-4 overflow-y-auto space-y-1 py-4">
          <div className="px-4 mb-8">
            <p className="text-[10px] uppercase tracking-widest text-editorial-meta mb-3 font-bold">Main Navigation</p>
            <div className="space-y-1">
              <button 
                onClick={() => setView('study')}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-sm text-sm font-medium transition-all ${view === 'study' ? 'bg-editorial-accent text-editorial-text' : 'text-editorial-muted hover:text-editorial-text hover:bg-neutral-50'}`}
              >
                <GraduationCap size={16} />
                Flashcards
              </button>
              <button 
                onClick={() => setView('list')}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-sm text-sm font-medium transition-all ${view === 'list' ? 'bg-editorial-accent text-editorial-text' : 'text-editorial-muted hover:text-editorial-text hover:bg-neutral-50'}`}
              >
                <Search size={16} />
                Dictionary
              </button>
            </div>
          </div>

          <div className="px-4">
            <p className="text-[10px] uppercase tracking-widest text-editorial-meta mb-3 font-bold">Study Blocks</p>
            <div className="space-y-4">
              {VOCABULARY_DATA.map((block, idx) => (
                <div 
                  key={block.id}
                  onClick={() => handleSelectBlock(block.id)}
                  className={`group cursor-pointer transition-all ${currentBlockId === block.id && view === 'study' ? 'opacity-100' : 'opacity-40 hover:opacity-100'}`}
                >
                  <p className="text-[10px] font-bold tracking-tighter uppercase text-editorial-muted">
                    Block {String(idx + 1).padStart(2, '0')}
                  </p>
                  <p className="text-base font-serif italic text-editorial-text">{block.title.split(': ')[1]}</p>
                </div>
              ))}
            </div>
          </div>
        </nav>
        
        <div className="p-8 border-t border-editorial-border bg-editorial-accent/30">
          <p className="text-[11px] leading-tight text-editorial-muted italic font-serif">
            Refining vocabulary through context, nuance, and usage.
          </p>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative overflow-y-auto">
        <AnimatePresence mode="wait">
          {view === 'study' && currentBlock && (
            <motion.div
              key={`study-${currentBlock.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col"
            >
              <StudySession block={currentBlock} />
            </motion.div>
          )}

          {view === 'list' && (
            <motion.div
              key="list-view"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-12 max-w-5xl"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-editorial-border pb-8">
                <div>
                  <h2 className="text-5xl font-serif tracking-tight text-editorial-text mb-4">The Lexicon</h2>
                  <p className="text-editorial-muted uppercase text-[10px] tracking-[0.2em] font-bold">Systematic Vocabulary Archive</p>
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
                  <WordListEntry key={word.word + idx} word={word} />
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
      <div className="w-14 border-l border-editorial-border hidden md:flex flex-col items-center justify-center bg-white">
        <p className="rotate-90 whitespace-nowrap text-[10px] uppercase tracking-[0.5em] font-bold text-editorial-meta h-fit">
          GRE Vocabulary System • 2024 Edition
        </p>
      </div>
    </div>
  );
}

function StudySession({ block }: { block: WordBlock }) {
  const [index, setIndex] = useState(0);
  const word = block.words[index];
  const blockIdx = VOCABULARY_DATA.findIndex(b => b.id === block.id) + 1;

  const handleNext = () => setIndex((prev) => (prev + 1) % block.words.length);
  const handlePrev = () => setIndex((prev) => (prev - 1 + block.words.length) % block.words.length);

  return (
    <div className="flex-1 flex flex-col h-full">
      <div className="absolute top-0 right-0 p-12 pointer-events-none">
        <p className="text-8xl font-serif text-editorial-border opacity-60 select-none">
          {String(blockIdx).padStart(2, '0')}
        </p>
      </div>

      <header className="p-12 pb-0 flex items-center justify-between">
        <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.25em] font-bold text-editorial-muted">
          <span>Block {blockIdx}</span>
          <span className="w-8 h-[1px] bg-editorial-border"></span>
          <span>Dictionary</span>
          <span className="w-8 h-[1px] bg-editorial-border"></span>
          <span>Usage</span>
        </div>
        <div className="text-[10px] font-mono text-editorial-meta bg-editorial-accent px-3 py-1.5 rounded-sm font-bold">
          ENTRY {index + 1} / {block.words.length}
        </div>
      </header>

      <section className="flex-1 flex items-center px-12 py-8">
        <div className="max-w-4xl w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={word.word}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-[120px] font-serif leading-none tracking-tight mb-10 text-editorial-text select-all">
                {word.word}
              </h2>
              
              <div className="flex flex-col md:flex-row gap-12 mb-12">
                <div className="w-full md:w-1/3">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-editorial-meta mb-3">Context</p>
                  <p className="text-base font-semibold border-l-2 border-editorial-text pl-4 py-1.5">
                    {word.context}
                  </p>
                </div>
                <div className="w-full md:w-2/3">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-editorial-meta mb-3">Nuance & Meaning</p>
                  <p className="text-xl leading-relaxed text-editorial-text">
                    {word.definition}
                    {word.nuance && (
                      <span className="block mt-4 text-lg italic text-editorial-muted border-t border-editorial-border pt-4 font-serif">
                        “{word.nuance}”
                      </span>
                    )}
                  </p>
                </div>
              </div>

              <div className="bg-editorial-text text-white p-10 rounded-sm shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 -rotate-45 translate-x-16 -translate-y-16 group-hover:scale-110 transition-transform"></div>
                <p className="text-[10px] uppercase tracking-[0.3em] opacity-40 mb-6 font-bold text-center">Contextual Application</p>
                <blockquote className="text-2xl md:text-3xl font-serif italic text-center leading-relaxed max-w-2xl mx-auto">
                  “{word.example.split(new RegExp(`(${word.word})`, 'gi')).map((part, i) => (
                    part.toLowerCase() === word.word.toLowerCase() 
                      ? <span key={i} className="text-[#C7B7A3] not-italic font-bold">{part}</span> 
                      : part
                  ))}”
                </blockquote>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Bottom Control Bar */}
      <section className="h-40 border-t border-editorial-text bg-white">
        <div className="flex h-full divide-x divide-editorial-border">
          <button 
            onClick={handlePrev}
            className="flex-1 p-6 flex flex-col justify-between hover:bg-editorial-accent transition-all text-left group"
          >
            <p className="text-[9px] font-bold uppercase tracking-widest text-editorial-meta flex items-center gap-1 group-hover:-translate-x-1 transition-transform">
              <ChevronLeft size={10} /> Previous Entry
            </p>
            <div>
              <p className="text-xl font-serif italic text-editorial-text">
                {block.words[(index - 1 + block.words.length) % block.words.length].word}
              </p>
            </div>
          </button>
          
          <button 
            onClick={handleNext}
            className="flex-1 p-6 flex flex-col justify-between hover:bg-editorial-accent transition-all text-left group"
          >
            <p className="text-[9px] font-bold uppercase tracking-widest text-editorial-meta flex items-center justify-end gap-1 group-hover:translate-x-1 transition-transform">
              Next Entry <ChevronRight size={10} />
            </p>
            <div className="text-right">
              <p className="text-xl font-serif italic text-editorial-text">
                {block.words[(index + 1) % block.words.length].word}
              </p>
            </div>
          </button>

          <div className="hidden lg:flex flex-[2] p-6 bg-editorial-accent overflow-hidden">
            <div className="w-full">
              <p className="text-[9px] font-bold uppercase tracking-widest text-editorial-meta mb-3">Block Manifest</p>
              <div className="grid grid-cols-3 gap-x-4 gap-y-1.5 overflow-hidden">
                {block.words.slice(Math.max(0, index - 3), index + 6).map((w, i) => (
                  <p 
                    key={i} 
                    className={`text-[11px] font-medium truncate ${w.word === word.word ? 'text-editorial-text font-bold underline underline-offset-2' : 'text-editorial-muted opacity-60'}`}
                  >
                    {w.word}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="p-4 border-t border-editorial-border flex justify-center gap-8 bg-editorial-bg/50">
        <div className="flex items-center gap-2 text-[10px] text-editorial-meta font-bold uppercase tracking-widest">
          <kbd className="px-1.5 py-0.5 bg-white border border-editorial-border rounded shadow-sm font-mono text-[9px]">←</kbd>
          Prev
        </div>
        <div className="flex items-center gap-2 text-[10px] text-editorial-meta font-bold uppercase tracking-widest">
          <kbd className="px-1.5 py-0.5 bg-white border border-editorial-border rounded shadow-sm font-mono text-[9px]">Next</kbd>
          →
        </div>
      </div>
    </div>
  );
}

const WordListEntry: React.FC<{ word: WordEntry }> = ({ word }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="group border-b border-editorial-border p-6 hover:bg-editorial-accent transition-all">
      <div className="flex items-center justify-between cursor-pointer" onClick={() => setExpanded(!expanded)}>
        <div className="flex items-baseline gap-6">
          <h4 className="text-2xl font-serif italic tracking-tight text-editorial-text group-hover:underline underline-offset-4 decoration-editorial-meta">{word.word}</h4>
          <span className="text-[10px] text-editorial-meta font-bold uppercase tracking-[0.2em]">{word.context}</span>
        </div>
        <p className="text-editorial-muted text-sm max-w-lg truncate hidden md:block">{word.definition}</p>
        <button className={`p-2 transition-transform duration-300 ${expanded ? 'rotate-180 text-editorial-text' : 'text-editorial-meta'}`}>
          <ChevronRight size={16} className="rotate-90" />
        </button>
      </div>
      
      <AnimatePresence>
        {expanded && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-8 pb-4">
              <div className="md:col-span-8">
                <p className="text-[10px] uppercase font-bold tracking-widest text-editorial-meta mb-3">Comprehensive Meaning</p>
                <p className="text-lg text-editorial-text leading-relaxed">{word.definition}</p>
                {word.nuance && (
                  <div className="mt-6 pl-4 border-l-2 border-editorial-border">
                    <p className="text-sm italic text-editorial-muted font-serif">“{word.nuance}”</p>
                  </div>
                )}
              </div>
              <div className="md:col-span-4 py-4 px-6 bg-white border border-editorial-border rounded-sm shadow-sm">
                <p className="text-[10px] uppercase font-bold tracking-widest text-editorial-meta mb-3">In Usage</p>
                <p className="text-sm text-editorial-text font-serif italic leading-relaxed">“{word.example}”</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

