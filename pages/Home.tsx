
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

interface HomeProps {
  onAddToCart: (p: Product) => void;
  user: any;
  onLogin: () => void;
}

const Home: React.FC<HomeProps> = ({ onAddToCart, user, onLogin }) => {
  // Seleciona os 4 primeiros VIPs (que já estão em ordem crescente no constants.tsx)
  const featuredProducts = PRODUCTS.filter(p => p.category === 'vip').slice(0, 4);

  const discordInvite = "https://discord.com/invite/5dupQ8PkD";
  const discordServerId = "1380372483353477241"; 

  const [copied, setCopied] = useState(false);

  const copyIp = () => {
    navigator.clipboard.writeText('cocosarticosmp.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="overflow-x-hidden bg-white">
      {/* Hero Section - Polished & Sharp */}
      <section className="relative min-h-[85vh] flex items-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://files.catbox.moe/cax40b.png" 
            alt="Minecraft World"
            className="w-full h-full object-cover brightness-[0.85] saturate-[1.6] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-orange-600 text-white px-4 py-1.5 rounded-full font-black text-[10px] uppercase tracking-widest mb-6 border border-white/20 shadow-xl">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
              </span>
              SERVIDOR ATIVO E ONLINE
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-[72px] font-black font-display text-white tracking-tighter leading-[0.9] uppercase mb-6 minecraft-shadow">
              O MUNDO QUE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">
                VOCÊ MERECE
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 leading-tight font-bold max-w-xl mb-10 uppercase italic tracking-tight drop-shadow-xl">
              Explore construções épicas, economia real e a melhor comunidade do Brasil em cores vivas.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/loja" 
                className="bg-orange-500 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-orange-600 transition-all shadow-xl hover:-translate-y-1 active:scale-95 flex items-center gap-3 uppercase tracking-tighter"
              >
                EXPLORAR LOJA 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <button 
                onClick={copyIp}
                className="bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-white/20 transition-all flex items-center gap-3 uppercase tracking-tighter shadow-2xl active:scale-95"
              >
                {copied ? 'IP COPIADO!' : 'IP: cocosarticosmp.com'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Discovery Section - Balanced 3/4 and 1/4 with Discord Widget Logic */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black font-display text-gray-950 uppercase tracking-tighter leading-none mb-4">
              PREPARE-SE PARA EXPLORAR <br/>
              <span className="text-orange-500 underline decoration-4 underline-offset-8">UM MUNDO DIFERENTE DE TUDO</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl font-black uppercase italic tracking-tight opacity-70">
              CADA CANTO É UMA NOVA AVENTURA.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
            {/* Images Column (3/4) */}
            <div className="lg:w-[70%] w-full relative">
              <div className="relative group overflow-visible transition-all duration-700">
                <img 
                  src="https://files.catbox.moe/9ixj8z.png" 
                  alt="Recorte de Fotos do Mundo" 
                  className="w-full h-auto brightness-[1] saturate-[1.6] contrast-[1.1] transition-all duration-700 group-hover:scale-105 drop-shadow-[0_15px_45px_rgba(0,0,0,0.12)] rounded-[3rem]"
                />
              </div>
            </div>

            {/* Discord Column (1/4) */}
            <div className="lg:w-[30%] w-full flex flex-col items-center">
               {/* DESKTOP VIEW: Official Widget 300x420 */}
               <div className="hidden lg:flex flex-col items-center">
                 <p className="text-gray-400 font-black text-[10px] uppercase tracking-[0.2em] mb-4">💬 Comunidade do Servidor</p>
                 <div className="w-[300px] h-[420px] bg-[#2f3136] rounded-[2rem] overflow-hidden shadow-2xl border border-gray-800 mb-6">
                    <iframe 
                      src={`https://discord.com/widget?id=${discordServerId}&theme=dark`} 
                      width="300" 
                      height="420" 
                      allowtransparency="true" 
                      frameBorder="0" 
                      sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                      className="w-full h-full"
                    ></iframe>
                 </div>
                 <a 
                    href={discordInvite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[300px] bg-[#5865F2] text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest text-center hover:bg-[#4752c4] transition shadow-lg active:scale-95"
                  >
                    Entrar no Discord
                  </a>
               </div>

               {/* MOBILE VIEW: Only Button and Text */}
               <div className="lg:hidden w-full bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
                  <p className="text-gray-950 font-black text-sm uppercase tracking-tighter text-center mb-5">💬 Comunidade ativa no Discord</p>
                  <a 
                    href={discordInvite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-[#5865F2] text-white py-5 rounded-2xl font-black text-sm uppercase tracking-widest text-center hover:bg-[#4752c4] transition shadow-xl active:scale-95"
                  >
                    Entrar no Discord
                  </a>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products - Refined Grid */}
      <section className="py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <span className="text-orange-600 font-black text-[10px] uppercase tracking-widest mb-3 block">UPGRADES EXCLUSIVOS</span>
              <h2 className="text-4xl md:text-5xl font-black font-display text-gray-950 uppercase tracking-tighter leading-none">
                ITENS <span className="text-orange-500 underline decoration-4 underline-offset-8">ÉPICOS</span>
              </h2>
            </div>
            <Link to="/loja" className="bg-gray-950 text-white px-8 py-3 rounded-xl font-black uppercase tracking-widest text-[10px] shadow-lg hover:bg-orange-500 transition-all">
              VER CATÁLOGO COMPLETO →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <div 
                key={product.id} 
                className="group bg-white rounded-[2.5rem] p-4 shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="aspect-square rounded-[2rem] overflow-hidden bg-gray-50 relative mb-6">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-contain p-8 group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute top-4 left-4">
                     <span className="bg-orange-500 text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                       NEW
                     </span>
                  </div>
                </div>
                <div className="px-4 pb-4 text-center lg:text-left">
                  <h3 className="text-xl font-black font-display text-gray-950 uppercase tracking-tighter mb-2 group-hover:text-orange-500 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 text-[10px] font-bold mb-6 line-clamp-1 uppercase opacity-60">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                    <div className="flex flex-col">
                      <span className="text-2xl font-black tracking-tighter font-display text-gray-950">
                        R$ {product.price.toFixed(2).replace('.', ',')}
                      </span>
                      <span className="text-[8px] font-black text-orange-500 uppercase tracking-tighter">
                        VIP válido por 30 dias
                      </span>
                    </div>
                    <button 
                      onClick={() => onAddToCart(product)}
                      className="bg-orange-500 text-white h-11 w-11 rounded-full shadow-lg hover:bg-orange-600 transition-all flex items-center justify-center active:scale-90"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discord CTA Banner - Monument */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#5865F2] rounded-[4rem] p-10 md:p-20 relative overflow-hidden shadow-2xl border-4 border-white group text-center lg:text-left">
            <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="flex-1">
                <div className="inline-block bg-white/20 backdrop-blur-xl text-white px-6 py-2 rounded-full font-black text-[10px] uppercase tracking-[0.3em] mb-10 border border-white/10">
                  COMUNIDADE OFICIAL
                </div>
                <h2 className="text-5xl md:text-7xl font-black font-display text-white uppercase tracking-tighter leading-[0.8] mb-8">
                  ENTRE NO <br />
                  <span className="text-yellow-300">DISCORD</span>
                </h2>
                <p className="text-white text-xl font-bold mb-12 max-w-lg leading-tight uppercase italic opacity-90 mx-auto lg:mx-0">
                  Junte-se a nós para sorteios, suporte instantâneo e amizades reais.
                </p>
                <a 
                  href={discordInvite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-[#5865F2] px-16 py-6 rounded-2xl font-black text-2xl hover:bg-gray-50 transition-all shadow-xl uppercase tracking-tighter hover:-translate-y-1 active:scale-95"
                >
                  ACESSAR AGORA
                </a>
              </div>
              
              <div className="hidden lg:flex items-center justify-center relative w-72 h-72">
                <div className="absolute inset-0 bg-white/10 rounded-full animate-pulse scale-125" />
                <img 
                  src="https://files.catbox.moe/trwo5z.png" 
                  alt="Mascote" 
                  className="w-56 h-56 object-contain floating relative z-20 group-hover:scale-110 transition duration-500 filter drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
