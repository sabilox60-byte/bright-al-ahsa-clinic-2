import MaaroofRibbon from "./MaaroofRibbon";
import SisterShare from "./SisterShare";
import ScrollIndicator from "./ScrollIndicator";
import HeroVideo from "./HeroVideo";
import { clinicConfig } from "@/lib/clinic-config";

function StatMark({ num, label }: { num: string; label: string }) {
  return (
    <div>
      <div
        className="font-serif"
        style={{
          fontSize: 22,
          fontWeight: 600,
          color: "#ffffff",
          lineHeight: 1.1,
        }}
      >
        {num}
      </div>
      <div
        style={{
          fontSize: 12,
          color: "rgba(255,255,255,0.78)",
          marginTop: 6,
          letterSpacing: "0.3px",
        }}
      >
        {label}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      className="relative hero-section"
      style={{
        minHeight: "calc(100vh - 80px)",
        overflow: "hidden",
        background: "#0a1f2e",
      }}
    >
      {/* Background video with JS autoplay safety net (HeroVideo client cmp) */}
      <HeroVideo />

      <ScrollIndicator locale="en" />

      {/* ── Main content (text + CTAs + stats) ──── */}
      <div
        className="container-page relative hero-content"
        style={{
          zIndex: 3,
          paddingTop: 72,
          paddingBottom: 96,
        }}
      >
        <div className="fade-up hero-textreadable" style={{ maxWidth: 620 }}>
          <div className="overline" style={{ color: "#d4b061", marginBottom: 18 }}>
            {clinicConfig.hero.eyebrow.en}
          </div>
          <h1 className="h-display hero-line-rise" style={{ lineHeight: 1.12, paddingBottom: 8, color: "#ffffff" }}>
            <span>{clinicConfig.hero.headlinePartA.en}</span>
            <br />
            <em
              className="hero-em-underline"
              style={{
                fontStyle: "italic",
                color: "#ffffff",
                paddingBottom: 4,
              }}
            >
              {clinicConfig.hero.headlineEm.en}
            </em>
          </h1>
          {clinicConfig.hero.leadItalic.en && (
            <p
              className="font-prose italic hero-lead-italic"
              style={{
                fontSize: 22,
                lineHeight: 1.5,
                color: "rgba(255,255,255,0.92)",
                marginTop: 48,
                maxWidth: 540,
              }}
            >
              {clinicConfig.hero.leadItalic.en}
            </p>
          )}
          {clinicConfig.hero.lead.en && (
            <p
              className="font-prose hero-lead"
              style={{
                fontSize: 18,
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.88)",
                marginTop: 18,
                marginBottom: 32,
                maxWidth: 540,
              }}
            >
              {clinicConfig.hero.lead.en}
            </p>
          )}
          <div
            className="flex gap-3 flex-wrap items-center"
            style={{ marginTop: clinicConfig.hero.lead.en ? 0 : 48 }}
          >
            <a
              href={clinicConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              {clinicConfig.hero.primaryCta.en}
            </a>
            <a href="/services" className="btn-ghost hero-cta-secondary">
              {clinicConfig.hero.secondaryCta.en}
            </a>
            <SisterShare locale="en" />
          </div>
          <div style={{ marginTop: 22 }}>
            <MaaroofRibbon locale="en" />
          </div>
          <div className="mt-12 flex gap-9 items-center flex-wrap hero-stats">
            {clinicConfig.hero.stats.map((s, i) => (
              <div key={i} className="flex items-center gap-9">
                {i > 0 && (
                  <span
                    style={{ width: 1, height: 40, background: "rgba(255,255,255,0.28)" }}
                    aria-hidden
                  />
                )}
                <StatMark num={s.value.en} label={s.label.en} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
