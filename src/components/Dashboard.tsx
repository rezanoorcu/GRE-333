
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
  Type
} from 'lucide-react';
import { VOCABULARY_DATA } from '../data';
import { PHRASAL_VERBS_DATA } from '../phrasalVerbsData';
import { IDIOMS_DATA } from '../idiomsData';

interface DashboardProps {
  wordStatus: Record<string, 'new' | 'mastered' | 'review'>;
  bookmarks: Set<string>;
  onNavigate: (view: any) => void;
  currentBlockId: string | null;
}

export const Dashboard: React.FC<DashboardProps> = ({ 
  wordStatus, 
  bookmarks, 
  onNavigate,
  currentBlockId
}) => {
  const allWords = useMemo(() => VOCABULARY_DATA.flatMap(b => b.words), []);
  
  const stats = useMemo(() => {
    const masteredWords = allWords.filter(w => wordStatus[w.word] === 'mastered').length;
    const reviewWords = allWords.filter(w => wordStatus[w.word] === 'review').length;
    const progress = Math.round((masteredWords / allWords.length) * 100);
    
    return {
      masteredWords,
      reviewWords,
      progress,
      totalPhrasalVerbs: PHRASAL_VERBS_DATA.length,
      totalIdioms: IDIOMS_DATA.length,
      bookmarkCount: bookmarks.size
    };
  }, [wordStatus, bookmarks, allWords]);

  const currentBlock = useMemo(() => {
    return VOCABULARY_DATA.find(b => b.id === currentBlockId) || VOCABULARY_DATA[0];
  }, [currentBlockId]);

  const dailyDigest = useMemo(() => {
    // Stable pseudo-random pick for the day
    const dayOfYear = Math.floor(Date.now() / 86400000);
    const wordIdx = dayOfYear % allWords.length;
    const idiomIdx = dayOfYear % IDIOMS_DATA.length;
    
    return {
      word: allWords[wordIdx],
      idiom: IDIOMS_DATA[idiomIdx]
    };
  }, [allWords]);

  return (
    <div className="flex-1 overflow-y-auto p-6 md:p-12 bg-editorial-bg transition-colors duration-300">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Hero Section */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 py-8 border-b border-editorial-border transition-colors">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <LayoutDashboard className="text-editorial-text" size={24} />
              <h1 className="text-4xl md:text-5xl font-serif tracking-tight text-editorial-text italic">
                Scholar's Dashboard
              </h1>
            </div>
            <p className="text-[10px] uppercase tracking-[0.3em] font-black text-editorial-muted">
              Cognitive Progress • Linguistic Mastery • Daily Archive
            </p>
          </motion.div>
          
          <div className="flex items-center gap-12">
            <div className="text-center">
              <p className="text-[10px] uppercase font-black text-editorial-meta mb-1 tracking-tighter">Overall Mastery</p>
              <p className="text-4xl font-serif italic text-editorial-text">{stats.progress}%</p>
            </div>
            <div className="text-center border-l border-editorial-border pl-12">
              <p className="text-[10px] uppercase font-black text-editorial-meta mb-1 tracking-tighter">Bookmarked</p>
              <p className="text-4xl font-serif italic text-editorial-text">{stats.bookmarkCount}</p>
            </div>
          </div>
        </header>

        {/* Core Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white border border-editorial-border p-8 rounded-sm shadow-[4px_4px_0_0_rgba(0,0,0,0.05)] transition-all flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-editorial-text opacity-10 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <Clock className="text-editorial-meta" size={14} />
                <span className="text-[10px] uppercase font-bold tracking-widest text-editorial-meta">Recent Activity</span>
              </div>
              <h2 className="text-2xl font-serif text-editorial-text mb-4">Continue with <span className="italic">{currentBlock.title.split(': ')[1]}</span></h2>
              <div className="h-1.5 w-full bg-editorial-accent rounded-full overflow-hidden mb-8">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${(currentBlock.words.filter(w => wordStatus[w.word] === 'mastered').length / currentBlock.words.length) * 100}%` }}
                  className="h-full bg-editorial-text"
                />
              </div>
            </div>
            <button 
              onClick={() => onNavigate('study')}
              className="w-full py-4 bg-editorial-text text-white text-[10px] uppercase font-bold tracking-[0.2em] rounded-sm hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 transition-all flex items-center justify-center gap-3 relative z-10"
            >
              Resume Study Session <ChevronRight size={14} />
            </button>
          </div>

          {/* Daily Insight */}
          <div className="bg-editorial-text text-white p-8 rounded-sm shadow-xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 rotate-12 scale-150 group-hover:rotate-45 transition-transform">
              <Sparkles size={120} />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6 opacity-60">
                <Sparkles size={14} />
                <span className="text-[10px] uppercase font-bold tracking-widest">Daily Selection</span>
              </div>
              <h3 className="text-sm font-black uppercase tracking-tighter text-[#C7B7A3] mb-2">{dailyDigest.word.word}</h3>
              <p className="text-xl font-serif italic mb-4 leading-relaxed group-hover:translate-x-1 transition-transform">
                “{dailyDigest.word.definition}”
              </p>
            </div>
            <button 
              onClick={() => onNavigate('list')}
              className="mt-6 text-[10px] uppercase font-bold tracking-widest border border-white/20 px-4 py-2 hover:bg-white/10 transition-colors inline-flex w-fit items-center gap-2 relative z-10"
            >
              Explore Dictionary <ChevronRight size={12} />
            </button>
          </div>
        </div>

        {/* Modules Grid */}
        <div>
          <div className="flex items-center gap-2 mb-8">
            <TrendingUp size={16} className="text-editorial-meta" />
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-editorial-meta">Academic Modules</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ModuleCard 
              icon={<GraduationCap size={20} />}
              title="333 High Frequency"
              count={`${stats.masteredWords} / ${allWords.length}`}
              description="Core vocabulary for academic excellence."
              onClick={() => onNavigate('study')}
            />
            <ModuleCard 
              icon={<Sparkles size={20} />}
              title="Phrases & Idioms"
              count={`${stats.totalIdioms} Entries`}
              description="Master idiomatic and phrasal expressions."
              onClick={() => onNavigate('idioms')}
              delay={0.1}
            />
            <ModuleCard 
              icon={<Type size={20} />}
              title="Group Verbs"
              count={`${stats.totalPhrasalVerbs} Units`}
              description="Common phrasal combinations and patterns."
              onClick={() => onNavigate('phrasal-verbs')}
              delay={0.2}
            />
            <ModuleCard 
              icon={<Brain size={20} />}
              title="Practice Lab"
              count={`Active Review`}
              description="Testing and reinforcement through flashcards."
              onClick={() => onNavigate('practice')}
              delay={0.3}
            />
          </div>
        </div>

        {/* Daily Idiom Highlight */}
        <div className="bg-editorial-accent border border-editorial-border p-10 rounded-sm italic font-serif transition-all hover:shadow-inner">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-16 h-16 shrink-0 bg-white border border-editorial-border rounded-full flex items-center justify-center text-editorial-text shadow-sm ring-4 ring-white/50">
              <Sparkles size={32} />
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="text-[10px] font-sans font-black uppercase text-editorial-meta tracking-[0.3em] mb-3 not-italic">Featured Expression</p>
              <h4 className="text-3xl text-editorial-text mb-2">“{dailyDigest.idiom.phrase}”</h4>
              <p className="text-lg text-editorial-muted">{dailyDigest.idiom.meaning}</p>
            </div>
            <button 
              onClick={() => onNavigate('idioms')}
              className="px-8 py-3 bg-white border border-editorial-border text-[9px] uppercase font-black tracking-[0.2em] hover:bg-editorial-text hover:text-white transition-all shrink-0 font-sans not-italic shadow-sm"
            >
              View Full Archive
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ModuleCardProps {
  icon: React.ReactNode;
  title: string;
  count: string;
  description: string;
  onClick: () => void;
  delay?: number;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ icon, title, count, description, onClick, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    onClick={onClick}
    className="bg-white border border-editorial-border p-6 rounded-sm hover:-translate-y-1 hover:shadow-xl transition-all cursor-pointer group"
  >
    <div className="w-10 h-10 bg-editorial-accent rounded-sm flex items-center justify-center text-editorial-text mb-6 group-hover:bg-editorial-text group-hover:text-white transition-colors">
      {icon}
    </div>
    <h3 className="text-sm font-bold text-editorial-text mb-1 tracking-tight">{title}</h3>
    <p className="text-[10px] font-mono text-editorial-meta mb-4">{count}</p>
    <p className="text-xs text-editorial-muted leading-relaxed">
      {description}
    </p>
  </motion.div>
);
