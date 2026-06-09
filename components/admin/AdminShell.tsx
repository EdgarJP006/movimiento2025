import { signOut } from "@/app/admin/actions";

export function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#111827]">
      <header className="border-b border-black/10 bg-white">
        <nav
          aria-label="Navegación de administración"
          className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8"
        >
          <a href="/admin/galeria" className="text-xl font-black text-black">
            Admin Movimiento 2025
          </a>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/admin/galeria"
              className="text-sm font-bold text-[#111827] transition-all duration-300 hover:text-[#a03d2b]"
            >
              Galería
            </a>
            <a
              href="/admin/actividades"
              className="text-sm font-bold text-[#111827] transition-all duration-300 hover:text-[#a03d2b]"
            >
              Actividades
            </a>
            <a
              href="/"
              className="text-sm font-bold text-[#111827] transition-all duration-300 hover:text-[#a03d2b]"
            >
              Sitio público
            </a>
            <form action={signOut}>
              <button
                type="submit"
                className="bg-[#111827] px-4 py-2 text-sm font-black text-white transition-all duration-300 hover:bg-[#a03d2b]"
              >
                Salir
              </button>
            </form>
          </div>
        </nav>
      </header>
      {children}
    </main>
  );
}
