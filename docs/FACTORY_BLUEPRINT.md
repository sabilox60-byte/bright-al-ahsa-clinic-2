# FACTORY BLUEPRINT — n8n Chained Agents (post-10-clinics)

> **Status:** Conceptual. Build manually for the first ~10 clinics, then automate via n8n. This doc describes the target factory.

---

## The 7-stage clinic factory

```
┌─────────────────────────────────────────────────────────────────────┐
│  STAGE 1 — TRIGGER                                                  │
│  Source: a new row in Notion CRM "Clinics" table marked "Ready"     │
│  Or: a Slack message in #factory-queue with format `extract {url}`  │
└──────────────────────────┬──────────────────────────────────────────┘
                           ▼
┌─────────────────────────────────────────────────────────────────────┐
│  STAGE 2 — RESEARCH AGENT                                           │
│  Tool: Claude API + EXA + Perplexity + WebFetch + Snapchat API      │
│  Input: clinic name / IG handle / city                              │
│  Process: runs EXTRACTION_PROMPT_V2 fully                           │
│  Output: extracted/[slug].extraction.json + summary.md              │
│  Time: 3-5 min                                                      │
│  Cost: ~$0.40 in Claude API + EXA credits                           │
└──────────────────────────┬──────────────────────────────────────────┘
                           ▼
┌─────────────────────────────────────────────────────────────────────┐
│  STAGE 3 — VALIDATION GATE (human-in-loop)                          │
│  Posts summary.md to Slack #factory-review                          │
│  Human (you): 60-second skim, react ✅ or 🛑 with comment           │
│  If 🛑: workflow stops, lands in your Linear "Needs Research" queue │
│  If ✅: workflow continues                                          │
└──────────────────────────┬──────────────────────────────────────────┘
                           ▼
┌─────────────────────────────────────────────────────────────────────┐
│  STAGE 4 — REPO PROVISIONING                                        │
│  Tool: GitHub API                                                   │
│  Process:                                                           │
│    1. Use the "Use template" API on master template repo            │
│    2. Create new repo: [clinic-slug]-website                        │
│    3. Set repo to Private + assign your GitHub team                 │
│  Output: github.com/.../[clinic-slug]-website                       │
│  Time: 30 seconds                                                   │
└──────────────────────────┬──────────────────────────────────────────┘
                           ▼
┌─────────────────────────────────────────────────────────────────────┐
│  STAGE 5 — INJECTION AGENT                                          │
│  Tool: Claude API + Context7 MCP + Filesystem MCP + GitHub MCP      │
│  Input: extraction.json + the new repo                              │
│  Process: runs INJECTION_PROMPT fully                               │
│  Output:                                                            │
│    - All clinic-config.ts + clinic-extras.ts filled                 │
│    - Components patched per archetype                               │
│    - Files deleted per archetype                                    │
│    - PR opened on new repo (Draft)                                  │
│  Time: 5-8 min                                                      │
│  Cost: ~$0.80 in Claude API                                         │
└──────────────────────────┬──────────────────────────────────────────┘
                           ▼
┌─────────────────────────────────────────────────────────────────────┐
│  STAGE 6 — VISUAL ASSET GENERATION                                  │
│  Tool: Nano Banana Pro (Gemini 3 Pro Image)                         │
│  Process:                                                           │
│    1. Read archetype's image moodboard from CLINIC_SHAPES.md        │
│    2. Generate 12 strategic plates (hero, goals, treatments, etc.)  │
│       using prompts from docs/IMAGE_PROMPTS.md                      │
│    3. Convert PNG → AVIF via squoosh CLI                            │
│    4. Commit to repo at public/hero/[clinic-slug]/                  │
│    5. Patch component references in the same PR                     │
│  Time: 12-15 min                                                    │
│  Cost: ~$4 in Gemini API                                            │
└──────────────────────────┬──────────────────────────────────────────┘
                           ▼
┌─────────────────────────────────────────────────────────────────────┐
│  STAGE 7 — DEPLOY AGENT                                             │
│  Tool: Vercel API                                                   │
│  Process:                                                           │
│    1. Create new Vercel project linked to the new GitHub repo       │
│    2. Set env vars from Notion (NEXT_PUBLIC_SITE_URL, etc.)         │
│    3. Trigger deploy                                                │
│    4. Wait for green status                                         │
│    5. Run Playwright smoke tests on the live URL                    │
│  Output: live URL + Lighthouse + accessibility scores               │
│  Time: 2-3 min                                                      │
└──────────────────────────┬──────────────────────────────────────────┘
                           ▼
┌─────────────────────────────────────────────────────────────────────┐
│  STAGE 8 — HUMAN VERIFY + OUTREACH                                  │
│  You receive a Slack DM with:                                       │
│    - Live URL                                                       │
│    - Lighthouse scores                                              │
│    - "3 flagged items to review" list                               │
│    - PR link                                                        │
│  You spend ~10 min validating, fix anything, merge PR.              │
│  Then you trigger the OUTREACH WORKFLOW (separate factory).         │
└─────────────────────────────────────────────────────────────────────┘

Total automated time per clinic: ~25 min wall-clock
Your manual time: ~12 min (1 minute validation gate + 10 min final verify)
Cost per clinic: ~$5-6 in API + Nano Banana Pro
```

---

## n8n workflow files (structure)

```
n8n/
├── workflows/
│   ├── 01-trigger.json            # CRM/Slack trigger
│   ├── 02-research-agent.json     # Claude + EXA + Perplexity
│   ├── 03-validation-gate.json    # Slack approval
│   ├── 04-repo-provision.json     # GitHub template clone
│   ├── 05-injection-agent.json    # Claude + Context7 + FS + GH MCPs
│   ├── 06-image-generation.json   # Nano Banana Pro pipeline
│   ├── 07-deploy-agent.json       # Vercel API
│   └── 08-handoff.json            # Slack DM + Linear ticket
├── credentials/                   # Anthropic, OpenAI, Google, GitHub, Vercel
└── README.md
```

Each workflow is self-contained — can be tested + re-run independently. The full chain is a single super-workflow that orchestrates all 7.

---

## What NOT to automate

These stay human (forever, not "for now"):

1. **First conversation with the decision-maker** — the WhatsApp message that opens the relationship. Personal, can't be templated.
2. **Approval gate at Stage 3** — auto-research without a human gate produces clinics in wrong archetypes 5-10% of the time. The gate prevents bad sites going live.
3. **Patient-image selection** — Before/After moodboards, doctor portraits (when real photos exist). These are taste decisions tied to clinic owner approval.
4. **Pricing verification** — never auto-publish prices without owner sign-off.
5. **Final 10-min verify** — last sanity check before the owner sees the site.

---

## Build order

| Sprint | Build |
|---|---|
| **Sprint 0 (now)** | Master template stable (DONE) + Bright manual deploy (in progress) |
| **Sprint 1 (clinics 2-10)** | Manual deploys using extraction + injection prompts. No n8n yet. Refine the prompts based on real edge cases. |
| **Sprint 2 (clinic 11+)** | Build n8n workflows 01-03 (trigger + research + validation gate). Injection still manual. |
| **Sprint 3** | Add workflows 04-05 (repo + injection automation). |
| **Sprint 4** | Add workflows 06-08 (images + deploy + handoff). Full factory live. |

Don't try to build n8n now — prompts aren't field-tested enough. Real clinic 2-10 will surface edge cases that change the prompts. Once the prompts stabilize, n8n is straightforward.

---

## Cost model (factory)

Per-clinic API + tooling cost: **~$6**
Time saved per clinic vs full manual: **~3-4 hours**

At 20 clinics/month (target Year 1 Q3+):
- Factory cost: $120/month
- Time saved: 60-80 hours/month
- Wall-clock per clinic: 25 min vs 4 hours
- Effective throughput: 1 clinic/day with one operator (you)

At 50 clinics/month (Year 2):
- Factory cost: $300/month
- Need 2 operators or add a junior PM
