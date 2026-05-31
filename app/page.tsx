const doctrineValues = [
  {
    title: "Autonomía Universitaria Irrestricta",
    description:
      "Defensa férrea de nuestra soberanía académica y administrativa frente a presiones externas."
  },
  {
    title: "Dignidad del Servidor Público",
    description:
      "Estabilidad laboral, concursos de cátedra transparentes y escalafón justo para el sector administrativo."
  },
  {
    title: "Transparencia de Gestión",
    description:
      "Rendición de cuentas vertical y erradicación del clientelismo institucional."
  }
];

const manifestoPillars = [
  {
    title: "Reconstrucción de la Confianza Institucional",
    description:
      "Frente a las percepciones que afectan la imagen de la primera casa de estudios, impulsamos un frente gremial junto a asociaciones docentes para recuperar la legitimidad histórica de la UP mediante auditorías sociales."
  },
  {
    title: "Modernización y Transformación Administrativa",
    description:
      "Dignificación del servidor público administrativo. Automatización y descentralización de los procesos en los Centros Regionales Universitarios para agilizar la gestión presupuestaria."
  },
  {
    title: "Excelencia e Investigación Pertinente",
    description:
      "Financiamiento directo a la investigación científica aplicada. Actualización del Reglamento General de Estudios de Postgrado y fomento de publicaciones indexadas con impacto global."
  },
  {
    title: "Vinculación Social y Extensión",
    description:
      "Retornar a los orígenes del humanismo universitario. Alianzas estratégicas con comunidades vulnerables y transferencia de conocimiento para resolver las crisis estructurales del país."
  }
];

const timeline = [
  {
    title: "Fortalecimiento de Juntas Directivas Regionales",
    description:
      "Consolidación del liderazgo en Azuero, Veraguas, Colón y extensiones universitarias bajo principios de descentralización."
  },
  {
    title: "Capacitación y Talleres de Reforzamiento",
    description:
      "Programas de nivelación académica e inclusión para la inserción transparente de nuevos profesionales al sistema de cátedras."
  },
  {
    title: "Congreso Nacional de Servidores Universitarios",
    description:
      "Espacio de debate masivo para la unificación del pliego de peticiones gremiales ante el Consejo General Universitario."
  }
];

const documents = [
  "Comunicado Conjunto 1",
  "Comunicado Conjunto 2",
  "Comunicado Conjunto 3"
];

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#doctrina", label: "Consigna" },
  { href: "#pilares", label: "Pilares" },
  { href: "#afiliacion", label: "Afiliación" }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#111827]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur">
        <nav
          aria-label="Navegación principal"
          className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8"
        >
          <a href="#inicio" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center border-2 border-[#a03d2b] bg-white text-sm font-black text-[#a03d2b]">
              20
            </span>
            <span className="text-sm font-black uppercase tracking-wide text-black sm:text-base">
              Movimiento Universitario 20-25
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

      <section
        id="inicio"
        className="relative isolate overflow-hidden bg-white pt-28 sm:pt-32"
      >
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(135deg,rgba(160,61,43,0.08)_1px,transparent_1px),linear-gradient(45deg,rgba(17,24,39,0.06)_1px,transparent_1px)] bg-[size:34px_34px]" />
        <div className="absolute -right-28 top-20 -z-10 h-80 w-80 rotate-12 bg-[#a03d2b] opacity-95 sm:h-[30rem] sm:w-[30rem]" />
        <div className="absolute right-8 top-36 -z-10 hidden h-44 w-44 border-[18px] border-[#111827] bg-white lg:block" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-24 pt-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-28">
          <div className="max-w-4xl">
            <p className="mb-5 inline-flex border-l-4 border-[#a03d2b] bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#a03d2b] shadow-sm">
              Universidad de Panamá
            </p>
            <h1 className="text-5xl font-black leading-[0.95] tracking-normal text-black sm:text-6xl lg:text-7xl">
              Movimiento Universitario{" "}
              <span className="block text-[#a03d2b]">20-25</span>
            </h1>
            <p className="mt-7 max-w-3xl text-xl font-bold leading-8 text-[#111827] sm:text-2xl">
              Hacia la refundación institucional, la dignificación gremial y la
              excelencia académica de la Universidad de Panamá.
            </p>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[#111827] sm:text-lg">
              Somos la fuerza viva, democrática e integradora de docentes,
              administrativos y estudiantes que defienden la educación superior
              como un bien público social y un deber inalienable del Estado. Nos
              plantamos con firmeza ante los desafíos del nuevo siglo para
              garantizar la transparencia, la equidad y el progreso científico en
              nuestra máxima casa de estudios.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#documentos"
                className="inline-flex items-center justify-center bg-[#a03d2b] px-6 py-4 text-sm font-black text-white transition-all duration-300 hover:bg-[#832f21] focus:outline-none focus:ring-2 focus:ring-[#a03d2b] focus:ring-offset-4"
              >
                Descargar Manifiesto Político
              </a>
              <a
                href="#afiliacion"
                className="inline-flex items-center justify-center border-2 border-black bg-white px-6 py-4 text-sm font-black text-black transition-all duration-300 hover:border-[#a03d2b] hover:text-[#a03d2b] focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-4"
              >
                Sumarse a la Acción
              </a>
            </div>
          </div>

          <div className="relative min-h-[22rem] lg:min-h-[32rem]" aria-hidden="true">
            <div className="absolute left-0 top-8 h-64 w-64 border-[18px] border-[#111827] bg-white shadow-2xl sm:h-80 sm:w-80" />
            <div className="absolute left-16 top-24 h-64 w-64 bg-[#a03d2b] shadow-2xl sm:left-24 sm:h-80 sm:w-80" />
            <div className="absolute left-8 top-16 flex h-64 w-64 flex-col justify-between bg-white p-7 shadow-2xl sm:h-80 sm:w-80">
              <span className="text-sm font-black uppercase tracking-[0.28em] text-[#a03d2b]">
                Manifiesto
              </span>
              <span className="text-7xl font-black leading-none text-black sm:text-8xl">
                20
                <span className="block text-[#a03d2b]">25</span>
              </span>
              <span className="h-2 w-24 bg-[#111827]" />
            </div>
          </div>
        </div>
      </section>

      <section id="doctrina" className="bg-[#F8FAFC] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#a03d2b]">
              Nuestra visión doctrinaria
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-normal text-black sm:text-5xl">
              Conciencia crítica, identidad nacional y compromiso social.
            </h2>
            <p className="mt-7 text-lg leading-8 text-[#111827]">
              Nuestra consigna se fundamenta en la conciencia crítica y la
              identidad nacional. Creemos en una universidad pública incluyente,
              multicultural y con sostenibilidad ambiental, donde el mérito
              académico y la estabilidad laboral no sean negociables.
            </p>
          </div>
          <div className="grid gap-4">
            {doctrineValues.map((value) => (
              <article
                key={value.title}
                className="border-l-4 border-[#a03d2b] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-xl font-black text-black">{value.title}</h3>
                <p className="mt-3 leading-7 text-[#111827]">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pilares" className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#a03d2b]">
              El manifiesto de los 4 pilares
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-normal text-black sm:text-5xl">
              Agenda política para la transformación universitaria.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {manifestoPillars.map((pillar, index) => (
              <article
                key={pillar.title}
                className="group border-t-4 border-[#111827] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#a03d2b] hover:shadow-[0_18px_40px_rgba(160,61,43,0.2)]"
              >
                <span className="text-sm font-black text-[#a03d2b]">
                  Pilar 0{index + 1}
                </span>
                <h3 className="mt-5 text-xl font-black text-black">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#111827]">
                  {pillar.description}
                </p>
                <span className="mt-8 block h-1 w-12 bg-[#111827] transition-all duration-300 group-hover:w-20 group-hover:bg-[#a03d2b]" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111827] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="border-l-4 border-[#a03d2b] pl-6">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#a03d2b]">
              Declaración conjunta y defensoría
            </p>
            <h2 className="mt-4 max-w-4xl text-3xl font-black tracking-normal sm:text-5xl">
              En Defensa de la Unidad y la Ética Universitaria
            </h2>
          </div>
          <div className="mt-10 grid gap-8 text-lg leading-9 text-white/85 lg:grid-cols-2">
            <p>
              Hacemos un llamado enérgico a toda la comunidad universitaria a
              vivir los procesos democráticos internos bajo los más estrictos
              códigos de ética, debate de ideas y respeto mutuo, rechazando la
              difamación y el hostigamiento. El Movimiento 20-25 trabaja
              activamente junto a las instancias de la Defensoría de los
              Universitarios para velar por un entorno de paz y libertad de
              pensamiento.
            </p>
            <p>
              No permitiremos el estancamiento de nuestra academia. La
              transformación estructural que proponemos requiere de la
              fiscalización colectiva y el compromiso de cada docente,
              estudiante y administrativo en los campus centrales y regionales.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#a03d2b]">
              Plan territorial
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-normal text-black sm:text-5xl">
              Plan de Acción en los Centros Regionales
            </h2>
          </div>
          <div className="mt-12 grid gap-0 lg:grid-cols-3">
            {timeline.map((item, index) => (
              <article
                key={item.title}
                className="relative border-l-2 border-[#a03d2b] bg-white pb-10 pl-8 lg:border-l-0 lg:border-t-2 lg:pb-0 lg:pl-0 lg:pr-8 lg:pt-8"
              >
                <span className="absolute -left-[11px] top-0 flex h-5 w-5 items-center justify-center rounded-full bg-[#a03d2b] ring-8 ring-white lg:-top-[11px] lg:left-0" />
                <span className="text-sm font-black text-[#a03d2b]">
                  Hito 0{index + 1}
                </span>
                <h3 className="mt-4 text-2xl font-black text-black">
                  {item.title}
                </h3>
                <p className="mt-4 leading-7 text-[#111827]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="documentos" className="bg-[#F8FAFC] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#a03d2b]">
              Archivo documental
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-normal text-black sm:text-5xl">
              Comunicados y Archivo Documental
            </h2>
          </div>
          <div className="mt-10 overflow-hidden border border-black/10 bg-white shadow-sm">
            {documents.map((document) => (
              <div
                key={document}
                className="grid gap-4 border-b border-black/10 p-5 transition-all duration-300 last:border-b-0 hover:bg-white md:grid-cols-[1fr_auto] md:items-center"
              >
                <p className="font-bold text-[#111827]">{document}</p>
                <a
                  href="#"
                  className="inline-flex items-center justify-center border border-[#a03d2b] px-5 py-3 text-sm font-black text-[#a03d2b] transition-all duration-300 hover:bg-[#a03d2b] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#a03d2b] focus:ring-offset-4"
                >
                  Leer PDF
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="afiliacion" className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl overflow-hidden px-5 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div className="bg-[#111827] p-8 text-white sm:p-10 lg:p-12">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#a03d2b]">
              Afiliación
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-normal sm:text-5xl">
              Súmate a la Transformación Universitaria
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/85">
              Registra tus datos para unirte a los comités de base y recibir
              nuestras circulares oficiales.
            </p>
          </div>

          <form className="bg-[#F8FAFC] p-8 sm:p-10 lg:p-12">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="text-sm font-bold text-[#111827]">
                  Nombre Completo
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
                  Correo Institucional
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
                  Facultad / Centro Regional
                </span>
                <input
                  type="text"
                  name="facultad"
                  required
                  className="mt-2 w-full border border-black/20 bg-white px-4 py-3 text-[#111827] outline-none transition-all duration-300 focus:border-[#a03d2b] focus:ring-2 focus:ring-[#a03d2b]/25"
                />
              </label>
              <label className="block">
                <span className="text-sm font-bold text-[#111827]">
                  Estamento
                </span>
                <select
                  name="estamento"
                  required
                  className="mt-2 w-full border border-black/20 bg-white px-4 py-3 text-[#111827] outline-none transition-all duration-300 focus:border-[#a03d2b] focus:ring-2 focus:ring-[#a03d2b]/25"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Seleccionar estamento
                  </option>
                  <option>Docente</option>
                  <option>Administrativo</option>
                  <option>Estudiante</option>
                </select>
              </label>
            </div>
            <button
              type="submit"
              className="mt-7 w-full bg-[#a03d2b] px-6 py-4 text-sm font-black text-white transition-all duration-300 hover:bg-[#832f21] focus:outline-none focus:ring-2 focus:ring-[#a03d2b] focus:ring-offset-4"
            >
              Registrar
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-black py-14 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 md:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
          <div>
            <p className="text-2xl font-black">Movimiento Universitario 20-25</p>
            <p className="mt-4 max-w-xl leading-7 text-white/75">
              Movimiento Universitario 20-25. Fuerza gremial de la Universidad
              de Panamá. Dedicados a la defensa del bien público social y la
              excelencia académica.
            </p>
            <p className="mt-6 text-sm text-white/60">
              © 2026 Movimiento Universitario 20-25. Plataforma de difusión
              política e informativa independiente. Todos los derechos
              reservados.
            </p>
          </div>
          <nav aria-label="Enlaces políticos">
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#a03d2b]">
              Enlaces Políticos
            </h3>
            <div className="mt-5 grid gap-3">
              {["Manifiesto", "Pilares", "Circulares"].map((link) => (
                <a
                  key={link}
                  href="#documentos"
                  className="text-sm font-semibold text-white/80 transition-all duration-300 hover:text-[#a03d2b] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-4 focus:ring-offset-black"
                >
                  {link}
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
    </main>
  );
}
