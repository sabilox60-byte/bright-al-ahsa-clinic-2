import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import TrustBadge from "@/components/TrustBadge";
import ScrollReveal from "@/components/ScrollReveal";
import SchemaInjector from "@/components/SchemaInjector";
import { clinicConfig } from "@/lib/clinic-config";
import { clinicExtras } from "@/lib/clinic-extras";
import { organizationLd, breadcrumbLd } from "@/lib/schema-ld";

export const metadata: Metadata = {
  title: `Trust & Credentials — ${clinicConfig.brand.name.en}`,
  description: "Every license, every registration, every verifiable credential — published openly so you can check us before trusting us.",
  alternates: { canonical: "/trust" },
};

export default function TrustPage() {
  const v = clinicExtras.trustVault;

  return (
    <>
      <SchemaInjector
        schemas={[
          organizationLd("en"),
          breadcrumbLd([
            { label: "Home", href: "/" },
            { label: "Trust", href: "/trust" },
          ]),
        ]}
      />
      <Nav />
      <main className="page-in">
        <PageHero
          roman="V"
          eyebrow={v.hero.eyebrow.en}
          title={v.hero.title.en}
          titleEm={v.hero.titleEm.en}
          sub={v.hero.sub.en}
        />

        {/* Philosophy quote */}
        <section className="section-sm" style={{ position: "relative", zIndex: 2 }}>
          <div className="container-page" style={{ maxWidth: 760, textAlign: "center" }}>
            <ScrollReveal variant="fade-up">
              <p
                className="font-prose italic"
                style={{
                  fontSize: 24,
                  lineHeight: 1.45,
                  color: "#2a3f4f",
                }}
              >
                &ldquo;{v.philosophy.en}&rdquo;
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Badges grid */}
        <section className="section" style={{ background: "#f6f5f4", position: "relative", zIndex: 2 }}>
          <div className="container-page">
            <ScrollReveal variant="fade-up">
              <div className="overline" style={{ color: "#b29362", marginBottom: 14, textAlign: "center" }}>
                ✦ Verified credentials
              </div>
              <h2 className="h-lg" style={{ textAlign: "center", marginBottom: 56, maxWidth: 640, marginLeft: "auto", marginRight: "auto" }}>
                Every claim is <em style={{ fontStyle: "italic", color: "#b29362" }}>independently checkable.</em>
              </h2>
            </ScrollReveal>

            <div
              className="grid gap-6 mobile-stack"
              style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
            >
              {v.badges.map((b, i) => (
                <ScrollReveal key={b.id} variant="fade-up" delay={i * 80}>
                  <TrustBadge badge={b} locale="en" />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Doctor SCFHS verifications */}
        <section className="section-sm" style={{ position: "relative", zIndex: 2 }}>
          <div className="container-page">
            <div className="overline" style={{ color: "#b29362", marginBottom: 14 }}>
              ✦ Clinician registrations
            </div>
            <h2 className="h-md" style={{ marginBottom: 32 }}>
              SCFHS-registered, every name printable.
            </h2>
            <div className="grid gap-4 mobile-stack" style={{ gridTemplateColumns: "1fr 1fr" }}>
              {clinicExtras.structuredData.doctors.map((d) => (
                <div
                  key={d.slug}
                  style={{
                    padding: 18,
                    border: "1px dotted rgba(178,147,98,0.4)",
                    borderRadius: 8,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    gap: 16,
                  }}
                >
                  <div>
                    <div className="font-serif" style={{ fontSize: 17, color: "#0a1f2e", fontWeight: 500 }}>
                      {d.nameEn}
                    </div>
                    <div style={{ fontSize: 13, color: "#7f8487", marginTop: 4 }}>{d.medicalSpecialty}</div>
                  </div>
                  {d.scfhsNumber && (
                    <code
                      style={{
                        fontFamily: "var(--font-mono), monospace",
                        fontSize: 12,
                        color: "#8f7548",
                        letterSpacing: "0.05em",
                        whiteSpace: "nowrap",
                      }}
                    >
                      SCFHS № {d.scfhsNumber}
                    </code>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* External reviews block */}
        {v.reviewsBlock.embedUrl && (
          <section className="section section-dark">
            <div className="container-page">
              <div className="overline" style={{ color: "#b29362", marginBottom: 14 }}>
                {v.reviewsBlock.eyebrow.en}
              </div>
              <h2 className="h-lg" style={{ color: "#0a1f2e", marginBottom: 32, maxWidth: 720 }}>
                {v.reviewsBlock.headline.en}
              </h2>
              <iframe
                src={v.reviewsBlock.embedUrl}
                style={{ width: "100%", minHeight: 420, border: "none", borderRadius: 8 }}
                title="External reviews"
                loading="lazy"
              />
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
