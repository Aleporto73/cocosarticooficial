
import React from 'react';
import { Link } from 'react-router-dom';

const HowToPlay: React.FC = () => {
  const [copied, setCopied] = React.useState(false);

  const copyIp = () => {
    navigator.clipboard.writeText('cocosarticosmp.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100">
          <h1 className="text-4xl font-black font-display text-gray-900 mb-10 text-center uppercase tracking-tighter">COMO <span className="text-orange-500">JOGAR</span></h1>
          
          <div className="space-y-12">
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-500 text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-lg shadow-orange-500/20">1</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Abra o Minecraft</h3>
                <p className="text-gray-500">Recomendamos utilizar a versão <span className="font-bold text-orange-500">1.20.1</span> ou superior para garantir a melhor experiência visual e mecânica no servidor.</p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-500 text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-lg shadow-orange-500/20">2</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Menu Multiplayer</h3>
                <p className="text-gray-500">No menu principal, clique no botão <span className="font-bold text-gray-900">Multiplayer</span> e em seguida em <span className="font-bold text-gray-900">Conexão Direta</span> ou <span className="font-bold text-gray-900">Adicionar Servidor</span>.</p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-500 text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-lg shadow-orange-500/20">3</div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Conecte-se ao IP</h3>
                <p className="text-gray-500 mb-6">Utilize o endereço abaixo para entrar em nossa rede:</p>
                <div 
                  onClick={copyIp}
                  className="bg-gray-50 border-2 border-dashed border-gray-200 p-6 rounded-3xl cursor-pointer hover:bg-orange-50 transition group flex flex-col sm:flex-row items-center justify-between"
                >
                  <code className="text-3xl font-black text-orange-500 font-display uppercase tracking-tight">cocosarticosmp.com</code>
                  <span className="mt-4 sm:mt-0 text-xs font-bold bg-gray-900 text-white px-4 py-2 rounded-full uppercase tracking-widest group-hover:bg-orange-600 transition">
                    {copied ? 'COPIADO!' : 'CLIQUE PARA COPIAR'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-10 border-t border-gray-100 text-center">
            <h4 className="text-xl font-bold text-gray-900 mb-4">Ainda com dificuldades?</h4>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/loja" className="bg-orange-500 text-white px-8 py-4 rounded-2xl font-bold hover:bg-orange-600 transition shadow-xl shadow-orange-500/20">VER A LOJA</Link>
              <a href="https://discord.com/invite/5dupQ8PkD" target="_blank" rel="noopener noreferrer" className="bg-discord text-white px-8 py-4 rounded-2xl font-bold hover:brightness-110 transition shadow-xl shadow-discord/20">SUPORTE DISCORD</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToPlay;
