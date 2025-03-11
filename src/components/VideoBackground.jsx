import burguer from '../assets/videos/hamburguer.mp4';

export default function VideoBackground() {
  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      <video
        autoPlay
        muted
        loop
        playsInline // Adicione este atributo
        className="w-full h-full object-cover"
      >
        <source src={burguer} type="video/mp4" />
        Seu navegador não suporta vídeos HTML5.
      </video>
      {/* Overlay escuro para melhorar a legibilidade */}
      <div className="absolute inset-0 bg-black/50"></div>
    </div>
  );
}