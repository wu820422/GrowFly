
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Phone, Lock, Smartphone, Check } from 'lucide-react';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = React.useState(0);

  const startCountdown = () => {
    setCountdown(60);
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) { clearInterval(timer); return 0; }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#FDFBF7]">
      {/* Left Area (Desktop Only) */}
      <div className="hidden md:flex md:w-1/2 bg-[#A7C7E7]/10 items-center justify-center p-20">
        <div className="max-w-md space-y-12">
           <div className="inline-block px-6 py-2 bg-white rounded-full border border-slate-100 shadow-sm">
            <span className="text-xs font-black text-[#A7C7E7] tracking-[0.2em] uppercase">Join the Club</span>
          </div>
          <h2 className="text-5xl font-black text-slate-800 leading-tight">加入成長計畫，<br />為未來打底。</h2>
          <ul className="space-y-6">
            {[
              '客製化兒童成長曲線圖表',
              '專業營養團隊一對一諮詢',
              '定期配送專屬 85 折優惠',
              '累積點數換取成長禮遇'
            ].map((text, i) => (
              <li key={i} className="flex items-center space-x-4">
                <div className="w-6 h-6 rounded-full bg-[#A7C7E7] text-white flex items-center justify-center flex-shrink-0">
                  <Check size={14} strokeWidth={3} />
                </div>
                <span className="text-slate-600 font-bold">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right: Form Area */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-20 pt-32">
        <div className="w-full max-w-md space-y-10 animate-in fade-in slide-in-from-right-8 duration-700">
          <div className="text-center md:text-left space-y-2">
            <h1 className="text-4xl font-black text-slate-800 tracking-tight">加入會員</h1>
            <p className="text-slate-500 font-medium">註冊即享專屬成長管理與健康建議</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); navigate('/member'); }}>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">手機號碼</label>
              <div className="relative">
                <Phone className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                <input 
                  type="tel" 
                  placeholder="請輸入您的手機號碼" 
                  className="w-full bg-white px-14 py-4 rounded-[20px] border border-slate-100 outline-none focus:ring-4 focus:ring-[#A7C7E7]/10 transition-all font-medium text-slate-700"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">簡訊驗證碼</label>
              <div className="flex gap-4">
                <div className="relative flex-grow">
                  <Smartphone className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                  <input 
                    type="text" 
                    placeholder="輸入 6 位數代碼" 
                    className="w-full bg-white px-14 py-4 rounded-[20px] border border-slate-100 outline-none focus:ring-4 focus:ring-[#A7C7E7]/10 transition-all font-medium text-slate-700"
                  />
                </div>
                <button 
                  type="button"
                  onClick={startCountdown}
                  disabled={countdown > 0}
                  className={`px-6 rounded-[20px] font-black text-xs transition-all whitespace-nowrap shadow-sm border ${
                    countdown > 0 
                    ? 'bg-slate-100 text-slate-400 border-slate-100' 
                    : 'bg-slate-800 text-white border-slate-800 hover:bg-slate-700'
                  }`}
                >
                  {countdown > 0 ? `倒數 ${countdown}s` : '發送驗證碼'}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">設定密碼</label>
              <div className="relative">
                <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                <input 
                  type="password" 
                  placeholder="請輸入密碼" 
                  className="w-full bg-white px-14 py-4 rounded-[20px] border border-slate-100 outline-none focus:ring-4 focus:ring-[#A7C7E7]/10 transition-all font-medium text-slate-700"
                />
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <label className="flex items-start space-x-3 cursor-pointer group">
                <input type="checkbox" className="mt-1 rounded-sm border-slate-200 text-[#A7C7E7] focus:ring-[#A7C7E7]" />
                <span className="text-xs text-slate-500 font-medium leading-relaxed group-hover:text-slate-800 transition-colors">
                  我願意接受 GrowFly 相關成長資訊及最新推廣業務。
                </span>
              </label>
              <label className="flex items-start space-x-3 cursor-pointer group">
                <input type="checkbox" className="mt-1 rounded-sm border-slate-200 text-[#A7C7E7] focus:ring-[#A7C7E7]" required />
                <span className="text-xs text-slate-500 font-medium leading-relaxed group-hover:text-slate-800 transition-colors">
                  加入會員即表示同意我們的 <Link to="/terms" className="text-[#A7C7E7] underline">會員條款</Link> 與 <Link to="/privacy" className="text-[#A7C7E7] underline">隱私權政策</Link>。
                </span>
              </label>
            </div>

            <button 
              type="submit"
              className="w-full bg-slate-800 text-white py-4 rounded-[20px] font-black text-lg hover:bg-slate-700 transition-all shadow-xl shadow-slate-200"
            >
              完成註冊
            </button>
          </form>

          <p className="text-center text-sm text-slate-500 font-medium">
            已經擁有帳號了？ <Link to="/login" className="text-[#A7C7E7] font-black hover:underline">登入</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
