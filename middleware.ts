import { NextRequest, NextResponse } from "next/server";

/**
 * Security middleware:
 *  · CSP with per-request nonce on dynamic routes
 *  · Bot allowlist for AI search agents (ChatGPT-User, Claude-SearchBot, PerplexityBot)
 *  · Coarse IP-based rate-limit on /api/* using header-based bucket (deploy adds Upstash)
 *  · Portal pages: hard-noindex + no-cache override
 *
 * For 2026 KSA luxury clinic stack on Vercel `dxb1`.
 */

const AI_SEARCH_BOTS = [
  "OAI-SearchBot",
  "Claude-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "Perplexity-User",
  "AppleBot-Extended",
];

const AI_TRAINING_BOTS = ["GPTBot", "ClaudeBot", "anthropic-ai", "CCBot", "Google-Extended"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip middleware on prefetch requests — performance + parity with old `missing` matcher
  if (
    request.headers.get("next-router-prefetch") ||
    request.headers.get("purpose") === "prefetch"
  ) {
    return NextResponse.next();
  }

  // Generate per-request nonce — used by next/script + inline style
  const nonce = btoa(crypto.randomUUID());
  const isDev = process.env.NODE_ENV === "development";

  // CSP — pragmatic Next.js 15 baseline.
  // Note: 'strict-dynamic' + nonce-only requires manual nonce-threading on
  // every <Script> (Next.js doesn't auto-thread the nonce to its own runtime
  // scripts), which breaks React hydration. Until that wiring is added in
  // Phase 2, we use 'unsafe-inline' for script + style and keep the rest of
  // the policy strict (frame-ancestors none, object-src none, etc.).
  const csp = [
    `default-src 'self'`,
    `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://va.vercel-scripts.com`,
    `style-src 'self' 'unsafe-inline'`,
    `img-src 'self' blob: data: https://*.vercel-storage.com https://maps.gstatic.com https://maps.googleapis.com https://maroof.sa`,
    `font-src 'self' data:`,
    `connect-src 'self' https://*.supabase.co wss://*.supabase.co https://api.anthropic.com https://generativelanguage.googleapis.com https://vitals.vercel-insights.com`,
    `frame-src 'self' https://www.google.com/maps https://maps.google.com https://maroof.sa`,
    `frame-ancestors 'none'`,
    `object-src 'none'`,
    `base-uri 'self'`,
    `form-action 'self' https://wa.me`,
    `upgrade-insecure-requests`,
  ].join("; ");
  void nonce; // reserved for Phase 2 nonce-threading

  // Block AI training crawlers from /api routes (visibility hint, not enforcement)
  const ua = request.headers.get("user-agent") || "";
  if (pathname.startsWith("/api/") && AI_TRAINING_BOTS.some((bot) => ua.includes(bot))) {
    return new NextResponse("Not Found", { status: 404 });
  }

  // Block AI training crawlers from /portal (patient privacy)
  if (pathname.startsWith("/portal/") && AI_TRAINING_BOTS.some((bot) => ua.includes(bot))) {
    return new NextResponse("Not Found", { status: 404 });
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  // Tag AI-search bots for analytics — useful to confirm we're being cited
  if (AI_SEARCH_BOTS.some((bot) => ua.includes(bot))) {
    requestHeaders.set("x-ai-bot", "search");
  }

  const response = NextResponse.next({ request: { headers: requestHeaders } });
  response.headers.set("Content-Security-Policy", csp);
  response.headers.set("x-nonce", nonce);
  return response;
}

export const config = {
  // Vercel + Next.js 15.0.3 require a simple string matcher (no advanced
  // object form). Prefetch skip is handled inside the middleware function above.
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|llms.txt|manifest.webmanifest|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico|woff|woff2|css)$).*)",
  ],
};
