
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MessageCircle, CreditCard, Phone, Clock, Facebook, Instagram } from 'lucide-react';
import LegalModal from './LegalModal';

const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<'none' | 'tos' | 'privacy' | 'return'>('none');

  const closeModals = () => setModalType('none');

  const Logo = ({ className = "" }: { className?: string }) => (
    <div className={`flex items-center space-x-2 ${className}`}>
      <img 
        src="https://drive.google.com/uc?id=1cJGWr5-GBdsO0MxpWB01ZseaohfK-gEB" 
        alt="GrowFly Logo" 
        className="w-8 h-8 object-contain"
      />
      <span className="text-xl font-[900] tracking-tighter">GrowFly</span>
    </div>
  );

  return (
    <footer className="bg-[#F5F5F0] pt-20 pb-10">
      <div className="container-custom">
        {/* Top: Newsletter Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center border-b border-slate-200 pb-16 mb-16">
          <div className="space-y-4">
            <h3 className="text-2xl font-black text-slate-800 tracking-tight">加入 GrowFly 成長圈</h3>
            <p className="text-slate-600 font-medium leading-relaxed">
              訂閱電子報，獲取最新科學育兒資訊與會員專屬禮遇。
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="請輸入您的 Email" 
              className="bg-white px-8 py-4 rounded-full text-sm flex-grow outline-none focus:ring-2 focus:ring-[#A7C7E7]/30 transition-all border border-transparent focus:border-[#A7C7E7]"
            />
            <button className="bg-[#A7C7E7] text-white px-10 py-4 rounded-full font-black text-sm hover:bg-[#8eb6dd] transition-all shadow-lg shadow-[#A7C7E7]/20">
              訂閱
            </button>
          </div>
        </div>

        {/* Middle: Sitemap Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: About */}
          <div className="space-y-6">
            <h4 className="font-black text-slate-800 uppercase tracking-widest text-xs">關於 GrowFly</h4>
            <ul className="text-sm font-bold text-slate-500 space-y-3">
              <li><Link to="/about" className="hover:text-[#A7C7E7] transition-colors">品牌故事</Link></li>
              <li><Link to="/science" className="hover:text-[#A7C7E7] transition-colors">科學實證</Link></li>
              <li><Link to="/journal" className="hover:text-[#A7C7E7] transition-colors">成長專欄</Link></li>
              <li><button onClick={() => setModalType('privacy')} className="hover:text-[#A7C7E7] transition-colors text-left">隱私權政策</button></li>
              <li><button onClick={() => setModalType('tos')} className="hover:text-[#A7C7E7] transition-colors text-left">會員服務條款</button></li>
            </ul>
          </div>

          {/* Column 2: Service */}
          <div className="space-y-6">
            <h4 className="font-black text-slate-800 uppercase tracking-widest text-xs">顧客服務</h4>
            <ul className="text-sm font-bold text-slate-500 space-y-3">
              <li><Link to="/member" className="hover:text-[#A7C7E7] transition-colors">會員中心</Link></li>
              <li><Link to="/member" className="hover:text-[#A7C7E7] transition-colors">訂單查詢</Link></li>
              <li><button onClick={() => setModalType('return')} className="hover:text-[#A7C7E7] transition-colors text-left">退換貨政策</button></li>
              <li><Link to="/shop" className="hover:text-[#A7C7E7] transition-colors">常見問題</Link></li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="space-y-6">
            <h4 className="font-black text-slate-800 uppercase tracking-widest text-xs">全系列商品</h4>
            <ul className="text-sm font-bold text-slate-500 space-y-3">
              <li><Link to="/product/growfly-30" className="hover:text-[#A7C7E7] transition-colors">高飛星 GrowFly</Link></li>
              <li><Link to="/product/probiotics-30" className="hover:text-[#A7C7E7] transition-colors">舒敏益生菌</Link></li>
              <li><Link to="/product/lutein-30" className="hover:text-[#A7C7E7] transition-colors">晶亮葉黃素凍</Link></li>
              <li><Link to="/shop" className="hover:text-[#A7C7E7] transition-colors">全方位成長組合</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
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
                <a href="https://line.me" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-400 hover:text-[#A7C7E7] transition-all shadow-sm">
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

        {/* Bottom: Copyright & Payment */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-slate-200 gap-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <Logo className="text-slate-800" />
            </Link>
            <div className="text-[10px] md:text-xs text-slate-400 font-bold text-center md:text-left space-y-1">
              <p>© 2026 銀禾生醫有限公司 統一編號:60687388 All Rights Reserved.</p>
              <p className="tracking-widest uppercase opacity-60">Silver River Biomedical Co., Ltd.</p>
            </div>
          </div>
          <div className="flex items-center space-x-6 text-slate-300">
            <div className="flex items-center space-x-4 grayscale opacity-60">
              <span className="text-[10px] font-black tracking-widest">VISA</span>
              <span className="text-[10px] font-black tracking-widest">MASTERCARD</span>
              <span className="text-[10px] font-black tracking-widest">JCB</span>
            </div>
            <div className="flex items-center space-x-2 border border-slate-200 px-3 py-1.5 rounded-full">
              <CreditCard size={14} />
              <span className="text-[10px] font-black tracking-widest">SSL SECURE</span>
            </div>
          </div>
        </div>
      </div>

      <LegalModal 
        isOpen={modalType === 'tos'} 
        onClose={closeModals} 
        title="會員服務條款"
      >
        <div className="space-y-8">
          <div>
            <p className="text-xs font-black text-[#A7C7E7] mb-2 tracking-widest uppercase">Version 1.0 | 生效日期：2025/11/6</p>
            <p>歡迎您加入並使用本網站所提供之會員服務。當您註冊成為本網站會員時，即表示您已閱讀、瞭解並同意遵守下列條款：</p>
          </div>
          <section className="space-y-4">
            <h3 className="text-lg font-black text-slate-800">一、會員資格與註冊</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>您須年滿十八歲，並提供正確、最新、完整的個人資訊進行註冊。</li>
              <li>每位使用者僅能註冊一個帳號，不得冒用他人身份資訊。</li>
              <li>若會員資料有變動，應即時更新，以保障您的權益。</li>
            </ul>
          </section>
          <section className="space-y-4">
            <h3 className="text-lg font-black text-slate-800">二、帳號與密碼安全</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>會員應妥善保管帳號及密碼，不得轉讓、出借或讓他人使用。</li>
              <li>因帳號遭他人盜用所產生的損失，除可證明非屬會員過失外，本網站不負賠償責任。</li>
            </ul>
          </section>
          <section className="space-y-4">
            <h3 className="text-lg font-black text-slate-800">三、會員權益與義務</h3>
            <p>會員可使用本網站提供的專屬功能與優惠活動。會員不得從事違法發布、散布惡意程式、妨礙他人使用或進行詐騙等行為。</p>
          </section>
          <section className="space-y-4">
            <h3 className="text-lg font-black text-slate-800">四、準據法與管轄</h3>
            <p>本使用條款之解釋與適用，均依中華民國法律處理。如發生爭議，雙方同意以台灣台北地方法院為第一審管轄法院。</p>
          </section>
        </div>
      </LegalModal>

      <LegalModal 
        isOpen={modalType === 'return'} 
        onClose={closeModals} 
        title="退換貨政策"
      >
        <div className="space-y-8">
          <p className="text-xs font-black text-[#A7C7E7] mb-2 tracking-widest uppercase">最後更新： 2025/9/23</p>
          <section className="space-y-4">
            <h3 className="text-lg font-black text-slate-800">一、鑑賞期說明</h3>
            <p>消費者於收到商品後享有 <strong>七天鑑賞（猶豫）期</strong>。請注意，鑑賞期並非試用期，若商品已拆封或使用，將不適用退貨。</p>
          </section>
          <section className="space-y-4">
            <h3 className="text-lg font-black text-slate-800">二、保健品特殊規定</h3>
            <p>因保健品屬於消耗性產品，退貨必須保持商品密封且未拆封。若商品一經拆封，恕不接受退貨。</p>
          </section>
          <section className="space-y-4">
            <h3 className="text-lg font-black text-slate-800">三、退款時效</h3>
            <p>銀禾生醫於收到退貨並完成檢查後，將於 7 個工作天內完成退款程序。實際入帳時間依發卡銀行處理為準。</p>
          </section>
        </div>
      </LegalModal>

      <LegalModal 
        isOpen={modalType === 'privacy'} 
        onClose={closeModals} 
        title="隱私權政策"
      >
        <div className="space-y-8">
          <p className="text-xs font-black text-[#A7C7E7] mb-2 tracking-widest uppercase">Version 1.0 | 最後更新：2025/12/8</p>
          <section className="space-y-4">
            <h3 className="text-lg font-black text-slate-800">一、資料收集</h3>
            <p>我們收集的個人資料包括：基本資料（姓名、電話、Email）、購買記錄、以及 IP 位址等技術資料。</p>
          </section>
          <section className="space-y-4">
            <h3 className="text-lg font-black text-slate-800">二、資料用途</h3>
            <p>主要用於提供會員服務、處理訂單、發送產品資訊、改善用戶體驗以及防範詐騙。</p>
          </section>
          <section className="space-y-4">
            <h3 className="text-lg font-black text-slate-800">三、資料保護</h3>
            <p>我們採用 SSL/TLS 加密技術與安全儲存設備，並嚴格限制員工存取權限，確保您的資料不被洩漏。</p>
          </section>
          <section className="space-y-4">
            <h3 className="text-lg font-black text-slate-800">四、您的權利</h3>
            <p>您有權隨時更新或刪除個人資料，或要求停止接收行銷訊息。如有疑問，請聯繫客服中心。</p>
          </section>
        </div>
      </LegalModal>
    </footer>
  );
};

export default Footer;
