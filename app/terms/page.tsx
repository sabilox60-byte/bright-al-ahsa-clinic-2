import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { clinicConfig } from "@/lib/clinic-config";

export const metadata: Metadata = {
  title: `Terms of Service — ${clinicConfig.brand.name.en}`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="page-in">
        <PageHero
          roman="IX"
          eyebrow="✦ Terms"
          title="The agreement"
          titleEm="between us."
          sub="Plain language. No fine print. Read once, and you'll know what to expect."
        />
        <section className="section" style={{ position: "relative", zIndex: 2 }}>
          <article className="container-page" style={{ maxWidth: 760 }}>
            <Term title="1. Booking & cancellation">
              You may cancel up to 24 hours before your appointment without penalty. Same-day cancellations forfeit any deposit. We reserve the right to reschedule for medical reasons.
            </Term>
            <Term title="2. Pricing">
              All prices listed are in Saudi Riyal (SAR) and inclusive of VAT. Estimates given before consultation are non-binding; the final plan is written and signed at the consultation.
            </Term>
            <Term title="3. Treatment outcomes">
              Aesthetic medicine carries inherent variability. We commit to safe, evidence-based protocols and transparent communication. We do not guarantee specific cosmetic outcomes — only that we will work to a defined standard of care.
            </Term>
            <Term title="4. Aftercare">
              Following the written aftercare plan is the patient&apos;s responsibility. Outcomes can be affected by sun exposure, skincare habits, and overall health.
            </Term>
            <Term title="5. Refunds">
              Treatments are non-refundable once delivered. If a course of sessions is purchased and unused sessions remain after 12 months, a credit is issued.
            </Term>
            <Term title="6. Photography & consent">
              Photos are taken before/after only with written consent. We never share patient images without explicit, revocable consent.
            </Term>
            <Term title="7. Governing law">
              These terms are governed by the laws of the Kingdom of Saudi Arabia. Disputes are resolved through Saudi commercial mediation first, then Saudi courts.
            </Term>
            <Term title="8. Contact">
              Questions about these terms — <a href={`mailto:${clinicConfig.contact.email}`} className="tlink" style={{ color: "#8f7548" }}>{clinicConfig.contact.email}</a>.
            </Term>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Term({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 28, paddingBottom: 28, borderBottom: "1px dotted rgba(178,147,98,0.4)" }}>
      <h3 className="font-serif" style={{ fontSize: 19, color: "#0a1f2e", marginBottom: 10, fontWeight: 600 }}>
        {title}
      </h3>
      <p className="font-prose" style={{ fontSize: 17, lineHeight: 1.6, color: "#2a3f4f" }}>
        {children}
      </p>
    </section>
  );
}
