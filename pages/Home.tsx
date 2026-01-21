
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ShieldCheck, Moon, Zap, Activity, Droplets } from 'lucide-react';
import { TESTIMONIALS, GROWFLY_PRODUCT } from '../constants';
import { Product } from '../types';

interface HomeProps {
  onAddToCart: (p: Product) => void;
}

const Home: React.FC<HomeProps> = ({ onAddToCart }) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;

    if (distance > 50) {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    } else if (distance < -50) {
      setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    }
    setTouchStart(null);
  };

  const reports = [
    { title: 'SGS 檢驗報告書', img: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800' },
    { title: 'Eurofins 檢驗報告書', img: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800' },
    { title: 'ETC 檢測中心報告', img: 'https://images.unsplash.com/photo-1532187875660-d4583173806a?auto=format&fit=crop&q=80&w=800' }
  ];

  return (
    <div className="space-y-0">
      {/* Section 1: Hero */}
      <section className="relative h-[100svh] w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-slate-900">
           <img 
            src="https://images.unsplash.com/photo-1484665754804-74b091211472?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-60 mix-blend-overlay"
            alt="Hero Background" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        </div>

        <div className="container-custom relative z-10 text-white space-y-10 animate-in fade-in slide-in-from-left-8 duration-1000">
          <div className="space-y-6 max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
              科學守護，<br />自然成長。
            </h1>
            <p className="text-xl md:text-2xl font-light text-white/90">
              專為台灣兒童設計，最純淨的營養支持方案。
            </p>
          </div>
          <div className="flex items-center space-x-6">
            <Link 
              to="/shop"
              className="bg-white text-slate-800 px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-xl shadow-black/20"
            >
              探索全系列產品
            </Link>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronRight className="rotate-90 text-white/50" size={32} />
        </div>
      </section>

      {/* Section 2: Why */}
      <section className="section-gap bg-[#FDFBF7]">
        <div className="container-custom grid md:grid-cols-2 gap-16 md:gap-20 items-center">
          <div className="relative rounded-[3rem] md:rounded-[4rem] overflow-hidden aspect-[4/5] shadow-2xl group">
             <img 
              src="https://images.unsplash.com/photo-1544126592-807daa2b5d3a?auto=format&fit=crop&q=80&w=1000" 
              alt="Sleeping Child" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-amber-900/10 group-hover:bg-transparent transition-colors" />
          </div>
          <div className="space-y-10">
            <h2 className="text-4xl md:text-5xl font-black text-slate-800 leading-tight tracking-tight">
              成長，不該是<br />父母的焦慮。
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              在孩子成長的每一哩路，我們知道您不想妥協。GrowFly 結合國際科研與天然萃取，剔除不必要的添加，只給身體真正需要的。讓營養補給回歸純粹，讓成長自然發生。
            </p>
            <Link to="/science" className="text-lg font-bold text-[#A7C7E7] border-b-2 border-[#A7C7E7] pb-2 hover:text-[#8eb6dd] hover:border-[#8eb6dd] transition-all inline-flex items-center group">
              了解我們的科學堅持 <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3: Hero Product Focus */}
      <section className="section-gap bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#A7C7E7] rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#C1D7C1] rounded-full blur-[120px]" />
        </div>

        <div className="container-custom relative">
          <div className="text-center mb-16 md:mb-24 space-y-6">
            <h2 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight">高飛星 GrowFly 星際能量飲</h2>
            <p className="text-xl text-slate-500 font-light">一夜好眠，啟動黃金成長期。</p>
          </div>

          <div className="relative flex flex-col md:flex-row items-center justify-center">
            {/* Ingredients Left */}
            <div className="w-full md:w-1/3 space-y-12 md:space-y-16 mb-16 md:mb-0">
              <div className="text-left md:text-right flex items-center md:flex-row-reverse justify-start md:justify-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-[#A7C7E7]/10 flex items-center justify-center text-[#A7C7E7] flex-shrink-0">
                  <Activity size={28} />
                </div>
                <div>
                  <h4 className="font-black text-slate-800 text-lg">瑞士 DSM 維生素 D3</h4>
                  <p className="text-sm text-slate-500">百年大廠來源，滿足每日所需</p>
                </div>
              </div>
              <div className="text-left md:text-right flex items-center md:flex-row-reverse justify-start md:justify-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-[#A7C7E7]/10 flex items-center justify-center text-[#A7C7E7] flex-shrink-0">
                  <Zap size={28} />
                </div>
                <div>
                  <h4 className="font-black text-slate-800 text-lg">雙重胺基酸基底</h4>
                  <p className="text-sm text-slate-500">精氨酸 + 離氨酸，成長關鍵原料</p>
                </div>
              </div>
            </div>

            {/* Product Center */}
            <div className="w-full md:w-1/3 flex justify-center py-12 relative">
              <Link to={`/product/${GROWFLY_PRODUCT.id}`} className="animate-float z-10 transition-transform hover:scale-105 duration-500">
                <img 
                  src={GROWFLY_PRODUCT.image} 
                  alt="GrowFly Product" 
                  className="w-64 md:w-72 h-80 md:h-96 object-cover rounded-[3rem] md:rounded-[3.5rem] shadow-2xl rotate-3"
                />
              </Link>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-tr from-[#A7C7E7]/30 to-[#C1D7C1]/30 blur-3xl -z-1" />
            </div>

            {/* Ingredients Right */}
            <div className="w-full md:w-1/3 space-y-12 md:space-y-16">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-[#A7C7E7]/10 flex items-center justify-center text-[#A7C7E7] flex-shrink-0">
                  <Droplets size={28} />
                </div>
                <div>
                  <h4 className="font-black text-slate-800 text-lg">美國 MenaQ7® K2</h4>
                  <p className="text-sm text-slate-500">專利鷹嘴豆萃取，鈣質的最佳導航</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-[#A7C7E7]/10 flex items-center justify-center text-[#A7C7E7] flex-shrink-0">
                  <Moon size={28} />
                </div>
                <div>
                  <h4 className="font-black text-slate-800 text-lg">甘胺酸鎂</h4>
                  <p className="text-sm text-slate-500">高吸收率，幫助入睡與神經穩定</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16 md:mt-24">
            <Link 
              to={`/product/${GROWFLY_PRODUCT.id}`}
              className="bg-[#A7C7E7] inline-block text-white px-12 py-5 rounded-full font-black text-lg hover:bg-[#8eb6dd] transition-all shadow-xl shadow-[#A7C7E7]/30 w-full md:w-auto text-center"
            >
              了解更多高飛星
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4: Trust */}
      <section className="section-gap bg-slate-50">
        <div className="container-custom text-center space-y-16">
          <div className="space-y-6">
            <h2 className="text-4xl font-black text-slate-800 tracking-tight">全項檢驗合格，吃得安心更放心。</h2>
            <p className="text-slate-500 text-lg">每一批產品，都經過第三方權威機構嚴格把關。</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10">
            {reports.map((report, i) => (
              <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 group hover:shadow-2xl transition-all cursor-zoom-in">
                <div className="aspect-[3/4] bg-slate-50 rounded-3xl mb-6 flex items-center justify-center overflow-hidden">
                  <img src={report.img} alt={report.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <p className="font-black text-slate-700">
                  {report.title}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-10 md:gap-16 pt-12">
            <div className="flex items-center space-x-4 text-slate-500 font-black">
              <ShieldCheck size={28} className="text-[#A7C7E7]" />
              <span>無西藥檢出</span>
            </div>
            <div className="flex items-center space-x-4 text-slate-500 font-black">
              <ShieldCheck size={28} className="text-[#A7C7E7]" />
              <span>無重金屬</span>
            </div>
            <div className="flex items-center space-x-4 text-slate-500 font-black">
              <ShieldCheck size={28} className="text-[#A7C7E7]" />
              <span>無塑化劑</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Testimonials */}
      <section className="section-gap bg-[#F5F5F0]">
        <div className="container-custom space-y-16 md:space-y-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-[900] text-center text-slate-800 tracking-tight px-4 leading-[1.2]">
            來自專業人士與家長的<br className="hidden md:block" />真實回饋。
          </h2>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Slider Container */}
            <div 
              className="relative overflow-hidden touch-pan-y select-none rounded-[3rem] md:rounded-[4rem]"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div 
                className="flex transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
                style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
              >
                {TESTIMONIALS.map((t) => (
                  <div key={t.id} className="min-w-full px-4 flex-shrink-0">
                    <div className="bg-white p-8 md:p-16 rounded-[3rem] md:rounded-[4rem] shadow-xl text-center space-y-8 md:space-y-12 border border-slate-100/50 h-full flex flex-col justify-center">
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto overflow-hidden border-[6px] border-[#A7C7E7]/10 shadow-lg flex-shrink-0">
                        <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="space-y-6">
                        <p className="text-lg md:text-2xl text-slate-600 font-medium italic leading-[1.8] max-w-2xl mx-auto">
                          「{t.content}」
                        </p>
                        <div className="pt-4">
                          <h4 className="text-xl md:text-2xl font-black text-slate-800">{t.name}</h4>
                          <p className="text-xs md:text-sm text-[#A7C7E7] font-black tracking-[0.2em] uppercase mt-2">{t.title}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center items-center space-x-3 md:space-x-4 mt-10 md:mt-16">
              {TESTIMONIALS.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveTestimonial(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`group relative py-4 focus:outline-none transition-all duration-300`}
                >
                  <span className={`block h-1.5 md:h-2 rounded-full transition-all duration-500 ${activeTestimonial === i ? 'bg-[#A7C7E7] w-10 md:w-14' : 'bg-slate-300 w-3 md:w-4 group-hover:bg-slate-400'}`} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
