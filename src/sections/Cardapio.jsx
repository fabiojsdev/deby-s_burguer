import { useState, useEffect } from 'react';
import { FaHamburger, FaBacon, FaLeaf, FaGlassCheers, FaShoppingCart, FaTimes, FaSearch, FaFilter, FaWhatsapp } from 'react-icons/fa';

// Importe suas imagens aqui
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

const cardapio = [
  // Combos
  {
    id: 1,
    name: 'Combo 1',
    price: 'R$ 35,00',
    desc: 'Combo com 1 hamburguer + 1 batata frita + 1 refrigerante 350ml.',
    icon: <FaHamburger className="text-2xl text-white/80" />,
    image: combo1,
    categoria: 'combos'
  },
  {
    id: 2,
    name: 'Combo 2',
    price: 'R$ 45,00',
    desc: 'Combo com 2 hamburguers + 1 porção de batata frita grande + 2 refrigerantes 350ml.',
    icon: <FaHamburger className="text-2xl text-white/80" />,
    image: combo2,
    categoria: 'combos'
  },
  {
    id: 3,
    name: 'Combo 3',
    price: 'R$ 60,00',
    desc: 'Combo com 3 hamburguers + 2 porções de batata frita grande + 3 refrigerantes 350ml.',
    icon: <FaHamburger className="text-2xl text-white/80" />,
    image: combo3,
    categoria: 'combos'
  },

  // Hambúrguers
  {
    id: 4,
    name: 'Cheio de Fome',
    price: 'R$ 28,00',
    desc: 'Pão com gergelim mesclado, picles, duas carnes, molho de cebola defumada, tomate, alface e maionese verde.',
    icon: <FaHamburger className="text-2xl text-white/80" />,
    image: CheioDeFome,
    categoria: 'hamburguers'
  },
  {
    id: 5,
    name: 'Tradicional',
    price: 'R$ 22,00',
    desc: 'Pão comum, carne, tomate, alface e maionese verde.',
    icon: <FaHamburger className="text-2xl text-white/80" />,
    image: tradicional,
    categoria: 'hamburguers'
  },
  {
    id: 6,
    name: 'Colosso',
    price: 'R$ 30,00',
    desc: 'Pão francês rústico, carne hambúrguer de frango, picles, tomate, alface, cheddar, molho de alho e cebola rocha.',
    icon: <FaHamburger className="text-2xl text-white/80" />,
    image: colosso,
    categoria: 'hamburguers'
  },
  {
    id: 7,
    name: 'Boca Nervosa',
    price: 'R$ 29,00',
    desc: 'Pão australiano, carne, tomate, alface, molho cheddar, maionese verde, picles e cebola defumada.',
    icon: <FaHamburger className="text-2xl text-white/80" />,
    image: bocaNervosa,
    categoria: 'hamburguers'
  },
  {
    id: 8,
    name: 'Hambúrguer de Frango',
    price: 'R$ 23,00',
    desc: 'Pão com gergelim, frango, tomate, alface, cebola caramelizada, molho cheddar, picles e maionese verde.',
    icon: <FaHamburger className="text-2xl text-white/80" />,
    image: frango,
    categoria: 'hamburguers'
  },
  {
    id: 9,
    name: 'Big Burguer',
    price: 'R$ 33,00',
    desc: 'Pão com gergelim, carne, quejo, tomate, alface, molho cheddar, picles e maionese verde.',
    icon: <FaHamburger className="text-2xl text-white/80" />,
    image: BigBurguer,
    categoria: 'hamburguers'
  },

  // Acompanhamentos
  {
    id: 10,
    name: 'Porção de Batata Média',
    price: 'R$ 15,00',
    desc: 'Batata frita crocante, servida em porção média.',
    icon: <FaBacon className="text-2xl text-white/80" />,
    image: fritasMedia,
    categoria: 'acompanhamentos'
  },
  {
    id: 11,
    name: 'Porção de Batata com Bacon e Molho Cheddar',
    price: 'R$ 25,00',
    desc: 'Batata frita com bacon crocante e molho cheddar cremoso.',
    icon: <FaBacon className="text-2xl text-white/80" />,
    image: fritasCheddar,
    categoria: 'acompanhamentos'
  },
  {
    id: 12,
    name: 'Pote de Maionese Verde (250ml)',
    price: 'R$ 10,00',
    desc: 'Maionese verde artesanal, perfeita para acompanhar seus lanches.',
    icon: <FaLeaf className="text-2xl text-white/80" />,
    image: maioverde,
    categoria: 'acompanhamentos'
  },

  // Bebidas
  {
    id: 13,
    name: 'Coca-Cola 2L',
    price: 'R$ 15,00',
    desc: 'Garrafa 2l.',
    icon: <FaGlassCheers className="text-2xl text-white/80" />,
    image: coca2l,
    categoria: 'bebidas'
  },
  {
    id: 14,
    name: 'Guaraná 2L',
    price: 'R$ 12,00',
    desc: 'Garrafa de 2l.',
    icon: <FaGlassCheers className="text-2xl text-white/80" />,
    image: guarana2l,
    categoria: 'bebidas'
  },
  {
    id: 15,
    name: 'Coca-Cola Lata',
    price: 'R$ 4,00',
    desc: 'Lata de 350ml.',
    icon: <FaGlassCheers className="text-2xl text-white/80" />,
    image: coca,
    categoria: 'bebidas'
  },
  {
    id: 16,
    name: 'Guaraná Lata',
    price: 'R$ 3,50',
    desc: 'Lata de 350ml.',
    icon: <FaGlassCheers className="text-2xl text-white/80" />,
    image: guarana,
    categoria: 'bebidas'
  },
  {
    id: 17,
    name: 'Água',
    price: 'R$ 3,00',
    desc: 'Garrafa de 500ml.',
    icon: <FaGlassCheers className="text-2xl text-white/80" />,
    image: agua,
    categoria: 'bebidas'
  },
];

export default function Cardapio() {
  const [carrinho, setCarrinho] = useState(() => {
    const carrinhoSalvo = localStorage.getItem('carrinho');
    return carrinhoSalvo ? JSON.parse(carrinhoSalvo) : [];
  });

  const [carrinhoAberto, setCarrinhoAberto] = useState(false);
  const [categoriaAtiva, setCategoriaAtiva] = useState('todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
  }, [carrinho]);

  const adicionarAoCarrinho = (item) => {
    if (carrinho.length >= 15) {
      alert('Limite de 15 itens no carrinho atingido!');
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
    const mensagem = `Olá, gostaria de fazer um pedido:\n\n${carrinho
      .map((item) => `➤ ${item.name} - ${item.price}`)
      .join('\n')}\n\n*Total: ${calcularTotal()}*\n\n*Informações de entrega:*\nNome:\nEndereço:\nReferência:`;
    
    window.open(`https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`, '_blank');
  };

  const filtrarItens = () => {
    let filtrados = categoriaAtiva === 'todos' 
      ? cardapio 
      : cardapio.filter(item => item.categoria === categoriaAtiva);

    if (searchTerm) {
      filtrados = filtrados.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtrados;
  };

  const itensFiltrados = filtrarItens();

  return (
    <section id="cardapio" className="py-12 bg-gradient-to-b from-black to-black/90">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center">
        {/* Título Principal */}
        <div className="w-full text-center mb-8">
          <h2 className="text-3xl font-bold text-yellow-400 mb-1">Cardápio</h2>
          <div className="w-20 h-0.5 bg-yellow-400 mx-auto mt-2"></div>
        </div>

        {/* Barra de Pesquisa e Filtros */}
        <div className="w-full mb-6">
          <div className="relative max-w-xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400 text-sm" />
            </div>
            <input
              type="text"
              placeholder="Buscar item..."
              className="block w-full pl-9 pr-3 py-2 text-sm bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-yellow-400 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button 
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="md:hidden absolute right-2 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white text-sm"
            >
              <FaFilter />
            </button>
          </div>
        </div>

        {/* Filtros por Categoria */}
        <div className={`${mobileFiltersOpen ? 'block' : 'hidden'} md:block w-full mb-8`}>
          <div className="flex flex-wrap justify-center gap-2">
            {['todos', 'combos', 'hamburguers', 'acompanhamentos', 'bebidas'].map((categoria) => (
              <button
                key={categoria}
                onClick={() => setCategoriaAtiva(categoria)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  categoriaAtiva === categoria 
                    ? 'bg-yellow-400 text-black shadow-md' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {categoria === 'todos' && 'Todos'}
                {categoria === 'combos' && 'Combos'}
                {categoria === 'hamburguers' && 'Hambúrguers'}
                {categoria === 'acompanhamentos' && 'Acompanhamentos'}
                {categoria === 'bebidas' && 'Bebidas'}
              </button>
            ))}
          </div>
        </div>

        {/* Mensagem quando não há resultados */}
        {itensFiltrados.length === 0 && (
          <div className="w-full text-center py-12">
            <p className="text-white/70 text-lg mb-3">Nenhum item encontrado</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setCategoriaAtiva('todos');
              }}
              className="text-yellow-400 hover:text-yellow-300 text-xs font-medium"
            >
              Limpar filtros
            </button>
          </div>
        )}

        {/* Grid de Itens do Cardápio - Área com ajustes principais */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {itensFiltrados.map((item) => (
            <div 
              key={item.id} 
              className="bg-white/5 backdrop-blur-sm rounded-lg shadow-md overflow-hidden transition-all duration-200 border border-white/10 hover:border-yellow-400/30 group flex flex-col"
            >
              {/* Container da imagem com proporção fixa */}
              <div className="relative pt-[100%] w-full"> {/* Proporção 1:1 (quadrado) */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-3">
                    <p className="text-white text-xs">{item.desc}</p>
                  </div>
                </div>
              </div>
              
              {/* Informações do produto */}
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-base font-bold text-white truncate">{item.name}</h4>
                  <div className="text-white/80">
                    {item.icon}
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-base font-bold text-yellow-400">
                    {item.price}
                  </span>
                  <button
                    onClick={() => adicionarAoCarrinho(item)}
                    className="px-3 py-1 rounded-full text-xs font-medium transition-all active:scale-95 bg-white/10 hover:bg-white/20 text-white"
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
      <div className="fixed bottom-4 right-4 z-50 transition-all duration-200">
        {carrinhoAberto ? (
          <div className="bg-black/95 backdrop-blur-md rounded-lg shadow-lg border border-yellow-400/20 w-72">
            <div className="p-4">
              <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-2">
                <h4 className="text-base font-bold text-white flex items-center gap-1">
                  <FaShoppingCart className="text-yellow-400 text-sm" /> 
                  <span>Meu Pedido</span>
                  {carrinho.length > 0 && (
                    <span className="bg-yellow-400 text-black text-xs font-bold rounded-full px-1.5 py-0.5 ml-1">
                      {carrinho.length}
                    </span>
                  )}
                </h4>
                <button
                  onClick={() => setCarrinhoAberto(false)}
                  className="text-white/70 hover:text-white transition text-sm"
                >
                  <FaTimes />
                </button>
              </div>

              {carrinho.length > 0 ? (
                <>
                  <div className="max-h-56 overflow-y-auto mb-4 space-y-2 pr-1">
                    {carrinho.map((item) => (
                      <div key={item.uniqueId} className="flex items-center justify-between gap-2 bg-white/5 p-2 rounded-md">
                        <div className="flex-1 min-w-0">
                          <p className="text-white text-sm font-medium truncate">{item.name}</p>
                          <p className="text-yellow-400 text-xs">{item.price}</p>
                        </div>
                        <button
                          onClick={() => removerDoCarrinho(item.uniqueId)}
                          className="text-red-400 hover:text-red-300 transition text-xs"
                        >
                          <FaTimes />
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-white/10 pt-3 mb-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-white font-medium">Subtotal:</span>
                      <span className="text-white">{calcularTotal()}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs mt-1">
                      <span className="text-white/70">Taxa de entrega:</span>
                      <span className="text-white/70">A calcular</span>
                    </div>
                    <div className="flex justify-between items-center text-base font-bold mt-2">
                      <span className="text-white">Total:</span>
                      <span className="text-yellow-400">{calcularTotal()}</span>
                    </div>
                  </div>

                  <button
                    onClick={gerarLinkWhatsApp}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-3 rounded-lg flex items-center justify-center gap-1 transition-all active:scale-[0.98] text-sm"
                  >
                    <FaWhatsapp className="text-base" /> Finalizar
                  </button>
                </>
              ) : (
                <div className="text-center py-6">
                  <p className="text-white/70 text-sm mb-3">Seu carrinho está vazio</p>
                  <button
                    onClick={() => setCarrinhoAberto(false)}
                    className="text-yellow-400 hover:text-yellow-300 transition text-xs font-medium"
                  >
                    Ver cardápio
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <button
            onClick={() => setCarrinhoAberto(true)}
            className="bg-yellow-400 hover:bg-yellow-500 text-black p-3 rounded-full transition-all relative shadow-md active:scale-95"
          >
            <FaShoppingCart className="text-base" />
            {carrinho.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center animate-pulse">
                {carrinho.length}
              </span>
            )}
          </button>
        )}
      </div>
    </section>
  );
}