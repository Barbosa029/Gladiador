import logoImg from "../assets/site.png"

export default function HeroSection() {
  const scrollToProducts = () => {
    document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-3xl lg:text-4xl font-bold leading-tight">
            VOCÊ ESTÁ SOFRENDO COM <span className="text-red-500">VÍCIO</span> E A{' '}
            <span className="text-green-500">LIBERDADE</span> ESTÁ LONGE DE VOCÊ?{' '}
            <span className="text-red-500">PARE DE SOFRER</span> E{' '}
            <span className="text-green-500">COMECE A VIVER</span>
          </h1>
          <p className="text-gray-300 text-2xl  leading-relaxed">
            Se você chegou até aqui... É porque está cansado de viver preso aos seus vícios. 
            Chegou a hora de quebrar essas correntes e conquistar sua liberdade definitiva.
          </p>
          <button
            onClick={scrollToProducts}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 transform hover:scale-105"
          >
            QUERO SAIR DO VÍCIO
          </button>
        </div>
        <div className="relative">
          <div className="p-4 rounded-lg shadow-2xl">
            <img
              src={logoImg}
              alt="Notebook mostrando o produto"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}