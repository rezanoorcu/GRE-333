
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
  Menu,
  X,
  Brain,
  Sparkles,
  Star,
  Type,
  Newspaper,
  LayoutDashboard,
  Settings,
  HelpCircle
} from 'lucide-react';
import { VOCABULARY_DATA } from './data';
import { WordEntry, WordBlock, SavedVocab } from './types';
import { PracticeMode } from './components/PracticeMode';
import { EditorialAnalysis } from './components/EditorialAnalysis';
import { IdiomsSection } from './components/IdiomsSection';
import { Dashboard } from './components/Dashboard';
import { StudySession } from './components/StudySession';
import { WordListEntry } from './components/WordListEntry';
import { PhrasalVerbView } from './components/PhrasalVerbView';

type WordStatus = 'new' | 'mastered' | 'review';
type AppView = 'dashboard' | 'study' | 'list' | 'bookmarks' | 'review-stack' | 'practice' | 'phrasal-verbs' | 'editorial' | 'idioms';

export default function App() {
  const [currentBlockId, setCurrentBlockId] = useState<string | null>(() => {
    try {
      const saved = localStorage.getItem('lexicon_current_block');
      return saved || VOCABULARY_DATA[0].id;
    } catch (e) {
      return VOCABULARY_DATA[0].id;
    }
  });

  useEffect(() => {
    if (currentBlockId) {
      localStorage.setItem('lexicon_current_block', currentBlockId);
    }
  }, [currentBlockId]);

  const [darkMode, setDarkMode] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('lexicon_dark_mode');
      return saved === 'true' || (saved === null && window.matchMedia('(prefers-color-scheme: dark)').matches);
    } catch (e) {
      return false;
    }
  });

  useEffect(() => {
    localStorage.setItem('lexicon_dark_mode', String(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const [view, setView] = useState<AppView>('dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [lastAction, setLastAction] = useState<{word: string, status: WordStatus} | null>(null);

  // Persistent Saved Vocab from Editorials
  const [savedVocab, setSavedVocab] = useState<SavedVocab[]>(() => {
    try {
      const saved = localStorage.getItem('editorial_vocab');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('editorial_vocab', JSON.stringify(savedVocab));
  }, [savedVocab]);
  
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
  const allWords = useMemo(() => {
    return VOCABULARY_DATA.flatMap(b => b.words);
  }, []);

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
      if (e.key === '/' && !showSearch) {
        e.preventDefault();
        setShowSearch(true);
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setShowSearch(true);
      }
      if (e.key === 'Escape') {
        setShowHelp(false);
        setIsSidebarOpen(false);
        setShowSearch(false);
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, [showSearch]);

  const masteredCount = allWords.filter(w => wordStatus[w.word] === 'mastered').length;

  return (
    <div className={`flex h-screen w-full bg-editorial-bg text-editorial-text font-sans overflow-hidden relative transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      {/* HUD Notification */}
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

      <AnimatePresence>{showSearch && (
        <CommandPalette 
          words={allWords} 
          onSelect={(word) => {
            setSearchQuery(word);
            setView('list');
            setShowSearch(false);
          }}
          onClose={() => setShowSearch(false)}
        />
      )}</AnimatePresence>
      <AnimatePresence>{showHelp && <HelpModal onClose={() => setShowHelp(false)} />}</AnimatePresence>

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

      {/* Navigation Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-72 border-r border-editorial-border flex flex-col bg-white dark:bg-zinc-950 shrink-0 transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-8 pb-4 shrink-0">
          <div 
            className="flex items-center gap-3 mb-8 cursor-pointer group"
            onClick={() => { setView('dashboard'); setIsSidebarOpen(false); }}
          >
            <div className="bg-editorial-text p-2 rounded-sm text-editorial-bg group-hover:scale-110 transition-transform">
              <BookOpen size={18} />
            </div>
            <div>
              <h1 className="text-[11px] tracking-[0.2em] font-black uppercase text-editorial-text">Lexical Hub</h1>
              <p className="text-[8px] uppercase tracking-widest text-editorial-meta font-bold">v2.0 Academic OS</p>
            </div>
          </div>
          
          <nav className="space-y-1">
            <NavItem 
              active={view === 'dashboard'} 
              icon={<LayoutDashboard size={18} />} 
              label="Dashboard" 
              onClick={() => { setView('dashboard'); setIsSidebarOpen(false); }}
            />
            <div className="pt-4 pb-2">
              <p className="px-3 text-[9px] uppercase tracking-widest text-editorial-meta font-black mb-2">Modules</p>
              <NavItem 
                active={view === 'study'} 
                icon={<GraduationCap size={18} />} 
                label="333 Words" 
                onClick={() => { setView('study'); setIsSidebarOpen(false); }}
              />
              <NavItem 
                active={view === 'phrasal-verbs'} 
                icon={<Type size={18} />} 
                label="Group Verbs" 
                onClick={() => { setView('phrasal-verbs'); setIsSidebarOpen(false); }}
              />
              <NavItem 
                active={view === 'idioms'} 
                icon={<Sparkles size={18} />} 
                label="Idioms" 
                onClick={() => { setView('idioms'); setIsSidebarOpen(false); }}
              />
            </div>
            <div className="pt-4 pb-2">
              <p className="px-3 text-[9px] uppercase tracking-widest text-editorial-meta font-black mb-2">Learning Tools</p>
              <NavItem 
                active={view === 'practice'} 
                icon={<Brain size={18} />} 
                label="Practice Lab" 
                onClick={() => { setView('practice'); setIsSidebarOpen(false); }}
              />
              <NavItem 
                active={view === 'editorial'} 
                icon={<Newspaper size={18} />} 
                label="Editorial Reader" 
                onClick={() => { setView('editorial'); setIsSidebarOpen(false); }}
              />
            </div>
          </nav>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-8 no-scrollbar">
          {(view === 'study' || view === 'dashboard') && (
            <div className="px-3">
              <p className="text-[9px] uppercase tracking-[0.2em] text-editorial-meta mb-6 font-black border-b border-editorial-border pb-2">Course Units</p>
              <div className="space-y-6">
                {VOCABULARY_DATA.map((block, idx) => {
                  const blockMastered = block.words.filter(w => wordStatus[w.word] === 'mastered').length;
                  const blockProgress = (blockMastered / block.words.length) * 100;
                  
                  return (
                    <div 
                      key={block.id}
                      onClick={() => handleSelectBlock(block.id)}
                      className={`group cursor-pointer transition-all ${currentBlockId === block.id && view === 'study' ? 'opacity-100 translate-x-1' : 'opacity-50 hover:opacity-100 hover:translate-x-1'}`}
                    >
                      <div className="flex justify-between items-baseline mb-1">
                        <p className="text-[8px] font-black tracking-tighter uppercase text-editorial-muted">
                          UNIT {String(idx + 1).padStart(2, '0')}
                        </p>
                        <span className="text-[8px] font-mono text-editorial-meta">{blockMastered}/{block.words.length}</span>
                      </div>
                      <p className="text-sm font-serif italic text-editorial-text mb-2 leading-tight truncate">{block.title.split(': ')[1]}</p>
                      <div className="h-[1px] w-full bg-editorial-border overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${blockProgress}%` }}
                          className="h-full bg-editorial-text"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
        
        <div className="p-6 bg-editorial-accent border-t border-editorial-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-editorial-text text-white flex items-center justify-center text-[10px] font-black">
              {Math.round((masteredCount / (allWords.length || 1)) * 100)}%
            </div>
            <div>
              <p className="text-[9px] uppercase font-black tracking-widest text-editorial-text">Global Mastery</p>
              <p className="text-[10px] text-editorial-meta">{masteredCount} / {allWords.length} Words</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => setShowHelp(true)}
              className="flex-1 py-2 bg-white dark:bg-zinc-900 border border-editorial-border rounded-sm text-[8px] uppercase font-black tracking-widest hover:bg-neutral-50 dark:hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2"
            >
              <HelpCircle size={10} /> Support
            </button>
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 bg-white dark:bg-zinc-900 border border-editorial-border rounded-sm text-editorial-muted hover:text-editorial-text transition-colors"
              title="Toggle Night Mode"
            >
              <Sparkles size={14} className={darkMode ? 'text-amber-400' : ''} />
            </button>
            <button className="p-2 bg-white dark:bg-zinc-900 border border-editorial-border rounded-sm text-editorial-muted hover:text-editorial-text">
              <Settings size={14} />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Container */}
      <div className="flex-1 flex flex-col min-w-0 bg-editorial-bg transition-colors duration-300">
        <header className="h-16 border-b border-editorial-border bg-white dark:bg-zinc-950 flex items-center justify-between px-6 shrink-0 z-40 sticky top-0">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 -ml-2 text-editorial-muted hover:text-editorial-text"
            >
              <Menu size={20} />
            </button>
            <div className="hidden sm:flex items-center gap-3 text-[10px] uppercase font-black tracking-widest text-editorial-meta">
              <span>HUB</span>
              <ChevronRight size={10} />
              <span className="text-editorial-text whitespace-nowrap">{view.toUpperCase().replace('-', ' ')}</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-1 p-1 bg-editorial-accent rounded-sm border border-editorial-border">
               <ViewToggle active={view === 'dashboard'} onClick={() => setView('dashboard')} label="Summary" />
               <ViewToggle active={view === 'study'} onClick={() => setView('study')} label="Cards" />
               <ViewToggle active={view === 'list'} onClick={() => setView('list')} label="Dictionary" />
               <ViewToggle active={view === 'editorial'} onClick={() => setView('editorial')} label="Reader" />
            </div>

            <div className="relative" ref={searchRef}>
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-editorial-meta" size={14} />
              <input 
                type="text" 
                placeholder="Find anything ( / )..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSuggestions(true);
                  if (view !== 'list') setView('list');
                }}
                onFocus={() => setShowSuggestions(true)}
                className="pl-9 pr-4 py-1.5 bg-neutral-50 dark:bg-zinc-900 border border-editorial-border rounded-full text-xs focus:outline-none focus:ring-1 focus:ring-editorial-text/20 focus:border-editorial-text w-32 sm:w-48 transition-all"
              />
              <AnimatePresence>
                {showSuggestions && suggestions.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 mt-2 bg-white dark:bg-zinc-900 border border-editorial-border shadow-2xl z-50 rounded-sm overflow-hidden min-w-[240px]"
                  >
                    {suggestions.map((suggestion, index) => (
                      <div
                        key={suggestion + index}
                        onClick={() => {
                          setSearchQuery(suggestion);
                          setShowSuggestions(false);
                          setView('list');
                        }}
                        className="px-4 py-3 text-sm font-medium hover:bg-editorial-accent dark:hover:bg-zinc-800 cursor-pointer border-b border-editorial-border last:border-0 flex items-center justify-between group"
                      >
                        <span className="text-editorial-text font-serif italic">{suggestion}</span>
                        <ChevronRight size={12} className="text-editorial-meta opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </header>

        <main className="flex-1 flex flex-col overflow-hidden relative">
          <AnimatePresence mode="wait">
            {view === 'dashboard' && (
              <motion.div key="dashboard" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full overflow-hidden flex flex-col">
                <Dashboard wordStatus={wordStatus} bookmarks={bookmarks} onNavigate={setView} currentBlockId={currentBlockId} />
              </motion.div>
            )}

            {view === 'study' && currentBlock && (
              <motion.div key={`study-${currentBlock.id}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full">
                <StudySession 
                  block={currentBlock} wordStatus={wordStatus} onToggleStatus={toggleStatus}
                  onBulkUpdateStatus={bulkUpdateStatus} isSidebarOpen={isSidebarOpen}
                  bookmarks={bookmarks} onToggleBookmark={toggleBookmark}
                />
              </motion.div>
            )}

            {view === 'bookmarks' && (
              <ListView key="bookmarks" title="Personal Archive" words={allWords.filter(w => bookmarks.has(w.word))} wordStatus={wordStatus} toggleStatus={toggleStatus} bookmarks={bookmarks} toggleBookmark={toggleBookmark} />
            )}

            {view === 'list' && (
              <ListView key="list" title="The Lexicon" words={filteredWords} wordStatus={wordStatus} toggleStatus={toggleStatus} bookmarks={bookmarks} toggleBookmark={toggleBookmark} />
            )}

            {view === 'review-stack' && (
              <ListView key="review" title="Review Queue" words={allWords.filter(w => wordStatus[w.word] === 'review')} wordStatus={wordStatus} toggleStatus={toggleStatus} bookmarks={bookmarks} toggleBookmark={toggleBookmark} />
            )}

            {view === 'practice' && (
              <motion.div key="practice" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full">
                <PracticeMode allWords={allWords} wordStatus={wordStatus} onToggleStatus={toggleStatus} bookmarks={bookmarks} onToggleBookmark={toggleBookmark} />
              </motion.div>
            )}

            {view === 'phrasal-verbs' && (
              <motion.div key="phrasals" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full">
                <PhrasalVerbView />
              </motion.div>
            )}

            {view === 'editorial' && (
              <motion.div key="editorial" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full">
                <EditorialAnalysis savedVocab={savedVocab} onSaveVocab={setSavedVocab} />
              </motion.div>
            )}

            {view === 'idioms' && (
              <motion.div key="idioms" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full">
                <IdiomsSection />
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

function NavItem({ active, icon, label, onClick, badge }: { active: boolean, icon: React.ReactNode, label: string, onClick: () => void, badge?: number }) {
  return (
    <button 
      onClick={onClick}
      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-sm text-sm font-bold transition-all ${active ? 'bg-editorial-accent text-editorial-text shadow-sm' : 'text-editorial-muted hover:text-editorial-text hover:bg-neutral-50'}`}
    >
      <div className="flex items-center gap-3">
        <span className={active ? 'text-editorial-text' : 'text-editorial-meta'}>{icon}</span>
        {label}
      </div>
      {badge !== undefined && (
        <span className="bg-editorial-text text-white text-[8px] px-1.5 py-0.5 rounded-full font-black min-w-[18px]">
          {badge}
        </span>
      )}
    </button>
  );
}

function ViewToggle({ active, onClick, label }: { active: boolean, onClick: () => void, label: string }) {
  return (
    <button 
      onClick={onClick}
      className={`px-3 py-1 text-[9px] uppercase font-black tracking-widest transition-all rounded-sm ${active ? 'bg-editorial-text text-white' : 'text-editorial-muted hover:text-editorial-text'}`}
    >
      {label}
    </button>
  );
}

function ListView({ title, words, wordStatus, toggleStatus, bookmarks, toggleBookmark }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
      className="p-6 md:p-12 max-w-5xl mx-auto w-full overflow-y-auto h-full"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-editorial-border pb-8">
        <div>
          <h2 className="text-3xl md:text-5xl font-serif tracking-tight text-editorial-text mb-2">{title}</h2>
          <p className="text-editorial-muted uppercase text-[9px] tracking-[0.2em] font-black">Linguistic Registry • {words.length} Entries</p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-1">
        {words.map((word: any, idx: number) => (
          <WordListEntry key={word.word + idx} word={word} status={wordStatus[word.word] || 'new'} onToggleStatus={toggleStatus} isBookmarked={bookmarks.has(word.word)} onToggleBookmark={toggleBookmark} />
        ))}
        {words.length === 0 && (
          <div className="py-24 text-center">
            <h3 className="text-2xl font-serif italic text-editorial-text mb-4">Registry is Empty</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

function HelpModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] bg-editorial-text/80 backdrop-blur-sm flex items-center justify-center p-6" onClick={onClose}>
      <div className="bg-white dark:bg-zinc-900 border border-editorial-border p-8 md:p-12 max-w-lg w-full rounded-sm shadow-2xl" onClick={e => e.stopPropagation()}>
        <h3 className="text-2xl font-serif italic mb-6 dark:text-white">Learning Guide</h3>
        <div className="space-y-4">
          <Shortcut label="Global Search" keys={['/']} />
          <Shortcut label="Quick Command" keys={['⌘', 'K']} />
          <Shortcut label="Next Entry" keys={['→']} />
          <Shortcut label="Previous Entry" keys={['←']} />
          <Shortcut label="Mark Mastered" keys={['M']} />
          <Shortcut label="Mark Review" keys={['R']} />
          <Shortcut label="Bookmark Entry" keys={['B']} />
          <Shortcut label="Pronunciation" keys={['S']} />
          <Shortcut label="Help" keys={['?']} />
        </div>
        <button onClick={onClose} className="w-full mt-10 py-4 bg-editorial-text text-white text-[10px] uppercase font-black tracking-[0.3em] hover:bg-neutral-800 transition-all">Close Guide</button>
      </div>
    </div>
  );
}

function CommandPalette({ words, onSelect, onClose }: { words: WordEntry[], onSelect: (w: string) => void, onClose: () => void }) {
  const [query, setQuery] = useState('');
  const fuse = useMemo(() => new Fuse(words, {
    keys: ['word', 'definition'],
    threshold: 0.3
  }), [words]);

  const results = useMemo(() => {
    if (!query) return words.slice(0, 5);
    return fuse.search(query).slice(0, 8).map(r => r.item);
  }, [query, words, fuse]);

  return (
    <div className="fixed inset-0 z-[100] bg-zinc-950/60 backdrop-blur-md flex items-start justify-center pt-[15vh] px-6" onClick={onClose}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="w-full max-w-2xl bg-white dark:bg-zinc-900 border border-editorial-border rounded-lg shadow-2xl overflow-hidden flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-6 border-b border-editorial-border flex items-center gap-4">
          <Search size={20} className="text-editorial-meta" />
          <input 
            autoFocus
            type="text" 
            placeholder="Type to search units, words, or meanings..." 
            className="flex-1 bg-transparent text-lg font-serif italic outline-none dark:text-white"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <kbd className="px-2 py-1 bg-editorial-accent rounded text-[10px] uppercase font-black text-editorial-meta">ESC</kbd>
        </div>
        
        <div className="max-h-[50vh] overflow-y-auto p-2 no-scrollbar">
          {results.map((word, i) => (
            <div 
              key={word.word + i}
              onClick={() => onSelect(word.word)}
              className="p-4 rounded-md hover:bg-editorial-accent dark:hover:bg-zinc-800 cursor-pointer group flex items-center justify-between transition-colors border-b border-transparent last:border-0"
            >
              <div>
                <h4 className="text-md font-bold dark:text-white group-hover:translate-x-1 transition-transform">{word.word}</h4>
                <p className="text-xs text-editorial-muted italic line-clamp-1">{word.definition}</p>
              </div>
              <ChevronRight size={14} className="text-editorial-meta opacity-0 group-hover:opacity-100 transition-all" />
            </div>
          ))}
          {results.length === 0 && (
            <div className="p-12 text-center">
              <p className="text-editorial-muted italic font-serif">No matches found for "{query}"</p>
            </div>
          )}
        </div>
        
        <div className="p-4 bg-editorial-accent dark:bg-zinc-950 border-t border-editorial-border flex items-center justify-between">
          <div className="flex gap-4">
            <span className="flex items-center gap-1.5 text-[9px] uppercase font-black text-editorial-meta">
              <kbd className="px-1.5 py-0.5 bg-white dark:bg-zinc-800 rounded border border-editorial-border">↵</kbd> Select
            </span>
            <span className="flex items-center gap-1.5 text-[9px] uppercase font-black text-editorial-meta">
              <kbd className="px-1.5 py-0.5 bg-white dark:bg-zinc-800 rounded border border-editorial-border">↑↓</kbd> Browse
            </span>
          </div>
          <span className="text-[10px] uppercase font-black text-editorial-meta tracking-widest italic">Lexical Command Hub</span>
        </div>
      </motion.div>
    </div>
  );
}

function Shortcut({ label, keys }: { label: string, keys: string[] }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-xs text-editorial-muted">{label}</span>
      <div className="flex gap-1">
        {keys.map(k => (
          <kbd key={k} className="px-2 py-1 bg-neutral-100 border rounded-sm font-mono text-[10px] text-editorial-text font-black min-w-[24px] text-center">{k}</kbd>
        ))}
      </div>
    </div>
  );
}
