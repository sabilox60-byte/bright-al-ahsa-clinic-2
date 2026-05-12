import type { MetadataRoute } from "next";
import { clinicConfig } from "@/lib/clinic-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: clinicConfig.brand.name.en,
    short_name: clinicConfig.brand.name.en,
    description: clinicConfig.seo.description.en,
    start_url: "/",
    display: "standalone",
    background_color: "#f6f5f4",
    theme_color: "#0a1f2e",
    orientation: "portrait",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    categories: ["medical", "health", "beauty"],
    lang: "en-SA",
    dir: "ltr",
  };
}
