import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Brain, 
  CheckCircle2, 
  AlertCircle, 
  Volume2, 
  Star, 
  Loader2, 
  ChevronLeft, 
  ChevronRight,
  TrendingUp,
  Award,
  Zap,
  RotateCcw,
  BookOpen,
  Search
} from 'lucide-react';
import { WordEntry } from '../types';
import { speakWord } from '../services/aiService';

type WordStatus = 'new' | 'mastered' | 'review';

interface PracticeModeProps {
  allWords: WordEntry[];
  wordStatus: Record<string, WordStatus>;
  onToggleStatus: (word: string, status: WordStatus) => void;
  bookmarks: Set<string>;
  onToggleBookmark: (word: string) => void;
  preferences: any;
}

interface WordStats {
  attempts: number;
  correct: number;
  weight: number; // For adaptive selection
}

export const PracticeMode: React.FC<PracticeModeProps> = ({ 
  allWords, 
  wordStatus, 
  onToggleStatus, 
  bookmarks, 
  onToggleBookmark,
  preferences
}) => {
  const [sessionWords, setSessionWords] = useState<WordEntry[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSolution, setShowSolution] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [sessionCompleted, setSessionCompleted] = useState(false);
  const [sessionStats, setSessionStats] = useState<Record<string, WordStats>>(() => {
    const saved = localStorage.getItem('lexicon_stats');
    return saved ? JSON.parse(saved) : {};
  });

  // Adaptive Selection: Prioritize 'review' and words with poor performance
  const generateSession = useCallback(() => {
    // Filter words: 'review' status, or 'new' status. 'mastered' words appear less frequently.
    const reviewWords = allWords.filter(w => wordStatus[w.word] === 'review');
    const newWords = allWords.filter(w => !wordStatus[w.word] || wordStatus[w.word] === 'new');
    const masteredWords = allWords.filter(w => wordStatus[w.word] === 'mastered');

    // Create a pool with weights
    // Review words have high weight, Mastered have low
    let pool: WordEntry[] = [];
    
    // Always include a good chunk of review words if available
    if (reviewWords.length > 0) {
      pool.push(...reviewWords.sort(() => Math.random() - 0.5).slice(0, 15));
    }
    
    // Add some new words
    pool.push(...newWords.sort(() => Math.random() - 0.5).slice(0, 10));
    
    // Add a few mastered words to keep them fresh
    if (masteredWords.length > 0) {
      pool.push(...masteredWords.sort(() => Math.random() - 0.5).slice(0, 5));
    }

    // Shuffle final pool
    setSessionWords(pool.sort(() => Math.random() - 0.5).slice(0, preferences.sessionLength));
    setCurrentIndex(0);
    setScore({ correct: 0, total: 0 });
    setSessionCompleted(false);
    setShowSolution(false);
  }, [allWords, wordStatus]);

  useEffect(() => {
    generateSession();
  }, []); // Only on mount

  const currentWord = sessionWords[currentIndex];

  const updateStats = (word: string, isCorrect: boolean) => {
    setSessionStats(prev => {
      const stats = prev[word] || { attempts: 0, correct: 0, weight: 1.0 };
      const newStats = {
        attempts: stats.attempts + 1,
        correct: stats.correct + (isCorrect ? 1 : 0),
        weight: isCorrect ? Math.max(0.1, stats.weight - 0.2) : Math.min(2.0, stats.weight + 0.3)
      };
      const updated = { ...prev, [word]: newStats };
      localStorage.setItem('lexicon_stats', JSON.stringify(updated));
      return updated;
    });
    
    setScore(prev => ({ 
      correct: prev.correct + (isCorrect ? 1 : 0), 
      total: prev.total + 1 
    }));
  };

  const handleNext = () => {
    if (currentIndex + 1 >= sessionWords.length) {
      setSessionCompleted(true);
    } else {
      setCurrentIndex(prev => prev + 1);
      setShowSolution(false);
      setIsSpeaking(false);
    }
  };

  const handleAssessment = (isCorrect: boolean) => {
    updateStats(currentWord.word, isCorrect);
    
    // Update global status based on performance
    if (isCorrect && (wordStatus[currentWord.word] !== 'mastered')) {
      // If they got it right twice in a row (conceptually), we could mark it mastered
      // For now, let's just mark it as handled
      if (wordStatus[currentWord.word] === 'review') {
        onToggleStatus(currentWord.word, 'mastered');
      }
    } else if (!isCorrect) {
      onToggleStatus(currentWord.word, 'review');
    }

    handleNext();
  };

  const handleSpeak = () => {
    if (isSpeaking || !currentWord) return;
    setIsSpeaking(true);
    speakWord(currentWord.word, () => setIsSpeaking(false), preferences.pronunciationSpeed);
  };

  useEffect(() => {
    if (preferences.autoPlayAudio && showSolution) {
      handleSpeak();
    }
  }, [currentIndex, showSolution, preferences.autoPlayAudio]);

  // Determine question type based on performance/stats
  const questionType = useMemo(() => {
    if (!currentWord) return 'def';
    const stats = sessionStats[currentWord.word] || { attempts: 0 };
    // If we've failed this a lot, prefer definition prompts
    if (stats.attempts > 3 && (stats.correct / stats.attempts < 0.5)) return 'def';
    
    const types = ['def', 'recall', 'context'];
    if (currentWord.synonyms?.length) types.push('syn');
    
    const seed = currentWord.word.length + currentIndex;
    return types[seed % types.length];
  }, [currentWord, currentIndex, sessionStats]);

  if (sessionCompleted) {
    const percentage = Math.round((score.correct / sessionWords.length) * 100);
    
    // Streak logic in result view
    const updateStreak = () => {
      const today = new Date().toLocaleDateString();
      const lastDate = localStorage.getItem('lexicon_streak_date');
      let streak = parseInt(localStorage.getItem('lexicon_streak') || '0', 10);
      
      if (lastDate !== today) {
        if (lastDate) {
          const last = new Date(lastDate);
          const current = new Date();
          const diffDays = Math.floor((current.getTime() - last.getTime()) / (1000 * 60 * 60 * 24));
          if (diffDays === 1) streak += 1;
          else if (diffDays > 1) streak = 1;
        } else {
          streak = 1;
        }
        localStorage.setItem('lexicon_streak', streak.toString());
        localStorage.setItem('lexicon_streak_date', today);
      }
      return streak;
    };
    const currentStreak = updateStreak();

    return (
      <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 bg-editorial-bg text-center transition-colors">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-md w-full bg-white border-2 border-editorial-text p-12 shadow-2xl rounded-sm"
        >
          <div className="flex justify-center mb-8 relative">
            <div className="p-4 bg-editorial-accent rounded-full text-editorial-text">
              <Award size={48} />
            </div>
            {currentStreak > 0 && (
              <div className="absolute -top-2 -right-2 bg-editorial-text text-white px-3 py-1 rounded-full text-[10px] font-black tracking-widest flex items-center gap-1 shadow-lg">
                <Zap size={10} className="fill-current" /> {currentStreak} DAY STREAK
              </div>
            )}
          </div>
          <h2 className="text-3xl font-serif italic text-editorial-text mb-2">Practice Session Finished</h2>
          <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-editorial-meta mb-8 border-b border-editorial-border pb-4">Performance Assessment</p>
          
          <div className="grid grid-cols-2 gap-4 mb-10">
            <div className="bg-neutral-50 p-6 rounded-sm border border-editorial-border">
              <p className="text-[8px] uppercase tracking-widest text-editorial-muted mb-1">Accuracy</p>
              <p className="text-3xl font-serif text-editorial-text">{percentage}%</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-sm border border-editorial-border">
              <p className="text-[8px] uppercase tracking-widest text-editorial-muted mb-1">Mastered</p>
              <p className="text-3xl font-serif text-editorial-text">{score.correct}/{sessionWords.length}</p>
            </div>
          </div>

          <button 
            onClick={generateSession}
            className="w-full py-4 bg-editorial-text text-white text-[10px] uppercase font-bold tracking-[0.2em] rounded-sm hover:-translate-y-1 transition-all shadow-xl mb-4"
          >
            Initiate New Session
          </button>
          <button 
            onClick={() => window.location.reload()}
            className="w-full py-4 border border-editorial-border text-editorial-text text-[10px] uppercase font-bold tracking-[0.2em] rounded-sm hover:bg-neutral-50 bg-transparent transition-colors"
          >
            Review Lexicon
          </button>
        </motion.div>
      </div>
    );
  }

  if (!currentWord) return (
    <div className="flex-1 flex items-center justify-center bg-editorial-bg">
      <Loader2 className="animate-spin text-editorial-meta" size={40} />
    </div>
  );

  return (
    <div className="flex-1 flex flex-col bg-editorial-bg overflow-hidden relative transition-colors">
      <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 overflow-y-auto">
        <div className="max-w-3xl w-full">
          <div className="mb-8 md:mb-12 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-editorial-muted">
            <div className="flex items-center gap-3">
              <Zap size={14} className="text-editorial-text" />
              <span>Session Progress</span>
            </div>
            <span>{currentIndex + 1} / {sessionWords.length}</span>
          </div>
          
          <div className="h-1 w-full bg-editorial-border mb-12 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-editorial-text"
              initial={{ width: 0 }}
              animate={{ width: `${((currentIndex + 1) / sessionWords.length) * 100}%` }}
            />
          </div>

          <AnimatePresence mode="wait">
            {!showSolution ? (
              <motion.div
                key="question"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col items-center"
              >
                <div className="w-full bg-white border-2 border-editorial-border p-10 md:p-20 shadow-xl rounded-sm text-center mb-12 min-h-[350px] flex flex-col justify-center relative">
                   <p className="absolute top-6 left-1/2 -translate-x-1/2 text-[9px] uppercase tracking-[0.4em] font-black text-editorial-meta opacity-40">
                    {questionType === 'def' && 'Identify word from definition'}
                    {questionType === 'recall' && 'Define this lexeme'}
                    {questionType === 'context' && 'Contextual completion'}
                    {questionType === 'syn' && 'Architectural Synonym Match'}
                   </p>

                   {questionType === 'def' && (
                     <h2 className="text-xl md:text-3xl font-serif italic text-editorial-text leading-relaxed">“{currentWord.definition}”</h2>
                   )}
                   {questionType === 'recall' && (
                     <h2 className="text-4xl md:text-7xl font-serif text-editorial-text select-none">{currentWord.word}</h2>
                   )}
                   {questionType === 'context' && (
                     <h2 className="text-xl md:text-3xl font-serif italic text-editorial-text leading-relaxed">
                       “{currentWord.example.replace(new RegExp(currentWord.word, 'gi'), '__________')}”
                     </h2>
                   )}
                   {questionType === 'syn' && (
                     <div className="space-y-6">
                        <div className="flex flex-wrap justify-center gap-3">
                          {currentWord.synonyms?.slice(0, 3).map(s => (
                            <span key={s} className="px-4 py-2 bg-editorial-accent border border-editorial-border rounded-sm text-lg font-serif italic text-editorial-text">{s}</span>
                          ))}
                        </div>
                        <p className="text-xs text-editorial-muted italic">Which word fits these synonyms?</p>
                     </div>
                   )}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                  <button 
                    onClick={() => setShowSolution(true)}
                    className="flex-1 sm:flex-none px-12 py-5 bg-editorial-text text-white text-[10px] md:text-xs uppercase font-bold tracking-[0.3em] rounded-sm hover:-translate-y-1 shadow-xl transition-all"
                  >
                    Reveal Solution
                  </button>
                  <button 
                    onClick={handleNext}
                    className="flex-1 sm:flex-none px-12 py-5 border-2 border-editorial-border text-editorial-meta text-[10px] md:text-xs uppercase font-bold tracking-[0.3em] rounded-sm hover:bg-white/10 transition-all"
                  >
                    Skip Entry
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="solution"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full"
              >
                <div className="bg-white border-4 border-editorial-text p-8 md:p-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] rounded-sm relative">
                  <div className="absolute -top-4 -right-4 flex gap-2">
                    <button 
                      onClick={() => onToggleBookmark(currentWord.word)}
                      className={`p-3 rounded-full border-2 transition-all shadow-lg ${bookmarks.has(currentWord.word) ? 'bg-editorial-text text-white border-editorial-text' : 'bg-white border-editorial-border text-editorial-meta hover:text-editorial-text'}`}
                    >
                      <Star size={20} fill={bookmarks.has(currentWord.word) ? "currentColor" : "none"} />
                    </button>
                    <button 
                      onClick={handleSpeak}
                      className="p-3 bg-white border-2 border-editorial-border text-editorial-meta rounded-full shadow-lg hover:text-editorial-text hover:border-editorial-text transition-all"
                    >
                      {isSpeaking ? <Loader2 size={20} className="animate-spin" /> : <Volume2 size={20} />}
                    </button>
                    <a 
                      href={`https://www.collinsdictionary.com/dictionary/english/${currentWord.word}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white border-2 border-editorial-border text-editorial-meta rounded-full shadow-lg hover:text-editorial-text hover:border-editorial-text transition-all flex items-center justify-center"
                      title="Open in Collins Dictionary"
                    >
                      <Search size={20} />
                    </a>
                  </div>

                  <div className="text-center mb-10 pb-10 border-b border-editorial-border">
                    <p className="text-[10px] uppercase tracking-widest text-editorial-meta mb-2">Lexeme Solution</p>
                    <h3 className="text-4xl md:text-7xl font-serif text-editorial-text mb-2">{currentWord.word}</h3>
                    <div className="flex justify-center items-center gap-4 text-xs font-mono text-editorial-meta overflow-hidden">
                      <span className="truncate max-w-xs">{currentWord.context}</span>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <p className="text-[9px] uppercase font-bold tracking-widest text-editorial-meta mb-2">Primary Definition</p>
                      <p className="text-xl md:text-2xl font-serif leading-relaxed text-editorial-text">“{currentWord.definition}”</p>
                    </div>
                    <div>
                      <p className="text-[9px] uppercase font-bold tracking-widest text-editorial-meta mb-2">Contextual Application</p>
                      <p className="text-base md:text-lg italic text-editorial-muted leading-relaxed">“{currentWord.example}”</p>
                    </div>
                  </div>

                  <div className="mt-12 pt-12 border-t-2 border-dashed border-editorial-border grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <button 
                      onClick={() => handleAssessment(true)}
                      className="group py-5 bg-emerald-600 text-white text-[10px] uppercase font-bold tracking-widest rounded-sm hover:bg-emerald-700 transition-all flex items-center justify-center gap-3 shadow-xl"
                    >
                      <CheckCircle2 size={18} className="group-hover:scale-110 transition-transform" />
                      Correct Assessment
                    </button>
                    <button 
                      onClick={() => handleAssessment(false)}
                      className="group py-5 bg-red-800 text-white text-[10px] uppercase font-bold tracking-widest rounded-sm hover:bg-red-900 transition-all flex items-center justify-center gap-3 shadow-xl"
                    >
                      <AlertCircle size={18} className="group-hover:scale-110 transition-transform" />
                      Incorrect / Review
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-white/90 backdrop-blur-md border border-editorial-border px-6 py-2.5 transition-all rounded-full shadow-lg flex items-center justify-between gap-8 shrink-0 w-fit min-w-[320px]">
        <div className="flex gap-4 border-r border-editorial-border pr-6">
          <div className="flex items-center gap-2">
             <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
             <div className="flex flex-col">
                <span className="text-[8px] font-black uppercase tracking-tighter text-editorial-text">Correct</span>
                <span className="text-[10px] font-mono font-bold leading-none">{score.correct}</span>
             </div>
          </div>
          <div className="flex items-center gap-2">
             <div className="h-1.5 w-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
             <div className="flex flex-col">
                <span className="text-[8px] font-black uppercase tracking-tighter text-editorial-text">Review</span>
                <span className="text-[10px] font-mono font-bold leading-none">{score.total - score.correct}</span>
             </div>
          </div>
        </div>
        
        <button 
          onClick={() => {
            if (confirm('Abandon current practice session?')) {
              window.location.reload();
            }
          }}
          className="flex items-center gap-2 text-[8px] uppercase font-bold tracking-widest text-editorial-muted hover:text-editorial-text transition-colors"
        >
          <RotateCcw size={12} /> <span className="hidden sm:inline">Abort Session</span>
        </button>
      </div>
    </div>
  );
};
