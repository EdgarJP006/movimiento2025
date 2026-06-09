import { BrandLogo } from "./BrandLogo";
import { MobileMenu } from "./MobileMenu";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/#pilares", label: "Pilares" },
  { href: "/galeria", label: "Galería" },
  { href: "/actividades", label: "Actividades" },
  { href: "/#contacto", label: "Contacto" }
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur">
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8"
      >
        <a href="/" className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center bg-white">
            <BrandLogo className="h-12 w-12" />
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
        <MobileMenu links={navLinks} />
      </nav>
    </header>
  );
}
