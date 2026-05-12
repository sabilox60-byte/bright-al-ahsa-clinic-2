import type { Metadata } from "next";
import { Source_Serif_4, Cormorant_Garamond, Italiana, Inter_Tight, Amiri, JetBrains_Mono } from "next/font/google";
import { clinicConfig } from "@/lib/clinic-config";
import { clinicExtras } from "@/lib/clinic-extras";
import { organizationLd, websiteLd } from "@/lib/schema-ld";
import LenisProvider from "@/components/LenisProvider";
import EidBanner from "@/components/EidBanner";
import VoiceConcierge from "@/components/VoiceConcierge";
import MobileBookBar from "@/components/MobileBookBar";
import SchemaInjector from "@/components/SchemaInjector";
import "./globals.css";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-source-serif",
  display: "swap",
});
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});
const italiana = Italiana({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-italiana",
  display: "swap",
});
const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter-tight",
  display: "swap",
});
const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-amiri",
  display: "swap",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: clinicConfig.seo.title.en,
    template: `%s — ${clinicConfig.brand.name.en}`,
  },
  description: clinicConfig.seo.description.en,
  keywords: clinicConfig.seo.keywords,
  openGraph: {
    title: clinicConfig.seo.title.en,
    description: clinicConfig.seo.description.en,
    type: "website",
    locale: "en_SA",
    alternateLocale: "ar_SA",
    images: [{ url: clinicExtras.aeo.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: clinicExtras.aeo.twitterHandle,
    images: [clinicExtras.aeo.twitterImage || clinicExtras.aeo.ogImage],
  },
  alternates: {
    canonical: "/",
    languages: { en: "/", ar: "/ar" },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${sourceSerif.variable} ${cormorant.variable} ${italiana.variable} ${interTight.variable} ${amiri.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <SchemaInjector schemas={[organizationLd("en"), websiteLd("en")]} id="ld-root" />
      </head>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <EidBanner locale="en" />
        <LenisProvider>{children}</LenisProvider>
        <VoiceConcierge locale="en" />
        <MobileBookBar locale="en" />
      </body>
    </html>
  );
}
