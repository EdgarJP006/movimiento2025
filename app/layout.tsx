import type { Metadata } from "next";
import {
  absoluteUrl,
  seoImages,
  siteDescription,
  siteKeywords,
  siteName,
  siteUrl
} from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: `${siteName} | Universidad de Panamá`,
    template: `%s | ${siteName}`
  },
  description: siteDescription,
  keywords: siteKeywords,
  alternates: {
    canonical: absoluteUrl("/")
  },
  openGraph: {
    type: "website",
    locale: "es_PA",
    url: absoluteUrl("/"),
    siteName,
    title: `${siteName} | Universidad de Panamá`,
    description: siteDescription,
    images: seoImages
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Universidad de Panamá`,
    description: siteDescription,
    images: seoImages.map((image) => image.url)
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  category: "education"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
    logo: seoImages[0].url,
    description: siteDescription,
    areaServed: "Panamá",
    parentOrganization: {
      "@type": "CollegeOrUniversity",
      name: "Universidad de Panamá",
      url: "https://www.up.ac.pa/"
    }
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    inLanguage: "es-PA",
    description: siteDescription
  };

  return (
    <html lang="es-PA">
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd)
          }}
        />
        {children}
      </body>
    </html>
  );
}
