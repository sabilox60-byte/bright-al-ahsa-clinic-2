# Deployment Guide — Clinic Growth Template

Deploy any clinic in **45-90 minutes** end-to-end.

## What this template ships

```
website-template/
├── app/                          # Next.js 15 App Router pages
│   ├── page.tsx                  # Homepage (Hero + Living Pulse + Outcome Compass + sections)
│   ├── layout.tsx                # Root layout with Eid Banner + Lenis + Voice Concierge
│   ├── globals.css               # Brand design system (premium gold + navy + cream)
│   ├── robots.ts                 # AI-bot-friendly robots
│   ├── sitemap.ts                # Bilingual sitemap with hreflang
│   ├── manifest.ts               # PWA manifest
│   ├── services/                 # Departments page + per-treatment landing
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── doctors/                  # Clinician roster + per-doctor page
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── goals/[goal]/page.tsx     # Outcome Compass goal pages
│   ├── trust/page.tsx            # Trust Vault — credentials
│   ├── faq/page.tsx              # FAQ (FAQPage schema)
│   ├── contact/page.tsx          # Branches + channels
│   ├── about/page.tsx
│   ├── gallery/page.tsx
│   ├── reviews/page.tsx
│   ├── journal/page.tsx
│   ├── booking/page.tsx          # Multi-step luxury booking
│   ├── portal/[token]/           # Aftercare portal (patient-private)
│   │   ├── page.tsx
│   │   └── CheckIn.tsx
│   ├── privacy/page.tsx
│   ├── terms/page.tsx
│   ├── accessibility/page.tsx
│   └── api/
│       ├── concierge/route.ts    # Voice Concierge backend (Claude-ready stub)
│       └── aftercare/checkin/route.ts
├── components/
│   ├── Nav.tsx                   # Sticky nav with mobile menu
│   ├── Hero.tsx                  # Editorial hero with stats + pull quote
│   ├── Founder.tsx
│   ├── Services.tsx
│   ├── TailoredCare.tsx
│   ├── BeforeAfter.tsx
│   ├── Reviews.tsx
│   ├── Team.tsx
│   ├── BookCta.tsx
│   ├── Faq.tsx
│   ├── Journal.tsx
│   ├── Footer.tsx
│   ├── PageHero.tsx
│   ├── Portrait.tsx              # Brand-aware portrait placeholder
│   ├── ChapterMark.tsx
│   ├── HeroIllustration.tsx
│   ├── MarqueeBand.tsx
│   ├── Logo.tsx
│   ├── LivingPulse.tsx           # ✦ SIGNATURE — real-time clinic signals
│   ├── EidBanner.tsx             # ✦ SIGNATURE — Saudi Calendar Engine
│   ├── OutcomeCompass.tsx        # ✦ SIGNATURE — goal-first navigation
│   ├── TrustBadge.tsx            # ✦ SIGNATURE — credential cards
│   ├── VoiceConcierge.tsx        # ✦ SIGNATURE — Arabic AI assistant
│   ├── LenisProvider.tsx         # Smooth scroll layer
│   ├── ScrollReveal.tsx          # IntersectionObserver-based reveals
│   └── SchemaInjector.tsx        # Type-safe JSON-LD injection
├── lib/
│   ├── clinic-config.ts          # Per-clinic config (existing)
│   ├── clinic-extras.ts          # Per-clinic signature feature config (NEW)
│   ├── schema-ld.ts              # JSON-LD generators for AEO+SEO
│   ├── saudi-calendar.ts         # Eid/Ramadan/Founding Day detection
│   ├── i18n.ts                   # Locale + RTL helpers
│   ├── motion-variants.ts        # Animation variants
│   └── utils.ts                  # cn() helper
├── public/
│   └── llms.txt                  # LLM-crawler hint file
├── docs/
│   ├── EXTRACTION_MASTER_PROMPT.md   # The 1000-IQ extraction prompt
│   └── DEPLOYMENT.md                 # this file
├── .env.local.example
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Per-clinic deployment in 45-90 min

### Step 1 — Extract (15-30 min)

Open Claude Code in the project root. Run the prompt in `docs/EXTRACTION_MASTER_PROMPT.md` with the new clinic's known info. Claude returns two filled config blocks.

### Step 2 — Paste config (5 min)

```bash
# Replace placeholder values:
- lib/clinic-config.ts
- lib/clinic-extras.ts
```

Verify in your editor that `// TODO verify` flags are addressed.

### Step 3 — Generate hero imagery (15 min — optional first pass)

Use the prompts in `docs/EXTRACTION_MASTER_PROMPT.md` → "Hero image generation prompts" with Nano Banana Pro at 4K. Generate the 12-plate set, save to `public/hero/`. Reference in components.

For Phase 1 deploys, the synthetic `<Portrait variant="..." />` placeholders work fine — generate real imagery in Phase 2 once the clinic engages.

### Step 4 — Wire `.env.local` (5 min)

```bash
cp .env.local.example .env.local
# Fill in:
NEXT_PUBLIC_SITE_URL=https://[clinic-slug].example.com
ANTHROPIC_API_KEY=  # for Voice Concierge
SUPABASE_*=         # for Aftercare portal (optional Phase 2)
WHATSAPP_API_KEY=   # for booking confirmations
```

### Step 5 — Build + verify (10 min)

```bash
npm install
npm run type-check        # MUST pass
npm run build             # MUST succeed
npm run dev               # local smoke test at localhost:3000
```

Check:
- [ ] Homepage renders with Living Pulse band at top
- [ ] Eid Banner appears if today is within a campaign window
- [ ] Voice Concierge floating pill bottom-right
- [ ] `/goals/glow` renders the goal landing
- [ ] `/trust` shows all credential badges
- [ ] `/services/[any-procedure]` renders with FAQ + schema
- [ ] `/doctors/[any-doctor]` renders with SCFHS chip
- [ ] View source: `<script type="application/ld+json">` present in `<head>`
- [ ] `/sitemap.xml` and `/robots.txt` resolve
- [ ] `/llms.txt` resolves

### Step 6 — Deploy (5 min)

```bash
npx vercel --prod
```

Or via GitHub integration: push to `main`, Vercel auto-deploys.

Set custom domain in Vercel dashboard → DNS records.

### Step 7 — Post-deploy verification (10 min)

```bash
# Lighthouse audit
npx lighthouse https://[clinic-url] --output html --output-path ./lh-report.html

# Schema verification
# Visit https://search.google.com/test/rich-results
# Paste the homepage URL — confirm Organization, FAQPage, BreadcrumbList all valid

# AEO verification
# Visit https://www.bing.com/webmasters → submit sitemap
# Visit https://search.google.com/search-console → submit sitemap
```

Confirm Core Web Vitals targets:
- LCP < 2.5s ✓
- INP < 200ms ✓
- CLS < 0.1 ✓

## The 6 signature features — verify they're alive

### 1. Living Pulse (homepage)
Top of homepage, slim band. Shows: "Today: 47 consultations · Next available: tomorrow 2:30 pm · Most booked: Hydrafacial". Auto-refresh every 5 min.

### 2. Eid / Saudi Calendar Engine
30 days before any Saudi occasion (Eid Al-Fitr, Eid Al-Adha, National Day, Founding Day, Ramadan, Back-to-school), a dark masthead banner appears above Nav with countdown.

### 3. Outcome Compass (homepage)
Section after Founder shows 5 goal cards (Glow / Contour / Smile / Restore / Longevity). Each routes to `/goals/[slug]` with reshaped content.

### 4. Trust Vault (/trust)
Page rendering every credential (MOH, Maaroof, SFDA, PDPL, SAMA-BNPL) with verifiable URL where possible.

### 5. Voice Concierge (floating pill, all pages)
Bottom-right corner. Opens panel with suggested Arabic+English prompts. Backed by `/api/concierge` route (Claude-ready stub).

### 6. Aftercare Portal (/portal/[token])
Patient-private URL with per-procedure aftercare instructions, daily check-in, photo upload hook. Not indexed.

## The 4 AEO moves that ship by default

1. **Full JSON-LD coverage** — every page injects relevant schema (MedicalClinic / Physician / MedicalProcedure / FAQPage / BreadcrumbList).
2. **llms.txt** at root — guides LLM crawlers to authoritative pages.
3. **AI-bot-allowed robots.txt** — GPTBot, ClaudeBot, PerplexityBot, ChatGPT-User, Google-Extended explicit allow.
4. **Quick Answer callout** on every treatment page — 40-60 word direct answer, extractable as AI Overview source.

## Common pitfalls

- **Don't translate Arabic with Google Translate** — Khaleeji ≠ MSA ≠ Egyptian. Either use a native Saudi speaker or instruct Claude explicitly.
- **Don't generate patient face photos** — even AI-synthesized ones. SFDA penalises this. Stick to ambient interior/hand/architectural shots.
- **Don't claim a Maaroof badge you don't have** — empty fields are better than fake credentials.
- **Don't link Tabby/Tamara above SAR 10,000** — SAMA cap is legally binding.
- **Don't skip the `// TODO verify` flags** — they exist because the extractor couldn't confirm something. Verify or remove the field.

## Phase 2 — what to add once the clinic is signed

These are intentionally not in the v0.3 template (premature complexity):

- Real Cal.com booking iframe (currently flow is local-state only)
- Supabase aftercare backend with RLS (`patient_recovery_checkins` table)
- ElevenLabs voice synthesis on Voice Concierge replies
- Cloudinary or Vercel Blob for clinic-uploaded gallery photos
- Stripe + Tabby + Tamara live integration
- Multi-branch routing in booking (`/book?branch=khobar`)
- Patient login (Supabase Auth) for chronic-care patients
- Live competitor intel dashboard (the Mirror move from outreach playbook)
