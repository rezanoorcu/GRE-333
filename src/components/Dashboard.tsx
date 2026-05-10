/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo } from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell,
  Legend
} from 'recharts';
import { motion } from 'motion/react';
import { WordBlock } from '../types';
import { TrendingUp, Target, Award, BookOpen, Database, CloudDownload, RefreshCw, CheckCircle2, Wifi, WifiOff } from 'lucide-react';

interface DashboardProps {
  blocks: WordBlock[];
  wordStatus: Record<string, 'new' | 'mastered' | 'review'>;
  isSyncing?: boolean;
  syncProgress?: number;
  isOfflineReady?: boolean;
  onPerformSync?: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ 
  blocks, 
  wordStatus,
  isSyncing = false,
  syncProgress = 0,
  isOfflineReady = false,
  onPerformSync
}) => {
  const [isOnline, setIsOnline] = React.useState(navigator.onLine);

  React.useEffect(() => {
    const handleStatusChange = () => setIsOnline(navigator.onLine);
    window.addEventListener('online', handleStatusChange);
    window.addEventListener('offline', handleStatusChange);
    return () => {
      window.removeEventListener('online', handleStatusChange);
      window.removeEventListener('offline', handleStatusChange);
    };
  }, []);

  const allWords = useMemo(() => blocks.flatMap(b => b.words), [blocks]);
  
  const stats = useMemo(() => {
    const total = allWords.length;
    const mastered = allWords.filter(w => wordStatus[w.word] === 'mastered').length;
    const review = allWords.filter(w => wordStatus[w.word] === 'review').length;
    const newWords = total - mastered - review;
    
    return {
      total,
      mastered,
      review,
      newWords,
      masteryRate: ((mastered / total) * 100).toFixed(1)
    };
  }, [allWords, wordStatus]);

  const blockData = useMemo(() => {
    return blocks.map((block, idx) => {
      const mastered = block.words.filter(w => wordStatus[w.word] === 'mastered').length;
      const review = block.words.filter(w => wordStatus[w.word] === 'review').length;
      return {
        name: `Block ${idx + 1}`,
        mastered,
        review,
        total: block.words.length
      };
    });
  }, [blocks, wordStatus]);

  const pieData = [
    { name: 'Mastered', value: stats.mastered, color: '#1a1a1a' },
    { name: 'Review', value: stats.review, color: '#d97706' },
    { name: 'New', value: stats.newWords, color: '#e5e7eb' },
  ];

  return (
    <div className="p-6 md:p-12 max-w-7xl mx-auto w-full pb-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-editorial-border pb-8">
        <div>
          <h2 className="text-3xl md:text-5xl font-serif tracking-tight text-editorial-text mb-2 md:mb-4">Mastery Analytics</h2>
          <p className="text-editorial-muted uppercase text-[8px] md:text-[10px] tracking-[0.2em] font-bold">Progress Visualization Dashboard</p>
        </div>
        <div className={`flex items-center gap-3 px-3 py-1.5 rounded-full border ${isOnline ? 'border-emerald-100 bg-emerald-50 text-emerald-700' : 'border-amber-100 bg-amber-50 text-amber-700'}`}>
          {isOnline ? <Wifi size={14} /> : <WifiOff size={14} />}
          <span className="text-[10px] uppercase font-black tracking-widest">{isOnline ? 'Network Active' : 'Offline Mode'}</span>
        </div>
      </div>

      {/* Sync Control Module */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 bg-white border-2 border-editorial-text p-6 md:p-10 rounded-sm shadow-xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
          <Database size={120} />
        </div>
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-xl">
            <h3 className="text-2xl font-serif italic mb-2">Tactical Readiness Command</h3>
            <p className="text-sm text-editorial-muted font-serif italic mb-4 leading-relaxed">
              Synchronize the entire Lexicon database to your device for 100% offline access. This caches all vocabulary, group verbs, and the latest intelligence feed into your local tactical storage.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className={isOfflineReady ? 'text-emerald-500' : 'text-neutral-300'} />
                <span className="text-[10px] uppercase font-bold tracking-widest text-editorial-meta">Deep Cache Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <Database size={14} className="text-editorial-text" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-editorial-meta">~2.4MB Local Storage</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 min-w-[240px]">
            {isSyncing ? (
              <div className="space-y-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[10px] uppercase font-black tracking-widest">Synchronizing...</span>
                  <span className="text-[10px] font-mono">{syncProgress}%</span>
                </div>
                <div className="h-2 w-full bg-neutral-100 rounded-full overflow-hidden border border-editorial-border">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${syncProgress}%` }}
                    className="h-full bg-editorial-text"
                  />
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <button 
                  onClick={onPerformSync}
                  className="group relative px-6 py-4 bg-editorial-text text-white text-[10px] uppercase font-bold tracking-[0.3em] overflow-hidden rounded-sm transition-all hover:scale-[1.02] flex items-center justify-center gap-3"
                >
                  <CloudDownload size={16} />
                  {isOfflineReady ? 'Sync Latest Intelligence' : 'Download Complete Database'}
                </button>
                <button 
                  onClick={() => {
                    if(confirm("DANGER: This will clear ALL bookmarks and progress. Use only if app is malfunctioning. Proceed?")) {
                      localStorage.clear();
                      indexedDB.deleteDatabase('keyval-store');
                      window.location.reload();
                    }
                  }}
                  className="text-[8px] uppercase tracking-widest font-bold text-red-400 hover:text-red-600 transition-colors py-1 flex items-center justify-center gap-2"
                >
                  <RefreshCw size={10} /> Emergency Storage Flush
                </button>
              </div>
            )}
            {!isSyncing && isOfflineReady && (
              <p className="text-[9px] text-center uppercase tracking-widest font-bold text-emerald-600 flex items-center justify-center gap-2">
                <CheckCircle2 size={10} /> Intelligence Fully Synchronized
              </p>
            )}
          </div>
        </div>
      </motion.div>

      {/* Hero Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <StatCard 
          icon={<Award className="text-editorial-text" size={20} />} 
          label="Mastery Rate" 
          value={`${stats.masteryRate}%`} 
          subtext={`${stats.mastered} lexemes conquered`}
        />
        <StatCard 
          icon={<Target className="text-amber-600" size={20} />} 
          label="In Review" 
          value={stats.review} 
          subtext="Critical reinforcements needed"
        />
        <StatCard 
          icon={<TrendingUp className="text-editorial-meta" size={20} />} 
          label="Remaining" 
          value={stats.newWords} 
          subtext="New frontiers to discover"
        />
         <StatCard 
          icon={<BookOpen className="text-editorial-text" size={20} />} 
          label="Total Database" 
          value={stats.total} 
          subtext="Systematic word count"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Progress Across Blocks */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-8 bg-white border border-editorial-border p-5 md:p-8 shadow-sm rounded-sm"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <h3 className="text-lg font-serif italic text-editorial-text">Systematic Block Progress</h3>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#1a1a1a]" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-editorial-muted">Mastered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-amber-600" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-editorial-muted">Review</span>
              </div>
            </div>
          </div>
          
          <div className="h-[250px] md:h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={blockData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f1f1" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 9, fontWeight: 700, fill: '#6b7280' }} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 9, fontWeight: 700, fill: '#6b7280' }} 
                />
                <Tooltip 
                  content={<CustomTooltip />}
                  cursor={{ fill: 'transparent' }}
                />
                <Bar dataKey="mastered" stackId="a" fill="#1a1a1a" radius={[0, 0, 0, 0]} />
                <Bar dataKey="review" stackId="a" fill="#d97706" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Global Distribution */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-4 bg-white border border-editorial-border p-5 md:p-8 shadow-sm rounded-sm flex flex-col items-center"
        >
          <h3 className="text-lg font-serif italic text-editorial-text mb-6 self-start">Curriculum Distribution</h3>
          <div className="h-[200px] w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  innerRadius={50}
                  outerRadius={70}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend 
                  verticalAlign="bottom" 
                  align="center"
                  iconType="circle"
                  iconSize={8}
                  wrapperStyle={{ paddingTop: '20px' }}
                  formatter={(value) => <span className="text-[9px] font-bold uppercase tracking-widest text-editorial-meta mx-1">{value}</span>}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 text-center border-t border-editorial-border pt-6 w-full">
            <p className="text-3xl font-serif italic text-editorial-text">{stats.mastered}</p>
            <p className="text-[10px] uppercase font-bold tracking-widest text-editorial-meta">Lexemes Mastered</p>
          </div>
        </motion.div>
      </div>

      {/* Mastery Guidelines */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-12 bg-editorial-text text-white p-8 md:p-12 rounded-sm shadow-xl"
      >
        <div className="flex items-center gap-3 mb-8">
          <BookOpen size={24} />
          <h3 className="text-2xl font-serif italic">Lexical Mastery Guidelines</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="space-y-4">
            <h4 className="text-[10px] uppercase font-bold tracking-[0.25em] text-white/60">01. Systematic Recurrence</h4>
            <p className="text-sm border-l-2 border-white/20 pl-4 leading-relaxed font-serif italic text-white/90">
              The brain requires at least seven exposures to a new lexeme to move it from short-term memory to functional mastery. Revisit the "Review" queue daily.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-[10px] uppercase font-bold tracking-[0.25em] text-white/60">02. Semantic Contextualization</h4>
            <p className="text-sm border-l-2 border-white/20 pl-4 leading-relaxed font-serif italic text-white/90">
              Abstraction is the enemy of recall. Always read the "In Practice" examples aloud. Vocalizing the word in context builds emotional and muscle memory.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-[10px] uppercase font-bold tracking-[0.25em] text-white/60">03. The Power of Derivation</h4>
            <p className="text-sm border-l-2 border-white/20 pl-4 leading-relaxed font-serif italic text-white/90">
              Learn the roots. Identifying that "Ambi-" means "both" unlocks dozens of related words across the lexicon. Study derivatives to expand your archive exponentially.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const StatCard = ({ icon, label, value, subtext }: { icon: React.ReactNode, label: string, value: string | number, subtext: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white border border-editorial-border p-6 shadow-sm rounded-sm"
  >
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 bg-editorial-accent rounded-sm">
        {icon}
      </div>
      <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-editorial-meta">{label}</p>
    </div>
    <div className="flex items-baseline gap-2 mb-1">
      <p className="text-4xl font-serif italic text-editorial-text">{value}</p>
    </div>
    <p className="text-[11px] text-editorial-muted italic font-serif leading-none">{subtext}</p>
  </motion.div>
);

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border-2 border-editorial-text p-4 shadow-2xl rounded-sm">
        <p className="text-[11px] font-bold uppercase tracking-widest text-editorial-meta mb-2 border-b border-editorial-border pb-1">{label}</p>
        <div className="space-y-1">
          {payload.map((p: any, i: number) => (
            <div key={i} className="flex items-center justify-between gap-6">
              <span className="text-xs font-medium text-editorial-text">{p.name === 'mastered' ? 'Conquered' : 'Review'}</span>
              <span className="text-xs font-mono font-bold text-editorial-text">{p.value}</span>
            </div>
          ))}
          <div className="pt-1 mt-1 border-t border-editorial-border flex items-center justify-between gap-6">
            <span className="text-xs font-bold text-editorial-text italic font-serif">Total</span>
            <span className="text-xs font-mono font-bold text-editorial-text">{payload[0].payload.total}</span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};
