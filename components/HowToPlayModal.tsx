
import React from 'react';

interface HowToPlayModalProps {
  onClose: () => void;
}

const HowToPlayModal: React.FC<HowToPlayModalProps> = ({ onClose }) => {
  const [copied, setCopied] = React.useState(false);

  const copyIp = () => {
    navigator.clipboard.writeText('cocosarticosmp.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl w-full max-w-md overflow-hidden relative shadow-2xl animate-in zoom-in duration-200"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8">
          <h2 className="text-2xl font-black font-display text-gray-900 mb-6">Como Jogar?</h2>
          
          <div className="space-y-6 text-gray-600">
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold">1</span>
              <p className="pt-1">Abra seu Minecraft (versão recomendada: 1.20+)</p>
            </div>
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold">2</span>
              <p className="pt-1">Clique em <span className="font-bold text-gray-900">Multiplayer</span></p>
            </div>
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold">3</span>
              <p className="pt-1">Selecione <span className="font-bold text-gray-900">Conexão Direta</span></p>
            </div>
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold">4</span>
              <div className="pt-1 flex-grow">
                <p className="mb-2">Insira nosso IP:</p>
                <button 
                  onClick={copyIp}
                  className="w-full bg-gray-100 hover:bg-gray-200 p-4 rounded-xl border-2 border-dashed border-gray-300 transition flex justify-between items-center group"
                >
                  <code className="text-orange-600 font-bold text-lg">cocosarticosmp.com</code>
                  <span className="text-xs font-bold text-gray-400 group-hover:text-gray-600">
                    {copied ? 'COPIADO!' : 'COPIAR'}
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-100 text-center">
            <p className="text-lg font-bold text-orange-500 mb-2">Divirta-se!</p>
            <p className="text-sm text-gray-400">Em caso de dúvidas, entre no nosso <a href="https://discord.com/invite/5dupQ8PkD" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">Discord</a>.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToPlayModal;
