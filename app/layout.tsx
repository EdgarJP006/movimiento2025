import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Movimiento Universitario 2025 | Universidad de Panamá",
  description:
    "Plataforma informativa del Movimiento Universitario 2025 de la Universidad de Panamá."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
