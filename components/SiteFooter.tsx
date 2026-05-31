export function SiteFooter() {
  return (
    <footer className="bg-black py-14 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 md:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <p className="text-2xl font-black">Movimiento Universitario 20-25</p>
          <p className="mt-4 max-w-xl leading-7 text-white/75">
            Movimiento Universitario 20-25. Fuerza gremial de la Universidad de
            Panamá. Dedicados a la defensa del bien público social y la
            excelencia académica.
          </p>
          <p className="mt-6 text-sm text-white/60">
            © 2026 Movimiento Universitario 20-25. Plataforma de difusión
            política e informativa independiente. Todos los derechos reservados.
          </p>
        </div>
        <nav aria-label="Enlaces políticos">
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#a03d2b]">
            Enlaces Políticos
          </h3>
          <div className="mt-5 grid gap-3">
            {[
              { href: "/#documentos", label: "Manifiesto" },
              { href: "/#pilares", label: "Pilares" },
              { href: "/#documentos", label: "Circulares" }
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-white/80 transition-all duration-300 hover:text-[#a03d2b] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-4 focus:ring-offset-black"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
        <nav aria-label="Enlaces del campus">
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#a03d2b]">
            Enlaces del Campus
          </h3>
          <div className="mt-5 grid gap-3">
            {["Facultades", "Centros Regionales", "Gaceta Universitaria"].map(
              (link) => (
                <a
                  key={link}
                  href="#"
                  className="text-sm font-semibold text-white/80 transition-all duration-300 hover:text-[#a03d2b] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-4 focus:ring-offset-black"
                >
                  {link}
                </a>
              )
            )}
          </div>
        </nav>
      </div>
    </footer>
  );
}
