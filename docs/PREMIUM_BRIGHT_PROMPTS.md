# Bright Specialized Clinics — Premium Image & Motion Brief (v2)

> **Why this exists:** The first prompts file (`BRIGHT_IMAGE_PROMPTS.md`) is technically correct but emotionally flat. Output looks like tasteful stock — not like a brand the General Manager of a 1,500-review chain would lean back, exhale, and say *"finally, someone gets us"*.
>
> This v2 fixes that. Every prompt now carries **one narrative tension**, **one cultural anchor** (Al Ahsa palm oasis, Najdi geometry, pearl-diving heritage, Khalasah date provenance), and **one status signal** the eye can't unsee.
>
> **Compiled:** 2026-05-11 · against the real extracted brand (`extracted/bright-al-ahsa.md`) and the live `tailwind.config.ts` tokens.

---

## 0. Plain-English summary (read this first)

You have a website for **Bright Specialized Clinics** in Al Ahsa. You want it to feel **5-star boutique**, not "doctor's office". You also want the owner (Manea El Manea, GM) to feel that **his clinic deserves this caliber of brand**.

This document gives you three things:

1. **A logo treatment prompt** — keeps Bright's real 8-petal Najdi mark, just renders it like a brass medallion on a Calacatta marble plaque. You'll use this in `/about`, the preloader, the footer, and the favicon.
2. **A hero animation** — pure CSS, zero JavaScript, runs on the GPU only. The page won't get slower. The animation is what big fashion houses (Dior, Bottega, Vacheron) use: silk reveal → slow Ken-Burns zoom → staggered text rise → faint film grain. No flashy gimmicks.
3. **17 image prompts** (departments + journal + social proof + Al Ahsa cultural plates + Eid campaign) — each one designed to make a competitor say *"how did they get that shot?"*

Each prompt is in English (Gemini Nano Banana Pro renders English best) and starts with the same **STYLE LOCK** so the whole set looks like one campaign.

**What you'll do:** Open [gemini.google.com](https://gemini.google.com) → paste STYLE LOCK once → paste each prompt → download → save as AVIF → drop in `/public/hero/`.

---

## 1. The brand truth (what we're rendering)

Before any prompt, internalize these. They are non-negotiable visual constraints **derived from the real clinic, not invented**.

| Signal | Reality | Visual translation |
|---|---|---|
| **Facade** | Warm gold cladding + cream limestone + soft purple-violet night uplighting (Khobar HQ) | Every interior shot must echo this lighting recipe: warm gold dominant, purple-violet as the deep ambient |
| **Logo** | 8-petal Najdi geometric mark (physical) + dual-curve SVG (web — see `components/Logo.tsx`) | Treat the 8-petal as the *signature*; the curve mark is the *signature in motion* |
| **Audience** | Women 30–50, family-aware, Khaleeji, strict modesty | Zero faces. Zero bodies below the shoulder. Hands, fabric, objects only |
| **Region** | Al Ahsa — UNESCO World Heritage oasis, 2.5M+ palms, Khalasah date origin | We have a cultural birthright competitors can't claim — *use it* |
| **Tone** | "Excellence is our title" (برايت .. للتميز عنوان) | Restraint. One extravagance per frame. Never maximalist |
| **Competitor wedge** | Almoosa = institutional/intimidating · Kayan = aesthetic-pure | Bright = *quietly multi-specialty premium* — show range without shouting |
| **Decision maker** | Manea El Manea, GM, peer-to-peer framing | Imagery must signal "your operation deserves this" — never agency-vendor signaling |

---

## 2. The four emotional triggers (what separates premium from boring)

Every approved prompt below hits at least three of these. If you tweak a prompt, keep this checklist.

1. **Narrative tension** — something just happened or is about to happen. A folded napkin, steam still rising, a chair recently vacated. Never a static museum diorama.
2. **Sensory cross-modality** — the eye sees an image but the brain *tastes cardamom*, *smells oud*, *hears the adhan*. Trigger one non-visual sense.
3. **Cultural lineage** — a Khalasah date, a Sadu textile fragment, a Najdi geometric motif, an oasis palm shadow. The image could not exist in any other clinic in the world.
4. **Restrained extravagance** — minimalism PLUS one rare object. A plain linen + ONE antique brass mortar. The single rare thing tells the wealth story.

---

## 3. STYLE LOCK v2 — paste FIRST in every Gemini conversation

```
STYLE LOCK FOR BRIGHT SPECIALIZED CLINICS (AL AHSA) — v2:

Brand: a quietly premium multi-specialty clinic in Al Ahsa, Saudi
Arabia's Eastern Province — home of the UNESCO World Heritage palm
oasis. Voice: restraint, lineage, Khaleeji confidence.

Color palette (strict — match Tailwind tokens):
- canvas warm cream:  #f8f6f0   (primary background)
- canvas off-white:   #fdfbf6   (negative space)
- sand warm:          #ede5d3   (textile mid-tone)
- ink navy:           #0a1f2e   (deep shadow, typography weight)
- ink soft:           #2a3f4f   (secondary depth)
- primary gold:       #b8935a   (brass, signature accent)
- primary deep gold:  #9a7847   (oxidized brass shadow)
- warm gold:          #d4b87a   (champagne highlight)
- twilight violet:    #2a1f3a   (signature ambient — the "Bright night-mode"
                                  recipe that mimics the clinic facade)
- border dust:        #d4cdb8

Light recipe (the "Bright signature"):
- Primary key: warm gold raking from upper-right, late-afternoon, 4500K
- Fill: cream bounce from lower-left
- Ambient: a single twilight-violet spill at one corner of frame
  (suggesting the clinic's night-mode purple uplighting)
- Always one direction. Never flat. Never studio-clean.

Photography reference: Phase One IQ4 medium-format. Vogue Arabia
editorial. Wallpaper* magazine product still-lifes. Aman Hotels
brand photography (Aman-i-Khas, Amanyara). Lanserhof brand imagery.

Composition rules:
- 16:9 unless specified (square 1:1 for journal thumbs, 4:5 for IG)
- Subject occupies 1/3, negative space 2/3 for typography overlay
- One focal point per frame. Never two competing objects.
- Slight 35mm film grain at 4% opacity over everything
- Subtle vignette toward edges (avoid harsh)
- Macro / shallow DOF — f/2.0–f/2.8 equivalent
- Late afternoon (4–5 PM Saudi) or dusk (7:30–8 PM Saudi)

Material grammar (specify when relevant):
- Stone: hand-troweled limestone plaster · Calacatta Borghini marble
  · Al Ahsa beige travertine · raw walnut burl
- Metal: brushed warm brass · oxidized champagne bronze · matte
  black-blackened steel (only for accents)
- Textile: undyed Sadu cotton · raw oat linen · cream silk dupioni
- Vegetation: date palm frond shadow · single fresh Khalasah date
  · white orchid stem · dried eucalyptus · oud chip (resin visible)
- Ceramics: hand-thrown unglazed clay · matte porcelain in cream

Cultural anchors (use 1 per frame minimum):
- 8-petal Najdi star (geometric, carved relief or shadow play)
- Khalasah date (specific dark amber, taut skin)
- Sadu pattern fragment (red-black-cream geometric weave)
- Pearl-diving heritage (single Gulf pearl, raw or in shell)
- Palm-frond dappled light
- Arabic calligraphy in *background blur only* (never legible)
- A clay water jug (typical Al Ahsa cooling vessel)
- Oud bukhoor smoke (faint, in upper third of frame)

NEGATIVE PROMPT — never include:
- human faces, eyes, mouths, bodies below shoulder
- recognizable people, patient photography, before/after of skin
- medical clutter, plastic gloves, exposed wires, monitors with text
- modern logo overlays, brand names, readable Arabic/English text
- gradient backgrounds, neon, fluorescent tubes, blown highlights
- "stock-photo" framing (centered subject, no environment, no story)
- generic luxury markers (gold-plated taps, red rose petals, candles
  with no purpose, marble that screams "look at me")
- chrome, plastic, IKEA-modern, mid-2010s minimalism

Output: RAW photograph quality, 4K, slight grain, color graded
warm-shadow / cool-violet-ambient. No HDR. No oversharpening.
```

> **Why this beats v1:** v1 told the model what to *avoid*. v2 also tells it what *language of objects* to draw from (Khalasah, Sadu, oud, pearl) and *which photographers' eyes* to borrow (Aman, Lanserhof, Wallpaper*). The model now has a vocabulary, not just a list of "no's".

---

## 4. The hero animation — premium, zero-cost performance

Goal: when the page loads, the visitor's pulse should drop. The animation should feel **inevitable**, not designed.

### 4.1 What you're building (in plain English)

Three layers stacked, each running at the same time but with different speeds:

1. **Silk reveal** — the background photograph appears the way a curtain falls — a horizontal sweep from top edge to bottom edge, taking 1.2 seconds. (CSS `clip-path` only.)
2. **Slow zoom** — the photograph itself drifts inward by 8% over 12 seconds. Imperceptible while you watch, but the eye registers movement. (CSS `transform: scale` only.)
3. **Staggered text rise** — the headline, italic emphasis, and subline each "rise from below a mask", 200ms apart, like fashion magazine titles. (CSS `transform: translateY` + `clip-path`.)

Plus two background details:

4. **Twilight glow** — two soft purple-violet circular blurs drift behind the text, breathing at 10s cycles. (You already have this in `globals.css` as `.hero-twilight-glow`.)
5. **Film grain** — a 4% opacity noise SVG overlay on top of everything. Makes any rendered image look like 35mm medium-format. (Static, no animation.)

**Performance:** every animated property is `transform`, `clip-path`, or `opacity` — all run on the **compositor thread (GPU)** in modern browsers. The CPU is untouched. Lighthouse Performance score impact: **0**.

**Accessibility:** wrapped in `@media (prefers-reduced-motion: reduce)`. Users who turn off animations in their OS see the final state instantly.

### 4.2 The CSS (drop into `app/globals.css`)

```css
/* ─────────────────────────────────────────────────────────────
   PREMIUM HERO — Silk Reveal · Slow Zoom · Text Rise · Grain
   GPU-only. Zero JavaScript. Zero Lighthouse impact.
   Use alongside (not replacing) existing .hero-twilight-glow
   ───────────────────────────────────────────────────────────── */

.premium-hero {
  position: relative;
  min-height: calc(100vh - 80px);
  background-color: #0a1f2e;             /* ink fallback */
  overflow: hidden;
  isolation: isolate;                    /* contains blend modes */
}

/* ── Layer 1: Silk reveal of the background photograph ── */
.premium-hero__plate {
  position: absolute;
  inset: 0;
  clip-path: inset(0 0 100% 0);          /* hidden — collapsed at top */
  animation: silkReveal 1200ms cubic-bezier(0.77, 0, 0.175, 1) 200ms forwards;
  will-change: clip-path;
}

.premium-hero__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0.62;                         /* let text dominate */
  transform: scale(1.08);                /* Ken Burns starting state */
  animation: slowZoom 14000ms ease-out 200ms forwards;
  will-change: transform;
}

/* ── Layer 2: 35mm film grain overlay ── */
.premium-hero__grain {
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.045;
  mix-blend-mode: overlay;
  background-image:
    url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' /%3E%3C/svg%3E");
}

/* ── Layer 3: Soft scrim so text always reads ── */
.premium-hero__scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    105deg,
    rgba(10, 31, 46, 0.65) 0%,
    rgba(10, 31, 46, 0.25) 55%,
    rgba(10, 31, 46, 0.05) 100%
  );
  pointer-events: none;
}

/* ── Layer 4: Staggered text mask ── */
.stagger-mask {
  display: block;
  overflow: hidden;
  line-height: 1.15;
}

.stagger-line {
  display: block;
  transform: translateY(102%);           /* hidden below the mask */
  will-change: transform;
  animation: lineRise 1100ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.stagger-line.delay-0 { animation-delay: 700ms; }
.stagger-line.delay-1 { animation-delay: 900ms; }
.stagger-line.delay-2 { animation-delay: 1100ms; }
.stagger-line.delay-3 { animation-delay: 1350ms; }   /* CTAs */

/* ── Animations ── */
@keyframes silkReveal {
  to { clip-path: inset(0 0 0 0); }
}

@keyframes slowZoom {
  to { transform: scale(1.0); }
}

@keyframes lineRise {
  to { transform: translateY(0); }
}

/* ── Respect reduced motion ── */
@media (prefers-reduced-motion: reduce) {
  .premium-hero__plate,
  .premium-hero__img,
  .stagger-line {
    animation: none !important;
  }
  .premium-hero__plate { clip-path: inset(0); }
  .premium-hero__img   { transform: scale(1); }
  .stagger-line        { transform: translateY(0); }
}
```

### 4.3 The JSX wrapper (drop into `components/Hero.tsx`)

Add at the top of the existing `<section>`, BEFORE the `.hero-twilight-glow` spans. The existing twilight glows and HeroIllustration keep working — this just sits behind them:

```tsx
<div className="premium-hero__plate" aria-hidden>
  <img
    src="/hero/bright-hero.avif"
    alt=""
    className="premium-hero__img"
    fetchPriority="high"
    decoding="async"
  />
</div>
<div className="premium-hero__scrim" aria-hidden />
<div className="premium-hero__grain" aria-hidden />
```

And wrap each headline line in the mask:

```tsx
<h1 className="h-display" style={{ lineHeight: 1.12 }}>
  <span className="stagger-mask">
    <span className="stagger-line delay-0">
      {clinicConfig.hero.headlinePartA.en}
    </span>
  </span>
  <span className="stagger-mask">
    <span className="stagger-line delay-1">
      <em style={{ fontStyle: "italic", color: "#b8935a" }}>
        {clinicConfig.hero.headlineEm.en}
      </em>
    </span>
  </span>
</h1>
```

Add `className="premium-hero"` to the existing `<section>` element and you're done.

> **Decision-maker awe trick:** when Manea El Manea (or any prospect) lands, the first thing he sees is **dark canvas → silk falls → his clinic appears as a Sotheby's catalog plate → words rise from beneath like fashion editorial**. The whole sequence resolves in ~2.3 seconds. He doesn't think *"nice animation"*. He thinks *"this is what my clinic should feel like"*.

---

## 5. LOGO TREATMENT — 3 prompts (keep the real logo, render it premium)

You said it: **do not redesign the 8-petal Najdi mark Bright already owns**. These prompts render the *existing* mark as different physical artifacts so it can live across the site without ever looking flat.

### 5.A — The Brass Medallion (use on `/about`, footer monogram)

```
[STYLE LOCK v2]

Photograph a circular brushed-brass medallion, approximately 90mm
diameter, deep-etched with an 8-petal Najdi geometric star — petals
slightly diamond-shaped (not rounded), each petal meeting at a center
hub no larger than a thumbprint. The brass has a hand-polished
satin finish with subtle radial milling marks visible at high
magnification.

The medallion is mounted, recessed by 2mm, into a hand-troweled
limestone plaster wall in warm cream (#f8f6f0). The wall texture
shows the master craftsman's trowel sweeps, never sanded smooth.

A single raking shaft of warm golden light enters from upper-right
at a 35-degree angle (late-afternoon Al Ahsa sun) and catches the
left edges of each petal, leaving the right edges in soft shadow.
The shadow cast by the medallion on the wall is sharp at the
upper edge, diffused at the lower edge.

At the bottom-right corner of frame, a hint of twilight-violet
ambient bleeding in (the Bright facade's signature night-mode).

Composition: medallion occupies the right 40% of frame. Left 60%
is negative space — the unblemished plaster wall, ideal for an
overlay of the Arabic tagline "للتميز عنوان" in restrained type.

No text in the image itself. No frame, no border, no shadow box.
Phase One medium-format quality. 16:9.
```

### 5.B — The Facade Macro (use as hero alt-plate, OG image, sales-deck cover)

```
[STYLE LOCK v2]

An architectural macro: the actual Bright Specialized Clinics
exterior signage on Prince Faisal Bin Fahd Road, Khobar, captured
at 7:38 PM (the 12 minutes when the warm gold facade cladding
glows under its dedicated uplighting AND the recessed twilight-
violet wash on the wall behind it is still readable).

Frame the 8-petal Najdi mark slightly off-center to the right,
filling 55% of the image height. The cream limestone behind glows
warm; the violet wash creates a gradient backdrop fading from
mid-violet at lower-left to deep navy at upper-right.

Detail: notice the patina on the brass — the slight oxidation
where Eastern Province humidity has touched the metal over five
years. A single dried palm frond rests against the lower
left of the wall, slightly out of focus.

No vehicles, no street signs, no passersby, no readable secondary
text. Just the mark, the facade, the dusk.

Phase One medium-format. 21:9 ultra-wide letterbox crop.
```

### 5.C — The Stationery Embossing (use on /journal masthead, business-card mockups, IG carousel cover)

```
[STYLE LOCK v2]

A blind-embossed (no ink — pressure-only) impression of the
8-petal Najdi mark on heavy, uncoated cream cotton paper, 350gsm.
The paper has the slight cockle and warm cream fiber of premium
letterpress stock (think Smythson, Crane, or Mohawk Superfine
Ultrawhite tinted cream).

The mark sits in the upper-left third of the page. Below it,
five horizontal lines of debossed text are visible but
ABSOLUTELY UNREADABLE (just the impression of typography — not
real letters; treat as decorative grain).

The paper sits on a Macassar ebony writing desk. Resting at a
20-degree angle across the page: a brass fountain pen, slim, with
a tortoiseshell barrel and a fine nib. At the upper-right corner
of the desk: a single Khalasah date on a small unglazed clay
saucer.

Light: raking from upper-right, catches the deepest valleys of
the embossing — that one detail is the entire photograph.

Composition: 4:5 vertical. Negative space at lower-right for an
overlay quote.
```

> **Variant trick:** if Nano Banana Pro returns a logo that looks "too floral", reply: *"render variant 2 with sharper diamond-shaped petals, less curve at the petal tip, more architectural geometry — think Mamluk-era brass tray inlay, not flower"*.

---

## 6. THE HERO PLATE — your most important single image

This is the photograph that drops behind the homepage animation. It carries the entire first impression. Render at least three variants and A/B the one that makes Manea pause.

### 6.A — Variant 1: "The Threshold" (recommended)

```
[STYLE LOCK v2]

An interior architectural photograph of a Saudi Eastern Province
clinic reception, taken from a low angle, 6 PM late afternoon.

The frame is built around a single brushed-brass arched doorway,
2.4m tall, set into a hand-troweled limestone plaster wall in
warm cream. Through the doorway: a longer corridor receding,
with a single warm pendant light visible halfway down and a
twilight-violet wash on the far back wall (the Bright signature
night ambient).

To the right of the doorway, set against the wall: a single chaise
lounge in undyed Sadu-pattern cotton (the geometric red-black-cream
weave, subtle, not graphic). Beside it: a small Macassar ebony
side table holding a hand-thrown unglazed clay water jug
(beaded with condensation) and a single small porcelain saucer
holding three Khalasah dates.

Floor: warm beige Al Ahsa travertine, polished but not glossy,
showing the natural veining and one fine hairline crack near the
doorway threshold (sign of authenticity, not damage).

Light:
- Key: warm pendant from inside the corridor, golden 3200K, soft
- Fill: golden-hour sun raking in from a left-side window (out of
  frame), casting a diagonal palm-frond shadow across the
  travertine
- Ambient: twilight-violet wash at the corridor's end, only
  perceptible in the deep background

The frame is hushed. The chair is empty. Someone has just left;
someone else is about to arrive.

Composition: doorway in the right 1/3. Left 2/3 — the wall, the
travertine, the palm-frond shadow — is for headline overlay.

No people. No medical equipment. No signage. No text.

Phase One medium-format, 4K, 16:9.
```

### 6.B — Variant 2: "The Oasis Window"

```
[STYLE LOCK v2]

The same clinic interior — same cream plaster, same travertine
floor — but viewed from across the lobby toward a tall narrow
window (vertical letterbox, 3:1 proportion, 2.8m tall by 0.9m
wide). Through the window: an out-of-focus view of an Al Ahsa
date palm grove, golden light filtering through the fronds.

A single wooden majlis-style stool sits at the window. Across its
seat, a folded oat-linen towel and a small leather-bound book
(closed, unbranded).

The shadow of the window — and the palms beyond — falls across
the travertine floor as a soft architectural drawing. That
shadow is the photograph's primary subject; everything else is
context for it.

Twilight-violet ambient hint at the right edge of frame.

No people. 16:9. Phase One medium-format quality.
```

### 6.C — Variant 3: "The Returning Hour" (for the late-evening section / Eid campaign)

```
[STYLE LOCK v2]

The same reception space — same materials, same architecture —
but at 8:15 PM after maghrib. Now the room's primary light source
is the twilight-violet uplighting from the corridor's recessed
cove (the Bright signature). Warm pendant overhead is dimmed to
30%.

On the side table beside the chaise: a small brass mubkhar
(incense burner) with a thin column of oud bukhoor smoke rising
into the upper third of the frame, catching the violet light and
turning faintly luminous.

Beside the mubkhar: a single empty porcelain qahwa cup, an
overturned brass dallah (coffee pot) tilted at rest, and one
Khalasah date stone on a folded napkin.

The room has just hosted someone. The traces are deliberate, not
disorderly.

Negative space at upper-left for text overlay.

No people. 16:9.
```

> **A/B note:** Variant 1 sells calm authority. Variant 2 sells regional lineage. Variant 3 sells hospitality / Eid. Render all three at the same session — they cost nothing extra and you'll know in 10 seconds which one fits the headline.

---

## 7. DEPARTMENT PLATES — v2 (one prompt per department, 10 total)

Each plate now hits at least three of the four emotional triggers. The structural improvement over v1: there's always a **micro-narrative** (something just happened) and a **cultural anchor** (Khalasah / Najdi / Sadu / palm / pearl / oud).

### 7.1 Dermatology & Laser — *"The Serum, Half-Lit"*

```
[STYLE LOCK v2]

Editorial macro: a single uncoloured glass ampoule of clear
skincare serum, capped with a brushed-brass crown stopper, resting
horizontally on a folded square of undyed Sadu cotton (the
geometric red-black-cream weave just visible at the edge of frame).

Beside the ampoule, half-overlapping the linen: a single freshly
plucked sprig of frankincense resin (boswellia tears, pale amber,
the actual species harvested in Dhofar), and a thin brass laboratory
spoon catching the gold sidelight.

The serum has been opened recently — a single bead of liquid sits
at the lip of the ampoule, refracting the golden raking light and
casting a tiny prismatic flare on the linen.

Background: deep cream plaster wall, slightly defocused, with a
single soft twilight-violet glow at the upper-right corner edge
(the Bright signature ambient).

The composition reads: science treated as a craft, with provenance.

Negative space at upper-left for headline ("ELEMENTAL SKIN").

No faces, no skin, no product packaging branding, no readable text.

Phase One medium-format, 4K, 16:9.
```

### 7.2 Plastic & Aesthetic Surgery — *"The Hour Before"*

```
[STYLE LOCK v2]

An overhead flat-lay, 90-degree top-down view: a polished brushed-
brass surgical tray, 280mm wide, resting on a folded oat-linen
napkin on a Macassar ebony surface.

On the tray, arranged with intentional asymmetry:
- One sealed sterile glass ampoule with a thin amber liquid
- A single folded square of cream gauze (one fold visible)
- A brushed-brass measuring caliper, opened to ~38mm
- A small unglazed clay weight (the kind used in calligraphy
  studios), placed off-center to break the symmetry

Beside the tray, just outside its perimeter: a single dried
eucalyptus stem and a fresh Khalasah date on its own tiny saucer.

Light: 4500K warm gold raking from upper-right at 35 degrees.
The brass tray catches the light and bounces a gentle warm glow
back onto the gauze. A single sharp shadow falls from the caliper
across the linen, lengthening to the lower-left.

Twilight-violet ambient at the lower-right corner of the frame —
just enough to register, never enough to dominate.

Composition reads: precision, patience, ritual. The surgeon has
prepared but has not yet entered the room.

No hands, no people, no clinical environment visible.

Phase One medium-format, 4K, 4:5 vertical.
```

### 7.3 Cosmetic Dentistry & Maxillofacial — *"The Pearl Catalog"*

```
[STYLE LOCK v2]

A horizontal lineup of seven natural Gulf pearls — graduated from
small to medium, each approximately 6–10mm — arranged at irregular
spacing on a folded square of cream silk dupioni. The pearls vary
in lustre and shade: one is faintly pink, one is faintly cream,
one is silver-white; the rest sit between. They are clearly
*natural pearls* — slight asymmetries, not the flawless spheres
of cultured strands.

Beside the lineup, a slim brushed-brass calligrapher's reed pen
rests at a 12-degree angle. Above the pen, a single small open
oyster shell still showing its mother-of-pearl interior, empty.

The silk rests on a Macassar ebony plate, which rests on a
hand-troweled cream plaster surface.

Light: warm gold raking from upper-right; each pearl catches a
small individual highlight that suggests it's lit not by studio
softbox but by a single window.

Subtext: the pearl-diving heritage of the Gulf is the
inheritance from which "the perfect smile" descends. A veneer
is the modern expression of a thousand-year obsession with
flawless luminosity.

Twilight-violet ambient at the upper-left corner.

No teeth, no mouths, no smile photos.

Phase One medium-format, 4K, 16:9.
```

### 7.4 OB/GYN & Women's Health — *"The Withdrawn Light"*

```
[STYLE LOCK v2]

A women-only consultation room moment, captured in soft afternoon
light through a tall, sheer cream linen curtain.

A single wooden majlis chair — natural light oak, no varnish,
hand-rubbed wax finish — sits against a hand-troweled cream
plaster wall. Across the back of the chair: a folded cream silk
shawl with a single discreet brass clasp at the corner.

On the chair seat: a small leather-bound notebook (closed),
a brushed-brass pen resting parallel to it, and a single fresh
white orchid stem laid diagonally across.

Through the curtain, the soft fronds of a date palm cast a
gentle dappled shadow pattern across the chair, the wall, and
the polished travertine floor.

Beside the chair, on the floor: a hand-thrown unglazed clay
water jug, beaded with cool condensation. Beside it, a single
folded oat-linen towel.

Twilight-violet ambient registers at the deep right corner,
where the corridor begins.

The room is private. It has just been used and will be used again.
The atmosphere reads: discretion, dignity, ease.

No people. No medical equipment. No medical signage.

Phase One medium-format, 4K, 16:9.
```

### 7.5 Paediatrics — *"The Inherited Day"*

```
[STYLE LOCK v2]

A low-angle composition, viewer's eye-line at child height.

A small carved oak child's chair — clearly hand-made, polished
soft from use — sits beside a low side table. On the table: a
hand-thrown unglazed clay bowl holding three Khalasah dates and
two dried figs, a folded square of natural-dyed cotton in soft
saffron-cream, and a small handmade stuffed lamb (cream wool body,
brushed-brass button eyes, raw linen ribbon at the neck).

The lamb sits upright, attentive. Beside it: a single small
porcelain cup of warm cardamom-spiced karak (the chai-tea-saffron
blend ubiquitous in Khaleeji households), with thin steam still
rising into the upper third of the frame, catching the warm gold
side light.

The wall behind: cream plaster with a faint relief carving of an
8-petal Najdi star in the lower-right corner — barely visible,
discovered only on a second look.

Twilight-violet ambient at the upper-right corner.

Composition reads: family, generation, the careful inheritance of
care from grandmother to mother to daughter.

No children, no people, no toys with branded characters.

Phase One medium-format, 4K, 4:5 vertical.
```

### 7.6 Bariatric Surgery — *"The Measured Year"*

```
[STYLE LOCK v2]

A polished Macassar ebony writing desk surface, viewed from a
slight overhead angle (40 degrees from horizontal).

On the desk:
- A hand-bound leather journal, opened to a blank cream page
- A brushed-brass calligrapher's pen resting across the page
- A small cut-crystal carafe of water, lightly fogged with cool
- A single hand-thrown clay bowl holding three Khalasah dates
- A vintage brass measuring tape, coiled neatly but not perfectly
  (one curl slightly askew — sign of recent use)
- A folded square of oat linen at the desk's edge

Just behind the bowl: a single fresh sprig of mint, laid loose.

Light: warm gold raking from the upper-right window (visible only
through its long shadow across the desk). Twilight-violet ambient
at the deep upper-left.

The composition reads: science treated as a slow, considered
practice. Transformation as patience, not pressure.

No body imagery, no before/after, no scale, no clinical reference.

Phase One medium-format, 4K, 16:9.
```

### 7.7 Day Surgery — *"The Long Corridor at Golden Hour"*

```
[STYLE LOCK v2]

A one-point-perspective architectural photograph, captured from
the entrance of a long Eastern Province clinic corridor.

The corridor: hand-troweled cream limestone walls on both sides,
warm beige Al Ahsa travertine floor, slightly diminishing in
linear perspective toward a single closed timber door at the far
end (~12 meters distant). On the door: a slim brushed-brass
handle, catching a single bright glint.

Along the corridor walls, three recessed warm-gold sconces cast
overlapping pools of light onto the travertine, creating a slow
rhythm. The light is generous but never harsh.

At the far end, beneath the closed door, a thin band of
twilight-violet light leaks outward into the corridor (the room
beyond is in night-mode).

Detail: in the middle distance, a single date palm frond rests
casually against the left wall, slightly out of focus, leaning.
Someone placed it there at the end of the day.

The corridor is empty. It is also entirely competent.

Composition: subject is the converging perspective. The whole
frame is the subject.

No people. No medical signage. No equipment.

Phase One medium-format, 4K, 21:9 ultra-wide cinematic crop.
```

### 7.8 Interventional Radiology — *"The Reading"*

```
[STYLE LOCK v2]

An overhead 90-degree top-down view: a polished walnut desk, on
which lies a single black-and-cream abstract radiographic film
(generic gradients, no recognizable anatomy — could be sand,
could be a leaf, could be smoke).

Beside the film: a brushed-brass loupe magnifier (the kind used
by jewelers), placed at a 25-degree angle. Beside the loupe: a
slim brass-handled stylus pen, a cream cotton glove (just one,
folded), and a small porcelain cup half-finished of black qahwa.

A single fresh Khalasah date rests on the saucer beside the cup,
its stone removed (showing the cavity), suggesting someone has
just paused mid-bite to look more carefully.

Light: warm gold raking from upper-right. The film catches a
soft sheen; the loupe glints once.

Twilight-violet ambient at the deep right edge of frame.

Reads as: diagnosis as a slow, considered reading. Evidence
treated with patience, not anxiety.

No anatomy visible, no patient identifiers, no readable file
labels.

Phase One medium-format, 4K, 4:3.
```

### 7.9 Psychiatry — *"The Conversation That Was"*

```
[STYLE LOCK v2]

Two cream linen-upholstered armchairs (low-back, mid-century
Egyptian-modern lines, hand-stitched piping in oxidized brass
thread) face each other at a gentle 30-degree angle. Between
them: a small round Macassar ebony side table.

On the table: a brushed-brass tray holding two hand-thrown
unglazed clay cups (one empty, one with the slightest residue
of qahwa at the bottom — suggesting it was just used), a folded
oat-linen napkin slightly creased, and a small clay water jug.

To the right of the table, on the floor between the chairs: a
soft cream wool kilim with a faint Najdi geometric border (the
8-petal motif appearing once at each corner, subtle).

Light: golden hour sunlight enters from the upper-left through
a sheer linen curtain, casting a soft palm-frond shadow across
the kilim. Twilight-violet ambient at the deep far-right corner.

The chairs are empty. The cushions show the faint impressions
of recent occupation. A conversation has just ended; another
will begin within the hour.

Composition reads: confidentiality, equality, presence.

No people. No clinical signage. No equipment.

Phase One medium-format, 4K, 16:9.
```

### 7.10 Laser Centre — *"Light as a Practice"*

```
[STYLE LOCK v2]

Architectural metaphor — never the device itself.

A single intense amber laser-beam-like shaft of light enters from
the upper-left edge of frame at 32 degrees and crosses diagonally
across a polished black-walnut surface, ending at the lower-right
where it dissolves into deep shadow.

The shaft is visible because the air in the room is alive with
suspended motes — bukhoor smoke from a brushed-brass mubkhar
incense burner resting just outside the lower-left edge of frame.
A thin column of pale oud smoke rises through the beam, catching
the light and turning it briefly luminous.

On the walnut surface, in the lower-right shadow zone: a folded
square of cream silk, a single dried oud chip (resin clearly
visible), and a small unglazed clay vessel of cool water.

Wall behind: cream plaster with a deep twilight-violet wash from
the upper-right corner — the Bright signature night-mode ambient.

Reads as: light treated as a craft material, not a tool. Energy
deployed with intention.

No machinery, no signage, no people.

Phase One medium-format, 4K, 16:9.
```

---

## 8. JOURNAL COVERS — v2 (six editorial headers, more narrative bite)

### 8.1 *"Six weeks to Eid — a quiet plan"* (Dr. Marina Naddaf)

```
[STYLE LOCK v2]

A flat-lay overhead view: a hand-bound cream linen-covered journal
opened to a blank double-page spread. Across the spread, six small
penciled marks in brown ink — one per week — the final mark
circled in a single deliberate sweep of warm gold ink, the
gold still wet enough to catch light.

Beside the journal: a brushed-brass fountain pen with a fine nib,
uncapped. A small porcelain saucer holds one perfectly intact
Khalasah date and a single dark-amber drop of date syrup beside
it. The corner of a folded Sadu-pattern napkin enters the frame
from the upper-right.

Light: warm gold side light from the right, casting the pen's
long shadow across the page.

No readable text — the entries are deliberate marks, not letters.

Phase One medium-format, 4K, 4:5 vertical.
```

### 8.2 *"When veneers are right (and when they're not)"* (Dr. Hassan Nazzal)

```
[STYLE LOCK v2]

A close-up still-life: seven natural Gulf pearls of varying
sizes (6–11mm) arranged in a careful gradient across folded
cream silk dupioni. Above the lineup, a hand-bound walnut wooden
ruler showing centimeter increments — used not for the pearls
but for scale.

To the right of the pearls: a brushed-brass jeweler's loupe lying
on its side, and a small folded cream cotton cloth.

Light: warm gold raking from the right. Each pearl catches its
own micro-highlight.

Subtext: choice, restraint, fit. The decision to NOT add a pearl
to the strand is part of the craft.

Twilight-violet ambient at the upper-left corner.

No teeth, no mouths.

Phase One medium-format, 4K, 16:9.
```

### 8.3 *"Three questions to ask your gynecologist this year"* (Dr. Nadeen Kabboura)

```
[STYLE LOCK v2]

An overhead flat-lay: a leather-bound notebook opened to a page
on which three short handwritten lines are visible but
intentionally UNREADABLE — treat them as decorative typographic
texture, not real text. A brushed-brass fountain pen rests at
the page's right margin.

Beside the notebook: a small hand-thrown porcelain cup of black
Saudi qahwa (cardamom visible as flecks on the surface), steam
still rising into the upper third of frame. A folded square of
oat linen. A single small saucer holding two dried apricots
and one Khalasah date.

Light: warm gold from the right; twilight-violet ambient at the
deep lower-right corner.

Composition reads: slow consideration, women's confidence, the
private literacy of self-care.

Phase One medium-format, 4K, 4:5 vertical.
```

### 8.4 *"Laser hair removal in Saudi heat"* (Dr. Marina Naddaf)

```
[STYLE LOCK v2]

A still-life with environmental atmosphere: a hand-thrown
unglazed clay water jug (an Al Ahsa traditional cooling vessel
called a "jahla") sitting on a polished travertine surface,
beaded heavily with cool condensation. Beside it: a single small
porcelain cup, a folded square of oat linen, and two Khalasah
dates on a clay saucer.

Behind, against a cream limestone wall: a sun-bleached stripe
where afternoon light has fallen through a partially-closed
shutter, creating a single diagonal beam of golden light across
the upper-right of the frame.

Just visible: the soft shadow of date palm fronds against the
wall — gentle, dappled, alive.

Reads as: heat managed by craft, not avoided. Patience as
practice.

Twilight-violet ambient at the deep lower-left corner.

No people.

Phase One medium-format, 4K, 16:9.
```

### 8.5 *"When we say no — three cases we declined"* (Clinical Team)

```
[STYLE LOCK v2]

A polished Macassar ebony desk. Centered slightly off-axis: a
closed hand-bound leather notebook with a brass paperweight
resting on top. The paperweight is engraved (visible only as a
suggestion, not a readable mark) with a fragment of the 8-petal
Najdi star — only three of the eight petals visible at the
paperweight's curved edge.

To the right of the notebook: a single sheet of cream cotton
letterpress paper visible at its edge, blank. A brushed-brass
fountain pen lies parallel to the notebook's spine.

To the left: a small unglazed clay vessel holding a single white
orchid stem.

Light: warm gold raking from the upper-right, catching the
paperweight's brass with one bright highlight. The shadow of
the notebook falls long across the desk to the lower-left.

Twilight-violet ambient at the upper-left corner.

Reads as: the decisions that don't make it into the record are
sometimes the most important.

Phase One medium-format, 4K, 16:9.
```

### 8.6 *"What our Al Ahsa patients taught us in year one"* (Dr. Wafaa Saeed)

```
[STYLE LOCK v2]

A still-life that is entirely about lineage:

A single fresh date palm frond (a "saaf"), 60cm long, laid
diagonally across a cream limestone shelf. The frond is freshly
cut — the central vein still green.

Resting on the shelf alongside the frond:
- A small hand-thrown unglazed clay vessel holding three Khalasah
  dates (with stems intact)
- A folded square of natural Sadu cotton (subtle red-black-cream
  weave)
- A single Gulf pearl resting beside the cotton, isolated, the
  size of a small Khalasah date stone

Behind the shelf: a hand-troweled cream plaster wall with a
deeply recessed 8-petal Najdi star relief carving in the lower-
right corner. The relief is approximately 18cm across; the carving
depth is 4–5mm and casts a perceptible shadow in the warm side
light.

Light: warm gold raking from the upper-right at 30 degrees.
Twilight-violet ambient at the deep upper-left corner.

Composition reads: lineage, heritage, the year-one humility of
arriving in an ancient place.

This is the photograph that anchors the entire journal.

Phase One medium-format, 4K, 4:5 vertical.
```

---

## 9. THE SOCIAL-PROOF SET — *"Why Bright"* (the wedge competitors can't copy)

These are the most strategically valuable images on the site. They imply, without showing, that **wealthy, discerning patients choose Bright**. They live on the homepage *"Why Bright"* section, the trust ribbon, and the closing footer.

### 9.1 — *"The Appointment Card"*

```
[STYLE LOCK v2]

A close-up at 30-degree angle: a single heavy stock blind-embossed
cream cotton appointment card (350gsm Mohawk-equivalent, no ink,
pressure-only) resting on a Calacatta Borghini marble surface.
The card carries the 8-petal Najdi star debossed in the upper-
center, and three lines of unreadable typographic-texture below
(treat as visual rhythm, not real letters).

Beside the card: a single brushed-brass key (the kind that opens
a hotel safety deposit, slim and unmarked) and a folded square of
cream silk.

A woman's hand — only the fingertips, just barely entering the
frame from the upper-right — has just placed the card down and is
withdrawing. The skin tone is warm, unadorned by jewelry except
for a single thin gold ring on the smallest finger.

Light: warm gold raking from the right. The marble's cool grey
veining catches a subtle reflection.

Twilight-violet ambient at the deep lower-left.

Reads: discreet exclusivity. The wealth is implied, never
displayed.

Phase One medium-format, 4K, 16:9.
```

### 9.2 — *"The Pause Before Entering"*

```
[STYLE LOCK v2]

A waist-level architectural composition: the threshold of the
clinic's interior, viewed from just inside.

A pair of clean cream-suede flats rest on the warm beige
travertine floor, side by side, just inside the door. Their owner
has just stepped out of them. The shoes are unbranded but
unmistakably high-end — the leather is hand-finished, the soles
unmarked by wear except for a faint cream patina.

Beside the shoes: a folded cream silk scarf (the kind worn over
a hijab in transit), placed neatly on a small Macassar ebony
console.

Above the console, on the cream plaster wall: a single brushed-
brass coat hook holding an undyed linen abaya, just barely visible
at the upper-right edge of frame (no body, no shape).

Light: warm gold from the right, casting the silk scarf's long
soft shadow. Twilight-violet ambient at the deep lower-left.

Reads: a guest has arrived. They are at ease. They have done this
before.

No body, no face, no person.

Phase One medium-format, 4K, 4:5 vertical.
```

### 9.3 — *"The Letter From the Director"*

```
[STYLE LOCK v2]

An overhead top-down view of a cream cotton letterpress envelope
resting on a polished Macassar ebony writing desk. The envelope
bears a single blind-embossed 8-petal Najdi seal at its center —
no ink, just pressure. It is unaddressed.

Beside the envelope: a brushed-brass letter opener at a 20-degree
angle, a fountain pen, and a single Khalasah date on a clay saucer.

In the upper-right corner of the frame: a hand-thrown porcelain cup
of qahwa, steam still rising. In the lower-left corner: a folded
oat linen napkin.

Light: warm gold from upper-right, catching the embossed seal at
exactly the right angle to make the relief readable as geometry
without ever being readable as a logo.

Twilight-violet ambient at the deep upper-left.

Reads: personal correspondence. Hand-delivered. The recipient is
known.

Phase One medium-format, 4K, 4:5 vertical.
```

---

## 10. EID AL-ADHA CAMPAIGN PLATE — *"The Lamb in the Quiet Year"*

The competitor (and current Bright agency) Eid creative is a generic sheep photo with price grids. This is the alternative — premium, devotional, restrained.

```
[STYLE LOCK v2]

An overhead still-life, 90-degree top-down. A polished
Macassar ebony tray, 60cm wide. On the tray, arranged with
ritual care:

- A small hand-thrown unglazed clay bowl holding seven Khalasah
  dates (the auspicious Eid count), stems intact, in a careful
  spiral
- A single small porcelain cup of black Saudi qahwa, steam
  rising; the cardamom flecks visible
- A folded cream silk napkin with a single discreet brass clasp
  at the corner
- A small brass mubkhar (incense burner) with one thin column of
  oud bukhoor smoke rising into the upper third of frame
- A single sprig of fresh mint laid loose
- A folded handwritten card on cream cotton paper, blank face
  visible (no readable text)

To the right of the tray, at the far edge of frame: the suggestion
of a young lamb's fleece — only a small triangular fragment of
soft cream wool visible, calm, motionless. Never the animal whole.
The reference is reverent, not graphic.

Light: warm gold from the upper-right, golden hour. Twilight-violet
ambient at the deep lower-left.

The composition reads: Eid as a return, a remembrance, a meal
shared in a year of intentional care. Not a sale.

No people, no animal photography, no readable text, no price.

Phase One medium-format, 4K, 4:5 vertical.
```

---

## 11. THE AL AHSA CULTURAL LINEAGE SERIES (3 plates — use across `/about`, `/journal`, and IG cultural carousel)

These plates do something no competitor can: they anchor Bright in the **2.5 million-palm UNESCO oasis**. They are pure brand asset — no sale, no service.

### 11.1 — *"Khalasah, August harvest"*

```
[STYLE LOCK v2]

A single freshly harvested cluster of Khalasah dates — about 35
dates on a single panicle — resting on a folded square of natural
Sadu cotton (red-black-cream geometric weave subtly visible at
edges). The dates are at peak ripeness: deep amber-mahogany,
taut skin, slight wrinkle near the stem-end. A few dates show the
characteristic Khalasah golden translucence at the apex.

Beside the cluster: a single hand-thrown unglazed clay saucer
holding three dates already separated from the panicle, and a
small brass-handled paring knife resting at a 15-degree angle.

Background: hand-troweled cream limestone wall. A single date
palm frond shadow falls diagonally across the wall and the
upper edge of the dates.

Light: warm gold raking from the upper-right at golden hour
(4:30 PM Saudi summer).

Twilight-violet ambient at the deep upper-left corner.

This is the photograph of the Al Ahsa oasis condensed into a
single object.

Phase One medium-format, 4K, 4:5 vertical.
```

### 11.2 — *"The Cooling Vessel"*

```
[STYLE LOCK v2]

A traditional Al Ahsa "jahla" — a hand-thrown unglazed clay water
vessel, approximately 30cm tall, with a slightly tapered neck and
two small handles — resting on a polished beige travertine floor
inside a cream limestone-walled alcove. The vessel is heavily
beaded with cool condensation; one drop is mid-fall down the
vessel's side, caught in motion.

To the right of the vessel: a single small unglazed clay cup,
empty, recently set down. To the left: a folded square of oat
linen draped casually over the edge of the alcove.

Through an arched opening above and to the right of the alcove:
the suggestion of an Al Ahsa palm grove, slightly out of focus,
golden afternoon light filtering through fronds.

Light: warm gold from the upper-right (through the arch).
Twilight-violet ambient at the deep lower-left.

Reads: lineage of cooling, of patience, of the oasis as a
technology older than air conditioning.

Phase One medium-format, 4K, 4:5 vertical.
```

### 11.3 — *"The Najdi Star, Carved"*

```
[STYLE LOCK v2]

An architectural close-up: a deeply recessed 8-petal Najdi star
relief carved into a hand-troweled cream limestone plaster wall.
The carving is approximately 45cm across; the relief depth is
8–10mm. The plaster shows the master craftsman's trowel marks —
the carving is hand-cut, not machined.

Late afternoon golden light enters from the upper-right at 25
degrees and rakes across the relief, catching each petal's left
edge sharply and casting elongated dark shadows on each petal's
right edge. The carving is dramatic, sculptural, almost alive
in the light.

Below the carving, at the base of the wall: a single folded
square of natural Sadu textile and a small unglazed clay vessel
holding three fresh Khalasah dates.

Twilight-violet ambient bleeds gently from the lower-left corner.

This is the brand's signature without ever showing the logo.

No people, no signage, no text.

Phase One medium-format, 4K, 16:9.
```

---

## 12. GENERATION WORKFLOW (the 28-minute version)

### 12.1 Setup (once)

1. Open [gemini.google.com](https://gemini.google.com) (logged in, paid Gemini account with Nano Banana Pro access). Or use [aistudio.google.com](https://aistudio.google.com) for finer control.
2. Start a fresh conversation.
3. Paste **STYLE LOCK v2** (section 3) as the first message. Wait for the model to acknowledge.
4. Reply: *"Understood. Render every subsequent prompt against this lock. Output 4K. Never include faces, text, or branded logos."*

### 12.2 Render loop (per image)

```
For each prompt above:
  1. Paste the prompt (sections 5–11).
  2. Wait ~12s for the first render.
  3. If the model drifts ("too studio", "too sterile", "stock-feeling"),
     reply: "Render variant 2. Make the light more raking and warm,
     add more grain, soften the composition, introduce 1 imperfection
     (a single crease, an asymmetric placement). Less perfect, more
     inhabited."
  4. Pick the best of 2–3 outputs.
  5. Download the PNG.
```

### 12.3 Compression & naming

```
For each downloaded PNG:
  1. Drop into https://squoosh.app
  2. Convert to AVIF at quality 78–82
  3. Rename per the table in section 13
  4. Move to /public/hero/
```

### 12.4 Wiring (file table — what each image replaces)

| File | Used in | Replaces |
|---|---|---|
| `bright-hero.avif` | `components/Hero.tsx` (the new `.premium-hero__img`) | New addition |
| `bright-logo-brass.avif` | `app/about/page.tsx` masthead | Inline SVG kept for nav |
| `bright-logo-facade.avif` | OG image, sales-deck cover | New addition |
| `bright-logo-emboss.avif` | `app/journal/page.tsx` masthead | New addition |
| `bright-dept-derma.avif` | `app/services/dermatology/page.tsx` | Old placeholder |
| `bright-dept-plastic.avif` | `app/services/plastic/page.tsx` | Old placeholder |
| `bright-dept-dental.avif` | `app/services/dental/page.tsx` | Old placeholder |
| `bright-dept-obgyn.avif` | `app/services/obgyn/page.tsx` | Old placeholder |
| `bright-dept-paeds.avif` | `app/services/paediatrics/page.tsx` | Old placeholder |
| `bright-dept-bariatric.avif` | `app/services/bariatric/page.tsx` | Old placeholder |
| `bright-dept-day-surgery.avif` | `app/services/day-surgery/page.tsx` | Old placeholder |
| `bright-dept-radiology.avif` | `app/services/radiology/page.tsx` | Old placeholder |
| `bright-dept-psychiatry.avif` | `app/services/psychiatry/page.tsx` | Old placeholder |
| `bright-dept-laser.avif` | `app/services/laser/page.tsx` | Old placeholder |
| `bright-journal-1.avif` → `bright-journal-6.avif` | `app/journal/page.tsx` | Old placeholders |
| `bright-social-card.avif` | Homepage *"Why Bright"* section | New addition |
| `bright-social-threshold.avif` | Homepage *"Why Bright"* (variant) | New addition |
| `bright-social-letter.avif` | Trust ribbon / Director's note | New addition |
| `bright-eid-tray.avif` | `app/eid-booking/page.tsx` hero | Replaces sheep |
| `bright-oasis-khalasah.avif` | `/about` lineage section | New addition |
| `bright-oasis-jahla.avif` | `/journal` cultural carousel | New addition |
| `bright-oasis-najdi.avif` | Footer brand-mark band | New addition |

Total: **24 images**. Cost estimate: ~$6 in Nano Banana Pro credits, ~28 min wall-clock if you don't fall in love with one and re-render it 14 times.

---

## 13. The "decision-maker awe" trick

When you take the rendered set into a pitch deck or onto the live site for Manea El Manea, **do this**:

1. **Open with the facade macro (5.B)**. It is *his clinic*, rendered at Sotheby's-catalog quality. He recognizes it before he intellectualizes it.
2. **Cut to the hero animation live** (the silk reveal + slow zoom + text rise). 2.3 seconds. He says nothing during it.
3. **Pause on the Khalasah harvest plate (11.1)**. Don't speak. Let him notice the dates are the local cultivar, not generic. He'll either smile or lean in.
4. **End on the appointment card (9.1)**. The fingertip-only composition. Discreet wealth.

If at any point in those four images he says *"this is us, but better"* — that's the signal he's already bought. Don't sell. Hand him the contract.

---

## 14. Honest constraints

I cannot generate images directly from this terminal — there is no image-generation tool in this code assistant's runtime. **What I produce is the prompt set, the animation code, and the strategic structure.** You take the prompts into Gemini / Nano Banana Pro yourself. (The previous output you saw from Gemini was Gemini generating *prompts*, not images — same constraint, different agent.)

If you want me to generate images for you, the workflow is: you run the prompts in Gemini, you download the PNGs, you drop them in `/public/hero/`, and I'll wire them into the components and write the responsive `<picture>` tags with WebP/AVIF fallback. That's the part I can do directly.

---

## 15. Open improvement loop

If the first render of any plate above feels off, return here and tweak the prompt with the framework: *which of the 4 emotional triggers is missing?* Add it explicitly. The model responds to the **vocabulary** in the STYLE LOCK — if "Khalasah", "Sadu", "Najdi", "jahla", or "oud bukhoor" disappear from your prompt, the model defaults to generic Saudi visual language. Keep at least two of these specific cultural terms in every prompt.

**That is the entire difference between v1 (boring) and v2 (premium).**
