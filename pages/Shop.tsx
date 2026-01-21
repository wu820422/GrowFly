
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
    <div className="pt-20 md:pt-32 space-y-0 bg-[#FDFBF7]">
      <section className="relative py-24 md:py-32 overflow-hidden bg-[#FDFBF7]">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 border border-slate-300 rounded-full" />
          <div className="absolute -bottom-20 -right-20 w-96 h-96 border border-slate-300 rounded-[20px] rotate-45" />
        </div>
        <div className="container-custom text-center space-y-8 relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-slate-800 tracking-tight leading-tight">
            專屬台灣兒童的<br className="md:hidden" />營養拼圖
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
            針對睡眠、消化、晶亮需求，打造全方位的成長防護網。剔除不必要的添加，給予最純粹的支撐。
          </p>
        </div>
      </section>

      <section className="container-custom pb-16">
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={`px-8 py-2.5 rounded-full font-black text-xs transition-all shadow-sm border ${
                filter === cat.id 
                ? 'bg-slate-800 text-white border-slate-800 shadow-xl' 
                : 'bg-white text-slate-400 border-slate-100 hover:border-slate-200 hover:text-slate-600'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      <section className="container-custom pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-[20px] p-6 shadow-sm hover:shadow-xl transition-all group flex flex-col h-full border border-slate-50"
            >
              <Link to={`/product/${product.id}`} className="flex flex-col flex-grow">
                <div 
                  className="aspect-[4/5] rounded-[20px] relative overflow-hidden mb-8"
                  style={{ backgroundColor: `${product.color}20` }}
                >
                  {product.status && (
                    <div className="absolute top-5 left-5 z-20">
                      <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-[9px] font-black text-slate-800 shadow-sm uppercase tracking-widest border border-slate-100">
                        {product.status}
                      </span>
                    </div>
                  )}
                  
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  <div className="absolute bottom-5 right-5 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-400 shadow-lg group-hover:rotate-12 transition-transform">
                    {product.category === 'growth' && <Moon size={20} />}
                    {product.category === 'digest' && <ShieldCheck size={20} />}
                    {product.category === 'vision' && <Eye size={20} />}
                    {product.category === 'bundle' && <Plus size={20} />}
                  </div>
                </div>

                <div className="px-2 flex-grow space-y-3">
                  <div className="space-y-1">
                    <h3 className="text-xl font-black text-slate-800 group-hover:text-[#A7C7E7] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-[10px] font-black text-slate-400 tracking-widest uppercase">
                      {product.shortDesc}
                    </p>
                  </div>
                  
                  <p className="text-base font-black text-[#A7C7E7] leading-tight">
                    「{product.oneLiner}」
                  </p>
                </div>
              </Link>

              <div className="px-2 pt-6 flex items-end justify-between border-t border-slate-50 mt-8">
                <div className="space-y-1">
                  {product.originalPrice && (
                    <span className="text-[10px] text-slate-400 line-through block">NT$ {product.originalPrice.toLocaleString()}</span>
                  )}
                  <span className="text-xl font-black text-slate-800">NT$ {product.price.toLocaleString()}</span>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => onAddToCart(product)}
                    className="px-5 h-10 rounded-full bg-slate-800 text-white flex items-center gap-2 font-black text-[10px] hover:bg-slate-700 transition-all shadow-lg"
                  >
                    <ShoppingCart size={14} />
                    <span>+ 購物車</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Shop;
