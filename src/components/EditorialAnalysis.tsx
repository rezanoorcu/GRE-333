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
  RefreshCw,
  Bookmark,
  BookmarkCheck,
  Search
} from 'lucide-react';
import axios from 'axios';
import { VOCABULARY_DATA } from '../data';
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

  const allWords = useMemo(() => VOCABULARY_DATA.flatMap(b => b.words), []);

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
              <span className="block pt-2 border-t border-white/20 italic opacity-60">Click to save in Important Vocab</span>
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
          <RefreshCw size={14} />
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
                        <span className="text-editorial-accent font-serif italic">{v.word}</span>
                        <button 
                          onClick={(e) => { e.stopPropagation(); removeSavedWord(v.word); }}
                          className="opacity-0 group-hover:opacity-100 text-[8px] uppercase tracking-tighter hover:text-red-400 transition-opacity"
                        >
                          Remove
                        </button>
                      </div>
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
            className="flex-1 flex flex-col h-full overflow-hidden"
          >
            <div className="shrink-0 border-b border-editorial-border bg-white px-6 md:px-12 py-4 flex items-center justify-between sticky top-0 z-20">
              <button 
                onClick={() => setSelectedArticle(null)}
                className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-editorial-muted hover:text-editorial-text transition-colors"
              >
                <ChevronLeft size={16} />
                Back to Feed
              </button>
              <div className="flex items-center gap-4">
                <div className="hidden md:flex flex-col items-end mr-4">
                  <span className="text-[8px] uppercase font-bold text-emerald-500">Live Connection</span>
                  <span className="text-[10px] font-serif italic text-editorial-text truncate max-w-[200px]">{selectedArticle.title}</span>
                </div>
                <a 
                  href={selectedArticle.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-editorial-meta hover:text-editorial-text transition-colors"
                >
                  Source <ExternalLink size={14} />
                </a>
              </div>
            </div>

            <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
              <div className="flex-1 overflow-y-auto p-6 md:p-20 bg-white">
                <div className="max-w-3xl mx-auto">
                  <header className="mb-12 border-b border-editorial-border pb-12">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-editorial-text text-white rounded-sm">
                        Opinion • {selectedArticle.source}
                      </span>
                      <span className="text-[10px] font-mono text-editorial-meta">
                        {new Date(selectedArticle.pubDate).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </span>
                    </div>
                    <h1 className="text-3xl md:text-6xl font-serif tracking-tight leading-tight text-editorial-text mb-8">
                      {selectedArticle.title}
                    </h1>
                    <div className="h-1 w-24 bg-editorial-accent" />
                  </header>

                  <div className="prose prose-neutral max-w-none">
                    {isScraping ? (
                      <div className="py-20 text-center flex flex-col items-center">
                        <Loader2 className="animate-spin text-editorial-meta mb-4" size={32} />
                        <p className="text-sm font-serif italic text-editorial-muted">Analyzing syntactic flow...</p>
                      </div>
                    ) : (
                      <div className="text-xl md:text-2xl leading-relaxed text-editorial-text whitespace-pre-wrap font-serif selection:bg-editorial-accent selection:text-editorial-text">
                        {highlightedContent.length > 0 ? highlightedContent : "No content extracted for analysis."}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <aside className="w-full md:w-96 border-l border-editorial-border bg-editorial-accent/10 overflow-y-auto shrink-0 transition-all">
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-8 border-b border-editorial-border pb-4">
                    <BookOpen size={18} className="text-editorial-text" />
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-editorial-text">Linguistic Inventory</h4>
                      <p className="text-[10px] text-editorial-meta mt-0.5">Found in this Article</p>
                    </div>
                  </div>

                  {isScraping ? (
                    <div className="space-y-4">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="animate-pulse flex flex-col gap-2">
                          <div className="h-4 bg-editorial-border w-1/3 rounded" />
                          <div className="h-12 bg-editorial-border w-full rounded" />
                        </div>
                      ))}
                    </div>
                  ) : identifiedWords.length > 0 ? (
                    <div className="space-y-8">
                      {identifiedWords.map((word, idx) => (
                        <motion.div 
                          key={word.word + idx}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <h5 className="text-lg font-serif italic text-editorial-text mb-2">{word.word}</h5>
                          <div className="bg-white border border-editorial-border p-4 rounded-sm shadow-sm relative group">
                            <p className="text-[9px] uppercase font-bold tracking-widest text-editorial-meta mb-2 border-b border-editorial-border pb-2">Definition</p>
                            <p className="text-xs leading-relaxed text-editorial-text">{word.definition}</p>
                            {word.nuance && (
                              <p className="text-[9px] italic text-editorial-muted mt-3">“{word.nuance}”</p>
                            )}
                            <button 
                              onClick={() => {
                                const ctx = articleContent.substring(Math.max(0, articleContent.indexOf(word.word) - 40), Math.min(articleContent.length, articleContent.indexOf(word.word) + 40));
                                saveWord(word.word, ctx, word.definition);
                              }}
                              className="absolute top-2 right-2 text-editorial-meta hover:text-editorial-text opacity-0 group-hover:opacity-100 transition-all p-1"
                              title="Add to Save Vocab"
                            >
                              <Bookmark size={14} />
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="py-12 text-center">
                      <Newspaper size={32} className="mx-auto text-editorial-meta/50 mb-4" />
                      <p className="text-sm text-editorial-muted italic">Click on any words in the text to capture them for study.</p>
                    </div>
                  )}

                  <div className="mt-12 pt-8 border-t border-editorial-border">
                    <div className="bg-editorial-text text-white p-6 rounded-sm shadow-xl">
                      <h4 className="text-[10px] font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                        <BookmarkCheck size={14} className="text-editorial-accent" />
                        Recently Saved
                      </h4>
                      <div className="space-y-3">
                        {savedVocab.slice(0, 3).map((v, i) => (
                          <div key={i} className="text-xs flex flex-col gap-0.5 border-b border-white/5 pb-2">
                            <span className="font-serif italic text-editorial-accent">{v.word}</span>
                            <span className="text-[8px] opacity-60 truncate">“{v.context}”</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

