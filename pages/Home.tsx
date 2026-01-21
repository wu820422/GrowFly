
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
  const reports = [
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
  ];

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
            className="w-full h-full object-cover opacity-60 mix-blend-overlay"
            poster="https://images.unsplash.com/photo-1484665754804-74b091211472?auto=format&fit=crop&q=80&w=2000"
          >
            <source src="https://drive.google.com/uc?export=download&id=101z97GlLNH4ZCyLpx65y73NnSD2-WkAM" type="video/mp4" />
            您的瀏覽器不支援影片標籤。
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>

        <div className="container-custom relative z-10 text-white space-y-10 animate-in fade-in slide-in-from-left-8 duration-1000">
          <div className="space-y-6 max-w-2xl">
            <h1 className="text-5xl md:text-8xl font-black leading-[1.1] tracking-tighter">
              科學守護，<br />自然成長。
            </h1>
            <p className="text-xl md:text-2xl font-light text-white/80 max-w-lg">
              專為台灣兒童設計，最純淨的營養支持方案。
            </p>
          </div>
          <div className="flex items-center space-x-6">
            <Link 
              to="/shop"
              className="bg-white text-slate-900 px-12 py-5 rounded-full font-black text-lg hover:scale-105 transition-all shadow-2xl shadow-black/30 hover:bg-[#A7C7E7] hover:text-white"
            >
              探索全系列產品
            </Link>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-50">
          <span className="text-[10px] font-black tracking-[0.4em] text-white uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>

      {/* Section 2: Why */}
      <section className="section-gap bg-[#FDFBF7]">
        <div className="container-custom grid md:grid-cols-2 gap-16 md:gap-20 items-center">
          <div className="relative rounded-[3rem] md:rounded-[4rem] overflow-hidden aspect-[3/2] shadow-2xl group">
             <img 
              src="https://drive.google.com/thumbnail?id=1D6jhtaOYPrx5c6Kt8Ly6REDCbRdRVDlc&sz=w1200" 
              alt="GrowFly 品牌形象圖 - 快樂成長" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors pointer-events-none" />
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

      {/* Section: Bento Brand Values */}
      <section className="section-gap bg-white">
        <div className="container-custom space-y-16 md:space-y-24">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-slate-800 tracking-tight">以父母之心，行科學之事。</h2>
            <p className="text-lg md:text-xl text-slate-400 font-medium">銀禾生醫的四大堅持，重新定義兒童營養標準。</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-[280px] md:auto-rows-[340px]">
            
            {/* Card 1: 科研基石 */}
            <div className="lg:col-span-7 lg:row-span-2 bg-slate-900 rounded-[3rem] p-10 md:p-16 relative overflow-hidden group shadow-2xl">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 pointer-events-none">
                <Dna size={600} className="animate-dna text-white" />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center text-[#A7C7E7] mb-8">
                  <Microscope size={40} />
                </div>
                <div className="space-y-6">
                  <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight">實證，是我們的<br />唯一語言。</h3>
                  <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-xl font-medium">
                    拒絕概念性添加。我們聯手醫學大學與頂尖實驗室，從 10,000+ 篇文獻中，篩選出真正對亞洲兒童有效的成長路徑。
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: 純淨標準 */}
            <div className="lg:col-span-5 bg-[#F8FAFC] rounded-[3rem] p-10 border border-slate-100 flex flex-col justify-center relative overflow-hidden group hover:shadow-xl transition-all">
               <div className="absolute top-0 right-0 p-8 text-slate-100 group-hover:text-emerald-50 transition-colors">
                  <ShieldCheck size={120} />
               </div>
               <div className="relative z-10 space-y-4">
                  <div className="flex items-center space-x-3 text-emerald-500 mb-2">
                    <Check size={24} strokeWidth={4} />
                    <span className="text-xs font-black tracking-widest uppercase">Pure Standard</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight">0 添加的減法哲學。</h3>
                  <p className="text-slate-500 font-medium leading-relaxed text-sm md:text-base">
                    孩子的身體在發育，不該承擔負擔。全系列堅持無防腐劑、無人工色素、無精製糖。
                  </p>
               </div>
            </div>

            {/* Card 3: 感官體驗 */}
            <div className="lg:col-span-5 bg-[#F9E7B8]/20 rounded-[3rem] p-10 border border-[#F9E7B8]/30 flex flex-col justify-center relative group hover:shadow-xl transition-all">
               <div className="relative z-10 space-y-4">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-amber-500 shadow-sm mb-4">
                    <Smile size={32} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight">讓孩子期待的「美味時刻」。</h3>
                  <p className="text-slate-600/80 font-medium leading-relaxed text-sm md:text-base">
                    再好的營養，不吃就沒用。研發出「無藥感、好入口」的天然風味，讓補充營養變成孩子的樂趣。
                  </p>
               </div>
            </div>

            {/* Card 4: 專業團隊 */}
            <div className="lg:col-span-12 lg:row-span-1 bg-slate-800 rounded-[3rem] overflow-hidden relative group min-h-[300px]">
               <img 
                src="https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=2000" 
                alt="GrowFly 專業諮詢團隊" 
                className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-1000 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent" />
               <div className="relative z-10 h-full flex flex-col justify-center p-10 md:p-16 space-y-8">
                  <div className="space-y-4 max-w-2xl">
                    <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight">您的專屬成長顧問。</h3>
                    <p className="text-white/70 text-lg md:text-xl font-medium leading-relaxed">
                      不只是賣產品，更是您的育兒後盾。加入 LINE@，由專業營養師一對一解答成長難題。
                    </p>
                  </div>
                  <div>
                    <a 
                      href="https://line.me" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-3 bg-white text-slate-900 px-10 py-4 rounded-full font-black text-sm hover:bg-[#A7C7E7] hover:text-white transition-all shadow-2xl"
                    >
                      <MessageCircle size={20} className="fill-current" />
                      <span>立即諮詢營養師 →</span>
                    </a>
                  </div>
               </div>
            </div>

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

            <div className="w-full md:w-1/3 flex justify-center py-12 relative">
              <Link to={`/product/${GROWFLY_PRODUCT.id}`} className="animate-float z-10 transition-transform hover:scale-105 duration-500">
                <div className="w-64 md:w-[450px] h-80 md:h-[450px] relative">
                  <img 
                    src="https://lh3.googleusercontent.com/d/1isD-VxKfXUPhqR48GAg__dD9jKVOaDBa" 
                    alt="GrowFly 三瓶組合" 
                    className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
                  />
                </div>
              </Link>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 md:w-96 h-80 md:h-96 rounded-full bg-gradient-to-tr from-[#A7C7E7]/20 to-[#C1D7C1]/20 blur-3xl -z-1" />
            </div>

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
          
          <div className="text-center pt-12">
             <Link 
              to={`/product/${GROWFLY_PRODUCT.id}`}
              className="bg-slate-800 inline-flex items-center space-x-3 text-white px-12 py-5 rounded-full font-black text-lg hover:bg-slate-700 transition-all shadow-xl"
            >
              <span>立即購買高飛星</span>
              <ChevronRight size={20} />
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
                <div className="aspect-[3/4] bg-slate-50 rounded-3xl mb-6 flex items-center justify-center overflow-hidden border border-slate-50 p-2">
                  <img src={report.img} alt={report.title} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" />
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
    </div>
  );
};

export default Home;
