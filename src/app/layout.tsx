import type { Metadata } from "next";
import type { ReactNode } from "react";
import { business, services } from "@/data/site";
import { SiteLayout } from "@/components/layout/SiteLayout";
import "./../styles/global.css";

export const metadata: Metadata = {
  title: {
    default: "Garage Door Repair & Installation | Gary Miller Garage Door Service",
    template: "%s",
  },
  description:
    "Garage door repair, installation, replacement, openers, roller shutters and commercial shutter services for residential and commercial properties. Call 862-290-4278.",
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    siteName: business.name,
    title: "Garage Door Repair & Installation | Gary Miller Garage Door Service",
    description:
      "Practical garage door and shutter solutions for residential and commercial properties. Call 862-290-4278.",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: business.name,
  telephone: "+1-862-290-4278",
  description: business.description,
  areaServed: { "@type": "Country", name: "United States" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Garage door and shutter services",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: service.name },
    })),
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#002868" />
        <meta property="og:image" content="/images/hero-garage-door.jpg" />
        <meta name="twitter:image" content="/images/hero-garage-door.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="preload" as="image" href="/images/hero-garage-door.jpg" type="image/jpeg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </head>
      <body>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
