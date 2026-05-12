import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Portrait from "@/components/Portrait";
import ScrollReveal from "@/components/ScrollReveal";
import SchemaInjector from "@/components/SchemaInjector";
import { clinicConfig } from "@/lib/clinic-config";
import { clinicExtras } from "@/lib/clinic-extras";
import { faqLd, breadcrumbLd } from "@/lib/schema-ld";

export async function generateStaticParams() {
  return clinicExtras.goals.map((g) => ({ goal: g.slug }));
}

export async function generateMetadata(props: { params: Promise<{ goal: string }> }): Promise<Metadata> {
  const params = await props.params;
  const g = clinicExtras.goals.find((x) => x.slug === params.goal);
  if (!g) return {};
  return {
    title: `${g.name.en} — ${clinicConfig.brand.name.en}`,
    description: g.tagline.en,
    alternates: { canonical: `/goals/${g.slug}` },
  };
}

export default async function GoalPage(props: { params: Promise<{ goal: string }> }) {
  const params = await props.params;
  const g = clinicExtras.goals.find((x) => x.slug === params.goal);
  if (!g) notFound();

  const procedures = clinicExtras.structuredData.procedures.filter((p) =>
    g.procedureSlugs.includes(p.slug)
  );
  const doctors = clinicExtras.structuredData.doctors.filter((d) =>
    g.doctorSlugs.includes(d.slug)
  );
  const related = clinicExtras.goals.filter((x) => g.relatedSlugs?.includes(x.slug));

  const accent = g.accentColor || "#b29362";

  return (
    <>
      <SchemaInjector
        schemas={[
          g.faqs.length > 0 ? faqLd(g.faqs.map((f) => ({ q: f.q.en, a: f.a.en }))) : null,
          breadcrumbLd([
            { label: "Home", href: "/" },
            { label: "Goals", href: "/goals" },
            { label: g.name.en, href: `/goals/${g.slug}` },
          ]),
        ]}
      />
      <Nav />
      <main className="page-in">
        <PageHero
          roman={g.symbol}
          eyebrow={g.hero.eyebrow.en}
          title={g.hero.headlinePartA.en}
          titleEm={g.hero.headlineEm.en}
          sub={g.hero.sub.en}
        />

        {/* Procedures grid */}
        <section className="section" style={{ background: "#f6f5f4", position: "relative", zIndex: 2 }}>
          <div className="container-page">
            <ScrollReveal variant="fade-up">
              <div className="overline" style={{ color: accent, marginBottom: 14 }}>
                ✦ Treatments mapped to {g.name.en.toLowerCase()}
              </div>
              <h2 className="h-lg" style={{ marginBottom: 40, maxWidth: 640 }}>
                Multiple paths, <em style={{ fontStyle: "italic", color: accent }}>one outcome.</em>
              </h2>
            </ScrollReveal>

            <div className="grid gap-6 mobile-stack" style={{ gridTemplateColumns: "1fr 1fr" }}>
              {procedures.map((p, i) => (
                <ScrollReveal key={p.slug} variant="fade-up" delay={i * 60}>
                  <Link
                    href={`/services/${p.slug}`}
                    className="card card-interactive"
                    style={{ padding: 28, display: "block", color: "inherit", textDecoration: "none" }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
                      <h3 className="font-serif" style={{ fontSize: 22, color: "#0a1f2e", fontWeight: 600 }}>
                        {p.nameEn}
                      </h3>
                      {p.estimatedPriceMin && (
                        <span style={{ fontSize: 12, color: "#7f8487", fontFamily: "var(--font-mono), monospace" }}>
                          {p.estimatedPriceMin}–{p.estimatedPriceMax} {p.currency || "SAR"}
                        </span>
                      )}
                    </div>
                    <hr className="rule-dotted" style={{ margin: "12px 0" }} />
                    <div style={{ display: "flex", gap: 16, fontSize: 13, color: "#7f8487", marginTop: 12 }}>
                      {p.typicalDurationMinutes && <span>{p.typicalDurationMinutes} min</span>}
                      <span>{p.procedureType}</span>
                      {p.bodyLocation && <span>{p.bodyLocation}</span>}
                    </div>
                    <span
                      className="tlink"
                      style={{
                        display: "inline-block",
                        marginTop: 18,
                        fontSize: 12,
                        color: accent,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        fontWeight: 500,
                      }}
                    >
                      Read protocol →
                    </span>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Doctors recommended for this goal */}
        {doctors.length > 0 && (
          <section className="section" style={{ position: "relative", zIndex: 2 }}>
            <div className="container-page">
              <ScrollReveal variant="fade-up">
                <div className="overline" style={{ color: accent, marginBottom: 14 }}>
                  ✦ Recommended clinicians
                </div>
                <h2 className="h-lg" style={{ marginBottom: 40, maxWidth: 640 }}>
                  Names you can <em style={{ fontStyle: "italic", color: accent }}>look up.</em>
                </h2>
              </ScrollReveal>
              <div className="grid gap-6 mobile-stack" style={{ gridTemplateColumns: "1fr 1fr 1fr" }}>
                {doctors.map((d, i) => (
                  <ScrollReveal key={d.slug} variant="fade-up" delay={i * 80}>
                    <Link
                      href={`/doctors/${d.slug}`}
                      className="card card-interactive"
                      style={{ padding: 0, color: "inherit", textDecoration: "none", overflow: "hidden", display: "block" }}
                    >
                      <Portrait variant={d.portraitVariant || "terracotta"} style={{ width: "100%", height: 240 }} />
                      <div style={{ padding: 20 }}>
                        <h3 className="font-serif" style={{ fontSize: 19, color: "#0a1f2e" }}>{d.nameEn}</h3>
                        <p style={{ fontSize: 13, color: "#7f8487", marginTop: 4 }}>{d.medicalSpecialty}</p>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Goal-specific FAQs */}
        {g.faqs.length > 0 && (
          <section className="section" style={{ background: "#f0ece1", position: "relative", zIndex: 2 }}>
            <div className="container-page" style={{ maxWidth: 820 }}>
              <ScrollReveal variant="fade-up">
                <div className="overline" style={{ color: accent, marginBottom: 14 }}>
                  ✦ Common questions for {g.name.en.toLowerCase()}
                </div>
                <h2 className="h-lg" style={{ marginBottom: 40 }}>
                  Direct <em style={{ fontStyle: "italic", color: accent }}>answers.</em>
                </h2>
              </ScrollReveal>
              <dl>
                {g.faqs.map((item, i) => (
                  <details
                    key={i}
                    style={{
                      borderTop: "1px dotted rgba(178,147,98,0.45)",
                      padding: "22px 0",
                    }}
                  >
                    <summary
                      style={{
                        fontFamily: "var(--font-source-serif), serif",
                        fontSize: 20,
                        fontWeight: 500,
                        color: "#0a1f2e",
                        cursor: "pointer",
                        listStyle: "none",
                      }}
                    >
                      {item.q.en}
                    </summary>
                    <p className="font-prose" style={{ fontSize: 17, lineHeight: 1.6, color: "#2a3f4f", marginTop: 14 }}>
                      {item.a.en}
                    </p>
                  </details>
                ))}
                <div style={{ borderTop: "1px dotted rgba(178,147,98,0.45)" }} />
              </dl>
            </div>
          </section>
        )}

        {/* Related goals cross-sell */}
        {related.length > 0 && (
          <section className="section-sm" style={{ position: "relative", zIndex: 2 }}>
            <div className="container-page">
              <div className="overline" style={{ color: accent, marginBottom: 14 }}>
                ✦ Related goals
              </div>
              <div className="grid gap-4 mobile-stack" style={{ gridTemplateColumns: `repeat(${related.length}, 1fr)` }}>
                {related.map((r) => (
                  <Link key={r.slug} href={`/goals/${r.slug}`} className="card card-interactive" style={{ padding: 24, display: "block", textDecoration: "none", color: "inherit" }}>
                    <div className="overline" style={{ color: r.accentColor || "#b29362", fontSize: 10 }}>Goal</div>
                    <h3 className="font-serif" style={{ fontSize: 22, marginTop: 8, color: "#0a1f2e" }}>
                      {r.name.en}
                    </h3>
                    <p className="font-prose italic" style={{ fontSize: 15, marginTop: 8, color: "#2a3f4f" }}>
                      {r.tagline.en}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Book CTA */}
        <section className="section section-dark">
          <div className="container-page" style={{ textAlign: "center", maxWidth: 720 }}>
            <h2 className="h-xl" style={{ color: "#ffffff", marginBottom: 18 }}>
              Begin your <em style={{ fontStyle: "italic", color: accent }}>{g.name.en.toLowerCase()}</em> path.
            </h2>
            <p className="font-prose" style={{ fontSize: 18, color: "#ece5d4", marginBottom: 32 }}>
              First a consultation. Then a written plan. No commitment.
            </p>
            <a
              href={clinicConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book a consultation on WhatsApp
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
