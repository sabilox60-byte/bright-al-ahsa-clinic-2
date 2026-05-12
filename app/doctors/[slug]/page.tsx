import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Portrait from "@/components/Portrait";
import ScrollReveal from "@/components/ScrollReveal";
import SchemaInjector from "@/components/SchemaInjector";
import { clinicConfig } from "@/lib/clinic-config";
import { clinicExtras } from "@/lib/clinic-extras";
import { physicianLd, breadcrumbLd } from "@/lib/schema-ld";

export async function generateStaticParams() {
  return clinicExtras.structuredData.doctors.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const d = clinicExtras.structuredData.doctors.find((x) => x.slug === params.slug);
  if (!d) return {};
  return {
    title: `${d.nameEn} — ${clinicConfig.brand.name.en}`,
    description: d.bio.en,
    alternates: { canonical: `/doctors/${d.slug}` },
  };
}

export default async function DoctorPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const d = clinicExtras.structuredData.doctors.find((x) => x.slug === params.slug);
  if (!d) notFound();

  // Find goals where this doctor is recommended
  const goals = clinicExtras.goals.filter((g) => g.doctorSlugs.includes(d.slug));

  return (
    <>
      <SchemaInjector
        schemas={[
          physicianLd(d.slug, "en"),
          breadcrumbLd([
            { label: "Home", href: "/" },
            { label: "Clinicians", href: "/doctors" },
            { label: d.nameEn, href: `/doctors/${d.slug}` },
          ]),
        ]}
      />
      <Nav />
      <main className="page-in">
        <section
          style={{
            padding: "72px 0 56px",
            background: "linear-gradient(180deg, #f6f5f4 0%, #f0ece1 100%)",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div
            className="container-page grid gap-10 items-start mobile-stack"
            style={{ gridTemplateColumns: "1fr 1.4fr" }}
          >
            <ScrollReveal variant="clip-reveal">
              <Portrait
                variant={d.portraitVariant || "terracotta"}
                style={{ width: "100%", height: 520 }}
                rounded={16}
              />
            </ScrollReveal>

            <ScrollReveal variant="fade-up">
              <div className="overline" style={{ color: "#b29362", marginBottom: 14 }}>
                ✦ {d.medicalSpecialty}
              </div>
              <h1 className="h-display" style={{ marginBottom: 18, lineHeight: 1.05 }}>
                {d.nameEn}
              </h1>
              <p className="font-prose italic" style={{ fontSize: 22, color: "#2a3f4f", lineHeight: 1.45, marginBottom: 28 }}>
                {d.bio.en}
              </p>

              {d.scfhsNumber && (
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "10px 16px",
                    background: "rgba(178,147,98,0.12)",
                    borderRadius: 6,
                    fontSize: 13,
                    color: "#0a1f2e",
                    marginBottom: 28,
                  }}
                >
                  <span style={{ color: "#b29362" }}>✜</span>
                  SCFHS Registered <code style={{ fontFamily: "var(--font-mono), monospace", color: "#8f7548" }}>№ {d.scfhsNumber}</code>
                </div>
              )}

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 28 }}>
                {d.languages.map((l) => (
                  <span key={l} className="chip">
                    {l === "ar" ? "Arabic" : l === "en" ? "English" : l.toUpperCase()}
                  </span>
                ))}
                {d.yearsExperience && (
                  <span className="chip chip-sage">
                    {d.yearsExperience}+ years
                  </span>
                )}
              </div>

              <a
                href={clinicConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book with {d.nameEn.split(" ").slice(0, 2).join(" ")}
              </a>
            </ScrollReveal>
          </div>
        </section>

        {/* Credentials */}
        {(d.education || d.certifications) && (
          <section className="section" style={{ position: "relative", zIndex: 2 }}>
            <div className="container-page" style={{ maxWidth: 820 }}>
              <ScrollReveal variant="fade-up">
                <h2 className="h-lg" style={{ marginBottom: 32 }}>
                  Education &amp; <em style={{ fontStyle: "italic", color: "#b29362" }}>credentials</em>
                </h2>
                <div className="grid gap-8 mobile-stack" style={{ gridTemplateColumns: "1fr 1fr" }}>
                  {d.education && d.education.length > 0 && (
                    <div>
                      <h3 className="font-serif" style={{ fontSize: 16, color: "#8f7548", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 14 }}>
                        Education
                      </h3>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                        {d.education.map((e, i) => (
                          <li
                            key={i}
                            className="font-prose"
                            style={{
                              fontSize: 17,
                              color: "#2a3f4f",
                              padding: "10px 0",
                              borderTop: i === 0 ? "none" : "1px dotted rgba(178,147,98,0.4)",
                            }}
                          >
                            {e}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {d.certifications && d.certifications.length > 0 && (
                    <div>
                      <h3 className="font-serif" style={{ fontSize: 16, color: "#8f7548", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 14 }}>
                        Certifications
                      </h3>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                        {d.certifications.map((c, i) => (
                          <li
                            key={i}
                            className="font-prose"
                            style={{
                              fontSize: 17,
                              color: "#2a3f4f",
                              padding: "10px 0",
                              borderTop: i === 0 ? "none" : "1px dotted rgba(178,147,98,0.4)",
                            }}
                          >
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </section>
        )}

        {/* Goals served */}
        {goals.length > 0 && (
          <section className="section-sm" style={{ background: "#f6f5f4", position: "relative", zIndex: 2 }}>
            <div className="container-page">
              <div className="overline" style={{ color: "#b29362", marginBottom: 14 }}>
                ✦ Goals served
              </div>
              <div className="grid gap-4 mobile-stack" style={{ gridTemplateColumns: `repeat(${Math.min(goals.length, 4)}, 1fr)` }}>
                {goals.map((g) => (
                  <Link
                    key={g.slug}
                    href={`/goals/${g.slug}`}
                    className="card card-interactive"
                    style={{ padding: 24, textDecoration: "none", color: "inherit", display: "block" }}
                  >
                    <span style={{ fontFamily: "var(--font-italiana), serif", fontSize: 28, color: g.accentColor }}>
                      {g.symbol}
                    </span>
                    <div className="font-serif" style={{ fontSize: 19, marginTop: 8, color: "#0a1f2e" }}>
                      {g.name.en}
                    </div>
                    <p className="font-prose italic" style={{ fontSize: 14, marginTop: 6, color: "#7f8487" }}>
                      {g.tagline.en}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
