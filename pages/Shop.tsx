
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Plus, ChevronRight, MessageCircle, Eye, Info, Moon, ShieldCheck } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

interface ShopProps {
  onAddToCart: (p: Product) => void;
}

const Shop: React.FC<ShopProps> = ({ onAddToCart }) => {
  const [filter, setFilter] = useState<'all' | 'growth' | 'digest' | 'vision' | 'bundle'>('all');

  const filteredProducts = useMemo(() => {
    if (filter === 'all') return PRODUCTS;
    return PRODUCTS.filter(p => p.category === filter);
  }, [filter]);

  const categories = [
    { id: 'all', label: '全部顯示' },
    { id: 'growth', label: '長高睡眠' },
    { id: 'digest', label: '消化體質' },
    { id: 'vision', label: '晶亮護眼' },
    { id: 'bundle', label: '超值組合' },
  ];

  return (
    <div className="pt-20 md:pt-32 space-y-0 bg-[#FDFBF7] min-h-screen">
      <style>{`
        .product-card-aura {
          box-shadow: 0 40px 100px -20px rgba(167, 199, 231, 0.35);
        }
        .filter-btn-active {
          background-color: #1E293B;
          color: white;
        }
      `}</style>

      {/* Hero Header */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="container-custom text-center space-y-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-[#1E293B] tracking-tight leading-tight">
            專屬台灣兒童的<br className="md:hidden" />營養拼圖
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
            針對睡眠、消化、晶亮需求，打造全方位的成長防護網。剔除不必要的添加，給予最純粹的支撐。
          </p>
        </div>
      </section>

      {/* Filter Tabs - 完美還原截圖樣式 */}
      <section className="container-custom pb-16 sticky top-24 z-40">
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 bg-white/40 backdrop-blur-md p-2 rounded-full w-fit mx-auto shadow-sm border border-white/50">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={`px-6 md:px-10 py-2.5 rounded-full font-black text-[10px] md:text-[11px] tracking-wider transition-all uppercase ${
                filter === cat.id 
                ? 'bg-[#1E293B] text-white shadow-lg' 
                : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Product Grid - 依照截圖佈局 */}
      <section className="container-custom pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="group flex flex-col h-full animate-in fade-in slide-in-from-bottom-8 duration-700"
            >
              <Link to={`/product/${product.id}`} className="flex flex-col flex-grow">
                {/* Image Container with Shadow/Aura - 滿版優化 */}
                <div 
                  className={`aspect-square rounded-[2.5rem] relative overflow-hidden mb-8 transition-all duration-500 bg-white border border-slate-50 ${
                    product.category === 'growth' ? 'product-card-aura' : 'shadow-xl shadow-slate-200/50 hover:shadow-2xl'
                  }`}
                >
                  {/* Status Badge - 完美還原截圖樣式 */}
                  {product.status && (
                    <div className="absolute top-6 left-6 z-20">
                      <span className="bg-white/95 backdrop-blur-md px-5 py-2 rounded-full text-[9px] font-black text-slate-800 shadow-xl border border-white uppercase tracking-widest">
                        {product.status}
                      </span>
                    </div>
                  )}
                  
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-[#F8FAFC] opacity-40" />
                  
                  {/* 圖片設置為 object-cover 並移除 padding 實現滿版 */}
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 z-10 relative"
                  />
                  
                  {/* Category Icon Badge - 完美還原截圖 */}
                  <div className="absolute bottom-6 right-6 w-11 h-11 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-slate-400 shadow-xl z-20 group-hover:rotate-12 transition-transform">
                    {product.category === 'growth' && <Moon size={22} />}
                    {product.category === 'digest' && <ShieldCheck size={22} />}
                    {product.category === 'vision' && <Eye size={22} />}
                    {product.category === 'bundle' && <Plus size={22} />}
                  </div>
                </div>

                {/* Content Area */}
                <div className="px-4 space-y-4 flex-grow">
                  <div className="space-y-1">
                    <h3 className="text-2xl md:text-3xl font-black text-[#1E293B] group-hover:text-[#A7C7E7] transition-colors tracking-tight">
                      {product.name}
                    </h3>
                    <p className="text-[10px] font-black text-slate-400 tracking-[0.2em] uppercase">
                      {product.shortDesc}
                    </p>
                  </div>
                  
                  <p className="text-lg font-black text-[#A7C7E7] tracking-tight leading-tight">
                    {product.oneLiner}
                  </p>
                </div>
              </Link>

              {/* Price & Action - 依照截圖精確排版 */}
              <div className="px-4 pt-8 flex items-end justify-between border-t border-slate-50 mt-8">
                <div className="space-y-1">
                  {product.originalPrice && (
                    <span className="text-[11px] text-slate-300 line-through font-bold block">NT$ {product.originalPrice.toLocaleString()}</span>
                  )}
                  <span className="text-2xl md:text-3xl font-black text-[#1E293B] tracking-tighter">NT$ {product.price.toLocaleString()}</span>
                </div>
                <button 
                  onClick={() => onAddToCart(product)}
                  className="px-7 h-12 rounded-full bg-[#1E293B] text-white flex items-center gap-3 font-black text-[11px] hover:bg-slate-700 transition-all shadow-xl active:scale-95"
                >
                  <ShoppingCart size={16} />
                  <span>+ 購物車</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Shop;
