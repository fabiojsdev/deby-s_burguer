import burguer from '../assets/videos/hamburguer.mp4';
import fallbackImage from '../assets/images/fallback.jpg'; // Adicione uma imagem de fallback

export default function VideoBackground() {
  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
        poster={fallbackImage} // Imagem de fallback
      >
        <source src={burguer} type="video/mp4" />
        Seu navegador não suporta vídeos HTML5.
      </video>
      {/* Overlay escuro para melhorar a legibilidade */}
      <div className="absolute inset-0 bg-black/50"></div>
    </div>
  );
}