import { useState, useEffect } from 'react';
import { FaHamburger } from 'react-icons/fa';
import { Link } from 'react-scroll';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-md py-1 border-b border-yellow-400/20' : 'bg-black/80 backdrop-blur-sm py-2'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12"> {/* Altura reduzida */}
          {/* Logo e Nome - Compactado */}
          <Link
            to="hero"
            spy={true}
            smooth={true}
            duration={800}
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaHamburger className="text-2xl text-yellow-400 transition-all group-hover:rotate-45 group-hover:scale-110" /> {/* Ícone menor */}
            <h1 className="text-xl font-bold text-white"> {/* Texto menor */}
              Deby's <span className="text-yellow-400 font-extrabold">Burguer</span>
            </h1>
          </Link>

          {/* Menu Desktop - Compactado */}
          <div className="hidden md:flex items-center space-x-6"> {/* Espaço reduzido */}
            <NavLink to="hero" onClick={() => setIsMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to="cardapio" onClick={() => setIsMenuOpen(false)}>
              Cardápio
            </NavLink>
            <NavLink to="localizacao" onClick={() => setIsMenuOpen(false)}>
              Localização
            </NavLink>
          </div>

          {/* Botão Mobile - Compactado */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 group focus:outline-none" 
            aria-label="Menu"
          >
            <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : 'mb-1.5'}`}></div>
            <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'mb-1.5'}`}></div>
            <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
          </button>
        </div>
      </div>

      {/* Menu Mobile - Estilizado */}
      <div className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-lg z-40 transition-all duration-300 ease-in-out transform ${isMenuOpen ? 'translate-y-12 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        <div className="container mx-auto px-6 py-6 flex flex-col items-center space-y-6 mt-6"> {/* Espaçamento reduzido */}
          <MobileNavLink to="hero" onClick={toggleMenu}>
            Home
          </MobileNavLink>
          <MobileNavLink to="cardapio" onClick={toggleMenu}>
            Cardápio
          </MobileNavLink>
          <MobileNavLink to="localizacao" onClick={toggleMenu}>
            Localização
          </MobileNavLink>
        </div>
      </div>
    </nav>
  );
}

// Componente para links desktop
function NavLink({ to, children, onClick }) {
  return (
    <Link
      to={to}
      spy={true}
      smooth={true}
      duration={800}
      offset={-100}
      className="relative text-base font-medium text-white hover:text-yellow-400 transition-colors duration-300 group cursor-pointer" /* cursor-pointer adicionado */
      onClick={onClick}
    >
      {children}
      <span className="absolute left-0 bottom-0 h-0.5 bg-yellow-400 transition-all duration-500 origin-left transform scale-x-0 group-hover:scale-x-100" style={{ width: '100%' }}></span>
    </Link>
  );
}

// Componente para links mobile
function MobileNavLink({ to, children, onClick }) {
  return (
    <Link
      to={to}
      spy={true}
      smooth={true}
      duration={800}
      offset={-100}
      className="text-xl font-bold text-white hover:text-yellow-400 py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 cursor-pointer" /* cursor-pointer adicionado */
      onClick={onClick}
    >
      {children}
    </Link>
  );
}