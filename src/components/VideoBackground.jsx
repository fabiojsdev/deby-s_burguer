import { useEffect, useState } from 'react';
import burguer from '../assets/videos/hamburguer.mp4';
import fallbackImage from '../assets/images/fallback.jpg';

export default function VideoBackground() {
  const [isVideoSupported, setIsVideoSupported] = useState(true);

  useEffect(() => {
    // Tenta reproduzir o vídeo programaticamente (para contornar bloqueios de autoplay)
    const video = document.createElement('video');
    video.muted = true;
    video.playsInline = true;
    video.autoplay = true;
    video.src = burguer;

    video.play()
      .then(() => {
        // Vídeo suportado
        setIsVideoSupported(true);
      })
      .catch(() => {
        // Vídeo não suportado ou autoplay bloqueado
        setIsVideoSupported(false);
      });

    // Verifica também se é um dispositivo móvel com tela pequena
    const checkIfMobile = () => {
      const isMobileView = window.matchMedia("(max-width: 768px)").matches;
      const isMobileAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
      
      if (isMobileView || isMobileAgent) {
        console.log("Dispositivo móvel detectado - otimizando vídeo");
      }
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      {isVideoSupported ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          // Fallback universal se o vídeo não carregar
          poster={fallbackImage}
        >
          <source src={burguer} type="video/mp4" />
          Seu navegador não suporta vídeos HTML5.
        </video>
      ) : (
        // Fallback para imagem se o vídeo não for suportado
        <img 
          src={fallbackImage} 
          alt="Background substituto" 
          className="w-full h-full object-cover" 
        />
      )}
      {/* Overlay escuro para melhorar a legibilidade */}
      <div className="absolute inset-0 bg-black/50"></div>
    </div>
  );
}