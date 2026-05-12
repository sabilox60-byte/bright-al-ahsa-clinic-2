import type { MetadataRoute } from "next";
import { clinicExtras } from "@/lib/clinic-extras";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export default function robots(): MetadataRoute.Robots {
  const allowed = clinicExtras.aeo.allowedBots;
  const denied = clinicExtras.aeo.deniedBots ?? [];

  return {
    rules: [
      ...allowed.map((bot) => ({
        userAgent: bot,
        allow: "/",
        disallow: ["/portal/", "/api/"],
      })),
      ...denied.map((bot) => ({
        userAgent: bot,
        disallow: "/",
      })),
      // Default for any other agent
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/portal/", "/api/", "/_next/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
