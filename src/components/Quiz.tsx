import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Trophy, 
  X, 
  RotateCcw, 
  ChevronRight, 
  CheckCircle2, 
  AlertCircle,
  Clock,
  Brain
} from 'lucide-react';
import { WordEntry, WordBlock, QuizQuestion, QuizScore } from '../types';

interface QuizProps {
  blocks: WordBlock[];
  onClose: () => void;
}

// Sub-component for Matching Question
const MatchingUI: React.FC<{ 
  pairs: { word: string; definition: string }[]; 
  onComplete: (isCorrect: boolean) => void 
}> = ({ pairs, onComplete }) => {
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [selectedDef, setSelectedDef] = useState<string | null>(null);
  const [matches, setMatches] = useState<{ [word: string]: string }>({});
  const [wrongMatch, setWrongMatch] = useState<[string, string] | null>(null);

  const shuffledWords = useMemo(() => [...pairs].sort(() => Math.random() - 0.5), [pairs]);
  const shuffledDefs = useMemo(() => [...pairs].sort(() => Math.random() - 0.5), [pairs]);

  useEffect(() => {
    if (selectedWord && selectedDef) {
      const correctPair = pairs.find(p => p.word === selectedWord);
      if (correctPair && correctPair.definition === selectedDef) {
        setMatches(prev => ({ ...prev, [selectedWord]: selectedDef }));
        setSelectedWord(null);
        setSelectedDef(null);
      } else {
        setWrongMatch([selectedWord, selectedDef]);
        setTimeout(() => {
          setWrongMatch(null);
          setSelectedWord(null);
          setSelectedDef(null);
        }, 1000);
      }
    }
  }, [selectedWord, selectedDef, pairs]);

  useEffect(() => {
    if (Object.keys(matches).length === pairs.length && Object.keys(matches).length > 0) {
      onComplete(true);
    }
  }, [matches, pairs.length, onComplete]);

  return (
    <div className="grid grid-cols-2 gap-12 w-full">
      <div className="flex flex-col gap-3">
        <p className="text-[10px] uppercase font-bold tracking-widest text-editorial-meta mb-2">Lexemes</p>
        {shuffledWords.map(p => (
          <motion.button
            key={p.word}
            layout
            whileHover={!matches[p.word] ? { scale: 1.02 } : {}}
            whileTap={!matches[p.word] ? { scale: 0.98 } : {}}
            animate={wrongMatch?.[0] === p.word ? { x: [-4, 4, -4, 4, 0] } : {}}
            onClick={() => !matches[p.word] && setSelectedWord(p.word)}
            disabled={!!matches[p.word]}
            className={`
              p-4 border text-left font-serif italic transition-all
              ${matches[p.word] ? 'bg-editorial-accent/30 border-transparent text-editorial-muted opacity-50' : 
                selectedWord === p.word ? 'bg-editorial-text text-white border-editorial-text' : 
                wrongMatch?.[0] === p.word ? 'bg-red-50 border-red-500 text-red-700' : 'bg-white border-editorial-border hover:border-editorial-text'}
            `}
          >
            {p.word}
          </motion.button>
        ))}
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-[10px] uppercase font-bold tracking-widest text-editorial-meta mb-2">Definitions</p>
        {shuffledDefs.map(p => {
          const isMatched = Object.values(matches).includes(p.definition);
          return (
            <motion.button
              key={p.definition}
              layout
              whileHover={!isMatched ? { scale: 1.01 } : {}}
              whileTap={!isMatched ? { scale: 0.99 } : {}}
              animate={wrongMatch?.[1] === p.definition ? { x: [-4, 4, -4, 4, 0] } : {}}
              onClick={() => !isMatched && setSelectedDef(p.definition)}
              disabled={isMatched}
              className={`
                p-4 border text-left text-sm font-serif leading-tight transition-all h-full
                ${isMatched ? 'bg-editorial-accent/30 border-transparent text-editorial-muted opacity-50' : 
                  selectedDef === p.definition ? 'bg-editorial-text text-white border-editorial-text' : 
                  wrongMatch?.[1] === p.definition ? 'bg-red-50 border-red-500 text-red-700' : 'bg-white border-editorial-border hover:border-editorial-text'}
              `}
            >
              {p.definition}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export const Quiz: React.FC<QuizProps> = ({ blocks, onClose }) => {
  const [step, setStep] = useState<'setup' | 'active' | 'result'>('setup');
  const [selectedBlockIds, setSelectedBlockIds] = useState<string[]>([]);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [missedWords, setMissedWords] = useState<string[]>([]);
  const [startTime, setStartTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const allWords = useMemo(() => blocks.flatMap(b => b.words), [blocks]);

  const generateQuiz = () => {
    const pool = selectedBlockIds.length > 0 
      ? blocks.filter(b => selectedBlockIds.includes(b.id)).flatMap(b => b.words)
      : allWords;
    
    if (pool.length < 4) return;

    // Shuffle and pick 10 words (or all if less than 10)
    const shuffledPool = [...pool].sort(() => Math.random() - 0.5);
    const quizWords = shuffledPool.slice(0, 10);

    const newQuestions: QuizQuestion[] = quizWords.map((word, idx) => {
      // Choose question type based on available data
      const types: QuizQuestion['type'][] = ['definition', 'lexeme-definition', 'context', 'matching'];
      if (word.synonyms && word.synonyms.length > 0) types.push('synonym');
      if (word.antonyms && word.antonyms.length > 0) types.push('antonym');
      if (word.nuance) types.push('nuance');
      if (word.derivatives && word.derivatives.length > 0) types.push('derivative');
      
      const type = types[Math.floor(Math.random() * types.length)];
      
      let correctAnswer = '';
      let options: string[] = [];
      let distractorsPool: string[] = [];
      let matchingPairs: { word: string; definition: string }[] | undefined = undefined;

      if (type === 'matching') {
        const otherWords = pool.filter(w => w.word !== word.word).sort(() => Math.random() - 0.5).slice(0, 3);
        const pairs = [word, ...otherWords].map(w => ({ word: w.word, definition: w.definition }));
        matchingPairs = pairs;
        correctAnswer = 'COMPLETED'; // Special value
      } else if (type === 'definition') {
        correctAnswer = word.word;
        distractorsPool = pool.filter(w => w.word !== word.word).map(w => w.word);
        options = [correctAnswer, ...distractorsPool.sort(() => Math.random() - 0.5).slice(0, 3)];
      } else if (type === 'lexeme-definition') {
        correctAnswer = word.definition;
        distractorsPool = pool.filter(w => w.word !== word.word).map(w => w.definition);
        options = [correctAnswer, ...distractorsPool.sort(() => Math.random() - 0.5).slice(0, 3)];
      } else if (type === 'context') {
        correctAnswer = word.word;
        distractorsPool = pool.filter(w => w.word !== word.word).map(w => w.word);
        options = [correctAnswer, ...distractorsPool.sort(() => Math.random() - 0.5).slice(0, 3)];
      } else if (type === 'synonym') {
        correctAnswer = word.synonyms![0];
        distractorsPool = pool.filter(w => w.word !== word.word).flatMap(w => w.synonyms || []).filter(s => !word.synonyms?.includes(s));
        if (distractorsPool.length < 3) distractorsPool = pool.map(w => w.word);
        options = [correctAnswer, ...distractorsPool.sort(() => Math.random() - 0.5).slice(0, 3)];
      } else if (type === 'antonym') {
        correctAnswer = word.antonyms![0];
        distractorsPool = pool.filter(w => w.word !== word.word).flatMap(w => w.antonyms || []).filter(a => !word.antonyms?.includes(a));
        if (distractorsPool.length < 3) distractorsPool = pool.map(w => w.word);
        options = [correctAnswer, ...distractorsPool.sort(() => Math.random() - 0.5).slice(0, 3)];
      } else if (type === 'nuance') {
        correctAnswer = word.nuance!;
        distractorsPool = pool.filter(w => w.word !== word.word && !!w.nuance).map(w => w.nuance!);
        options = [correctAnswer, ...distractorsPool.sort(() => Math.random() - 0.5).slice(0, 3)];
      } else if (type === 'derivative') {
        const derivative = word.derivatives![0];
        correctAnswer = derivative.word;
        distractorsPool = pool.filter(w => w.word !== word.word).map(w => w.word);
        options = [correctAnswer, ...distractorsPool.sort(() => Math.random() - 0.5).slice(0, 3)];
      }

      return {
        id: `q-${idx}`,
        word,
        type,
        correctAnswer,
        options: options.sort(() => Math.random() - 0.5),
        matchingPairs
      };
    });

    setQuestions(newQuestions);
    setScore(0);
    setCurrentIdx(0);
    setMissedWords([]);
    setStep('active');
    setStartTime(Date.now());
  };

  const handleOptionClick = (option: string) => {
    if (selectedOption !== null) return;
    
    setSelectedOption(option);
    const correct = option === questions[currentIdx].correctAnswer;
    setIsCorrect(correct);
    
    if (correct) {
      setScore(s => s + 1);
    } else {
      setMissedWords(prev => [...prev, questions[currentIdx].word.word]);
    }
  };

  const nextQuestion = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setSelectedOption(null);
      setIsCorrect(null);
    } else {
      setDuration(Math.floor((Date.now() - startTime) / 1000));
      setStep('result');
    }
  };

  const toggleBlockSelection = (id: string) => {
    setSelectedBlockIds(prev => 
      prev.includes(id) ? prev.filter(bid => bid !== id) : [...prev, id]
    );
  };

  const handleMatchingComplete = useCallback((correct: boolean) => {
    setSelectedOption('COMPLETED');
    setIsCorrect(correct);
    if (correct) setScore(s => s + 1);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-editorial-bg flex flex-col overflow-hidden">
      {/* Header */}
      <header className="h-20 border-b border-editorial-border flex items-center justify-between px-8 bg-white shrink-0">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-editorial-text text-white flex items-center justify-center rounded-sm">
            <Brain size={20} />
          </div>
          <div>
            <h2 className="text-xl font-serif italic text-editorial-text leading-none">Vocabulary Challenge</h2>
            <p className="text-[10px] uppercase tracking-widest text-editorial-meta mt-1 font-bold">Lexicon Mastery assessment</p>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="p-2 hover:bg-editorial-accent rounded-full transition-colors group"
        >
          <X className="text-editorial-meta group-hover:text-editorial-text transition-colors" />
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto overflow-x-hidden p-8 flex flex-col items-center">
        <div className="w-full max-w-4xl flex-1 flex flex-col">
          <AnimatePresence mode="wait">
            {step === 'setup' && (
              <motion.div 
                key="setup"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col items-center py-12"
              >
                <div className="text-center mb-12">
                  <h3 className="text-4xl font-serif italic text-editorial-text mb-4">Prepare Your Session</h3>
                  <p className="text-editorial-muted max-w-md mx-auto">Select the blocks you wish to focus on. If none are selected, we will draw from your entire lexicon.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-12">
                  {blocks.map(block => (
                    <button
                      key={block.id}
                      onClick={() => toggleBlockSelection(block.id)}
                      className={`
                        p-6 border text-left transition-all group relative overflow-hidden
                        ${selectedBlockIds.includes(block.id) 
                          ? 'border-editorial-text bg-editorial-accent' 
                          : 'border-editorial-border bg-white hover:border-editorial-meta'}
                      `}
                    >
                      <div className="relative z-10">
                        <p className="text-[10px] uppercase font-bold tracking-widest text-editorial-meta mb-1">{block.words.length} Words</p>
                        <h4 className="text-xl font-serif italic text-editorial-text">{block.title.split(': ')[1]}</h4>
                      </div>
                      {selectedBlockIds.includes(block.id) && (
                        <div className="absolute top-4 right-4 text-editorial-text">
                          <CheckCircle2 size={20} />
                        </div>
                      )}
                    </button>
                  ))}
                </div>

                <button
                  onClick={generateQuiz}
                  className="bg-editorial-text text-white px-12 py-5 rounded-sm font-bold uppercase tracking-widest text-sm hover:translate-y-[-2px] active:translate-y-0 transition-transform shadow-lg shadow-editorial-text/20 flex items-center gap-3"
                >
                  Initiate Challenge <ChevronRight size={18} />
                </button>
              </motion.div>
            )}

            {step === 'active' && questions.length > 0 && (
              <motion.div 
                key="active"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                className="flex-1 flex flex-col py-8"
              >
                {/* Progress Bar */}
                <div className="w-full h-1 bg-editorial-border rounded-full overflow-hidden mb-12">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
                    className="h-full bg-editorial-text"
                  />
                </div>

                <div className="flex justify-between items-end mb-16">
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-editorial-meta mb-2">Question {currentIdx + 1} of {questions.length}</p>
                    <h3 className="text-5xl md:text-7xl font-serif text-editorial-text italic">
                      {questions[currentIdx].type === 'definition' 
                        ? 'Identify Lexeme:' 
                        : questions[currentIdx].type === 'lexeme-definition'
                          ? 'Define Lexeme:'
                          : questions[currentIdx].type === 'context'
                            ? 'Contextual Cloze:'
                            : questions[currentIdx].type === 'matching'
                              ? 'Lexical Correspondence:'
                              : questions[currentIdx].type === 'nuance'
                                ? 'Semantic Nuance:'
                                : questions[currentIdx].type === 'derivative'
                                  ? `Identify ${questions[currentIdx].word.derivatives?.[0].form}:`
                                  : questions[currentIdx].type === 'synonym' 
                                    ? 'Synonym of:' 
                                    : 'Antonym of:'}
                    </h3>
                  </div>
                  <div className="text-right">
                    {questions[currentIdx].type !== 'definition' && 
                     questions[currentIdx].type !== 'context' && 
                     questions[currentIdx].type !== 'matching' && 
                     questions[currentIdx].type !== 'nuance' && (
                      <p className="text-xl font-serif italic text-editorial-text border-b-2 border-editorial-text inline-block">
                        {questions[currentIdx].word.word}
                      </p>
                    )}
                  </div>
                </div>

                {questions[currentIdx].type === 'matching' ? (
                  <div className="flex-1 flex flex-col py-8">
                    <div className="mb-12 p-6 bg-editorial-accent/30 border border-editorial-border rounded-sm italic text-editorial-muted text-lg font-serif">
                       Connect each lexeme with its corresponding semantic definition.
                    </div>
                    <MatchingUI 
                      pairs={questions[currentIdx].matchingPairs || []} 
                      onComplete={handleMatchingComplete} 
                    />
                  </div>
                ) : (
                  <>
                    {questions[currentIdx].type === 'context' ? (
                      <div className="mb-12 p-8 bg-editorial-accent/30 border border-editorial-border rounded-sm italic text-editorial-muted text-lg md:text-xl font-serif leading-relaxed">
                        “{questions[currentIdx].word.example.replace(new RegExp(questions[currentIdx].word.word, 'gi'), '__________')}”
                      </div>
                    ) : questions[currentIdx].type === 'lexeme-definition' ? (
                      <div className="mb-12 p-8 bg-editorial-accent/30 border border-editorial-border rounded-sm italic text-editorial-muted text-lg font-serif">
                        Select the accurate definition for the term displayed above.
                      </div>
                    ) : questions[currentIdx].type === 'nuance' ? (
                      <div className="mb-12 p-8 bg-editorial-accent/30 border border-editorial-border rounded-sm flex flex-col items-center gap-4">
                        <p className="text-xl font-serif italic text-editorial-text border-b-2 border-editorial-text inline-block">{questions[currentIdx].word.word}</p>
                        <p className="text-editorial-muted text-lg font-serif italic text-center">Which of the following best describes the subtle nuance of this lexeme?</p>
                      </div>
                    ) : questions[currentIdx].type === 'derivative' ? (
                      <div className="mb-12 p-8 bg-editorial-accent/30 border border-editorial-border rounded-sm flex flex-col items-center gap-4">
                        <p className="text-xl font-serif italic text-editorial-text border-b-2 border-editorial-text inline-block">{questions[currentIdx].word.word}</p>
                        <p className="text-editorial-muted text-lg font-serif italic text-center">
                          Which of the following is the standard <span className="font-bold underline">{questions[currentIdx].word.derivatives?.[0].form}</span> form of this word?
                        </p>
                      </div>
                    ) : (
                      <div className="mb-12 p-8 bg-editorial-accent/30 border border-editorial-border rounded-sm italic text-editorial-muted text-lg font-serif">
                        “{questions[currentIdx].word.definition}”
                      </div>
                    )}

                    <div className={`grid grid-cols-1 ${questions[currentIdx].type === 'lexeme-definition' ? 'md:grid-cols-1 gap-4' : 'md:grid-cols-2 gap-4'}`}>
                      {questions[currentIdx].options.map((option) => {
                        const isSelected = selectedOption === option;
                        const isCorrectOption = option === questions[currentIdx].correctAnswer;
                        const isIncorrectSelected = isSelected && !isCorrectOption;
                        
                        let bgClass = 'bg-white border-editorial-border hover:border-editorial-text';
                        if (selectedOption !== null) {
                          if (isCorrectOption) bgClass = 'bg-green-50 border-green-500 text-green-700 shadow-sm shadow-green-100';
                          else if (isSelected) bgClass = 'bg-red-50 border-red-500 text-red-700 shadow-sm shadow-red-100';
                          else bgClass = 'bg-white border-editorial-border opacity-50 cursor-default';
                        }

                        return (
                          <motion.button
                            key={option}
                            layout
                            whileHover={selectedOption === null ? { scale: 1.01, x: 4 } : {}}
                            whileTap={selectedOption === null ? { scale: 0.99 } : {}}
                            animate={
                              isIncorrectSelected 
                                ? { x: [-4, 4, -4, 4, 0], transition: { duration: 0.4 } } 
                                : isCorrectOption && selectedOption !== null 
                                  ? { scale: [1, 1.02, 1], transition: { duration: 0.3 } }
                                  : {}
                            }
                            onClick={() => handleOptionClick(option)}
                            disabled={selectedOption !== null}
                            className={`p-6 border text-left italic transition-all relative ${questions[currentIdx].type === 'lexeme-definition' ? 'text-base font-serif' : 'text-lg font-serif'} ${bgClass}`}
                          >
                            <span className="relative z-10">{option}</span>
                            {selectedOption !== null && isCorrectOption && (
                              <motion.div 
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500"
                              >
                                <CheckCircle2 size={24} />
                              </motion.div>
                            )}
                            {selectedOption !== null && isSelected && !isCorrectOption && (
                              <motion.div 
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500"
                              >
                                <AlertCircle size={24} />
                              </motion.div>
                            )}
                          </motion.button>
                        );
                      })}
                    </div>
                  </>
                )}

                {selectedOption !== null && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-12 flex justify-center"
                  >
                    <button
                      onClick={nextQuestion}
                      className="bg-editorial-text text-white px-10 py-4 rounded-sm font-bold uppercase tracking-widest text-xs flex items-center gap-2"
                    >
                      {currentIdx === questions.length - 1 ? 'Finish Assessment' : 'Continue'} <ChevronRight size={16} />
                    </button>
                  </motion.div>
                )}
              </motion.div>
            )}

            {step === 'result' && (
              <motion.div 
                key="result"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center py-12"
              >
                <div className="w-24 h-24 bg-editorial-accent rounded-full flex items-center justify-center mb-8">
                  <Trophy className="text-editorial-text" size={48} />
                </div>
                
                <div className="text-center mb-12">
                  <h3 className="text-4xl font-serif italic text-editorial-text mb-2">Assessment Complete</h3>
                  <p className="text-editorial-meta uppercase tracking-widest text-[10px] font-bold">Lexical proficiency score indexed</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-16">
                  <div className="bg-white border border-editorial-border p-8 text-center rounded-sm">
                    <p className="text-[10px] uppercase font-bold tracking-widest text-editorial-meta mb-2">Accuracy Rate</p>
                    <p className="text-5xl font-serif italic text-editorial-text">{Math.round((score / questions.length) * 100)}%</p>
                  </div>
                  <div className="bg-white border border-editorial-border p-8 text-center rounded-sm">
                    <p className="text-[10px] uppercase font-bold tracking-widest text-editorial-meta mb-2">Words Mastered</p>
                    <p className="text-5xl font-serif italic text-editorial-text">{score}/{questions.length}</p>
                  </div>
                  <div className="bg-white border border-editorial-border p-8 text-center rounded-sm">
                    <p className="text-[10px] uppercase font-bold tracking-widest text-editorial-meta mb-2">Completion Time</p>
                    <div className="flex items-center justify-center gap-2 text-editorial-text">
                      <Clock size={20} className="text-editorial-meta" />
                      <p className="text-4xl font-serif italic">{Math.floor(duration / 60)}:{(duration % 60).toString().padStart(2, '0')}</p>
                    </div>
                  </div>
                </div>

                {missedWords.length > 0 && (
                  <div className="w-full mb-16">
                    <h4 className="text-[10px] uppercase font-bold tracking-widest text-editorial-meta mb-6 text-center">Identified Vulnerabilities</h4>
                    <div className="flex flex-wrap justify-center gap-3">
                      {missedWords.map(w => (
                        <span key={w} className="px-4 py-2 bg-white border border-editorial-border text-editorial-text font-serif italic text-sm">
                          {w}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => setStep('setup')}
                    className="bg-editorial-text text-white px-10 py-5 rounded-sm font-bold uppercase tracking-widest text-xs flex items-center gap-2 hover:translate-y-[-2px] active:translate-y-0 transition-transform"
                  >
                    <RotateCcw size={16} /> New Assessment
                  </button>
                  <button
                    onClick={onClose}
                    className="px-10 py-5 border border-editorial-border text-editorial-meta font-bold uppercase tracking-widest text-xs hover:border-editorial-text hover:text-editorial-text transition-colors"
                  >
                    Return to Study
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};
