
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MessageCircle, CreditCard, Phone, Clock, Facebook, Instagram } from 'lucide-react';
import LegalModal from './LegalModal';

const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<'none' | 'tos' | 'privacy' | 'return'>('none');
  const lineLink = "https://line.me/R/ti/p/@growway";

  const closeModals = () => setModalType('none');

  const Logo = ({ className = "" }: { className?: string }) => (
    <div className={`flex items-center ${className}`}>
      <img 
        src="https://lh3.googleusercontent.com/d/1hwy5HElimSOkg2URhHTroZ1nXN1lrGNd" 
        alt="銀禾生醫 Logo" 
        className="w-40 h-16 md:w-56 md:h-20 object-contain transition-transform hover:scale-105"
      />
    </div>
  );

  return (
    <footer className="bg-[#F5F5F0] pt-20 pb-10">
      <div className="container-custom">
        {/* Top: LINE CTA Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center border-b border-slate-200 pb-16 mb-16">
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">加入銀禾生醫官方 LINE</h3>
            <p className="text-slate-600 font-bold text-lg leading-relaxed">
              領取 $100 首購金，再享營養師一對一諮詢。
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <a 
              href={lineLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#06C755] text-white px-12 py-5 rounded-full font-black text-xl hover:bg-[#05b34c] transition-all shadow-xl shadow-[#06C755]/20 flex items-center space-x-4 active:scale-95 group"
            >
              <MessageCircle size={28} className="fill-current group-hover:rotate-12 transition-transform" />
              <span>立即加入好友</span>
            </a>
          </div>
        </div>

        {/* Middle: Sitemap Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h4 className="font-black text-slate-800 uppercase tracking-widest text-xs">關於銀禾生醫</h4>
            <ul className="text-sm font-bold text-slate-500 space-y-3">
              <li><Link to="/about" className="hover:text-[#A7C7E7] transition-colors">品牌故事</Link></li>
              <li><Link to="/science" className="hover:text-[#A7C7E7] transition-colors">科學實證</Link></li>
              <li><Link to="/journal" className="hover:text-[#A7C7E7] transition-colors">成長專欄</Link></li>
              <li><button onClick={() => setModalType('privacy')} className="hover:text-[#A7C7E7] transition-colors text-left">隱私權政策</button></li>
              <li><button onClick={() => setModalType('tos')} className="hover:text-[#A7C7E7] transition-colors text-left">會員服務條款</button></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-black text-slate-800 uppercase tracking-widest text-xs">顧客服務</h4>
            <ul className="text-sm font-bold text-slate-500 space-y-3">
              <li><Link to="/member" className="hover:text-[#A7C7E7] transition-colors">會員中心</Link></li>
              <li><Link to="/member" className="hover:text-[#A7C7E7] transition-colors">訂單查詢</Link></li>
              <li><button onClick={() => setModalType('return')} className="hover:text-[#A7C7E7] transition-colors text-left">退換貨政策</button></li>
              <li><Link to="/shop" className="hover:text-[#A7C7E7] transition-colors">常見問題</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-black text-slate-800 uppercase tracking-widest text-xs">全系列商品</h4>
            <ul className="text-sm font-bold text-slate-500 space-y-3">
              <li><Link to="/product/growfly-30" className="hover:text-[#A7C7E7] transition-colors">高飛星 GrowFly</Link></li>
              <li><Link to="/product/probiotics-30" className="hover:text-[#A7C7E7] transition-colors">舒敏益生菌</Link></li>
              <li><Link to="/product/lutein-30" className="hover:text-[#A7C7E7] transition-colors">晶亮葉黃素凍</Link></li>
              <li><Link to="/shop" className="hover:text-[#A7C7E7] transition-colors">成長應援組合</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-black text-slate-800 uppercase tracking-widest text-xs">聯絡我們</h4>
            <div className="space-y-4 text-sm font-bold text-slate-500">
              <div className="flex items-start space-x-3">
                <Mail size={18} className="text-[#A7C7E7] mt-0.5" />
                <span>service@growfly.tw</span>
              </div>
              <div className="flex items-start space-x-3">
                <Phone size={18} className="text-[#A7C7E7] mt-0.5" />
                <span>0939-963-069</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock size={18} className="text-[#A7C7E7] mt-0.5" />
                <div className="space-y-1">
                  <p>週一至週五 AM9:00 - PM4:30</p>
                  <p className="text-[10px] text-slate-400">午休時段 PM 12:00 ~ PM 1:00</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 pt-2">
                <a href={lineLink} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-400 hover:text-[#06C755] transition-all shadow-sm">
                  <MessageCircle size={16} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-400 hover:text-[#A7C7E7] transition-all shadow-sm">
                  <Facebook size={16} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-400 hover:text-[#A7C7E7] transition-all shadow-sm">
                  <Instagram size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-slate-200 gap-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <Logo />
            </Link>
            <div className="text-[10px] md:text-xs text-slate-400 font-bold text-center md:text-left space-y-1">
              <p>© 2026 銀禾生醫有限公司 統一編號:60687388 All Rights Reserved.</p>
              <p className="tracking-widest uppercase opacity-60">Silver River Biomedical Co., Ltd.</p>
            </div>
          </div>
          <div className="flex items-center space-x-6 text-slate-300">
            <div className="flex items-center space-x-4 grayscale opacity-60 text-[10px] font-black tracking-widest">
              <span>VISA</span>
              <span>MASTERCARD</span>
              <span>JCB</span>
            </div>
            <div className="flex items-center space-x-2 border border-slate-200 px-3 py-1.5 rounded-full">
              <CreditCard size={14} />
              <span className="text-[10px] font-black tracking-widest">SSL SECURE</span>
            </div>
          </div>
        </div>
      </div>

      <LegalModal isOpen={modalType === 'tos'} onClose={closeModals} title="會員服務條款">
        <div className="space-y-8">
          <div>
            <p className="text-xs font-black text-[#A7C7E7] mb-2 tracking-widest uppercase">Version 1.0 | 生效日期：2025/11/6</p>
            <p>歡迎您加入並使用銀禾生醫官網之會員服務。註冊即表示您同意遵守相關條款。</p>
          </div>
        </div>
      </LegalModal>

      <LegalModal isOpen={modalType === 'return'} onClose={closeModals} title="退換貨政策">
        <div className="space-y-8">
          <p className="text-xs font-black text-[#A7C7E7] mb-2 tracking-widest uppercase">最後更新： 2025/9/23</p>
          <p>消費者於收到商品後享有七天鑑賞期。保健食品若經拆封恕不接受退貨。</p>
        </div>
      </LegalModal>

      <LegalModal isOpen={modalType === 'privacy'} onClose={closeModals} title="隱私權政策">
        <div className="space-y-8">
          <p className="text-xs font-black text-[#A7C7E7] mb-2 tracking-widest uppercase">Version 1.0 | 最後更新：2025/12/8</p>
          <p>銀禾生醫重視您的隱私，收集資料僅用於提供更優質的服務與訂單處理。</p>
        </div>
      </LegalModal>
    </footer>
  );
};

export default Footer;
