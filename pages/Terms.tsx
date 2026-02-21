
import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100">
          <h1 className="text-4xl font-black font-display text-gray-900 mb-10">Termos de <span className="text-orange-500">Uso e Venda</span></h1>
          
          <div className="prose prose-orange max-w-none text-gray-600 space-y-8">
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-wider">1. Aceitação dos Termos</h2>
              <p>Ao realizar qualquer compra em nossa loja, você concorda automaticamente com todas as diretrizes listadas nesta página. Reservamo-nos o direito de alterar estes termos a qualquer momento, sem aviso prévio.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-wider">2. Produtos e Pagamentos</h2>
              <p>Nossos produtos são itens virtuais para o servidor Minecraft COCOSARTICO. Todos os pacotes VIP possuem duração de 30 (trinta) dias corridos após a ativação no jogo.</p>
              <p>Os valores variam conforme o pacote selecionado e estão claramente informados na página da loja.</p>
              <p>O pagamento é realizado exclusivamente via PIX Manual, exigindo envio do comprovante para nossa equipe.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-wider">3. Política de Reembolso</h2>
              <p>Por se tratar de produtos digitais, ativados manualmente e com duração determinada (30 dias), não oferecemos reembolsos após a entrega ou ativação do VIP no jogo.</p>
              <p>Certifique-se da sua compra antes de realizar o pagamento.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-wider">4. Entrega dos Produtos</h2>
              <p>A entrega é realizada manualmente por um administrador. O prazo médio de entrega é de 1 hora, podendo estender-se até 24 horas úteis após a confirmação do comprovante via WhatsApp ou Discord.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-wider">5. Responsabilidades</h2>
              <p>O jogador é inteiramente responsável por informar o <span className="font-bold text-gray-900">Nickname</span> correto no momento da compra. Caso o nick informado esteja incorreto e o produto seja entregue a outra conta, não haverá reposição.</p>
            </section>

            <section className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <p className="text-sm italic">Última atualização: Fevereiro de 2026. COCOSARTICO Network.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
