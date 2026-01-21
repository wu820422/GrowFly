
import React from 'react';
import { X, Minus, Plus, ShoppingBag, ShieldCheck } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQty: (id: string, delta: number) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, cart, onRemove, onUpdateQty }) => {
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const freeShippingThreshold = 2500;
  const progress = Math.min((subtotal / freeShippingThreshold) * 100, 100);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/30 z-[60] transition-opacity animate-in fade-in"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl transition-transform duration-500 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold flex items-center space-x-2">
              <ShoppingBag size={20} className="text-[#A7C7E7]" />
              <span>您的成長清單</span>
            </h2>
            <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
              <X size={24} />
            </button>
          </div>

          {/* Shipping Progress */}
          <div className="mb-8 space-y-2">
            <div className="flex justify-between text-xs font-medium">
              <span>{subtotal >= freeShippingThreshold ? '已享免運！' : `還差 NT$${freeShippingThreshold - subtotal} 即享免運！`}</span>
              <span>NT$2,500 免運</span>
            </div>
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
              <div 
                className="bg-[#A7C7E7] h-full transition-all duration-700" 
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Items */}
          <div className="flex-grow overflow-y-auto space-y-6 pr-2">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-40 text-slate-400">
                <p>購物車是空的</p>
                <button onClick={onClose} className="mt-4 text-[#A7C7E7] text-sm underline">去逛逛產品</button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex space-x-4 border-b border-slate-50 pb-6 group">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden bg-slate-50">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow space-y-1">
                    <div className="flex justify-between">
                      <h4 className="text-sm font-bold text-slate-800 line-clamp-1">{item.name}</h4>
                      <button onClick={() => onRemove(item.id)} className="text-slate-300 hover:text-red-400">
                        <X size={16} />
                      </button>
                    </div>
                    <p className="text-xs text-slate-400">{item.shortDesc}</p>
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center border border-slate-200 rounded-full">
                        <button onClick={() => onUpdateQty(item.id, -1)} className="p-1 hover:text-[#A7C7E7]"><Minus size={14} /></button>
                        <span className="w-8 text-center text-xs font-bold">{item.quantity}</span>
                        <button onClick={() => onUpdateQty(item.id, 1)} className="p-1 hover:text-[#A7C7E7]"><Plus size={14} /></button>
                      </div>
                      <span className="text-sm font-bold text-slate-700">NT$ {(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              ))
            )}

            {/* Upsell placeholder */}
            {cart.length > 0 && (
              <div className="mt-8 bg-[#FDFBF7] p-4 rounded-3xl border border-dashed border-[#A7C7E7]/30">
                <p className="text-xs font-bold text-[#A7C7E7] mb-3">搭配這些效果更好：</p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-slate-100 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=200" className="w-full h-full object-cover opacity-80" alt="upsell" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-[10px] font-bold">加強吸收！全效益生菌</p>
                    <p className="text-[10px] text-slate-400">NT$ 990 <span className="line-through text-[8px]">NT$ 1,280</span></p>
                  </div>
                  <button className="bg-white text-[10px] px-3 py-1.5 rounded-full border border-[#A7C7E7] text-[#A7C7E7] font-bold hover:bg-[#A7C7E7] hover:text-white transition-colors">
                    + 加購
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="mt-auto pt-6 space-y-4">
            <div className="flex justify-between items-end">
              <span className="text-slate-500 text-sm">總計</span>
              <span className="text-2xl font-bold text-slate-800">NT$ {subtotal.toLocaleString()}</span>
            </div>
            <button 
              disabled={cart.length === 0}
              className={`w-full py-4 rounded-full font-bold flex items-center justify-center space-x-2 transition-all shadow-lg ${
                cart.length === 0 ? 'bg-slate-200 text-slate-400 cursor-not-allowed' : 'bg-[#A7C7E7] text-white hover:bg-[#8eb6dd]'
              }`}
            >
              <span>前往結帳</span>
              <ShieldCheck size={18} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
