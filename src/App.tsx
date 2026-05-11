/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Fuse from 'fuse.js';
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
  X,
  Brain,
  Sparkles,
  ChevronDown,
  Star,
  Type,
  Newspaper
} from 'lucide-react';
import { VOCABULARY_DATA } from './data';
import { PHRASAL_VERBS_DATA } from './phrasalVerbsData';
import { WordEntry, WordBlock } from './types';
import { speakWord } from './services/aiService';
import { EditorialAnalysis } from './components/EditorialAnalysis';

type WordStatus = 'new' | 'mastered' | 'review';

export default function App() {
  const [currentBlockId, setCurrentBlockId] = useState<string | null>(VOCABULARY_DATA[0].id);
  const [view, setView] = useState<'study' | 'list' | 'bookmarks' | 'review-stack' | 'practice' | 'phrasal-verbs' | 'editorial'>('study');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [lastAction, setLastAction] = useState<{word: string, status: WordStatus} | null>(null);
  
  // Persistent Bookmarks
  const [bookmarks, setBookmarks] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem('lexicon_bookmarks');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch (e) {
      return new Set();
    }
  });

  useEffect(() => {
    localStorage.setItem('lexicon_bookmarks', JSON.stringify(Array.from(bookmarks)));
  }, [bookmarks]);

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

  const toggleBookmark = (word: string) => {
    setBookmarks(prev => {
      const next = new Set(prev);
      if (next.has(word)) {
        next.delete(word);
      } else {
        next.add(word);
      }
      return next;
    });
  };

  const toggleStatus = (word: string, status: WordStatus) => {
    const isNewStatus = wordStatus[word] !== status;
    setWordStatus(prev => ({
      ...prev,
      [word]: prev[word] === status ? 'new' : status
    }));
    
    if (isNewStatus) {
      setLastAction({ word, status });
      setTimeout(() => setLastAction(null), 2000);
    }
  };

  const bulkUpdateStatus = (words: string[], status: WordStatus) => {
    setWordStatus(prev => {
      const next = { ...prev };
      words.forEach(word => {
        next[word] = status;
      });
      return next;
    });
  };

  // Current active block
  const currentBlock = useMemo(() => 
    VOCABULARY_DATA.find(b => b.id === currentBlockId) || VOCABULARY_DATA[0], 
  [currentBlockId]);

  // Flattened words for search
  const allWords = useMemo(() => VOCABULARY_DATA.flatMap(b => b.words), []);

  // Fuse configuration
  const fuse = useMemo(() => new Fuse(allWords, {
    keys: ['word', 'definition', 'context'],
    threshold: 0.4,
    includeScore: true,
  }), [allWords]);
  
  // Filtered words for list view
  const filteredWords = useMemo(() => {
    if (!searchQuery) return allWords;
    const results = fuse.search(searchQuery);
    return results.map(r => r.item);
  }, [searchQuery, allWords, fuse]);

  const suggestions = useMemo(() => {
    if (!searchQuery || searchQuery.length < 2) return [];
    // Only show top 5 suggestions
    return fuse.search(searchQuery).slice(0, 5).map(r => r.item.word);
  }, [searchQuery, fuse]);

  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [searchRef]);

  const handleSelectBlock = (blockId: string) => {
    setCurrentBlockId(blockId);
    setView('study');
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    // Warm up speech synthesis voices
    if (window.speechSynthesis) {
      window.speechSynthesis.getVoices();
      const handleVoicesChanged = () => window.speechSynthesis.getVoices();
      window.speechSynthesis.addEventListener('voiceschanged', handleVoicesChanged);
      return () => window.speechSynthesis.removeEventListener('voiceschanged', handleVoicesChanged);
    }
  }, []);

  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (e.key === '?') {
        setShowHelp(prev => !prev);
      }
      if (e.key === 'Escape') {
        setShowHelp(false);
        setIsSidebarOpen(false);
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  return (
    <div className="flex h-screen w-full bg-editorial-bg text-editorial-text font-sans overflow-hidden relative">
      {/* HUD Notification for Status Changes */}
      <AnimatePresence>
        {lastAction && (
          <motion.div 
            initial={{ opacity: 0, y: 20, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -20, x: '-50%' }}
            className="fixed top-8 left-1/2 z-[100] px-6 py-3 bg-editorial-text text-white rounded-full shadow-2xl flex items-center gap-3 border border-white/20 backdrop-blur-md"
          >
            {lastAction.status === 'mastered' ? <CheckCircle2 size={16} className="text-emerald-400" /> : <AlertCircle size={16} className="text-amber-400" />}
            <span className="text-[10px] uppercase tracking-widest font-bold">
              <span className="italic font-serif normal-case text-xs mr-2">{lastAction.word}</span>
              marked for {lastAction.status}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Help Modal */}
      <AnimatePresence>
        {showHelp && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-editorial-text/80 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setShowHelp(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white border border-editorial-border p-8 md:p-12 max-w-lg w-full rounded-sm shadow-2xl"
            >
              <div className="flex justify-between items-center mb-8 border-b border-editorial-border pb-6">
                <div>
                  <h3 className="text-2xl font-serif italic text-editorial-text">Lexical Commander</h3>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-editorial-meta mt-1">Application Shortcuts & Guidance</p>
                </div>
                <button onClick={() => setShowHelp(false)} className="p-2 hover:bg-neutral-100 rounded-full">
                  <X size={20} />
                </button>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-4">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-editorial-meta">Study Mode</p>
                  <div className="grid grid-cols-2 gap-4">
                    <Shortcut label="Next Entry" keys={['→']} />
                    <Shortcut label="Previous Entry" keys={['←']} />
                    <Shortcut label="Mark Mastered" keys={['M']} />
                    <Shortcut label="Mark Review" keys={['R']} />
                    <Shortcut label="Bookmark Entry" keys={['B']} />
                    <Shortcut label="Pronunciation" keys={['S']} />
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-editorial-border">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-editorial-meta">Global</p>
                  <div className="grid grid-cols-2 gap-4">
                    <Shortcut label="Show / Hide Help" keys={['?']} />
                    <Shortcut label="Close Modals" keys={['ESC']} />
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-editorial-border">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-editorial-meta">Troubleshooting</p>
                  <button 
                    onClick={() => {
                      window.speechSynthesis.cancel();
                      speakWord('Audio system reset.');
                    }}
                    className="w-full py-2 bg-neutral-100 text-editorial-text text-[9px] uppercase font-bold tracking-widest border border-editorial-border hover:bg-neutral-200 transition-colors"
                  >
                    Reset Audio System
                  </button>
                </div>
              </div>

              <button 
                onClick={() => setShowHelp(false)}
                className="w-full mt-10 py-4 bg-editorial-text text-white text-[10px] uppercase font-bold tracking-widest rounded-sm hover:bg-editorial-muted transition-colors"
              >
                Return to Archive
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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
          className="p-6 md:p-8 pb-8 md:pb-10 cursor-pointer"
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
              <button 
                onClick={() => {
                  setView('bookmarks');
                  setIsSidebarOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-sm text-sm font-medium transition-all ${view === 'bookmarks' ? 'bg-editorial-accent text-editorial-text' : 'text-editorial-muted hover:text-editorial-text hover:bg-neutral-50'}`}
              >
                <div className="flex items-center gap-3">
                  <Star size={16} fill={view === 'bookmarks' ? "currentColor" : "none"} />
                  Bookmarks
                </div>
                <span className="text-[10px] font-mono text-editorial-meta">{bookmarks.size}</span>
              </button>
              <button 
                onClick={() => {
                  setView('review-stack');
                  setIsSidebarOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-sm text-sm font-medium transition-all ${view === 'review-stack' ? 'bg-editorial-accent text-editorial-text' : 'text-editorial-muted hover:text-editorial-text hover:bg-neutral-50'}`}
              >
                <div className="flex items-center gap-3">
                  <AlertCircle size={16} />
                  Review Stack
                </div>
                <span className="text-[10px] font-mono text-editorial-meta">{Object.values(wordStatus).filter(s => s === 'review').length}</span>
              </button>
              <button 
                onClick={() => {
                  setView('practice');
                  setIsSidebarOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-sm text-sm font-medium transition-all ${view === 'practice' ? 'bg-editorial-accent text-editorial-text' : 'text-editorial-muted hover:text-editorial-text hover:bg-neutral-50'}`}
              >
                <div className="flex items-center gap-3">
                  <Brain size={16} />
                  Practice Mode
                </div>
              </button>
              <button 
                onClick={() => {
                  setView('phrasal-verbs');
                  setIsSidebarOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-sm text-sm font-medium transition-all ${view === 'phrasal-verbs' ? 'bg-editorial-accent text-editorial-text' : 'text-editorial-muted hover:text-editorial-text hover:bg-neutral-50'}`}
              >
                <div className="flex items-center gap-3">
                  <Type size={16} />
                  Group Verbs
                </div>
              </button>
              <button 
                onClick={() => {
                  setView('editorial');
                  setIsSidebarOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-sm text-sm font-medium transition-all ${view === 'editorial' ? 'bg-editorial-accent text-editorial-text' : 'text-editorial-muted hover:text-editorial-text hover:bg-neutral-50'}`}
              >
                <div className="flex items-center gap-3">
                  <Newspaper size={16} />
                  Editorial Analysis
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
          
          <div className="mt-6 pt-6 border-t border-editorial-text/10 flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <div className="flex flex-col">
              <span className="text-[9px] font-black uppercase tracking-widest text-editorial-text">Database Ready</span>
              <span className="text-[8px] text-editorial-meta uppercase tracking-tighter">Available for Offline Use</span>
            </div>
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
                onBulkUpdateStatus={bulkUpdateStatus}
                isSidebarOpen={isSidebarOpen}
                bookmarks={bookmarks}
                onToggleBookmark={toggleBookmark}
              />
            </motion.div>
          )}

          {view === 'bookmarks' && (
            <motion.div
              key="bookmarks-view"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-5 md:p-12 max-w-5xl mx-auto w-full"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-16 border-b border-editorial-border pb-8">
                <div>
                  <h2 className="text-2xl md:text-5xl font-serif tracking-tight text-editorial-text mb-2 md:mb-4">Personal Archive</h2>
                  <p className="text-editorial-muted uppercase text-[8px] md:text-[10px] tracking-[0.2em] font-bold">Bookmarked Vocabulary for Review</p>
                </div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-editorial-meta">
                  {bookmarks.size} {bookmarks.size === 1 ? 'Entry' : 'Entries'}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-1">
                {allWords.filter(w => bookmarks.has(w.word)).map((word, idx) => (
                  <WordListEntry 
                    key={word.word + idx} 
                    word={word} 
                    status={wordStatus[word.word] || 'new'}
                    onToggleStatus={toggleStatus}
                    isBookmarked={true}
                    onToggleBookmark={toggleBookmark}
                  />
                ))}
                {bookmarks.size === 0 && (
                  <div className="py-24 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-neutral-100 rounded-full mb-6 text-editorial-meta">
                      <Star size={32} />
                    </div>
                    <h3 className="text-2xl font-serif italic text-editorial-text mb-4">No bookmarks yet</h3>
                    <p className="text-sm text-editorial-muted max-w-sm mx-auto mb-8">Mark words you find challenging by clicking the star icon to save them here for later study.</p>
                    <button 
                      onClick={() => setView('study')}
                      className="px-8 py-3 bg-editorial-text text-white text-[10px] uppercase font-bold tracking-widest rounded-sm hover:translate-y-[-2px] transition-transform shadow-lg"
                    >
                      Return to Study Mode
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {view === 'list' && (
            <motion.div
              key="list-view"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-5 md:p-12 max-w-5xl mx-auto w-full"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-16 border-b border-editorial-border pb-8">
                <div>
                  <h2 className="text-2xl md:text-5xl font-serif tracking-tight text-editorial-text mb-2 md:mb-4">The Lexicon</h2>
                  <p className="text-editorial-muted uppercase text-[8px] md:text-[10px] tracking-[0.2em] font-bold">Systematic Vocabulary Archive</p>
                </div>
                <div className="relative w-full md:w-80" ref={searchRef}>
                  <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-editorial-meta" size={16} />
                  <input
                    type="text"
                    placeholder="Search entry..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setShowSuggestions(true);
                    }}
                    onFocus={() => setShowSuggestions(true)}
                    className="w-full pl-6 pr-4 py-2 bg-transparent border-b border-editorial-border focus:outline-none focus:border-editorial-text transition-all text-sm font-medium"
                  />
                  
                  {/* Suggestions Dropdown */}
                  <AnimatePresence>
                    {showSuggestions && suggestions.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 right-0 mt-2 bg-white border border-editorial-border shadow-xl z-50 rounded-sm overflow-hidden"
                      >
                        {suggestions.map((suggestion, index) => (
                          <div
                            key={suggestion + index}
                            onClick={() => {
                              setSearchQuery(suggestion);
                              setShowSuggestions(false);
                            }}
                            className="px-4 py-3 text-sm font-medium hover:bg-editorial-accent cursor-pointer border-b border-editorial-border last:border-0 flex items-center justify-between group"
                          >
                            <span className="text-editorial-text font-serif italic">{suggestion}</span>
                            <Search size={12} className="text-editorial-meta opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-1">
                {filteredWords.map((word, idx) => (
                  <WordListEntry 
                    key={word.word + idx} 
                    word={word} 
                    status={wordStatus[word.word] || 'new'}
                    onToggleStatus={toggleStatus}
                    isBookmarked={bookmarks.has(word.word)}
                    onToggleBookmark={toggleBookmark}
                  />
                ))}
                {filteredWords.length === 0 && (
                  <div className="py-24 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-neutral-100 rounded-full mb-6 text-editorial-meta">
                      <Search size={32} />
                    </div>
                    <h3 className="text-2xl font-serif italic text-editorial-text mb-4">No matching records found</h3>
                    <p className="text-sm text-editorial-muted max-w-sm mx-auto mb-8">The term "<span className="font-bold text-editorial-text">{searchQuery}</span>" could not be located in our current lexical archive.</p>
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="px-8 py-3 bg-editorial-text text-white text-[10px] uppercase font-bold tracking-widest rounded-sm hover:translate-y-[-2px] transition-transform shadow-lg"
                    >
                      Clear Search Filters
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {view === 'review-stack' && (
            <motion.div
              key="review-stack-view"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-5 md:p-12 max-w-5xl mx-auto w-full"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-16 border-b border-editorial-border pb-8">
                <div>
                  <h2 className="text-2xl md:text-5xl font-serif tracking-tight text-editorial-text mb-2 md:mb-4">Review Queue</h2>
                  <p className="text-editorial-muted uppercase text-[8px] md:text-[10px] tracking-[0.2em] font-bold">Consolidated Review from All Blocks</p>
                </div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-editorial-meta">
                  {Object.values(wordStatus).filter(s => s === 'review').length} Items Remaining
                </div>
              </div>

              <div className="grid grid-cols-1 gap-1">
                {allWords.filter(w => wordStatus[w.word] === 'review').map((word, idx) => (
                  <WordListEntry 
                    key={word.word + idx} 
                    word={word} 
                    status="review"
                    onToggleStatus={toggleStatus}
                    isBookmarked={bookmarks.has(word.word)}
                    onToggleBookmark={toggleBookmark}
                  />
                ))}
                {Object.values(wordStatus).filter(s => s === 'review').length === 0 && (
                  <div className="py-24 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-neutral-100 rounded-full mb-6 text-editorial-meta">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-2xl font-serif italic text-editorial-text mb-4">Review stack cleared</h3>
                    <p className="text-sm text-editorial-muted max-w-sm mx-auto mb-8">You've mastered everything currently on your plate. Browse the full list to find new challenges.</p>
                    <button 
                      onClick={() => setView('list')}
                      className="px-8 py-3 bg-editorial-text text-white text-[10px] uppercase font-bold tracking-widest rounded-sm hover:translate-y-[-2px] transition-transform shadow-lg"
                    >
                      Browse Vocabulary
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {view === 'practice' && (
            <motion.div
              key="practice-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col h-full"
            >
              <PracticeSession 
                allWords={allWords} 
                wordStatus={wordStatus}
                onToggleStatus={toggleStatus}
                bookmarks={bookmarks}
                onToggleBookmark={toggleBookmark}
              />
            </motion.div>
          )}

          {view === 'phrasal-verbs' && (
            <motion.div
              key="phrasal-verbs-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col h-full"
            >
              <PhrasalVerbView />
            </motion.div>
          )}

          {view === 'editorial' && (
            <motion.div
              key="editorial-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col h-full"
            >
              <EditorialAnalysis />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Visual Detail: The Vert Rail */}
      <div className="w-14 border-l border-editorial-border hidden md:flex flex-col items-center justify-between py-8 bg-white shrink-0">
        <p className="rotate-90 whitespace-nowrap text-[10px] uppercase tracking-[0.5em] font-bold text-editorial-meta h-fit">
          GRE Vocabulary System • 2024 Edition
        </p>
        <button 
          onClick={() => setShowHelp(prev => !prev)}
          className="p-3 text-editorial-meta hover:text-editorial-text transition-colors rounded-full hover:bg-neutral-50 mb-4"
          title="Keyboard Shortcuts (?)"
        >
          <Sparkles size={18} />
        </button>
      </div>
    </div>
  );
}

function Shortcut({ label, keys }: { label: string, keys: string[] }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-xs text-editorial-muted">{label}</span>
      <div className="flex gap-1">
        {keys.map(k => (
          <kbd key={k} className="px-2 py-1 bg-neutral-100 border border-editorial-border rounded-sm shadow-sm font-mono text-[10px] text-editorial-text font-black min-w-[24px] text-center">
            {k}
          </kbd>
        ))}
      </div>
    </div>
  );
}

function StudySession({ 
  block, 
  wordStatus, 
  onToggleStatus,
  onBulkUpdateStatus,
  isSidebarOpen,
  bookmarks,
  onToggleBookmark
}: { 
  block: WordBlock; 
  wordStatus: Record<string, WordStatus>;
  onToggleStatus: (word: string, status: WordStatus) => void;
  onBulkUpdateStatus: (words: string[], status: WordStatus) => void;
  isSidebarOpen: boolean;
  bookmarks: Set<string>;
  onToggleBookmark: (word: string) => void;
}) {
  const [index, setIndex] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [bulkConfirm, setBulkConfirm] = useState<'mastered' | 'review' | null>(null);
  const word = block.words[index];
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
    speakWord(word.word, () => setIsSpeaking(false));
  };

  const handleBulkAction = (status: 'mastered' | 'review') => {
    onBulkUpdateStatus(block.words.map(w => w.word), status);
    setBulkConfirm(null);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input or textarea
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
    <div className="flex-1 flex flex-col h-full min-h-0 relative">
      <div className="absolute top-0 right-0 p-6 md:p-12 pointer-events-none z-0">
        <p className="text-6xl md:text-8xl font-serif text-editorial-border opacity-50 select-none">
          {String(blockIdx).padStart(2, '0')}
        </p>
      </div>

      <header className="p-6 md:p-12 pb-0 flex flex-col sm:flex-row items-center gap-4 justify-between relative z-10">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 md:gap-4 text-[8px] md:text-[10px] uppercase tracking-[0.25em] font-bold text-editorial-muted">
          <span className="shrink-0">Block {blockIdx}</span>
          <span className="hidden sm:inline w-8 h-[1px] bg-editorial-border"></span>
          <span className="shrink-0">Study Mode</span>
          <span className="hidden sm:inline w-8 h-[1px] bg-editorial-border"></span>
          {status === 'mastered' ? (
            <span className="text-emerald-700 flex items-center gap-1 md:gap-2 font-black shrink-0"><CheckCircle2 size={10} /> Mastered</span>
          ) : status === 'review' ? (
            <span className="text-amber-700 flex items-center gap-1 md:gap-2 font-black shrink-0"><AlertCircle size={10} /> Review</span>
          ) : (
            <span className="font-bold shrink-0">New Entry</span>
          )}
          
          <div className="flex items-center gap-4 border-l border-editorial-border pl-4 md:pl-6 ml-2 md:ml-4">
            <button 
              onClick={() => setBulkConfirm('mastered')}
              className="text-[9px] uppercase font-bold tracking-widest text-emerald-700/60 hover:text-emerald-700 transition-colors flex items-center gap-2"
              title="Mark All as Mastered"
            >
              <CheckCircle2 size={12} className="sm:size-14" /> <span className="hidden sm:inline">Bulk Master</span>
            </button>
            <button 
              onClick={() => setBulkConfirm('review')}
              className="text-[9px] uppercase font-bold tracking-widest text-amber-700/60 hover:text-amber-700 transition-colors flex items-center gap-2"
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
      <div className="h-1 w-full bg-editorial-border overflow-hidden relative z-10 shrink-0">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${((index + 1) / block.words.length) * 100}%` }}
          className="h-full bg-editorial-text"
          transition={{ type: 'spring', damping: 20, stiffness: 100 }}
        />
      </div>

      <section className="flex-1 flex items-center px-4 md:px-12 py-6 md:py-8 relative z-10 overflow-visible">
        <div className="max-w-4xl w-full mx-auto">
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
                    className={`flex-1 md:flex-none flex items-center justify-center p-3 md:p-4 rounded-sm border-2 transition-all duration-300 shadow-sm md:shadow-lg ${status === 'mastered' ? 'bg-editorial-text text-editorial-bg border-editorial-text' : 'bg-white text-editorial-meta border-editorial-border hover:border-editorial-text'}`}
                    title="Toggle Mastery"
                  >
                    <CheckCircle2 size={18} className="md:size-24" />
                    <span className="md:hidden ml-2 text-[9px] font-bold uppercase tracking-widest">Master</span>
                  </button>
                  <button 
                    onClick={() => onToggleStatus(word.word, 'review')}
                    className={`flex-1 md:flex-none flex items-center justify-center p-3 md:p-4 rounded-sm border-2 transition-all duration-300 shadow-sm md:shadow-lg ${status === 'review' ? 'bg-amber-600 text-white border-amber-600' : 'bg-white text-editorial-meta border-editorial-border hover:border-editorial-text'}`}
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
      <section className="h-28 md:h-44 border-t-2 border-editorial-text bg-white relative z-10 shrink-0">
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

      <div className="hidden sm:flex p-4 border-t border-editorial-border justify-center gap-12 bg-white">
        <div className="flex items-center gap-3 text-[10px] text-editorial-meta font-bold uppercase tracking-widest">
          <kbd className="px-2 py-1 bg-neutral-100 border border-editorial-border rounded-sm shadow-sm font-mono text-[10px] text-editorial-text font-black">←</kbd>
          <kbd className="px-2 py-1 bg-neutral-100 border border-editorial-border rounded-sm shadow-sm font-mono text-[10px] text-editorial-text font-black">→</kbd>
          Navigate
        </div>
        <div className="flex items-center gap-3 text-[10px] text-editorial-meta font-bold uppercase tracking-widest">
          <kbd className="px-2 py-1 bg-neutral-100 border border-editorial-border rounded-sm shadow-sm font-mono text-[10px] text-editorial-text font-black">M</kbd>
          Mastery
        </div>
        <div className="flex items-center gap-3 text-[10px] text-editorial-meta font-bold uppercase tracking-widest">
          <kbd className="px-2 py-1 bg-neutral-100 border border-editorial-border rounded-sm shadow-sm font-mono text-[10px] text-editorial-text font-black">R</kbd>
          Review
        </div>
        <div className="flex items-center gap-3 text-[10px] text-editorial-meta font-bold uppercase tracking-widest">
          <kbd className="px-2 py-1 bg-neutral-100 border border-editorial-border rounded-sm shadow-sm font-mono text-[10px] text-editorial-text font-black">B</kbd>
          Bookmark
        </div>
      </div>

      {/* Floating Sticky Navigation Bar - High Visibility for Quick Actions */}
      <AnimatePresence>
        {!isSidebarOpen && (
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-30 pointer-events-none w-full max-w-sm px-6">
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
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
                  className={`p-2 rounded-full transition-all ${status === 'mastered' ? 'bg-emerald-600 text-white' : 'text-emerald-700 hover:bg-emerald-50'}`}
                  title="Mastered (M)"
                >
                  <CheckCircle2 size={20} />
                </button>
                <button 
                  onClick={() => onToggleBookmark(word.word)}
                  className={`p-2 rounded-full transition-all ${isBookmarked ? 'bg-editorial-text text-white' : 'text-editorial-meta hover:bg-editorial-muted'}`}
                  title="Bookmark (B)"
                >
                  <Star size={20} fill={isBookmarked ? "currentColor" : "none"} />
                </button>
                <button 
                  onClick={() => onToggleStatus(word.word, 'review')}
                  className={`p-2 rounded-full transition-all ${status === 'review' ? 'bg-amber-600 text-white' : 'text-amber-700 hover:bg-amber-50'}`}
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
        )}
      </AnimatePresence>

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
                  <div className="p-4 bg-emerald-50 rounded-full text-emerald-600 border border-emerald-100">
                    <CheckCircle2 size={32} />
                  </div>
                ) : (
                  <div className="p-4 bg-amber-50 rounded-full text-amber-600 border border-amber-100">
                    <AlertCircle size={32} />
                  </div>
                )}
              </div>
              <h3 className="text-xl font-serif italic text-editorial-text mb-4">Bulk Systematic Update</h3>
              <p className="text-xs text-editorial-muted mb-8 leading-relaxed">
                Apply <span className={`font-bold ${bulkConfirm === 'mastered' ? 'text-emerald-700' : 'text-amber-700'}`}>{bulkConfirm === 'mastered' ? 'Mastery' : 'Review'}</span> status to all {block.words.length} lexemes in this block? This operation is comprehensive and will overwrite existing progress indicators for this specific set.
              </p>
              <div className="flex flex-col gap-3">
                <button 
                  onClick={() => handleBulkAction(bulkConfirm)}
                  className={`w-full py-4 rounded-sm text-[10px] uppercase font-bold tracking-[0.2em] transition-all hover:shadow-lg active:scale-[0.98] ${bulkConfirm === 'mastered' ? 'bg-editorial-text text-white hover:bg-emerald-700' : 'bg-editorial-text text-white hover:bg-amber-700'}`}
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
}

const WordListEntry: React.FC<{ 
  word: WordEntry; 
  status: WordStatus;
  onToggleStatus: (word: string, status: WordStatus) => void;
  isBookmarked: boolean;
  onToggleBookmark: (word: string) => void;
}> = ({ word, status, onToggleStatus, isBookmarked, onToggleBookmark }) => {
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

function PracticeSession({ 
  allWords, 
  wordStatus, 
  onToggleStatus,
  bookmarks,
  onToggleBookmark
}: { 
  allWords: WordEntry[]; 
  wordStatus: Record<string, WordStatus>;
  onToggleStatus: (word: string, status: WordStatus) => void;
  bookmarks: Set<string>;
  onToggleBookmark: (word: string) => void;
}) {
  const [index, setIndex] = useState(0);
  const [showDefinition, setShowDefinition] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [sessionWords, setSessionWords] = useState<WordEntry[]>([]);

  // Initialize session words with a shuffle
  useEffect(() => {
    setSessionWords([...allWords].sort(() => Math.random() - 0.5));
  }, [allWords]);

  const word = sessionWords[index];
  
  // Decide question type for the current word
  // We use a stable type based on the word and session so it doesn't change when clicking reveal
  const questionType = useMemo(() => {
    if (!word) return 'definition';
    const types: ('definition' | 'recall' | 'context' | 'synonym' | 'antonym' | 'derivative')[] = ['definition', 'recall', 'context'];
    if (word.synonyms && word.synonyms.length > 0) types.push('synonym');
    if (word.antonyms && word.antonyms.length > 0) types.push('antonym');
    if (word.derivatives && word.derivatives.length > 0) types.push('derivative');
    
    // Deterministic but "random" for this session word
    const seed = word.word.length + index;
    return types[seed % types.length];
  }, [word, index]);

  if (!word) return <div className="flex-1 flex items-center justify-center font-serif italic text-editorial-meta">Preparing lexical set...</div>;

  const isBookmarked = bookmarks.has(word.word);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % sessionWords.length);
    setShowDefinition(false);
    setIsSpeaking(false);
  };

  const handleSkip = () => {
    // Move current word to the end of the list
    const currentWord = sessionWords[index];
    const newWords = [...sessionWords];
    newWords.splice(index, 1);
    newWords.push(currentWord);
    setSessionWords(newWords);
    // index stays the same (effectively pointing to the next word now)
    // unless we were at the very last one, then we reset to start
    if (index >= newWords.length) setIndex(0);
    setShowDefinition(false);
    setIsSpeaking(false);
  };

  const handleSpeak = () => {
    if (isSpeaking) return;
    setIsSpeaking(true);
    speakWord(word.word, () => setIsSpeaking(false));
  };

  const renderPrompt = () => {
    switch (questionType) {
      case 'recall':
        return (
          <div className="space-y-4">
            <p className="text-[10px] uppercase tracking-widest font-bold text-editorial-meta">Identify the Lexeme</p>
            <p className="text-xl md:text-3xl font-serif italic text-editorial-text leading-relaxed">“{word.definition}”</p>
          </div>
        );
      case 'context':
        return (
          <div className="space-y-4">
            <p className="text-[10px] uppercase tracking-widest font-bold text-editorial-meta">Contextual Cloze</p>
            <p className="text-xl md:text-3xl font-serif italic text-editorial-text leading-relaxed">
              “{word.example.replace(new RegExp(word.word, 'gi'), '__________')}”
            </p>
          </div>
        );
      case 'synonym':
        return (
          <div className="space-y-4">
            <p className="text-[10px] uppercase tracking-widest font-bold text-editorial-meta">Match Synonym</p>
            <div className="flex flex-wrap justify-center gap-3">
              {word.synonyms?.map(s => (
                <span key={s} className="px-4 py-2 bg-editorial-accent border border-editorial-border rounded-sm text-base md:text-lg font-serif italic">
                  {s}
                </span>
              ))}
            </div>
            <p className="text-[10px] text-editorial-meta mt-4 font-bold uppercase tracking-widest">Identify the source word</p>
          </div>
        );
      case 'antonym':
        return (
          <div className="space-y-4">
            <p className="text-[10px] uppercase tracking-widest font-bold text-editorial-meta">Match Antonym</p>
            <div className="flex flex-wrap justify-center gap-3">
              {word.antonyms?.map(a => (
                <span key={a} className="px-4 py-2 bg-neutral-100 border border-editorial-border rounded-sm text-base md:text-lg font-serif italic">
                  {a}
                </span>
              ))}
            </div>
            <p className="text-[10px] text-editorial-meta mt-4 font-bold uppercase tracking-widest">Identify the source word</p>
          </div>
        );
      case 'derivative':
        const d = word.derivatives?.[0];
        return (
          <div className="space-y-4">
            <p className="text-[10px] uppercase tracking-widest font-bold text-editorial-meta">Morphological Challenge</p>
            <p className="text-base text-editorial-text mb-2">What is the <span className="font-bold underline uppercase">{d?.form}</span> form of:</p>
            <h2 className="text-3xl md:text-6xl font-serif italic text-editorial-text">{word.word}</h2>
          </div>
        );
      default:
        return (
          <div className="space-y-4">
            <p className="text-[10px] uppercase tracking-widest font-bold text-editorial-meta">Define Lexeme</p>
            <h2 className="text-3xl md:text-6xl font-serif italic text-editorial-text">{word.word}</h2>
          </div>
        );
    }
  };

  const renderReveal = () => {
    return (
      <div className="space-y-6 md:space-y-8">
        <div className="text-center pb-4 md:pb-8 border-b border-editorial-border">
          <p className="text-[10px] uppercase tracking-widest text-editorial-meta mb-2">Primary Lexeme</p>
          <h3 className="text-3xl md:text-5xl font-serif italic text-editorial-text mb-4">{word.word}</h3>
          <div className="flex justify-center gap-4">
            <button onClick={handleSpeak} className={`p-2 rounded-full border border-editorial-border hover:bg-editorial-accent transition-all ${isSpeaking ? 'animate-pulse text-editorial-text' : 'text-editorial-meta'}`}>
              <Volume2 size={18} />
            </button>
            <button onClick={() => onToggleBookmark(word.word)} className={`p-2 rounded-full border border-editorial-border hover:bg-editorial-accent transition-all ${isBookmarked ? 'text-editorial-text bg-editorial-accent' : 'text-editorial-meta'}`}>
              <Star size={18} fill={isBookmarked ? "currentColor" : "none"} />
            </button>
          </div>
        </div>

        <div className="space-y-4 md:space-y-6">
          <div>
            <p className="text-[9px] uppercase font-bold tracking-widest text-editorial-meta mb-1 md:mb-2">Definition</p>
            <p className="text-base md:text-xl font-serif text-editorial-text leading-relaxed">“{word.definition}”</p>
          </div>
          
          <div>
            <p className="text-[9px] uppercase font-bold tracking-widest text-editorial-meta mb-1 md:mb-2">Example</p>
            <p className="text-sm md:text-base text-editorial-muted leading-relaxed italic">“{word.example}”</p>
          </div>

          {word.derivatives && word.derivatives.length > 0 && (
            <div className="pt-4 border-t border-editorial-border">
              <p className="text-[9px] uppercase font-bold tracking-widest text-editorial-meta mb-2">Derivatives</p>
              <div className="flex flex-wrap gap-2 md:gap-4">
                {word.derivatives.map((d, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-[8px] font-black text-editorial-meta uppercase">{d.form}</span>
                    <span className="text-xs md:text-sm font-serif italic text-editorial-text">{d.word}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="flex-1 overflow-y-auto bg-editorial-bg flex flex-col">
      <div className="flex-1 flex flex-col items-center p-4 md:p-12">
        <div className="max-w-3xl w-full my-auto py-8">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-editorial-accent rounded-full mb-4">
              <Brain size={12} className="text-editorial-text" />
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-editorial-text">Active Practice Engine</p>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {!showDefinition ? (
              <motion.div
                key="prompt"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col items-center"
              >
                <div className="w-full bg-white border-2 border-editorial-border p-8 md:p-20 shadow-xl rounded-sm text-center mb-8 md:mb-12 min-h-[300px] flex flex-col justify-center">
                  {renderPrompt()}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                  <button 
                    onClick={() => setShowDefinition(true)}
                    className="group relative px-10 py-4 md:px-12 md:py-5 bg-editorial-text text-white text-[10px] md:text-xs uppercase font-bold tracking-[0.3em] overflow-hidden rounded-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span className="relative z-10 transition-colors group-hover:text-amber-400">Reveal Solution</span>
                    <div className="absolute inset-0 bg-neutral-800 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  </button>
                  <button 
                    onClick={handleSkip}
                    className="px-10 py-4 md:px-12 md:py-5 border-2 border-editorial-border text-editorial-meta text-[10px] md:text-xs uppercase font-bold tracking-[0.3em] rounded-sm hover:border-editorial-text hover:text-editorial-text transition-all bg-white"
                  >
                    Skip Entry
                  </button>
                </div>
                <p className="mt-8 md:mt-12 text-[10px] text-editorial-meta uppercase tracking-widest font-medium opacity-60 text-center">Attempt to resolve the lexical challenge before revealing</p>
              </motion.div>
            ) : (
              <motion.div
                key="reveal"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white border-2 md:border-4 border-editorial-text p-6 md:p-12 shadow-2xl rounded-sm w-full"
              >
                {renderReveal()}

                <div className="mt-8 md:mt-12 pt-8 md:pt-12 border-t-2 border-dashed border-editorial-border grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button 
                    onClick={() => { onToggleStatus(word.word, 'mastered'); handleNext(); }}
                    className="py-4 md:py-5 bg-emerald-600 text-white text-[9px] md:text-[10px] uppercase font-bold tracking-widest rounded-sm hover:bg-emerald-700 transition-colors flex items-center justify-center gap-3 shadow-lg shadow-emerald-900/10"
                  >
                    <CheckCircle2 size={16} /> Mark as Mastered
                  </button>
                  <button 
                    onClick={() => { onToggleStatus(word.word, 'review'); handleNext(); }}
                    className="py-4 md:py-5 bg-amber-600 text-white text-[9px] md:text-[10px] uppercase font-bold tracking-widest rounded-sm hover:bg-amber-700 transition-colors flex items-center justify-center gap-3 shadow-lg shadow-amber-900/10"
                  >
                    <AlertCircle size={16} /> Mark for Review
                  </button>
                </div>
                <div className="mt-4">
                  <button 
                    onClick={handleNext}
                    className="w-full py-3 md:py-4 text-editorial-meta text-[8px] md:text-[9px] uppercase font-bold tracking-[0.3em] hover:text-editorial-text transition-colors border border-transparent hover:border-editorial-border rounded-sm"
                  >
                    Decline Assessment & Move to Next
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-12 md:mt-16 flex items-center justify-between text-editorial-meta border-t border-editorial-border pt-6 md:pt-8">
            <div className="text-[8px] md:text-[10px] uppercase font-bold tracking-[0.4em] flex items-center gap-4">
              <span className="text-editorial-text">{index + 1}</span>
              <div className="w-8 md:w-12 h-[1px] bg-editorial-border"></div>
              <span>{sessionWords.length} Words</span>
            </div>
            <div className="flex gap-1 md:gap-2">
              <button onClick={() => setIndex(prev => (prev - 1 + sessionWords.length) % sessionWords.length)} className="p-2 md:p-3 hover:text-editorial-text hover:bg-editorial-accent rounded-full transition-all">
                <ChevronLeft size={20} />
              </button>
              <button onClick={() => setIndex(prev => (prev + 1) % sessionWords.length)} className="p-2 md:p-3 hover:text-editorial-text hover:bg-editorial-accent rounded-full transition-all">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PhrasalVerbView() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = useMemo(() => {
    const cats = new Set(PHRASAL_VERBS_DATA.map(pv => pv.category));
    return Array.from(cats).sort();
  }, []);

  const filteredVerbs = useMemo(() => {
    return PHRASAL_VERBS_DATA.filter(pv => {
      const matchesSearch = pv.verb.toLowerCase().includes(search.toLowerCase()) || 
                           pv.meaning.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = !selectedCategory || pv.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  return (
    <div className="p-6 md:p-12 max-w-6xl mx-auto w-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-16 border-b border-editorial-border pb-8">
        <div>
          <h2 className="text-2xl md:text-5xl font-serif tracking-tight text-editorial-text mb-2 md:mb-4">Group Verbs</h2>
          <p className="text-editorial-muted uppercase text-[8px] md:text-[10px] tracking-[0.2em] font-bold">Phrasal Lexical Structure Archive</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="relative">
            <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-editorial-meta" size={16} />
            <input
              type="text"
              placeholder="Filter phrasals..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-6 pr-4 py-2 bg-transparent border-b border-editorial-border focus:outline-none focus:border-editorial-text transition-all text-sm font-medium w-full sm:w-48"
            />
          </div>
          <select 
            value={selectedCategory || ''} 
            onChange={(e) => setSelectedCategory(e.target.value || null)}
            className="bg-transparent border-b border-editorial-border py-2 text-sm font-bold uppercase tracking-widest text-editorial-muted focus:outline-none focus:border-editorial-text cursor-pointer"
          >
            <option value="">All Categories</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredVerbs.map((pv, idx) => (
          <motion.div 
            key={pv.verb + idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.02 }}
            className="group bg-white border border-editorial-border p-6 rounded-sm shadow-sm hover:shadow-xl hover:translate-y-[-4px] transition-all relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
              <Type size={48} />
            </div>
            <div className="flex flex-col h-full relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 bg-editorial-accent border border-editorial-border rounded-sm">{pv.category}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif italic text-editorial-text mb-3 group-hover:text-editorial-muted transition-colors">{pv.verb}</h3>
              <p className="text-sm font-medium text-editorial-text mb-6 flex-1 border-l-2 border-editorial-accent pl-4 py-1">
                {pv.meaning}
              </p>
              <div className="bg-neutral-50 border border-editorial-border p-4 rounded-sm">
                <p className="text-[8px] uppercase font-serif font-black tracking-widest text-editorial-meta mb-2">Usage Instance</p>
                <p className="text-xs leading-relaxed italic text-editorial-muted">
                  “{pv.example}”
                </p>
              </div>
            </div>
          </motion.div>
        ))}
        {filteredVerbs.length === 0 && (
          <div className="col-span-full py-24 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-neutral-100 rounded-full mb-6 text-editorial-meta">
              <X size={32} />
            </div>
            <h3 className="text-2xl font-serif italic text-editorial-text mb-4">No phrasal verbs matched your query</h3>
            <p className="text-sm text-editorial-muted max-w-sm mx-auto mb-8">Try adjusting your filters or expanding your search parameters.</p>
            <button 
              onClick={() => { setSearch(''); setSelectedCategory(null); }}
              className="px-8 py-3 bg-editorial-text text-white text-[10px] uppercase font-bold tracking-widest rounded-sm hover:translate-y-[-2px] transition-transform shadow-lg"
            >
              Reset Archive Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
