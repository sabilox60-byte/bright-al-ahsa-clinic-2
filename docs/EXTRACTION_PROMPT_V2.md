# EXTRACTION PROMPT V2 — Clinic Research → Structured Brief

> **Purpose:** Take any GCC clinic (input: anything from "their Instagram handle" to "name + city") and produce a **machine-readable extraction document** that the Injection Prompt then applies to the template.
>
> **Separation of concerns:**
> - **EXTRACTION** = research + structured output (this file)
> - **INJECTION** = takes the extraction → adapts the template (see `INJECTION_PROMPT.md`)
> - **CLINIC SHAPES** = the 8 standard configurations the injection knows how to adapt to (see `CLINIC_SHAPES.md`)

---

## Required MCPs

Install in Claude Code before running this prompt:

| MCP | Use | Install |
|---|---|---|
| **EXA** | Semantic web search (10× more accurate than keyword for clinic research) | `https://github.com/exa-labs/exa-mcp-server` |
| **Perplexity** | Real-time citation-backed answers | `https://docs.perplexity.ai/docs/getting-started/integrations/mcp-server` |
| **Fetch / WebFetch** | Page content + screenshots | Built-in to Claude Code |
| **GitHub** | Cross-reference clinic team via repo/LinkedIn searches | Anthropic official |
| **Google Maps** (optional) | Geo + branch verification | `https://github.com/modelcontextprotocol/servers/tree/main/src/google-maps` |

---

## THE PROMPT — paste this into Claude Code

```
ROLE
You are a senior brand strategist + senior SEO/AEO engineer + Saudi healthcare
compliance lawyer + cultural anthropologist of GCC women's consumer behavior.
All four expertise lenses must inform every decision in your output.

GOAL
Produce a STRUCTURED extraction brief for ONE clinic. The output is consumed
by an Injection Prompt that adapts our Next.js template to this clinic.

INPUT
Whatever the user pastes at the bottom under "CLINIC_INPUT". Could be:
- Just an Instagram handle
- A clinic name + city
- A website URL
- An owner name
- A combination

DISCIPLINE
Use Claude Code MCPs. Try AT LEAST 15 different search angles before declaring
something "not findable." Cite a URL for every non-trivial claim. Run searches
in BOTH Arabic and English (60% of Saudi searches are Arabic).

SOURCES to mine in this priority order:
1. EXA semantic search ("[clinic name] reviews", "[clinic name] doctors")
2. Perplexity ("Tell me everything about [clinic name] in Saudi Arabia")
3. Instagram + Snapchat + TikTok bio + recent posts
4. SehaGuide / Vezeeta / Wafy / Tabeebak directories
5. LinkedIn employees (Sales Navigator-style queries)
6. Meta Ad Library + Snapchat Ad Library (their currently-running ads)
7. Saudi Ministry of Commerce (mc.gov.sa / wathq.com.sa) — public records
8. SCFHS (scfhs.org.sa) — doctor registration check
9. Maaroof (maroof.sa) — trustmark + reviews
10. Google Maps + Google Business Profile
11. News mentions (Argaam, Sabq, Al-Yaum, Eye of Riyadh)
12. Email pattern guesses ([brand].dm@gmail.com, info@[domain])

═══════════════════════════════════════════════════════════════════════
STEP 1 — IDENTITY & SHAPE
═══════════════════════════════════════════════════════════════════════

Output the following structured block:

  identity:
    legal_name: { en, ar }
    cr_number: "1010xxxxxxx" or null
    moh_license: "01-xxxxx" or null
    founded_year: number
    branches:
      - { name, address, city, region, phone, whatsapp, geo: {lat, lng}, isHQ }
      [one entry per branch]
    languages_served: ["ar", "en"]   # add fr/ur if applicable

  shape:
    primary_vertical: one of [aesthetic | dental | dermatology | longevity | multi_specialty]
    secondary_verticals: [array of additional verticals offered, if any]
    body_focus: [face | body | both]
    gender_focus: [women_only | family | unisex]
    price_tier: one of [premium | mid_premium | mid_market]
    chain_tier: one of [solo | 2-3-branch | regional_chain | national_chain]
    technology_intensity: one of [low | medium | high]   # AI/laser/diagnostic devices
    age_segment: one of [young_adult | women_30_50 | longevity_55_plus | family_all]

  template_archetype:
    Based on the shape above, pick ONE of the 8 archetypes from CLINIC_SHAPES.md:
      A. aesthetic_premium_women
      B. dental_only_premium
      C. dental_only_family
      D. derma_focused_clinical
      E. aesthetic_plus_dental
      F. multi_specialty_hospital_lite
      G. longevity_men_inclusive
      H. wellness_retreat_style
    Output the letter + one-sentence reasoning for the choice.

═══════════════════════════════════════════════════════════════════════
STEP 2 — DECISION MAKER
═══════════════════════════════════════════════════════════════════════

  decision_maker:
    primary:
      name: ...
      role: (e.g., "General Manager" | "Founder" | "Medical Director")
      confidence: high | medium | low
      contact_routes:
        - linkedin: url
        - email: address (guess if pattern is clear)
        - personal_snap: handle
        - direct_phone: number
    secondary:
      [same shape, for backup]
    bypass_strategy: 1-paragraph explanation of best path to reach them

═══════════════════════════════════════════════════════════════════════
STEP 3 — DOCTORS / CLINICAL TEAM
═══════════════════════════════════════════════════════════════════════

For each named doctor we can verify (cite URL per person):

  doctors:
    - slug: lowercase-name
      name_en: ...
      name_ar: ...
      scfhs_number: ... or null
      specialty: ...
      years_experience: number
      languages: ["ar", "en"]
      education: [...]
      certifications: [...]
      personal_social: { instagram, snapchat, ... } or null
      portrait_variant: terracotta | sand | sage | dark
      bio: { en, ar }   # one paragraph each, Khaleeji tone for Arabic

═══════════════════════════════════════════════════════════════════════
STEP 4 — TREATMENT MENU
═══════════════════════════════════════════════════════════════════════

  procedures:
    [for each treatment they actively offer]
    - slug: ...
      name_en: ...
      name_ar: ...   # Khaleeji term, not MSA
      procedure_type: Cosmetic | Therapeutic | Diagnostic | Surgical
      body_location: ...
      typical_duration_minutes: ...
      price_min: number or null
      price_max: number or null
      currency: "SAR" | "AED" | etc.
      eid_eligible: true | false   # would this be promoted in Eid window
      ramadan_eligible: true | false

═══════════════════════════════════════════════════════════════════════
STEP 5 — TRUST & CREDENTIALS
═══════════════════════════════════════════════════════════════════════

  trust_signals:
    moh_license: number or null
    maaroof_url: url or null
    sfda_device_list: [array of devices if mentioned]
    aggregate_rating:
      value: number (e.g., 4.7)
      review_count: number
      source: "Google" | "Maaroof" | etc.
    awards_or_press: [array of {title, url, year}]

═══════════════════════════════════════════════════════════════════════
STEP 6 — BRAND DECODING
═══════════════════════════════════════════════════════════════════════

Read 30+ of their recent Instagram + Snapchat + TikTok posts. Identify:

  brand_voice:
    typography_currently_used: "describe in 1 sentence"
    color_palette_currently: [hex codes]
    photographic_style: "clinical | editorial | lifestyle | mixed"
    language_mix: "Arabic 70% English 30%" etc.
    hashtags_owned: [...]
    visual_motifs: [...]   # e.g., "gold accents, marble, floral"
    voice_tone: "warm | institutional | clinical | aspirational | bold"
    what_they_avoid: [...]   # things they DON'T show — telling

  current_agency_signals:
    has_agency: true | false
    agency_name: ... or "unbranded"
    creative_quality_score: 1-10 with reasoning
    template_repetition: true | false

═══════════════════════════════════════════════════════════════════════
STEP 7 — COMPETITIVE LANDSCAPE
═══════════════════════════════════════════════════════════════════════

  competitors_same_city:
    - { name, ig_handle, follower_count, creative_quality_score, gap_vs_them }
    [top 3-5]

  positioning_opportunity:
    "1-paragraph: what positional white space exists in this city?"

═══════════════════════════════════════════════════════════════════════
STEP 8 — CULTURAL READS
═══════════════════════════════════════════════════════════════════════

  cultural_signals:
    women_focused: true | false
    family_focused: true | false
    modesty_default: strict | moderate | open   # for image policy
    religious_tone_present: true | false   # Quranic mentions, prayer time, etc.
    privacy_default: anonymous_inquiry_recommended | name_first_ok
    bnpl_relevant: true | false   # would Tabby/Tamara matter for their price point

═══════════════════════════════════════════════════════════════════════
STEP 9 — AEO / ENTITY MAP
═══════════════════════════════════════════════════════════════════════

  aeo_state:
    google_ai_overview_appears: true | false
    google_knowledge_panel: claimed | unclaimed | absent
    wikipedia_entity: url or none
    wikidata_q_id: id or none
    perplexity_recognizes_them: true | false
    citation_gap: "1-paragraph: what AEO opportunities exist?"

═══════════════════════════════════════════════════════════════════════
STEP 10 — OUTPUT FILE
═══════════════════════════════════════════════════════════════════════

Save the entire extraction as `extracted/[clinic-slug].extraction.json`.

Format = strict JSON (no markdown), validated against the schema above.

Then write a separate file `extracted/[clinic-slug].summary.md` containing:
1. **Three-line elevator pitch** for this clinic
2. **Top 3 strengths** to lean into
3. **Top 3 weaknesses** to position against
4. **Recommended template archetype** (letter A-H) + reasoning
5. **Open questions** — what you couldn't verify, with the angles you tried
6. **First conversation hook** — one sentence the user could use to open WhatsApp with the decision maker

CRITICAL NEVER-DO:
- Never invent SCFHS numbers, license numbers, or doctor credentials. Mark unknown as null.
- Never invent prices. Leave price_min/max as null if not publicly disclosed.
- Never invent reviews or ratings. If you can't find a real aggregate, omit it.
- Never use Egyptian, Lebanese, or MSA Arabic where Khaleeji is expected. If you're not 100% certain on dialect for a specific phrase, mark with [VERIFY DIALECT] tag.
- Never claim Wikipedia / Knowledge Panel exists without a verified URL.
- Never include patient names or identifying details.

OUTPUT QUALITY GATE
Before returning, re-read your output and verify:
1. Every non-null fact has a citation URL
2. The shape detection makes coherent sense (no "aesthetic_only" clinic with veneers listed)
3. The template_archetype reasoning is 1 specific sentence, not generic
4. Arabic copy reads as Khaleeji Saudi female-friendly, not formal MSA
5. No invented numbers anywhere

═══════════════════════════════════════════════════════════════════════
CLINIC_INPUT:
═══════════════════════════════════════════════════════════════════════

[paste here]
```

---

## How to call this in Claude Code

```bash
cd bright-al-ahsa-clinic

# Open Claude Code and paste the prompt above + this input:
```

```
CLINIC_INPUT:
- Brand: Bright Specialized Clinics / عيادات برايت التخصصية
- Instagram: https://www.instagram.com/bright.alahsa/
- Khobar HQ + Al Ahsa branch
- Hotline: 920024428
- Featured doctors: Hassan Nazzal (maxillofacial), Marina Naddaf (derma),
  Wafaa Saeed (Al Ahsa derma)
- GM: Manea El Manea (LinkedIn)
- Marketing email pattern: bright.dm2023@gmail.com (assume Director of Marketing)
- Legal parent (D&B): AL-MAHA BRIGHT SKIN MEDICAL COMPLEX
```

Claude will run ~50 tool calls across EXA/Perplexity/WebFetch/Google Maps and produce two files:
- `extracted/bright-al-ahsa.extraction.json`
- `extracted/bright-al-ahsa.summary.md`

Once those exist, you hand them to the **Injection Prompt** (see `INJECTION_PROMPT.md`).

---

## Why this is shape-aware

The OLD extraction prompt assumed every clinic was a "multi-specialty aesthetic + dental + medspa" — same template structure for everyone. **Dental-only clinics had irrelevant Glow/Contour goals, longevity clinics had Smile goals they didn't offer, etc.**

V2 forces detection of:
- **Primary vertical** (what they actually do)
- **Body focus** (face only? body? both?)
- **Price tier** (drives BNPL relevance + tone)
- **Chain tier** (drives Trust Vault + branch UI)
- **Technology intensity** (drives Diagnostic page enable/disable)
- **Age segment** (drives copy: "the ladies of Olaya" vs "longevity protocol")

The **8 archetypes (A-H)** in `CLINIC_SHAPES.md` are pre-mapped to specific template variants. The injection prompt knows what to keep, what to remove, what to swap.

---

## Verification: does the extraction work for ANY shape?

The extraction must produce a coherent extraction regardless of input. Test cases:

| Input clinic | Expected `template_archetype` | Goals enabled |
|---|---|---|
| Bright Al Ahsa (aesthetic + dental, multi-branch) | **E. aesthetic_plus_dental** | Glow, Contour, Smile, Restore |
| Bright Smile (dental only, Riyadh) | **B. dental_only_premium** | Smile, Restore, Confidence |
| Almoosa Aesthetic (premium aesthetic, women-focused, Eastern Province) | **A. aesthetic_premium_women** | Glow, Contour, Restore |
| Biolite Dubai (longevity, men-inclusive) | **G. longevity_men_inclusive** | Vitality, Longevity, Restore |
| SHA Wellness (wellness retreat) | **H. wellness_retreat_style** | full retreat menu |

If extraction returns wrong archetype OR misses verticals, the prompt is broken — file a fix.
