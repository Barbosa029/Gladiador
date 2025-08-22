import logoImg from "../assets/Design sem nome (5).png"

export default function ProblemSolution() {
  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-6xl font-bold text-white mb-6">
            Você já tentou... <span className="text-red-500">parar</span>...
            <br />
            mas não conseguiu?
          </h2>
          <p className="text-gray-300 text-2xl leading-relaxed mb-6">
            Mais uma vez, você se <span className="text-green-500">prometeu</span> que ia parar...
          </p>
          <ul className="space-y-3 text-xl text-gray-300">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              Quebrar barreiras psicológicas
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              Técnicas comprovadas cientificamente
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              Resultados em poucos dias
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              Suporte completo durante o processo
            </li>
          </ul>
        </div>
        <div className="relative">
          <img
            src={logoImg}
            alt="Pessoa usando laptop"
            className="w-full rounded-lg shadow-2xl"
          />
        </div>
      </div>
      
      <div className="text-center mt-16">
        <h3 className="text-5xl font-bold text-red-500 mb-4">
          PARE DE SER PRISIONEIRO DOS SEUS VÍCIOS
        </h3>
      </div>
    </section>
  );
}