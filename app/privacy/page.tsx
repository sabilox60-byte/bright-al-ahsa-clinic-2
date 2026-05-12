import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { clinicConfig } from "@/lib/clinic-config";
import { clinicExtras } from "@/lib/clinic-extras";

export const metadata: Metadata = {
  title: `Privacy Policy — ${clinicConfig.brand.name.en}`,
  description: "PDPL-compliant privacy policy. Patient data stored on Saudi sovereign infrastructure.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="page-in">
        <PageHero
          roman="VIII"
          eyebrow="✦ Privacy"
          title="Your data,"
          titleEm="under your eye."
          sub="A short, readable summary — followed by the legal text. We follow Saudi PDPL and write what we mean."
        />
        <section className="section" style={{ position: "relative", zIndex: 2 }}>
          <article className="container-page" style={{ maxWidth: 760 }}>
            <h2 className="h-lg" style={{ marginBottom: 24 }}>
              The summary
            </h2>
            <p className="font-prose" style={{ fontSize: 18, lineHeight: 1.6, color: "#2a3f4f", marginBottom: 18 }}>
              We collect what we need to schedule, treat, and follow up on your care — nothing more. We store your records on Saudi-hosted infrastructure. We never sell, trade, or transfer your data outside Saudi Arabia.
            </p>
            <p className="font-prose" style={{ fontSize: 18, lineHeight: 1.6, color: "#2a3f4f", marginBottom: 18 }}>
              You can request a copy of your file, ask us to correct it, or ask us to delete it. Email <a href={`mailto:${clinicConfig.contact.email}`} className="tlink" style={{ color: "#8f7548" }}>{clinicConfig.contact.email}</a> with the subject &ldquo;Data request.&rdquo; We respond within 30 days.
            </p>

            <hr className="rule-dotted" style={{ margin: "40px 0" }} />

            <h2 className="h-lg" style={{ marginBottom: 24 }}>
              The full policy
            </h2>

            <PolicySection title="1. Identity of the controller">
              {clinicExtras.identity.legalName.en}, registered in the Kingdom of Saudi Arabia
              {clinicExtras.identity.crNumber && ` under Commercial Registration ${clinicExtras.identity.crNumber}`}.
            </PolicySection>

            <PolicySection title="2. Data we collect">
              Booking details (name, phone, email, requested treatment), clinical notes from your visit, photos taken with your written consent, payment metadata (we never store card numbers — handled by SAMA-licensed processors).
            </PolicySection>

            <PolicySection title="3. Lawful basis">
              We process personal data under the consent you give at booking, and under the medical-records obligation set by the Saudi Ministry of Health.
            </PolicySection>

            <PolicySection title="4. Storage location">
              All data is stored on Saudi-hosted infrastructure. No cross-border transfer. Backups are encrypted at rest.
            </PolicySection>

            <PolicySection title="5. Retention">
              Clinical records are retained for 10 years per MOH requirements. Marketing and analytics records are deleted after 24 months unless you opt to remain on our list.
            </PolicySection>

            <PolicySection title="6. Your rights under PDPL">
              Access, correction, deletion, restriction of processing, withdrawal of consent at any time, and the right to file a complaint with the Saudi Data &amp; AI Authority (SDAIA).
            </PolicySection>

            <PolicySection title="7. How to reach us">
              Email <a href={`mailto:${clinicConfig.contact.email}`} className="tlink" style={{ color: "#8f7548" }}>{clinicConfig.contact.email}</a>. WhatsApp also works.
            </PolicySection>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}

function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 28 }}>
      <h3 className="font-serif" style={{ fontSize: 19, color: "#0a1f2e", marginBottom: 10, fontWeight: 600 }}>
        {title}
      </h3>
      <p className="font-prose" style={{ fontSize: 17, lineHeight: 1.6, color: "#2a3f4f" }}>
        {children}
      </p>
    </section>
  );
}
