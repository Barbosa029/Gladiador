import { Download, Video, Gift } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import logoImg from "../assets/site-e-telegram.png";
import ebookImg from "../assets/ebook-e-telegram.png";
import siteImg from "../assets/site-ebook-telegram.png";

function AnimatedCard({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

export default function ProductCards() {
  return (
    <section id="produtos" className="bg-black text-white p-6">
      <div className="max-w-6xl mx-auto space-y-8">

        {/* EBOOK Card */}
        <AnimatedCard>
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-700">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Download className="w-8 h-8 text-blue-400" />
                  <div>
                    <h3 className="text-3xl font-bold">EBOOK</h3>
                    <p className="text-gray-400">Ao 50 técnicas mais eficazes para vencer o</p>
                  </div>
                </div>

                <p className="text-gray-300 text-2xl leading-relaxed">
                  Este é um produto completo, repleto de técnicas poderosas para você sair de vez
                  do vício que está te prejudicando.
                </p>

                <ul className="space-y-2 text-xl text-gray-300">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Quebrar as barreiras;
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Técnicas que funcionam (não são só teorias);
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Acesso para o grupo do TELEGRAM;
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <div className="bg-gray-800 rounded-lg p-2 mb-2">
                  <img
                    src={ebookImg}
                    alt="Ebook"
                    className="w-full h-full mx-auto rounded object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <div className="text-gray-400 line-through text-lg">de R$ 99,99</div>
                  <div className="text-4xl font-bold text-green-500">R$ 50,00</div>
                  <a href="https://pay.kiwify.com.br/IDHAZN9">
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold transition-colors">
                    EU QUERO O EBOOK
                  </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedCard>

        {/* CURSO Card */}
        <AnimatedCard>
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Video className="w-8 h-8 text-blue-400" />
                  <div>
                    <h3 className="text-2xl font-bold">CURSO <span className="text-green-500">LIBERTAÇÃO</span></h3>
                    <p className="text-gray-400">REPROGRAME SUA MENTE RECUPERE SUA VIDA</p>
                  </div>
                </div>

                <p className="text-gray-300 text-2xl leading-relaxed">
                  Este é um produto completo, repleto de técnicas poderosas para você sair de vez
                  do vício que está te prejudicando.
                </p>

                <ul className="space-y-2 text-xl text-gray-300">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Reprograme sua mente para vencer os gatilhos;
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Técnicas que funcionam (não são só teorias);
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Acesso para o grupo do TELEGRAM;
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Bônus exclusivos para membros;
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <div className="bg-gray-800 rounded-lg p-2 mb-2">
                  <img
                    src={logoImg}
                    alt="Curso"
                    className="w-full mx-auto rounded object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <div className="text-gray-400 line-through text-lg">de R$ 112,99</div>
                  <div className="text-4xl font-bold text-green-500">R$ 80,90</div>
                  <a href="https://pay.kiwify.com.br/ht44OLS">
                    <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold transition-colors">
                     EU QUERO O CURSO
                  </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedCard>

        {/* COMBO Card */}
        <AnimatedCard>
          <div className="bg-gradient-to-r from-green-800 to-green-900 rounded-lg p-8 border-2 border-green-500 relative">
            <motion.div
              className="absolute -top-2 -right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold"
              animate={{
                scale: [1, 1.2, 1], // aumenta para 1.15x e volta para 1x
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              OFERTA LIMITADA
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Gift className="w-8 h-8 text-yellow-400" />
                  <div>
                    <h3 className="text-2xl font-bold text-white">COMBO <span className="text-yellow-400">LIBERTAÇÃO</span></h3>
                    <p className="text-green-200">EBOOK + CURSO COM DESCONTO EXCLUSIVO</p>
                  </div>
                </div>

                <p className="text-green-100 text-2xl leading-relaxed">
                  Leve os dois produtos com desconto especial e tenha acesso completo a todo
                  o conteúdo para sua transformação definitiva.
                </p>

                <ul className="space-y-2 text-xl text-green-100">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">✓</span>
                    Ebook completo com 10 técnicas;
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">✓</span>
                    Curso completo de reprogramação mental;
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">✓</span>
                    Acesso vitalício ao conteúdo;
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">✓</span>
                    Acesso para o grupo do TELEGRAM;
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">✓</span>
                    Atualizações de técnicas novas;
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <div className="bg-green-700 rounded-lg p-2 mb-2">
                  <div className="flex justify-center space-x-2">
                    <img
                      src={siteImg}
                      alt="Ebook"
                      className="w-full h-full rounded object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-green-200 line-through text-lg">de R$ 312,98</div>
                  <div className="text-5xl font-bold text-yellow-400">R$ 14,90</div>
                  <div className="text-red-400 font-bold">ECONOMIA DE R$ 298,08</div>
                  <a href="https://pay.kiwify.com.br/2vjq0Uv">
                  <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black py-3 rounded-lg font-bold transition-colors">
                   QUERO O COMBO COMPLETO
                  </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedCard>

      </div>
    </section>
  );
}