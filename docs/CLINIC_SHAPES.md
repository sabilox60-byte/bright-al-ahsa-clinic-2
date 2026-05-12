# CLINIC SHAPES — 8 Template Archetypes

> The Extraction Prompt detects which **archetype (A-H)** fits the clinic.
> The Injection Prompt READS this file to know how to adapt the template.

Each archetype defines:
- **Goals enabled** (which `/goals/[slug]` pages exist)
- **Sections to remove** (which homepage sections / inner pages disable)
- **Copy voice** (tone defaults)
- **Palette recommendation** (default | linen | midnight | olive)
- **Image moodboard slot** (what kind of imagery the clinic needs)

---

## Archetype A — Aesthetic Premium Women

**Typical:** boutique aesthetic clinic in Riyadh / Jeddah, women-only or women-primary, 1-3 branches, premium pricing.

| Property | Value |
|---|---|
| Goals enabled | Glow, Contour, Restore |
| Goals removed | Smile, Longevity |
| Sections removed | (none from default — full template) |
| Copy voice | `warm` (soft, female-friendly, family-aware) |
| Palette | `default` (gold + navy + cream) — premium institutional |
| Image moodboard | hands, marble, soft light, abaya silhouettes, NO faces |
| Pricing tier | premium |
| BNPL | Tabby + Tamara enabled (treatments often above SAR 1000) |
| Examples | Hortman, Clinica Errami, EDEN Aesthetics Dubai |

---

## Archetype B — Dental Only Premium

**Typical:** cosmetic dentistry, smile-design focused, single branch or small chain, women-primary clientele.

| Property | Value |
|---|---|
| Goals enabled | Smile, Restore, **Confidence** (new) |
| Goals removed | Glow, Contour, Longevity |
| Sections removed | `/gallery` Before/After "Day 28/90" timeline (dental doesn't fit weeks-based recovery — use single before/after instead) |
| Copy voice | `institutional` (calm, expert, trust-driven) |
| Palette | `default` or `theme-linen` |
| Image moodboard | mouth-only macro shots, smile from side, lab equipment, marble |
| Pricing tier | premium |
| BNPL | Tabby + Tamara enabled (veneers > SAR 5000/tooth) |
| Examples | Bright Smile Clinics, Bright Dent, Aventura Dental Arts |

**New goal — Confidence:**
```ts
{
  slug: "confidence",
  symbol: "✦",
  name: { en: "Confidence", ar: "ثقة" },
  tagline: { en: "Carry your smile.", ar: "احملي ابتسامتكِ." },
  hero: {
    eyebrow: { en: "✦ Goal · Confidence", ar: "✦ الهدف · الثقة" },
    headlinePartA: { en: "The smile you give", ar: "الابتسامة التي تمنحينها" },
    headlineEm: { en: "is the smile you wear.", ar: "هي الابتسامة التي ترتدينها." },
    sub: { ... }
  },
}
```

---

## Archetype C — Dental Only Family

**Typical:** family-oriented dental, pediatric + adult, single branch, mid-market premium pricing.

| Property | Value |
|---|---|
| Goals enabled | Smile, **Family** (new), Restore |
| Goals removed | Glow, Contour, Longevity, Confidence |
| Sections removed | BookCta "Eid Acceleration" — replace with "School Year Smile Check" |
| Copy voice | `warm` (parental, reassuring) |
| Palette | `default` (lighter accents) |
| Image moodboard | small hands, parent + child silhouettes, baby teeth macro |
| Pricing tier | mid-premium |
| BNPL | Tabby + Tamara enabled (family packages) |

**New goal — Family:**
```ts
{
  slug: "family",
  symbol: "✦",
  name: { en: "Family", ar: "العائلة" },
  tagline: { en: "From first tooth to wedding day.", ar: "من السن الأول إلى يوم الزفاف." },
}
```

---

## Archetype D — Derma Focused Clinical

**Typical:** medical dermatology clinic, science-led, often with diagnostic / lab imaging, multi-modality (acne / pigmentation / vascular / hair).

| Property | Value |
|---|---|
| Goals enabled | Glow, Restore, **Diagnose** (new) |
| Goals removed | Contour, Smile, Longevity |
| Sections enhanced | Add Lab/Diagnostic page emphasis on /services |
| Copy voice | `clinical` (precise, evidence-cited, restrained) |
| Palette | `default` (slightly cooler accents) |
| Image moodboard | microscopy, glass slides, skin macro, diagnostic-tools, NO faces |
| Pricing tier | premium |
| BNPL | Tabby + Tamara optional (some patients prefer cash) |
| Examples | Zieda Aesthetics, Eva Clinics medical line |

**New goal — Diagnose:**
```ts
{
  slug: "diagnose",
  symbol: "✦",
  name: { en: "Diagnose", ar: "تشخيص" },
  tagline: { en: "Skin science, before skincare.", ar: "علم البشرة، قبل العناية." },
}
```

---

## Archetype E — Aesthetic + Dental (Bright Al Ahsa)

**Typical:** multi-modal clinic offering BOTH aesthetic medicine AND cosmetic dentistry under one roof. 1-3 branches. Women-primary.

| Property | Value |
|---|---|
| Goals enabled | Glow, Contour, Smile, Restore |
| Goals removed | Longevity |
| Sections removed | (none — full template fits) |
| Copy voice | `warm` (institutional but warm) |
| Palette | `default` |
| Image moodboard | mixed — face mood + mouth macro + lab equipment + marble interiors |
| Pricing tier | premium |
| BNPL | Tabby + Tamara enabled |
| Examples | **Bright Specialized Clinics**, Royal Clinic Saudi, The S Clinic |

---

## Archetype F — Multi-Specialty Hospital Lite

**Typical:** larger clinic with 5+ verticals (derma, dental, OB-GYN, peds, bariatric, plastic surgery, day surgery). 2-5 branches.

| Property | Value |
|---|---|
| Goals enabled | Glow, Smile, **Family** (new), Restore, **Diagnose** (new) |
| Goals removed | Contour (folded into Restore), Longevity |
| Sections enhanced | Departments page becomes primary content (instead of goals) |
| Copy voice | `institutional` (hospital-grade authority) |
| Palette | `default` |
| Image moodboard | full hospital interiors + each specialty's mood |
| Pricing tier | mid-premium |
| BNPL | Tabby + Tamara per service |
| Examples | Bright (with all branches), Almoosa Clinics, Almana Group lite |

---

## Archetype G — Longevity, Men-Inclusive

**Typical:** healthspan + longevity clinic, men-and-women inclusive, premium pricing, science-led. Often new (post-2024 KSA market entry).

| Property | Value |
|---|---|
| Goals enabled | **Vitality** (new), Longevity, Restore |
| Goals removed | Glow, Contour, Smile |
| Sections changed | Hero leadItalic = longevity-tone, not aesthetic-tone |
| Sections enhanced | About page becomes "Methodology" page |
| Copy voice | `bold` (confident, future-oriented, science-cited) |
| Palette | `theme-midnight` (silver + slate, modern) |
| Image moodboard | architecture, scientific equipment, mature hands, NO faces |
| Pricing tier | premium (often above SAR 10K — BNPL irrelevant) |
| BNPL | Disabled (price points exceed SAMA cap) |
| Examples | Biolite Dubai, Surrenne London, Lanserhof |

**New goal — Vitality:**
```ts
{
  slug: "vitality",
  symbol: "✦",
  name: { en: "Vitality", ar: "حيوية" },
  tagline: { en: "What you do today, your body remembers.", ar: "ما تفعله اليوم، يتذكّره جسدك غداً." },
}
```

---

## Archetype H — Wellness Retreat Style

**Typical:** retreat / wellness destination with programs (not à la carte treatments). Multi-day or multi-week packages.

| Property | Value |
|---|---|
| Goals enabled | **Reset**, Restore, **Rebalance**, Longevity |
| Goals removed | Glow, Contour, Smile |
| Sections heavily changed | Services page = "Programs" with multi-day commitment |
| Sections removed | Eid Banner (occasion model doesn't fit) |
| Copy voice | `warm` + `bold` (transformation language) |
| Palette | `theme-olive` (sage + oat — heritage-coded) |
| Image moodboard | landscape, retreat architecture, dawn + dusk, water |
| Pricing tier | premium-plus (SAR 15K+ per program) |
| BNPL | Disabled |
| Examples | Chiva-Som, SHA Wellness, AlUla wellness brands |

---

## Goal symbols & accent colors

| Goal | Symbol | Accent color |
|---|---|---|
| Glow | ✦ | `#d4b87a` |
| Contour | ❖ | `#b8935a` |
| Smile | ✧ | `#9a7847` |
| Restore | ❋ | `#7a8471` |
| Longevity | ✱ | `#0a1f2e` |
| Confidence | ✦ | `#a8855c` |
| Family | ❉ | `#b8956d` |
| Diagnose | ✜ | `#3a5466` |
| Vitality | ✪ | `#506072` |
| Reset | ✤ | `#8a9477` |
| Rebalance | ❀ | `#a8b89c` |

---

## How to add a NEW archetype

If a clinic doesn't fit A-H:

1. Don't force-fit. Mark in `extraction.summary.md` as "needs new archetype".
2. PR a new archetype section to this file (e.g., Archetype I — Oncology Boutique).
3. Define: goals, sections, copy voice, palette, moodboard.
4. Run injection prompt again with the new archetype letter.

This keeps the system extensible without breaking existing clinics.
