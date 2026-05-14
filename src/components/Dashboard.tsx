
import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import { 
  BookOpen, 
  Sparkles, 
  Brain, 
  GraduationCap, 
  Star, 
  ChevronRight,
  TrendingUp,
  Clock,
  LayoutDashboard,
  Type,
  Newspaper
} from 'lucide-react';
import { VOCABULARY_DATA } from '../data';
import { BARRON_800_DATA } from '../constants/barronData';
import { PHRASAL_VERBS_DATA } from '../phrasalVerbsData';
import { IDIOMS_DATA } from '../idiomsData';

interface DashboardProps {
  wordStatus: Record<string, 'new' | 'mastered' | 'review'>;
  bookmarks: Set<string>;
  onNavigate: (view: any) => void;
  currentBlockId: string | null;
  currentBarronBlockId?: string | null;
}

export const Dashboard: React.FC<DashboardProps> = ({ 
  wordStatus, 
  bookmarks, 
  onNavigate,
  currentBlockId,
}) => {
  const allWords = useMemo(() => [...VOCABULARY_DATA.flatMap(b => b.words), ...BARRON_800_DATA.flatMap(b => b.words)], []);
  const greWords = useMemo(() => VOCABULARY_DATA.flatMap(b => b.words), []);
  const barronWords = useMemo(() => BARRON_800_DATA.flatMap(b => b.words), []);
  
  const stats = useMemo(() => {
    const masteredWords = allWords.filter(w => wordStatus[w.word] === 'mastered').length;
    const greMastered = greWords.filter(w => wordStatus[w.word] === 'mastered').length;
    const barronMastered = barronWords.filter(w => wordStatus[w.word] === 'mastered').length;
    const progress = Math.round((masteredWords / allWords.length) * 100);
    
    return {
      masteredWords,
      greMastered,
      barronMastered,
      progress,
      totalPhrasalVerbs: PHRASAL_VERBS_DATA.length,
      totalIdioms: IDIOMS_DATA.length,
      bookmarkCount: bookmarks.size
    };
  }, [wordStatus, bookmarks, allWords, greWords, barronWords]);

  const currentBlock = useMemo(() => {
    return VOCABULARY_DATA.find(b => b.id === currentBlockId) || VOCABULARY_DATA[0];
  }, [currentBlockId]);

  const dailyDigest = useMemo(() => {
    const dayOfYear = Math.floor(Date.now() / 86400000);
    const wordIdx = dayOfYear % allWords.length;
    const idiomIdx = dayOfYear % IDIOMS_DATA.length;
    
    return {
      word: allWords[wordIdx],
      idiom: IDIOMS_DATA[idiomIdx]
    };
  }, [allWords]);

  return (
    <div className="flex-1 overflow-y-auto bg-editorial-bg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-12 md:px-12 md:py-20">
        <header className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-editorial-accent border border-editorial-border mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-black tracking-widest uppercase text-editorial-meta">System Online</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-serif tracking-tight text-editorial-text leading-[0.9] mb-6">
                Scholar's <span className="italic">Perspective</span>.
              </h1>
              <p className="text-lg md:text-xl text-editorial-muted font-serif italic max-w-lg leading-relaxed">
                A curated environment for the high-performance acquisition of academic lexicon.
              </p>
            </motion.div>
            
            <div className="flex items-center gap-12 bg-white border border-editorial-border p-10 rounded-sm shadow-editorial relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-editorial-accent rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-500" />
              <div className="relative z-10 text-center">
                <p className="text-[9px] uppercase font-black text-editorial-muted mb-2 tracking-widest">Global Progress</p>
                <p className="text-6xl font-serif italic text-editorial-text leading-none">{stats.progress}<span className="text-2xl not-italic opacity-30">%</span></p>
              </div>
              <div className="relative z-10 h-10 w-px bg-editorial-border" />
              <div className="relative z-10 text-center">
                <p className="text-[9px] uppercase font-black text-editorial-muted mb-2 tracking-widest">Mastery</p>
                <p className="text-6xl font-serif italic text-editorial-text leading-none">{stats.masteredWords}</p>
              </div>
            </div>
          </div>
        </header>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 mb-20">
          {/* Main Study Block */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={() => onNavigate('study')}
            className="md:col-span-2 md:row-span-2 bg-white border border-editorial-border p-10 rounded-sm shadow-editorial hover:shadow-editorial-lg transition-all cursor-pointer group relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <GraduationCap size={160} />
            </div>
            
            <div>
              <div className="flex items-center gap-2 mb-8">
                <Clock className="text-editorial-meta" size={14} />
                <span className="text-[10px] uppercase font-bold tracking-widest text-editorial-meta">Deep Work Mode</span>
              </div>
              <h2 className="text-4xl font-serif text-editorial-text mb-6">Continue <span className="italic">{currentBlock.title.split(': ')[1]}</span></h2>
              <p className="text-editorial-muted text-sm max-w-sm mb-10 leading-relaxed">
                Resume your focus on this lexical block. You have mastered 
                <span className="text-editorial-text font-bold mx-1">
                  {currentBlock.words.filter(w => wordStatus[w.word] === 'mastered').length}
                </span> 
                out of {currentBlock.words.length} terms in this unit.
              </p>
            </div>

            <div className="space-y-6">
              <div className="h-1 w-full bg-editorial-accent relative overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${(currentBlock.words.filter(w => wordStatus[w.word] === 'mastered').length / currentBlock.words.length) * 100}%` }}
                  className="h-full bg-editorial-text"
                />
              </div>
              <div className="flex items-center gap-3 text-editorial-text font-black text-[10px] uppercase tracking-widest group-hover:gap-5 transition-all">
                Enter Study Session <ChevronRight size={14} />
              </div>
            </div>
          </motion.div>

          {/* Daily Selection */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 bg-editorial-text text-white p-10 rounded-sm shadow-editorial-lg flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute -bottom-8 -right-8 p-4 opacity-10 rotate-12 scale-150 group-hover:rotate-[30deg] transition-transform duration-700">
              <Sparkles size={180} />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-8 opacity-60">
                <Sparkles size={14} />
                <span className="text-[10px] uppercase font-bold tracking-widest">Thought for the Day</span>
              </div>
              <h3 className="text-xl font-black uppercase tracking-tighter text-editorial-meta mb-3">{dailyDigest.word.word}</h3>
              <p className="text-3xl font-serif italic mb-6 leading-tight max-w-md">
                “{dailyDigest.word.definition}”
              </p>
            </div>
            
            <button 
              onClick={() => onNavigate('list')}
              className="mt-6 text-[10px] uppercase font-bold tracking-[0.3em] bg-white text-editorial-text px-6 py-3 hover:bg-neutral-100 transition-colors inline-flex w-fit items-center gap-3 relative z-10"
            >
              Lexicon Search <ChevronRight size={12} />
            </button>
          </motion.div>

          {/* Mini Stats Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1 bg-white border border-editorial-border p-8 rounded-sm hover:-translate-y-1 transition-all group"
          >
            <div className="flex items-center gap-2 mb-6">
              <Star className="text-editorial-meta" size={14} />
              <span className="text-[10px] uppercase font-black tracking-widest text-editorial-meta">Vault</span>
            </div>
            <div className="mb-4">
              <p className="text-4xl font-serif italic text-editorial-text leading-none mb-2">{stats.bookmarkCount}</p>
              <p className="text-[9px] uppercase font-black tracking-widest text-editorial-meta">Curated Units</p>
            </div>
            <p className="text-xs text-editorial-muted italic">Important terms saved across all modules.</p>
          </motion.div>

          {/* Small Feature Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            onClick={() => onNavigate('editorial')}
            className="md:col-span-1 bg-editorial-accent border border-editorial-border p-8 rounded-sm hover:-translate-y-1 transition-all cursor-pointer group"
          >
            <div className="flex items-center gap-2 mb-6">
              <Newspaper className="text-editorial-meta" size={14} />
              <span className="text-[10px] uppercase font-black tracking-widest text-editorial-meta">Analysis</span>
            </div>
            <p className="text-xl font-serif text-editorial-text mb-4 leading-[1.1]">The <span className="italic">Editorial</span> Reader.</p>
            <div className="inline-flex items-center gap-2 text-editorial-text font-black text-[9px] uppercase tracking-widest group-hover:translate-x-1 transition-transform">
              Launch <ChevronRight size={12} />
            </div>
          </motion.div>
        </div>

        {/* Categories Section */}
        <div>
          <div className="flex items-center justify-between gap-4 mb-12">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-editorial-text" />
              <span className="text-[11px] uppercase font-black tracking-[0.4em] text-editorial-text">Strategic Modules</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ModuleCard 
              icon={<GraduationCap size={20} />}
              title="GRE Elite"
              count={stats.greMastered}
              total={greWords.length}
              description="High-frequency academic terms."
              onClick={() => onNavigate('study')}
            />
            <ModuleCard 
              icon={<div className="w-[20px] h-[20px] rounded-sm bg-editorial-text text-white flex items-center justify-center text-xs font-black">B</div>}
              title="Barron"
              count={stats.barronMastered}
              total={barronWords.length}
              description="Comprehensive lexical archive."
              onClick={() => onNavigate('barron-study')}
              delay={0.1}
            />
            <ModuleCard 
              icon={<Sparkles size={20} />}
              title="Idioms"
              count={stats.totalIdioms}
              description="Natural linguistic expressions."
              onClick={() => onNavigate('idioms')}
              delay={0.2}
            />
            <ModuleCard 
              icon={<Brain size={20} />}
              title="Lab"
              count="Active"
              description="Performance-based testing."
              onClick={() => onNavigate('practice')}
              delay={0.3}
            />
          </div>
        </div>

        {/* Editorial Feature Quote */}
        <div className="mt-24 border-t border-editorial-border py-20 flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
          <div className="w-1.5 h-1.5 rounded-full bg-editorial-text opacity-20" />
          <p className="text-2xl md:text-3xl font-serif italic text-editorial-muted max-w-4xl text-balance leading-relaxed">
            "The limit of my language means the limit of my world. Expand yours with precision, intent, and discipline."
          </p>
        </div>
      </div>
    </div>
  );
};

interface ModuleCardProps {
  icon: React.ReactNode;
  title: string;
  count: string | number;
  total?: number;
  description: string;
  onClick: () => void;
  delay?: number;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ icon, title, count, total, description, onClick, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    onClick={onClick}
    className="bg-white border border-editorial-border p-8 rounded-sm hover:-translate-y-1 hover:shadow-editorial transition-all cursor-pointer group flex flex-col items-start"
  >
    <div className="w-12 h-12 bg-editorial-accent rounded-sm flex items-center justify-center text-editorial-text mb-8 group-hover:bg-editorial-text group-hover:text-white transition-all duration-300">
      {icon}
    </div>
    <div className="mb-4">
      <h3 className="text-base font-bold text-editorial-text tracking-tight mb-1">{title}</h3>
      <p className="text-[10px] font-black tracking-widest uppercase text-editorial-meta">
        {total ? `${count} / ${total}` : count}
      </p>
    </div>
    <p className="text-xs text-editorial-muted leading-relaxed italic mb-8">
      {description}
    </p>
    <div className="mt-auto inline-flex items-center gap-2 text-editorial-text font-black text-[8px] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
      Explore <ChevronRight size={10} />
    </div>
  </motion.div>
);
