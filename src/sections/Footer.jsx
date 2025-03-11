export default function Footer() {
  return (
    <footer className="relative py-8 bg-black/30 text-white text-center backdrop-blur-sm border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-sm md:text-base text-white/80">
          © 2025 Hamburguer da Deby. Todos os direitos reservados.
        </p>
        <p className="text-xs md:text-sm text-white/60 mt-2">
          Feito com ❤️ por{" "}
          <a
            href="https://connectionstree.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/80 transition-colors"
          >
            connectionstree
          </a>
        </p>
      </div>
    </footer>
  );
}