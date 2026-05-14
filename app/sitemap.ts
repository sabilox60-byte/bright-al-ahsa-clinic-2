import type { MetadataRoute } from "next";
import { clinicExtras } from "@/lib/clinic-extras";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
const now = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/services",
    "/doctors",
    "/about",
    "/gallery",
    "/reviews",
    "/journal",
    "/booking",
    "/faq",
    "/contact",
    "/privacy",
    "/terms",
    "/accessibility",
  ];

  const goalPages = clinicExtras.goals.map((g) => `/goals/${g.slug}`);
  const procedurePages = clinicExtras.structuredData.procedures.map((p) => `/services/${p.slug}`);
  const doctorPages = clinicExtras.structuredData.doctors.map((d) => `/doctors/${d.slug}`);

  const allPaths = [...staticPages, ...goalPages, ...procedurePages, ...doctorPages];

  // English entries
  const enEntries = allPaths.map((p) => ({
    url: `${baseUrl}${p || "/"}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1.0 : p.startsWith("/goals") || p.startsWith("/services/") ? 0.8 : 0.6,
    alternates: {
      languages: {
        en: `${baseUrl}${p || "/"}`,
        ar: `${baseUrl}/ar${p || ""}`,
      },
    },
  }));

  // Arabic entries
  const arEntries = allPaths.map((p) => ({
    url: `${baseUrl}/ar${p || ""}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1.0 : p.startsWith("/goals") || p.startsWith("/services/") ? 0.8 : 0.6,
  }));

  return [...enEntries, ...arEntries];
}
