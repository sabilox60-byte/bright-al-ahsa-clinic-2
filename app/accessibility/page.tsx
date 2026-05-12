import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { clinicConfig } from "@/lib/clinic-config";

export const metadata: Metadata = {
  title: `Accessibility — ${clinicConfig.brand.name.en}`,
  alternates: { canonical: "/accessibility" },
};

export default function AccessibilityPage() {
  return (
    <>
      <Nav />
      <main className="page-in">
        <PageHero
          roman="X"
          eyebrow="✦ Accessibility"
          title="Designed"
          titleEm="for everyone."
          sub="WCAG 2.2 AA. RTL-first Arabic layouts. Screen-reader tested."
        />
        <section className="section" style={{ position: "relative", zIndex: 2 }}>
          <article className="container-page" style={{ maxWidth: 760 }}>
            <p className="font-prose" style={{ fontSize: 19, lineHeight: 1.6, color: "#2a3f4f", marginBottom: 24 }}>
              We aim to meet WCAG 2.2 AA standards across the entire site. We test with screen readers, keyboard-only navigation, and reduced-motion settings. Animations respect <code>prefers-reduced-motion</code>.
            </p>
            <h3 className="font-serif" style={{ fontSize: 19, color: "#0a1f2e", marginBottom: 12, marginTop: 32, fontWeight: 600 }}>
              Languages &amp; direction
            </h3>
            <p className="font-prose" style={{ fontSize: 17, lineHeight: 1.6, color: "#2a3f4f", marginBottom: 24 }}>
              Arabic and English. Arabic pages use RTL layout with logical CSS properties — text flows correctly, controls mirror, and screen readers announce in Arabic.
            </p>
            <h3 className="font-serif" style={{ fontSize: 19, color: "#0a1f2e", marginBottom: 12, marginTop: 32, fontWeight: 600 }}>
              Keyboard navigation
            </h3>
            <p className="font-prose" style={{ fontSize: 17, lineHeight: 1.6, color: "#2a3f4f", marginBottom: 24 }}>
              Every interactive element is reachable by Tab. Focus rings are visible. Skip-to-content link at top.
            </p>
            <h3 className="font-serif" style={{ fontSize: 19, color: "#0a1f2e", marginBottom: 12, marginTop: 32, fontWeight: 600 }}>
              Found something off?
            </h3>
            <p className="font-prose" style={{ fontSize: 17, lineHeight: 1.6, color: "#2a3f4f", marginBottom: 24 }}>
              Email <a href={`mailto:${clinicConfig.contact.email}`} className="tlink" style={{ color: "#8f7548" }}>{clinicConfig.contact.email}</a> — we treat accessibility issues as bugs and fix within 14 days.
            </p>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
