import { useEffect, useState } from 'react';
import burguer from '../assets/videos/hamburguer.mp4';
import fallbackImage from '../assets/images/fallback.jpg';

export default function VideoBackground() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Função para detectar se o dispositivo é mobile
    const checkIfMobile = () => {
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
      setIsMobile(isMobileDevice);
    };

    // Verifica se é mobile ao carregar o componente
    checkIfMobile();

    // Atualiza o estado se a janela for redimensionada
    window.addEventListener('resize', checkIfMobile);

    // Limpa o event listener ao desmontar o componente
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
        poster={isMobile ? fallbackImage : undefined} // Aplica o fallback apenas em mobile
      >
        <source src={burguer} type="video/mp4" />
        Seu navegador não suporta vídeos HTML5.
      </video>
      {/* Overlay escuro para melhorar a legibilidade */}
      <div className="absolute inset-0 bg-black/50"></div>
    </div>
  );
}