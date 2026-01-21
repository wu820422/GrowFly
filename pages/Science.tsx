
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Info, ChevronRight, Activity, Zap, Droplets, Moon, CheckCircle2, LineChart, Smartphone, Headphones } from 'lucide-react';
import { GROWFLY_PRODUCT } from '../constants';

const Science: React.FC = () => {
  return (
    <div className="pt-20 md:pt-32 space-y-0 bg-[#FDFBF7]">
      {/* Section 1: Hero */}
      <section className="section-gap relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#A7C7E7]/10 rounded-full blur-[100px]" />
        
        <div className="container-custom text-center space-y-8 relative z-10">
          <div className="inline-block px-6 py-2 bg-white rounded-full border border-slate-100 shadow-sm mb-4">
            <span className="text-xs font-black text-[#A7C7E7] tracking-[0.2em] uppercase">Scientific Approach</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-slate-800 tracking-tight leading-tight max-w-4xl mx-auto">
            成長，是一場精密的<br />生物化學反應。
          </h1>
          <p className="text-lg md:text-2xl font-light text-slate-500 max-w-3xl mx-auto leading-relaxed">
            我們不相信偏方，只相信數據。GrowFly 聯手全球頂尖原料大廠，為台灣兒童打造精準的營養導航系統。
          </p>
        </div>
      </section>

      {/* Section 2: The Calcium Paradox */}
      <section className="section-gap bg-white">
        <div className="container-custom grid md:grid-cols-2 gap-20 md:gap-24 items-center">
          <div className="space-y-12">
            <h2 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight leading-tight">不是鈣，卻是鈣的<br />最佳搭檔。</h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              許多家長以為長高只要補鈣，但如果缺乏正確引導，鈣質無法被骨骼有效利用。單純補鈣可能導致鈣質在血液中遊蕩，甚至沉積在錯誤的地方。
            </p>
            
            <div className="space-y-10">
              <div className="flex gap-6 md:gap-8 group">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#A7C7E7]/10 flex items-center justify-center text-[#A7C7E7] flex-shrink-0 group-hover:scale-110 transition-transform">
                   <Droplets size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-black text-slate-800 mb-2">Step 1 吸收：陽光搬運工 D3</h4>
                  <p className="text-slate-500 font-medium">維生素 D3 就像「搬運工」，將鈣質從腸道搬進血液，確保基礎原料充足。</p>
                </div>
              </div>

              <div className="flex gap-6 md:gap-8 group">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#C1D7C1]/20 flex items-center justify-center text-[#C1D7C1] flex-shrink-0 group-hover:scale-110 transition-transform">
                   <Activity size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-black text-slate-800 mb-2">Step 2 導航：精準導航員 K2</h4>
                  <p className="text-slate-500 font-medium">維生素 K2 (MenaQ7®) 啟動骨鈣素，精準將血液中的鈣質鎖進骨骼，防止在血管亂跑。</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-[4rem] md:rounded-[5rem] bg-slate-50 flex items-center justify-center relative overflow-hidden shadow-inner border border-slate-100">
               {/* Abstract Science Visual */}
               <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#A7C7E7] via-transparent to-transparent animate-pulse" />
               <div className="relative z-10 p-12 text-center space-y-8">
                  <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-white shadow-2xl flex items-center justify-center border-8 border-[#A7C7E7]/20">
                    <span className="text-4xl md:text-5xl font-black text-[#A7C7E7]">Ca</span>
                  </div>
                  <div className="flex justify-between items-center max-w-xs mx-auto">
                    <div className="text-xs font-black text-slate-400">血管血液</div>
                    <div className="flex-grow h-px bg-slate-200 mx-4 relative">
                      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-4 h-4 bg-[#A7C7E7] rounded-full blur-sm animate-[ping_2s_infinite]" />
                    </div>
                    <div className="text-xs font-black text-slate-800 underline">精準入骨</div>
                  </div>
               </div>
            </div>
            <div className="absolute -bottom-6 -right-2 md:-bottom-8 md:-right-8 bg-slate-800 text-white p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl max-w-xs space-y-2">
               <p className="font-black text-lg">導航機制 (MenaQ7®)</p>
               <p className="text-sm text-white/70 font-medium leading-relaxed">這是長高的核心邏輯：吸收不是問題，如何「定位」才是關鍵。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Ingredient ID Cards */}
      <section className="section-gap bg-[#F5F5F0]">
        <div className="container-custom space-y-16 md:space-y-24">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight leading-tight">星際營養小隊 · 成份履歷表</h2>
            <p className="text-slate-500 text-lg font-medium">我們只選用具備全球專利與臨床實證的高品質原料。</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* K2 Card */}
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-sm hover:shadow-2xl transition-all group border border-slate-100 flex flex-col h-full">
              <div className="w-16 h-16 bg-[#A7C7E7]/10 rounded-2xl flex items-center justify-center text-[#A7C7E7] mb-8 group-hover:rotate-12 transition-transform">
                <Activity size={32} />
              </div>
              <h4 className="text-xs font-black text-[#A7C7E7] tracking-widest uppercase mb-2">骨骼導航員</h4>
              <h3 className="text-2xl font-black text-slate-800 mb-6">維生素 K2 (MenaQ7®)</h3>
              <div className="space-y-4 text-sm font-medium flex-grow">
                <div className="flex justify-between border-b border-slate-50 pb-2">
                  <span className="text-slate-400">來源來源</span>
                  <span className="text-slate-700 text-right">🇳🇴 挪威/美國專利</span>
                </div>
                <p className="text-slate-500 leading-relaxed pt-2 text-sm">
                  來自鷹嘴豆發酵，擁有最高生物利用率，是啟動骨鈣素讓鈣質鎖進骨骼的核心動力。
                </p>
              </div>
            </div>

            {/* D3 Card */}
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-sm hover:shadow-2xl transition-all group border border-slate-100 flex flex-col h-full">
              <div className="w-16 h-16 bg-[#A7C7E7]/10 rounded-2xl flex items-center justify-center text-[#A7C7E7] mb-8 group-hover:rotate-12 transition-transform">
                <Droplets size={32} />
              </div>
              <h4 className="text-xs font-black text-[#A7C7E7] tracking-widest uppercase mb-2">陽光搬運工</h4>
              <h3 className="text-2xl font-black text-slate-800 mb-6">維生素 D3</h3>
              <div className="space-y-4 text-sm font-medium flex-grow">
                <div className="flex justify-between border-b border-slate-50 pb-2">
                  <span className="text-slate-400">來源來源</span>
                  <span className="text-slate-700 text-right">🇨🇭 瑞士 DSM 百年</span>
                </div>
                <p className="text-slate-500 leading-relaxed pt-2 text-sm">
                  400 IU 足量添加，非廉價羊毛脂來源，純度更高，確保鈣質從腸道完美搬運至血液。
                </p>
              </div>
            </div>

            {/* Amino Card */}
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-sm hover:shadow-2xl transition-all group border border-slate-100 flex flex-col h-full">
              <div className="w-16 h-16 bg-[#A7C7E7]/10 rounded-2xl flex items-center justify-center text-[#A7C7E7] mb-8 group-hover:rotate-12 transition-transform">
                <Zap size={32} />
              </div>
              <h4 className="text-xs font-black text-[#A7C7E7] tracking-widest uppercase mb-2">生長雙渦輪</h4>
              <h3 className="text-2xl font-black text-slate-800 mb-6">精氨酸 + 離氨酸</h3>
              <div className="space-y-4 text-sm font-medium flex-grow">
                <div className="flex justify-between border-b border-slate-50 pb-2">
                  <span className="text-slate-400">來源來源</span>
                  <span className="text-slate-700 text-right">🇰🇷 韓國 Daesang</span>
                </div>
                <p className="text-slate-500 leading-relaxed pt-2 text-sm">
                  左旋高純度發酵技術，提供成長關鍵原料，支持骨骼發育的黃金胺基酸組合。
                </p>
              </div>
            </div>

            {/* Magnesium Card */}
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-sm hover:shadow-2xl transition-all group border border-slate-100 flex flex-col h-full">
              <div className="w-16 h-16 bg-[#A7C7E7]/10 rounded-2xl flex items-center justify-center text-[#A7C7E7] mb-8 group-hover:rotate-12 transition-transform">
                <Moon size={32} />
              </div>
              <h4 className="text-xs font-black text-[#A7C7E7] tracking-widest uppercase mb-2">舒眠穩定器</h4>
              <h3 className="text-2xl font-black text-slate-800 mb-6">甘胺酸鎂</h3>
              <div className="space-y-4 text-sm font-medium flex-grow">
                <div className="flex justify-between border-b border-slate-50 pb-2">
                  <span className="text-slate-400">來源來源</span>
                  <span className="text-slate-700 text-right">🇺🇸 美國專利螯合</span>
                </div>
                <p className="text-slate-500 leading-relaxed pt-2 text-sm">
                  2:1 螯合型態，吸收率高達 95%，幫助放鬆與入睡，支持「睡中成長」的黃金時段。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Academic Collaboration */}
      <section className="section-gap bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-[0.5px] border-slate-400 rounded-full scale-150 rotate-12" />
        </div>

        <div className="container-custom space-y-16 md:space-y-24 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16 md:gap-20">
            <div className="w-full md:w-1/2 space-y-10">
              <h2 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight leading-tight">與頂尖醫學大學<br />產學合作</h2>
              <p className="text-xl font-black text-[#A7C7E7] leading-relaxed">讓數據成為成長的靠山。</p>
              <div className="prose-container !ml-0">
                <p className="text-lg text-slate-600 font-medium leading-relaxed">
                  我們不只做產品，更致力於建立 「台灣兒童成長大數據」。 GrowFly 攜手國內頂尖醫學大學，結合會員中心的成長管理系統，持續分析並優化更符合 台灣兒童體質 的科學建議。您的每一次紀錄，不僅幫助自己的孩子，也在推動台灣兒童健康研究的進步。
                </p>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 grid grid-cols-1 gap-6">
              {[
                { 
                  icon: <LineChart size={24} />, 
                  title: '醫學數據分析', 
                  desc: '針對學齡兒童體質，精準解碼成長需求。',
                  color: 'bg-[#A7C7E7]/10 text-[#A7C7E7]'
                },
                { 
                  icon: <Activity size={24} />, 
                  title: '成長曲線研究', 
                  desc: '對標 WHO 與本土數據，建立黃金標準。',
                  color: 'bg-[#C1D7C1]/20 text-[#C1D7C1]'
                },
                { 
                  icon: <Zap size={24} />, 
                  title: '營養機制優化', 
                  desc: '依據回饋與實證，持續升級配方效能。',
                  color: 'bg-slate-100 text-slate-400'
                }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 flex items-center gap-6 md:gap-8 shadow-sm hover:shadow-xl transition-all group">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${item.color} group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-slate-800 mb-1">{item.title}</h4>
                    <p className="text-slate-500 font-medium text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Science;
