import type { Activity, GalleryItem } from "@/lib/supabase/types";

export const fallbackGalleryItems: GalleryItem[] = [
  {
    id: "fallback-gallery-1",
    title: "Identidad Institucional",
    description: "Edificio de La Colina de la Universidad de Panamá",
    image_url:
      "https://uphacialaluz.com/wp-content/uploads/2021/12/img_4318.jpg",
    image_path: null,
    category: "Campus",
    overlay_text: "Sede Central - Defendiendo la autonomía desde La Colina",
    sort_order: 1,
    is_published: true,
    created_at: "",
    updated_at: ""
  },
  {
    id: "fallback-gallery-2",
    title: "Encuentros y Foros Académicos",
    description: "Acto universitario en la Plaza de la Bandera",
    image_url:
      "https://uphacialaluz.com/wp-content/uploads/2022/11/img-20221103-wa0016.jpg",
    image_path: null,
    category: "Foros",
    overlay_text:
      "Unidad Gremial - Docentes y Administrativos firmes por el cambio",
    sort_order: 2,
    is_published: true,
    created_at: "",
    updated_at: ""
  },
  {
    id: "fallback-gallery-3",
    title: "Juventud y Comunidad Estudiantil",
    description: "Comunidad universitaria en el campus",
    image_url: "https://www.up.ac.pa/sites/default/files/rector3_0_1_1_4.jpg",
    image_path: null,
    category: "Estudiantes",
    overlay_text:
      "Fuerza Estudiantil - El relevo generacional de nuestra academia",
    sort_order: 3,
    is_published: true,
    created_at: "",
    updated_at: ""
  },
  {
    id: "fallback-gallery-4",
    title: "Trabajo en las Aulas de Clase",
    description: "Estudiantes universitarios en actividades académicas",
    image_url: "https://uphacialaluz.com/wp-content/uploads/2026/05/edu.jpg",
    image_path: null,
    category: "Aulas",
    overlay_text:
      "Excelencia Académica - El futuro de Panamá se construye en el aula",
    sort_order: 4,
    is_published: true,
    created_at: "",
    updated_at: ""
  }
];

export const fallbackActivities: Activity[] = [
  {
    id: "fallback-activity-1",
    date: "Semana 1",
    title: "Asambleas de Base",
    description:
      "Encuentros con docentes, administrativos y estudiantes para consolidar vocerías por facultad, centro regional y extensión universitaria.",
    location: "Campus Central",
    image_url: null,
    image_path: null,
    is_published: true,
    created_at: "",
    updated_at: ""
  },
  {
    id: "fallback-activity-2",
    date: "Semana 2",
    title: "Foros de Transformación Institucional",
    description:
      "Espacios de debate sobre autonomía universitaria, transparencia de gestión, escalafón administrativo y fortalecimiento académico.",
    location: "Facultades y auditorios",
    image_url: null,
    image_path: null,
    is_published: true,
    created_at: "",
    updated_at: ""
  },
  {
    id: "fallback-activity-3",
    date: "Semana 3",
    title: "Jornadas Informativas",
    description:
      "Difusión de comunicados, orientación institucional y coordinación de actividades públicas del Movimiento Universitario 2025.",
    location: "Puntos informativos",
    image_url: null,
    image_path: null,
    is_published: true,
    created_at: "",
    updated_at: ""
  },
  {
    id: "fallback-activity-4",
    date: "Semana 4",
    title: "Giras a Centros Regionales",
    description:
      "Articulación territorial con liderazgos de Azuero, Veraguas, Colón y extensiones universitarias bajo principios de descentralización.",
    location: "Centros Regionales",
    image_url: null,
    image_path: null,
    is_published: true,
    created_at: "",
    updated_at: ""
  }
];
