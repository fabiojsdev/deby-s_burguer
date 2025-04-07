export default function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* Overlay sutil com gradiente */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-black/5"></div>

      {/* Conteúdo centralizado com animação sutil */}
      <div className="relative z-10 px-4 flex flex-col items-center animate-fadeIn">
        {/* Título principal com efeito de destaque */}
        <h1 className="text-6xl md:text-8xl font-bold text-white font-custom mb-2">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
            Hambúrguer
          </span>
          <span className="block mt-2">da Deby</span>
        </h1>

        {/* Subtítulo estilizado */}
        <div className="relative inline-block mt-4 group">
          <h2 className="p-4 text-3xl md:text-4xl font-bold text-white tracking-wider">
            <span className="relative z-10">O Melhor do Artesanal</span>
          </h2>
          <div className="absolute inset-0 border-2 border-yellow-400/50 rounded-full scale-105 group-hover:scale-110 opacity-70 group-hover:opacity-90 transition-all duration-500"></div>
        </div>

        {/* Espaçamento */}
        <div className="h-10 md:h-16"></div>

        {/* Descrição com efeito de brilho */}
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/90 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
            Os melhores ingredientes da região, preparados na hora para você!
          </span>
          <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-80"></span>
        </p>

        {/* Elementos decorativos */}
        <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-yellow-400/10 blur-xl"></div>
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-yellow-400/5 blur-xl"></div>
      </div>
    </section>
  );
}