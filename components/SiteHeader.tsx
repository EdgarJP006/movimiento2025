const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/#pilares", label: "Pilares" },
  { href: "/galeria", label: "Galería" },
  { href: "/actividades", label: "Actividades" },
  { href: "/#afiliacion", label: "Afiliación" }
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur">
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8"
      >
        <a href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center border-2 border-[#a03d2b] bg-white text-sm font-black text-[#a03d2b]">
            20
          </span>
          <span className="text-sm font-black uppercase tracking-wide text-black sm:text-base">
            Movimiento Universitario 2025
          </span>
        </a>
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-bold text-[#111827] transition-all duration-300 hover:text-[#a03d2b] focus:outline-none focus:ring-2 focus:ring-[#a03d2b] focus:ring-offset-4"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
