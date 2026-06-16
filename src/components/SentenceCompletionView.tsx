import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Award, 
  BookOpen, 
  HelpCircle, 
  RefreshCw, 
  ChevronRight, 
  CheckCircle2, 
  AlertCircle,
  Play, 
  Clock, 
  Timer,
  BookMarked,
  Filter,
  BarChart3,
  TrendingUp,
  Inbox,
  Search,
  Check,
  ChevronLeft
} from 'lucide-react';
import { SENTENCE_COMPLETION_DATA, SentenceCompletionQuestion } from '../constants/sentenceCompletionData';

type ViewMode = 'hub' | 'practice' | 'quiz' | 'test' | 'stats' | 'review' | 'dictionary';

interface AnsweredQuestion {
  questionId: string;
  selectedKey: string;
  isCorrect: boolean;
  timestamp: number;
}

export function SentenceCompletionView() {
  const [viewMode, setViewMode] = useState<ViewMode>('hub');
  
  // Custom states
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedKey] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  // User History State
  const [history, setHistory] = useState<AnsweredQuestion[]>(() => {
    try {
      const saved = localStorage.getItem('sc_answer_history');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const saveHistory = (items: AnsweredQuestion[]) => {
    setHistory(items);
    localStorage.setItem('sc_answer_history', JSON.stringify(items));
  };

  // Review Stack State (Incorrect list)
  const [reviewStackIds, setReviewStackIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('sc_review_stack');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const saveReviewStack = (ids: string[]) => {
    setReviewStackIds(ids);
    localStorage.setItem('sc_review_stack', JSON.stringify(ids));
  };

  // Timed Test States
  const [testQuestions, setTestQuestions] = useState<SentenceCompletionQuestion[]>([]);
  const [testTimeLeft, setTestTimeLeft] = useState(600); // 10 minutes default
  const [isTestActive, setIsTestActive] = useState(false);
  const [testAnswers, setTestAnswers] = useState<Record<string, string>>({}); // questionId -> selectedKey

  // Practice Filters
  const [filterDifficulty, setFilterDifficulty] = useState<string | null>(null);
  const [filterType, setFilterType] = useState<string | null>(null);

  // Dictionary Search Query
  const [searchDict, setSearchDict] = useState('');

  // Active Questions for practice based on filters
  const activeQuestions = useMemo(() => {
    return SENTENCE_COMPLETION_DATA.filter(q => {
      if (filterDifficulty && q.difficulty !== filterDifficulty) return false;
      if (filterType && q.type !== filterType) return false;
      return true;
    });
  }, [filterDifficulty, filterType]);

  // Current active question
  const currentQuestionIndexClamped = Math.min(currentQuestionIndex, Math.max(0, activeQuestions.length - 1));
  const currentQuestion = activeQuestions[currentQuestionIndexClamped];

  // Timer Effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (viewMode === 'test' && isTestActive && testTimeLeft > 0) {
      timer = setInterval(() => {
        setTestTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (testTimeLeft === 0 && isTestActive) {
      handleCompleteTest();
    }
    return () => clearInterval(timer);
  }, [viewMode, isTestActive, testTimeLeft]);

  // Handlers for Practice
  const handleSelectAnswer = (key: string) => {
    if (isAnswerSubmitted) return;
    setSelectedKey(key);
  };

  const handleSubmitAnswer = () => {
    if (!selectedAnswer || !currentQuestion) return;
    
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    setIsAnswerSubmitted(true);
    setShowExplanation(true);

    // Save history
    const entry: AnsweredQuestion = {
      questionId: currentQuestion.id,
      selectedKey: selectedAnswer,
      isCorrect,
      timestamp: Date.now()
    };
    saveHistory([...history, entry]);

    // Save to review stack if incorrect, remove if correct
    if (!isCorrect) {
      if (!reviewStackIds.includes(currentQuestion.id)) {
        saveReviewStack([...reviewStackIds, currentQuestion.id]);
      }
    } else {
      saveReviewStack(reviewStackIds.filter(id => id !== currentQuestion.id));
    }
  };

  const handleNextPractice = () => {
    setSelectedKey(null);
    setIsAnswerSubmitted(false);
    setShowExplanation(false);
    if (currentQuestionIndex < activeQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setCurrentQuestionIndex(0); // Loop back
    }
  };

  const handlePrevPractice = () => {
    setSelectedKey(null);
    setIsAnswerSubmitted(false);
    setShowExplanation(false);
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    } else {
      setCurrentQuestionIndex(activeQuestions.length - 1); // Loop to end
    }
  };

  // Start Test Module
  const handleStartTest = () => {
    // Shuffle and pick 10 questions
    const shuffled = [...SENTENCE_COMPLETION_DATA].sort(() => 0.5 - Math.random());
    setTestQuestions(shuffled.slice(0, 10));
    setTestAnswers({});
    setTestTimeLeft(600); // 10 minutes
    setIsTestActive(true);
    setViewMode('test');
    setCurrentQuestionIndex(0);
  };

  const handleCompleteTest = () => {
    setIsTestActive(false);
    
    // Save test results to history
    const newHistoryEntries = testQuestions.map(q => {
      const selected = testAnswers[q.id];
      const isCorrect = selected === q.correctAnswer;
      return {
        questionId: q.id,
        selectedKey: selected || '',
        isCorrect,
        timestamp: Date.now()
      };
    });

    saveHistory([...history, ...newHistoryEntries]);

    // Recalculate review stack
    const failedIds = newHistoryEntries.filter(e => !e.isCorrect).map(e => e.questionId);
    const passedIds = newHistoryEntries.filter(e => e.isCorrect).map(e => e.questionId);
    
    let updatedStack = [...reviewStackIds];
    failedIds.forEach(id => {
      if (!updatedStack.includes(id)) updatedStack.push(id);
    });
    updatedStack = updatedStack.filter(id => !passedIds.includes(id));
    saveReviewStack(updatedStack);

    setViewMode('stats');
  };

  // Analytics Computation
  const analytics = useMemo(() => {
    const total = history.length;
    const correct = history.filter(h => h.isCorrect).length;
    const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;
    
    // Type Breakdown
    const typeDistribution: Record<string, { total: number; correct: number }> = {};
    const difficultyDistribution: Record<string, { total: number; correct: number }> = {};

    history.forEach(entry => {
      const q = SENTENCE_COMPLETION_DATA.find(item => item.id === entry.questionId);
      if (q) {
        if (!typeDistribution[q.type]) typeDistribution[q.type] = { total: 0, correct: 0 };
        if (!difficultyDistribution[q.difficulty]) difficultyDistribution[q.difficulty] = { total: 0, correct: 0 };

        typeDistribution[q.type].total += 1;
        difficultyDistribution[q.difficulty].total += 1;

        if (entry.isCorrect) {
          typeDistribution[q.type].correct += 1;
          difficultyDistribution[q.difficulty].correct += 1;
        }
      }
    });

    return {
      total,
      correct,
      incorrect: total - correct,
      accuracy,
      typeDistribution,
      difficultyDistribution
    };
  }, [history]);

  // Dictionary computation
  const dictionaryList = useMemo(() => {
    const map = new Map<string, string>();
    SENTENCE_COMPLETION_DATA.forEach(q => {
      q.vocab.forEach(v => {
        map.set(v.word.toLowerCase(), v.definition);
      });
    });

    const list = Array.from(map.entries()).map(([word, definition]) => ({ word, definition }));
    list.sort((a, b) => a.word.localeCompare(b.word));

    if (!searchDict) return list;
    return list.filter(item => item.word.includes(searchDict.toLowerCase()) || item.definition.toLowerCase().includes(searchDict.toLowerCase()));
  }, [searchDict]);

  const testProgressPercent = testQuestions.length > 0 
    ? Math.round((Object.keys(testAnswers).length / testQuestions.length) * 100)
    : 0;

  return (
    <div className="flex flex-col h-full bg-editorial-bg relative overflow-y-auto custom-scrollbar">
      
      {/* Editorial Styled Header */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 pt-12 mb-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-editorial-border pb-8">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-editorial-text rounded-sm text-white shadow-lg">
              <Award size={20} />
            </div>
            <div>
              <h2 className="text-3xl font-serif italic text-editorial-text leading-none mb-1">
                Sentence Completion
              </h2>
              <p className="text-[10px] uppercase tracking-[0.4em] font-black text-editorial-meta">Strategic Cognitive Training</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button 
              onClick={() => { setViewMode('hub'); setShowExplanation(false); setIsAnswerSubmitted(false); }}
              className={`px-4 py-2 text-[10px] tracking-widest font-black uppercase rounded-full border transition-all ${viewMode === 'hub' ? 'bg-editorial-text text-white border-editorial-text' : 'bg-white text-editorial-muted border-editorial-border hover:text-editorial-text'}`}
            >
              Overview
            </button>
            <button 
              onClick={() => { setViewMode('practice'); setCurrentQuestionIndex(0); }}
              className={`px-4 py-2 text-[10px] tracking-widest font-black uppercase rounded-full border transition-all ${viewMode === 'practice' ? 'bg-editorial-text text-white border-editorial-text' : 'bg-white text-editorial-muted border-editorial-border hover:text-editorial-text'}`}
            >
              Practice
            </button>
            <button 
              onClick={() => setViewMode('review')}
              className={`px-4 py-2 text-[10px] tracking-widest font-black uppercase rounded-full border transition-all relative ${viewMode === 'review' ? 'bg-editorial-text text-white border-editorial-text' : 'bg-white text-editorial-muted border-editorial-border hover:text-editorial-text'}`}
            >
              Review Stack
              {reviewStackIds.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white rounded-full text-[8px] font-black w-4 h-4 flex items-center justify-center animate-pulse">
                  {reviewStackIds.length}
                </span>
              )}
            </button>
            <button 
              onClick={() => setViewMode('dictionary')}
              className={`px-4 py-2 text-[10px] tracking-widest font-black uppercase rounded-full border transition-all ${viewMode === 'dictionary' ? 'bg-editorial-text text-white border-editorial-text' : 'bg-white text-editorial-muted border-editorial-border hover:text-editorial-text'}`}
            >
              Dictionary
            </button>
            <button 
              onClick={() => setViewMode('stats')}
              className={`px-4 py-2 text-[10px] tracking-widest font-black uppercase rounded-full border transition-all ${viewMode === 'stats' ? 'bg-editorial-text text-white border-editorial-text' : 'bg-white text-editorial-muted border-editorial-border hover:text-editorial-text'}`}
            >
              Analytics
            </button>
          </div>
        </div>
      </div>

      {/* Main Mode Containers */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 pb-24">
        
        {/* VIEW: HUB */}
        {viewMode === 'hub' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-8">
              <div className="bg-white border border-editorial-border p-8 rounded-sm shadow-editorial relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none rotate-12 scale-150">
                  <Award size={180} />
                </div>
                <div className="relative z-10 max-w-2xl">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-600 mb-4 block">Official 501 Verbal Coursework</span>
                  <h3 className="text-4xl md:text-5xl font-serif text-editorial-text leading-tight mb-4">Master Standard Sentence Completions</h3>
                  <p className="text-base text-editorial-muted leading-relaxed mb-6 font-serif italic">
                    Train your lexicon on the logic pathways testing comparisons, restatements, contrasts, and cause-and-effect indicators that appear repeatedly on the SAT, GRE, and professional entrance registries.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button 
                      onClick={() => { setViewMode('practice'); setCurrentQuestionIndex(0); }}
                      className="px-6 py-3.5 bg-editorial-text text-white text-[11px] font-black tracking-widest uppercase rounded-sm hover:opacity-90 transition-all flex items-center gap-2.5 shadow-editorial-lg active:scale-95"
                    >
                      <Play size={12} fill="currentColor" /> Begin Practice Session
                    </button>
                    <button 
                      onClick={handleStartTest}
                      className="px-6 py-3.5 bg-white border border-editorial-border text-editorial-text text-[11px] font-black tracking-widest uppercase rounded-sm hover:bg-neutral-50 transition-all flex items-center gap-2.5 active:scale-95"
                    >
                      <Clock size={12} /> Start 10-Min Exam
                    </button>
                  </div>
                </div>
              </div>

              {/* Cognitive Strategies Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border border-editorial-border p-6 rounded-sm">
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 text-amber-600 flex items-center justify-center mb-4">
                    <TrendingUp size={16} />
                  </div>
                  <h4 className="text-lg font-serif italic text-editorial-text mb-2">Identify Verbal Signal Clues</h4>
                  <p className="text-xs text-editorial-muted leading-relaxed">
                    Watch for contrast tags like <span className="font-semibold text-neutral-800">although, despite, however</span> and restatements like <span className="font-semibold text-neutral-800">namely, in other words</span> to quickly predict the missing semantic value of the blank.
                  </p>
                </div>

                <div className="bg-white border border-editorial-border p-6 rounded-sm">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-4">
                    <Timer size={16} />
                  </div>
                  <h4 className="text-lg font-serif italic text-editorial-text mb-2">Simulated Timed Performance</h4>
                  <p className="text-xs text-editorial-muted leading-relaxed">
                    Take high-pressure, realistic exam mocks with strict clock parameters to establish strong time-management reflexes and reduce test anxiety.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-6">
              {/* Stat Card */}
              <div className="bg-editorial-accent border border-editorial-border p-6 rounded-sm">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-editorial-meta mb-4">Module Statistics</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <span className="text-xs text-editorial-muted">Total Solved</span>
                    <span className="text-2xl font-serif font-black">{history.length}</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="text-xs text-editorial-muted">Global Accuracy</span>
                    <span className="text-2xl font-serif font-black">{analytics.accuracy}%</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="text-xs text-editorial-muted">Review Queue</span>
                    <span className="text-2xl font-serif font-black text-amber-600">{reviewStackIds.length}</span>
                  </div>

                  <div className="pt-4 border-t border-editorial-border/60">
                    <div className="flex justify-between text-[9px] uppercase font-black tracking-wider text-editorial-meta mb-2">
                      <span>Completed Progress</span>
                      <span>{Math.round((history.length / SENTENCE_COMPLETION_DATA.length) * 100)}%</span>
                    </div>
                    <div className="w-full h-1 bg-white border border-editorial-border overflow-hidden rounded-full">
                      <div 
                        className="h-full bg-editorial-text"
                        style={{ width: `${Math.min(100, Math.round((history.length / SENTENCE_COMPLETION_DATA.length) * 100))}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Dictionary Brief */}
              <div className="bg-white border border-editorial-border p-6 rounded-sm">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-editorial-meta mb-3">Vocabulary Support</h4>
                <p className="text-xs text-editorial-muted leading-relaxed mb-4">
                  Access a detailed list of verified academic definitions directly linked to the 501 test booklet questions.
                </p>
                <button 
                  onClick={() => setViewMode('dictionary')}
                  className="w-full py-2.5 bg-neutral-100 hover:bg-neutral-200 transition-colors rounded-sm text-[10px] font-black uppercase tracking-widest text-editorial-text"
                >
                  Browse Lexicon Index
                </button>
              </div>
            </div>
          </div>
        )}

        {/* VIEW: PRACTICE */}
        {viewMode === 'practice' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Sidebar Filters */}
            <div className="lg:col-span-3 space-y-6">
              <div className="bg-white border border-editorial-border p-6 rounded-sm">
                <div className="flex items-center gap-2 mb-6 border-b border-editorial-border pb-3">
                  <Filter size={14} className="text-editorial-meta" />
                  <h4 className="text-[10px] font-black uppercase tracking-wider text-editorial-text">Target Settings</h4>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="text-[9px] font-black uppercase tracking-wider text-editorial-meta block mb-2">Core Difficulty</label>
                    <div className="flex flex-col gap-1.5">
                      {['easy', 'intermediate', 'advanced'].map(difficulty => (
                        <button
                          key={difficulty}
                          onClick={() => {
                            setFilterDifficulty(filterDifficulty === difficulty ? null : difficulty);
                            setCurrentQuestionIndex(0);
                          }}
                          className={`w-full px-3 py-2 text-left rounded-sm text-[10px] uppercase font-black tracking-widest border transition-all ${filterDifficulty === difficulty ? 'bg-editorial-text text-white border-editorial-text' : 'bg-neutral-50 text-editorial-muted border-editorial-border hover:border-editorial-text'}`}
                        >
                          {difficulty}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-[9px] font-black uppercase tracking-wider text-editorial-meta block mb-2">Cognitive Blueprint</label>
                    <div className="flex flex-col gap-1.5">
                      {[
                        { id: 'contrast', label: 'Contrast' },
                        { id: 'restatement', label: 'Restatement' },
                        { id: 'comparison', label: 'Comparison' },
                        { id: 'cause_effect', label: 'Cause & Effect' }
                      ].map(type => (
                        <button
                          key={type.id}
                          onClick={() => {
                            setFilterType(filterType === type.id ? null : type.id);
                            setCurrentQuestionIndex(0);
                          }}
                          className={`w-full px-3 py-2 text-left rounded-sm text-[10px] uppercase font-black tracking-widest border transition-all ${filterType === type.id ? 'bg-editorial-text text-white border-editorial-text' : 'bg-neutral-50 text-editorial-muted border-editorial-border hover:border-editorial-text'}`}
                        >
                          {type.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-editorial-border text-center">
                  <button 
                    onClick={() => { setFilterType(null); setFilterDifficulty(null); setCurrentQuestionIndex(0); }}
                    className="text-[9px] uppercase font-black text-editorial-meta tracking-widest hover:text-editorial-text transition-colors"
                  >
                    Reset Active Filters
                  </button>
                </div>
              </div>
            </div>

            {/* Core Practice Board */}
            <div className="lg:col-span-9 space-y-6">
              {activeQuestions.length > 0 && currentQuestion ? (
                <div className="space-y-6">
                  {/* Progress Indicators */}
                  <div className="flex justify-between items-center bg-white border border-editorial-border px-6 py-4 rounded-sm">
                    <div className="flex items-center gap-4">
                      <span className="text-[9px] font-black uppercase tracking-widest px-2.5 py-1 bg-editorial-accent rounded-sm border border-editorial-border">
                        Question {currentQuestionIndexClamped + 1} of {activeQuestions.length}
                      </span>
                      <span className="text-[9px] font-black uppercase tracking-widest px-2.5 py-1 bg-editorial-text text-white rounded-sm">
                        {currentQuestion.difficulty}
                      </span>
                      <span className="text-[10px] font-serif italic text-editorial-meta hidden sm:inline">
                        Chapter {currentQuestion.chapter}
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <button 
                        onClick={handlePrevPractice}
                        className="p-1 px-3 bg-neutral-100 hover:bg-neutral-200 text-editorial-text rounded-sm transition-colors border border-editorial-border flex items-center justify-center"
                        title="Previous Question"
                      >
                        <ChevronLeft size={16} />
                      </button>
                      <button 
                        onClick={handleNextPractice}
                        className="p-1 px-3 bg-neutral-100 hover:bg-neutral-200 text-editorial-text rounded-sm transition-colors border border-editorial-border flex items-center justify-center font-bold"
                        title="Skip / Next Question"
                      >
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Question Prompt */}
                  <div className="bg-white border border-editorial-border p-8 md:p-12 rounded-sm shadow-editorial transition-all">
                    <p className="text-[10px] uppercase font-black tracking-[0.3em] text-editorial-meta mb-6">Logical Assessment Prompt</p>
                    
                    <h3 className="text-xl md:text-3xl font-serif text-editorial-text leading-relaxed tracking-tight mb-12 select-all">
                      {currentQuestion.question.split("______").map((part, i, arr) => (
                        <React.Fragment key={i}>
                          {part}
                          {i < arr.length - 1 && (
                            <span className="px-6 py-1 mx-2 border-b-2 border-dashed border-editorial-text/40 bg-editorial-accent/30 rounded-sm font-sans text-lg font-bold text-editorial-text select-none">
                              {selectedAnswer && (isAnswerSubmitted || showExplanation) ? currentQuestion.choices.find(c => c.key === selectedAnswer)?.text : " ? "}
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </h3>

                    {/* Answer choices Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {currentQuestion.choices.map((choice) => {
                        const isSelected = selectedAnswer === choice.key;
                        const isCorrect = choice.key === currentQuestion.correctAnswer;
                        
                        let choiceStyles = "bg-neutral-50 hover:bg-neutral-100/80 border-editorial-border text-editorial-text";
                        if (isSelected) {
                          if (isAnswerSubmitted) {
                            choiceStyles = isCorrect 
                              ? "bg-emerald-50 border-emerald-500 text-emerald-800"
                              : "bg-red-50 border-red-500 text-red-800";
                          } else {
                            choiceStyles = "bg-editorial-text text-white border-editorial-text";
                          }
                        } else if (isAnswerSubmitted && isCorrect) {
                          choiceStyles = "bg-emerald-50 border-emerald-500 text-emerald-800";
                        }

                        return (
                          <button
                            key={choice.key}
                            onClick={() => handleSelectAnswer(choice.key)}
                            disabled={isAnswerSubmitted}
                            className={`flex items-center gap-4 p-5 border rounded-sm text-left transition-all ${choiceStyles} group active:scale-98`}
                          >
                            <span className={`w-7 h-7 rounded-sm flex items-center justify-center text-[10px] font-black uppercase shrink-0 border ${isSelected && !isAnswerSubmitted ? 'bg-white text-editorial-text border-white' : 'border-current'}`}>
                              {choice.key}
                            </span>
                            <span className="text-base font-serif italic">{choice.text}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Action Hub */}
                    <div className="mt-12 flex justify-end gap-4 border-t border-editorial-border/60 pt-8">
                      {!isAnswerSubmitted ? (
                        <button
                          onClick={handleSubmitAnswer}
                          disabled={!selectedAnswer}
                          className="px-10 py-4 bg-editorial-text text-white hover:opacity-90 disabled:opacity-30 text-[10px] font-black uppercase tracking-widest rounded-sm transition-all shadow-editorial-lg active:scale-95"
                        >
                          Submit Resolution
                        </button>
                      ) : (
                        <button
                          onClick={handleNextPractice}
                          className="px-10 py-4 bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] font-black uppercase tracking-widest rounded-sm transition-all shadow-editorial-lg flex items-center gap-2.5 active:scale-95"
                        >
                          Next Assessment <ChevronRight size={14} />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Feedback Explanation Frame */}
                  <AnimatePresence>
                    {showExplanation && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white border border-editorial-border p-8 rounded-sm shadow-editorial transition-all"
                      >
                        <div className="flex items-center gap-3 mb-6">
                          {selectedAnswer === currentQuestion.correctAnswer ? (
                            <CheckCircle2 size={24} className="text-emerald-600" />
                          ) : (
                            <AlertCircle size={24} className="text-amber-500" />
                          )}
                          <h4 className="text-lg font-serif italic text-editorial-text">
                            {selectedAnswer === currentQuestion.correctAnswer ? "Resolution Authenticated" : "Interpretation Pending Corrective Steps"}
                          </h4>
                        </div>
                        
                        <p className="text-base font-serif leading-relaxed text-editorial-muted mb-8 border-l-2 border-editorial-border pl-6">
                          {currentQuestion.explanation}
                        </p>

                        {/* Vocab definitions of choices */}
                        <div className="pt-6 border-t border-editorial-border/50">
                          <p className="text-[10px] uppercase font-black tracking-widest text-editorial-meta mb-4">Linguistic Glossary</p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {currentQuestion.vocab.map((term, i) => (
                              <div key={term.word + i} className="p-4 bg-neutral-50/50 rounded-sm border border-editorial-border">
                                <span className="font-serif italic font-bold text-sm text-editorial-text block mb-1">{term.word}</span>
                                <span className="text-xs text-editorial-muted leading-relaxed">{term.definition}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <div className="p-24 text-center bg-white border border-editorial-border rounded-sm shadow-editorial">
                  <Inbox className="mx-auto text-editorial-meta mb-4" size={48} />
                  <h4 className="text-2xl font-serif italic text-editorial-text mb-2">No Matching Questions Found</h4>
                  <p className="text-xs text-editorial-muted max-w-sm mx-auto mb-6">
                    Try adjusting your difficulty or cognitive filters.
                  </p>
                  <button 
                    onClick={() => { setFilterType(null); setFilterDifficulty(null); }}
                    className="px-6 py-2.5 bg-editorial-text text-white text-[10px] uppercase tracking-widest font-black rounded-sm"
                  >
                    Reset Active Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* VIEW: TEST */}
        {viewMode === 'test' && isTestActive && (
          <div className="max-w-4xl mx-auto space-y-6">
            
            {/* Timed Test Header Status Panel */}
            <div className="flex justify-between items-center bg-white border border-editorial-border p-6 rounded-sm shadow-editorial">
              <div className="flex items-center gap-4">
                <span className="text-[9px] font-black uppercase tracking-widest px-3 py-1.5 bg-red-600 text-white rounded-sm">
                  STANDARD TIMED MOCK
                </span>
                <span className="text-xs text-editorial-muted font-mono">
                  Progress: {testProgressPercent}% ({Object.keys(testAnswers).length}/10 Questions answered)
                </span>
              </div>

              <div className="flex items-center gap-2 text-editorial-text pl-4">
                <Timer size={18} className="text-amber-600 animate-pulse" />
                <span className="text-xl font-mono font-black">
                  {Math.floor(testTimeLeft / 60)}:{(testTimeLeft % 60).toString().padStart(2, '0')}
                </span>
              </div>
            </div>

            {/* Carousel / Navigation items of test */}
            <div className="grid grid-cols-10 gap-2">
              {testQuestions.map((q, idx) => {
                const isAnswered = testAnswers[q.id] !== undefined;
                const isCurrent = idx === currentQuestionIndex;
                
                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentQuestionIndex(idx)}
                    className={`py-2 text-xs font-mono font-black rounded-sm border transition-all ${isCurrent ? 'bg-editorial-text text-white border-editorial-text' : isAnswered ? 'bg-emerald-50 text-emerald-800 border-emerald-200' : 'bg-white text-editorial-muted border-editorial-border'}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            {/* Question Panel */}
            {testQuestions[currentQuestionIndex] && (
              <div className="bg-white border border-editorial-border p-8 md:p-12 rounded-sm shadow-editorial transition-all">
                <span className="text-[9px] font-black uppercase tracking-widest px-2.5 py-1 bg-editorial-accent border border-editorial-border rounded-sm block w-fit mb-6">
                  {testQuestions[currentQuestionIndex].difficulty}
                </span>

                <h3 className="text-xl md:text-2xl font-serif text-editorial-text leading-relaxed tracking-tight mb-12">
                  {testQuestions[currentQuestionIndex].question.split("______").map((part, i, arr) => (
                    <React.Fragment key={i}>
                      {part}
                      {i < arr.length - 1 && (
                        <span className="px-6 py-1 mx-2 border-b-2 border-dashed border-editorial-text/40 bg-editorial-accent/30 rounded-sm font-sans text-base font-bold text-editorial-text">
                          {testAnswers[testQuestions[currentQuestionIndex].id] ? testQuestions[currentQuestionIndex].choices.find(c => c.key === testAnswers[testQuestions[currentQuestionIndex].id])?.text : " ? "}
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {testQuestions[currentQuestionIndex].choices.map((choice) => {
                    const isSelected = testAnswers[testQuestions[currentQuestionIndex].id] === choice.key;
                    
                    return (
                      <button
                        key={choice.key}
                        onClick={() => {
                          setTestAnswers({
                            ...testAnswers,
                            [testQuestions[currentQuestionIndex].id]: choice.key
                          });
                        }}
                        className={`flex items-center gap-4 p-5 border rounded-sm text-left transition-all ${isSelected ? 'bg-editorial-text text-white border-editorial-text shadow-editorial-lg' : 'bg-neutral-50 hover:bg-neutral-100/80 border-editorial-border text-editorial-text'} group active:scale-98`}
                      >
                        <span className={`w-7 h-7 rounded-sm flex items-center justify-center text-[10px] font-black uppercase shrink-0 border ${isSelected ? 'bg-white text-editorial-text border-white' : 'border-current'}`}>
                          {choice.key}
                        </span>
                        <span className="text-base font-serif italic">{choice.text}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-12 flex justify-between border-t border-editorial-border/60 pt-8">
                  <div className="flex gap-2">
                    <button
                      onClick={() => currentQuestionIndex > 0 && setCurrentQuestionIndex(prev => prev - 1)}
                      disabled={currentQuestionIndex === 0}
                      className="px-6 py-3.5 bg-neutral-100 border border-editorial-border rounded-sm font-black text-[10px] uppercase tracking-widest text-editorial-text hover:bg-neutral-200 transition-colors disabled:opacity-40"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => currentQuestionIndex < testQuestions.length - 1 && setCurrentQuestionIndex(prev => prev + 1)}
                      disabled={currentQuestionIndex === testQuestions.length - 1}
                      className="px-6 py-3.5 bg-neutral-100 border border-editorial-border rounded-sm font-black text-[10px] uppercase tracking-widest text-editorial-text hover:bg-neutral-200 transition-colors disabled:opacity-40"
                    >
                      Skip Next
                    </button>
                  </div>

                  {currentQuestionIndex === testQuestions.length - 1 ? (
                    <button
                      onClick={handleCompleteTest}
                      className="px-10 py-4 bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] font-black uppercase tracking-widest rounded-sm transition-all shadow-editorial-lg"
                    >
                      Submit Timed Exam
                    </button>
                  ) : (
                    <button
                      onClick={() => setCurrentQuestionIndex(prev => prev + 1)}
                      className="px-10 py-4 bg-editorial-text text-white hover:opacity-90 text-[10px] font-black uppercase tracking-widest rounded-sm transition-all shadow-editorial-lg"
                    >
                      Advance Forward
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* VIEW: REVIEW STACK */}
        {viewMode === 'review' && (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white border border-editorial-border p-8 rounded-sm shadow-editorial">
              <h3 className="text-2xl font-serif text-editorial-text leading-tight mb-2">My Review Queue</h3>
              <p className="text-xs text-editorial-muted leading-relaxed">
                Re-assess the questions that tested incorrectly in previous practices or timed test sessions until you form perfect cognitive reflexes.
              </p>
            </div>

            {reviewStackIds.length > 0 ? (
              <div className="space-y-6">
                {SENTENCE_COMPLETION_DATA.filter(q => reviewStackIds.includes(q.id)).map((q, idx) => (
                  <div key={q.id} className="bg-white border border-editorial-border p-6 rounded-sm shadow-editorial transition-all">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 bg-red-100 text-red-800 rounded-sm border border-red-200">
                        Concept Flagged for Review
                      </span>
                      <button 
                        onClick={() => {
                          saveReviewStack(reviewStackIds.filter(id => id !== q.id));
                        }}
                        className="text-[9px] uppercase font-black tracking-widest text-emerald-600 hover:text-emerald-700 hover:underline"
                      >
                        Archived / Resolved
                      </button>
                    </div>

                    <h4 className="text-lg font-serif italic text-editorial-text mb-4 leading-relaxed">
                      “{q.question}”
                    </h4>

                    {/* Show Correct Answer Directly to assist review */}
                    <div className="bg-neutral-50 border border-editorial-border p-4 rounded-sm mb-4">
                      <p className="text-[8px] uppercase tracking-widest font-black text-editorial-meta mb-1">Correct Answer Selection</p>
                      <p className="text-sm text-editorial-text font-serif italic font-semibold">
                        Option: {q.correctAnswer.toUpperCase()} — {q.choices.find(c => c.key === q.correctAnswer)?.text}
                      </p>
                    </div>

                    <p className="text-xs text-editorial-muted leading-relaxed font-serif italic border-l border-editorial-border pl-4">
                      {q.explanation}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-24 text-center bg-white border border-editorial-border rounded-sm shadow-editorial">
                <Check className="mx-auto text-emerald-600 mb-4 animate-bounce" size={48} />
                <h4 className="text-2xl font-serif italic text-editorial-text mb-2">Review Stack Fully Authenticated</h4>
                <p className="text-xs text-editorial-muted max-w-sm mx-auto">
                  Outstanding work. There are no currently flagged verbal entries awaiting corrective action.
                </p>
              </div>
            )}
          </div>
        )}

        {/* VIEW: DICTIONARY */}
        {viewMode === 'dictionary' && (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white border border-editorial-border p-8 rounded-sm shadow-editorial flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-serif text-editorial-text leading-none mb-1 text-balance">Verbal Registry Dictionary</h3>
                <p className="text-[10px] uppercase font-black tracking-widest text-editorial-meta">Strategic Cognitive Glossary</p>
              </div>

              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-editorial-meta" size={14} />
                <input
                  type="text"
                  placeholder="Filter dictionary vocabulary..."
                  value={searchDict}
                  onChange={(e) => setSearchDict(e.target.value)}
                  className="pl-9 pr-4 py-2 bg-neutral-50/50 border border-editorial-border rounded-full text-xs focus:outline-none focus:ring-1 focus:ring-editorial-text text-editorial-text w-full md:w-64"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dictionaryList.map((item, idx) => (
                <div key={item.word + idx} className="bg-white border border-editorial-border p-6 rounded-sm shadow-editorial hover:shadow-editorial-lg transition-all">
                  <h4 className="text-xl font-serif italic text-editorial-text mb-2 font-black">
                    {item.word}
                  </h4>
                  <p className="text-sm text-editorial-muted leading-relaxed leading-normal mb-1 font-serif text-justify font-medium">
                    {item.definition}
                  </p>
                </div>
              ))}
              {dictionaryList.length === 0 && (
                <div className="col-span-full py-24 text-center">
                  <h4 className="text-lg text-editorial-meta italic font-serif">No vocabulary terms match: "{searchDict}"</h4>
                </div>
              )}
            </div>
          </div>
        )}

        {/* VIEW: ANALYTICS */}
        {viewMode === 'stats' && (
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white border border-editorial-border p-8 rounded-sm shadow-editorial">
              <h3 className="text-2xl font-serif text-editorial-text leading-tight mb-2">Performance Dashboard</h3>
              <p className="text-xs text-editorial-muted leading-relaxed">
                Strategic analytical overview tracking accuracy, module distribution, and correct choices.
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white border border-editorial-border p-6 rounded-sm text-center">
                <p className="text-[9px] uppercase font-black tracking-widest text-editorial-meta mb-2">Total Solved</p>
                <h4 className="text-4xl font-serif font-black">{analytics.total}</h4>
              </div>

              <div className="bg-[#EFFFFA] border border-emerald-100 p-6 rounded-sm text-center text-emerald-800">
                <p className="text-[9px] uppercase font-black tracking-widest text-emerald-600 mb-2">Correct Answers</p>
                <h4 className="text-4xl font-serif font-black">{analytics.correct}</h4>
              </div>

              <div className="bg-[#FFF5F5] border border-red-100 p-6 rounded-sm text-center text-red-800">
                <p className="text-[9px] uppercase font-black tracking-widest text-red-600 mb-2">Incorrect Answers</p>
                <h4 className="text-4xl font-serif font-black">{analytics.incorrect}</h4>
              </div>

              <div className="bg-editorial-accent border border-editorial-border p-6 rounded-sm text-center">
                <p className="text-[9px] uppercase font-black tracking-widest text-editorial-meta mb-2">Global Accuracy</p>
                <h4 className="text-4xl font-serif font-black">{analytics.accuracy}%</h4>
              </div>
            </div>

            {/* Categories Performance and Review */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-editorial-border p-6 rounded-sm">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-editorial-meta mb-4">Mastery by Cognitive Blueprint</h4>
                <div className="space-y-4">
                  {[
                    { id: 'restatement', label: 'Restatement' },
                    { id: 'comparison', label: 'Comparison' },
                    { id: 'contrast', label: 'Contrast' },
                    { id: 'cause_effect', label: 'Cause & Effect' }
                  ].map(blueprint => {
                    const stats = analytics.typeDistribution[blueprint.id] || { total: 0, correct: 0 };
                    const rate = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
                    
                    return (
                      <div key={blueprint.id} className="space-y-1">
                        <div className="flex justify-between text-xs text-editorial-text">
                          <span className="font-semibold">{blueprint.label}</span>
                          <span className="text-editorial-meta">{stats.correct}/{stats.total} resolved ({rate}%)</span>
                        </div>
                        <div className="w-full h-1 bg-neutral-100 rounded-full border border-editorial-border/30 overflow-hidden">
                          <div 
                            className="h-full bg-editorial-text"
                            style={{ width: `${rate}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-white border border-editorial-border p-6 rounded-sm">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-editorial-meta mb-4">Mastery by Difficulty</h4>
                <div className="space-y-4">
                  {['easy', 'intermediate', 'advanced'].map(diff => {
                    const stats = analytics.difficultyDistribution[diff] || { total: 0, correct: 0 };
                    const rate = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
                    
                    return (
                      <div key={diff} className="space-y-1">
                        <div className="flex justify-between text-xs text-editorial-text">
                          <span className="font-semibold capitalize">{diff}</span>
                          <span className="text-editorial-meta">{stats.correct}/{stats.total} resolved ({rate}%)</span>
                        </div>
                        <div className="w-full h-1 bg-neutral-100 rounded-full border border-editorial-border/30 overflow-hidden">
                          <div 
                            className="h-full bg-editorial-text"
                            style={{ width: `${rate}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Clear History Button */}
            <div className="text-right pt-6">
              <button
                onClick={() => {
                  if (window.confirm("Are you sure you want to clear your sentence completion score history?")) {
                    saveHistory([]);
                  }
                }}
                className="text-[10px] font-black uppercase tracking-widest text-red-600 hover:text-red-800 transition-colors"
              >
                Clear History Performance Logs
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
