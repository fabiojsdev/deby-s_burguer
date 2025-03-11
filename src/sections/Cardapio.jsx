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
  // Estado para armazenar os itens do carrinho
  const [carrinho, setCarrinho] = useState(() => {
    // Recupera os itens do localStorage ao carregar a página
    const carrinhoSalvo = localStorage.getItem('carrinho');
    return carrinhoSalvo ? JSON.parse(carrinhoSalvo) : [];
  });

  // Atualiza o localStorage sempre que o carrinho muda
  useEffect(() => {
    // Salva apenas os dados essenciais no localStorage
    const dadosParaSalvar = carrinho.map((item) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      uniqueId: item.uniqueId,
    }));
    localStorage.setItem('carrinho', JSON.stringify(dadosParaSalvar));
  }, [carrinho]);

  const cardapio = [
    // Hambúrgueres
    {
      id: 1,
      name: 'Cheio de Fome',
      price: 'R$ 28,00',
      desc: 'Pão com gergelim mesclado, picles, duas carnes, molho de cebola defumada, tomate, alface e maionese verde.',
      icon: <FaHamburger className="text-4xl text-white/80" />,
      image: cheioDeFome,
    },
    {
      id: 2,
      name: 'Colosso',
      price: 'R$ 30,00',
      desc: 'Pão francês rústico, carne hambúrguer de frango, picles, tomate, alface, cheddar, molho de alho e cebola rocha.',
      icon: <FaHamburger className="text-4xl text-white/80" />,
      image: colosso,
    },
    {
      id: 3,
      name: 'Boca Nervosa',
      price: 'R$ 29,00',
      desc: 'Pão australiano, carne, tomate, alface, molho cheddar, maionese verde, picles e cebola defumada.',
      icon: <FaHamburger className="text-4xl text-white/80" />,
      image: bocaNervosa,
    },
    {
      id: 4,
      name: 'Hambúrguer de Frango',
      price: 'R$ 23,00',
      desc: 'Pão com gergelim, frango, tomate, alface, cebola caramelizada, molho cheddar, picles e maionese verde.',
      icon: <FaHamburger className="text-4xl text-white/80" />,
      image: frango,
    },

    // Acompanhamentos
    {
      id: 5,
      name: 'Porção de Batata Média',
      price: 'R$ 15,00',
      desc: 'Batata frita crocante, servida em porção média.',
      icon: <FaBacon className="text-4xl text-white/80" />,
      image: fritasMedia,
    },
    {
      id: 6,
      name: 'Porção de Batata com Bacon e Molho Cheddar',
      price: 'R$ 25,00',
      desc: 'Batata frita com bacon crocante e molho cheddar cremoso.',
      icon: <FaBacon className="text-4xl text-white/80" />,
      image: fritasCheddar,
    },
    {
      id: 7,
      name: 'Pote de Maionese Verde (250ml)',
      price: 'R$ 10,00',
      desc: 'Maionese verde artesanal, perfeita para acompanhar seus lanches.',
      icon: <FaLeaf className="text-4xl text-white/80" />,
      image: maioverde,
    },

    // Bebidas
    {
      id: 8,
      name: 'Coca-Cola Lata',
      price: 'R$ 5,00',
      desc: 'Lata de 350ml.',
      icon: <FaGlassCheers className="text-4xl text-white/80" />,
      image: coca,
    },
    {
      id: 9,
      name: 'Guaraná Lata',
      price: 'R$ 4,00',
      desc: 'Lata de 350ml.',
      icon: <FaGlassCheers className="text-4xl text-white/80" />,
      image: guarana,
    },
    {
      id: 10,
      name: 'Água',
      price: 'R$ 3,00',
      desc: 'Garrafa de 500ml.',
      icon: <FaGlassCheers className="text-4xl text-white/80" />,
      image: agua,
    },
  ];

  // Função para adicionar itens ao carrinho
  const adicionarAoCarrinho = (item) => {
    if (carrinho.length >= 5) {
      alert('O carrinho está cheio! Limite de 5 itens.');
      return;
    }
    setCarrinho([...carrinho, { ...item, uniqueId: Date.now() }]); // Adiciona um ID único
  };

  // Função para remover itens do carrinho
  const removerDoCarrinho = (uniqueId) => {
    setCarrinho(carrinho.filter((item) => item.uniqueId !== uniqueId));
  };

  // Função para gerar o link do WhatsApp
  const gerarLinkWhatsApp = () => {
    const numeroWhatsApp = '5511949981809'; // Substitua pelo número da hamburgueria no formato internacional
    const mensagem = `Olá, gostaria de pedir:\n${carrinho
      .map((item) => `- ${item.name} (${item.price})`)
      .join('\n')}`;

    // Codifica a mensagem para uso em URL
    const mensagemCodificada = encodeURIComponent(mensagem);

    // Gera o link do WhatsApp
    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;

    // Abre o link em uma nova aba
    window.open(linkWhatsApp, '_blank');
  };

  return (
    <section id="cardapio" className="py-16 bg-transparent relative">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
        {/* Título Principal */}
        <h3 className="text-4xl font-bold text-center text-white mb-16">
          Cardápio
        </h3>

        {/* Grid de Itens do Cardápio */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardapio.map((item) => (
            <div key={item.id} className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-white/10">
              {/* Contêiner da Imagem */}
              <div className="h-64 w-full flex items-center justify-center overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col h-[200px]"> {/* Altura fixa para o contêiner */}
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold text-white">{item.name}</h4>
                  <div>{item.icon}</div>
                </div>
                <p className="text-white/80 text-sm mb-4 flex-grow">{item.desc}</p> {/* flex-grow para ocupar o espaço restante */}
                <div className="flex justify-between items-center">
                  <span className="text-white font-bold">{item.price}</span>
                  <button
                    onClick={() => adicionarAoCarrinho(item)}
                    className="bg-white/20 text-white px-4 py-2 rounded-full text-sm hover:bg-white/30 transition cursor-pointer" // Adiciona cursor pointer
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
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <FaShoppingCart className="text-2xl text-white" />
            <span className="text-white font-bold">{carrinho.length} itens</span>
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
      </div>
    </section>
  );
}