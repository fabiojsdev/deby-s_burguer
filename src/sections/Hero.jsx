export default function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* Overlay com transparência */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Conteúdo centralizado */}
      <div className="relative z-10 px-4 flex flex-col items-center">
        <h1 className="text-6xl md:text-8xl font-bold text-white font-custom">
          Hamburguer da Deby
        </h1>
        {/* Espaçamento controlado */}
        <div className="h-8 md:h-12"></div> {/* Espaço fixo entre título e subtítulo */}
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/80">
          Os melhores ingredientes da região, preparados na hora para você!
        </p>
      </div>
    </section>
  );
}