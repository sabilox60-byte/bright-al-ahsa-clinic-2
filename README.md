# Clinic Growth Template — Luxury Premium Clinic Website

A flagship Next.js 15 template for premium aesthetic / dental / medspa clinics in the Saudi & GCC market. Bilingual (EN/AR), AEO-optimized, PDPL/SFDA compliant, deployable per-clinic in 45-90 minutes via a single config file.

## Stack

- Next.js 15 + React 18 + TypeScript
- Tailwind CSS 3.4 (CSS variables for instant theming)
- Motion (formerly Framer Motion v12)
- Lenis smooth scroll
- Edge-runtime API routes
- 3 brand palettes (default + linen + midnight + olive)

## Signature features

- ✦ **Living Pulse** — real-time clinic signals band
- ✦ **Eid / Saudi Calendar Engine** — auto-themes for 6 Saudi occasions
- ✦ **Outcome Compass** — goal-first navigation (Glow/Contour/Smile/Restore/Longevity)
- ✦ **Voice Concierge** — Arabic AI assistant (Claude-ready)
- ✦ **Trust Vault** — verifiable credentials page
- ✦ **Aftercare Portal** — token-secured patient recovery
- ✦ **Sister-Share** — Khaleeji family WhatsApp share
- ✦ **Maaroof Ribbon** — above-fold trust signal
- ✦ **Hijri + Gregorian dual dates**
- ✦ **Anonymous Inquiry** — no-name lead-gen for sensitive treatments

## Run locally

```bash
npm install
cp .env.local.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

```bash
npm run build
npx vercel --prod
```

Region: pin to `dxb1` (Dubai) for KSA traffic. Set `NEXT_PUBLIC_SITE_URL` env var.

## Per-clinic deployment

See [`docs/EXTRACTION_MASTER_PROMPT.md`](docs/EXTRACTION_MASTER_PROMPT.md) — the AI extraction workflow that fills `lib/clinic-config.ts` + `lib/clinic-extras.ts` from any clinic's known info in 60-90 minutes.

## Documentation

- [Deployment Guide](docs/DEPLOYMENT.md)
- [Extraction Master Prompt](docs/EXTRACTION_MASTER_PROMPT.md)
- [Image Prompts (Nano Banana Pro)](docs/IMAGE_PROMPTS.md)
- [Performance + Security 2026](docs/PERFORMANCE_SECURITY.md)
