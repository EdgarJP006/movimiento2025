const values = [
  {
    title: "Transparencia",
    description:
      "Comunicación clara, rendición de cuentas y participación responsable en cada decisión institucional."
  },
  {
    title: "Liderazgo",
    description:
      "Representación firme, dialogante y orientada a resultados para docentes y administrativos."
  },
  {
    title: "Compromiso Académico",
    description:
      "Impulso permanente a la calidad universitaria, la investigación y el servicio público."
  }
];

const pillars = [
  {
    title: "Desarrollo Docente",
    description: "Capacitación, estabilidad laboral y concursos justos."
  },
  {
    title: "Gestión Administrativa",
    description:
      "Modernización de procesos y dignificación del servidor público universitario."
  },
  {
    title: "Fortalecimiento Institucional",
    description:
      "Transparencia en la gestión y vinculación con la sociedad."
  }
];

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#propuestas", label: "Propuestas" },
  { href: "#contacto", label: "Contacto" }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#111827]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur">
        <nav
          aria-label="Navegacion principal"
          className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8"
        >
          <a href="#inicio" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center border-2 border-[#a03d2b] bg-white text-sm font-black text-[#a03d2b]">
              20
            </span>
            <span className="text-sm font-black uppercase tracking-wide text-black sm:text-base">
              Movimiento 20-25
            </span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-[#111827] transition-all duration-300 hover:text-[#a03d2b] focus:outline-none focus:ring-2 focus:ring-[#a03d2b] focus:ring-offset-4"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <section
        id="inicio"
        className="relative isolate overflow-hidden bg-white pt-28 sm:pt-32"
      >
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(135deg,rgba(160,61,43,0.08)_1px,transparent_1px),linear-gradient(45deg,rgba(17,24,39,0.06)_1px,transparent_1px)] bg-[size:34px_34px]" />
        <div className="absolute -right-28 top-16 -z-10 h-80 w-80 rotate-12 bg-[#a03d2b] opacity-95 sm:h-[30rem] sm:w-[30rem]" />
        <div className="absolute right-8 top-36 -z-10 hidden h-44 w-44 border-[18px] border-black bg-white lg:block" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-24 pt-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-28">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex border-l-4 border-[#a03d2b] bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#a03d2b] shadow-sm">
              Universidad de Panama
            </p>
            <h1 className="text-5xl font-black leading-[0.95] tracking-normal text-black sm:text-6xl lg:text-7xl">
              Movimiento{" "}
              <span className="block text-[#a03d2b]">20-25</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#111827] sm:text-xl">
              Compromiso, institucionalidad y transformación académica en la
              Universidad de Panamá.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#propuestas"
                className="inline-flex items-center justify-center bg-[#a03d2b] px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-[#832f21] focus:outline-none focus:ring-2 focus:ring-[#a03d2b] focus:ring-offset-4"
              >
                Conoce Nuestras Propuestas
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center border-2 border-black bg-white px-6 py-4 text-sm font-bold text-black transition-all duration-300 hover:border-[#a03d2b] hover:text-[#a03d2b] focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-4"
              >
                Únete al Movimiento
              </a>
            </div>
          </div>

          <div className="relative min-h-[22rem] lg:min-h-[30rem]" aria-hidden="true">
            <div className="absolute left-0 top-8 h-64 w-64 border-[18px] border-black bg-white shadow-2xl sm:h-80 sm:w-80" />
            <div className="absolute left-16 top-24 h-64 w-64 bg-[#a03d2b] shadow-2xl sm:left-24 sm:h-80 sm:w-80" />
            <div className="absolute left-8 top-16 flex h-64 w-64 flex-col justify-between bg-white p-7 shadow-2xl sm:h-80 sm:w-80">
              <span className="text-sm font-black uppercase tracking-[0.28em] text-[#a03d2b]">
                Movimiento
              </span>
              <span className="text-7xl font-black leading-none text-black sm:text-8xl">
                20
                <span className="block text-[#a03d2b]">25</span>
              </span>
              <span className="h-2 w-24 bg-black" />
            </div>
          </div>
        </div>
      </section>

      <section id="quienes-somos" className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#a03d2b]">
                Quiénes somos
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-normal text-black sm:text-5xl">
                Representación con visión universitaria.
              </h2>
            </div>
            <div>
              <p className="text-lg leading-8 text-[#111827]">
                Somos una agrupación política, gremial y de servidores docentes
                y administrativos dedicada a defender los derechos gremiales,
                fortalecer la institucionalidad y promover el progreso integral
                de la Universidad de Panamá.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {values.map((value) => (
                  <article
                    key={value.title}
                    className="border border-[#a03d2b] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <h3 className="text-lg font-black text-black">
                      {value.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#111827]">
                      {value.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="propuestas" className="bg-[#F9FAFB] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#a03d2b]">
              Propuestas
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-normal text-black sm:text-5xl">
              Tres pilares para una universidad más fuerte.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pillars.map((pillar, index) => (
              <article
                key={pillar.title}
                className="group border-t-4 border-black bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#a03d2b] hover:shadow-xl"
              >
                <span className="text-sm font-black text-[#a03d2b]">
                  0{index + 1}
                </span>
                <h3 className="mt-6 text-2xl font-black text-black">
                  {pillar.title}
                </h3>
                <p className="mt-4 leading-7 text-[#111827]">
                  {pillar.description}
                </p>
                <span className="mt-8 block h-1 w-12 bg-black transition-all duration-300 group-hover:w-20 group-hover:bg-[#a03d2b]" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden bg-black lg:grid-cols-[0.9fr_1.1fr]">
            <div className="p-8 text-white sm:p-10 lg:p-12">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#a03d2b]">
                Redes sociales
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-normal sm:text-5xl">
                Sigue los canales oficiales del Movimiento 20-25.
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                Mantente informado sobre comunicados, actividades y propuestas
                desde nuestro Instagram oficial.
              </p>
              <a
                href="https://www.instagram.com/movimiento2025"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center justify-center border-2 border-[#a03d2b] px-6 py-4 text-sm font-black text-white transition-all duration-300 hover:bg-[#a03d2b] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-4 focus:ring-offset-black"
              >
                @movimiento2025
              </a>
            </div>

            <form className="bg-[#F9FAFB] p-8 sm:p-10 lg:p-12">
              <h3 className="text-2xl font-black text-black">
                Súmate a la lista de difusión
              </h3>
              <div className="mt-7 grid gap-5">
                <label className="block">
                  <span className="text-sm font-bold text-[#111827]">
                    Nombre
                  </span>
                  <input
                    type="text"
                    name="nombre"
                    autoComplete="name"
                    required
                    className="mt-2 w-full border border-black/20 bg-white px-4 py-3 text-[#111827] outline-none transition-all duration-300 focus:border-[#a03d2b] focus:ring-2 focus:ring-[#a03d2b]/25"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-bold text-[#111827]">
                    Correo
                  </span>
                  <input
                    type="email"
                    name="correo"
                    autoComplete="email"
                    required
                    className="mt-2 w-full border border-black/20 bg-white px-4 py-3 text-[#111827] outline-none transition-all duration-300 focus:border-[#a03d2b] focus:ring-2 focus:ring-[#a03d2b]/25"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-bold text-[#111827]">
                    Facultad/Extensión
                  </span>
                  <input
                    type="text"
                    name="facultad"
                    required
                    className="mt-2 w-full border border-black/20 bg-white px-4 py-3 text-[#111827] outline-none transition-all duration-300 focus:border-[#a03d2b] focus:ring-2 focus:ring-[#a03d2b]/25"
                  />
                </label>
              </div>
              <button
                type="submit"
                className="mt-7 w-full bg-[#a03d2b] px-6 py-4 text-sm font-black text-white transition-all duration-300 hover:bg-[#832f21] focus:outline-none focus:ring-2 focus:ring-[#a03d2b] focus:ring-offset-4"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-black py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <p className="text-lg font-black">Movimiento 20-25</p>
            <p className="mt-2 text-sm text-white/70">
              © 2026 Movimiento 20-25 - Universidad de Panamá. Sitio web
              informativo.
            </p>
          </div>
          <nav aria-label="Enlaces del pie de pagina" className="flex gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-white/80 transition-all duration-300 hover:text-[#a03d2b] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-4 focus:ring-offset-black"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </main>
  );
}
