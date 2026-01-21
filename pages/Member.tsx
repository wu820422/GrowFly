
import React, { useState } from 'react';
import { 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Area, 
  ComposedChart
} from 'recharts';
import { 
  Plus, Ruler, Weight, Calendar, CheckCircle2, 
  Droplets, Package, RefreshCcw, LogOut, ChevronRight, 
  Star, Settings, HelpCircle, AlertCircle, User
} from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { DUMMY_GROWTH_DATA, CURRENT_USER, WHO_GROWTH_REFERENCE, ORDER_HISTORY } from '../constants';

const Member: React.FC = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();
  const lineLink = "https://line.me/R/ti/p/@growway";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
    setHeight('');
    setWeight('');
  };

  const chartData = WHO_GROWTH_REFERENCE.map(ref => {
    const userData = DUMMY_GROWTH_DATA.find(d => d.age === ref.age);
    return {
      ...ref,
      userHeight: userData ? userData.height : null
    };
  });

  return (
    <div className="pt-24 md:pt-40 pb-32 bg-[#FDFBF7] min-h-screen">
      <div className="container-custom space-y-8 md:space-y-12">
        
        {/* 1. 歡迎區 (Welcome Header) */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-slate-50 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center gap-8 relative z-10">
            {/* 頭像區域 */}
            <div className="flex-shrink-0 mx-auto sm:mx-0">
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-[#A7C7E7]/10 flex items-center justify-center text-[#A7C7E7] overflow-hidden border-4 border-white shadow-lg">
                <img src={`https://picsum.photos/seed/${CURRENT_USER.id}/200`} alt="avatar" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* 文字區域 */}
            <div className="flex-grow space-y-4 text-center sm:text-left min-w-0">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-800 tracking-tight">
                早安，{CURRENT_USER.name}
              </h1>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
                <span className="inline-flex items-center px-4 py-1.5 bg-amber-50 rounded-full text-[10px] font-[900] text-amber-500 uppercase tracking-[0.2em] border border-amber-100 shadow-sm">
                  {CURRENT_USER.levelName}
                </span>
                <span className="text-xs md:text-sm font-bold text-slate-400">
                  累積點數：<span className="text-slate-600 font-black">{CURRENT_USER.points.toLocaleString()} P</span>
                </span>
              </div>
            </div>

            {/* 登出按鈕 */}
            <div className="sm:absolute sm:bottom-0 sm:right-0 pt-6 sm:pt-0 flex justify-center sm:block">
              <button 
                onClick={() => navigate('/login')} 
                className="flex items-center space-x-2 text-slate-300 hover:text-red-400 transition-colors font-black text-[10px] uppercase tracking-[0.3em] group"
              >
                <LogOut size={14} className="group-hover:-translate-x-1 transition-transform" />
                <span>登出系統</span>
              </button>
            </div>
          </div>
          {/* 背景裝飾 */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#A7C7E7]/5 rounded-full blur-3xl pointer-events-none" />
        </div>

        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* 2. 成長曲線區 (Main Tracker) */}
          <div className="lg:col-span-8 space-y-8 md:space-y-12">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-slate-50 space-y-12">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8">
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight">
                    {CURRENT_USER.childProfile?.nickname} 的成長曲線
                  </h3>
                  <p className="text-xs md:text-sm text-slate-400 font-medium tracking-wide">基於 WHO 國際生長標準 3% ~ 97% 百分位比對</p>
                </div>
                <div className="flex items-center gap-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                   <div className="flex items-center space-x-2">
                     <div className="w-3 h-3 rounded-full bg-[#A7C7E7]" />
                     <span>目前身高</span>
                   </div>
                   <div className="flex items-center space-x-2">
                     <div className="w-3 h-3 rounded-full bg-slate-100" />
                     <span>標準百分位</span>
                   </div>
                </div>
              </div>

              {/* 圖表容器 */}
              <div className="h-[340px] md:h-[460px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="userGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#A7C7E7" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#A7C7E7" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="8 8" vertical={false} stroke="#f1f5f9" />
                    <XAxis 
                      dataKey="age" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{fill: '#94a3b8', fontSize: 11, fontWeight: '900'}} 
                      dy={15}
                      label={{ value: '年齡 (Age)', position: 'insideBottomRight', offset: -5, fontSize: 10, fontWeight: 900, fill: '#cbd5e1' }}
                    />
                    <YAxis 
                      domain={['dataMin - 5', 'dataMax + 5']}
                      axisLine={false} 
                      tickLine={false} 
                      tick={{fill: '#94a3b8', fontSize: 11, fontWeight: '900'}}
                      dx={-5}
                    />
                    <Tooltip 
                      cursor={{ stroke: '#f1f5f9', strokeWidth: 2 }}
                      contentStyle={{ 
                        borderRadius: '24px', 
                        border: 'none', 
                        boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.15)', 
                        padding: '20px', 
                        fontSize: '13px',
                        fontWeight: '900',
                        color: '#1e293b'
                      }}
                    />
                    <Area type="monotone" dataKey="h97" stroke="transparent" fill="#f8fafc" fillOpacity={0.6} />
                    <Area type="monotone" dataKey="h50" stroke="#e2e8f0" strokeWidth={1} strokeDasharray="6 6" fill="transparent" />
                    <Area type="monotone" dataKey="h3" stroke="transparent" fill="#fff" fillOpacity={1} />
                    <Area 
                      type="monotone" 
                      dataKey="userHeight" 
                      stroke="#A7C7E7" 
                      strokeWidth={5} 
                      fill="url(#userGradient)"
                      dot={{ r: 7, fill: '#fff', stroke: '#A7C7E7', strokeWidth: 4 }}
                      activeDot={{ r: 10, strokeWidth: 0, fill: '#A7C7E7' }}
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>

              {/* AI 建議卡片 */}
              <div className="bg-[#FDFBF7] p-8 md:p-10 rounded-[2.5rem] border border-slate-100 flex flex-col sm:flex-row items-center gap-8 group hover:border-[#A7C7E7]/30 transition-all shadow-sm">
                <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-[#A7C7E7] shadow-sm flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <AlertCircle size={32} />
                </div>
                <div className="flex-grow space-y-3 text-center sm:text-left">
                  <p className="text-lg font-black text-slate-800">成長週報：生長曲線觀察中</p>
                  <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed">
                    小羽目前的成長軌跡穩定在 <span className="text-[#A7C7E7] font-[900] underline decoration-2 underline-offset-4">75%</span> 百分位。建議持續每日補充 <Link to="/product/growfly-30" className="text-slate-800 underline font-[900] hover:text-[#A7C7E7] transition-colors">高飛星</Link>，並於晚間 10 點前就寢以掌握黃金分泌期。
                  </p>
                </div>
                <ChevronRight size={28} className="hidden sm:block text-slate-200 group-hover:translate-x-2 group-hover:text-slate-400 transition-all" />
              </div>
            </div>

            {/* 3. 訂單與定期購區 */}
            <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
              {/* 訂單歷史 */}
              <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-slate-50 space-y-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-black text-slate-800 flex items-center space-x-4">
                    <Package size={24} className="text-[#A7C7E7]" />
                    <span>近期訂單</span>
                  </h3>
                </div>
                <div className="space-y-5">
                  {ORDER_HISTORY.map(order => (
                    <div key={order.id} className="flex justify-between items-center p-6 bg-slate-50 rounded-[2rem] hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100 group">
                      <div className="min-w-0">
                        <p className="text-sm font-black text-slate-800 flex items-center gap-3">
                          {order.id} 
                          {order.isSubscription && (
                            <span className="text-[9px] px-2.5 py-1 bg-[#A7C7E7]/20 text-[#A7C7E7] rounded-full font-[900] uppercase tracking-wider">定期購</span>
                          )}
                        </p>
                        <p className="text-[11px] text-slate-400 font-[900] mt-1.5 uppercase tracking-[0.1em]">{order.date}</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="text-base font-black text-slate-800">NT$ {order.total.toLocaleString()}</p>
                        <p className="text-[11px] text-emerald-500 font-black mt-1">已送達</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full pt-4 text-[11px] font-[900] text-slate-300 uppercase tracking-[0.3em] hover:text-slate-800 transition-colors">查看更多歷史紀錄 →</button>
              </div>

              {/* 定期購狀態 */}
              <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-10 text-white space-y-10 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none" />
                <h3 className="text-xl font-black flex items-center space-x-4 relative z-10">
                  <RefreshCcw size={24} className="text-[#A7C7E7]" />
                  <span>定期購管理</span>
                </h3>
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-[2rem] space-y-8 relative z-10 border border-white/5">
                   <div className="space-y-2 text-center sm:text-left">
                     <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">下期自動配送</p>
                     <p className="text-3xl font-black tracking-tighter">2025 . 02 . 15</p>
                   </div>
                   <div className="pt-8 border-t border-white/10 space-y-4">
                      <button className="w-full py-5 bg-white text-slate-900 rounded-full font-black text-sm hover:bg-[#A7C7E7] transition-all shadow-xl active:scale-95">暫停本期配送</button>
                      <button className="w-full py-2 text-[11px] font-[900] text-white/30 uppercase tracking-[0.2em] hover:text-white transition-colors">修改配送地址與週期</button>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4. 側邊欄區 (Sidebar) */}
          <div className="lg:col-span-4 space-y-8 md:space-y-12">
            
            {/* 快速記錄 */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-slate-50 space-y-10">
              <h3 className="text-2xl font-black text-slate-800 tracking-tight">快速記錄成長</h3>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-4">
                  <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em] ml-2">身高 HEIGHT (CM)</label>
                  <div className="relative">
                    <Ruler className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-200" size={22} />
                    <input 
                      type="number" 
                      step="0.1"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      placeholder="121.5" 
                      className="w-full bg-slate-50 px-16 py-6 rounded-[2rem] outline-none focus:ring-4 focus:ring-[#A7C7E7]/10 border border-transparent focus:border-[#A7C7E7]/30 transition-all font-black text-xl text-slate-800 placeholder:text-slate-200"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em] ml-2">體重 WEIGHT (KG)</label>
                  <div className="relative">
                    <Weight className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={22} />
                    <input 
                      type="number" 
                      step="0.1"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      placeholder="23.0" 
                      className="w-full bg-slate-50 px-16 py-6 rounded-[2rem] outline-none focus:ring-4 focus:ring-[#A7C7E7]/10 border border-transparent focus:border-[#A7C7E7]/30 transition-all font-black text-xl text-slate-800 placeholder:text-slate-200"
                    />
                  </div>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-slate-800 text-white py-6 rounded-full font-black text-lg hover:bg-slate-700 transition-all shadow-2xl shadow-slate-200 active:scale-95"
                >
                  確認紀錄數據
                </button>
              </form>
            </div>

            {/* 檔案選單 */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-slate-50 space-y-10">
               <h3 className="text-2xl font-black text-slate-800 tracking-tight">檔案與設定</h3>
               <div className="space-y-4">
                  <button className="w-full flex items-center justify-between p-6 rounded-[2rem] hover:bg-slate-50 transition-all group border border-transparent hover:border-slate-100">
                     <div className="flex items-center space-x-5 min-w-0">
                        <div className="text-slate-200 group-hover:text-[#A7C7E7] transition-colors flex-shrink-0"><User size={22} /></div>
                        <span className="text-sm md:text-base font-black text-slate-600 group-hover:text-slate-800 truncate">孩子成長檔案設定</span>
                     </div>
                     <ChevronRight size={20} className="text-slate-100 group-hover:text-slate-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </button>
                  <button className="w-full flex items-center justify-between p-6 rounded-[2rem] hover:bg-slate-50 transition-all group border border-transparent hover:border-slate-100">
                     <div className="flex items-center space-x-5 min-w-0">
                        <div className="text-slate-200 group-hover:text-[#A7C7E7] transition-colors flex-shrink-0"><Star size={22} /></div>
                        <span className="text-sm md:text-base font-black text-slate-600 group-hover:text-slate-800 truncate">專屬優惠券專區</span>
                     </div>
                     <ChevronRight size={20} className="text-slate-100 group-hover:text-slate-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </button>
                  <button className="w-full flex items-center justify-between p-6 rounded-[2rem] hover:bg-slate-50 transition-all group border border-transparent hover:border-slate-100">
                     <div className="flex items-center space-x-5 min-w-0">
                        <div className="text-slate-200 group-hover:text-[#A7C7E7] transition-colors flex-shrink-0"><Settings size={22} /></div>
                        <span className="text-sm md:text-base font-black text-slate-600 group-hover:text-slate-800 truncate">個人帳號與資安</span>
                     </div>
                     <ChevronRight size={20} className="text-slate-100 group-hover:text-slate-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </button>
                  <a 
                    href={lineLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between p-6 rounded-[2rem] hover:bg-slate-50 transition-all group border border-transparent hover:border-slate-100"
                  >
                     <div className="flex items-center space-x-5 min-w-0">
                        <div className="text-slate-200 group-hover:text-[#06C755] transition-colors flex-shrink-0"><HelpCircle size={22} /></div>
                        <span className="text-sm md:text-base font-black text-slate-600 group-hover:text-slate-800 truncate">聯繫成長顧問</span>
                     </div>
                     <ChevronRight size={20} className="text-slate-100 group-hover:text-slate-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </a>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* 紀錄成功提示 (Toast) */}
      {showToast && (
        <div className="fixed bottom-12 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-12 py-6 rounded-full shadow-2xl flex items-center space-x-5 z-[100] animate-in fade-in slide-in-from-bottom-12 duration-500">
          <div className="w-10 h-10 rounded-full bg-[#A7C7E7] flex items-center justify-center text-slate-900">
            <CheckCircle2 size={24} strokeWidth={3} />
          </div>
          <span className="font-black text-lg">數據已成功儲存！</span>
        </div>
      )}
    </div>
  );
};

export default Member;
