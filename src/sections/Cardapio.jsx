import { useState, useEffect } from 'react';
import { FaHamburger, FaBacon, FaLeaf, FaGlassCheers, FaShoppingCart, FaTimes } from 'react-icons/fa';
import agua from '../assets/images/agua.png';
import bocaNervosa from '../assets/images/bocanervosa.png';
import CheioDeFome from '../assets/images/cheiodefome.png';
import coca from '../assets/images/coca.png';
import colosso from '../assets/images/colosso.jpg';
import frango from '../assets/images/frango.jpg';
import fritasCheddar from '../assets/images/fritasCheddar.jpg';
import fritasMedia from '../assets/images/fritasMedia.jpg';
import guarana from '../assets/images/guarana.png';
import maioverde from '../assets/images/maioVerde.png';
import tradicional from '../assets/images/tradicional.jpg';
import BigBurguer from '../assets/images/Bigburguer.jpg';
import coca2l from '../assets/images/coca2l.webp';
import guarana2l from '../assets/images/guarana2l.png';
import combo1 from '../assets/images/combo1.jpg';
import combo2 from '../assets/images/combo2.jpg';
import combo3 from '../assets/images/combo3.jpg';

export default function Cardapio() {
  const [carrinho, setCarrinho] = useState(() => {
    const carrinhoSalvo = localStorage.getItem('carrinho');
    return carrinhoSalvo ? JSON.parse(carrinhoSalvo) : [];
  });

  const [carrinhoAberto, setCarrinhoAberto] = useState(false);
  const [categoriaAtiva, setCategoriaAtiva] = useState('todos');

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
      categoria: 'combos'
    },
    {
      id: 2,
      name: 'Combo 2',
      price: 'R$ 45,00',
      desc: 'Combo com 2 hamburguers + 1 porção de batata frita grande + 2 refrigerantes 350ml.',
      icon: <FaHamburger className="text-4xl text-white/80" />,
      image: combo2,
      categoria: 'combos'
    },
    {
      id: 3,
      name: 'Combo 3',
      price: 'R$ 60,00',
      desc: 'Combo com 3 hamburguers + 2 porções de batata frita grande + 3 refrigerantes 350ml.',
      icon: <FaHamburger className="text-4xl text-white/80" />,
      image: combo3,
      categoria: 'combos'
    },

    // Hambúrguers
    {
      id: 4,
      name: 'Cheio de Fome',
      price: 'R$ 28,00',
      desc: 'Pão com gergelim mesclado, picles, duas carnes, molho de cebola defumada, tomate, alface e maionese verde.',
      icon: <FaHamburger className="text-4xl text-white/80" />,
      image: CheioDeFome,
      categoria: 'hamburguers'
    },
    {
      id: 5,
      name: 'Tradicional',
      price: 'R$ 22,00',
      desc: 'Pão comum, carne, tomate, alface e maionese verde.',
      icon: <FaHamburger className="text-4xl text-white/80" />,
      image: tradicional,
      categoria: 'hamburguers'
    },
    {
      id: 6,
      name: 'Colosso',
      price: 'R$ 30,00',
      desc: 'Pão francês rústico, carne hambúrguer de frango, picles, tomate, alface, cheddar, molho de alho e cebola rocha.',
      icon: <FaHamburger className="text-4xl text-white/80" />,
      image: colosso,
      categoria: 'hamburguers'
    },
    {
      id: 7,
      name: 'Boca Nervosa',
      price: 'R$ 29,00',
      desc: 'Pão australiano, carne, tomate, alface, molho cheddar, maionese verde, picles e cebola defumada.',
      icon: <FaHamburger className="text-4xl text-white/80" />,
      image: bocaNervosa,
      categoria: 'hamburguers'
    },
    {
      id: 8,
      name: 'Hambúrguer de Frango',
      price: 'R$ 23,00',
      desc: 'Pão com gergelim, frango, tomate, alface, cebola caramelizada, molho cheddar, picles e maionese verde.',
      icon: <FaHamburger className="text-4xl text-white/80" />,
      image: frango,
      categoria: 'hamburguers'
    },
    {
      id: 9,
      name: 'Big Burguer',
      price: 'R$ 33,00',
      desc: 'Pão com gergelim, carne, quejo, tomate, alface, molho cheddar, picles e maionese verde.',
      icon: <FaHamburger className="text-4xl text-white/80" />,
      image: BigBurguer,
      categoria: 'hamburguers'
    },

    // Acompanhamentos
    {
      id: 10,
      name: 'Porção de Batata Média',
      price: 'R$ 15,00',
      desc: 'Batata frita crocante, servida em porção média.',
      icon: <FaBacon className="text-4xl text-white/80" />,
      image: fritasMedia,
      categoria: 'acompanhamentos'
    },
    {
      id: 11,
      name: 'Porção de Batata com Bacon e Molho Cheddar',
      price: 'R$ 25,00',
      desc: 'Batata frita com bacon crocante e molho cheddar cremoso.',
      icon: <FaBacon className="text-4xl text-white/80" />,
      image: fritasCheddar,
      categoria: 'acompanhamentos'
    },
    {
      id: 12,
      name: 'Pote de Maionese Verde (250ml)',
      price: 'R$ 10,00',
      desc: 'Maionese verde artesanal, perfeita para acompanhar seus lanches.',
      icon: <FaLeaf className="text-4xl text-white/80" />,
      image: maioverde,
      categoria: 'acompanhamentos'
    },

    // Bebidas
    {
      id: 13,
      name: 'Coca-Cola 2L',
      price: 'R$ 15,00',
      desc: 'Garrafa 2l.',
      icon: <FaGlassCheers className="text-4xl text-white/80" />,
      image: coca2l,
      categoria: 'bebidas'
    },
    {
      id: 14,
      name: 'Guaraná 2L',
      price: 'R$ 12,00',
      desc: 'Garrafa de 2l.',
      icon: <FaGlassCheers className="text-4xl text-white/80" />,
      image: guarana2l,
      categoria: 'bebidas'
    },
    {
      id: 15,
      name: 'Coca-Cola Lata',
      price: 'R$ 4,00',
      desc: 'Lata de 350ml.',
      icon: <FaGlassCheers className="text-4xl text-white/80" />,
      image: coca,
      categoria: 'bebidas'
    },
    {
      id: 16,
      name: 'Guaraná Lata',
      price: 'R$ 3,50',
      desc: 'Lata de 350ml.',
      icon: <FaGlassCheers className="text-4xl text-white/80" />,
      image: guarana,
      categoria: 'bebidas'
    },
    {
      id: 17,
      name: 'Água',
      price: 'R$ 3,00',
      desc: 'Garrafa de 500ml.',
      icon: <FaGlassCheers className="text-4xl text-white/80" />,
      image: agua,
      categoria: 'bebidas'
    },
  ];

  const adicionarAoCarrinho = (item) => {
    if (carrinho.length >= 10) {
      alert('O carrinho está cheio! Limite de 10 itens.');
      return;
    }
    setCarrinho([...carrinho, { ...item, uniqueId: Date.now() }]);
  };

  const removerDoCarrinho = (uniqueId) => {
    setCarrinho(carrinho.filter((item) => item.uniqueId !== uniqueId));
  };

  const calcularTotal = () => {
    return carrinho.reduce((total, item) => {
      const preco = parseFloat(item.price.replace('R$ ', '').replace(',', '.'));
      return total + preco;
    }, 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const gerarLinkWhatsApp = () => {
    if (carrinho.length === 0) {
      alert('Seu carrinho está vazio! Adicione itens antes de finalizar.');
      return;
    }

    const numeroWhatsApp = '5511949981809';
    const mensagem = `Olá, gostaria de pedir:\n${carrinho
      .map((item) => `- ${item.name} (${item.price})`)
      .join('\n')}\n\n*Total: ${calcularTotal()}*`;
    const mensagemCodificada = encodeURIComponent(mensagem);
    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;
    window.open(linkWhatsApp, '_blank');
  };

  const filtrarPorCategoria = (categoria) => {
    setCategoriaAtiva(categoria);
  };

  const itensFiltrados = categoriaAtiva === 'todos' 
    ? cardapio 
    : cardapio.filter(item => item.categoria === categoriaAtiva);

  return (
    <section id="cardapio" className="py-16 bg-transparent relative">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
        {/* Título Principal */}
        <div className="w-full flex justify-center mb-8">
          <h3 className="text-4xl font-bold text-center text-white">Cardápio</h3>
        </div>

        {/* Filtros por Categoria */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => filtrarPorCategoria('todos')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${categoriaAtiva === 'todos' ? 'bg-white text-black' : 'bg-white/10 text-white hover:bg-white/20'}`}
          >
            Todos
          </button>
          <button
            onClick={() => filtrarPorCategoria('combos')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${categoriaAtiva === 'combos' ? 'bg-white text-black' : 'bg-white/10 text-white hover:bg-white/20'}`}
          >
            Combos
          </button>
          <button
            onClick={() => filtrarPorCategoria('hamburguers')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${categoriaAtiva === 'hamburguers' ? 'bg-white text-black' : 'bg-white/10 text-white hover:bg-white/20'}`}
          >
            Hambúrguers
          </button>
          <button
            onClick={() => filtrarPorCategoria('acompanhamentos')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${categoriaAtiva === 'acompanhamentos' ? 'bg-white text-black' : 'bg-white/10 text-white hover:bg-white/20'}`}
          >
            Acompanhamentos
          </button>
          <button
            onClick={() => filtrarPorCategoria('bebidas')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${categoriaAtiva === 'bebidas' ? 'bg-white text-black' : 'bg-white/10 text-white hover:bg-white/20'}`}
          >
            Bebidas
          </button>
        </div>

        {/* Grid de Itens do Cardápio */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {itensFiltrados.map((item) => (
            <div key={item.id} className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-white/10 hover:border-white/20">
              <div className="h-56 w-full flex items-center justify-center overflow-hidden bg-black/10">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5 flex flex-col h-[220px]">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xl font-bold text-white truncate">{item.name}</h4>
                  <div>{item.icon}</div>
                </div>
                <p className="text-white/80 text-sm mb-4 flex-grow line-clamp-3">{item.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="text-white font-bold">{item.price}</span>
                  <button
                    onClick={() => adicionarAoCarrinho(item)}
                    className="bg-white/20 text-white px-4 py-2 rounded-full text-sm hover:bg-white/30 transition cursor-pointer active:scale-95"
                  >
                    Adicionar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Carrinho Flutuante - Versão Melhorada */}
      <div className="fixed bottom-6 right-6 z-50">
        {carrinhoAberto ? (
          <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-xl border border-white/10 w-72">
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-bold text-white flex items-center gap-2">
                  <FaShoppingCart /> Seu Pedido
                </h4>
                <button
                  onClick={() => setCarrinhoAberto(false)}
                  className="text-white/70 hover:text-white transition"
                >
                  <FaTimes />
                </button>
              </div>

              {carrinho.length > 0 ? (
                <>
                  <div className="max-h-64 overflow-y-auto mb-4 space-y-3">
                    {carrinho.map((item) => (
                      <div key={item.uniqueId} className="flex items-center justify-between gap-2 bg-white/5 p-2 rounded-lg">
                        <div className="flex-1 min-w-0">
                          <p className="text-white text-sm font-medium truncate">{item.name}</p>
                          <p className="text-white/60 text-xs">{item.price}</p>
                        </div>
                        <button
                          onClick={() => removerDoCarrinho(item.uniqueId)}
                          className="text-red-400 hover:text-red-300 transition p-1"
                        >
                          <FaTimes className="text-sm" />
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-white/10 pt-3 mb-3">
                    <div className="flex justify-between items-center text-white font-bold">
                      <span>Total:</span>
                      <span>{calcularTotal()}</span>
                    </div>
                  </div>

                  <button
                    onClick={gerarLinkWhatsApp}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition active:scale-95"
                  >
                    Finalizar Pedido
                    <span className="text-lg">🚀</span>
                  </button>
                </>
              ) : (
                <div className="text-center py-6">
                  <p className="text-white/70">Seu carrinho está vazio</p>
                  <button
                    onClick={() => setCarrinhoAberto(false)}
                    className="mt-3 text-white/80 hover:text-white transition text-sm"
                  >
                    Ver cardápio
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-end gap-2">
            <span className="text-white text-xs bg-black/70 px-3 py-1 rounded-full backdrop-blur-sm shadow-sm">
              Finalize seu pedido aqui 😊
            </span>
            <button
              onClick={() => setCarrinhoAberto(true)}
              className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all relative shadow-lg active:scale-95"
            >
              <FaShoppingCart className="text-xl" />
              {carrinho.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {carrinho.length}
                </span>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}