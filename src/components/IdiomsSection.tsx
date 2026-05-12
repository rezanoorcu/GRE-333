
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
    <div className="flex flex-col h-full bg-editorial-bg overflow-hidden">
      {/* Header & Controls Hub */}
      <div className="sticky top-0 z-30 bg-editorial-bg transition-all border-b border-editorial-border">
        <header className="px-6 md:px-8 py-6 md:py-8 bg-white shrink-0">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-editorial-accent rounded-full text-editorial-text shrink-0">
                <Sparkles size={24} />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-serif tracking-tight text-editorial-text italic">
                  Phrases & Idioms
                </h2>
                <p className="text-[9px] uppercase tracking-[0.2em] font-black text-editorial-muted mt-1">
                  Linguistic Inventory • Contextual Proficiency
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
              <div className="relative flex-1 sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-editorial-meta" size={14} />
                <input
                  type="text"
                  placeholder="Locate expression..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-neutral-50 border border-editorial-border text-xs focus:outline-none focus:border-editorial-text focus:ring-1 focus:ring-editorial-text/5 transition-all rounded-sm italic text-editorial-text"
                />
              </div>
              <button 
                onClick={() => setShowRecallKeys(!showRecallKeys)}
                className={`px-4 py-2 border rounded-sm text-[9px] uppercase font-black tracking-widest flex items-center justify-center gap-2 transition-all ${showRecallKeys ? 'bg-editorial-text text-white border-editorial-text' : 'bg-white text-editorial-text border-editorial-border hover:bg-neutral-50'}`}
              >
                {showRecallKeys ? <EyeOff size={12} /> : <Eye size={12} />}
                {showRecallKeys ? "Recall Mode Active" : "Enable Recall Mode"}
              </button>
            </div>
          </div>
        </header>

        {/* Categories Bar */}
        <div className="px-6 md:px-8 py-2 bg-neutral-50/50 backdrop-blur-sm flex gap-3 overflow-x-auto no-scrollbar shrink-0 border-t border-editorial-border/50">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 text-[9px] uppercase font-black tracking-wider transition-all rounded-full whitespace-nowrap border ${selectedCategory === cat ? 'bg-editorial-text text-white border-editorial-text shadow-sm' : 'text-editorial-muted border-editorial-border/50 hover:border-editorial-text bg-white/50 hover:bg-white'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Content Grid */}
      <div className="flex-1 overflow-y-auto p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Footer Info */}
      <footer className="px-8 py-4 bg-white border-t border-editorial-border text-[9px] uppercase font-bold tracking-widest text-editorial-meta flex justify-between shrink-0 transition-colors">
        <span>Archived Expressions: {IDIOMS_DATA.length}</span>
        <span>Source: Banking and BCS Journey with ASF</span>
      </footer>
    </div>
  );
};
