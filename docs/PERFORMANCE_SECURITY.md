# Performance + Security + KSA UX — 2026 Audit Brief

Compiled from a 2026 perf+security audit run on May 11. Stack: Next.js 15 App Router, React 18, Tailwind 3.4, Lenis, Motion, edge-runtime API routes, Vercel `dxb1` (Dubai region), Supabase from Phase 2.

---

## 1. What's already shipped

The template now ships the following baked-in:

- **`next.config.js`** — strict security headers (HSTS, X-Content-Type-Options, Referrer-Policy, X-Frame-Options DENY, Permissions-Policy, COOP, CORP), AVIF-first image optimization, explicit `remotePatterns`, aggressive cache headers on static, no-store on `/portal/*` and `/api/*`, `X-Robots-Tag: noindex` on portal + API.
- **`middleware.ts`** — per-request CSP nonce, AI bot allowlist for search agents (OAI-SearchBot, Claude-SearchBot, PerplexityBot), training-bot block on `/api/*` and `/portal/*`, framework-level frame-ancestors `none`.
- **`/api/concierge`** — input cap (800 chars), HTML stripping, refuse-list (medical advice, prescription, prompt-injection canaries), PII output stripper (numeric runs ≥6 digits, emails not in allow-list redacted).
- **`/portal/[token]`** — `metadata.robots.index: false`, `X-Robots-Tag: noindex` enforced at middleware level, no-store cache header.
- **`robots.txt`** — AI search bots allowed at root, training bots denied from `/api` + `/portal`.
- **Vision 2030 wordmark** — discreet footer signal aligning with KSA national strategy.
- **MaaroofRibbon + SisterShare + HijriDate + AnonymousInquiry** — KSA-specific psychology + cultural UX patterns no surveyed competitor ships.

---

## 2. Performance — top 10 bottlenecks (priority order)

| # | Bottleneck | Metric | Fix (current stack) |
|---|---|---|---|
| 1 | Unoptimized hero image | LCP | AVIF first in `next.config.js images.formats` ✓ shipped. Mark only ONE hero `priority` + `fetchPriority="high"`. |
| 2 | `'use client'` placed too high | LCP, INP | Audit every directive — push to leaf component. Default: server. |
| 3 | Lenis smooth scroll cost on mobile | INP | LenisProvider: gate behind `prefers-reduced-motion` + viewport ≥1024px. Mobile gets native scroll. |
| 4 | Motion bundle weight | TBT, INP | When you wire motion: use `LazyMotion` + `m.div` (4.6 KB) instead of `motion.div` (34 KB). |
| 5 | Google Fonts CDN | LCP | Already self-hosted via `next/font/google` — kept. |
| 6 | Arabic font subset | LCP | `next/font/google` `subsets: ['arabic']` already configured; verify woff2 stays ≤80 KB. |
| 7 | Tailwind v3 → v4 migration | TBT | Migration deferred to Phase 2 — 5× build speed gain, smaller CSS. |
| 8 | React 18 → 19 + Compiler | INP | Phase 2 — enables `experimental.reactCompiler`. |
| 9 | Third-party scripts | TBT | Budget < 70 KB gz total. Use `next/script strategy="lazyOnload"`. NO chat widget — `wa.me` deep link instead. |
| 10 | Edge region | TTFB | Vercel `dxb1` (Dubai) — 15-35ms RTT to KSA. **Not Bahrain — Vercel has no BH region.** Set in `vercel.json`. |

### Pre-deploy perf budget (per page)

- **First Load JS**: ≤ 200 KB shared (currently ~100 KB)
- **Hero LCP image**: ≤ 200 KB AVIF
- **Page weight (homepage)**: ≤ 1.5 MB desktop, ≤ 900 KB mobile
- **LCP target**: < 2.5s on Eastern Province 4G
- **INP target**: < 200ms (75th percentile)
- **CLS target**: < 0.1

### Lighthouse test
```bash
npx lighthouse http://localhost:3002 --output html --output-path ./lh.html --throttling-method provided --form-factor mobile
```

---

## 3. Security — top 10 threats (priority order)

| # | Threat | Type | Status |
|---|---|---|---|
| 1 | npm supply-chain (Shai-Hulud, Lottie) | Supply chain RCE | Migrate to pnpm + `minimumReleaseAge: 4320` (Phase 2). No `lottie-*` deps. |
| 2 | `/_next/image` SSRF | SSRF, DoS | `remotePatterns` pinned to exact hostnames ✓. `dangerouslyAllowSVG: false` ✓. |
| 3 | Server-action abuse (React2Shell) | RCE via Flight protocol | Keep Next.js patched. Validate every server-action input with zod (Phase 2). |
| 4 | Voice Concierge prompt injection | OWASP LLM #1 2026 | ✓ shipped — input cap + refuse-list + PII stripper. |
| 5 | PDPL cross-border data | Regulatory (5M SAR fine) | Use Vercel Web Analytics (anonymized) over GA4 by default. Cookie consent required before any analytics fires. |
| 6 | Concierge API DoS | Cost-amplification | Phase 2: add `@upstash/ratelimit` — 10 req/min/IP. For now, edge runtime + Vercel WAF handle small loads. |
| 7 | CSP / XSS | XSS, third-party injection | ✓ shipped — strict CSP with per-request nonce via `middleware.ts`. |
| 8 | Clickjacking | UI redress | ✓ shipped — `frame-ancestors: 'none'` + `X-Frame-Options: DENY`. |
| 9 | Form spam on booking | Bot abuse | Phase 2: honeypot input + Cloudflare Turnstile after 3 strikes. |
| 10 | Bot scraping vs LLM citation | Content + cost | ✓ shipped — AI search bots allowed, training bots blocked from `/api` + `/portal` in middleware. |

### Security headers checklist (verify in browser DevTools)

```
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload    ✓
X-Content-Type-Options: nosniff                                            ✓
Referrer-Policy: strict-origin-when-cross-origin                           ✓
X-Frame-Options: DENY                                                       ✓
Permissions-Policy: camera=(), microphone=(self), interest-cohort=()       ✓
Cross-Origin-Opener-Policy: same-origin                                    ✓
Cross-Origin-Resource-Policy: same-site                                    ✓
Content-Security-Policy: default-src 'self'; ... nonce-XXX strict-dynamic  ✓ (dynamic via middleware)
```

### CSP verification

```bash
# Local
curl -I http://localhost:3002 | grep -i content-security-policy

# Production via Securityheaders.com
# Visit https://securityheaders.com/?q=[your-domain]&followRedirects=on
```

Target grade: **A** minimum, **A+** with HSTS preload submission.

---

## 4. KSA UX deltas — what competitors miss

The 2026 audit surveyed Mayam Aesthetics, The S Clinic, Noya, Royal Cosmetic Surgery, Padra, The Clinics Riyadh. None ship ALL of these:

| Pattern | Status | File |
|---|---|---|
| Hijri + Gregorian dual dates | ✓ shipped | [`components/HijriDate.tsx`](../components/HijriDate.tsx) |
| Maaroof rating above-fold | ✓ shipped | [`components/MaaroofRibbon.tsx`](../components/MaaroofRibbon.tsx) |
| Family share button (WhatsApp deep-link) | ✓ shipped | [`components/SisterShare.tsx`](../components/SisterShare.tsx) |
| Anonymous WhatsApp inquiry | ✓ shipped | [`components/AnonymousInquiry.tsx`](../components/AnonymousInquiry.tsx) |
| Vision 2030 mark in footer | ✓ shipped | [`components/Vision2030Mark.tsx`](../components/Vision2030Mark.tsx) |
| Doctor-first hero (name > clinic) | Per-clinic in extraction prompt | — |
| Female-staff routing in booking | Phase 2 — flag exists in `clinicExtras.privacy.womenStaffRoutingEnabled` | — |
| Prayer-time-aware booking slots | Phase 2 — Aladhan API integration | — |
| WhatsApp-first CTAs everywhere | ✓ shipped — `wa.me` deep-links instead of `tel:` | All components |
| Modesty in imagery | ✓ enforced via `IMAGE_PROMPTS.md` negative prompts | — |
| Hijri-first journal datelines | Available, opt-in per post | — |

---

## 5. Phase 2 punch list (after Bright deploys)

1. **Tailwind v4 migration** — 5× build speed, smaller CSS, native RTL logical properties
2. **React 19 + React Compiler** — auto-memoization, smaller bundles
3. **pnpm + supply-chain hardening** — `minimumReleaseAge: 4320`
4. **Upstash rate-limit on `/api/concierge`** — 10 req/min/IP with Turnstile fallback
5. **Supabase backend** — aftercare check-ins, booking persistence, RLS policies
6. **Cal.com wired booking** — replace local-state form with real availability
7. **Aladhan prayer-time API** — block booking slots during Dhuhr/Asr/Maghrib at clinic local mosque
8. **Cookie consent banner** — granular + PDPL-aligned, default-deny analytics
9. **Cloudflare Turnstile** — booking form spam filter after 3 strikes
10. **Plausible or Vercel Web Analytics** — KSA-compliant traffic insight without GA4 lock-in

---

## 6. The `vercel.json` deploy stanza

```json
{
  "buildCommand": "next build",
  "framework": "nextjs",
  "regions": ["dxb1"],
  "functions": {
    "app/api/concierge/route.ts": { "regions": ["dxb1"] },
    "app/api/aftercare/checkin/route.ts": { "regions": ["dxb1"] }
  },
  "crons": []
}
```

Region `dxb1` = Vercel Dubai = closest POP to KSA (15-35ms RTT). Bahrain is NOT a Vercel region; do not configure it.

---

## 7. Test in the browser (locally)

After dev server is up:

```bash
# Security headers
curl -I http://localhost:3002

# CSP (you should see the nonce token)
curl -v http://localhost:3002 2>&1 | grep -i csp

# AVIF served on hero
curl -H "Accept: image/avif" -I http://localhost:3002/hero/test.jpg

# llms.txt
curl http://localhost:3002/llms.txt

# Robots — verify AI bot rules
curl http://localhost:3002/robots.txt
```

Run Lighthouse in mobile mode against `localhost:3002` — target ≥ 95 across Performance / Accessibility / Best Practices / SEO.
