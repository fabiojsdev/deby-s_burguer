import { useState, useEffect } from 'react';
import { FaHamburger, FaBacon, FaLeaf, FaGlassCheers, FaShoppingCart, FaTimes } from 'react-icons/fa';
import agua from '../assets/images/agua.png';
import bocaNervosa from '../assets/images/bocaNervosa.jpg';
import cheioDeFome from '../assets/images/cheioDeFome.jpg';
import coca from '../assets/images/coca.png';
import colosso from '../assets/images/colosso.jpg';
import frango from '../assets/images/frango.jpg';
import fritasCheddar from '../assets/images/fritasCheddar.jpg';
import fritasMedia from '../assets/images/fritasMedia.jpg';
import guarana from '../assets/images/guarana.png';
import maioverde from '../assets/images/maioVerde.png';

export default function Cardapio() {
  const [carrinho, setCarrinho] = useState(() => {
    const carrinhoSalvo = localStorage.getItem('carrinho');
    return carrinhoSalvo ? JSON.parse(carrinhoSalvo) : [];
  });

  useEffect(() => {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
  }, [carrinho]);

  const cardapio = [
    { id: 1, name: 'Cheio de Fome', price: 'R$ 28,00', desc: 'Pão com gergelim mesclado...', image: cheioDeFome },
    { id: 2, name: 'Colosso', price: 'R$ 30,00', desc: 'Pão francês rústico...', image: colosso },
    { id: 3, name: 'Boca Nervosa', price: 'R$ 29,00', desc: 'Pão australiano...', image: bocaNervosa },
    { id: 4, name: 'Hambúrguer de Frango', price: 'R$ 23,00', desc: 'Pão com gergelim...', image: frango },
    { id: 5, name: 'Porção de Batata Média', price: 'R$ 15,00', desc: 'Batata frita crocante...', image: fritasMedia },
    { id: 6, name: 'Batata com Bacon e Cheddar', price: 'R$ 25,00', desc: 'Batata frita com bacon...', image: fritasCheddar },
    { id: 7, name: 'Pote de Maionese Verde', price: 'R$ 10,00', desc: 'Maionese verde artesanal...', image: maioverde },
    { id: 8, name: 'Coca-Cola Lata', price: 'R$ 5,00', desc: 'Lata de 350ml.', image: coca },
    { id: 9, name: 'Guaraná Lata', price: 'R$ 4,00', desc: 'Lata de 350ml.', image: guarana },
    { id: 10, name: 'Água', price: 'R$ 3,00', desc: 'Garrafa de 500ml.', image: agua },
  ];

  const adicionarAoCarrinho = (item) => {
    if (carrinho.length >= 5) {
      alert('O carrinho está cheio! Limite de 5 itens.');
      return;
    }
    setCarrinho([...carrinho, { ...item, uniqueId: Date.now() }]);
  };

  const removerDoCarrinho = (uniqueId) => {
    setCarrinho(carrinho.filter((item) => item.uniqueId !== uniqueId));
  };

  const gerarLinkWhatsApp = () => {
    const numeroWhatsApp = '5511949981809';
    const mensagem = `Olá, gostaria de pedir:\n${carrinho.map((item) => `- ${item.name} (${item.price})`).join('\n')}`;
    window.open(`https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`, '_blank');
  };

  return (
    <section id="cardapio" className="py-16 bg-transparent relative">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
        <h3 className="text-4xl font-bold text-center text-white mb-16">Cardápio</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {cardapio.map((item) => (
            <div key={item.id} className="bg-white/10 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-white/10">
              <img src={item.image} alt={item.name} className="h-64 w-full object-cover" />
              <div className="p-6 flex flex-col">
                <h4 className="text-xl font-bold text-white mb-2">{item.name}</h4>
                <p className="text-white/80 text-sm flex-grow">{item.desc}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-white font-bold">{item.price}</span>
                  <button onClick={() => adicionarAoCarrinho(item)} className="bg-white/20 text-white px-4 py-2 rounded-full hover:bg-white/30 transition">
                    Adicionar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="fixed bottom-8 right-8 bg-white/10 backdrop-blur-sm rounded-lg shadow-lg p-4 border border-white/10 z-50">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <FaShoppingCart className="text-2xl text-white" />
            <span className="text-white font-bold">{carrinho.length} itens</span>
            <button onClick={gerarLinkWhatsApp} className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition">
              Finalizar Pedido
            </button>
          </div>
          {carrinho.length > 0 && (
            <div className="mt-4">
              {carrinho.map((item) => (
                <div key={item.uniqueId} className="flex items-center justify-between gap-4 mb-2">
                  <span className="text-white text-sm">{item.name}</span>
                  <button onClick={() => removerDoCarrinho(item.uniqueId)} className="text-red-500 hover:text-red-600 transition">
                    <FaTimes className="text-lg" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
