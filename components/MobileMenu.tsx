"use client";

import { useState } from "react";

type NavLink = {
  href: string;
  label: string;
};

export function MobileMenu({ links }: { links: NavLink[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
        className="inline-flex h-11 w-11 items-center justify-center border border-black/20 bg-white text-black transition-all duration-300 hover:border-[#a03d2b] hover:text-[#a03d2b] focus:outline-none focus:ring-2 focus:ring-[#a03d2b] focus:ring-offset-4"
      >
        <span className="sr-only">{isOpen ? "Cerrar menú" : "Abrir menú"}</span>
        <span className="flex h-5 w-6 flex-col justify-between">
          <span
            className={`h-0.5 w-full bg-current transition-all duration-300 ${
              isOpen ? "translate-y-[9px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-full bg-current transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-full bg-current transition-all duration-300 ${
              isOpen ? "-translate-y-[9px] -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      {isOpen ? (
        <div className="absolute inset-x-0 top-full border-b border-black/10 bg-white px-5 py-4 shadow-lg sm:px-6">
          <nav aria-label="Navegación móvil" className="grid gap-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="border-l-4 border-transparent px-4 py-3 text-sm font-black uppercase tracking-wide text-[#111827] transition-all duration-300 hover:border-[#a03d2b] hover:bg-[#F8FAFC] hover:text-[#a03d2b] focus:outline-none focus:ring-2 focus:ring-[#a03d2b] focus:ring-offset-2"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
