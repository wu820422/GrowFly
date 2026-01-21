
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronRight, Clock, ArrowLeft, Share2, ShoppingCart, Rocket, Headphones } from 'lucide-react';
import { JOURNAL_ARTICLES, PRODUCTS } from '../constants';
import { Product } from '../types';

interface ArticleDetailProps {
  onAddToCart: (p: Product) => void;
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ onAddToCart }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [scrollProgress, setScrollProgress] = useState(0);

  const article = JOURNAL_ARTICLES.find(a => a.id === id);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!article) {
    return (
      <div className="pt-40 text-center h-screen space-y-8">
        <h2 className="text-2xl font-black text-slate-300 tracking-widest">找不到這篇文章</h2>
        <Link to="/journal" className="inline-block bg-[#A7C7E7] text-white px-8 py-4 rounded-full font-black">
          回到成長百科
        </Link>
      </div>
    );
  }

  const nextArticles = JOURNAL_ARTICLES.filter(a => a.id !== article.id).slice(0, 2);

  return (
    <div className="bg-white min-h-screen">
      <div className="fixed top-[60px] left-0 w-full h-1 z-[60]">
        <div className="bg-[#A7C7E7] h-full transition-all duration-100" style={{ width: `${scrollProgress}%` }} />
      </div>

      <div className="fixed top-24 left-10 z-[40] hidden lg:block">
        <button 
          onClick={() => navigate(-1)}
          className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-300 hover:text-slate-800 hover:shadow-xl transition-all border border-slate-100"
        >
          <ArrowLeft size={24} />
        </button>
      </div>

      <div className="pt-32 md:pt-48 pb-32">
        <article className="container-custom max-w-[720px] mx-auto px-6">
          <header className="space-y-10 mb-16 text-center">
            <nav className="flex items-center justify-center text-[10px] font-black text-slate-300 space-x-3 tracking-[0.2em] uppercase">
              <Link to="/" className="hover:text-slate-800 transition-colors">HOME</Link>
              <ChevronRight size={10} />
              <Link to="/journal" className="hover:text-slate-800 transition-colors">JOURNAL</Link>
              <ChevronRight size={10} />
              <span className="text-slate-800">{article.categoryName}</span>
            </nav>

            <h1 className="text-3xl md:text-5xl font-black text-slate-800 leading-[1.3] tracking-tight">
              {article.title}
            </h1>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 border-y border-slate-50 py-10">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden border border-slate-100">
                  <img src={`https://picsum.photos/seed/${article.author}/100`} alt={article.author} className="w-full h-full object-cover" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-black text-slate-800">{article.author}</p>
                  <p className="text-[9px] text-slate-400 font-black tracking-widest uppercase mt-0.5">{article.date}</p>
                </div>
              </div>
              <div className="hidden md:block h-6 w-px bg-slate-100 mx-2" />
              <div className="flex items-center space-x-6 text-[9px] font-black text-slate-400 tracking-widest uppercase">
                 <span className="flex items-center space-x-2"><Clock size={12} className="text-[#A7C7E7]" /> <span>⏱ {article.readTime}</span></span>
                 <button className="flex items-center space-x-2 hover:text-slate-800 transition-colors"><Share2 size={12} /> <span>SHARE</span></button>
              </div>
            </div>
          </header>

          <div className="content-body space-y-12 text-[#333333] leading-[1.8] font-medium text-lg md:text-xl">
            {article.content.map((block, i) => {
              if (block.type === 'h2') {
                return (
                  <div key={i} className="flex items-center space-x-4 pt-10">
                    <div className="w-2.5 h-8 bg-[#A7C7E7] rounded-full" />
                    <h2 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight">{block.value}</h2>
                  </div>
                );
              }
              if (block.type === 'text') {
                return (
                  <p key={i}>
                    {block.value.split(/(「|」|深層睡眠|D3|K2|鈣質|生長激素)/).map((part, pi) => 
                      ['深層睡眠', 'D3', 'K2', '鈣質', '生長激素'].includes(part) ? 
                      <span key={pi} className="bg-[#FFF9C4] px-1 font-black text-slate-900 rounded-sm shadow-[0_4px_0_rgba(255,249,196,1)]">{part}</span> : 
                      part
                    )}
                  </p>
                );
              }
              if (block.type === 'quote') {
                return (
                  <blockquote key={i} className="border-l-[6px] border-[#A7C7E7] pl-10 py-10 my-16 bg-[#FDFBF7] rounded-r-[20px]">
                    <p className="text-2xl md:text-3xl font-black text-slate-800 leading-tight italic font-serif">
                      {block.value}
                    </p>
                  </blockquote>
                );
              }
              if (block.type === 'image') {
                return (
                  <div key={i} className="my-16 rounded-[20px] overflow-hidden shadow-xl">
                    <img src={block.value} alt="Growth Insight" className="w-full h-full object-cover" />
                  </div>
                );
              }
              if (block.type === 'product') {
                const prod = PRODUCTS.find(p => p.id === block.value);
                if (!prod) return null;
                return (
                  <div key={i} className="my-20 p-8 bg-white rounded-[20px] border-2 border-slate-100 flex flex-col md:flex-row items-center gap-10 group hover:border-[#A7C7E7]/30 hover:shadow-xl transition-all duration-500">
                    <div className="w-40 h-40 md:w-48 md:h-48 bg-slate-50 rounded-[20px] shadow-sm overflow-hidden group-hover:scale-105 transition-transform duration-700">
                      <img src={prod.image} alt={prod.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-grow space-y-6 text-center md:text-left">
                      <div className="space-y-2">
                        <div className="inline-block px-3 py-1 bg-amber-50 rounded-full text-[9px] font-black text-amber-500 tracking-widest uppercase">推薦方案</div>
                        <h4 className="text-xl md:text-2xl font-black text-slate-800">{block.subValue}</h4>
                        <p className="text-slate-500 font-medium leading-relaxed text-sm">
                          {prod.id === 'growfly-30' ? '含專利甘胺酸鎂與 K2，幫助入睡，讓成長不漏接。' : '專業營養團隊研發，守護孩子的黃金成長期。'}
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row items-center gap-4">
                        <Link 
                          to={`/product/${prod.id}`}
                          className="w-full sm:w-auto bg-[#A7C7E7] text-white px-8 py-3 rounded-full font-black text-xs hover:bg-[#8eb6dd] transition-all shadow-md shadow-[#A7C7E7]/20"
                        >
                          了解詳情 (限時免運)
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>

          <footer className="mt-32 pt-16 border-t border-slate-100 space-y-20">
            <div className="bg-[#F5F5F0] p-10 rounded-[20px] flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
              <div className="w-16 h-16 rounded-full bg-white overflow-hidden shadow-sm flex-shrink-0">
                <img src={`https://picsum.photos/seed/${article.author}/100`} alt={article.author} className="w-full h-full object-cover" />
              </div>
              <div className="space-y-2">
                <h5 className="text-lg font-black text-slate-800">關於 {article.author}</h5>
                <p className="text-slate-600 font-medium leading-relaxed text-sm">
                  GrowFly 營養專家團隊由專業營養師與醫學顧問組成，致力於為台灣家庭提供最嚴謹、易懂的兒童成長科學指南。
                </p>
              </div>
            </div>

            <div className="space-y-10">
              <h3 className="text-2xl font-black text-slate-800 tracking-tight">你可能也喜歡...</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {nextArticles.map((a) => (
                  <Link 
                    key={a.id} 
                    to={`/journal/${a.id}`}
                    className="group space-y-5 block"
                  >
                    <div className="aspect-[16/10] rounded-[20px] overflow-hidden shadow-sm">
                      <img src={a.image} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <h4 className="text-lg font-black text-slate-800 group-hover:text-[#A7C7E7] transition-colors leading-tight line-clamp-2 px-1">
                      {a.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 p-12 md:p-16 rounded-[20px] text-center text-white space-y-10 relative overflow-hidden shadow-xl">
               <div className="absolute top-0 right-0 w-64 h-64 bg-[#A7C7E7]/5 rounded-full -mr-32 -mt-32 blur-3xl" />
               <div className="space-y-4 relative z-10">
                 <h3 className="text-3xl font-black tracking-tight">不錯過任何一則科學建議</h3>
                 <p className="text-white/50 font-medium text-base">加入 GrowFly 成長週報，掌握孩子的黃金發展期。</p>
               </div>
               <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                  <div className="flex-grow max-w-sm flex bg-white/10 rounded-full p-1.5 border border-white/10">
                     <input type="text" placeholder="您的電子信箱" className="bg-transparent px-6 py-2 text-sm text-white outline-none flex-grow placeholder:text-white/20" />
                     <button className="bg-white text-slate-900 px-6 py-2 rounded-full font-black text-xs hover:bg-[#A7C7E7] transition-all">訂閱</button>
                  </div>
               </div>
            </div>
          </footer>
        </article>
      </div>

      {scrollProgress > 40 && (
        <div className="md:hidden fixed bottom-[48px] left-6 right-6 z-[40] animate-in fade-in slide-in-from-bottom-8 duration-500">
          <Link 
            to="/product/growfly-30"
            className="w-full bg-[#A7C7E7] text-white py-4 rounded-full font-black text-base shadow-xl active:scale-95 transition-all flex items-center justify-center space-x-3 border-2 border-white"
          >
            <Rocket size={18} className="animate-float" />
            <span>搭配「高飛星」效果更好 →</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ArticleDetail;
