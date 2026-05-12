import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { clinicConfig } from "@/lib/clinic-config";
import { clinicExtras } from "@/lib/clinic-extras";
import AftercareCheckIn from "./CheckIn";

export const metadata: Metadata = {
  title: `Aftercare — ${clinicConfig.brand.name.en}`,
  robots: { index: false, follow: false }, // Patient portals must NOT be indexed
};

/**
 * Aftercare Portal — token-secured per-patient page.
 *
 * In production, the token resolves a Supabase patient_recovery row.
 * For the template, we lookup by procedure slug embedded in the token:
 *   /portal/{procedureSlug}-{anyRandomString}
 * e.g.  /portal/botox-7f3kx9
 *
 * This keeps the template runnable WITHOUT a backend, while preserving the URL
 * shape that production code (with Supabase) will use.
 */
export default async function PortalPage(props: { params: Promise<{ token: string }> }) {
  const params = await props.params;
  const cfg = clinicExtras.aftercare;
  if (!cfg.enabled) notFound();

  // Demo lookup — first segment of the token = procedure slug
  const procedureSlug = params.token.split("-")[0];
  const template = cfg.templates.find((t) => t.procedureSlug === procedureSlug);
  if (!template) notFound();

  return (
    <>
      <Nav />
      <main className="page-in">
        <section className="section" style={{ position: "relative", zIndex: 2 }}>
          <div className="container-page" style={{ maxWidth: 760 }}>
            <ScrollReveal variant="fade-up">
              <div className="overline" style={{ color: "#b29362", marginBottom: 14 }}>
                {cfg.hero.eyebrow.en}
              </div>
              <h1 className="h-display" style={{ marginBottom: 16, lineHeight: 1.1 }}>
                {cfg.hero.headline.en}
              </h1>
              <p className="font-prose italic" style={{ fontSize: 22, color: "#2a3f4f", lineHeight: 1.45, maxWidth: 580 }}>
                {cfg.hero.sub.en}
              </p>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={120}>
              <article className="card" style={{ marginTop: 56, padding: 40 }}>
                <h2 className="font-serif" style={{ fontSize: 26, color: "#0a1f2e", marginBottom: 24 }}>
                  {template.title.en}
                </h2>

                <Section heading="First 24 hours">
                  <ul style={{ paddingLeft: 18, margin: 0, lineHeight: 1.7 }}>
                    {template.immediateInstructions.map((i, k) => (
                      <li key={k} style={{ marginBottom: 8, color: "#2a3f4f" }}>
                        {i.en}
                      </li>
                    ))}
                  </ul>
                </Section>

                <Section heading="First 7 days">
                  <ul style={{ paddingLeft: 18, margin: 0, lineHeight: 1.7 }}>
                    {template.weekInstructions.map((i, k) => (
                      <li key={k} style={{ marginBottom: 8, color: "#2a3f4f" }}>
                        {i.en}
                      </li>
                    ))}
                  </ul>
                </Section>

                <Section heading="Call us right away if…" warn>
                  <ul style={{ paddingLeft: 18, margin: 0, lineHeight: 1.7 }}>
                    {template.redFlags.map((i, k) => (
                      <li key={k} style={{ marginBottom: 8, color: "#0a1f2e", fontWeight: 500 }}>
                        {i.en}
                      </li>
                    ))}
                  </ul>
                </Section>

                <hr className="rule-dotted" style={{ margin: "32px 0" }} />

                <p className="font-prose italic" style={{ fontSize: 18, color: "#2a3f4f", lineHeight: 1.5 }}>
                  {template.nextStepCopy.en}
                </p>
              </article>
            </ScrollReveal>

            {/* Daily check-in (client component) */}
            <ScrollReveal variant="fade-up" delay={240}>
              <div style={{ marginTop: 40 }}>
                <AftercareCheckIn token={params.token} />
              </div>
            </ScrollReveal>

            {/* Direct line to clinician */}
            <ScrollReveal variant="fade-up" delay={360}>
              <div
                style={{
                  marginTop: 40,
                  padding: 28,
                  background: "rgba(178,147,98,0.08)",
                  borderRadius: 12,
                  textAlign: "center",
                }}
              >
                <div className="overline" style={{ color: "#b29362", marginBottom: 12 }}>
                  ✦ Direct line
                </div>
                <p className="font-prose" style={{ fontSize: 18, color: "#2a3f4f", marginBottom: 18 }}>
                  Anything off? Don't wait. Message us — same-day reply, your case file is open.
                </p>
                <a
                  href={clinicConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Message your clinician
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Section({ heading, warn = false, children }: { heading: string; warn?: boolean; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <h3
        className="font-serif"
        style={{
          fontSize: 17,
          color: warn ? "#9a3a3a" : "#8f7548",
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          marginBottom: 12,
          fontWeight: 600,
        }}
      >
        {heading}
      </h3>
      <div className="font-prose" style={{ fontSize: 17, color: "#2a3f4f" }}>
        {children}
      </div>
    </div>
  );
}
