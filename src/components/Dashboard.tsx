/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo, useState, useEffect } from 'react';
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
import { TrendingUp, Target, Award, BookOpen, Database, Brain, Wifi } from 'lucide-react';

interface DashboardProps {
  blocks: WordBlock[];
  wordStatus: Record<string, 'new' | 'mastered' | 'review'>;
}

export const Dashboard: React.FC<DashboardProps> = ({ 
  blocks, 
  wordStatus
}) => {
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

  const [apiHealth, setApiHealth] = useState<{status: string, env: string} | null>(null);

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const res = await fetch('/api/health');
        if (res.ok) {
          const data = await res.json();
          setApiHealth({ status: data.status, env: data.environment });
        } else {
          setApiHealth({ status: `error-${res.status}`, env: 'server' });
        }
      } catch (err) {
        setApiHealth({ status: 'unreachable', env: 'network' });
      }
    };
    checkHealth();
  }, []);

  return (
    <div className="p-6 md:p-12 max-w-7xl mx-auto w-full pb-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-editorial-border pb-8">
        <div>
          <h2 className="text-3xl md:text-5xl font-serif tracking-tight text-editorial-text mb-2 md:mb-4">Mastery Analytics</h2>
          <p className="text-editorial-muted uppercase text-[8px] md:text-[10px] tracking-[0.2em] font-bold">Progress Visualization Dashboard</p>
        </div>
        {apiHealth && (
          <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-[9px] uppercase font-bold tracking-widest ${apiHealth.status === 'ok' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 'bg-red-50 text-red-600 border border-red-100'}`}>
            <div className={`w-1.5 h-1.5 rounded-full ${apiHealth.status === 'ok' ? 'bg-emerald-500 animate-pulse' : 'bg-red-500'}`} />
            Tactical API: {apiHealth.status} ({apiHealth.env})
          </div>
        )}
      </div>

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
