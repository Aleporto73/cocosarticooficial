
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartItem } from '../types';

interface CheckoutProps {
  cart: CartItem[];
  clearCart: () => void;
  user: any;
  onLogin: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ cart, clearCart, user, onLogin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [nick, setNick] = useState('');
  const [step, setStep] = useState<'form' | 'payment'>('form');
  const [couponInput, setCouponInput] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0); // 0 to 1 (e.g., 0.7 for 70%)
  const [couponError, setCouponError] = useState('');
  const [couponSuccess, setCouponSuccess] = useState('');

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = subtotal * appliedDiscount;
  const total = subtotal - discountAmount;

  const handleApplyCoupon = () => {
    const validCoupons = ['coco', 'potato', 'hot'];
    if (validCoupons.includes(couponInput.toLowerCase().trim())) {
      setAppliedDiscount(0.7);
      setCouponSuccess('Cupom aplicado! 70% de desconto.');
      setCouponError('');
    } else {
      setAppliedDiscount(0);
      setCouponError('Cupom inválido.');
      setCouponSuccess('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;
    setStep('payment');
  };

  if (cart.length === 0 && step === 'form') {
    return (
      <div className="max-w-7xl mx-auto px-4 py-32 text-center">
        <h2 className="text-3xl font-black font-display mb-6 uppercase tracking-tighter">Seu carrinho está vazio</h2>
        <Link to="/loja" className="bg-orange-500 text-white px-8 py-4 rounded-2xl font-black hover:bg-orange-600 transition shadow-xl shadow-orange-500/20 uppercase tracking-widest text-xs">VOLTAR PARA A LOJA</Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center gap-4 mb-12">
           <Link to="/loja" className="p-2 text-gray-400 hover:text-gray-900 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
           </Link>
           <h1 className="text-3xl font-black font-display uppercase tracking-tighter">Checkout</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2">
            {!user && step === 'form' && (
              <div className="bg-[#5865F2] p-8 rounded-[2.5rem] shadow-xl mb-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                <div className="relative z-10">
                  <h3 className="text-white font-black font-display text-xl uppercase tracking-tighter mb-4 flex items-center gap-3">
                    <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.086 2.157 2.419 0 1.334-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.086 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z"/></svg>
                    Receba Cargos no Discord!
                  </h3>
                  <p className="text-white/80 text-xs font-bold uppercase mb-6 tracking-tight italic">
                    Ao conectar seu Discord, você receberá automaticamente os cargos correspondentes à sua compra assim que o pagamento for confirmado.
                  </p>
                  <button 
                    onClick={onLogin}
                    className="bg-white text-[#5865F2] px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-gray-50 transition-all shadow-lg"
                  >
                    Vincular Conta
                  </button>
                </div>
              </div>
            )}

            {step === 'form' ? (
              <form onSubmit={handleSubmit} className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 space-y-8">
                <h2 className="text-xl font-black font-display text-gray-950 uppercase tracking-tighter">Informações Necessárias</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-3">Seu E-mail</label>
                    <input 
                      type="email" 
                      required 
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="exemplo@email.com"
                      className="w-full bg-gray-50 border-gray-100 border-2 rounded-2xl px-6 py-4 focus:border-orange-500 focus:ring-0 transition font-bold"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-3">Nickname do Minecraft</label>
                    <input 
                      type="text" 
                      required 
                      value={nick}
                      onChange={e => setNick(e.target.value)}
                      placeholder="SeuNickNoJogo"
                      className="w-full bg-gray-50 border-gray-100 border-2 rounded-2xl px-6 py-4 focus:border-orange-500 focus:ring-0 transition font-bold"
                    />
                    <p className="mt-2 text-[9px] text-gray-400 font-bold uppercase italic">* Verifique se o nick está idêntico ao jogo.</p>
                  </div>
                  {user && (
                    <div className="bg-blue-50/50 p-4 rounded-2xl border border-blue-100 flex items-center justify-between">
                       <div className="flex items-center gap-3">
                         <img src={user.avatar} className="w-8 h-8 rounded-lg" alt="" />
                         <span className="text-[10px] font-black text-[#5865F2] uppercase tracking-widest">Discord Vinculado: {user.name}</span>
                       </div>
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                       </svg>
                    </div>
                  )}
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-3">Cupom de Desconto (Opcional)</label>
                    <div className="flex gap-2">
                      <input 
                        type="text" 
                        placeholder="COCO"
                        value={couponInput}
                        onChange={(e) => setCouponInput(e.target.value)}
                        className="flex-grow bg-gray-50 border-gray-100 border-2 rounded-2xl px-6 py-4 focus:border-orange-500 focus:ring-0 transition font-bold"
                      />
                      <button 
                        type="button" 
                        onClick={handleApplyCoupon}
                        className="px-8 bg-gray-950 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-black transition"
                      >
                        APLICAR
                      </button>
                    </div>
                    {couponError && <p className="mt-2 text-[9px] text-red-500 font-bold uppercase">{couponError}</p>}
                    {couponSuccess && <p className="mt-2 text-[9px] text-green-500 font-bold uppercase">{couponSuccess}</p>}
                  </div>
                </div>

                <div className="pt-6">
                  <button 
                    type="submit"
                    className="w-full bg-orange-500 text-white py-6 rounded-2xl font-black text-xl hover:bg-orange-600 transition shadow-xl shadow-orange-500/20 uppercase tracking-tighter"
                  >
                    PROSSEGUIR PARA PAGAMENTO
                  </button>
                </div>
              </form>
            ) : (
              <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 text-center space-y-10">
                <h2 className="text-3xl font-black font-display text-gray-950 uppercase tracking-tighter">PAGAMENTO VIA PIX</h2>
                
                <div className="bg-gray-50 p-10 rounded-[3rem] inline-block border-2 border-dashed border-orange-200">
                  <img 
                    src="https://files.catbox.moe/078jm7.png" 
                    alt="PIX QR Code" 
                    className="w-64 h-64 mx-auto shadow-2xl bg-white p-3 rounded-2xl object-contain"
                  />
                  <div className="mt-8">
                    <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.3em] mb-2">Chave PIX</p>
                    <code className="text-lg font-black text-orange-500 font-mono">pix-manual-cocosartico</code>
                  </div>
                </div>

                <div className="text-left space-y-4 max-w-lg mx-auto bg-orange-50 p-8 rounded-[2.5rem] border border-orange-100">
                  <p className="font-black text-orange-800 uppercase tracking-tighter">Instruções de Confirmação:</p>
                  <ol className="text-xs text-orange-700 font-bold space-y-3 list-decimal pl-5 uppercase leading-relaxed">
                    <li>Realize o pagamento do valor exato de <span className="font-black underline">R$ {total.toFixed(2).replace('.', ',')}</span>.</li>
                    <li>Tire um print/comprovante da transação.</li>
                    <li>Envie seu <span className="font-black">E-mail, Nick e Comprovante</span> para nosso atendimento.</li>
                  </ol>
                  <div className="pt-6 flex flex-col sm:flex-row gap-4">
                    <a 
                      href="https://wa.me/14074055441" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 bg-green-500 text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest text-center hover:bg-green-600 transition flex items-center justify-center gap-2"
                    >
                      WhatsApp
                    </a>
                    <a 
                      href="https://discord.com/invite/5dupQ8PkD" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#5865F2] text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest text-center hover:bg-[#4752c4] transition flex items-center justify-center gap-2"
                    >
                      Discord Support
                    </a>
                  </div>
                </div>

                <div className="pt-4">
                  <p className="text-gray-400 text-[10px] font-bold uppercase italic opacity-60">
                    A liberação dos créditos é feita manualmente pela nossa equipe em até 24h úteis.
                  </p>
                  <button 
                    onClick={() => { clearCart(); navigate('/'); }}
                    className="mt-8 text-gray-500 font-black text-xs uppercase tracking-widest hover:text-orange-500 transition"
                  >
                    Voltar para o Início
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 sticky top-28">
              <h2 className="text-lg font-black font-display uppercase tracking-tighter mb-8 border-b border-gray-50 pb-4">Resumo do Pedido</h2>
              <div className="space-y-6 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                {cart.map(item => (
                  <div key={item.id} className="flex justify-between items-start text-sm">
                    <div className="flex-grow pr-4">
                      <p className="font-black text-gray-950 uppercase tracking-tighter text-xs">{item.name}</p>
                      <p className="text-gray-400 text-[9px] font-bold uppercase tracking-widest">{item.quantity}x R$ {item.price.toFixed(2).replace('.', ',')}</p>
                    </div>
                    <span className="font-black text-gray-950 text-xs">R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-gray-50 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 font-black text-[10px] uppercase tracking-[0.2em]">SUBTOTAL</span>
                  <span className="font-black text-gray-950 text-sm">R$ {subtotal.toFixed(2).replace('.', ',')}</span>
                </div>
                {appliedDiscount > 0 && (
                  <div className="flex justify-between items-center text-green-600">
                    <span className="font-black text-[10px] uppercase tracking-[0.2em]">DESCONTO (70%)</span>
                    <span className="font-black text-sm">- R$ {discountAmount.toFixed(2).replace('.', ',')}</span>
                  </div>
                )}
                <div className="flex justify-between items-center pt-4 border-t border-gray-50">
                  <span className="text-gray-400 font-black text-[10px] uppercase tracking-[0.2em]">TOTAL</span>
                  <span className="text-3xl font-black text-orange-500 font-display tracking-tighter">R$ {total.toFixed(2).replace('.', ',')}</span>
                </div>
              </div>
              
              <div className="mt-8 p-5 bg-gray-50 rounded-2xl flex gap-4 items-center border border-gray-100">
                <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="text-[8px] text-gray-500 font-black uppercase tracking-widest leading-relaxed">
                  Checkout Seguro & <br/>Ativação Manual Garantida
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Checkout;
