
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';
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

  // 現在顯示所有符合過濾條件的文章，不再排除任何「精選」文章
  const displayArticles = useMemo(() => {
    return JOURNAL_ARTICLES.filter(a => filter === 'all' || a.category === filter);
  }, [filter]);

  const catColors: Record<string, string> = {
    growth: 'text-[#A7C7E7]',
    sleep: 'text-[#88A688]',
    nutrition: 'text-[#D9A3A3]',
    expert: 'text-[#D4AF37]',
  };

  return (
    <div className="pt-24 md:pt-40 space-y-0 bg-[#FDFBF7] min-h-screen">
      {/* 標題區 */}
      <section className="container-custom space-y-8 mb-16">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight leading-tight">成長百科</h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl leading-relaxed">
            從醫學實證到日常照護，陪您破解成長路上的每一個迷思。
          </p>
        </div>

        {/* 分類按鈕區 */}
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

      {/* 文章列表區塊：不再有編輯精選，直接整齊排列 */}
      <section className="container-custom pb-32 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {displayArticles.map((article) => (
            <Link 
              key={article.id} 
              to={`/journal/${article.id}`}
              className="group flex flex-col bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-50"
            >
              {/* 文章圖片容器：確保比例穩定且圖片覆蓋 */}
              <div className="relative aspect-[16/10] bg-slate-200 overflow-hidden">
                {article.image ? (
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=60&w=800';
                    }}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-100 text-slate-300">
                    <Clock size={32} />
                  </div>
                )}
                
                <div className="absolute top-5 left-5 z-10">
                  <span className={`px-3 py-1 rounded-full text-[9px] font-black tracking-widest uppercase shadow-sm bg-white ${catColors[article.category] || 'text-slate-500'}`}>
                    #{article.categoryName}
                  </span>
                </div>
                <div className="absolute bottom-5 right-5 bg-slate-900/60 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-black text-white flex items-center space-x-1 shadow-lg z-10">
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
                  <span className="text-slate-800 group-hover:underline">閱讀更多 →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {displayArticles.length === 0 && (
          <div className="py-20 text-center space-y-4">
             <p className="text-slate-300 font-black text-xl">此分類目前尚無文章</p>
             <button onClick={() => setFilter('all')} className="text-[#A7C7E7] font-black underline">回到全部文章</button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Journal;
