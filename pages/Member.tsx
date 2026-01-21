
import React, { useState } from 'react';
import { 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Area, 
  ComposedChart,
  ReferenceLine,
  Line
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
    setHeight('');
    setWeight('');
  };

  // Combine user data with reference lines
  const chartData = WHO_GROWTH_REFERENCE.map(ref => {
    const userData = DUMMY_GROWTH_DATA.find(d => d.age === ref.age);
    return {
      ...ref,
      userHeight: userData ? userData.height : null
    };
  });

  return (
    <div className="pt-24 md:pt-40 pb-32 bg-[#FDFBF7] min-h-screen">
      <div className="container-custom space-y-12">
        {/* 1. Welcome Header (歡迎區) */}
        <div className="bg-white rounded-[20px] p-8 md:p-12 shadow-sm border border-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="flex items-center space-x-8">
            <div className="w-20 h-20 rounded-full bg-[#A7C7E7]/10 flex items-center justify-center text-[#A7C7E7] overflow-hidden border border-[#A7C7E7]/20">
               <img src={`https://picsum.photos/seed/${CURRENT_USER.id}/200`} alt="avatar" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-black text-slate-800 tracking-tight">早安，{CURRENT_USER.name}</h1>
              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 bg-amber-50 rounded-full text-[10px] font-black text-amber-500 uppercase tracking-widest border border-amber-100">
                  {CURRENT_USER.levelName}
                </span>
                <span className="text-sm font-bold text-slate-400">累積點數：{CURRENT_USER.points} P</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button onClick={() => navigate('/login')} className="flex items-center space-x-2 text-slate-400 hover:text-red-400 transition-colors font-black text-xs uppercase tracking-widest">
              <LogOut size={16} />
              <span>登出</span>
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* 2. Growth Tracker (成長儀表板) */}
          <div className="lg:col-span-2 space-y-10">
            <div className="bg-white rounded-[20px] p-8 md:p-12 shadow-sm border border-slate-50 space-y-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="space-y-1">
                  <h3 className="text-2xl font-black text-slate-800 tracking-tight">{CURRENT_USER.childProfile?.nickname} 的成長曲線</h3>
                  <p className="text-sm text-slate-400 font-medium">基於 WHO 國際生長標準比對</p>
                </div>
                <div className="flex items-center gap-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                   <div className="flex items-center space-x-2"><div className="w-3 h-3 rounded-full bg-[#A7C7E7]"></div><span>目前身高</span></div>
                   <div className="flex items-center space-x-2"><div className="w-3 h-3 rounded-full bg-slate-100"></div><span>標準百分位</span></div>
                </div>
              </div>

              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="userGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#A7C7E7" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#A7C7E7" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#f8fafc" />
                    <XAxis 
                      dataKey="age" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{fill: '#94a3b8', fontSize: 11, fontWeight: '700'}} 
                      dy={10}
                      label={{ value: '年齡 (歲)', position: 'insideBottomRight', offset: -5, fontSize: 10, fill: '#cbd5e1' }}
                    />
                    <YAxis 
                      domain={['dataMin - 5', 'dataMax + 5']}
                      axisLine={false} 
                      tickLine={false} 
                      tick={{fill: '#94a3b8', fontSize: 11, fontWeight: '700'}}
                      label={{ value: '身高 (cm)', angle: -90, position: 'insideLeft', fontSize: 10, fill: '#cbd5e1' }}
                    />
                    <Tooltip 
                      contentStyle={{ borderRadius: '15px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', padding: '12px' }}
                    />
                    {/* WHO Standard Shaded Areas */}
                    <Area type="monotone" dataKey="h97" stroke="transparent" fill="#f1f5f9" fillOpacity={0.5} />
                    <Area type="monotone" dataKey="h50" stroke="#cbd5e1" strokeWidth={1} strokeDasharray="3 3" fill="transparent" />
                    <Area type="monotone" dataKey="h3" stroke="transparent" fill="#fff" fillOpacity={1} />
                    
                    {/* User Data Line */}
                    <Area 
                      type="monotone" 
                      dataKey="userHeight" 
                      stroke="#A7C7E7" 
                      strokeWidth={4} 
                      fill="url(#userGradient)"
                      dot={{ r: 5, fill: '#fff', stroke: '#A7C7E7', strokeWidth: 3 }}
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>

              {/* AI Insight (智能建議) */}
              <div className="bg-[#FDFBF7] p-6 rounded-[20px] border border-slate-100 flex flex-col sm:flex-row items-center gap-6 group hover:border-[#A7C7E7]/30 transition-all">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#A7C7E7] shadow-sm flex-shrink-0 group-hover:scale-110 transition-transform">
                  <AlertCircle size={28} />
                </div>
                <div className="flex-grow space-y-1">
                  <p className="text-sm font-black text-slate-800">成長週報：生長曲線觀察中</p>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    小羽目前的成長軌跡穩定在 75% 百分位。建議持續每日補充 <Link to="/product/growfly-30" className="text-[#A7C7E7] underline font-black">高飛星</Link> 搭配益生菌，確保生長原料吸收更精準。
                  </p>
                </div>
                <ChevronRight size={20} className="text-slate-300 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* 3. Orders & Subscription (交易與帳戶管理) */}
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="bg-white rounded-[20px] p-8 shadow-sm border border-slate-50 space-y-6">
                <h3 className="text-xl font-black text-slate-800 flex items-center space-x-3">
                  <Package size={20} className="text-[#A7C7E7]" />
                  <span>近期訂單</span>
                </h3>
                <div className="space-y-4">
                  {ORDER_HISTORY.map(order => (
                    <div key={order.id} className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-slate-100">
                      <div>
                        <p className="text-xs font-black text-slate-800">{order.id} {order.isSubscription && <span className="text-[8px] px-2 py-0.5 bg-[#A7C7E7]/20 text-[#A7C7E7] rounded-full ml-2">定期購</span>}</p>
                        <p className="text-[10px] text-slate-400 font-medium">{order.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-black text-slate-800">NT$ {order.total}</p>
                        <p className="text-[10px] text-emerald-500 font-black">已完成</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-slate-800 transition-colors">查看所有歷史訂單</button>
              </div>

              <div className="bg-slate-900 rounded-[20px] p-8 text-white space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl" />
                <h3 className="text-xl font-black flex items-center space-x-3 relative z-10">
                  <RefreshCcw size={20} className="text-[#A7C7E7]" />
                  <span>定期購管理</span>
                </h3>
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl space-y-4 relative z-10">
                   <div>
                     <p className="text-[10px] font-black text-white/50 uppercase tracking-widest">下期配送日</p>
                     <p className="text-xl font-black">2025 . 02 . 15</p>
                   </div>
                   <div className="pt-4 border-t border-white/10 space-y-3">
                      <button className="w-full py-3 bg-white text-slate-900 rounded-full font-black text-xs hover:bg-[#A7C7E7] transition-all">暫停一期配送</button>
                      <button className="w-full py-3 text-[10px] font-black text-white/50 uppercase tracking-widest hover:text-white transition-colors">更改收件資訊</button>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Area */}
          <div className="space-y-10">
            {/* Quick Input (快速記錄) */}
            <div className="bg-white rounded-[20px] p-8 shadow-sm border border-slate-50 space-y-8">
              <h3 className="text-xl font-black text-slate-800">快速記錄成長</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">目前身高 (CM)</label>
                  <div className="relative">
                    <Ruler className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                    <input 
                      type="number" 
                      step="0.1"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      placeholder="輸入身高" 
                      className="w-full bg-slate-50 px-14 py-4 rounded-full outline-none focus:ring-4 focus:ring-[#A7C7E7]/10 transition-all font-black text-lg"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">目前體重 (KG)</label>
                  <div className="relative">
                    <Weight className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                    <input 
                      type="number" 
                      step="0.1"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      placeholder="輸入體重" 
                      className="w-full bg-slate-50 px-14 py-4 rounded-full outline-none focus:ring-4 focus:ring-[#A7C7E7]/10 transition-all font-black text-lg"
                    />
                  </div>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-slate-800 text-white py-4 rounded-full font-black text-base hover:bg-slate-700 transition-all shadow-xl"
                >
                  + 紀錄今天數據
                </button>
              </form>
            </div>

            {/* Profile Settings (檔案設定) */}
            <div className="bg-white rounded-[20px] p-8 shadow-sm border border-slate-50 space-y-8">
               <h3 className="text-xl font-black text-slate-800">成長檔案</h3>
               <div className="space-y-4">
                  {[
                    /* Missing User icon was added to imports to fix this line */
                    { icon: <User size={18} />, label: '孩子檔案設定', path: '#' },
                    { icon: <Star size={18} />, label: '我的優惠券', path: '#' },
                    { icon: <Settings size={18} />, label: '帳號資訊修改', path: '#' },
                    { icon: <HelpCircle size={18} />, label: '聯絡專業客服', path: '#' }
                  ].map((item, i) => (
                    <button key={i} className="w-full flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 transition-all group text-left">
                       <div className="flex items-center space-x-4">
                          <div className="text-slate-300 group-hover:text-[#A7C7E7] transition-colors">{item.icon}</div>
                          <span className="text-sm font-bold text-slate-600 group-hover:text-slate-800">{item.label}</span>
                       </div>
                       <ChevronRight size={16} className="text-slate-200 group-hover:text-slate-400 group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Toast */}
      {showToast && (
        <div className="fixed bottom-12 left-1/2 -translate-x-1/2 bg-slate-800 text-white px-10 py-5 rounded-full shadow-2xl flex items-center space-x-4 z-50 animate-in fade-in slide-in-from-bottom-8 duration-500">
          <CheckCircle2 size={24} className="text-[#A7C7E7]" />
          <span className="font-black text-lg">紀錄成功！曲線已更新。</span>
        </div>
      )}
    </div>
  );
};

export default Member;
