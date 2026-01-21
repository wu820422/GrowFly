
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu, X } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onCartClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '全系列產品 Shop', path: '/shop' },
    { name: '科學實證 Science', path: '/science' },
    { name: '成長專欄 Journal', path: '/journal' },
    { name: '關於我們 About', path: '/about' },
  ];

  const isHome = location.pathname === '/';
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  // 品牌 Logo 組件
  const Logo = ({ className = "" }: { className?: string }) => (
    <div className={`flex items-center space-x-3 ${className}`}>
      <img 
        src="https://drive.google.com/uc?id=1cJGWr5-GBdsO0MxpWB01ZseaohfK-gEB" 
        alt="GrowFly Logo" 
        className="w-10 h-10 md:w-12 md:h-12 object-contain"
      />
      <span className="text-2xl font-[900] tracking-tighter">GrowFly</span>
    </div>
  );

  if (isAuthPage) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 h-[80px] bg-transparent flex items-center">
        <div className="container-custom flex justify-center md:justify-start">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <Logo className="text-slate-800" />
          </Link>
        </div>
      </header>
    );
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'h-[60px] md:h-[70px] glass-nav shadow-sm border-b border-slate-100/50' : 'h-[60px] md:h-[100px] bg-transparent'
    }`}>
      <div className="container-custom h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="hover:opacity-80 transition-opacity">
          <Logo className={`transition-colors duration-300 ${
            isScrolled || !isHome ? 'text-slate-800' : 'text-slate-800 md:text-white'
          }`} />
        </Link>

        {/* Center Menu (Desktop) */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`text-[11px] font-black tracking-widest uppercase transition-colors hover:text-[#A7C7E7] ${
                isScrolled || !isHome ? 'text-slate-600' : 'text-slate-600 md:text-white/90'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Menu */}
        <div className={`flex items-center space-x-6 ${isScrolled || !isHome ? 'text-slate-600' : 'text-slate-600 md:text-white'}`}>
          <Link to="/login" className="hover:text-[#A7C7E7] transition-colors hidden sm:block">
            <User size={20} strokeWidth={2.5} />
          </Link>
          <button className="hover:text-[#A7C7E7] transition-colors">
            <Search size={20} strokeWidth={2.5} />
          </button>
          <button onClick={onCartClick} className="relative hover:text-[#A7C7E7] transition-colors">
            <ShoppingCart size={20} strokeWidth={2.5} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-400 text-white text-[9px] w-4.5 h-4.5 rounded-full flex items-center justify-center font-black shadow-sm">
                {cartCount}
              </span>
            )}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-slate-100 p-8 flex flex-col space-y-6 md:hidden animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-black text-slate-800 border-b border-slate-50 pb-6"
            >
              {link.name}
            </Link>
          ))}
          <Link to="/login" className="flex items-center space-x-4 text-slate-800 py-4 font-black text-lg" onClick={() => setIsMenuOpen(false)}>
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
              <User size={24} />
            </div>
            <span>登入 / 我的成長檔案</span>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
