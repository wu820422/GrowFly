
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, ShieldCheck, Moon, Zap, Activity, 
  Droplets, Check, Microscope, Dna, Smile, MessageCircle
} from 'lucide-react';
import { GROWFLY_PRODUCT } from '../constants';
import { Product } from '../types';

interface HomeProps {
  onAddToCart: (p: Product) => void;
}

const Home: React.FC<HomeProps> = ({ onAddToCart }) => {
  const lineLink = "https://line.me/R/ti/p/@growway";
  
  // 依照指示：首頁專用的去背商品照
  const homeTransparentProductImage = "https://lh3.googleusercontent.com/d/1isD-VxKfXUPhqR48GAg__dD9jKVOaDBa";
  
  // 用戶提供的最新 Cloudinary 影片連結 (4K 版本)
  const heroVideoUrl = "https://res.cloudinary.com/dxuwaer7y/video/upload/v1769013809/15s_4k_iosjry.mov";

  return (
    <div className="space-y-0">
      {/* Section 1: Hero */}
      <section className="relative h-[100svh] w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-slate-900">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full h-full object-cover opacity-80 mix-blend-screen mask-vignette"
            poster="https://images.unsplash.com/photo-1484665754804-74b091211472?auto=format&fit=crop&q=80&w=2000"
          >
            <source src={heroVideoUrl} type="video/quicktime" />
            <source src={heroVideoUrl} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="container-custom relative z-10 text-white space-y-10 animate-in fade-in slide-in-from-left-8 duration-1000">
          <div className="space-y-6 max-w-2xl px-2 md:px-0">
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-black leading-[1.1] tracking-tighter text-shadow-lg">
              科學守護，<br />自然成長。
            </h1>
            <p className="text-lg md:text-2xl font-light text-white/80 max-w-lg">
              專為台灣兒童設計，銀禾生醫研發最純淨的營養支持方案。
            </p>
          </div>
          <div className="flex items-center space-x-6">
            <Link 
              to="/shop"
              className="bg-white text-slate-900 px-8 md:px-12 py-4 md:py-5 rounded-full font-black text-base md:text-lg hover:scale-105 transition-all shadow-2xl shadow-black/30 hover:bg-[#A7C7E7] hover:text-white"
            >
              探索全系列產品
            </Link>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-50">
          <span className="text-[10px] font-black tracking-[0.4em] text-white uppercase">往下滑動</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>

      {/* Section 2: Why */}
      <section className="section-gap bg-[#FDFBF7]">
        <div className="container-custom grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative rounded-[2.5rem] md:rounded-[4rem] overflow-hidden aspect-[3/2] shadow-2xl group">
             <img 
              src="https://drive.google.com/thumbnail?id=1D6jhtaOYPrx5c6Kt8Ly6REDCbRdRVDlc&sz=w1200" 
              alt="銀禾生醫 品牌形象圖" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
          <div className="space-y-8 md:space-y-10 text-center md:text-left">
            <h2 className="text-[10px] font-black text-[#A7C7E7] uppercase tracking-[0.3em] mb-2">關於銀禾生醫</h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-800 leading-tight tracking-tight">
              成長，不該是<br />父母的焦慮。
            </h3>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
              在孩子成長的每一哩路，銀禾生醫知道您不想妥協。高飛星 GrowFly 結合國際科研與天然萃取，剔除不必要的添加，只給身體真正需要的。讓營養補給回歸純粹。
            </p>
            <Link to="/science" className="text-base md:text-lg font-bold text-[#A7C7E7] border-b-2 border-[#A7C7E7] pb-2 hover:text-[#8eb6dd] hover:border-[#8eb6dd] transition-all inline-flex items-center group">
              了解我們的科學堅持 <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3: Hero Product Focus */}
      <section className="section-gap bg-white relative overflow-hidden">
        {/* 背景大型浮水印文字 */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0 opacity-[0.05]">
          <h2 className="text-[12vw] font-black text-slate-900 uppercase tracking-tighter leading-none whitespace-nowrap">
            高飛星 GrowFly 星際能量飲
          </h2>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16 md:mb-24 space-y-6">
            <h2 className="text-3xl md:text-5xl font-black text-slate-800 tracking-tight">高飛星 GrowFly 星際能量飲</h2>
            <p className="text-lg md:text-xl text-slate-500 font-light">銀禾生醫研發：一夜好眠，啟動黃金成長期。</p>
          </div>

          <div className="relative flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-0">
            {/* 左側資訊 */}
            <div className="w-full lg:w-1/3 space-y-12 md:space-y-20 order-2 lg:order-1 px-4">
              <div className="flex items-center lg:flex-row-reverse gap-6 text-left lg:text-right group">
                <div className="w-14 h-14 rounded-2xl bg-[#A7C7E7]/10 flex items-center justify-center text-[#A7C7E7] flex-shrink-0 transition-transform group-hover:scale-110 shadow-sm">
                  <Activity size={28} />
                </div>
                <div>
                  <h4 className="font-black text-slate-800 text-lg md:text-xl">瑞士 DSM 維生素 D3</h4>
                  <p className="text-sm text-slate-500 font-medium">百年大廠來源，滿足每日所需</p>
                </div>
              </div>
              <div className="flex items-center lg:flex-row-reverse gap-6 text-left lg:text-right group">
                <div className="w-14 h-14 rounded-2xl bg-[#A7C7E7]/10 flex items-center justify-center text-[#A7C7E7] flex-shrink-0 transition-transform group-hover:scale-110 shadow-sm">
                  <Zap size={28} />
                </div>
                <div>
                  <h4 className="font-black text-slate-800 text-lg md:text-xl">雙重胺基酸基底</h4>
                  <p className="text-sm text-slate-500 font-medium">精氨酸 + 離氨酸，成長關鍵原料</p>
                </div>
              </div>
            </div>

            {/* 中間產品圖 */}
            <div className="w-full lg:w-1/3 flex justify-center py-6 md:py-12 relative order-1 lg:order-2">
              <div className="animate-float z-10 relative">
                <Link to={`/product/${GROWFLY_PRODUCT.id}`} className="block transition-transform hover:scale-105 duration-500">
                  <div className="w-64 sm:w-72 md:w-[500px] aspect-square relative">
                    <img 
                      src={homeTransparentProductImage} 
                      alt="GrowFly 高飛星 產品圖" 
                      className="w-full h-full object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.12)]"
                    />
                  </div>
                </Link>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 md:w-96 h-64 md:h-96 rounded-full bg-gradient-to-tr from-[#A7C7E7]/20 to-[#C1D7C1]/20 blur-3xl -z-1" />
              </div>
            </div>

            {/* 右側資訊 */}
            <div className="w-full lg:w-1/3 space-y-12 md:space-y-20 order-3 px-4">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-[#A7C7E7]/10 flex items-center justify-center text-[#A7C7E7] flex-shrink-0 transition-transform group-hover:scale-110 shadow-sm">
                  <Droplets size={28} />
                </div>
                <div>
                  <h4 className="font-black text-slate-800 text-lg md:text-xl">美國 MenaQ7® K2</h4>
                  <p className="text-sm text-slate-500 font-medium">鈣質的最佳導航機制</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-[#A7C7E7]/10 flex items-center justify-center text-[#A7C7E7] flex-shrink-0 transition-transform group-hover:scale-110 shadow-sm">
                  <Moon size={28} />
                </div>
                <div>
                  <h4 className="font-black text-slate-800 text-lg md:text-xl">甘胺酸鎂</h4>
                  <p className="text-sm text-slate-500 font-medium">高吸收率，穩定入睡</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center pt-20">
             <Link 
              to={`/product/${GROWFLY_PRODUCT.id}`}
              className="bg-slate-900 inline-flex items-center space-x-4 text-white px-10 md:px-14 py-5 md:py-6 rounded-full font-black text-lg md:text-xl hover:bg-slate-800 transition-all shadow-2xl active:scale-95 group"
            >
              <span>立即購買高飛星</span>
              <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4: Trust */}
      <section className="section-gap bg-slate-50">
        <div className="container-custom text-center space-y-16">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">銀禾生醫全項檢驗合格，安心守護。</h2>
            <p className="text-slate-500 text-base md:text-lg">每一批高飛星 GrowFly，都經過第三方權威機構嚴格把關。</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10">
            {[
              { 
                title: 'SGS 檢驗報告書', 
                img: 'https://drive.google.com/thumbnail?id=1eEv-2Dk8fAHOS5gPt9WWugohL9jO7_8Y&sz=w1200' 
              },
              { 
                title: 'Eurofins 檢驗報告書', 
                img: 'https://drive.google.com/thumbnail?id=1COTAbQStJBDBJpZaQpE8VTMhzK7rekkW&sz=w1200' 
              },
              { 
                title: 'ETC 檢測中心報告', 
                img: 'https://drive.google.com/thumbnail?id=18zEGg7J39cMRdwUN4fsVqa8ISAmbnEhx&sz=w1200' 
              }
            ].map((report, i) => (
              <div key={i} className="bg-white p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-sm border border-slate-100 group hover:shadow-2xl transition-all cursor-zoom-in">
                <div className="aspect-[3/4] bg-slate-50 rounded-2xl md:rounded-3xl mb-6 flex items-center justify-center overflow-hidden border border-slate-50 p-2">
                  <img src={report.img} alt={report.title} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" />
                </div>
                <p className="font-black text-slate-700 text-sm md:text-base">
                  {report.title}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-16 pt-8">
            <div className="flex items-center space-x-3 text-slate-500 font-black text-sm md:text-base">
              <ShieldCheck size={24} className="text-[#A7C7E7]" />
              <span>無西藥檢出</span>
            </div>
            <div className="flex items-center space-x-3 text-slate-500 font-black text-sm md:text-base">
              <ShieldCheck size={24} className="text-[#A7C7E7]" />
              <span>無重金屬</span>
            </div>
            <div className="flex items-center space-x-3 text-slate-500 font-black text-sm md:text-base">
              <ShieldCheck size={24} className="text-[#A7C7E7]" />
              <span>無塑化劑</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
