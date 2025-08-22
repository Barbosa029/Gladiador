import { Shield } from 'lucide-react';

export default function Guarantee() {
  return (
    <section className="bg-gray-800 py-8 px-6 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gray-900 rounded-2xl p-12 border border-gray-600">
          <Shield className="w-20 h-20 text-green-500 mx-auto mb-6" />
          
          <h2 className="text-4xl font-bold text-white mb-4">
            GARANTIA
          </h2>
          
          <h3 className="text-3xl font-bold text-green-500 mb-6">
            Garantia incondicional de 7 dias
          </h3>
          
          <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
            Você tem 7 dias para testar todo o conteúdo. Se não ficar satisfeito, 
            devolvemos 100% do seu dinheiro sem fazer perguntas.
          </p>
        </div>
      </div>
    </section>
  );
}