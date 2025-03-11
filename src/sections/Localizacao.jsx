import { FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa";

export default function Localizacao() {
  return (
    <section id="localizacao" className="py-16 bg-black/10 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
        {/* Título da Seção */}
        <div className="w-full flex justify-center mb-20">
          <h3 className="text-4xl font-bold text-center text-white">
            Localização
          </h3>
        </div>

        {/* Container do Mapa e Informações */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mapa Integrado */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.6489920633073!2d-46.77750952457867!3d-23.65253946464413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cfadbf5a7f1077%3A0xc3bde3c2c10f4c4b!2sTabo%C3%A3o%20da%20Serra%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1710112234567!5m2!1spt-BR!2sbr"
              width="100%"
              height="400"
              className="border-0"
              allowFullScreen
              loading="lazy"
              title="Localização de Taboão da Serra"
            ></iframe>
          </div>

          {/* Informações de Contato */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-white/10">
            <h4 className="text-2xl font-bold mb-8 text-white">
              Informações de Contato
            </h4>

            {/* Endereço */}
            <div className="flex items-center gap-4 mb-8">
              <FaMapMarkerAlt className="text-white/80 text-2xl" />
              <div>
                <p className="font-bold text-white">Taboão da Serra</p>
                <p className="text-white/80">São Paulo</p>
              </div>
            </div>

            {/* Telefone */}
            <div className="flex items-center gap-4 mb-8">
              <FaPhone className="text-white/80 text-2xl" />
              <div>
                <p className="font-bold text-white">Telefone</p>
                <p className="text-white/80">(11) 94998-1809</p>
              </div>
            </div>

            {/* Horário de Funcionamento */}
            <div className="flex items-center gap-4">
              <FaClock className="text-white/80 text-2xl" />
              <div>
                <p className="font-bold text-white">Horário de Funcionamento</p>
                <p className="text-white/80">Terça a Domingo: 18h - 23h</p>
                <p className="text-white/80">Segunda: Fechado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
