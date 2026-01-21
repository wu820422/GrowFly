
import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Star, ShieldCheck, ChevronRight, Minus, Plus, 
  Moon, Activity, Zap, Droplets, CheckCircle2, 
  LineChart, Smartphone, Headphones, Info, Sparkles,
  ShoppingCart
} from 'lucide-react';
import { PRODUCTS, TESTIMONIALS } from '../constants';
import { Product } from '../types';

interface PDPProps {
  onAddToCart: (p: Product, q: number) => void;
}

const PDP: React.FC<PDPProps> = ({ onAddToCart }) => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const [purchasePlan, setPurchasePlan] = useState<'once' | 'bundle' | 'sub'>('sub');
  const [activeFAQ, setActiveFAQ] = useState<number | null>(0);

  const product = useMemo(() => {
    return PRODUCTS.find(p => p.id === id) || PRODUCTS[0];
  }, [id]);

  const plans = {
    once: { label: '單盒體驗', price: product.price, desc: '30日份 / 原價', tag: null },
    bundle: { label: '三盒激推組', price: Math.floor(product.price * 3 * 0.92), desc: '90日份 / 激省 NT$500+', tag: 'Best Value' },
    sub: { label: '定期配送', price: Math.floor(product.price * 0.85), desc: '每月自動送達 / 享 85 折', tag: '最推薦' }
  };

  const currentPrice = plans[purchasePlan].price;

  const faqs = [
    { q: `幾歲適合食用 ${product.name}？`, a: '建議準備進入學齡或學齡期兒童（約 5-12 歲），正值生長黃金期的孩子食用。' },
    { q: '喝起來是什麼味道？', a: '是孩子喜歡的清爽水果風味，完全沒有藥味或苦澀感，經過多次調配，讓孩子主動想喝。' },
    { q: '可以跟其他營養品一起吃嗎？', a: '可以。配方溫和，但建議與藥物間隔 1-2 小時食用。' },
    { q: '定期配送如何取消？', a: '您可以隨時於會員中心取消或暫停配送，完全無合約壓力。' }
  ];

  return (
    <div className="pt-20 md:pt-32 space-y-0 bg-[#FDFBF7]">
      <div className="container-custom pt-8 pb-4">
        <nav className="flex items-center text-[10px] font-black text-slate-400 space-x-3 tracking-widest uppercase">
          <Link to="/shop" className="hover:text-slate-800 transition-colors">所有產品</Link>
          <ChevronRight size={10} />
          <span className="text-slate-800">{product.name}</span>
        </nav>
      </div>

      <section className="container-custom py-10 md:py-16 grid md:grid-cols-2 gap-12 md:gap-20 items-start">
        <div className="sticky top-32 space-y-6">
          <div className="aspect-square bg-white rounded-[20px] overflow-hidden shadow-xl group relative">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute bottom-6 right-6 bg-white/50 backdrop-blur-md p-3 rounded-full text-slate-800 opacity-0 group-hover:opacity-100 transition-opacity">
               <Sparkles size={16} />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square rounded-[15px] bg-white border border-slate-100 overflow-hidden cursor-pointer hover:border-[#A7C7E7] transition-all">
                <img src={`https://picsum.photos/seed/pdp-${product.id}-${i}/400`} alt="thumb" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col space-y-10">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 bg-[#A7C7E7]/10 rounded-full">
              <span className="text-[10px] font-black text-[#A7C7E7] tracking-[0.2em] uppercase">GROWWAY PREMIUM</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-slate-800 tracking-tight leading-tight">
              {product.name}
              <br />
              <span className="text-xl font-light text-slate-400">一夜好眠，黃金成長啟動。</span>
            </h1>
            <div className="flex items-center space-x-5">
              <div className="flex text-amber-400">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={16} fill="currentColor" />)}
              </div>
              <span className="text-xs font-black text-slate-400 underline underline-offset-4">4.9 (128 則評價)</span>
            </div>
          </div>

          <div className="space-y-4">
            {Object.entries(plans).map(([key, plan]) => (
              <div 
                key={key}
                onClick={() => setPurchasePlan(key as any)}
                className={`p-6 rounded-[20px] border-2 transition-all cursor-pointer relative overflow-hidden ${
                  purchasePlan === key 
                  ? 'border-[#A7C7E7] bg-[#A7C7E7]/5 shadow-sm' 
                  : 'border-slate-100 hover:border-slate-200 bg-white'
                }`}
              >
                {plan.tag && (
                  <div className="absolute top-0 right-0 bg-[#A7C7E7] text-white text-[9px] px-5 py-1.5 rounded-bl-[15px] font-black tracking-widest">
                    {plan.tag}
                  </div>
                )}
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${purchasePlan === key ? 'border-[#A7C7E7]' : 'border-slate-300'}`}>
                      {purchasePlan === key && <div className="w-2.5 h-2.5 rounded-full bg-[#A7C7E7]" />}
                    </div>
                    <div>
                      <span className="font-black text-slate-800 text-base">{plan.label}</span>
                      <p className="text-[10px] text-slate-400 font-bold mt-0.5">{plan.desc}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xl md:text-2xl font-black text-slate-800">NT$ {plan.price.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center border border-slate-200 rounded-full bg-white px-3 py-1.5 shadow-sm">
              <button onClick={() => setQuantity(q => Math.max(1, q-1))} className="p-2 hover:text-[#A7C7E7]"><Minus size={16} /></button>
              <span className="w-10 text-center font-black text-base">{quantity}</span>
              <button onClick={() => setQuantity(q => q+1)} className="p-2 hover:text-[#A7C7E7]"><Plus size={16} /></button>
            </div>
            <button 
              onClick={() => onAddToCart(product, quantity)}
              className="flex-grow bg-[#A7C7E7] text-white py-4 rounded-full font-black text-lg hover:bg-[#8eb6dd] transition-all shadow-xl shadow-[#A7C7E7]/20"
            >
              加入購物車 - NT$ {(currentPrice * quantity).toLocaleString()}
            </button>
          </div>
        </div>
      </section>

      <section className="section-gap bg-[#F5F5F0]">
        <div className="container-custom space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">普通夜晚 vs 高飛星儀式</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 bg-white rounded-[20px] overflow-hidden shadow-lg border border-slate-100">
            <div className="p-10 md:p-12 space-y-8 bg-slate-50">
              <h3 className="text-xl font-black text-slate-300">普通夜晚 (Before)</h3>
              <ul className="space-y-6">
                {[
                  '入睡困難：精力過剩，難以平靜下來。',
                  '睡眠不穩：淺眠、夜醒，影響生長分泌。'
                ].map((text, i) => (
                  <li key={i} className="flex items-start space-x-4 opacity-40">
                    <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0 text-[8px] font-black">✕</div>
                    <p className="text-slate-600 font-medium text-base">{text}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-10 md:p-12 space-y-8">
              <h3 className="text-xl font-black text-slate-800">高飛星儀式 (After)</h3>
              <ul className="space-y-6">
                {[
                  '安心入睡：期待「高飛星時間」，建立正向睡眠。',
                  '深層睡眠：甘胺酸鎂幫助放鬆，延長深睡期。'
                ].map((text, i) => (
                  <li key={i} className="flex items-start space-x-4">
                    <div className="w-5 h-5 rounded-full bg-[#A7C7E7] text-white flex items-center justify-center flex-shrink-0 text-[8px] font-black">✓</div>
                    <p className="text-slate-800 font-black text-base">{text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PDP;
