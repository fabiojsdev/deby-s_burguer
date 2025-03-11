import { useState } from 'react';
import { FaHamburger, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full bg-transparent backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo e Nome (clicável para voltar ao topo) */}
        <Link
          to="hero" // Define o destino como a seção "hero"
          spy={true}
          smooth={true}
          className="flex items-center cursor-pointer"
          onClick={() => setIsMenuOpen(false)} // Fecha o menu ao clicar no logo
        >
          <FaHamburger className="text-3xl text-white mr-2" /> {/* Ícone branco */}
          <h1 className="text-2xl font-bold text-white">
            Deby's <span className="text-white">Burguer</span> {/* Texto branco */}
          </h1>
        </Link>

        {/* Botão do Menu Hambúrguer (Mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white hover:text-gray-300 transition"
        >
          {isMenuOpen ? (
            <FaTimes className="text-2xl" /> // Ícone de "X" para fechar o menu
          ) : (
            <FaBars className="text-2xl" /> // Ícone de menu hambúrguer
          )}
        </button>

        {/* Links de Navegação */}
        <div
          className={`md:flex md:items-center md:gap-8 fixed md:static bg-black/50 backdrop-blur-md md:bg-transparent w-full md:w-auto left-0 top-16 md:top-0 p-4 md:p-0 transition-all duration-300 ease-in-out ${isMenuOpen ? 'block' : 'hidden'}`}
        >
          <Link
            to="hero"
            spy={true}
            smooth={true}
            className="block md:inline-block cursor-pointer text-white hover:text-gray-300 transition-all relative group py-2 md:py-0"
            onClick={() => setIsMenuOpen(false)} // Fecha o menu ao clicar em um link
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span> {/* Sublinhado branco */}
          </Link>
          <Link
            to="cardapio"
            spy={true}
            smooth={true}
            className="block md:inline-block cursor-pointer text-white hover:text-gray-300 transition-all relative group py-2 md:py-0"
            onClick={() => setIsMenuOpen(false)} // Fecha o menu ao clicar em um link
          >
            Cardápio
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span> {/* Sublinhado branco */}
          </Link>
          <Link
            to="localizacao"
            spy={true}
            smooth={true}
            className="block md:inline-block cursor-pointer text-white hover:text-gray-300 transition-all relative group py-2 md:py-0"
            onClick={() => setIsMenuOpen(false)} // Fecha o menu ao clicar em um link
          >
            Localização
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span> {/* Sublinhado branco */}
          </Link>
        </div>
      </div>
    </nav>
  );
}