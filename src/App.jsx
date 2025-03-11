import VideoBackground from './components/VideoBackground'; // Importe o componente do vídeo de fundo
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Cardapio from './sections/Cardapio';
import Localizacao from './sections/Localizacao';
import Footer from './sections/Footer';

export default function App() {
  return (
    <div className="font-sans">
      {/* Vídeo de fundo fixo */}
      <VideoBackground />

      {/* Navbar */}
      <Navbar />

      {/* Seções */}
      <Hero />
      <Cardapio />
      <Localizacao />
      <Footer />
    </div>
  );
}