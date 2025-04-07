import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Mostra o botão quando o usuário rolar para baixo 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Função para rolar suavemente para o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed left-5 bottom-5 z-40">
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Voltar ao topo"
          className="p-3 bg-yellow-400 hover:bg-yellow-500 text-black rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none"
        >
          <FaArrowUp className="text-xl" />
        </button>
      )}
    </div>
  );
}