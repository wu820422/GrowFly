import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, ChevronRight, Activity, Zap, Droplets, 
  Moon, CheckCircle2, LineChart, Lock, Sparkles, 
  Dna, Beaker, Database, Rocket, Search, Smartphone
} from 'lucide-react';
import { PRODUCTS } from '../constants';

const Science: React.FC = () => {
  const [activePlanet, setActivePlanet] = useState<string | null>(null);

  const ingredients = [
    { 
      id: 'k2', 
      name: '維生素 K2 (MenaQ7®)', 
      role: '骨骼導航員', 
      origin: '🇳🇴 挪威/美國專利',
      desc: '來自專利發酵技術，是將鈣質精準鎖進骨骼的黃金鑰匙。',
      icon: <Activity />,
      color: '#C1D7C1'
    },
    { 
      id: 'd3', 
      name: '維生素 D3', 
      role: '陽光搬運工', 
      origin: '🇨🇭 瑞士 DSM 百年',
      desc: '高純度來源，負責鈣質的第一步吸收與搬運。',
      icon: <Droplets />,
      color: '#A7C7E7'
    },
    { 
      id: 'amino', 
      name: '精氨酸 + 離氨酸', 
      role: '生長雙渦輪', 
      origin: '🇰🇷 韓國高純度發酵',
      desc: '成長期必備的關鍵胺基酸，支持骨骼發育。',
      icon: <Zap />,
      color: '#F9E7B8'
    },
    { 
      id: 'magnesium', 
      name: '甘胺酸鎂', 
      role: '舒眠穩定器', 
      origin: '🇺🇸 美國專利螯合',
      desc: '幫助肌肉放鬆與深度睡眠，掌握夜晚成長黃金期。',
      icon: <Moon />,
      color: '#E2E8F0'
    }
  ];

  const reports = [
    { title: 'SGS 重金屬檢驗', date: '2025.12', detail: '380+ 項安全通過' },
    { title: '西藥 380 項零檢出', date: '2025.11', detail: '純淨無添加認證' },
    { title: '塑化劑全項通過', date: '2025.10', detail: '最高等級食品規範' }
  ];

  const skeletonBars = [
    { width: '70%', delay: '0.1s' },
    { width: '85%', delay: '0.3s' },
    { width: '40%', delay: '0.5s' },
    { width: '65%', delay: '0.7s' },
    { width: '90%', delay: '0.9s' },
    { width: '55%', delay: '1.1s' },
    { width: '75%', delay: '1.3s' },
    { width: '60%', delay: '1.5s' },
    { width: '80%', delay: '1.7s' },
  ];

  return (
    <div className="space-y-0 bg-[#FDFBF7] overflow-x-hidden">
      
      {/* 🎬 Section 1: Hero - DNA 虛擬入口 */}
      <section className="relative min-h-[80vh] md:h-[90vh] flex items-center justify-center overflow-hidden bg-white px-4">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
          <Dna size={800} className="animate-dna text-slate-800 scale-150 md:scale-100" />
        </div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#A7C7E7]/10 rounded-full blur-[120px]" />
        
        <div className="container-custom text-center space-y-8 md:space-y-10 relative z-10">
          <div className="inline-block px-6 py-2 md:px-8 md:py-2.5 bg-white/80 backdrop-blur-md rounded-full border border-slate-100 shadow-sm mb-4">
            <span className="text-[9px] md:text-[10px] font-black text-[#A7C7E7] tracking-[0.4em] uppercase">The Virtual Lab</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-[900] text-slate-800 tracking-tighter leading-[1.15] max-w-5xl mx-auto">
            成長，是一場精密的<br /><span className="text-glow">生物工程反應。</span>
          </h1>
          <p className="text-base md:text-2xl font-light text-slate-400 max-w-3xl mx-auto leading-relaxed px-4">
            我們不相信運氣，只相信數據。<br className="hidden md:block" />帶您深入 GrowFly 高飛星的微觀世界。
          </p>
          <div className="pt-6 md:pt-10">
             <div className="w-1 h-12 bg-gradient-to-b from-[#A7C7E7] to-transparent mx-auto rounded-full" />
          </div>
        </div>
      </section>

      {/* 🎬 Section 2: The Mechanism - 深海實驗室 (Dark Blue Mode) */}
      <section className="section-gap bg-deep-lab relative overflow-hidden px-4">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-cyan-500/5 rounded-full blur-[100px] md:blur-[150px] pointer-events-none" />
        
        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-20 lg:gap-32">
            
            {/* 左側：文字與進度 */}
            <div className="w-full lg:w-5/12 space-y-12 md:space-y-16">
              <div className="space-y-6 text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-[900] text-white tracking-tight leading-tight">不是鈣，卻是鈣的<br /><span className="text-[#A7C7E7]">最佳搭檔。</span></h2>
                <p className="text-base md:text-lg text-slate-400 font-medium leading-relaxed">
                  鈣質若無正確引導，只是無效的堆積。我們研發出的「導航機制」正是解決此問題的關鍵。
                </p>
              </div>
              
              <div className="relative space-y-10 md:space-y-12 max-w-md mx-auto lg:mx-0">
                <div className="absolute left-8 top-12 bottom-12 w-px bg-white/5 hidden sm:block" />

                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 group text-center sm:text-left">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 shadow-2xl flex items-center justify-center text-[#A7C7E7] flex-shrink-0 z-10 transition-transform group-hover:scale-110">
                    <Droplets size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-white mb-2">Step 1：吸收搬運 (D3)</h4>
                    <p className="text-slate-500 text-sm font-medium">將鈣質從腸道有效搬進血液高速公路。</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 group relative text-center sm:text-left">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 shadow-2xl flex items-center justify-center text-[#C1D7C1] flex-shrink-0 z-10 transition-transform group-hover:scale-110">
                    <Activity size={32} />
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-xl font-black text-white mb-2">Step 2：精準定位 (K2)</h4>
                    <p className="text-slate-500 text-sm font-medium">啟動骨鈣素，精準定位鈣質鎖進骨骼。</p>
                  </div>
                  <div className="hidden lg:block absolute left-full top-8 w-40 h-[1.5px] fiber-optic -ml-8 pointer-events-none">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_15px_#fff] animate-pulse" />
                  </div>
                </div>
              </div>
            </div>

            {/* 右側：全息原子 (優化 Mobile 下的佈局，避免重疊) */}
            <div className="w-full lg:w-7/12 flex flex-col items-center justify-center relative space-y-12 md:space-y-0">
               {/* 原子容器：在 Mobile 上給予固定高度與空間 */}
               <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center perspective-[1000px] z-10">
                  <div className="absolute w-full h-full bg-cyan-500/10 rounded-full blur-[80px] md:blur-[100px] animate-pulse" />
                  
                  {/* 原子本體動畫 */}
                  <div className="relative w-full h-full animate-hologram">
                    <div className="absolute inset-0 rounded-full border border-white/20" />
                    <div className="absolute inset-0 rounded-full border border-white/10 rotate-45" />
                    <div className="absolute inset-0 rounded-full border border-white/10 -rotate-45" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center transform -rotate-X-20">
                       <span className="text-7xl sm:text-8xl md:text-9xl font-[900] text-white tracking-tighter drop-shadow-[0_0_30px_rgba(255,255,255,0.4)] select-none">Ca</span>
                       <div className="mt-4 px-4 py-1.5 bg-white/10 backdrop-blur-md text-white rounded-full border border-white/20 flex items-center space-x-2">
                          <Lock size={12} className="text-[#4ADE80]" />
                          <span className="text-[10px] font-black tracking-widest uppercase">Target Locked</span>
                       </div>
                    </div>
                  </div>

                  {/* 軌道 */}
                  <div className="absolute w-[110%] h-[110%] rounded-full border border-emerald-400/20 animate-orbit" />
                  <div className="absolute w-[110%] h-[110%] animate-orbit">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#4ADE80] rounded-full shadow-[0_0_20px_#4ADE80] border-2 border-white/50" />
                  </div>
               </div>

               {/* 數據卡片：Mobile 改為相對定位在下方，Desktop 保持絕對定位重疊 */}
               <div className="relative md:absolute md:-bottom-10 md:-right-8 glass-hud p-6 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl w-full max-w-[320px] space-y-6 md:space-y-8 z-30 transition-all duration-500">
                  <div className="space-y-2 md:space-y-3">
                     <div className="flex items-center justify-between">
                        <p className="font-black text-lg md:text-xl text-white tracking-tight">導航活性數據</p>
                        <div className="flex items-center gap-2">
                           <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-400 animate-neon" />
                           <span className="text-[9px] md:text-[10px] font-black text-emerald-400 tracking-widest uppercase">Live</span>
                        </div>
                     </div>
                     <p className="text-[10px] md:text-[11px] text-white/50 font-medium leading-relaxed">
                       專利 MenaQ7® 正驅動鈣質鎖入骨骼。
                     </p>
                  </div>
                  <div className="space-y-2 md:space-y-3">
                     <div className="flex justify-between items-end">
                        <span className="text-[9px] md:text-[10px] font-black text-white/30 uppercase tracking-widest">入骨轉換率</span>
                        <span className="text-lg md:text-xl font-black text-neon">99.8%</span>
                     </div>
                     <div className="w-full bg-white/5 h-2 md:h-2.5 rounded-full overflow-hidden border border-white/5">
                        <div className="bg-gradient-to-r from-emerald-400 to-cyan-400 h-full rounded-full animate-progress shadow-[0_0_15px_rgba(74,222,128,0.5)]" />
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🎬 Section 3: The Formula - 星際營養圖鑑 */}
      <section className="section-gap bg-white overflow-hidden px-4">
        <div className="container-custom space-y-12 md:space-y-20 relative">
          <div className="text-center space-y-4 md:space-y-6">
            <h2 className="text-3xl md:text-5xl font-[900] text-slate-800 tracking-tight">星際營養圖鑑</h2>
            <p className="text-slate-400 text-base md:text-lg font-medium">探索高品質原料來源，點擊卡片查看臨床實證細節。</p>
          </div>

          <div className="flex flex-col lg:flex-row items-stretch justify-center gap-6 md:gap-10">
            {ingredients.map((item) => (
              <div 
                key={item.id}
                onMouseEnter={() => setActivePlanet(item.id)}
                onMouseLeave={() => setActivePlanet(null)}
                className={`group relative w-full lg:w-72 transition-all duration-700 ${activePlanet && activePlanet !== item.id ? 'opacity-30 scale-95 grayscale' : 'opacity-100 scale-100'}`}
              >
                <div 
                  className="min-h-[400px] md:h-[460px] rounded-[3rem] md:rounded-[3.5rem] border border-white/50 backdrop-blur-sm p-8 md:p-10 flex flex-col items-center justify-center text-slate-800 shadow-sm hover:shadow-2xl transition-all cursor-pointer relative overflow-hidden"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <div className={`w-full flex flex-col items-center transition-all duration-700 ${activePlanet === item.id ? 'opacity-0 scale-75 -translate-y-10' : 'animate-planet'}`}>
                    <div className="w-24 h-24 md:w-28 md:h-28 bg-white/80 rounded-[2rem] md:rounded-[2.5rem] flex items-center justify-center text-slate-700 mb-8 md:mb-10 shadow-inner border border-white">
                      {/* Fix: cast to React.ReactElement<any> to allow size prop */}
                      {React.cloneElement(item.icon as React.ReactElement<any>, { size: 48 })}
                    </div>
                    <div className="space-y-3 md:space-y-4 text-center">
                      <span className="inline-block px-4 py-1.5 bg-white/80 rounded-full text-[9px] md:text-[10px] font-black text-[#A7C7E7] tracking-[0.2em] uppercase shadow-sm">
                        {item.role}
                      </span>
                      <h4 className="font-[900] text-xl md:text-2xl tracking-tighter text-slate-800 leading-tight">{item.name}</h4>
                    </div>
                  </div>

                  <div className={`absolute inset-0 bg-white/95 backdrop-blur-xl p-8 md:p-10 flex flex-col justify-center text-center transition-all duration-500 transform ${activePlanet === item.id ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                    <div className="mb-6 mx-auto w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-[#A7C7E7]">
                       {/* Fix: cast to React.ReactElement<any> to allow size prop */}
                       {React.cloneElement(item.icon as React.ReactElement<any>, { size: 20 })}
                    </div>
                    <div className="space-y-6 md:space-y-8">
                      <div className="space-y-1">
                        <p className="text-[9px] font-black text-[#A7C7E7] tracking-[0.3em] uppercase mb-1">Role</p>
                        <p className="text-slate-800 font-[900] text-lg md:text-xl tracking-tight">{item.role}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[9px] font-black text-slate-300 tracking-[0.3em] uppercase mb-1">Origin</p>
                        <p className="text-slate-800 font-bold text-sm">{item.origin}</p>
                      </div>
                      <div className="w-8 h-px bg-slate-100 mx-auto" />
                      <p className="text-xs md:text-sm text-slate-500 font-medium leading-[1.8]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🎬 Section 4: The Firewall - 虛擬掃描儀 */}
      <section className="section-gap bg-[#F9FAFB] relative overflow-hidden px-4">
        <div className="container-custom grid md:grid-cols-2 gap-16 md:gap-20 lg:gap-32 items-center relative z-10">
          <div className="space-y-10 md:space-y-12">
            <div className="space-y-4 text-center md:text-left">
              <div className="inline-flex items-center space-x-3 text-[#A7C7E7] bg-white px-5 py-2 rounded-full shadow-sm border border-slate-100">
                <ShieldCheck size={20} />
                <span className="font-black tracking-[0.3em] uppercase text-[9px] md:text-[10px]">Security Protocol</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-[900] text-slate-800 leading-tight tracking-tight">極致透明，<br />每一批都經得起掃描。</h2>
            </div>
            
            <div className="space-y-5 md:space-y-6">
              {reports.map((r, i) => (
                <div key={i} className="flex items-center justify-between p-5 md:p-7 bg-white rounded-[1.5rem] md:rounded-[2rem] border border-slate-100 shadow-sm transition-all hover:translate-x-4 hover:shadow-xl group">
                   <div className="flex items-center gap-4 md:gap-6">
                     <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-[#C1D7C1]/10 flex items-center justify-center text-[#C1D7C1] group-hover:scale-110 transition-transform">
                        {/* Fix: removed invalid md:size prop and set size to 24 */}
                        <CheckCircle2 size={24} />
                     </div>
                     <div className="space-y-0.5">
                       <span className="block font-black text-slate-800 text-base md:text-lg tracking-tight">{r.title}</span>
                       <span className="block text-[10px] md:text-[11px] font-bold text-slate-400">{r.detail}</span>
                     </div>
                   </div>
                   <div className="text-right flex-shrink-0">
                      <span className="text-[9px] md:text-[10px] font-black text-slate-300 uppercase tracking-widest block mb-1">{r.date}</span>
                      <span className="text-[9px] md:text-[10px] font-black text-emerald-500 uppercase tracking-[0.2em] bg-emerald-50 px-2 md:px-2.5 py-1 rounded-full">Pass</span>
                   </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group w-full max-w-[480px] mx-auto perspective-[1200px]">
             <div className="aspect-[3/4] sm:aspect-[3/4.2] glass-hud rounded-[3rem] md:rounded-[4rem] shadow-2xl overflow-hidden border border-white/50 relative flex items-center justify-center transform group-hover:rotate-y-6 transition-transform duration-1000">
                <div className="w-full h-full p-10 md:p-20 space-y-8 md:space-y-12 relative flex flex-col justify-center bg-white/40">
                   {skeletonBars.map((bar, idx) => (
                     <div 
                      key={idx} 
                      className="h-3 md:h-4 bg-[#F0F2F5] rounded-full animate-bar-sync shadow-inner" 
                      style={{ 
                        width: bar.width, 
                        animationDelay: bar.delay 
                      }} 
                     />
                   ))}
                   <div className="absolute bottom-10 right-10 w-16 h-16 md:w-24 md:h-24 flex items-center justify-center">
                      <div className="absolute inset-0 border border-emerald-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
                      {/* Fix: use responsive Tailwind classes for size and remove invalid md:size */}
                      <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 text-emerald-500/20" />
                   </div>
                </div>
                <div className="animate-scan" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 pointer-events-none z-30">
                   <div className="bg-emerald-500/90 backdrop-blur-xl text-white px-6 py-3 md:px-10 md:py-5 rounded-full font-black flex flex-col items-center justify-center shadow-[0_20px_50px_rgba(16,185,129,0.4)] border border-emerald-400/50 scale-100 group-hover:scale-110 transition-transform">
                     <div className="flex items-center gap-2 md:gap-3 mb-1">
                        {/* Fix: use responsive Tailwind classes for size and remove invalid md:size */}
                        <CheckCircle2 className="w-5 h-5 md:w-7 md:h-7" />
                        <span className="text-sm md:text-lg tracking-widest">SGS VERIFIED</span>
                     </div>
                     <span className="text-[8px] md:text-[10px] opacity-60 tracking-[0.3em] font-medium hidden sm:block">CERTIFICATE ID: GF-2025-X01</span>
                   </div>
                </div>
             </div>
             <div className="absolute -inset-10 bg-emerald-400/5 rounded-full blur-[80px] md:blur-[100px] -z-1" />
          </div>
        </div>
      </section>

      {/* 🎬 Section 5: The Future - 數據戰情室 */}
      <section className="section-gap bg-slate-900 text-white relative overflow-hidden px-4">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
           <LineChart size={800} className="absolute -top-1/4 -right-1/4" />
        </div>
        
        <div className="container-custom relative z-10 flex flex-col md:flex-row items-center gap-16 md:gap-20">
           <div className="w-full md:w-1/2 space-y-10 md:space-y-12 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-[900] tracking-tight leading-tight">產學合作大數據，<br />打造台灣成長黃金標準。</h2>
              <p className="text-base md:text-lg text-white/50 font-medium leading-relaxed">
                我們攜手頂尖醫學大學，將上萬筆成長紀錄轉化為精準建議。
              </p>
              <div className="grid grid-cols-2 gap-6 md:gap-8 pt-6 md:pt-8">
                 <div className="space-y-1 md:space-y-2">
                    <p className="text-3xl md:text-4xl font-black text-[#A7C7E7] tracking-tighter">10k+</p>
                    <p className="text-[9px] md:text-[10px] font-black text-white/30 uppercase tracking-widest opacity-30">活躍成長檔案</p>
                 </div>
                 <div className="space-y-1 md:space-y-2">
                    <p className="text-3xl md:text-4xl font-black text-[#C1D7C1] tracking-tighter">98%</p>
                    <p className="text-[9px] md:text-[10px] font-black text-white/30 uppercase tracking-widest opacity-30">家長信賴回購</p>
                 </div>
              </div>
           </div>

           <div className="w-full md:w-1/2">
              <div className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 border border-white/10 space-y-8 md:space-y-10 shadow-2xl max-w-lg mx-auto md:mx-0">
                 <div className="flex items-center justify-between border-b border-white/5 pb-6 md:pb-8">
                    <div className="flex items-center gap-3 md:gap-4">
                       {/* Fix: use responsive Tailwind classes for size and remove invalid md:size */}
                       <Database className="text-[#A7C7E7] w-5 h-5 md:w-6 md:h-6" />
                       <span className="font-black tracking-widest uppercase text-[10px] md:text-xs text-white/60">Command Center</span>
                    </div>
                    <div className="flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                       <span className="text-[9px] md:text-[10px] font-black text-white/20 uppercase">Syncing...</span>
                    </div>
                 </div>
                 <div className="space-y-6 md:space-y-8 text-left">
                    {[
                      { icon: <Search size={20} />, label: '醫學大學產學實驗室', status: '實證中' },
                      { icon: <Beaker size={20} />, label: '成長大數據模型 2.0', status: '更新完成' },
                      { icon: <Smartphone size={20} />, label: 'AI 智慧成長建議系統', status: '已啟動' }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between group cursor-pointer">
                        <div className="flex items-center gap-4 md:gap-6 min-w-0">
                           <div className="text-white/20 group-hover:text-white transition-colors flex-shrink-0">{item.icon}</div>
                           <span className="font-black text-sm md:text-base group-hover:translate-x-2 transition-transform truncate">{item.label}</span>
                        </div>
                        <span className="text-[9px] md:text-[10px] font-black px-2 md:px-3 py-1 bg-white/5 rounded-full text-white/40 flex-shrink-0">{item.status}</span>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 🎬 Section 6: The Finale - 頁尾召喚 */}
      <section className="section-gap bg-[#FDFBF7] text-center px-4">
        <div className="container-custom max-w-4xl space-y-10 md:space-y-12">
          <div className="inline-flex items-center justify-center p-4 bg-white rounded-full shadow-inner mb-2 md:mb-4">
             <Rocket size={32} className="text-[#A7C7E7] animate-float" />
          </div>
          <h2 className="text-3xl md:text-6xl font-[900] text-slate-800 tracking-tight leading-tight">科學已經準備好了，<br />孩子的潛力呢？</h2>
          <div className="pt-6 md:pt-8">
            <Link 
              to="/shop"
              className="inline-block bg-[#A7C7E7] text-white px-10 py-5 md:px-16 md:py-6 rounded-full font-black text-lg md:text-xl hover:bg-[#8eb6dd] transition-all shadow-2xl shadow-[#A7C7E7]/30 hover:scale-105 active:scale-95"
            >
              啟動成長計畫 Shop Now
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Science;