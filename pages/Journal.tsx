
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Clock, Sparkles } from 'lucide-react';
import { JOURNAL_ARTICLES } from '../constants';

const Journal: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'growth' | 'sleep' | 'nutrition' | 'expert'>('all');

  const categories = [
    { id: 'all', label: '全部文章' },
    { id: 'growth', label: '長高關鍵' },
    { id: 'sleep', label: '睡眠發育' },
    { id: 'nutrition', label: '營養食譜' },
    { id: 'expert', label: '醫師專欄' },
  ];

  const featuredArticle = JOURNAL_ARTICLES[0];
  const remainingArticles = useMemo(() => {
    const filtered = JOURNAL_ARTICLES.filter(a => filter === 'all' || a.category === filter);
    return filter === 'all' ? filtered.filter(a => a.id !== featuredArticle.id) : filtered;
  }, [filter]);

  const catColors: Record<string, string> = {
    growth: 'bg-[#A7C7E7]/20 text-[#A7C7E7]',
    sleep: 'bg-[#C1D7C1]/30 text-[#88A688]',
    nutrition: 'bg-[#F2D5D5]/40 text-[#D9A3A3]',
    expert: 'bg-[#F9E7B8]/40 text-[#D4AF37]',
  };

  return (
    <div className="pt-24 md:pt-40 space-y-0 bg-[#FDFBF7] min-h-screen">
      <section className="container-custom space-y-8 mb-16">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight leading-tight"> GrowFly 成長百科</h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl leading-relaxed">
            從醫學實證到日常照護，陪您破解成長路上的每一個迷思。
          </p>
        </div>

        <div className="flex flex-wrap gap-3 md:gap-4 pt-4 sticky top-20 z-30 py-4 bg-[#FDFBF7]/80 backdrop-blur-md">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={`px-6 py-2 rounded-full font-black text-xs transition-all shadow-sm border ${
                filter === cat.id 
                ? 'bg-slate-800 text-white border-slate-800 shadow-xl' 
                : 'bg-white text-slate-400 border-slate-100 hover:border-slate-200 hover:text-slate-600'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {filter === 'all' && (
        <section className="container-custom mb-16 md:mb-24">
          <Link 
            to={`/journal/${featuredArticle.id}`}
            className="group block bg-white rounded-[20px] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100"
          >
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-[60%] aspect-[16/9] overflow-hidden relative">
                <img 
                  src={featuredArticle.image} 
                  alt={featuredArticle.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-5 py-2 rounded-full flex items-center space-x-2 text-[#D4AF37] text-[10px] font-black shadow-lg">
                  <Sparkles size={12} />
                  <span>編輯精選</span>
                </div>
              </div>
              <div className="w-full md:w-[40%] p-8 md:p-12 space-y-6">
                <span className={`px-4 py-1 rounded-full text-[10px] font-black tracking-widest uppercase ${catColors[featuredArticle.category] || 'bg-slate-100 text-slate-400'}`}>
                  {featuredArticle.categoryName}
                </span>
                <h2 className="text-2xl md:text-3xl font-black text-slate-800 group-hover:text-[#A7C7E7] transition-colors leading-tight">
                  {featuredArticle.title}
                </h2>
                <p className="text-slate-500 font-medium leading-relaxed line-clamp-2 text-sm">
                  {featuredArticle.summary}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                   <div className="flex items-center space-x-4 text-[10px] font-black text-slate-400">
                     <span className="flex items-center space-x-1 tracking-widest"><Clock size={12} /> <span>⏱ {featuredArticle.readTime}</span></span>
                   </div>
                   <div className="text-slate-800 font-black text-sm flex items-center group-hover:translate-x-2 transition-transform">
                     <span>閱讀全文</span>
                     <ChevronRight size={16} />
                   </div>
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      <section className="container-custom pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {remainingArticles.map((article) => (
            <Link 
              key={article.id} 
              to={`/journal/${article.id}`}
              className="group flex flex-col bg-white rounded-[20px] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-50"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-5 left-5">
                  <span className={`px-3 py-1 rounded-full text-[9px] font-black tracking-widest uppercase shadow-sm ${catColors[article.category] || 'bg-white/90 text-slate-500'}`}>
                    #{article.categoryName}
                  </span>
                </div>
                <div className="absolute bottom-5 right-5 bg-slate-900/60 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-black text-white flex items-center space-x-1 shadow-lg">
                   <Clock size={10} /> <span>⏱ {article.readTime}</span>
                </div>
              </div>

              <div className="p-8 space-y-5 flex-grow flex flex-col">
                <div className="space-y-3 flex-grow">
                  <h3 className="text-xl font-black text-slate-800 group-hover:text-[#A7C7E7] transition-colors leading-tight line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-slate-500 font-medium leading-relaxed line-clamp-2 text-xs">
                    {article.summary}
                  </p>
                </div>
                
                <div className="flex items-center justify-between text-[9px] font-black text-slate-300 uppercase tracking-widest pt-5 border-t border-slate-50">
                  <span>{article.date}</span>
                  <span className="text-slate-800 group-hover:underline">READ MORE →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Journal;
