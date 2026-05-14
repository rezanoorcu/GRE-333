
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
    <div className="flex flex-col h-full bg-editorial-bg relative overflow-y-auto custom-scrollbar">
      {/* Header Hub - Integrated into layout instead of fixed top */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 pt-12 mb-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-editorial-border pb-8">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-editorial-text rounded-sm text-white shadow-lg">
              <Type size={20} />
            </div>
            <div>
              <h2 className="text-3xl font-serif italic text-editorial-text leading-none mb-1">
                Group Verbs
              </h2>
              <p className="text-[10px] uppercase tracking-[0.4em] font-black text-editorial-meta">Lexical Phrasal Registry</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:flex-initial">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-editorial-meta" size={14} />
              <input
                type="text"
                placeholder="Search archive..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-11 pr-4 py-2 bg-white border border-editorial-border text-xs focus:outline-none focus:ring-1 focus:ring-editorial-text transition-all rounded-full text-editorial-text w-full md:w-64"
              />
            </div>
            <select 
              value={selectedCategory || ''}
              onChange={(e) => setSelectedCategory(e.target.value || null)}
              className="bg-white px-4 py-2 text-[10px] uppercase font-black tracking-widest text-editorial-text border border-editorial-border rounded-full focus:outline-none focus:ring-1 focus:ring-editorial-text cursor-pointer hover:bg-editorial-accent transition-colors appearance-none min-w-[160px]"
            >
              <option value="">All Categories</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVerbs.map((pv, idx) => (
            <motion.div 
              key={pv.verb + idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.02 }}
              className="group bg-white border border-editorial-border p-8 rounded-sm shadow-editorial hover:shadow-editorial-lg hover:-translate-y-1 transition-all relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Type size={60} />
              </div>
              <div className="flex flex-col h-full relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[10px] font-black uppercase tracking-widest px-2 py-1 bg-editorial-accent border border-editorial-border rounded-sm">{pv.category}</span>
                </div>
                <h3 className="text-3xl font-serif italic text-editorial-text mb-4 group-hover:text-editorial-muted transition-colors leading-tight">{pv.verb}</h3>
                <p className="text-base font-medium text-editorial-text mb-8 flex-1 border-l-2 border-editorial-accent pl-6 py-2 leading-relaxed">
                  {pv.meaning}
                </p>
                <div className="bg-neutral-50/50 border border-editorial-border p-5 rounded-sm">
                  <p className="text-[9px] uppercase font-black tracking-widest text-editorial-meta mb-3">Usage Example</p>
                  <p className="text-sm leading-relaxed italic text-editorial-muted font-serif">
                    “{pv.example}”
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
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
      {/* Floating Footer Info */}
      <footer className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-white/80 backdrop-blur-md border border-editorial-border px-6 py-2 transition-all rounded-full shadow-lg text-[8px] uppercase font-bold tracking-widest text-editorial-meta flex items-center gap-6 whitespace-nowrap">
        <span>Curated Phrasals: {PHRASAL_VERBS_DATA.length} Entries</span>
        <div className="w-[1px] h-3 bg-editorial-border" />
        <span>Academic Lexicon Archive</span>
      </footer>
    </div>
  );
};
