import { useEffect } from 'react';
import burguer from '../assets/videos/hamburguer.mp4';

export default function VideoBackground() {
  useEffect(() => {
    // Forçar a reprodução do vídeo em dispositivos móveis
    const videoElement = document.querySelector('video');
    if (videoElement) {
      videoElement.play().catch((error) => {
        console.error('Erro ao reproduzir o vídeo:', error);
      });
    }
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      <video
        autoPlay
        muted
        loop
        playsInline
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