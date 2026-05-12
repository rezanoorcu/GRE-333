import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Newspaper, 
  ChevronLeft, 
  ExternalLink, 
  Loader2, 
  AlertCircle,
  Clock,
  BookOpen,
  ArrowRight,
  TrendingUp,
  RotateCcw,
  Bookmark,
  BookmarkCheck,
  Search,
  X
} from 'lucide-react';
import axios from 'axios';
import { VOCABULARY_DATA } from '../data';
import { BARRON_800_DATA } from '../constants/barronData';
import { WordEntry, SavedVocab } from '../types';

interface Article {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  source: string;
}

interface EditorialAnalysisProps {
  savedVocab: SavedVocab[];
  onSaveVocab: React.Dispatch<React.SetStateAction<SavedVocab[]>>;
}

export const EditorialAnalysis: React.FC<EditorialAnalysisProps> = ({ 
  savedVocab, 
  onSaveVocab 
}) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [articleContent, setArticleContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [isScraping, setIsScraping] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Removed local savedVocab state as it's now a prop

  const allWords = useMemo(() => [
    ...VOCABULARY_DATA.flatMap(b => b.words),
    ...BARRON_800_DATA.flatMap(b => b.words)
  ], []);

  useEffect(() => {
    fetchEditorials();
  }, []);

  const fetchEditorials = async () => {
    if (!navigator.onLine) {
      setError('You are currently offline. Live editorials require an internet connection.');
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get('/api/editorials');
      
      if (typeof response.data === 'string' && response.data.includes('<!doctype')) {
        throw new Error('Routing failure: Server returned HTML instead of JSON feed.');
      }
      
      setArticles(Array.isArray(response.data) ? response.data : []);
    } catch (err: any) {
      console.error('Failed to fetch editorials:', err);
      const detailMsg = err.response?.data?.details || err.message;
      setError(`Linguistic Feed Connection Error: ${detailMsg}`);
    } finally {
      setIsLoading(false);
    }
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const loadArticle = async (article: Article) => {
    setSelectedArticle(article);
    setIsScraping(true);
    setArticleContent('');
    try {
      const response = await axios.post('/api/scrape-article', { url: article.link });
      setArticleContent(response.data.content || "Content extraction was restricted or failed for this specific article.");
    } catch (err: any) {
      console.error('Failed to scrape article:', err);
      setArticleContent(article.description || 'Content could not be extracted.');
    } finally {
      setIsScraping(false);
    }
  };

  const saveWord = useCallback((word: string, context: string, definition?: string) => {
    const cleanWord = word.trim().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").toLowerCase();
    if (cleanWord.length < 2) return;

    onSaveVocab(prev => {
      if (prev.some(v => v.word.toLowerCase() === cleanWord)) return prev;
      return [{
        word: cleanWord,
        context: context.trim(),
        example: context.trim(), // Map context to example for compatibility with WordEntry/Practice
        source: selectedArticle?.source || 'The Daily Star',
        date: new Date().toISOString(),
        definition: definition || 'Definition pending analysis'
      }, ...prev];
    });
  }, [selectedArticle, onSaveVocab]);

  const removeSavedWord = (word: string) => {
    onSaveVocab(prev => prev.filter(v => v.word.toLowerCase() !== word.toLowerCase()));
  };

  const highlightedContent = useMemo(() => {
    if (!articleContent) return [];

    // Split content into words and non-word characters
    const parts = articleContent.split(/(\b\w+\b)/g);
    
    return parts.map((part, i) => {
      const isWord = /^\w+$/.test(part);
      if (!isWord) return part;

      const lowerPart = part.toLowerCase();
      const match = allWords.find(w => w.word.toLowerCase() === lowerPart);
      const isSaved = savedVocab.some(v => v.word.toLowerCase() === lowerPart);
      
      if (match) {
        return (
          <span 
            key={i} 
            className="bg-editorial-accent text-editorial-text font-bold px-1 rounded-sm cursor-help border-b-2 border-editorial-text group relative inline-block"
            onClick={() => saveWord(part, articleContent.substring(Math.max(0, articleContent.indexOf(part) - 50), Math.min(articleContent.length, articleContent.indexOf(part) + 50)), match.definition)}
          >
            {part}
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-editorial-text text-white text-[10px] rounded shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 normal-case font-sans">
              <span className="flex justify-between items-start mb-1">
                <span className="font-serif italic text-sm text-editorial-accent">{match.word}</span>
                {isSaved ? <BookmarkCheck size={12} className="text-emerald-400" /> : <Bookmark size={12} className="opacity-50" />}
              </span>
              <span className="block opacity-80 leading-relaxed mb-2">{match.definition}</span>
              <div className="flex items-center justify-between pt-2 border-t border-white/20">
                <span className="italic opacity-60">Click to save</span>
                <a 
                  href={`https://www.collinsdictionary.com/dictionary/english/${match.word}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-editorial-accent hover:underline flex items-center gap-1"
                  onClick={e => e.stopPropagation()}
                >
                  Collins <ExternalLink size={10} />
                </a>
              </div>
            </span>
          </span>
        );
      }

      // Small hover to save any other generic word
      return (
        <span 
          key={i} 
          className={`cursor-pointer hover:bg-neutral-100 px-0.5 rounded transition-colors group relative inline-block ${isSaved ? 'text-editorial-text font-bold decoration-dotted underline' : ''}`}
          onClick={() => saveWord(part, articleContent.substring(Math.max(0, articleContent.indexOf(part) - 50), Math.min(articleContent.length, articleContent.indexOf(part) + 50)))}
        >
          {part}
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 p-1 bg-black text-white text-[8px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
            {isSaved ? 'Already Saved' : 'Save Vocab'}
          </span>
        </span>
      );
    });
  }, [articleContent, allWords, savedVocab, saveWord]);

  const identifiedWords = useMemo(() => {
    if (!articleContent) return [];
    const wordsFound = new Set<string>();
    const identified: WordEntry[] = [];
    
    allWords.forEach(w => {
      const regex = new RegExp(`\\b${w.word}\\b`, 'i');
      if (regex.test(articleContent) && !wordsFound.has(w.word.toLowerCase())) {
        wordsFound.add(w.word.toLowerCase());
        identified.push(w);
      }
    });
    return identified;
  }, [articleContent, allWords]);

  if (isLoading) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-12 text-center bg-editorial-bg">
        <Loader2 className="animate-spin text-editorial-meta mb-4" size={40} />
        <h3 className="text-xl font-serif italic text-editorial-text">Retrieving Lexical Intelligence...</h3>
        <p className="text-xs text-editorial-muted uppercase tracking-widest mt-2">Connecting to The Daily Star Opinion Feeds</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-12 text-center bg-editorial-bg">
        <AlertCircle className="text-red-400 mb-4" size={40} />
        <h3 className="text-xl font-serif italic text-editorial-text">Connection Interrupted</h3>
        <p className="text-sm text-editorial-muted mb-8 max-w-xs">{error}</p>
        <button 
          onClick={fetchEditorials}
          className="px-8 py-3 bg-editorial-text text-white text-[10px] uppercase font-bold tracking-widest rounded-sm hover:scale-105 transition-transform shadow-lg flex items-center gap-2"
        >
          <RotateCcw size={14} />
          Retry Connection
        </button>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col h-full bg-editorial-bg overflow-hidden">
      <AnimatePresence mode="wait">
        {!selectedArticle ? (
          <motion.div 
            key="feed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex-1 overflow-y-auto p-5 md:p-12 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12"
          >
            <div className="lg:col-span-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-editorial-border pb-8">
                <div>
                  <h2 className="text-2xl md:text-5xl font-serif tracking-tight text-editorial-text mb-2 md:mb-4">Live Editorials</h2>
                  <p className="text-editorial-muted uppercase text-[8px] md:text-[10px] tracking-[0.2em] font-bold">Contextual Analysis • The Daily Star</p>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp size={16} className="text-editorial-meta" />
                  <span className="text-[10px] uppercase font-bold tracking-widest text-editorial-meta">
                    {articles.length} Updates Found
                  </span>
                </div>
              </div>

                  <div className="grid grid-cols-1 gap-8">
                {articles.map((article, idx) => (
                  <motion.div
                    key={article.link + idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => loadArticle(article)}
                    className="group bg-white border border-editorial-border p-8 rounded-sm shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col md:flex-row gap-8 items-start"
                  >
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 bg-editorial-accent border border-editorial-border rounded-sm">
                          {article.source}
                        </span>
                        <span className="text-[9px] font-mono text-editorial-meta flex items-center gap-1">
                          <Clock size={10} />
                          {new Date(article.pubDate).toLocaleDateString()}
                        </span>
                      </div>
                      <h3 className="text-xl md:text-3xl font-serif italic text-editorial-text mb-3 leading-tight group-hover:underline decoraion-editorial-accent underline-offset-4">
                        {article.title}
                      </h3>
                      <p className="text-sm text-editorial-muted mb-6 flex-1 line-clamp-2 leading-relaxed">
                        {article.description}
                      </p>
                      <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-editorial-text">
                        Analyze Context <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 space-y-8">
              <div className="bg-editorial-text text-white p-8 rounded-sm shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <BookmarkCheck size={24} className="text-editorial-accent" />
                  <h4 className="text-lg font-serif">Important Vocab</h4>
                </div>
                <p className="text-[10px] uppercase tracking-[0.2em] opacity-60 mb-6 border-b border-white/10 pb-4">
                  {savedVocab.length} Words Captured
                </p>
                <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                  {savedVocab.length > 0 ? savedVocab.map((v, i) => (
                    <div key={i} className="group relative bg-white/5 p-4 rounded-sm hover:bg-white/10 transition-colors">
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-editorial-accent font-serif italic uppercase">{v.word}</span>
                        <div className="flex items-center gap-2">
                          <a 
                            href={`https://www.collinsdictionary.com/dictionary/english/${v.word}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[9px] uppercase tracking-tighter text-editorial-accent hover:underline opacity-60 group-hover:opacity-100 transition-opacity"
                            title="Open in Collins Dictionary"
                          >
                            Collins
                          </a>
                          <button 
                            onClick={(e) => { e.stopPropagation(); removeSavedWord(v.word); }}
                            className="opacity-0 group-hover:opacity-100 text-[8px] uppercase tracking-tighter hover:text-red-400 transition-opacity"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <p className="text-[11px] text-white/90 leading-snug mb-1 font-serif">{v.definition}</p>
                      <p className="text-[9px] italic opacity-60 line-clamp-2 leading-relaxed">“{v.context}”</p>
                    </div>
                  )) : (
                    <div className="text-center py-8 opacity-40">
                      <Search size={32} className="mx-auto mb-2" />
                      <p className="text-xs italic">Click words in articles to build your context library.</p>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="bg-white border border-editorial-border p-8 rounded-sm">
                <h4 className="text-xs font-bold uppercase tracking-widest text-editorial-text mb-4">Linguistic Insights</h4>
                <p className="text-[10px] text-editorial-muted leading-relaxed">
                  Our system scans The Daily Star's latest editorials to identify complex vocabulary in native contexts. Master GRE words as they are used by international analysts.
                </p>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="article"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="flex-1 flex flex-col h-full overflow-hidden relative"
          >
            <header className="fixed top-4 left-1/2 -translate-x-1/2 z-40 bg-white/90 backdrop-blur-md border border-editorial-border px-4 py-2 flex items-center justify-between gap-6 transition-all rounded-full shadow-lg w-fit min-w-[320px] max-w-[95vw]">
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setSelectedArticle(null)}
                  className="p-1 text-editorial-text hover:bg-editorial-accent rounded-full transition-colors"
                >
                  <ChevronLeft size={16} />
                </button>
                <div className="whitespace-nowrap hidden sm:block border-l border-editorial-border pl-3">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-editorial-text">Editorial Reader</h4>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-[9px] uppercase font-black tracking-widest transition-all shadow-md active:scale-95 ${isSidebarOpen ? 'bg-editorial-text text-white' : 'bg-editorial-accent text-editorial-text border border-editorial-border'}`}
                >
                  <BookOpen size={12} />
                  {isSidebarOpen ? "Reader Mode" : "Inventory"}
                  {identifiedWords.length > 0 && <span className="ml-0.5 opacity-60">({identifiedWords.length})</span>}
                </button>

                <a 
                  href={selectedArticle.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 text-editorial-meta hover:text-editorial-text transition-colors bg-neutral-100 hover:bg-neutral-200 rounded-full"
                  title="Source"
                >
                  <ExternalLink size={12} />
                </a>
              </div>
            </header>

            <div className="flex-1 flex relative overflow-hidden bg-editorial-bg transition-colors">
              {/* Main Reading Area */}
              <div className="flex-1 overflow-y-auto custom-scrollbar scroll-smooth pt-16">
                <main className="max-w-3xl mx-auto px-6 py-12 md:py-24">
                  <header className="mb-16 border-b-2 border-editorial-text pb-12">
                    <div className="flex items-center gap-3 mb-8">
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] px-3 py-1.5 bg-editorial-text text-white rounded-sm">
                        {selectedArticle.source} • Opinion
                      </span>
                      <span className="text-[10px] font-mono text-editorial-meta bg-editorial-accent/30 px-2 py-1 rounded-sm border border-editorial-border">
                        {new Date(selectedArticle.pubDate).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </span>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-serif tracking-tighter leading-[1.05] text-editorial-text mb-10 selection:bg-editorial-accent underline decoration-editorial-accent transition-all">
                      {selectedArticle.title}
                    </h1>
                    <div className="flex items-center gap-2 text-editorial-meta">
                      <Clock size={12} />
                      <span className="text-[10px] uppercase font-bold tracking-widest italic">{Math.ceil(articleContent.split(' ').length / 200)} Minute Read</span>
                    </div>
                  </header>

                  <article className="prose prose-neutral max-w-none">
                    {isScraping ? (
                      <div className="py-32 text-center flex flex-col items-center">
                        <Loader2 className="animate-spin text-editorial-text mb-6" size={48} />
                        <p className="text-lg font-serif italic text-editorial-text opacity-60">Decrypting linguistic patterns...</p>
                        <div className="mt-8 w-48 h-1 bg-editorial-border rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ x: '-100%' }}
                            animate={{ x: '100%' }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
                            className="w-full h-full bg-editorial-text"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="text-xl md:text-2xl leading-[1.7] text-editorial-text/90 whitespace-pre-wrap font-serif selection:bg-editorial-accent selection:text-editorial-text first-letter:text-7xl first-letter:font-black first-letter:mr-3 first-letter:float-left first-letter:leading-none">
                        {highlightedContent.length > 0 ? highlightedContent : (
                          <div className="text-center py-20 bg-white border border-editorial-border p-12 rounded-sm shadow-sm">
                            <p className="mb-6">Content extraction was restricted for this specific editorial.</p>
                            <a 
                              href={selectedArticle.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="px-8 py-3 bg-editorial-text text-white text-[10px] uppercase font-bold tracking-widest rounded-sm inline-flex items-center gap-2 hover:bg-zinc-800 transition-colors"
                            >
                              Open Full Source <ExternalLink size={12} />
                            </a>
                          </div>
                        )}
                      </div>
                    )}
                  </article>

                  <footer className="mt-24 pt-12 border-t border-editorial-border text-center">
                    <p className="text-[10px] uppercase font-black tracking-[0.5em] text-editorial-meta mb-8">End of Analysis</p>
                    <button 
                      onClick={() => setSelectedArticle(null)}
                      className="px-10 py-4 bg-white border-2 border-editorial-text text-editorial-text text-[11px] uppercase font-black tracking-widest hover:bg-editorial-text hover:text-white transition-all shadow-xl font-sans"
                    >
                      Return to Research Feed
                    </button>
                  </footer>
                </main>
              </div>

              {/* Sliding Inventory Drawer - Prevents Reflow */}
              <AnimatePresence>
                {isSidebarOpen && (
                  <>
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onClick={() => setIsSidebarOpen(false)}
                      className="absolute inset-0 bg-editorial-text/10 backdrop-blur-[2px] z-40 md:hidden"
                    />
                    <motion.aside 
                      initial={{ x: '100%' }}
                      animate={{ x: 0 }}
                      exit={{ x: '100%' }}
                      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                      className="absolute top-0 right-0 h-full w-full md:w-[450px] bg-white border-l-2 border-editorial-text z-50 shadow-[-20px_0_50px_rgba(0,0,0,0.1)] flex flex-col"
                    >
                    <div className="shrink-0 p-8 border-b border-editorial-border flex items-center justify-between bg-editorial-bg transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-editorial-text text-white rounded-sm">
                          <BookOpen size={18} />
                        </div>
                        <div>
                          <h4 className="text-xs font-black uppercase tracking-widest text-editorial-text">Linguistic Inventory</h4>
                          <p className="text-[9px] font-bold text-editorial-meta mt-0.5 tracking-tighter uppercase italic">{identifiedWords.length} Words Extracted</p>
                        </div>
                      </div>
                      <button 
                        onClick={() => setIsSidebarOpen(false)}
                        className="p-2 hover:bg-editorial-accent rounded-full transition-colors text-editorial-text"
                      >
                        <X size={20} />
                      </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-8 custom-scrollbar space-y-10 bg-white transition-colors">
                      {isScraping ? (
                        <div className="space-y-6">
                          {[1, 2, 3, 4].map(i => (
                            <div key={i} className="animate-pulse flex flex-col gap-3">
                              <div className="h-5 bg-editorial-border w-1/4 rounded" />
                              <div className="h-20 bg-editorial-border w-full rounded" />
                            </div>
                          ))}
                        </div>
                      ) : identifiedWords.length > 0 ? (
                        <div className="space-y-10 pb-20">
                          {identifiedWords.map((word, idx) => {
                            const isSaved = savedVocab.some(v => v.word.toLowerCase() === word.word.toLowerCase());
                            return (
                              <motion.div 
                                key={word.word + idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                className="group"
                              >
                                <div className="flex justify-between items-baseline mb-2">
                                  <h5 className="text-2xl font-serif italic text-editorial-text">{word.word}</h5>
                                  <button 
                                    onClick={() => {
                                      const ctx = articleContent.substring(Math.max(0, articleContent.indexOf(word.word) - 40), Math.min(articleContent.length, articleContent.indexOf(word.word) + 40));
                                      saveWord(word.word, ctx, word.definition);
                                    }}
                                    disabled={isSaved}
                                    className={`p-2 rounded-full border transition-all ${isSaved ? 'bg-editorial-text text-white border-editorial-text' : 'bg-white text-editorial-meta border-editorial-border hover:border-editorial-text hover:text-editorial-text shadow-sm'}`}
                                  >
                                    {isSaved ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
                                  </button>
                                </div>
                                <div className="bg-editorial-accent/30 border-l-4 border-editorial-text p-5 rounded-r-sm">
                                <div className="flex justify-between items-center mb-3">
                                  <p className="text-[10px] uppercase font-black tracking-widest text-editorial-meta opacity-60">Academic Definition</p>
                                  <a 
                                    href={`https://www.collinsdictionary.com/dictionary/english/${word.word}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[9px] uppercase font-bold text-editorial-text hover:underline"
                                  >
                                    Collins External
                                  </a>
                                </div>
                                  <p className="text-sm leading-relaxed text-editorial-text font-medium mb-4">{word.definition}</p>
                                  {word.nuance && (
                                    <p className="text-[10px] italic text-editorial-muted border-t border-editorial-text/10 pt-3 mt-3">
                                      {word.nuance}
                                    </p>
                                  )}
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="py-20 text-center px-6">
                          <div className="w-16 h-16 bg-editorial-accent rounded-full flex items-center justify-center mx-auto mb-6 text-editorial-text shadow-inner">
                            <Search size={32} />
                          </div>
                          <h5 className="text-xl font-serif italic text-editorial-text mb-4">No Automatic Matches</h5>
                          <p className="text-xs text-editorial-muted leading-relaxed uppercase tracking-widest font-bold">
                            Our primary lexical patterns didn't detect specific targets in this sample. 
                            <br/><br/>
                            <span className="text-editorial-text">Pro Tip:</span> Click on any word in the text to manually capture it for analysis.
                          </p>
                        </div>
                      )}
                    </div>
                    
                    <div className="shrink-0 p-8 bg-editorial-text text-white border-t border-white/10">
                      <h5 className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                        <TrendingUp size={14} className="text-editorial-accent" />
                        Capture Queue
                      </h5>
                      <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                        {savedVocab.slice(0, 5).map((v, i) => (
                          <div key={i} className="shrink-0 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-[10px] font-serif italic text-editorial-accent">
                            {v.word}
                          </div>
                        ))}
                        {savedVocab.length === 0 && <span className="text-[10px] opacity-40 italic">Queue Empty</span>}
                      </div>
                    </div>
                  </motion.aside>
                </>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

