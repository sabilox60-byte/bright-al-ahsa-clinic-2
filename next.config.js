/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  // ── Images ───────────────────────────────────────────────────────────────
  // AVIF first (20-30% smaller than WebP, 50% smaller than JPEG)
  // Pin remote hosts explicitly — prevents SSRF via /_next/image
  images: {
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: false,
    contentDispositionType: "attachment",
    minimumCacheTTL: 31536000,
    remotePatterns: [
      // Allow your own CDN explicitly
      { protocol: "https", hostname: "*.vercel-storage.com", pathname: "/**" },
      // Supabase storage (Phase 2 — uncomment per clinic)
      // { protocol: "https", hostname: "*.supabase.co", pathname: "/storage/v1/object/public/**" },
    ],
  },

  // ── Security headers ─────────────────────────────────────────────────────
  // Static defaults. Dynamic CSP nonce is set in middleware.ts.
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "DENY" },
          {
            key: "Permissions-Policy",
            value: [
              "camera=()",
              "microphone=(self)", // Voice Concierge needs mic
              "geolocation=(self)",
              "payment=(self)",     // Tabby/Tamara
              "interest-cohort=()", // disable FLoC
              "browsing-topics=()", // disable Topics API
            ].join(", "),
          },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "Cross-Origin-Resource-Policy", value: "same-site" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
        ],
      },
      {
        // Aggressive caching for AVIF/WebP/woff2
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|woff|woff2|gif|ico)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        // Patient portal — never cache, never index
        source: "/portal/:path*",
        headers: [
          { key: "Cache-Control", value: "private, no-store, no-cache, must-revalidate" },
          { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive, nosnippet" },
        ],
      },
      {
        // API — short cache, no archive
        source: "/api/:path*",
        headers: [
          { key: "Cache-Control", value: "no-store" },
          { key: "X-Robots-Tag", value: "noindex" },
        ],
      },
    ];
  },

  // ── Redirects ────────────────────────────────────────────────────────────
  async redirects() {
    return [
      // /clinicians → /doctors (alt path some agencies use)
      { source: "/clinicians", destination: "/doctors", permanent: true },
      { source: "/book", destination: "/booking", permanent: true },
      { source: "/team", destination: "/doctors", permanent: true },
    ];
  },

  // Move heavy server-only deps out of the client bundle
  experimental: {
    optimizePackageImports: ["lenis", "motion"],
  },
};

module.exports = nextConfig;
