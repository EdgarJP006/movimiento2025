import { movementLogoUrl } from "@/components/BrandLogo";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://movimiento-2025-spa.vercel.app";

export const siteName = "Movimiento Universitario 2025";

export const siteDescription =
  "Plataforma informativa del Movimiento Universitario 2025 de la Universidad de Panamá: propuestas, comunicados, galería y actividades institucionales.";

export const siteKeywords = [
  "Movimiento Universitario 2025",
  "Movimiento 2025 Universidad de Panamá",
  "Universidad de Panamá",
  "UP Panamá",
  "movimiento universitario",
  "gremio universitario",
  "docentes Universidad de Panamá",
  "administrativos Universidad de Panamá",
  "actividades universitarias Panamá",
  "galería Universidad de Panamá"
];

export const seoImages = [
  {
    url: movementLogoUrl,
    width: 1200,
    height: 630,
    alt: "Logo del Movimiento Universitario 2025"
  }
];

export function absoluteUrl(path = "/") {
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}
