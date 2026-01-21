
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-32 md:pt-48 pb-32 bg-[#FDFBF7]">
      <section className="container-custom">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          {/* Founder Photo - 依照指示更換為新連結 */}
          <div className="w-full md:w-1/2">
            <div className="aspect-[4/5] rounded-[3rem] md:rounded-[5rem] overflow-hidden shadow-2xl relative group border-8 border-white bg-slate-200">
               <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 animate-pulse" />
               <img 
                src="https://drive.google.com/thumbnail?id=1XBguEP6u2eNYzvNznAQW9awnga1TuTPF&sz=w1200" 
                alt="銀禾生醫 創辦團隊" 
                className="relative z-10 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent pointer-events-none z-20" />
            </div>
          </div>

          {/* Letter Content */}
          <div className="w-full md:w-1/2 space-y-12 relative">
            {/* Background Decorative Text */}
            <div className="absolute -top-20 -left-10 text-[120px] font-black text-slate-100 opacity-20 pointer-events-none select-none hidden lg:block uppercase tracking-tighter">
              Quality
            </div>

            <div className="space-y-4 relative z-10">
              <h1 className="text-4xl md:text-6xl font-black text-slate-800 tracking-tight leading-[1.1]">
                銀禾生醫有限公司
              </h1>
              <p className="text-2xl md:text-3xl font-bold text-slate-400 tracking-tight">
                守護未來的父母
              </p>
            </div>
            
            <div className="border-l-[6px] border-[#A7C7E7] pl-8 md:pl-10 py-6 space-y-6">
              <p className="text-2xl md:text-3xl font-black text-slate-800 leading-tight tracking-tight">
                「守護孩子成長，是銀禾生醫唯一的堅持。」
              </p>
              <p className="text-lg md:text-xl text-slate-500 italic font-medium leading-relaxed">
                在孩子成長的每一哩路，銀禾生醫團隊不斷自問：什麼才是孩子真正需要的？我們以此為起點，致力提供最安全、有效，且讓家長全然放心的成長方案。
              </p>
            </div>

            <div className="space-y-8 text-base md:text-lg text-slate-600 font-medium leading-relaxed">
              <p>
                從<strong className="text-slate-800">旗艦產品高飛星 GrowFly</strong> 配方的研發、原物料的溯源到生產工廠的最高標準控管，每一個細節，銀禾生醫絕不妥協；每一個品質，我們從不將就。
              </p>
              <p>
                銀禾生醫深信，營養不應是堆砌，而是精準的給予。高飛星的誕生，是源於一份不願妥協的父愛與母愛。我們剔除多餘的香料與糖分，只保留最純粹的成長能量。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="mt-40 md:mt-56 bg-white py-32 md:py-48 overflow-hidden relative border-t border-slate-50">
        <div className="container-custom text-center space-y-20 md:space-y-32">
          <h2 className="text-3xl md:text-5xl font-black text-slate-800 tracking-tight">銀禾生醫的三大堅持</h2>
          <div className="grid md:grid-cols-3 gap-16 md:gap-20">
            <div className="space-y-8 group">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-[#A7C7E7]/10 rounded-[2rem] mx-auto flex items-center justify-center text-[#A7C7E7] transition-transform group-hover:rotate-6 shadow-sm">
                <span className="text-2xl md:text-3xl font-black">01</span>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl md:text-2xl font-black text-slate-800">科學引領研發</h4>
                <p className="text-slate-500 font-medium leading-relaxed text-sm md:text-base">銀禾生醫基於國際臨床文戶與專利配方，拒絕來源不明的添加。每一項成分皆有實證支持。</p>
              </div>
            </div>
            <div className="space-y-8 group">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-[#C1D7C1]/20 rounded-[2rem] mx-auto flex items-center justify-center text-emerald-600 transition-transform group-hover:-rotate-6 shadow-sm">
                <span className="text-2xl md:text-3xl font-black">02</span>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl md:text-2xl font-black text-slate-800">極簡純淨標準</h4>
                <p className="text-slate-500 font-medium leading-relaxed text-sm md:text-base">堅持無防腐劑、無人工色素、無西藥檢出。銀禾生醫只給孩子身體真正需要的補給。</p>
              </div>
            </div>
            <div className="space-y-8 group">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-slate-100 rounded-[2rem] mx-auto flex items-center justify-center text-slate-400 transition-transform group-hover:scale-110 shadow-sm">
                <span className="text-2xl md:text-3xl font-black">03</span>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl md:text-2xl font-black text-slate-800">透明溯源報告</h4>
                <p className="text-slate-500 font-medium leading-relaxed text-sm md:text-base">公開原料產地與各項 SGS 檢驗報告。銀禾生醫比您更在意放進孩子口中的每一滴營養。</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
