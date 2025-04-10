import { useState, useEffect } from 'react';
import { FaHamburger, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-scroll';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      // Atualiza o link ativo baseado na posição de rolagem
      const sections = ['hero', 'cardapio', 'localizacao'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveLink(section);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const handleLinkClick = (to) => {
    setActiveLink(to);
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-md py-1 border-b border-yellow-400/20' : 'bg-black/80 backdrop-blur-sm py-2'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo e Nome */}
          <Link
            to="hero"
            spy={true}
            smooth={true}
            duration={800}
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => handleLinkClick('hero')}
          >
            <FaHamburger className="text-2xl text-yellow-400 transition-all group-hover:rotate-45 group-hover:scale-110" />
            <h1 className="text-xl font-bold text-white">
              Deby's <span className="text-yellow-400 font-extrabold">Burguer</span>
            </h1>
          </Link>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink to="hero" active={activeLink === 'hero'} onClick={() => handleLinkClick('hero')}>
              Home
            </NavLink>
            <NavLink to="cardapio" active={activeLink === 'cardapio'} onClick={() => handleLinkClick('cardapio')}>
              Cardápio
            </NavLink>
            <NavLink to="localizacao" active={activeLink === 'localizacao'} onClick={() => handleLinkClick('localizacao')}>
              Localização
            </NavLink>
            
            {/* Ícones de Redes Sociais */}
            <div className="flex items-center gap-4 ml-4">
              <a 
                href="https://wa.me/5511949981809" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-green-400 transition-colors duration-300 text-xl"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a 
                href="https://www.instagram.com/hamburgue_da_deby/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-pink-500 transition-colors duration-300 text-xl"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Botão Mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 group focus:outline-none" 
            aria-label="Menu"
          >
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : 'mb-1.5'}`}></div>
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'mb-1.5'}`}></div>
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <div className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-lg z-40 transition-all duration-300 ease-in-out transform ${isMenuOpen ? 'translate-y-16 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        <div className="container mx-auto px-6 py-8 flex flex-col items-center space-y-8 mt-8">
          <MobileNavLink to="hero" active={activeLink === 'hero'} onClick={toggleMenu}>
            Home
          </MobileNavLink>
          <MobileNavLink to="cardapio" active={activeLink === 'cardapio'} onClick={toggleMenu}>
            Cardápio
          </MobileNavLink>
          <MobileNavLink to="localizacao" active={activeLink === 'localizacao'} onClick={toggleMenu}>
            Localização
          </MobileNavLink>
          
          {/* Redes Sociais Mobile */}
          <div className="flex items-center gap-6 mt-6">
            <a 
              href="https://wa.me/5511949981809" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-green-400 transition-colors duration-300 text-2xl"
              aria-label="WhatsApp"
              onClick={toggleMenu}
            >
              <FaWhatsapp />
            </a>
            <a 
              href="https://www.instagram.com/hamburgue_da_deby/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500 transition-colors duration-300 text-2xl"
              aria-label="Instagram"
              onClick={toggleMenu}
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, children, active, onClick }) {
  return (
    <Link
      to={to}
      spy={true}
      smooth={true}
      duration={800}
      offset={-100}
      className={`relative text-base font-medium transition-colors duration-300 group cursor-pointer ${active ? 'text-yellow-400' : 'text-white hover:text-yellow-400'}`}
      onClick={onClick}
    >
      {children}
      <span className={`absolute left-0 bottom-0 h-0.5 bg-yellow-400 transition-all duration-500 origin-left ${active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} style={{ width: '100%' }}></span>
    </Link>
  );
}

function MobileNavLink({ to, children, active, onClick }) {
  return (
    <Link
      to={to}
      spy={true}
      smooth={true}
      duration={800}
      offset={-100}
      className={`text-2xl font-bold py-3 px-6 rounded-lg transition-all duration-300 ${active ? 'text-yellow-400 scale-105' : 'text-white hover:text-yellow-400'}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}