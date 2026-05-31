import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const activities = [
  {
    date: "Semana 1",
    title: "Asambleas de Base",
    description:
      "Encuentros con docentes, administrativos y estudiantes para consolidar vocerías por facultad, centro regional y extensión universitaria."
  },
  {
    date: "Semana 2",
    title: "Foros de Transformación Institucional",
    description:
      "Espacios de debate sobre autonomía universitaria, transparencia de gestión, escalafón administrativo y fortalecimiento académico."
  },
  {
    date: "Semana 3",
    title: "Jornadas de Afiliación",
    description:
      "Registro de nuevos integrantes, organización de comités de base y difusión de circulares oficiales del Movimiento Universitario 20-25."
  },
  {
    date: "Semana 4",
    title: "Giras a Centros Regionales",
    description:
      "Articulación territorial con liderazgos de Azuero, Veraguas, Colón y extensiones universitarias bajo principios de descentralización."
  }
];

export default function ActivitiesPage() {
  return (
    <main className="min-h-screen bg-white text-[#111827]">
      <SiteHeader />

      <section className="bg-[#F8FAFC] px-5 pb-20 pt-32 sm:px-6 sm:pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#a03d2b]">
              Actividades
            </p>
            <h1 className="mt-4 text-4xl font-black tracking-normal text-black sm:text-6xl">
              Agenda de Acción Universitaria
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#111827]">
              Programación de actividades gremiales, académicas y territoriales
              para fortalecer la organización universitaria en el campus central,
              facultades, centros regionales y extensiones.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {activities.map((activity) => (
              <article
                key={activity.title}
                className="border-l-4 border-[#a03d2b] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(160,61,43,0.16)]"
              >
                <span className="text-sm font-black uppercase tracking-[0.18em] text-[#a03d2b]">
                  {activity.date}
                </span>
                <h2 className="mt-4 text-2xl font-black text-black">
                  {activity.title}
                </h2>
                <p className="mt-4 leading-7 text-[#111827]">
                  {activity.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
