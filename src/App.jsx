import VideoBackground from "./components/VideoBackground";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Cardapio from "./sections/Cardapio";
import Localizacao from "./sections/Localizacao";
import Footer from "./sections/Footer";
import BackToTop from "./components/BackToTop"; 



export default function App() {
  return (
    <div className="font-sans">
      <VideoBackground />
      <Navbar />
      <Hero />
      <Cardapio />
      <Localizacao />
      <Footer />
      <BackToTop />
      
    </div>
  );
}
