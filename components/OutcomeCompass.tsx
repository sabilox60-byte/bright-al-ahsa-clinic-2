import { clinicExtras } from "@/lib/clinic-extras";
import type { Locale } from "@/lib/i18n";
import Link from "next/link";

/**
 * Outcome Compass — replaces "Services" navigation with goal-based entry points.
 * Used on homepage as a strategic section.
 * 5 cards (or whatever clinicExtras.goals contains).
 *
 * Layout: editorial 5-up grid, each card a tactile "panel" the user clicks
 * → routes to /goals/[slug] which dynamically reshapes the site around that goal.
 */
export default function OutcomeCompass({ locale = "en" }: { locale?: Locale }) {
  const goals = clinicExtras.goals;
  if (!goals || goals.length === 0) return null;

  return (
    <section
      className="section"
      id="goals"
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, #ffffff 100%)",
        position: "relative",
        zIndex: 2,
      }}
    >
      <div className="container-page">
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="overline" style={{ color: "#b29362", marginBottom: 14 }}>
            ✦ {locale === "ar" ? "ابدئي بهدفكِ" : "Begin with your goal"}
          </div>
          <h2 className="h-xl" style={{ maxWidth: 680, margin: "0 auto", lineHeight: 1.12 }}>
            {locale === "ar" ? "ماذا تريدين أن " : "What do you want to "}
            <em style={{ fontStyle: "italic", color: "#b29362" }}>
              {locale === "ar" ? "تشعري به؟" : "feel?"}
            </em>
          </h2>
          <p
            className="font-prose"
            style={{
              fontSize: 18,
              color: "#7f8487",
              marginTop: 16,
              maxWidth: 540,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {locale === "ar"
              ? "ليس قائمة علاجات. أهداف. اختاري ما تشعرين به اليوم — تتشكّل العيادة حول هدفكِ."
              : "Not a list of treatments. Goals. Pick what you feel today — the clinic shapes around your goal."}
          </p>
        </div>

        <div
          className="grid gap-4 outcome-grid"
          style={{
            gridTemplateColumns: `repeat(${Math.min(goals.length, 5)}, 1fr)`,
          }}
        >
          {goals.map((g) => (
            <Link
              key={g.slug}
              href={locale === "ar" ? `/ar/goals/${g.slug}` : `/goals/${g.slug}`}
              className="card card-interactive"
              style={{
                padding: "32px 24px",
                display: "flex",
                flexDirection: "column",
                gap: 14,
                minHeight: 240,
                color: "inherit",
                textDecoration: "none",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <span
                aria-hidden
                style={{
                  position: "absolute",
                  top: 14,
                  right: 14,
                  fontSize: 28,
                  color: g.accentColor || "#b29362",
                  opacity: 0.6,
                  fontFamily: "var(--font-italiana), serif",
                }}
              >
                {g.symbol}
              </span>
              <div className="overline" style={{ fontSize: 10, color: g.accentColor || "#8f7548" }}>
                {locale === "ar" ? "هدف" : "Goal"}
              </div>
              <h3
                className="font-serif"
                style={{
                  fontSize: 26,
                  lineHeight: 1.15,
                  fontWeight: 600,
                  color: "#0a1f2e",
                }}
              >
                {g.name[locale]}
              </h3>
              <p
                className="font-prose italic"
                style={{
                  fontSize: 15,
                  color: "#2a3f4f",
                  lineHeight: 1.5,
                  flex: 1,
                }}
              >
                {g.tagline[locale]}
              </p>
              <span
                className="tlink"
                style={{
                  fontSize: 12,
                  color: g.accentColor || "#b29362",
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  marginTop: 8,
                }}
              >
                {locale === "ar" ? "اكتشفي" : "Explore"} →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
