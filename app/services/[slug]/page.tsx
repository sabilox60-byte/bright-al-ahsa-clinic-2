import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import SchemaInjector from "@/components/SchemaInjector";
import { clinicConfig } from "@/lib/clinic-config";
import { clinicExtras } from "@/lib/clinic-extras";
import { procedureLd, faqLd, breadcrumbLd, serviceLd } from "@/lib/schema-ld";

export async function generateStaticParams() {
  return clinicExtras.structuredData.procedures.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const p = clinicExtras.structuredData.procedures.find((x) => x.slug === params.slug);
  if (!p) return {};
  return {
    title: `${p.nameEn} — ${clinicConfig.brand.name.en}`,
    description: clinicExtras.aeo.quickAnswerTemplate.en,
    alternates: { canonical: `/services/${p.slug}` },
  };
}

export default async function TreatmentPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const p = clinicExtras.structuredData.procedures.find((x) => x.slug === params.slug);
  if (!p) notFound();

  // Find which goals reference this procedure (cross-link)
  const linkingGoals = clinicExtras.goals.filter((g) => g.procedureSlugs.includes(p.slug));
  const aftercare = clinicExtras.aftercare.templates.find((t) => t.procedureSlug === p.slug);

  // Stub FAQs — cleaner: clinic editor can extend in clinic-extras later
  const faqs = [
    {
      q: { en: `What is ${p.nameEn}?`, ar: `ما هو ${p.nameAr}؟` },
      a: { en: clinicExtras.aeo.quickAnswerTemplate.en, ar: clinicExtras.aeo.quickAnswerTemplate.ar },
    },
    {
      q: { en: "How long is the session?", ar: "كم تستغرق الجلسة؟" },
      a: {
        en: p.typicalDurationMinutes ? `Typically ${p.typicalDurationMinutes} minutes.` : "Varies — your clinician will confirm at consultation.",
        ar: p.typicalDurationMinutes ? `عادة ${p.typicalDurationMinutes} دقيقة.` : "يختلف — سيؤكّد طبيبكِ في الاستشارة.",
      },
    },
    {
      q: { en: "How much does it cost?", ar: "ما هي التكلفة؟" },
      a: {
        en: p.estimatedPriceMin ? `Between ${p.estimatedPriceMin}–${p.estimatedPriceMax} ${p.currency || "SAR"}, depending on the plan we agree at consultation.` : "Pricing depends on your plan. Free consultation first.",
        ar: p.estimatedPriceMin ? `بين ${p.estimatedPriceMin}–${p.estimatedPriceMax} ${p.currency || "ر.س"}، حسب الخطّة المتّفق عليها.` : "السعر يعتمد على الخطّة. الاستشارة الأولى مجانية.",
      },
    },
  ];

  return (
    <>
      <SchemaInjector
        schemas={[
          procedureLd(p.slug, "en"),
          serviceLd({
            slug: p.slug,
            name: p.nameEn,
            description: clinicExtras.aeo.quickAnswerTemplate.en,
            category: p.procedureType,
            priceMin: p.estimatedPriceMin,
            priceMax: p.estimatedPriceMax,
            currency: p.currency || "SAR",
            url: `/services/${p.slug}`,
          }),
          faqLd(faqs.map((f) => ({ q: f.q.en, a: f.a.en }))),
          breadcrumbLd([
            { label: "Home", href: "/" },
            { label: "Departments", href: "/services" },
            { label: p.nameEn, href: `/services/${p.slug}` },
          ]),
        ]}
      />
      <Nav />
      <main className="page-in">
        <PageHero
          roman="∞"
          eyebrow={`✦ ${p.procedureType} · ${p.bodyLocation || "Treatment"}`}
          title={p.nameEn}
          titleEm=""
          sub={clinicExtras.aeo.quickAnswerTemplate.en}
        />

        {/* Quick-answer callout — AI extraction unit */}
        <section style={{ background: "#f0ece1", padding: "32px 0", position: "relative", zIndex: 2 }}>
          <div className="container-page" style={{ maxWidth: 760 }}>
            <ScrollReveal variant="fade-up">
              <div className="overline" style={{ color: "#8f7548", marginBottom: 10 }}>
                ✦ Quick answer
              </div>
              <p className="font-prose italic" style={{ fontSize: 22, color: "#2a3f4f", lineHeight: 1.5 }}>
                {clinicExtras.aeo.quickAnswerTemplate.en}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Clinical detail */}
        <section className="section" style={{ position: "relative", zIndex: 2 }}>
          <div className="container-page" style={{ maxWidth: 820 }}>
            <ScrollReveal variant="fade-up">
              <h2 className="h-lg" style={{ marginBottom: 24 }}>
                Clinical <em style={{ fontStyle: "italic", color: "#b29362" }}>detail</em>
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }} className="mobile-stack">
                <DetailRow label="Type" value={p.procedureType} />
                {p.bodyLocation && <DetailRow label="Area" value={p.bodyLocation} />}
                {p.typicalDurationMinutes && <DetailRow label="Duration" value={`${p.typicalDurationMinutes} minutes`} />}
                {p.estimatedPriceMin && (
                  <DetailRow
                    label="Price range"
                    value={`${p.estimatedPriceMin}–${p.estimatedPriceMax} ${p.currency || "SAR"}`}
                  />
                )}
              </div>

              {p.howPerformed && (
                <DetailBlock title="How it&apos;s performed">{p.howPerformed.en}</DetailBlock>
              )}
              {p.preparation && (
                <DetailBlock title="Preparation">{p.preparation.en}</DetailBlock>
              )}
              {p.followup && (
                <DetailBlock title="Follow-up">{p.followup.en}</DetailBlock>
              )}
            </ScrollReveal>
          </div>
        </section>

        {/* FAQs (AI-extractable) */}
        <section className="section-sm" style={{ background: "#f6f5f4", position: "relative", zIndex: 2 }}>
          <div className="container-page" style={{ maxWidth: 820 }}>
            <ScrollReveal variant="fade-up">
              <h2 className="h-md" style={{ marginBottom: 32 }}>
                Common questions
              </h2>
              <dl>
                {faqs.map((item, i) => (
                  <details
                    key={i}
                    style={{
                      borderTop: "1px dotted rgba(178,147,98,0.45)",
                      padding: "18px 0",
                    }}
                  >
                    <summary
                      style={{
                        fontFamily: "var(--font-source-serif), serif",
                        fontSize: 18,
                        fontWeight: 500,
                        color: "#0a1f2e",
                        cursor: "pointer",
                        listStyle: "none",
                      }}
                    >
                      {item.q.en}
                    </summary>
                    <p className="font-prose" style={{ fontSize: 16, lineHeight: 1.6, color: "#2a3f4f", marginTop: 12 }}>
                      {item.a.en}
                    </p>
                  </details>
                ))}
                <div style={{ borderTop: "1px dotted rgba(178,147,98,0.45)" }} />
              </dl>
            </ScrollReveal>
          </div>
        </section>

        {/* Aftercare preview */}
        {aftercare && (
          <section className="section-sm" style={{ position: "relative", zIndex: 2 }}>
            <div className="container-page" style={{ maxWidth: 820 }}>
              <div className="card" style={{ padding: 32 }}>
                <div className="overline" style={{ color: "#b29362", marginBottom: 12 }}>
                  ✦ Aftercare preview
                </div>
                <h3 className="font-serif" style={{ fontSize: 22, color: "#0a1f2e", marginBottom: 18 }}>
                  After your visit
                </h3>
                <p className="font-prose" style={{ fontSize: 17, color: "#2a3f4f", lineHeight: 1.6 }}>
                  Patients receive a private link with full aftercare instructions, a daily check-in, and a direct line to their clinician for the recovery window.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Cross-link to goals */}
        {linkingGoals.length > 0 && (
          <section className="section-sm" style={{ position: "relative", zIndex: 2 }}>
            <div className="container-page">
              <div className="overline" style={{ color: "#b29362", marginBottom: 14 }}>
                ✦ Goals served
              </div>
              <div className="grid gap-4 mobile-stack" style={{ gridTemplateColumns: `repeat(${linkingGoals.length}, 1fr)` }}>
                {linkingGoals.map((g) => (
                  <Link
                    key={g.slug}
                    href={`/goals/${g.slug}`}
                    className="card card-interactive"
                    style={{ padding: 22, textDecoration: "none", color: "inherit", display: "block" }}
                  >
                    <span style={{ fontFamily: "var(--font-italiana), serif", fontSize: 24, color: g.accentColor }}>
                      {g.symbol}
                    </span>
                    <div className="font-serif" style={{ fontSize: 18, marginTop: 6, color: "#0a1f2e" }}>
                      {g.name.en}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="section section-dark">
          <div className="container-page" style={{ textAlign: "center", maxWidth: 720 }}>
            <h2 className="h-xl" style={{ color: "#ffffff", marginBottom: 18 }}>
              Discuss <em style={{ fontStyle: "italic", color: "#b29362" }}>{p.nameEn.toLowerCase()}</em> with a clinician.
            </h2>
            <p className="font-prose" style={{ fontSize: 18, color: "#ece5d4", marginBottom: 32 }}>
              Free consultation first. No commitment to treatment.
            </p>
            <a
              href={clinicConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book on WhatsApp
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function DetailRow({ label, value }: { label: string; value: string | number }) {
  return (
    <div style={{ borderBottom: "1px dotted rgba(178,147,98,0.4)", paddingBottom: 12 }}>
      <div className="overline" style={{ color: "#8f7548", marginBottom: 4, fontSize: 10 }}>
        {label}
      </div>
      <div className="font-serif" style={{ fontSize: 18, color: "#0a1f2e" }}>
        {value}
      </div>
    </div>
  );
}

function DetailBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginTop: 32 }}>
      <h3 className="font-serif" style={{ fontSize: 19, color: "#8f7548", marginBottom: 10, fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase" }}>
        {title}
      </h3>
      <p className="font-prose" style={{ fontSize: 17, lineHeight: 1.6, color: "#2a3f4f" }}>
        {children}
      </p>
    </div>
  );
}
