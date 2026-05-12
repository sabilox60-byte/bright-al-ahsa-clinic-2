# MASTER EXTRACTION PROMPT — Clinic-to-Config

> Use this prompt with Claude (Opus 4.x preferred) plus WebFetch / WebSearch / MCP tools to research any real clinic and auto-generate the values for `lib/clinic-config.ts` + `lib/clinic-extras.ts`.
>
> **Goal:** 60-90 minutes from "give me their Instagram handle" to "config ready to deploy."

---

## How to use

1. Open Claude Code in the project root.
2. Paste the PROMPT below.
3. Replace `[CLINIC_INPUT]` block at the end with whatever you know (any of: Instagram URL, website, name, city, owner name, phone, screenshot of their ads).
4. Claude will run a research pass, ask up to 3 clarifying questions if needed, then return TWO blocks of TypeScript ready to paste into `lib/clinic-config.ts` and `lib/clinic-extras.ts`.

---

## THE PROMPT

```
You are a senior brand strategist + senior SEO/AEO engineer + Saudi compliance lawyer, working in one head. Your job is to take whatever I know about a real GCC clinic and produce a complete, deployable configuration for a luxury Next.js template I already built.

Output discipline:
- Be exhaustive on research. Use WebSearch + WebFetch + any available MCPs. Try at least 12 different angles before declaring something "not findable."
- Use Instagram, Snapchat, TikTok, X/Twitter, Facebook, LinkedIn, Google Maps, Vezeeta, SehaGuide, Maaroof, Saudi Ministry of Commerce, SCFHS doctor registry, Meta Ad Library, Snapchat Ad Library, Saudi business directories, and any news/PR mentions.
- Cite a URL for every non-trivial claim in a comments block at the top of your output.
- If a field is genuinely unfindable, fill in a smart placeholder and flag it with `// TODO verify` so the user knows.

Hard rules — Saudi compliance (NEVER violate):
- No identifiable patient face photos by default — set `privacy.noPatientFaces: true`.
- No invented medical claims, no outcome guarantees, no "FDA approved" unless you have proof.
- Tabby/Tamara max amounts must respect SAMA SAR 10,000 cap.
- Doctors mentioned must have a real, verifiable SCFHS registration when possible (search scfhs.org.sa).
- Use Khaleeji Arabic (Saudi tone), not Egyptian or Levantine.
- Never include "DM Maaroof URL" if you didn't verify the clinic actually holds a Maaroof certificate — leave the field empty rather than fake it.

Cultural rules:
- Women-focused aesthetic clinic? Default `womenStaffRoutingEnabled: true`.
- Family-name clinics (owner is named) — center the founder in the brand. Otherwise lean editorial/institutional.
- Eastern Province clinics — palette warmer (sand/terracotta). Riyadh — slightly cooler. Jeddah — softer/lighter.

Process:

STEP 1 — Identify the clinic precisely.
Verify: exact legal name (Arabic + English), every confirmed branch (city, address, geo if possible), hotline, branch-specific phones, owner / GM / lead doctor names, agency in use (if any), digital footprint (every social handle they own).

STEP 2 — Decode the brand.
Read 30+ of their recent posts (Instagram primary + Snapchat + TikTok). Identify: typography style they currently use, color palette, photographic style, what treatments they actually market, what they NEVER show, what language mix they use, what hashtags they own. Note: this is what we are EVOLVING, not replacing.

STEP 3 — Decode the doctors.
For each named doctor: find SCFHS number if discoverable, education, specialty, languages, personal social handles, years of practice. If only the lead doctor is public, that's fine — leave the others as "Dr. [Name]" placeholders.

STEP 4 — Decode the offer.
List every treatment they advertise — group into 3-4 departments. Note which procedures are highest-value (Eid window relevance: filler, veneers, whitening, hydrafacial, body contouring). Find pricing if listed publicly. If not, leave as "Contact for consultation" — never invent prices.

STEP 5 — Decode the trust.
Find: MOH license number (often visible in clinic photos at reception desk), Maaroof URL if registered, SFDA device list if mentioned, any awards or media coverage. List every verifiable badge.

STEP 6 — Decode the competitive landscape.
Identify top 3-5 same-city competitors. Note follower count gaps, creative-quality gaps, what each competitor does well. This informs goal positioning.

STEP 7 — Decode the decision-maker contact path.
- Primary email: scan website footer + IG bio + Snapchat bio + any "contact" page for "marketing@", "info@", "dm@" patterns. The string "[brand].dm[year]@gmail.com" is a common KSA SME pattern — try it.
- Personal social: senior doctors often have personal Snapchat — search "@dr_[name]" patterns.
- LinkedIn: search "[Clinic Name]" — note every employee surfaced, especially Saudi names (likely admin/owner).
- WhatsApp: scrape from website + IG bio; note if it's the central hotline (920XXXXXXX) or a direct branch line (05XXXXXXXX).

STEP 8 — Decode the AI Overview / Google Knowledge gap.
Search the clinic's name on Google. Does AI Overview show? Does the Knowledge Panel exist? Is their Wikidata Q-ID claimed? What does Perplexity say about them? Note gaps to fix with our schema.

STEP 9 — Now FILL the config.
Produce two complete TypeScript objects, ready to paste:

A) `clinicConfig` (the existing 700-line one) — every field bilingual EN/AR, every Arabic written in Khaleeji tone, every English in restrained editorial voice. No emoji. No exclamation marks. Short. Punchy.

B) `clinicExtras` (the signature features) — every section filled:
   - identity (legal name, CR if findable, MOH license, branches with geo)
   - structuredData.doctors (real names + SCFHS + bios)
   - structuredData.procedures (their top 8-12 treatments)
   - structuredData.aggregateRating (if Google reviews public)
   - trustVault.badges (every verifiable credential)
   - goals (Glow/Contour/Smile/Restore/Longevity adapted to their menu)
   - saudiOccasions (use the 6 default — adapt the featuredProcedureSlugs to their menu)
   - livingPulse.fallback (realistic values based on their visible volume)
   - voiceConcierge (clinic-specific FAQ openers)
   - aftercare.templates (one per top procedure)
   - pricing (currency, BNPL availability)
   - social (every handle)
   - aeo.llmsTxt (custom for this clinic, in markdown)
   - aeo.allowedBots (standard list)
   - aeo.quickAnswerTemplate (rewritten for their brand voice)
   - privacy (set defaults per cultural read)

STEP 10 — Output format.
Output as ONE markdown file with these sections:
1. **Research summary** — bullet list of what you found, with URL citations
2. **Decision-maker contact map** — ranked routes to reach the right human
3. **`clinic-config.ts` patch** — the full `clinicConfig` object, ready to paste, with `// TODO verify` flags on unverified fields
4. **`clinic-extras.ts` patch** — the full `clinicExtras` object, same convention
5. **Open questions** — up to 3 things you genuinely couldn't find, with the search angles you tried so the user can decide what to do
6. **Deployment notes** — anything specific to this clinic the user should know before shipping (e.g. "their existing IG handle is taken on TikTok — they should claim it now")

Style for both config objects:
- Khaleeji Arabic. Saudi female tone unless brand is explicitly gender-neutral or male-led.
- English: restrained editorial. Read Vogue's medical section, not Forbes. Short sentences. No corporate jargon.
- Every overline starts with "✦" (no emoji elsewhere).
- Roman numerals for chapter marks.
- Italics on the "emphasised half" of every two-part headline.

Now — the input:

[CLINIC_INPUT]
```

---

## Worked example input

```
Bright Specialized Clinics (عيادات برايت التخصصية)
- Instagram: https://www.instagram.com/bright.alahsa/
- Eastern Province KSA, Khobar HQ + Al Ahsa branch
- Hotline: 920024428
- Currently running ~10 active Meta ads, single creative
- GM: Manea El Manea (from LinkedIn)
- Featured doctors: Hassan Nazzal (maxillofacial), Marina Naddaf (derma, has 26K Snap @drmnaddaf), Wafaa Saeed (Al Ahsa derma, has Snap @dr_wafaasaeed)
- Email pattern found earlier: bright.dm2023@gmail.com (assume Director of Marketing)
- Legal parent entity per D&B: AL-MAHA BRIGHT SKIN MEDICAL COMPLEX
```

When you paste that into the prompt above, Claude will:
1. Re-verify via WebFetch on the IG + Snap + LinkedIn URLs.
2. Search for what it doesn't know yet.
3. Output the two config blocks ready for paste-and-deploy.

---

## After extraction

```bash
# 1. Copy the output blocks into:
website-template/lib/clinic-config.ts
website-template/lib/clinic-extras.ts

# 2. Generate 12 hero images via Nano Banana Pro using the brand-color prompts below

# 3. Local check
npm install
npm run type-check
npm run build
npm run dev

# 4. Deploy
npx vercel --prod
```

## Hero image generation prompts (template-ready)

Paste into Nano Banana Pro with brand color values from `globals.css`:

```
Prompt template:
"Editorial photography for a [CITY] luxury aesthetic clinic. Brand palette: warm cream (#f8f6f0), soft gold (#b8935a), deep navy ink (#0a1f2e). Subject: [SCENE]. Style: Vogue Arabia editorial, soft natural light from the side, restrained composition, generous negative space, never glossy, never bright, slight grain. 4K, 16:9 aspect."

Scenes to run (12 plates):
1. Empty premium clinic interior — Najdi-inspired plaster walls, single chair in soft light
2. Marble countertop with single ampoule glass, soft shadow
3. Folded linen towels stacked, golden side light
4. Brass tray with skincare tools, top-down
5. Hand reaching for a glass jar — fingers only, no face
6. Doorway view into treatment room — depth of field
7. Founder portrait stand-in — silhouette only, no face
8. Window light on cream curtain
9. Architectural detail — Najdi geometric tile pattern, monochrome
10. Glass of water on stone table, single ice cube
11. White orchid in a stone vessel
12. Sun on a clay vessel, late afternoon light
```

These give you the entire homepage + 5 goal pages + portfolio without ever needing a patient face.
