
import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Star, ShieldCheck, ChevronRight, Minus, Plus, 
  Moon, Activity, Zap, Droplets, CheckCircle2, 
  ShoppingCart, X, Sparkles
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
      {/* Breadcrumb */}
      <div className="container-custom pt-8 pb-4">
        <nav className="flex items-center text-[10px] font-black text-slate-400 space-x-3 tracking-widest uppercase">
          <Link to="/shop" className="hover:text-slate-800 transition-colors">所有產品</Link>
          <ChevronRight size={10} />
          <span className="text-slate-800">{product.name}</span>
        </nav>
      </div>

      {/* Main Product Info Section */}
      <section className="container-custom py-10 md:py-16 grid md:grid-cols-2 gap-12 md:gap-20 items-start">
        {/* Product Image Focus - 只顯示一張圖，移除縮圖列表 */}
        <div className="sticky top-32">
          <div className="aspect-square bg-white rounded-[2.5rem] overflow-hidden shadow-2xl relative border border-slate-50 group">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
            />
            <div className="absolute bottom-8 right-8 bg-white/50 backdrop-blur-md p-4 rounded-2xl text-slate-800 opacity-0 group-hover:opacity-100 transition-opacity">
               <Sparkles size={20} />
            </div>
          </div>
        </div>

        {/* Purchase Info */}
        <div className="flex flex-col space-y-10">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 bg-[#A7C7E7]/10 rounded-full">
              <span className="text-[10px] font-black text-[#A7C7E7] tracking-[0.4em] uppercase">GROWFLY PREMIUM</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-slate-800 tracking-tight leading-tight">
              {product.name}
              <br />
              <span className="text-xl font-light text-slate-400">專為台灣兒童打造的成長應援。</span>
            </h1>
            <div className="flex items-center space-x-5">
              <div className="flex text-amber-400">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={16} fill="currentColor" />)}
              </div>
              <span className="text-xs font-black text-slate-400 underline underline-offset-4">4.9 (128 則評價)</span>
            </div>
          </div>

          <div className="space-y-4">
            {(Object.entries(plans) as [keyof typeof plans, any][]).map(([key, plan]) => (
              <div 
                key={key}
                onClick={() => setPurchasePlan(key)}
                className={`p-6 rounded-[2.5rem] border-2 transition-all cursor-pointer relative overflow-hidden ${
                  purchasePlan === key 
                  ? 'border-[#A7C7E7] bg-white shadow-xl shadow-[#A7C7E7]/10' 
                  : 'border-slate-100 hover:border-slate-200 bg-white'
                }`}
              >
                {plan.tag && (
                  <div className={`absolute top-0 right-0 ${key === 'sub' ? 'bg-[#A7C7E7]' : 'bg-slate-800/30'} text-white text-[9px] px-5 py-1.5 rounded-bl-[20px] font-black tracking-widest`}>
                    {plan.tag}
                  </div>
                )}
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-5">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${purchasePlan === key ? 'border-[#A7C7E7]' : 'border-slate-200'}`}>
                      {purchasePlan === key && <div className="w-3 h-3 rounded-full bg-[#A7C7E7]" />}
                    </div>
                    <div>
                      <span className="font-black text-slate-800 text-lg">{plan.label}</span>
                      <p className="text-[10px] text-slate-400 font-bold mt-0.5 tracking-wider uppercase">{plan.desc}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xl md:text-2xl font-black text-slate-800">NT$ {plan.price.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-6 space-y-4 sm:space-y-0">
            <div className="flex items-center border border-slate-100 rounded-full bg-white px-4 py-3 shadow-sm w-full sm:w-auto justify-between">
              <button onClick={() => setQuantity(q => Math.max(1, q-1))} className="p-2 text-slate-300 hover:text-[#A7C7E7]"><Minus size={18} /></button>
              <span className="w-12 text-center font-black text-xl">{quantity}</span>
              <button onClick={() => setQuantity(q => q+1)} className="p-2 text-slate-300 hover:text-[#A7C7E7]"><Plus size={18} /></button>
            </div>
            <button 
              onClick={() => onAddToCart(product, quantity)}
              className="flex-grow bg-slate-900 text-white py-5 px-10 rounded-full font-black text-lg hover:bg-slate-800 transition-all shadow-2xl w-full active:scale-95"
            >
              加入購物車 - NT$ {(currentPrice * quantity).toLocaleString()}
            </button>
          </div>

          <div className="pt-10 grid grid-cols-2 gap-6 border-t border-slate-100">
            <div className="flex items-center space-x-4 text-slate-500">
              <ShieldCheck className="text-[#A7C7E7]" size={20} />
              <span className="text-xs font-bold">SGS 安全檢驗合格</span>
            </div>
            <div className="flex items-center space-x-4 text-slate-500">
              <CheckCircle2 className="text-[#A7C7E7]" size={20} />
              <span className="text-xs font-bold">全台免運費 (定期購)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="section-gap bg-white">
        <div className="container-custom space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-slate-800 tracking-tight">普通夜晚 vs 高飛星儀式</h2>
            <p className="text-slate-400 font-medium">看見改變，從睡眠細節開始。</p>
          </div>

          <div className="grid md:grid-cols-2 bg-white rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100 min-h-[500px]">
            <div className="p-12 md:p-20 space-y-12 bg-slate-100/50 flex flex-col justify-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-black text-slate-400 tracking-tight">普通夜晚 (Before)</h3>
                <div className="w-12 h-1 bg-slate-200 rounded-full" />
              </div>
              <ul className="space-y-8">
                {[
                  '入睡困難：精力過剩，難以平靜下來。',
                  '睡眠不穩：淺眠、夜醒，影響生長分泌。'
                ].map((text, i) => (
                  <li key={i} className="flex items-start space-x-6">
                    <div className="w-7 h-7 rounded-full border-2 border-slate-300 flex items-center justify-center flex-shrink-0 text-slate-300">
                      <X size={14} strokeWidth={4} />
                    </div>
                    <p className="text-slate-500 font-bold text-lg md:text-xl leading-relaxed">{text}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-12 md:p-20 space-y-12 bg-slate-900 text-white flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#A7C7E7]/10 rounded-full blur-[120px] pointer-events-none group-hover:scale-110 transition-transform duration-1000" />
              <div className="relative z-10 space-y-4">
                <div className="flex items-center space-x-3">
                  <h3 className="text-2xl font-black text-white tracking-tight">高飛星儀式 (After)</h3>
                  <Sparkles size={20} className="text-amber-400" />
                </div>
                <div className="w-12 h-1 bg-[#A7C7E7] rounded-full" />
              </div>
              <ul className="relative z-10 space-y-10">
                {[
                  { title: '安心入睡', desc: '期待「高飛星時間」，建立正向睡眠感。' },
                  { title: '深層睡眠', desc: '甘胺酸鎂幫助放鬆，延長深睡黃金期。' }
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-6">
                    <div className="w-8 h-8 rounded-full bg-amber-400 text-slate-900 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={18} strokeWidth={3} />
                    </div>
                    <div className="space-y-1">
                      <p className="text-xl md:text-2xl font-black text-white">{item.title}</p>
                      <p className="text-white/60 font-medium text-base md:text-lg">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Info */}
      <section className="bg-slate-50 py-24">
        <div className="container-custom grid md:grid-cols-3 gap-12 text-center">
          <div className="space-y-5">
            <div className="w-20 h-20 bg-white rounded-[2rem] mx-auto flex items-center justify-center text-[#A7C7E7] shadow-sm">
              <ShieldCheck size={36} />
            </div>
            <h4 className="text-xl font-black text-slate-800">100% 安全純淨</h4>
            <p className="text-sm text-slate-500 font-medium leading-relaxed">無添加人工色素、防腐劑，通過 SGS 全項檢驗認證。</p>
          </div>
          <div className="space-y-5">
            <div className="w-20 h-20 bg-white rounded-[2rem] mx-auto flex items-center justify-center text-[#A7C7E7] shadow-sm">
              <Activity size={36} />
            </div>
            <h4 className="text-xl font-black text-slate-800">科學實證配方</h4>
            <p className="text-sm text-slate-500 font-medium leading-relaxed">根據國際臨床文獻開發，確保每一項成分都有實質效用。</p>
          </div>
          <div className="space-y-5">
            <div className="w-20 h-20 bg-white rounded-[2rem] mx-auto flex items-center justify-center text-[#A7C7E7] shadow-sm">
              <ShoppingCart size={36} />
            </div>
            <h4 className="text-xl font-black text-slate-800">專業配送與保障</h4>
            <p className="text-sm text-slate-500 font-medium leading-relaxed">定期配送服務，讓孩子的營養補給不中斷，安心感升級。</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PDP;
