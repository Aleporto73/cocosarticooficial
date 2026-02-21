
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-yellow-400 bg-white">
                <img 
                  src="https://files.catbox.moe/trwo5z.png" 
                  alt="COCOSARTICO Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-black font-display text-orange-500 tracking-tighter">COCOSARTICO</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              O melhor servidor de Minecraft com economia, eventos e uma comunidade ativa. Venha fazer parte dessa aventura!
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Links Úteis</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-500 hover:text-orange-500 text-sm transition">Início</Link></li>
              <li><Link to="/loja" className="text-gray-500 hover:text-orange-500 text-sm transition">Loja Oficial</Link></li>
              <li><Link to="/termos" className="text-gray-500 hover:text-orange-500 text-sm transition">Termos de Uso</Link></li>
              <li><a href="https://discord.com/invite/5dupQ8PkD" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-orange-500 text-sm transition">Discord</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Aviso Legal</h4>
            <p className="text-gray-400 text-xs leading-relaxed italic">
              COCOSARTICO não é afiliado ou endossado pela Mojang AB ou Microsoft. Minecraft é uma marca registrada da Mojang Synergies AB.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="https://discord.com/invite/5dupQ8PkD" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-discord transition">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.086 2.157 2.419 0 1.334-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.086 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-100 text-center">
          <p className="text-gray-400 text-xs">© 2024 COCOSARTICO Network. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
