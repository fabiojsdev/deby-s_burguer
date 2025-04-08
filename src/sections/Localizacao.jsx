import { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaClock, FaWhatsapp, FaCar, FaMotorcycle } from "react-icons/fa";

export default function Localizacao() {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  return (
    <section id="localizacao" className="py-20 bg-gradient-to-b from-black/80 to-black/90">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
        {/* Título da Seção */}
        <div className="w-full flex justify-center mb-16">
          <h3 className="text-4xl font-bold text-center text-white relative inline-block">
            <span className="relative z-10">Onde nos encontrar</span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 transform translate-y-1 z-0"></span>
          </h3>
        </div>

        {/* Container do Mapa e Informações */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Mapa Integrado */}
          <div className="relative bg-white/5 rounded-xl shadow-2xl overflow-hidden border border-white/10 h-[400px] lg:h-[500px]">
            {!isMapLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <div className="animate-pulse text-white">Carregando mapa...</div>
              </div>
            )}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.6489920633073!2d-46.77750952457867!3d-23.65253946464413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cfadbf5a7f1077%3A0xc3bde3c2c10f4c4b!2sTabo%C3%A3o%20da%20Serra%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1710112234567!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              className="border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização de Taboão da Serra"
              onLoad={() => setIsMapLoaded(true)}
            ></iframe>
          </div>

          {/* Informações de Contato */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-white/10">
            <h4 className="text-2xl font-bold mb-8 text-white relative pb-2">
              <span className="relative z-10">Informações</span>
             </h4>

            <div className="space-y-6">
              {/* Endereço */}
              <div className="flex items-start gap-4">
                <div className="p-2 bg-yellow-400/20 rounded-full">
                  <FaMapMarkerAlt className="text-yellow-400 text-xl" />
                </div>
                <div>
                  <p className="font-bold text-white">Endereço</p>
                  <p className="text-white/80">Taboão da Serra, São Paulo</p>
                  <p className="text-white/60 text-sm mt-1">Próximo à Praça Central</p>
                </div>
              </div>

              {/* Telefone */}
              <div className="flex items-start gap-4">
                <div className="p-2 bg-yellow-400/20 rounded-full">
                  <FaPhone className="text-yellow-400 text-xl" />
                </div>
                <div>
                  <p className="font-bold text-white">Contato</p>
                  <a href="tel:+5511949981809" className="text-white/80 hover:text-yellow-400 transition block">
                    (11) 94998-1809
                  </a>
                  <div className="mt-3 flex gap-2">
                    <a 
                      href="https://wa.me/5511949981809" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all"
                    >
                      <FaWhatsapp /> WhatsApp
                    </a>
                    <a 
                      href="tel:+5511949981809" 
                      className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium transition-all"
                    >
                      <FaPhone /> Ligar
                    </a>
                  </div>
                </div>
              </div>

              {/* Horário */}
              <div className="flex items-start gap-4">
                <div className="p-2 bg-yellow-400/20 rounded-full">
                  <FaClock className="text-yellow-400 text-xl" />
                </div>
                <div>
                  <p className="font-bold text-white">Horário de Funcionamento</p>
                  <div className="text-white/80 space-y-1">
                    <p>Terça a Quinta: 18h - 23h</p>
                    <p>Sexta e Sábado: 18h - 00h</p>
                    <p>Domingo: 18h - 22h</p>
                    <p className="text-yellow-400/80">Segunda: Fechado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}