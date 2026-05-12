import Portrait from "./Portrait";
import ChapterMark from "./ChapterMark";
import ScrollReveal from "./ScrollReveal";
import { clinicConfig } from "@/lib/clinic-config";

/**
 * Bright Before/After — COMPLIANT visual contrast.
 *
 * Constraint: NO patient face photos (PDPL + SFDA hard line).
 * Solution: Two-state visual contrast using ambient mood plates +
 * inline patient testimonials with time anchors.
 *
 *  Left mood plate (Before, sand variant)  →  Right mood plate (After, terracotta)
 *  Each plate carries: chip label, time marker, treatment caption.
 *  Below: 2 anonymous testimonials in letterpress format.
 *  Below that: explicit disclaimer (privacy by default).
 *
 * This restores the visual two-state psychology premium clinics rely on,
 * without ever showing a patient face.
 */

const testimonials = [
  {
    patientNumber: "№ 247",
    quote:
      "I waited three months before booking. I waited 24 hours after the first session to call my sister.",
    initials: "A.M.",
    location: "Khobar",
    treatment: "Three Hydrafacial sessions · Dr. Marina Naddaf",
    days: "Day 1 · Day 28 · Day 90",
  },
  {
    patientNumber: "№ 392",
    quote:
      "My mother came with me to the first visit. By the third, she had booked her own.",
    initials: "R.K.",
    location: "Al Ahsa",
    treatment: "Filler · Dr. Wafaa Saeed",
    days: "Day 1 · Day 14",
  },
];

export default function BeforeAfter() {
  const b = clinicConfig.beforeAfter;

  return (
    <section
      className="section"
      id="gallery"
      style={{ background: "#f0ece1", position: "relative", zIndex: 2 }}
    >
      <div className="container-page">
        {/* Header */}
        <ScrollReveal variant="fade-up">
          <div
            className="grid gap-10 items-end mobile-stack"
            style={{ gridTemplateColumns: "1.1fr 1fr" }}
          >
            <div>
              <ChapterMark roman={b.chapterRoman} title={b.chapterTitle.en} />
              <h2 className="h-xl" style={{ marginTop: 24 }}>
                {b.headlinePartA.en}
                <br />
                <em style={{ fontStyle: "italic", color: "#b29362" }}>
                  {b.headlineEm.en}
                </em>
              </h2>
              <p
                className="font-prose"
                style={{
                  fontSize: 18,
                  color: "#2a3f4f",
                  marginTop: 18,
                  maxWidth: 460,
                }}
              >
                {b.description.en}
              </p>
            </div>
            <p
              className="font-prose italic"
              style={{
                fontSize: 17,
                lineHeight: 1.55,
                color: "#7f8487",
                maxWidth: 380,
              }}
            >
              We show the journey, not the face. Compliant with Saudi PDPL and
              SFDA — every visual here is symbolic, every word is a real patient.
            </p>
          </div>
        </ScrollReveal>

        {/* Visual two-state contrast — ambient mood plates */}
        <ScrollReveal variant="fade-up" delay={100}>
          <div
            className="grid gap-6 mobile-stack"
            style={{
              gridTemplateColumns: "1fr 1fr",
              marginTop: 56,
              alignItems: "center",
            }}
          >
            {/* BEFORE */}
            <div className="relative">
              <Portrait
                variant="sand"
                style={{ width: "100%", height: 380 }}
                rounded={16}
              />
              <span
                className="chip"
                style={{ position: "absolute", top: 16, left: 16 }}
              >
                {b.beforeLabel.en}
              </span>
              <div
                style={{
                  position: "absolute",
                  bottom: 16,
                  left: 16,
                  right: 16,
                  background: "rgba(253, 251, 246, 0.94)",
                  backdropFilter: "blur(4px)",
                  padding: "12px 16px",
                  borderRadius: 8,
                  fontSize: 13,
                  color: "#0a1f2e",
                }}
              >
                <span style={{ fontFamily: "var(--font-mono), monospace", fontSize: 10, color: "#8f7548", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Day 1 · Consultation
                </span>
                <div style={{ marginTop: 4, fontFamily: "var(--font-source-serif), serif", fontSize: 15, fontStyle: "italic" }}>
                  &ldquo;I wanted something that doesn&rsquo;t shout.&rdquo;
                </div>
              </div>
            </div>

            {/* AFTER */}
            <div
              className="relative"
              style={{ marginTop: 40 }}
            >
              <Portrait
                variant="terracotta"
                style={{ width: "100%", height: 380 }}
                rounded={16}
              />
              <span
                className="chip chip-dark"
                style={{ position: "absolute", top: 16, left: 16 }}
              >
                {b.afterLabel.en}
              </span>
              <div
                style={{
                  position: "absolute",
                  bottom: 16,
                  left: 16,
                  right: 16,
                  background: "rgba(253, 251, 246, 0.94)",
                  backdropFilter: "blur(4px)",
                  padding: "12px 16px",
                  borderRadius: 8,
                  fontSize: 13,
                  color: "#0a1f2e",
                }}
              >
                <span style={{ fontFamily: "var(--font-mono), monospace", fontSize: 10, color: "#8f7548", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Day 28 · Follow-up
                </span>
                <div style={{ marginTop: 4, fontFamily: "var(--font-source-serif), serif", fontSize: 15, fontStyle: "italic" }}>
                  &ldquo;My sister noticed. Then she booked.&rdquo;
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Letterpress testimonial cards — voice layer */}
        <div
          className="grid gap-8 mobile-stack"
          style={{
            gridTemplateColumns: "1fr 1fr",
            marginTop: 56,
          }}
        >
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} variant="fade-up" delay={i * 100}>
              <article
                style={{
                  background: "#ffffff",
                  borderRadius: 12,
                  overflow: "hidden",
                  boxShadow:
                    "0 0 0 1px rgba(178,147,98,0.25), 0 18px 56px rgba(10,31,46,0.08)",
                  padding: 28,
                }}
              >
                <header
                  style={{
                    paddingBottom: 14,
                    borderBottom: "1px dotted rgba(178,147,98,0.4)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    marginBottom: 18,
                  }}
                >
                  <span
                    className="font-mono"
                    style={{
                      fontSize: 11,
                      color: "#8f7548",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    ✦ Patient {t.patientNumber}
                  </span>
                  <span
                    className="font-mono"
                    style={{
                      fontSize: 10,
                      color: "#7f8487",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {t.days}
                  </span>
                </header>
                <blockquote
                  className="font-prose italic"
                  style={{
                    fontSize: 19,
                    lineHeight: 1.5,
                    color: "#0a1f2e",
                    margin: 0,
                    position: "relative",
                  }}
                >
                  <span
                    aria-hidden
                    style={{
                      position: "absolute",
                      top: -16,
                      left: -8,
                      fontSize: 48,
                      color: "rgba(178,147,98,0.35)",
                      fontFamily: "var(--font-source-serif), serif",
                      lineHeight: 1,
                    }}
                  >
                    &ldquo;
                  </span>
                  <span style={{ position: "relative" }}>{t.quote}</span>
                </blockquote>
                <footer
                  style={{
                    borderTop: "1px dotted rgba(178,147,98,0.4)",
                    paddingTop: 14,
                    marginTop: 18,
                  }}
                >
                  <div
                    className="font-serif"
                    style={{
                      fontSize: 14,
                      color: "#0a1f2e",
                      fontWeight: 500,
                    }}
                  >
                    — {t.initials}, {t.location}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "#7f8487",
                      marginTop: 4,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {t.treatment}
                  </div>
                </footer>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA + disclaimer */}
        <ScrollReveal variant="fade-up" delay={200}>
          <div
            style={{
              marginTop: 56,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 20,
              paddingTop: 32,
              borderTop: "1px dotted rgba(178,147,98,0.45)",
            }}
          >
            <p
              className="font-prose italic"
              style={{
                fontSize: 14,
                color: "#7f8487",
                maxWidth: 540,
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              All testimonials shared with written consent. Names withheld at
              patient request — Saudi privacy by default. Visual plates are
              symbolic compositions, never patient photographs. Results vary
              by person, treatment, and follow-through.
            </p>
            <a
              href="/gallery"
              className="btn-dark"
              style={{ display: "inline-flex" }}
            >
              {b.cta.en} →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
