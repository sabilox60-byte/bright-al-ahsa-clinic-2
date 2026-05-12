import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import SchemaInjector from "@/components/SchemaInjector";
import { clinicConfig } from "@/lib/clinic-config";
import { clinicExtras } from "@/lib/clinic-extras";
import { faqLd, breadcrumbLd } from "@/lib/schema-ld";

export const metadata: Metadata = {
  title: `Frequently Asked Questions — ${clinicConfig.brand.name.en}`,
  description: "Direct answers to common questions about treatments, booking, pricing, and what to expect on your first visit.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  // Combine homepage faqs + per-goal faqs
  const allFaqs = [
    ...clinicConfig.faq.items,
    ...clinicExtras.goals.flatMap((g) => g.faqs),
  ];

  return (
    <>
      <SchemaInjector
        schemas={[
          faqLd(allFaqs.map((i) => ({ q: i.q.en, a: i.a.en }))),
          breadcrumbLd([
            { label: "Home", href: "/" },
            { label: "FAQ", href: "/faq" },
          ]),
        ]}
      />
      <Nav />
      <main className="page-in">
        <PageHero
          roman="VI"
          eyebrow="✦ FAQ"
          title="Direct answers."
          titleEm="No jargon."
          sub="The questions we hear most. Don't find yours? Message us on WhatsApp — we read every message the same day."
        />

        <section className="section" style={{ position: "relative", zIndex: 2 }}>
          <div className="container-page" style={{ maxWidth: 820 }}>
            <ScrollReveal variant="fade-up">
              <div style={{ marginBottom: 56 }}>
                <p className="font-prose italic" style={{ fontSize: 20, color: "#2a3f4f", lineHeight: 1.5 }}>
                  Quick answers below. Each is short by design — for the longer answer, ask us by name.
                </p>
              </div>
            </ScrollReveal>

            <dl style={{ display: "flex", flexDirection: "column" }}>
              {allFaqs.map((item, i) => (
                <ScrollReveal key={i} variant="fade-up" delay={i * 40}>
                  <details
                    style={{
                      borderTop: "1px dotted rgba(178,147,98,0.45)",
                      padding: "22px 0",
                    }}
                  >
                    <summary
                      style={{
                        fontFamily: "var(--font-source-serif), serif",
                        fontSize: 22,
                        fontWeight: 500,
                        color: "#0a1f2e",
                        cursor: "pointer",
                        listStyle: "none",
                        display: "flex",
                        justifyContent: "space-between",
                        gap: 16,
                        alignItems: "baseline",
                      }}
                    >
                      <span>{item.q.en}</span>
                      <span aria-hidden style={{ color: "#b29362", fontSize: 18, transition: "transform 200ms" }}>
                        +
                      </span>
                    </summary>
                    <div
                      className="font-prose"
                      style={{
                        fontSize: 17,
                        lineHeight: 1.6,
                        color: "#2a3f4f",
                        marginTop: 14,
                        maxWidth: 680,
                      }}
                    >
                      {item.a.en}
                    </div>
                  </details>
                </ScrollReveal>
              ))}
              <div style={{ borderTop: "1px dotted rgba(178,147,98,0.45)" }} />
            </dl>

            <div style={{ marginTop: 64, textAlign: "center" }}>
              <a
                href={clinicConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Still have a question? WhatsApp us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
