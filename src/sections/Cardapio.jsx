import { useState, useEffect } from 'react';
import { FaHamburger, FaBacon, FaLeaf, FaGlassCheers, FaShoppingCart, FaTimes } from 'react-icons/fa';
import agua from '../assets/images/agua.png';
// import bocaNervosa from '../assets/images/bocanervosa.jpg';
import CheioDeFome from '../assets/images/CheioDeFome.jpg';
import coca from '../assets/images/coca.png';
import colosso from '../assets/images/colosso.jpg';
import frango from '../assets/images/frango.jpg';
import fritasCheddar from '../assets/images/fritasCheddar.jpg';
import fritasMedia from '../assets/images/fritasMedia.jpg';
import guarana from '../assets/images/guarana.png';
import maioverde from '../assets/images/maioVerde.png';
import tradicional from '../assets/images/tradicional.jpg'
import BigBurguer from '../assets/images/Bigburguer.jpg'
import coca2l from '../assets/images/coca2l.webp'
import guarana2l from '../assets/images/guarana2l.png'
import combo1 from '../assets/images/combo1.jpg'
import combo2 from '../assets/images/combo2.jpg'
import combo3 from '../assets/images/combo3.jpg'

export default function Cardapio() {
  const [carrinho, setCarrinho] = useState(() => {
    const carrinhoSalvo = localStorage.getItem('carrinho');
    return carrinhoSalvo ? JSON.parse(carrinhoSalvo) : [];
  });

  const [carrinhoAberto, setCarrinhoAberto] = useState(false); // Estado para controlar se o carrinho está aberto ou minimizado

  useEffect(() => {
    const dadosParaSalvar = carrinho.map((item) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      uniqueId: item.uniqueId,
    }));
    localStorage.setItem('carrinho', JSON.stringify(dadosParaSalvar));
  }, [carrinho]);

  const cardapio = [
    // Combos
    {
      id: 1,
      name: 'Combo 1',
      price: 'R$ 35,00',
      desc: 'Combo com 1 hamburguer + 1 batata frita + 1 refrigerante 350ml.',
      icon: <FaHamburger className="text-4xl text-white/80" />,
      image: combo1,
    },
    {
      id: 2,
      name: 'Combo 2',
      price: 'R$ 45,00',
      desc: 'Combo com 2 hamburguers + 1 porção de batata frita grande + 2 refrigerantes 350ml.',
      icon: <FaHamburger className="text-4xl text-white/80" />,
      image: combo2,
    },
    {
      id: 3,
      name: 'Combo 3',
      price: 'R$ 60,00',
      desc: 'Combo com 3 hamburguers + 2 porções de batata frita grande + 3 refrigerantes 350ml.',
      icon: <FaHamburger className="text-4xl text-white/80" />,
      image: combo3,
    },

     //Hambúrguers

    {
      id: 4,
      name: 'Cheio de Fome',
      price: 'R$ 28,00',
      desc: 'Pão com gergelim mesclado, picles, duas carnes, molho de cebola defumada, tomate, alface e maionese verde.',
      icon: <FaHamburger className="text-4xl text-white/80" />,
      image: CheioDeFome,
    },
    {
      id: 5,
      name: 'Tradicional',
      price: 'R$ 22,00',
      desc: 'Pão comum, carne, tomate, alface e maionese verde.',
      icon: <FaHamburger className="text-4xl text-white/80" />,
      image: tradicional,
    },
    {
      id: 6,
      name: 'Colosso',
      price: 'R$ 30,00',
      desc: 'Pão francês rústico, carne hambúrguer de frango, picles, tomate, alface, cheddar, molho de alho e cebola rocha.',
      icon: <FaHamburger className="text-4xl text-white/80" />,
      image: colosso,
    },
    {
      id: 7,
      name: 'Boca Nervosa',
      price: 'R$ 29,00',
      desc: 'Pão australiano, carne, tomate, alface, molho cheddar, maionese verde, picles e cebola defumada.',
      icon: <FaHamburger className="text-4xl text-white/80" />,
      // image: bocaNervosa,
    },
    {
      id: 8,
      name: 'Hambúrguer de Frango',
      price: 'R$ 23,00',
      desc: 'Pão com gergelim, frango, tomate, alface, cebola caramelizada, molho cheddar, picles e maionese verde.',
      icon: <FaHamburger className="text-4xl text-white/80" />,
      image: frango,
    },
    {
      id: 9,
      name: 'Big Burguer',
      price: 'R$ 33,00',
      desc: 'Pão com gergelim, carne, quejo, tomate, alface, molho cheddar, picles e maionese verde.',
      icon: <FaHamburger className="text-4xl text-white/80" />,
      image: BigBurguer,
    },

    // Acompanhamentos
    {
      id: 10,
      name: 'Porção de Batata Média',
      price: 'R$ 15,00',
      desc: 'Batata frita crocante, servida em porção média.',
      icon: <FaBacon className="text-4xl text-white/80" />,
      image: fritasMedia,
    },
    {
      id: 11,
      name: 'Porção de Batata com Bacon e Molho Cheddar',
      price: 'R$ 25,00',
      desc: 'Batata frita com bacon crocante e molho cheddar cremoso.',
      icon: <FaBacon className="text-4xl text-white/80" />,
      image: fritasCheddar,
    },
    {
      id: 12,
      name: 'Pote de Maionese Verde (250ml)',
      price: 'R$ 10,00',
      desc: 'Maionese verde artesanal, perfeita para acompanhar seus lanches.',
      icon: <FaLeaf className="text-4xl text-white/80" />,
      image: maioverde,
    },

    // Bebidas
    {
      id: 13,
      name: 'Coca-Cola 2L',
      price: 'R$ 15,00',
      desc: 'Garrafa 2l.',
      icon: <FaGlassCheers className="text-4xl text-white/80" />,
      image: coca2l,
    },
    {
      id: 14,
      name: 'Guaraná 2L',
      price: 'R$ 12,00',
      desc: 'Garrafa de 2l.',
      icon: <FaGlassCheers className="text-4xl text-white/80" />,
      image: guarana2l,
    },
    {
      id: 15,
      name: 'Coca-Cola Lata',
      price: 'R$ 4,00',
      desc: 'Lata de 350ml.',
      icon: <FaGlassCheers className="text-4xl text-white/80" />,
      image: coca,
    },
    {
      id: 16,
      name: 'Guaraná Lata',
      price: 'R$ 3,50',
      desc: 'Lata de 350ml.',
      icon: <FaGlassCheers className="text-4xl text-white/80" />,
      image: guarana,
    },
    {
      id: 17,
      name: 'Água',
      price: 'R$ 3,00',
      desc: 'Garrafa de 500ml.',
      icon: <FaGlassCheers className="text-4xl text-white/80" />,
      image: agua,
    },
  ];

  const adicionarAoCarrinho = (item) => {
    if (carrinho.length >= 10) {
      alert('O carrinho está cheio! Limite de itens.');
      return;
    }
    setCarrinho([...carrinho, { ...item, uniqueId: Date.now() }]);
  };

  const removerDoCarrinho = (uniqueId) => {
    setCarrinho(carrinho.filter((item) => item.uniqueId !== uniqueId));
  };

  const gerarLinkWhatsApp = () => {
    const numeroWhatsApp = '5511949981809';
    const mensagem = `Olá, gostaria de pedir:\n${carrinho
      .map((item) => `- ${item.name} (${item.price})`)
      .join('\n')}`;
    const mensagemCodificada = encodeURIComponent(mensagem);
    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;
    window.open(linkWhatsApp, '_blank');
  };

  return (
    <section id="cardapio" className="py-16 bg-transparent relative">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
        {/* Título Principal */}
        <div className="w-full flex justify-center mb-20">
          <h3 className="text-4xl font-bold text-center text-white">Cardápio</h3>
        </div>

        {/* Grid de Itens do Cardápio */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardapio.map((item) => (
            <div key={item.id} className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-white/10">
              <div className="h-64 w-full flex items-center justify-center overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col h-[200px]">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold text-white">{item.name}</h4>
                  <div>{item.icon}</div>
                </div>
                <p className="text-white/80 text-sm mb-4 flex-grow">{item.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="text-white font-bold">{item.price}</span>
                  <button
                    onClick={() => adicionarAoCarrinho(item)}
                    className="bg-white/20 text-white px-4 py-2 rounded-full text-sm hover:bg-white/30 transition cursor-pointer"
                  >
                    Adicionar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Carrinho Flutuante */}
      <div className="fixed bottom-8 right-8 bg-white/10 backdrop-blur-sm rounded-lg shadow-lg p-4 border border-white/10 z-50">
        {carrinhoAberto ? (
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <FaShoppingCart className="text-2xl text-white" />
              <span className="text-white font-bold">{carrinho.length} itens</span>
              <button
                onClick={() => setCarrinhoAberto(false)}
                className="bg-white/20 text-white px-4 py-2 rounded-full text-sm hover:bg-white/30 transition"
              >
                Minimizar
              </button>
              <button
                onClick={gerarLinkWhatsApp}
                className="bg-green-500 text-white px-4 py-2 rounded-full text-sm hover:bg-green-600 transition"
              >
                Finalizar Pedido
              </button>
            </div>

            {/* Lista de Itens no Carrinho */}
            {carrinho.length > 0 && (
              <div className="mt-4">
                {carrinho.map((item) => (
                  <div key={item.uniqueId} className="flex items-center justify-between gap-4 mb-2">
                    <span className="text-white text-sm">{item.name}</span>
                    <button
                      onClick={() => removerDoCarrinho(item.uniqueId)}
                      className="text-red-500 hover:text-red-600 transition"
                    >
                      <FaTimes className="text-lg" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => setCarrinhoAberto(true)}
            className="bg-white/20 text-white p-3 rounded-full hover:bg-white/30 transition"
          >
            <FaShoppingCart className="text-2xl" />
            {carrinho.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                {carrinho.length}
              </span>
            )}
          </button>
        )}
      </div>
    </section>
  );
}