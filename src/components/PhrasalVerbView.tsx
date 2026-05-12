
import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Search, Type, X } from 'lucide-react';
import { PHRASAL_VERBS_DATA } from '../phrasalVerbsData';

export const PhrasalVerbView: React.FC = () => {
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
    <div className="p-6 md:p-12 max-w-6xl mx-auto w-full bg-editorial-bg overflow-y-auto h-full">
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
            className="bg-transparent border-b border-editorial-border py-2 text-sm font-bold uppercase tracking-widest text-editorial-muted focus:outline-none focus:border-editorial-text cursor-pointer"
          >
            <option value="">All Categories</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 transition-colors">
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
};
