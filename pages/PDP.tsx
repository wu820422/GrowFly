
import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Star, ShieldCheck, ChevronRight, Minus, Plus, 
  Moon, Activity, Zap, Droplets, CheckCircle2, 
  ShoppingCart, X, Sparkles, Beaker, Shield, Clock,
  Microscope, StarHalf, Check
} from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

interface PDPProps {
  onAddToCart: (p: Product, q: number) => void;
}

const PDP: React.FC<PDPProps> = ({ onAddToCart }) => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const [purchasePlan, setPurchasePlan] = useState<'once' | 'bundle' | 'sub'>('sub');

  const product = useMemo(() => {
    return PRODUCTS.find(p => p.id === id) || PRODUCTS[0];
  }, [id]);

  const plans = {
    once: { label: '單盒體驗', price: product.price, desc: '30日份 / 原價', tag: null },
    bundle: { label: '三盒激推組', price: Math.floor(product.price * 3 * 0.92), desc: '90日份 / 激省 NT$500+', tag: 'Best Value' },
    sub: { label: '定期配送', price: Math.floor(product.price * 0.85), desc: '每月自動送達 / 享 85 折', tag: '最推薦' }
  };

  const currentPrice = plans[purchasePlan].price;

  return (
    <div className="pt-20 md:pt-32 space-y-0 bg-[#FDFBF7] min-h-screen">
      <style>{`
        @keyframes jitter {
          0%, 100% { transform: translate(0,0) rotate(0); }
          25% { transform: translate(-1px, 1px) rotate(-1deg); }
          75% { transform: translate(1px, -1px) rotate(1deg); }
        }
        .animate-jitter {
          animation: jitter 0.3s ease-in-out infinite;
        }
        @keyframes breathing {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        .animate-breathing {
          animation: breathing 3s ease-in-out infinite;
        }
      `}</style>

      {/* Breadcrumb */}
      <div className="container-custom pt-8 pb-4">
        <nav className="flex items-center text-[10px] font-black text-slate-400 space-x-3 tracking-widest uppercase">
          <Link to="/shop" className="hover:text-slate-800 transition-colors">所有產品</Link>
          <ChevronRight size={10} />
          <span className="text-slate-800">{product.name}</span>
        </nav>
      </div>

      {/* Hero Section: Product Focus */}
      <section className="container-custom py-10 md:py-16 grid lg:grid-cols-2 gap-12 md:gap-20 items-center border-b border-slate-50">
        {/* Left: Interactive Image Display */}
        <div className="relative group">
          <div className="aspect-square bg-white rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl relative border border-slate-50 flex items-center justify-center p-12">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#A7C7E7]/5 to-transparent pointer-events-none" />
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-contain animate-float drop-shadow-[0_30px_60px_rgba(0,0,0,0.12)]" 
            />
            {/* 懸浮標籤 */}
            <div className="absolute top-10 right-10 bg-white/80 backdrop-blur-md px-6 py-3 rounded-2xl shadow-xl border border-white flex items-center space-x-3 animate-bounce">
              <Sparkles className="text-[#A7C7E7]" size={20} />
              <span className="text-xs font-black text-slate-800">成長關鍵營養</span>
            </div>
          </div>
          <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-[#C1D7C1]/20 rounded-full blur-3xl animate-pulse" />
        </div>

        {/* Right: Purchase Control */}
        <div className="flex flex-col space-y-8 md:space-y-10">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-[#A7C7E7]/10 rounded-full">
              <Shield size={12} className="text-[#A7C7E7]" />
              <span className="text-[10px] font-black text-[#A7C7E7] tracking-[0.3em] uppercase underline decoration-2 underline-offset-4">Lab Verified Formula</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-800 tracking-tight leading-none">
              {product.name}
            </h1>
            <div className="flex items-center space-x-4">
              <div className="flex text-amber-400">
                {[1, 2, 3, 4].map((s) => <Star key={s} size={18} fill="currentColor" />)}
                <StarHalf size={18} fill="currentColor" />
              </div>
              <span className="text-sm font-bold text-slate-400">4.9 / 5.0 (來自 1,280+ 位家長實測)</span>
            </div>
            <p className="text-lg text-slate-500 font-medium leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="space-y-4">
            {(Object.entries(plans) as [keyof typeof plans, any][]).map(([key, plan]) => (
              <div 
                key={key}
                onClick={() => setPurchasePlan(key)}
                className={`p-6 rounded-[2.5rem] border-2 transition-all cursor-pointer relative overflow-hidden group ${
                  purchasePlan === key 
                  ? 'border-[#A7C7E7] bg-white shadow-2xl shadow-[#A7C7E7]/10' 
                  : 'border-slate-100 hover:border-slate-200 bg-white'
                }`}
              >
                {plan.tag && (
                  <div className={`absolute top-0 right-0 ${key === 'sub' ? 'bg-[#A7C7E7]' : 'bg-slate-800/30'} text-white text-[9px] px-5 py-1.5 rounded-bl-[20px] font-black tracking-widest`}>
                    {plan.tag}
                  </div>
                )}
                <div className="flex justify-between items-center relative z-10">
                  <div className="flex items-center space-x-5">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${purchasePlan === key ? 'border-[#A7C7E7] scale-110' : 'border-slate-200'}`}>
                      {purchasePlan === key && <div className="w-3 h-3 rounded-full bg-[#A7C7E7]" />}
                    </div>
                    <div>
                      <span className="font-black text-slate-800 text-lg md:text-xl">{plan.label}</span>
                      <p className="text-[10px] text-slate-400 font-black mt-1 tracking-widest uppercase">{plan.desc}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl md:text-3xl font-black text-slate-800">NT$ {plan.price.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex items-center border-2 border-slate-100 rounded-full bg-white px-6 py-4 shadow-sm w-full sm:w-auto justify-between group-focus-within:border-[#A7C7E7] transition-all">
              <button onClick={() => setQuantity(q => Math.max(1, q-1))} className="p-1 text-slate-300 hover:text-slate-800 transition-colors"><Minus size={20} /></button>
              <span className="w-16 text-center font-black text-2xl text-slate-800">{quantity}</span>
              <button onClick={() => setQuantity(q => q+1)} className="p-1 text-slate-300 hover:text-slate-800 transition-colors"><Plus size={20} /></button>
            </div>
            <button 
              onClick={() => onAddToCart(product, quantity)}
              className="flex-grow bg-slate-800 text-white py-6 px-12 rounded-full font-black text-lg hover:bg-slate-700 transition-all shadow-2xl active:scale-95 flex items-center justify-center space-x-3"
            >
              <ShoppingCart size={22} />
              <span>立即結帳 NT$ {(currentPrice * quantity).toLocaleString()}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Compare: Before & After - 重塑「晨霧與深海」 */}
      <section className="py-24 bg-white px-4">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 bg-white rounded-[4rem] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.1)] border border-slate-50 min-h-[520px]">
            {/* Before: 焦慮晨霧 */}
            <div className="p-12 md:p-24 space-y-12 bg-[#F1F5F9] flex flex-col justify-center text-center md:text-left">
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-black text-[#64748B] tracking-tight">成長焦慮時期</h3>
                <div className="w-16 h-1.5 bg-[#CBD5E1] rounded-full mx-auto md:mx-0" />
              </div>
              <ul className="space-y-10 md:space-y-12">
                {[
                  '入睡前精力旺盛，難以安穩休息。',
                  '補充了大量鈣質，卻看不見實際變化。',
                  '孩子抗拒傳統粉劑或膠囊的味道。'
                ].map((text, i) => (
                  <li key={i} className="flex flex-col md:flex-row items-center md:items-start md:space-x-8 group">
                    <div className="w-12 h-12 rounded-full border-2 border-[#CBD5E1] flex items-center justify-center flex-shrink-0 text-[#CBD5E1] animate-jitter mb-4 md:mb-0">
                      <X size={20} strokeWidth={4} />
                    </div>
                    <p className="text-[#64748B] font-bold text-lg md:text-2xl leading-relaxed">{text}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* After: 深海寧靜 */}
            <div className="p-12 md:p-24 space-y-12 bg-gradient-to-br from-[#1E3A8A] to-[#172554] text-white flex flex-col justify-center relative group text-center md:text-left">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)] pointer-events-none group-hover:scale-110 transition-transform duration-1000" />
              
              <div className="relative z-10 space-y-4">
                <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight flex items-center justify-center md:justify-start gap-3">
                  高飛星計畫後 <span className="text-[#FCD34D] text-2xl">✦</span>
                </h3>
                <div className="w-16 h-1.5 bg-white/30 rounded-full mx-auto md:mx-0" />
              </div>
              <ul className="relative z-10 space-y-10 md:space-y-12">
                {[
                  '養成固定睡前儀式，入睡更輕鬆。',
                  '科學導航配方，讓營養精準鎖定。',
                  '天然水果風味，孩子主動要求補充。'
                ].map((text, i) => (
                  <li key={i} className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
                    <div className="w-12 h-12 rounded-full bg-[#FCD34D] text-[#1E3A8A] flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(252,211,77,0.4)] animate-breathing mb-4 md:mb-0">
                      <Check size={24} strokeWidth={4} />
                    </div>
                    <p className="text-white font-black text-lg md:text-2xl leading-relaxed">{text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 New Section: Product Detail Long Images (長圖文依序排列) */}
      <section className="bg-white">
        <div className="container-custom space-y-0">
          {[
            '1AVo79S_dwWRThopO_zUUoiw4Mp8_-tsw',
            '1FGClI66xW_fwpDYOJRLttrT3v_CtVg1P',
            '1fTxEHoSblD33soExet0lSS_PFF59BzPz'
          ].map((id, index) => (
            <div key={index} className="w-full animate-in fade-in slide-in-from-bottom-12 duration-1000" style={{ animationDelay: `${index * 0.2}s` }}>
              <img 
                src={`https://drive.google.com/thumbnail?id=${id}&sz=w1600`} 
                alt={`GrowFly Detail ${index + 1}`} 
                className="w-full h-auto block"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Science Section */}
      <section className="section-gap bg-white overflow-hidden">
        <div className="container-custom">
          <div className="flex flex-col items-center text-center space-y-6 mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-slate-800 tracking-tight">星際成長導航系統</h2>
            <p className="text-lg md:text-xl text-slate-400 font-medium max-w-2xl">
              不只是補充，更是精準導航。GrowFly 將鈣質轉化為成長動力的秘密。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: '瑞士 DSM D3', role: '高效搬運', desc: '打開腸道吸收門戶，將鈣質有效導入循環。',
                icon: <Droplets size={32} />, color: 'bg-[#A7C7E7]/10 text-[#A7C7E7]'
              },
              { 
                title: '美國 MenaQ7® K2', role: '精準鎖定', desc: '導航鈣質精準進入骨骼，避免無謂沉積。',
                icon: <Zap size={32} />, color: 'bg-[#C1D7C1]/20 text-emerald-600'
              },
              { 
                title: '甘胺酸鎂', role: '放鬆穩壓', desc: '幫助肌肉平靜，啟動夜晚深度睡眠模式。',
                icon: <Moon size={32} />, color: 'bg-indigo-50 text-indigo-400'
              },
              { 
                title: '雙重胺基酸', role: '能量基石', desc: '精氨酸與離氨酸，提供骨骼發育的關鍵原料。',
                icon: <Activity size={32} />, color: 'bg-amber-50 text-amber-500'
              }
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{item.role}</h4>
                <h3 className="text-xl font-black text-slate-800 mb-4">{item.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Lab */}
      <section className="bg-[#FDFBF7] py-24 md:py-32">
        <div className="container-custom text-center space-y-20">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-black text-slate-800 tracking-tight leading-tight">我們對純淨的承諾，<br />比您更在意。</h2>
            <p className="text-slate-400 font-medium">嚴選全球頂尖原料，每一瓶都經過最高標準檢測。</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { icon: <Microscope size={32} />, label: '全項 SGS 檢測' },
              { icon: <ShieldCheck size={32} />, label: '無西藥、重金屬' },
              { icon: <Beaker size={32} />, label: '醫師團隊研發' },
              { icon: <Activity size={32} />, label: 'ISO/HACCP 認證' }
            ].map((item, i) => (
              <div key={i} className="space-y-6">
                <div className="w-20 h-20 bg-white rounded-[2rem] mx-auto flex items-center justify-center text-[#A7C7E7] shadow-sm">
                  {item.icon}
                </div>
                <p className="text-sm font-black text-slate-800 tracking-widest uppercase">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PDP;
