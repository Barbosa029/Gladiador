import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "PARA QUEM É ESSES PRODUTOS?",
      answer: "Estes produtos é para qualquer pessoa que deseja se libertar dos vícios e comportamentos autodestrutivos. Funciona para vícios em redes sociais, pornografia, hentai e muitos outros."
    },
    {
      question: "COMO FUNCIONA O PRAZO DA GARANTIA?",
      answer: "Você tem 7 dias corridos a partir da compra para testar todo o conteúdo. Se não ficar satisfeito por qualquer motivo, basta enviar um email e devolvemos 100% do seu dinheiro, sem perguntas."
    },
    {
      question: "COMO ACESSAR O PRODUTO?",
      answer: "Você receberá o acesso em um link, O conteúdo será acessado ou baixado através de um computador, celular, tablet ou outro dispositivo digital."
    },
    {
      question: "QUAIS FORMAS DE PAGAMENTO?",
      answer: "Aceitamos todas as principais formas de pagamento: cartão de crédito, débito, PIX e boleto bancário. O pagamento é processado de forma 100% segura."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-800 py-8 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-2">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-600 transition-colors text-white"
              >
                <span className="font-semibold">{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-green-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-green-500" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}