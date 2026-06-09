import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { getPublishedActivities } from "@/lib/content/queries";
import { absoluteUrl, seoImages } from "@/lib/seo";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Actividades",
  description:
    "Agenda pública de actividades institucionales, académicas y territoriales del Movimiento Universitario 2025 en la Universidad de Panamá.",
  alternates: {
    canonical: absoluteUrl("/actividades")
  },
  openGraph: {
    title: "Actividades | Movimiento Universitario 2025",
    description:
      "Agenda pública de actividades del Movimiento Universitario 2025.",
    url: absoluteUrl("/actividades"),
    images: seoImages
  }
};

export default async function ActivitiesPage() {
  const activities = await getPublishedActivities();

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
                key={activity.id}
                className="overflow-hidden border-l-4 border-[#a03d2b] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(160,61,43,0.16)]"
              >
                {activity.image_url ? (
                  <img
                    src={activity.image_url}
                    alt={activity.title}
                    className="h-56 w-full object-cover"
                  />
                ) : null}
                <div className="p-7">
                  <span className="text-sm font-black uppercase tracking-[0.18em] text-[#a03d2b]">
                    {activity.date ?? "Actividad"}
                  </span>
                  <h2 className="mt-4 text-2xl font-black text-black">
                    {activity.title}
                  </h2>
                  <p className="mt-4 leading-7 text-[#111827]">
                    {activity.description}
                  </p>
                  {activity.location ? (
                    <p className="mt-5 text-sm font-black uppercase tracking-[0.16em] text-black/50">
                      {activity.location}
                    </p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
