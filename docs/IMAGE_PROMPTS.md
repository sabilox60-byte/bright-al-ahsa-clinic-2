# Nano Banana Pro — Access + Master Prompt Library

Tuned for Saudi premium aesthetic clinics. Khaleeji cultural-safe. PDPL + SFDA compliant by default (no patient faces, no outcome simulation).

---

## ① How to access Nano Banana Pro

**You already have Gemini Pro = direct access.** Three paths, easiest first:

### Path A — Gemini app (recommended, what you should use)
1. Sign in at **[gemini.google.com](https://gemini.google.com)** with your paid Google account
2. Click "Create image" or paste a prompt with "generate an image of…"
3. Free Gemini Pro plan: ~3K images/month at 1K-2K resolution
4. For 4K hero plates: each costs ~$0.24 via API, or use Gemini Pro app web tier
5. Native multi-reference upload: drag 2-3 brand mood references → tell it to compose

### Path B — Google AI Studio (when you need the API + speed)
1. Go to **[aistudio.google.com](https://aistudio.google.com)**
2. Select model `gemini-3-pro-image-preview` (this IS Nano Banana Pro)
3. Get a free API key from the top-right menu
4. Use the prompt library below directly in the playground UI

### Path C — API (when factory-scaling 30+ clinics)
```bash
npm install @google/genai
```
```ts
import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const r = await ai.models.generateContent({
  model: "gemini-3-pro-image-preview",
  contents: [{ role: "user", parts: [{ text: PROMPT }] }],
});
```
Pricing: 1K = $0.039 · 2K = $0.134 · 4K = $0.24 (Batch API = half price, 24h SLA).

---

## ② The Brand Style Guide — paste at the top of EVERY prompt

```
STYLE LOCK:
- Editorial photography, Vogue Arabia tone, never glossy
- Color palette: warm cream (#f8f6f0), soft gold (#b8935a), deep navy ink (#0a1f2e)
- Lighting: single soft natural light from the side, late afternoon, golden hour quality
- Composition: 1/3 subject, 2/3 negative space — generous breathing room
- Texture: slight film grain, never plastic-smooth
- Mood: quiet, restrained, monastic, never theatrical
- Format: 16:9 horizontal unless specified otherwise, 4K resolution
NEGATIVE: no human faces, no patient simulation, no medical clutter, no neon, no logos, no text overlays unless requested, no aggressive saturation
```

---

## ③ Master prompt library — every image the website needs

### A) Hero plates (4 variants × 16:9 × 4K)

**SAND variant (default homepage hero):**
```
STYLE LOCK [paste above].

A hand reaching across a marble countertop toward a single glass apothecary
jar. Cream linen folded behind. Late afternoon sun streams from the left,
casting a long thin shadow. Najdi-style plaster wall in soft beige (#f3ecdb)
behind. The hand is anonymous — only fingers, no face. Generous negative space
on the right two-thirds for headline overlay. 4K, 16:9.
```

**TERRACOTTA variant (Goal: Contour, Founder section):**
```
STYLE LOCK [paste above].

Interior of a luxury Saudi clinic at golden hour — a single chaise lounge in
warm cream upholstery, brass side table with a folded linen towel and a clay
vessel. Warm terracotta plaster wall behind (#b8935a tones). No people.
Window light from the right edge creates a long shadow across the polished
stone floor. Negative space on the left for typography. 4K, 16:9.
```

**SAGE variant (Goal: Restore, Aftercare section):**
```
STYLE LOCK [paste above].

A green ceramic vessel with two long stems of fresh eucalyptus, sitting on a
pale oat-colored linen runner. Folded cream towels stacked beside. Soft
morning light from the left, gentle shadow. Warm white plaster wall with
hand-troweled texture. Calm, monastic, recovery atmosphere. No people.
4K, 16:9.
```

**DARK variant (Trust Vault, Booking CTA):**
```
STYLE LOCK [paste above].

Architectural detail — a Najdi geometric tile pattern in deep navy
(#0a1f2e) and brushed brass, photographed at a sharp angle. Single beam of
warm light enters from upper right, illuminating one tile in golden tone.
Rest of frame in deep shadow with detail still readable. Quiet, authoritative,
heritage-coded. 4K, 16:9.
```

### B) Founder portrait (silhouette only — no face)

```
STYLE LOCK [paste above].

A woman in a flowing cream linen abaya seen from behind, standing at a
floor-to-ceiling window overlooking Riyadh at sunset. She faces the city,
her silhouette outlined in soft golden light. Long dark hair falls past her
shoulders, half-covered by the abaya's hood. Her right hand rests on the
window. We never see her face. The interior is a warm ivory room with a
single hardback book on a small table. Composition: silhouette on left third,
view on right two-thirds. Premium, contemplative, never theatrical. 4K, 3:4
vertical.
```

### C) Doctor portrait stand-ins (when real photos unavailable)

Use four variants matching `Portrait` component:

**Doctor in white lab coat (back / side, no face):**
```
STYLE LOCK [paste above].

A doctor in a crisp white lab coat photographed from behind as she walks down
a long sun-drenched corridor of cream plaster. Her hair tied in a low bun.
She holds a small leather notebook in her left hand. The corridor has tall
arched openings on the right side letting in golden side light. No face
visible. 4K, 3:4 vertical, premium documentary tone.
```

**Hands at work (procedure preparation):**
```
STYLE LOCK [paste above].

Close-up of a doctor's hands arranging surgical-grade stainless tools on a
folded white linen cloth. The hands wear no jewelry, the cuffs of a white
coat just visible. A single brass-handled instrument and a small glass
ampoule sit beside the tools. Soft light from the left. Top-down composition.
4K, 4:3.
```

### D) Treatment moodboards (one per top-procedure)

**Hydrafacial:**
```
STYLE LOCK [paste above].

A single drop of clear serum falling toward a folded cream linen towel,
captured mid-fall. A small glass vial of skincare serum stands at the edge
of frame. Warm side light catches the drop. No people. Macro photography
sensibility, soft focus background of pale oat textile. 4K, 16:9.
```

**Dermal Filler:**
```
STYLE LOCK [paste above].

A delicate brass tray on cream linen, holding three sealed glass ampoules of
medical-grade serum, a folded gauze, and a single brass instrument. Late
afternoon side light. Negative space above for typography. Restrained,
clinical-yet-luxurious. No people, no needles visible. 4K, 16:9.
```

**Laser:**
```
STYLE LOCK [paste above].

A single sharp beam of warm amber light traveling across a piece of polished
walnut wood, casting a long thin shadow. The light catches dust particles
floating in the air. Background fades to deep navy shadow. Architectural,
poetic, never literal. 4K, 16:9.
```

**Veneers / Smile:**
```
STYLE LOCK [paste above].

A single small bowl of polished mother-of-pearl beads catching golden light,
arranged on a folded cream linen napkin. A small brass spoon rests beside.
Late afternoon side light. Symbolic of small, pearlescent details. No people,
no teeth, no faces. 4K, 16:9.
```

### E) Goal pages — hero plates

**GLOW:**
```
STYLE LOCK [paste above].

Bright morning sunlight streaming through a sheer cream curtain into an empty
ivory room. The light catches a single white ceramic bowl on a low wooden
table. Long, soft shadows. A folded book sits beside. Hopeful, awakening,
luminous. 4K, 16:9.
```

**CONTOUR:**
```
STYLE LOCK [paste above].

Architectural close-up of three folded cream linen towels on a marble shelf,
photographed at an angle. The shadow lines of the folds create rhythmic
diagonals. Single overhead golden light. Composition emphasizes structure,
discipline, restraint. 4K, 16:9.
```

**SMILE:**
```
STYLE LOCK [paste above].

A single white orchid in a small terracotta vessel, photographed against a
cream plaster wall in soft side light. The petal edge catches a single ray.
Beside the vessel: a folded cream napkin. Quiet, joyful, delicate. 4K, 16:9.
```

**RESTORE:**
```
STYLE LOCK [paste above].

A glass of still water with a single ice cube melting, on a pale stone
surface. Morning light enters from the upper-left. Water condensation marks
visible. Behind: a folded linen towel and a small green sprig of mint.
Calm, restorative, healing. 4K, 16:9.
```

**LONGEVITY:**
```
STYLE LOCK [paste above].

Top-down composition: an old leather-bound journal open to a blank page, a
brass fountain pen resting across it, a small clay cup of dark Saudi coffee
(qahwa), a single date on a small plate, all on a cream linen runner.
Deep golden side light. Timeless, contemplative, generational. 4K, 16:9.
```

### F) Before/After "Day" plates (compliant — no patients)

Each pairs with the testimonial card. Generate one per `Day N` marker.

**Day 1:**
```
STYLE LOCK [paste above].

A small clay vessel with a fresh sprig of olive leaves, on a folded white
linen napkin. Late afternoon light. Soft shadow. Beginning, tender, quiet.
4K, 1:1 square.
```

**Day 28:**
```
STYLE LOCK [paste above].

A small clay vessel with full olive branches, the leaves now broader and
denser. Same composition as Day 1 but more developed. Late afternoon light.
Patient progress, marked time. 4K, 1:1 square.
```

**Day 90:**
```
STYLE LOCK [paste above].

A small clay vessel with abundant olive branches, the leaves now silvery and
mature, casting dappled shadow. Late afternoon golden light. Time as
accumulated care. 4K, 1:1 square.
```

### G) Interior / atelier shots

**Reception (no people):**
```
STYLE LOCK [paste above].

A reception desk in cream travertine and brushed brass, an empty leather-
bound appointment book open to today's date, a single white orchid in a
small clay vase, brass overhead pendant casting warm light. The wall behind
shows a single Arabic calligraphy mark (a small geometric ornament, not
text). Composition emphasizes quiet competence. 4K, 16:9.
```

**Treatment room (empty):**
```
STYLE LOCK [paste above].

A single treatment chair in cream upholstery, a folded white linen towel
draped across the headrest. Brass instruments on a side table, neatly
arranged. Sheer linen curtains filter morning light from a tall window on
the right. Pale plaster walls. No people, no aggressive medical equipment
visible. Spa-clinical hybrid. 4K, 16:9.
```

### H) Social cards (Open Graph 1200x630)

```
STYLE LOCK [paste above].

A composition with strong negative space — bottom-left third holds an empty
brass tray with two clay coffee cups and a folded napkin. The remaining two-
thirds is warm cream plaster wall with a single ray of golden side light
crossing diagonally. Image is designed to receive text overlay in the upper
right area. 1200×630 OG ratio.
```

### I) Journal article headers

```
STYLE LOCK [paste above].

A page of an old leather journal, half-visible, with hand-written notes in
faded brown ink (unreadable, abstract). A brass fountain pen resting at an
angle. Beside the journal: a small porcelain cup of black coffee. Soft side
light. Suggests slow reading, contemplation, expertise written by hand.
4K, 16:9.
```

---

## ④ Cleanup workflow — when you have a REAL photo to refine

For real clinic photos (interior shots, doctor headshots they've supplied), use **Flux Kontext** (~$0.08/image, via [replicate.com/black-forest-labs/flux-kontext-pro](https://replicate.com/black-forest-labs/flux-kontext-pro)) for surgical edits without re-generating:

```
"Remove the [electrical socket / clutter / stray cable] on the wall behind
the doctor. Preserve all other elements exactly. Match the original lighting
and color grade. Output 4K."
```

Or:

```
"Replace the existing signage on the wall with the text 'BRIGHT' in a
clean serif typeface, brass color. Preserve all other elements exactly.
4K output."
```

Flux Kontext keeps everything else identical — only what you ask changes.

---

## ⑤ Process for ANY new clinic — 30-minute hero set

```
1. Run "Brand Style Guide" prompt (top of doc) once to lock the model on tone.
2. Generate A (4 hero plates) → 4 images, ~$1.00 total at 4K
3. Generate B (1 founder silhouette) → 1 image, ~$0.24
4. Generate D-F (top 3 treatment moodboards + 5 goal heroes) → 8 images, ~$2
5. Generate G (2 interior shots) + H (1 OG card) → 3 images, ~$0.72
6. Total: 16 images, ~$4 in API cost, 30 min wall-clock time
7. Save to `public/hero/[clinic-slug]/[name].jpg`
8. Update component refs accordingly
```

For Bright Al Ahsa specifically: use **TERRACOTTA + SAND** variants (Eastern Province warm palette). Skip the linen-rose theme. Run with the navy + gold + cream default in clinic-config.ts unchanged.

---

## ⑥ Gemini Pro app — practical workflow

1. Open [gemini.google.com](https://gemini.google.com)
2. Click "📷 Create image"
3. Paste **STYLE LOCK + the specific scene prompt**
4. Wait ~15s
5. If wrong: refine with "Make it lighter / less saturated / different angle"
6. Save as 4K PNG → download
7. Convert to AVIF via [squoosh.app](https://squoosh.app) (Google's free tool) — drops file size 60-70%
8. Drop into `/public/hero/` in the project

**Conversion command (terminal alternative):**
```bash
npx @squoosh/cli --avif '{"quality":85}' public/hero/*.png
```

---

## ⑦ What NOT to generate

- **Patient faces** (any kind, even AI-synthesized) — PDPL + SFDA violation
- **Before/after of skin/teeth** — outcome simulation = SFDA penalty
- **Doctor headshots from text alone** — looks generic and AI-uncanny; use real photos cleaned with Flux Kontext
- **Western clinical environments** — too cold, doesn't read as Saudi premium
- **Excessive jewelry / glamour** — reads as Dubai, not Saudi quiet luxury
- **Quranic verses / explicit religious imagery** — sensitive; let typography do this work, not photography
- **Dubai skyline / Burj Khalifa** — wrong geographic signal for KSA clinics
