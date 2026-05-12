
import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Search, Type, X } from 'lucide-react';
import { PHRASAL_VERBS_DATA } from '../phrasalVerbsData';

export const PhrasalVerbView: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const currentScrollY = e.currentTarget.scrollTop;
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setHeaderVisible(false);
    } else {
      setHeaderVisible(true);
    }
    setLastScrollY(currentScrollY);
  };

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
    <div className="flex flex-col h-full bg-editorial-bg relative overflow-hidden">
      {/* Docked Header Hub */}
      <motion.header 
        initial={{ y: 0 }}
        animate={{ y: headerVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-editorial-border px-6 py-3 flex items-center justify-between gap-6 shadow-sm"
      >
        <div className="flex items-center gap-3">
          <div className="p-1.5 bg-editorial-text rounded-full text-white shrink-0">
            <Type size={12} />
          </div>
          <div className="whitespace-nowrap hidden sm:block">
            <h2 className="text-xs font-serif italic text-editorial-text leading-none">
              Group Verbs
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-editorial-meta" size={10} />
            <input
              type="text"
              placeholder="Filter..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-8 pr-4 py-1 bg-neutral-100/50 border border-editorial-border/50 text-[10px] focus:outline-none focus:border-editorial-text transition-all rounded-full italic text-editorial-text w-32 md:w-48"
            />
          </div>
          <select 
            value={selectedCategory || ''}
            onChange={(e) => setSelectedCategory(e.target.value || null)}
            className="bg-transparent text-[8px] uppercase font-bold tracking-widest text-editorial-meta border-none focus:ring-0 cursor-pointer hover:text-editorial-text transition-colors outline-none"
          >
            <option value="">All Categories</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </motion.header>

      <div 
        onScroll={handleScroll}
        className="flex-1 overflow-y-auto pt-24 pb-20 px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
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
      {/* Docked Footer Info */}
      <footer className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-editorial-border px-6 py-3 shadow-sm text-[8px] uppercase font-bold tracking-widest text-editorial-meta flex items-center justify-center gap-6 whitespace-nowrap">
        <span>Curated Phrasals: {PHRASAL_VERBS_DATA.length} Entries</span>
        <div className="w-[1px] h-3 bg-editorial-border" />
        <span>Academic Lexicon Archive</span>
      </footer>
    </div>
  );
};
