import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Movimiento 20-25 | Universidad de Panama",
  description:
    "Landing page informativa del Movimiento 20-25 de la Universidad de Panama."
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
