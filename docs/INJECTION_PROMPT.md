# INJECTION PROMPT — Extraction Output → Working Clinic Repo

> **Input:** the `extracted/[clinic-slug].extraction.json` file from `EXTRACTION_PROMPT_V2.md`.
>
> **Output:** a working clinic repo with all template files adapted to the specific clinic. Ready to `npm run dev`, ready to push, ready to deploy.

---

## Required MCPs

| MCP | Use |
|---|---|
| **Context7** | Pull real-time Next.js 15 + React 18 + Tailwind docs while writing code | `https://github.com/upstash/context7-mcp` |
| **Filesystem** | Read template files + write injected files (built-in to Claude Code) |
| **GitHub** | Create PR on the clinic repo for review | Anthropic official |
| **Playwright** | Auto-test the final dev server (hero loads, booking works, etc.) | Microsoft official |

---

## The 4 jokers (placeholder variables)

The injection adapts based on values from the extraction:

| Joker | Drives | Example values |
|---|---|---|
| `{{ archetype }}` | Which goals enable, which sections show, default tone | `A` (aesthetic_premium_women), `B` (dental_only_premium), ... |
| `{{ tone }}` | Copy style across all bilingual text | `warm`, `institutional`, `bold`, `clinical` |
| `{{ verticals }}` | Service department structure | `[aesthetic]`, `[dental, aesthetic]`, `[multi]` |
| `{{ chain_tier }}` | Trust Vault depth + branch UI | `solo`, `2-3-branch`, `regional_chain`, `national_chain` |

These are SET by the extraction. The injection READS them and adapts.

---

## THE PROMPT — paste into Claude Code

```
ROLE
You are a senior Next.js 15 + TypeScript engineer who specializes in
adapting a luxury clinic template to a specific clinic without breaking
type safety, accessibility, or compliance constraints. You are also a
Khaleeji-Arabic-native copywriter.

INPUT FILES
- extracted/[clinic-slug].extraction.json  ← read this first
- docs/CLINIC_SHAPES.md                    ← look up the archetype's variant
- lib/clinic-config.ts                     ← current template config
- lib/clinic-extras.ts                     ← current template extras
- (every other template file as reference)

GOAL
Produce a working clinic repo where:
1. lib/clinic-config.ts and lib/clinic-extras.ts are fully filled with
   clinic-specific data.
2. Components are PATCHED if the archetype requires it (e.g., dental-only
   archetype B removes the BeforeAfter section's "Day 28" recovery
   timeline since dental doesn't fit that frame).
3. Files are DELETED if the archetype doesn't need them (e.g., archetype
   G removes /goals/glow, replaces with /goals/vitality).
4. Brand-color CSS variables in globals.css are tuned to the clinic's
   palette (kept restrained — never neon, never garish).
5. The dev server builds without errors and key pages render.

═══════════════════════════════════════════════════════════════════════
STEP 1 — READ + VALIDATE
═══════════════════════════════════════════════════════════════════════

1. Read `extracted/[clinic-slug].extraction.json`.
2. Validate: every required field present? If not, FAIL EARLY and ask
   the user to re-run extraction with the missing angles.
3. Extract these top-level values to memory:
   - archetype (letter A-H)
   - tone
   - verticals (array)
   - chain_tier
   - languages_served
4. Read `docs/CLINIC_SHAPES.md` and find the section matching the
   archetype. Note: goals_enabled, sections_to_remove, copy_voice,
   palette_recommendation.

═══════════════════════════════════════════════════════════════════════
STEP 2 — WRITE lib/clinic-config.ts
═══════════════════════════════════════════════════════════════════════

Map extraction fields to clinic-config schema. Specifically:
- brand.name / brand.tagline / brand.established → from extraction
- contact.phone / whatsapp / whatsappLink → from extraction
- contact.email → use extracted email if found, otherwise compose
  "info@[domain]" placeholder with // TODO comment
- contact.address / hours → from extraction (Khaleeji Arabic for ar
  version, restrained editorial English for en)
- seo.title / description / keywords → tailored to verticals + city
- navigation.items → start from template default, but ADD or REMOVE
  based on archetype's sections_to_remove
- footer columns → matches the active navigation
- hero / founder / services / tailoredCare / beforeAfter / reviews /
  team / bookCta / faq / journal → fully filled with clinic-specific
  copy in Khaleeji + EN
- inner pages (departmentsPage, doctorsPage, etc.) → filled

Khaleeji rules:
- Female-friendly tone (the audience is 70% women)
- No formal MSA. Use "كيف تشعرين" not "كيف تشعرون"
- Use Saudi-specific vocabulary: "احجزي" not "احجز"; "موعد" not "ميعاد"
- For tone=warm: soft, family-aware, "لكِ"
- For tone=institutional: respectful, third-person, "نقدّم"
- For tone=bold: confident, directional, "ابدئي اليوم"

═══════════════════════════════════════════════════════════════════════
STEP 3 — WRITE lib/clinic-extras.ts
═══════════════════════════════════════════════════════════════════════

Map extraction.identity → clinicExtras.identity (legal name, CR, MOH,
branches with geo coordinates).

Map extraction.doctors → clinicExtras.structuredData.doctors.

Map extraction.procedures → clinicExtras.structuredData.procedures.
IMPORTANT: only include procedures with VERIFIED pricing. Leave
estimatedPriceMin/Max null if extraction marked them null.

Map extraction.trust_signals → clinicExtras.trustVault.badges.
Include only badges with verifiable evidence. NEVER fabricate a Maaroof
URL or SFDA registration.

Map extraction.cultural_signals → clinicExtras.privacy:
- modesty_default=strict → noPatientFaces: true, anonymousInquiryEnabled: true
- women_focused=true → womenStaffRoutingEnabled: true
- bnpl_relevant=false → pricing.tabby.enabled: false, tamara.enabled: false

═══════════════════════════════════════════════════════════════════════
STEP 4 — ADAPT goals (archetype-driven)
═══════════════════════════════════════════════════════════════════════

The default template has 5 goals: Glow, Contour, Smile, Restore, Longevity.

For each archetype, OVERRIDE the goals array:

  archetype A (aesthetic_premium_women):
    [Glow, Contour, Restore]

  archetype B (dental_only_premium):
    [Smile, Restore, Confidence]
    where Confidence is a NEW goal we create:
      symbol: ✦
      name: { en: "Confidence", ar: "ثقة" }
      tagline: { en: "Carry your smile.", ar: "احملي ابتسامتكِ." }

  archetype C (dental_only_family):
    [Smile, Family, Restore]
    where Family is a NEW goal:
      name: { en: "Family", ar: "العائلة" }
      tagline: { en: "From first tooth to wedding day.",
                 ar: "من السن الأول إلى يوم الزفاف." }

  archetype D (derma_focused_clinical):
    [Glow, Restore, Diagnose]
    where Diagnose is a NEW goal centered on skin science.

  archetype E (aesthetic_plus_dental):
    [Glow, Contour, Smile, Restore]

  archetype F (multi_specialty_hospital_lite):
    [Glow, Smile, Family, Restore, Diagnose]

  archetype G (longevity_men_inclusive):
    [Vitality, Longevity, Restore]
    where Vitality is a NEW goal:
      name: { en: "Vitality", ar: "حيوية" }
      tagline: { en: "What you do today, your body remembers.",
                 ar: "ما تفعله اليوم، يتذكّره جسدك غداً." }

  archetype H (wellness_retreat_style):
    [Reset, Restore, Rebalance, Longevity]
    full new goal set tailored to retreat language.

For each goal, generate:
- 1 hero block (eyebrow, headline parts, sub)
- 3-5 FAQ entries
- Procedure-slug references (from extraction.procedures)
- Accent color (slightly different per goal)

═══════════════════════════════════════════════════════════════════════
STEP 5 — PATCH OR DELETE FILES BASED ON ARCHETYPE
═══════════════════════════════════════════════════════════════════════

Read CLINIC_SHAPES.md > archetype section > sections_to_remove.

For each entry, either:
- DELETE the file if it's a standalone page (e.g.,
  app/goals/longevity/page.tsx for archetype A)
- PATCH the component if it's a section (e.g., remove the "Day 90"
  recovery timeline from BeforeAfter.tsx for dental-only archetype B)

Generate a CHANGES_MANIFEST.md at the root with:
- Files written/modified
- Files deleted
- Components patched (with the specific edits)
- Goals customized (with new names + symbols)
- Reason for each change (1 line per item)

═══════════════════════════════════════════════════════════════════════
STEP 6 — TUNE BRAND PALETTE
═══════════════════════════════════════════════════════════════════════

Read extraction.brand_voice.color_palette_currently.

Map to one of our existing themes:
  - default (gold + navy + cream) — works for archetypes A, B, C, E
  - theme-linen (rose + plum + ivory) — works for women-focused +
    feminine archetypes (A variant, H)
  - theme-midnight (silver + slate) — works for archetype G,
    longevity, men-inclusive
  - theme-olive (sage + oat) — works for archetype H, wellness retreat

If extraction's palette doesn't match any of the 4, choose CLOSEST and
note in CHANGES_MANIFEST.md that a custom palette could be added later.

Apply the theme by setting <html className="theme-XXX"> in
app/layout.tsx.

═══════════════════════════════════════════════════════════════════════
STEP 7 — VERIFY BUILD
═══════════════════════════════════════════════════════════════════════

Run via Playwright MCP:
1. npm install
2. npx tsc --noEmit (MUST pass)
3. npm run build (MUST pass)
4. npm run dev → open http://localhost:3000
5. Visit:
   - / (home)
   - /services
   - /doctors
   - /goals/[first-active-goal]
   - /trust
   - /faq
   - /booking
6. For each: confirm no JS console errors, no 404s, content renders.

If any check fails, REPORT the failure with exact location and stop.

═══════════════════════════════════════════════════════════════════════
STEP 8 — CREATE PULL REQUEST
═══════════════════════════════════════════════════════════════════════

Via GitHub MCP:
1. Create branch `inject/[clinic-slug]` off main
2. Commit all changes with conventional commit message:
   "feat(clinic): inject [clinic name] (archetype [X])"
3. Open PR with:
   - Title: "Inject [Clinic Name] — archetype [X]"
   - Body: paste CHANGES_MANIFEST.md
   - Reviewers: [user]
4. Mark PR as Draft so user reviews before merging.

═══════════════════════════════════════════════════════════════════════
STEP 9 — SUMMARY FOR HUMAN
═══════════════════════════════════════════════════════════════════════

Final stdout for the user:
  ✓ Injection complete
  Clinic: [name]
  Archetype: [letter] — [name]
  Theme: [default | linen | midnight | olive]
  Goals enabled: [...]
  Sections removed: [...]
  Build status: ✓ passed | ✗ failed
  Local URL: http://localhost:3000
  PR: github.com/.../pull/N (DRAFT — review before merge)

  3 things flagged for human review:
  1. [item with file:line reference]
  2. [item]
  3. [item]

CRITICAL NEVER-DO:
- Never silently invent doctor SCFHS numbers
- Never silently invent prices
- Never include patient face placeholders (use ambient mood imagery slots)
- Never include badges that weren't in the extraction
- Never auto-merge the PR — always Draft, user reviews
- Never write Egyptian or Lebanese Arabic where Khaleeji is expected
```

---

## How the injection looks in practice

For Bright Al Ahsa, the extraction outputs `archetype: E (aesthetic_plus_dental)`. The injection:

1. ✅ Fills `clinic-config.ts` with Bright info (Khobar+Al Ahsa branches, 2 active doctors, treatment menu)
2. ✅ Fills `clinic-extras.ts` with structured data (Hassan Nazzal SCFHS, Marina Naddaf, etc.)
3. ✅ Sets goals = [Glow, Contour, Smile, Restore]
4. ❌ Removes `/goals/longevity/page.tsx` (not applicable for archetype E)
5. ✅ Keeps theme default (gold + navy + cream — matches Bright's existing visual)
6. ✅ Builds + dev-server-tests
7. ✅ Opens Draft PR for user review

User reviews the PR, fixes anything off, merges → Vercel auto-deploys.

---

## When to NOT run the injection

- Extraction is incomplete (missing required fields)
- Clinic archetype is unclear (extraction couldn't decide between 2)
- Clinic is in a vertical we haven't archetyped yet (e.g., podiatry-only)
  → expand `CLINIC_SHAPES.md` first

In these cases, the injection prompt should FAIL EARLY with a clear
"please re-run extraction with these specific angles" message.
