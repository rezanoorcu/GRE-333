
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Sparkles, 
  ChevronRight, 
  ChevronLeft,
  BookOpen,
  Volume2,
  RefreshCw,
  Eye,
  EyeOff
} from 'lucide-react';
import { IDIOMS_DATA, IdiomEntry } from '../idiomsData';

export const IdiomsSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [showRecallKeys, setShowRecallKeys] = useState(false);
  const [revealStates, setRevealStates] = useState<Record<string, boolean>>({});

  const categories = ['All', ...new Set(IDIOMS_DATA.map(i => i.category))];

  const filteredIdioms = useMemo(() => {
    return IDIOMS_DATA.filter(idiom => {
      const matchesSearch = idiom.phrase.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            idiom.meaning.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || idiom.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const toggleReveal = (phrase: string) => {
    setRevealStates(prev => ({
      ...prev,
      [phrase]: !prev[phrase]
    }));
  };

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="flex flex-col h-full bg-editorial-bg relative overflow-hidden">
      {/* Floating Header Hub */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-40 bg-white/90 backdrop-blur-md border border-editorial-border px-4 py-2 flex flex-col md:flex-row items-center gap-3 transition-all rounded-2xl md:rounded-full shadow-lg w-[95vw] md:w-fit min-w-[320px]">
        <div className="flex items-center gap-3 pr-3 border-b md:border-b-0 md:border-r border-editorial-border/30 pb-2 md:pb-0">
          <div className="p-1.5 bg-editorial-text rounded-full text-white shrink-0">
            <Sparkles size={12} />
          </div>
          <div className="whitespace-nowrap text-left">
            <h2 className="text-xs font-serif italic text-editorial-text leading-none">
              Phrases & Idioms
            </h2>
            <p className="text-[7px] uppercase tracking-[0.1em] font-black text-editorial-meta mt-0.5">
              {filteredIdioms.length} Entries
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          {/* Search Input */}
          <div className="relative flex-1 md:w-40 lg:w-56">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-editorial-meta" size={10} />
            <input
              type="text"
              placeholder="Find..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-4 py-1 bg-neutral-100/50 border border-editorial-border/50 text-[10px] focus:outline-none focus:border-editorial-text transition-all rounded-full italic text-editorial-text"
            />
          </div>

          {/* Category Dropdown */}
          <div className="flex items-center gap-2">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-transparent text-[8px] uppercase font-bold tracking-widest text-editorial-meta border-none focus:ring-0 cursor-pointer hover:text-editorial-text transition-colors outline-none"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <button 
            onClick={() => setShowRecallKeys(!showRecallKeys)}
            className={`p-1.5 border rounded-full transition-all shrink-0 ${showRecallKeys ? 'bg-editorial-text text-white border-editorial-text' : 'bg-white text-editorial-text border-editorial-border hover:bg-neutral-100'}`}
            title={showRecallKeys ? "Recall Mode Active" : "Recall Mode"}
          >
            {showRecallKeys ? <EyeOff size={12} /> : <Eye size={12} />}
          </button>
        </div>
      </header>

      {/* Content Grid */}
      <div className="flex-1 overflow-y-auto pt-24 pb-24 px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <AnimatePresence mode="popLayout">
          {filteredIdioms.map((idiom, idx) => (
            <motion.div
              layout
              key={idiom.phrase}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: idx * 0.02 }}
              className="bg-white border border-editorial-border p-6 rounded-sm shadow-sm hover:shadow-xl transition-all flex flex-col group"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="px-2 py-0.5 bg-neutral-100 text-editorial-meta text-[8px] uppercase font-bold tracking-widest rounded-sm border border-neutral-200">
                  {idiom.category}
                </span>
                <button 
                  onClick={() => speak(idiom.phrase)}
                  className="text-editorial-meta hover:text-editorial-text transition-colors"
                >
                  <Volume2 size={14} />
                </button>
              </div>

              <h3 className="text-xl font-serif italic text-editorial-text mb-4 group-hover:text-amber-900 transition-colors">
                {idiom.phrase}
              </h3>

              <div className="space-y-4 flex-1">
                {/* Recall Mode Section */}
                {showRecallKeys ? (
                  <div className="bg-neutral-50 border border-dashed border-editorial-border p-4 rounded-sm">
                    <p className="text-[9px] uppercase font-black text-editorial-meta mb-2 tracking-tighter">Mnemonic / Recall Key</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-editorial-text">
                        {revealStates[idiom.phrase] ? idiom.recallKey : '••••••••'}
                      </span>
                      <button 
                        onClick={() => toggleReveal(idiom.phrase)}
                        className="p-1 hover:bg-white rounded transition-colors text-editorial-meta"
                      >
                        {revealStates[idiom.phrase] ? <EyeOff size={14} /> : <Eye size={14} />}
                      </button>
                    </div>
                  </div>
                ) : null}

                <AnimatePresence>
                  {(!showRecallKeys || revealStates[idiom.phrase]) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-4 overflow-hidden"
                    >
                      <div>
                        <p className="text-[9px] uppercase font-black text-editorial-meta mb-1 tracking-tighter">Explanation</p>
                        <p className="text-sm text-editorial-text leading-relaxed font-medium">
                          {idiom.meaning}
                        </p>
                      </div>
                      <div className="pt-4 border-t border-editorial-border border-dotted">
                        <p className="text-[9px] uppercase font-black text-editorial-meta mb-2 tracking-tighter">Usage Context</p>
                        <div className="text-[13px] text-editorial-muted italic leading-snug border-l-2 border-editorial-accent pl-3">
                          “{idiom.example}”
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Floating Footer Info */}
      <footer className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-white/80 backdrop-blur-md border border-editorial-border px-6 py-2 transition-all rounded-full shadow-lg text-[8px] uppercase font-bold tracking-widest text-editorial-meta flex items-center gap-6 whitespace-nowrap">
        <span>Archive: {IDIOMS_DATA.length} Units</span>
        <div className="w-[1px] h-3 bg-editorial-border" />
        <span>Source: ASF Banking Journey</span>
      </footer>
    </div>
  );
};
