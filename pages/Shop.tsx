
import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

interface ShopProps {
  onAddToCart: (p: Product) => void;
}

const Shop: React.FC<ShopProps> = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'CocoCoin' | 'vip'>('all');

  const filteredProducts = activeCategory === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'CocoCoin', label: '💰 CocoCoin' },
    { id: 'vip', label: '👑 VIPS' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-28 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-100 text-orange-600 px-5 py-2 rounded-full font-black text-[9px] uppercase tracking-widest mb-4 border border-orange-200">
            🔥 UPGRADES EXCLUSIVOS
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display text-gray-950 uppercase tracking-tighter leading-none mb-6">
            LOJA <span className="text-orange-500 underline decoration-4 underline-offset-4">ARTIC</span>
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto text-base font-medium leading-relaxed">
            Personalize seu inventário com as melhores vantagens do servidor.
          </p>
        </div>

        <div className="sticky top-24 z-40 mb-12">
          <div className="bg-white/80 backdrop-blur-xl p-1.5 rounded-2xl border border-gray-200 shadow-lg max-w-fit mx-auto flex flex-wrap justify-center gap-1">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-6 py-2.5 rounded-xl font-black transition-all text-[10px] uppercase tracking-tighter ${
                  activeCategory === cat.id 
                    ? 'bg-orange-500 text-white shadow-md' 
                    : 'text-gray-500 hover:bg-gray-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div 
              key={product.id} 
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-50 relative shrink-0 flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="max-h-[180px] w-auto object-contain p-10 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-black font-display text-gray-950 leading-tight mb-3 uppercase tracking-tighter group-hover:text-orange-500 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-400 text-xs font-bold leading-relaxed mb-8 line-clamp-2">
                  {product.description}
                </p>
                
                <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Valor</span>
                    <span className="text-2xl font-black text-gray-950 tracking-tighter font-display">R$ {product.price.toFixed(2).replace('.', ',')}</span>
                    {product.category === 'vip' && (
                      <span className="text-[8px] font-black text-orange-500 uppercase tracking-tighter mt-1">
                        VIP válido por 30 dias
                      </span>
                    )}
                  </div>
                  <button 
                    onClick={() => onAddToCart(product)}
                    className="bg-orange-500 text-white h-11 w-11 rounded-full shadow-lg hover:bg-orange-600 transition-all flex items-center justify-center active:scale-95"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
