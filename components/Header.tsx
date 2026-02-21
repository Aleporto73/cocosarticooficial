
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  user: any;
  onLogin: () => void;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, onOpenCart, user, onLogin, onLogout }) => {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] px-4 py-3 md:px-8 md:py-4 pointer-events-none">
      <div className="max-w-7xl mx-auto pointer-events-auto">
        <div className="bg-white/70 backdrop-blur-xl border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.12)] rounded-[2rem] px-5 md:px-8 h-16 md:h-20 flex justify-between items-center transition-all duration-500">
          
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl overflow-hidden border-2 border-orange-500/30 shadow-lg bg-white transform group-hover:rotate-3 transition-transform flex items-center justify-center p-1">
                <img 
                  src="https://files.catbox.moe/trwo5z.png" 
                  alt="COCOSARTICO Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="hidden sm:block text-lg md:text-xl font-black font-display text-orange-600 tracking-tighter uppercase minecraft-shadow">
                COCOSARTICO
              </span>
            </Link>
            
            <nav className="hidden lg:flex items-center gap-1">
              {[
                { label: 'Home', path: '/' },
                { label: 'Loja', path: '/loja' },
                { label: 'Termos', path: '/termos' }
              ].map((link) => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  className={`px-5 py-2 rounded-full text-xs font-black uppercase tracking-tighter transition-all duration-300 ${
                    location.pathname === link.path 
                      ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30 scale-105' 
                      : 'text-gray-700 hover:text-orange-600 hover:bg-white/50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            {user ? (
              <div className="flex items-center gap-2 bg-gray-50/50 p-1.5 pr-4 rounded-xl border border-gray-100 group relative">
                <img src={user.avatar} alt="Discord Avatar" className="w-8 h-8 rounded-lg shadow-sm" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-gray-950 truncate max-w-[80px] leading-none uppercase tracking-tighter">
                    {user.name}
                  </span>
                  <span className="text-[8px] font-bold text-[#5865F2] tracking-widest">{user.discriminator}</span>
                </div>
                <button 
                  onClick={onLogout}
                  className="absolute -bottom-10 right-0 bg-white shadow-xl rounded-lg px-3 py-1.5 text-[8px] font-black text-red-500 opacity-0 group-hover:opacity-100 transition-all border border-gray-100 uppercase"
                >
                  Sair
                </button>
              </div>
            ) : (
              <button 
                onClick={onLogin}
                className="hidden sm:flex items-center gap-2 bg-[#5865F2] text-white px-5 py-2.5 rounded-xl font-black text-[10px] uppercase hover:bg-[#4752c4] transition-all border border-white/20 shadow-lg shadow-[#5865F2]/20"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.086 2.157 2.419 0 1.334-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.086 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z"/></svg>
                Conectar
              </button>
            )}

            <button 
              onClick={onOpenCart}
              className="relative bg-orange-500 text-white h-11 w-11 md:h-13 md:w-13 rounded-xl shadow-xl shadow-orange-500/20 hover:bg-orange-600 transition-all hover:scale-105 active:scale-95 flex items-center justify-center border border-white/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-yellow-400 text-orange-950 text-[10px] font-black w-6 h-6 flex items-center justify-center rounded-full border-2 border-white shadow-md">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
