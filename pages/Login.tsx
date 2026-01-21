
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Phone, Lock, Eye, EyeOff, MessageCircle } from 'lucide-react';

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();

  const Logo = ({ className = "" }: { className?: string }) => (
    <div className={`flex items-center space-x-3 ${className}`}>
      <img 
        src="https://drive.google.com/uc?id=1cJGWr5-GBdsO0MxpWB01ZseaohfK-gEB" 
        alt="GrowFly Logo" 
        className="w-12 h-12 object-contain"
      />
      <span className="text-2xl font-[900] tracking-tighter">GrowFly</span>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#FDFBF7]">
      {/* Header Logo for Mobile/Auth Page */}
      <header className="fixed top-0 left-0 right-0 z-50 h-[80px] bg-transparent flex items-center md:hidden">
        <div className="container-custom flex justify-center">
          <Link to="/">
            <Logo className="text-slate-800" />
          </Link>
        </div>
      </header>

      {/* Left: Brand Visual (Desktop Only) */}
      <div className="hidden md:block md:w-1/2 relative overflow-hidden">
        <div className="absolute top-10 left-10 z-20">
          <Link to="/">
            <Logo className="text-white" />
          </Link>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1484665754804-74b091211472?auto=format&fit=crop&q=80&w=1200" 
          alt="GrowFly Kids" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/20" />
        <div className="absolute bottom-20 left-20 text-white space-y-4 max-w-md">
           <h2 className="text-5xl font-black leading-tight tracking-tight">科學守護，<br />見證成長的每一刻。</h2>
           <p className="text-xl font-medium text-white/80">加入 GrowFly，開啟專屬您孩子的健康紀錄系統。</p>
        </div>
      </div>

      {/* Right: Form Area */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-20 pt-32">
        <div className="w-full max-w-md space-y-10 animate-in fade-in slide-in-from-right-8 duration-700">
          <div className="text-center md:text-left space-y-2">
            <h1 className="text-4xl font-black text-slate-800 tracking-tight">歡迎回來</h1>
            <p className="text-slate-500 font-medium">登入以查看您的成長紀錄與專屬建議</p>
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
              <div className="flex justify-between items-center px-4">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">登入密碼</label>
                <button type="button" className="text-[10px] font-black text-[#A7C7E7] hover:underline uppercase tracking-widest">忘記密碼？</button>
              </div>
              <div className="relative">
                <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                <input 
                  type={showPassword ? "text" : "password"}
                  placeholder="請輸入密碼" 
                  className="w-full bg-white px-14 py-4 rounded-[20px] border border-slate-100 outline-none focus:ring-4 focus:ring-[#A7C7E7]/10 transition-all font-medium text-slate-700"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-slate-800 text-white py-4 rounded-[20px] font-black text-lg hover:bg-slate-700 transition-all shadow-xl shadow-slate-200"
            >
              立即登入
            </button>
          </form>

          <div className="space-y-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
              <div className="relative flex justify-center text-[10px] uppercase font-black tracking-widest text-slate-300">
                <span className="bg-[#FDFBF7] px-4">或使用其他方式</span>
              </div>
            </div>

            <button className="w-full flex items-center justify-center space-x-3 py-4 rounded-[20px] border border-slate-100 bg-white hover:bg-slate-50 transition-all font-bold text-slate-600 shadow-sm">
              <MessageCircle className="text-emerald-500 fill-emerald-500" size={20} />
              <span>使用 LINE 帳號登入</span>
            </button>
          </div>

          <p className="text-center text-sm text-slate-500 font-medium">
            還沒有帳號嗎？ <Link to="/register" className="text-[#A7C7E7] font-black hover:underline">免費註冊</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
