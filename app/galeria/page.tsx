import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const galleryItems = [
  {
    title: "Identidad Institucional",
    image:
      "https://uphacialaluz.com/wp-content/uploads/2021/12/img_4318.jpg",
    alt: "Edificio de La Colina de la Universidad de Panamá",
    overlay: "Sede Central - Defendiendo la autonomía desde La Colina"
  },
  {
    title: "Encuentros y Foros Académicos",
    image:
      "https://uphacialaluz.com/wp-content/uploads/2022/11/img-20221103-wa0016.jpg",
    alt: "Acto universitario en la Plaza de la Bandera",
    overlay:
      "Unidad Gremial - Docentes y Administrativos firmes por el cambio"
  },
  {
    title: "Juventud y Comunidad Estudiantil",
    image: "https://www.up.ac.pa/sites/default/files/rector3_0_1_1_4.jpg",
    alt: "Comunidad universitaria en el campus de la Universidad de Panamá",
    overlay:
      "Fuerza Estudiantil - El relevo generacional de nuestra academia"
  },
  {
    title: "Trabajo en las Aulas de Clase",
    image:
      "https://uphacialaluz.com/wp-content/uploads/2026/05/edu.jpg",
    alt: "Estudiantes universitarios en actividades académicas",
    overlay:
      "Excelencia Académica - El futuro de Panamá se construye en el aula"
  }
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white text-[#111827]">
      <SiteHeader />

      <section className="bg-white px-5 pb-20 pt-32 sm:px-6 sm:pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#a03d2b]">
              Galería de la Militancia y Acción Universitaria
            </p>
            <h1 className="mt-4 text-4xl font-black tracking-normal text-black sm:text-6xl">
              Nuestra Presencia en el Campus
            </h1>
            <span className="mx-auto mt-6 block h-2 w-32 bg-[#a03d2b]" />
            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-[#111827]">
              Registro visual de identidad institucional, unidad gremial,
              comunidad estudiantil y trabajo académico en la Universidad de
              Panamá.
            </p>
          </div>

          <div className="mt-14 grid auto-rows-[18rem] gap-5 md:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[16rem]">
            {galleryItems.map((item, index) => (
              <article
                key={item.title}
                className={`group relative overflow-hidden rounded-sm border border-white bg-[#111827] shadow-lg ${
                  index === 0 || index === 3 ? "lg:col-span-2 lg:row-span-2" : ""
                }`}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-end bg-black/0 p-6 transition-all duration-300 group-hover:bg-black/70">
                  <div className="translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm font-black uppercase tracking-[0.18em] text-[#a03d2b]">
                      {item.title}
                    </p>
                    <h2 className="mt-2 max-w-md text-xl font-black leading-tight text-white">
                      {item.overlay}
                    </h2>
                  </div>
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
