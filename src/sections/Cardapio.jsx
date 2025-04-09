import { useState, useEffect, useMemo, useCallback } from 'react';
import { 
  FaHamburger, 
  FaBacon, 
  FaLeaf, 
  FaGlassCheers, 
  FaShoppingCart, 
  FaTimes, 
  FaSearch, 
  FaFilter, 
  FaWhatsapp,
  FaPlus,
  FaStar,
  FaFire
} from 'react-icons/fa';

// Importe suas imagens aqui (ajuste os caminhos conforme necessário)
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

// Tipos de categoria para evitar erros de digitação
const CATEGORIAS = {
  TODOS: 'todos',
  COMBOS: 'combos',
  HAMBURGUERS: 'hamburguers',
  ACOMPANHAMENTOS: 'acompanhamentos',
  BEBIDAS: 'bebidas'
};

// Função para normalizar texto (remover acentos e converter para minúsculas)
const normalizarTexto = (texto) => {
  return texto
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
};

// Dados do cardápio com destaques
const cardapio = [
  // Combos (destaque)
  {
    id: 1,
    name: 'Combo Família',
    price: 'R$ 60,00',
    desc: '3 hamburguers + 2 porções de batata grande + 3 refrigerantes 350ml.',
    icon: <FaHamburger className="text-2xl text-white/80" />,
    image: combo3,
    categoria: CATEGORIAS.COMBOS,
    destaque: true,
    maisVendido: true
  },
  {
    id: 2,
    name: 'Combo Duplo',
    price: 'R$ 45,00',
    desc: '2 hamburguers + 1 porção de batata grande + 2 refrigerantes 350ml.',
    icon: <FaHamburger className="text-2xl text-white/80" />,
    image: combo2,
    categoria: CATEGORIAS.COMBOS,
    maisVendido: true
  },
  {
    id: 3,
    name: 'Combo Individual',
    price: 'R$ 35,00',
    desc: '1 hamburguer + 1 batata frita + 1 refrigerante 350ml.',
    icon: <FaHamburger className="text-2xl text-white/80" />,
    image: combo1,
    categoria: CATEGORIAS.COMBOS
  },

  // Hambúrguers (destaque)
  {
    id: 4,
    name: 'Cheio de Fome',
    price: 'R$ 28,00',
    desc: 'Pão com gergelim, 2 carnes, molho especial, tomate, alface e maionese verde.',
    icon: <FaHamburger className="text-2xl text-white/80" />,
    image: CheioDeFome,
    categoria: CATEGORIAS.HAMBURGUERS,
    destaque: true
  },
  {
    id: 5,
    name: 'Tradicional',
    price: 'R$ 22,00',
    desc: 'Pão comum, carne, tomate, alface e maionese verde.',
    icon: <FaHamburger className="text-2xl text-white/80" />,
    image: tradicional,
    categoria: CATEGORIAS.HAMBURGUERS
  },
  {
    id: 6,
    name: 'Colosso de Frango',
    price: 'R$ 30,00',
    desc: 'Pão francês, frango, picles, tomate, alface e molho especial.',
    icon: <FaHamburger className="text-2xl text-white/80" />,
    image: colosso,
    categoria: CATEGORIAS.HAMBURGUERS,
    maisVendido: true
  },
  {
    id: 7,
    name: 'Boca Nervosa',
    price: 'R$ 29,00',
    desc: 'Pão australiano, carne, molho cheddar, maionese verde e picles.',
    icon: <FaHamburger className="text-2xl text-white/80" />,
    image: bocaNervosa,
    categoria: CATEGORIAS.HAMBURGUERS
  },
  {
    id: 8,
    name: 'Frango Especial',
    price: 'R$ 23,00',
    desc: 'Pão com gergelim, frango, cebola caramelizada e molho cheddar.',
    icon: <FaHamburger className="text-2xl text-white/80" />,
    image: frango,
    categoria: CATEGORIAS.HAMBURGUERS
  },
  {
    id: 9,
    name: 'Big Burguer',
    price: 'R$ 33,00',
    desc: 'Pão com gergelim, carne, queijo, tomate, alface e molho especial.',
    icon: <FaHamburger className="text-2xl text-white/80" />,
    image: BigBurguer,
    categoria: CATEGORIAS.HAMBURGUERS,
    maisVendido: true
  },

  // Acompanhamentos
  {
    id: 10,
    name: 'Batata Média',
    price: 'R$ 15,00',
    desc: 'Batata frita crocante, porção média.',
    icon: <FaBacon className="text-2xl text-white/80" />,
    image: fritasMedia,
    categoria: CATEGORIAS.ACOMPANHAMENTOS
  },
  {
    id: 11,
    name: 'Batata com Bacon e Cheddar',
    price: 'R$ 25,00',
    desc: 'Batata frita com bacon crocante e molho cheddar cremoso.',
    icon: <FaBacon className="text-2xl text-white/80" />,
    image: fritasCheddar,
    categoria: CATEGORIAS.ACOMPANHAMENTOS,
    maisVendido: true
  },
  {
    id: 12,
    name: 'Maionese Verde (250ml)',
    price: 'R$ 10,00',
    desc: 'Maionese verde artesanal para acompanhar seus lanches.',
    icon: <FaLeaf className="text-2xl text-white/80" />,
    image: maioverde,
    categoria: CATEGORIAS.ACOMPANHAMENTOS
  },

  // Bebidas
  {
    id: 13,
    name: 'Coca-Cola 2L',
    price: 'R$ 15,00',
    desc: 'Garrafa 2 litros.',
    icon: <FaGlassCheers className="text-2xl text-white/80" />,
    image: coca2l,
    categoria: CATEGORIAS.BEBIDAS
  },
  {
    id: 14,
    name: 'Guaraná 2L',
    price: 'R$ 12,00',
    desc: 'Garrafa 2 litros.',
    icon: <FaGlassCheers className="text-2xl text-white/80" />,
    image: guarana2l,
    categoria: CATEGORIAS.BEBIDAS
  },
  {
    id: 15,
    name: 'Coca-Cola Lata',
    price: 'R$ 4,00',
    desc: 'Lata 350ml.',
    icon: <FaGlassCheers className="text-2xl text-white/80" />,
    image: coca,
    categoria: CATEGORIAS.BEBIDAS,
    maisVendido: true
  },
  {
    id: 16,
    name: 'Guaraná Lata',
    price: 'R$ 3,50',
    desc: 'Lata 350ml.',
    icon: <FaGlassCheers className="text-2xl text-white/80" />,
    image: guarana,
    categoria: CATEGORIAS.BEBIDAS
  },
  {
    id: 17,
    name: 'Água Mineral',
    price: 'R$ 3,00',
    desc: 'Garrafa 500ml.',
    icon: <FaGlassCheers className="text-2xl text-white/80" />,
    image: agua,
    categoria: CATEGORIAS.BEBIDAS
  }
];

// Componente de Item do Cardápio
const CardapioItem = ({ item, onAddToCart }) => {
  return (
    <div 
      className={`bg-white/5 rounded-lg border transition-all relative overflow-hidden group ${
        item.destaque ? 'border-2 border-yellow-400' : 'border-white/10 hover:border-yellow-400/30'
      }`}
      aria-labelledby={`item-${item.id}-title`}
    >
      {/* Badges de destaque */}
      {item.destaque && (
        <div className="absolute top-2 left-2 bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-bold z-10 flex items-center gap-1">
          <FaStar size={10} /> Destaque
        </div>
      )}
      {item.maisVendido && !item.destaque && (
        <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold z-10 flex items-center gap-1">
          <FaFire size={10} /> Mais Vendido
        </div>
      )}

      <div className="relative pt-[100%]">
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
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h4 id={`item-${item.id}-title`} className="font-bold text-white truncate">
            {item.name}
          </h4>
          <div className="text-white/80" aria-hidden="true">
            {item.icon}
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-yellow-400 font-bold">
            {item.price}
          </span>
          <button
            onClick={() => onAddToCart(item)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all active:scale-95 flex items-center gap-1 ${
              item.destaque ? 'bg-yellow-400 text-black hover:bg-yellow-500' : 'bg-white/10 text-white hover:bg-white/20'
            }`}
            aria-label={`Adicionar ${item.name} ao carrinho`}
          >
            <FaPlus size={10} /> Adicionar
          </button>
        </div>
      </div>
    </div>
  );
};

// Componente principal
export default function Cardapio() {
  const [carrinho, setCarrinho] = useState(() => {
    try {
      const carrinhoSalvo = localStorage.getItem('carrinho');
      return carrinhoSalvo ? JSON.parse(carrinhoSalvo) : [];
    } catch (error) {
      console.error("Erro ao carregar carrinho:", error);
      return [];
    }
  });

  const [carrinhoAberto, setCarrinhoAberto] = useState(false);
  const [categoriaAtiva, setCategoriaAtiva] = useState(CATEGORIAS.COMBOS);
  const [searchTerm, setSearchTerm] = useState('');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Persistência do carrinho
  useEffect(() => {
    try {
      localStorage.setItem('carrinho', JSON.stringify(carrinho));
    } catch (error) {
      console.error("Erro ao salvar carrinho:", error);
    }
  }, [carrinho]);

  // Funções memoizadas
  const adicionarAoCarrinho = useCallback((item) => {
    if (carrinho.length >= 15) {
      alert('Limite de 15 itens no carrinho atingido!');
      return;
    }
    setCarrinho(prev => [...prev, { ...item, uniqueId: Date.now() }]);
  }, [carrinho.length]);

  const removerDoCarrinho = useCallback((uniqueId) => {
    setCarrinho(prev => prev.filter((item) => item.uniqueId !== uniqueId));
  }, []);

  const calcularTotal = useCallback(() => {
    return carrinho.reduce((total, item) => {
      const preco = parseFloat(item.price.replace('R$ ', '').replace(',', '.'));
      return total + preco;
    }, 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }, [carrinho]);

  const gerarLinkWhatsApp = useCallback(() => {
    if (carrinho.length === 0) {
      alert('Seu carrinho está vazio! Adicione itens antes de finalizar.');
      return;
    }

    const numeroWhatsApp = '5511949981809'; // Substitua pelo seu número
    const mensagem = `Olá, gostaria de fazer um pedido:\n\n${carrinho
      .map((item) => `➤ ${item.name} - ${item.price}`)
      .join('\n')}\n\n*Total: ${calcularTotal()}*\n\n*Informações de entrega:*\nNome:\nEndereço:\nReferência:\nForma de Pagamento:`;
    
    window.open(`https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`, '_blank');
  }, [carrinho, calcularTotal]);

  // Filtros otimizados
  const itensFiltrados = useMemo(() => {
    let filtrados = categoriaAtiva === CATEGORIAS.TODOS 
      ? cardapio 
      : cardapio.filter(item => item.categoria === categoriaAtiva);

    if (searchTerm) {
      const termoNormalizado = normalizarTexto(searchTerm);
      filtrados = filtrados.filter(item =>
        normalizarTexto(item.name).includes(termoNormalizado) ||
        normalizarTexto(item.desc).includes(termoNormalizado)
      );
    }

    return filtrados;
  }, [categoriaAtiva, searchTerm]);

  const limparFiltros = useCallback(() => {
    setSearchTerm('');
    setCategoriaAtiva(CATEGORIAS.TODOS);
  }, []);

  // Itens em destaque
  const destaques = useMemo(() => 
    cardapio.filter(item => item.destaque), []);

  return (
    <section id="cardapio" className="py-12 bg-gradient-to-b from-black to-black/90">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center">
        {/* Título Principal */}
        <header className="w-full text-center mb-8">
          <h2 className="text-3xl font-bold text-yellow-400 mb-1">Cardápio Digital</h2>
          <p className="text-white/70 text-sm">Selecione seus itens favoritos</p>
          <div className="w-20 h-0.5 bg-yellow-400 mx-auto mt-2" aria-hidden="true"></div>
        </header>

        {/* Destaques */}
        {destaques.length > 0 && (
          <div className="w-full mb-8">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <FaStar className="text-yellow-400" /> Destaques
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {destaques.map((item) => (
                <CardapioItem 
                  key={`destaque-${item.id}`} 
                  item={item}
                  onAddToCart={adicionarAoCarrinho}
                />
              ))}
            </div>
          </div>
        )}

        {/* Barra de Pesquisa e Filtros */}
        <div className="w-full mb-6">
          <div className="relative max-w-xl mx-auto">
            <label htmlFor="search-input" className="sr-only">Buscar item</label>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400 text-sm" />
            </div>
            <input
              id="search-input"
              type="text"
              placeholder="Buscar item (ex: agua, hamburguer, coca)..."
              className="block w-full pl-9 pr-3 py-2 text-sm bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-yellow-400 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Buscar itens no cardápio"
            />
            <button 
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="md:hidden absolute right-2 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white text-sm"
              aria-label="Filtrar itens"
              aria-expanded={mobileFiltersOpen}
            >
              <FaFilter />
            </button>
          </div>
        </div>

        {/* Filtros por Categoria */}
        <nav className={`${mobileFiltersOpen ? 'block' : 'hidden'} md:block w-full mb-8`}>
          <div className="flex flex-wrap justify-center gap-2">
            {[CATEGORIAS.COMBOS, CATEGORIAS.HAMBURGUERS, CATEGORIAS.ACOMPANHAMENTOS, CATEGORIAS.BEBIDAS].map((categoria) => (
              <button
                key={categoria}
                onClick={() => setCategoriaAtiva(categoria)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  categoriaAtiva === categoria 
                    ? 'bg-yellow-400 text-black shadow-md' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
                aria-current={categoriaAtiva === categoria ? 'page' : undefined}
              >
                {categoria === CATEGORIAS.COMBOS && 'Combos'}
                {categoria === CATEGORIAS.HAMBURGUERS && 'Hambúrguers'}
                {categoria === CATEGORIAS.ACOMPANHAMENTOS && 'Acompanhamentos'}
                {categoria === CATEGORIAS.BEBIDAS && 'Bebidas'}
              </button>
            ))}
          </div>
        </nav>

        {/* Mensagem quando não há resultados */}
        {itensFiltrados.length === 0 && (
          <div className="w-full text-center py-12">
            <p className="text-white/70 text-lg mb-3">Nenhum item encontrado</p>
            <button
              onClick={limparFiltros}
              className="text-yellow-400 hover:text-yellow-300 text-xs font-medium"
            >
              Limpar filtros
            </button>
          </div>
        )}

        {/* Grid de Itens do Cardápio */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {itensFiltrados.map((item) => (
            <CardapioItem 
              key={item.id} 
              item={item}
              onAddToCart={adicionarAoCarrinho}
            />
          ))}
        </div>
      </div>

      {/* Carrinho Flutuante */}
      <div className="fixed bottom-4 right-4 z-50 transition-all duration-200">
        {carrinhoAberto ? (
          <div className="bg-black/95 backdrop-blur-md rounded-lg shadow-lg border border-yellow-400/20 w-80 max-h-[80vh] flex flex-col">
            <div className="p-4 flex-grow overflow-hidden flex flex-col">
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
                  aria-label="Fechar carrinho"
                >
                  <FaTimes />
                </button>
              </div>

              {carrinho.length > 0 ? (
                <>
                  <div className="flex-grow overflow-y-auto mb-4 space-y-2 pr-1">
                    {carrinho.map((item) => (
                      <div key={item.uniqueId} className="flex items-center justify-between gap-2 bg-white/5 p-2 rounded-md">
                        <div className="flex-1 min-w-0">
                          <p className="text-white text-sm font-medium truncate">{item.name}</p>
                          <p className="text-yellow-400 text-xs">{item.price}</p>
                        </div>
                        <button
                          onClick={() => removerDoCarrinho(item.uniqueId)}
                          className="text-red-400 hover:text-red-300 transition text-xs p-1"
                          aria-label={`Remover ${item.name} do carrinho`}
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
                    aria-label="Finalizar pedido via WhatsApp"
                  >
                    <FaWhatsapp className="text-base" /> Finalizar Pedido
                  </button>
                </>
              ) : (
                <div className="text-center py-6 flex-grow flex flex-col justify-center">
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
            className="bg-yellow-400 hover:bg-yellow-500 text-black p-4 rounded-full transition-all relative shadow-lg active:scale-95"
            aria-label={`Abrir carrinho (${carrinho.length} itens)`}
          >
            <FaShoppingCart className="text-lg" />
            {carrinho.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                {carrinho.length}
              </span>
            )}
          </button>
        )}
      </div>
    </section>
  );
}