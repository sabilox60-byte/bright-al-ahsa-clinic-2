import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Portrait from "@/components/Portrait";
import ChapterMark from "@/components/ChapterMark";
import BookCtaDark from "@/components/BookCtaDark";
import { clinicConfig } from "@/lib/clinic-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Departments — ${clinicConfig.brand.name.en}`,
  description: clinicConfig.departmentsPage.hero.sub.en,
};

export default function ServicesPage() {
  const { departmentsPage: dp, contact } = clinicConfig;

  return (
    <>
      <Nav />
      <main className="page-in">
        <PageHero
          roman={dp.hero.roman}
          eyebrow={dp.hero.eyebrow.en}
          title={dp.hero.title.en}
          titleEm={dp.hero.titleEm.en}
          sub={dp.hero.sub.en}
          variant="terracotta"
          image="/media/heros/services-hero.webp"
        />

        {dp.items.map((dept, idx) => (
          <section
            key={dept.num}
            className="section"
            style={{
              background: idx % 2 === 0 ? "#f6f5f4" : "#ffffff",
              borderTop: "1px dotted #8f7548",
              position: "relative",
              zIndex: 2,
            }}
          >
            <div
              className="container-page grid gap-10 items-start mobile-stack"
              style={{ gridTemplateColumns: "0.85fr 1.15fr" }}
            >
              {/* Left: sticky portrait + chapter + header (desktop only) */}
              <div className="dept-sticky">
                <Portrait
                  variant={dept.variant}
                  style={{ width: "100%", aspectRatio: "1/1", borderRadius: 20 }}
                />
                <div style={{ marginTop: 24 }}>
                  <ChapterMark roman={dept.num} title={dept.sub.en} />
                </div>
                <h2 className="h-xl" style={{ marginTop: 16, fontSize: 38 }}>
                  {dept.name.en}
                </h2>
                <p
                  className="font-prose italic"
                  style={{ fontSize: 18, color: "#2a3f4f", marginTop: 14, lineHeight: 1.55 }}
                >
                  {dept.blurb.en}
                </p>
                <div
                  style={{
                    marginTop: 22,
                    padding: "14px 18px",
                    background: "#f0ece1",
                    borderRadius: 4,
                    display: "inline-block",
                  }}
                >
                  <div
                    style={{
                      fontSize: 10,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#7f8487",
                      fontWeight: 600,
                    }}
                  >
                    Pricing
                  </div>
                  <div className="font-prose italic" style={{ fontSize: 17, color: "#0a1f2e", marginTop: 4 }}>
                    {dept.pricing.en}
                  </div>
                </div>
              </div>

              {/* Right: treatment list */}
              <div>
                <div className="overline" style={{ color: "#b29362", marginBottom: 18 }}>
                  Services ({dept.treatments.length})
                </div>
                {dept.treatments.map((treatment, i) => (
                  <div
                    key={i}
                    className="icon-grid"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "60px 1fr",
                      gap: 20,
                      alignItems: "baseline",
                      padding: "18px 0",
                      borderTop: "1px solid #ece5d4",
                    }}
                  >
                    <span
                      className="font-mono"
                      style={{ fontSize: 12, color: "#8f7548" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3
                      style={{
                        fontFamily: "var(--font-source-serif), 'Source Serif 4', Georgia, serif",
                        fontWeight: 600,
                        fontSize: 19,
                        color: "#0a1f2e",
                        margin: 0,
                        lineHeight: 1.4,
                      }}
                    >
                      {treatment.en}
                    </h3>
                  </div>
                ))}
                <a
                  href={contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ marginTop: 32, display: "inline-block" }}
                >
                  Book this department on WhatsApp →
                </a>
              </div>
            </div>
          </section>
        ))}

        {/* Equipment section — warm champagne wash + navy text */}
        <section
          className="section"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(212, 184, 153, 0.55) 0%, transparent 60%), linear-gradient(180deg, #f5efe1 0%, #ece5d4 100%)",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div className="container-page">
            <div className="text-center" style={{ marginBottom: 48 }}>
              <ChapterMark roman="V" title="Technology" />
              <h2 className="h-xl" style={{ color: "#0a1f2e", marginTop: 20 }}>
                Equipment
                <br />
                <em style={{ fontStyle: "italic", color: "#8f7548" }}>we trust.</em>
              </h2>
              <p
                className="font-prose italic"
                style={{ color: "#2a3f4f", fontSize: 18, marginTop: 16, maxWidth: 560, marginInline: "auto" }}
              >
                Internationally certified technology, chosen because it is effective and safe.
              </p>
            </div>
            <div
              className="grid gap-4"
              style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}
            >
              {dp.equipment.map((eq) => (
                <div
                  key={eq.name}
                  style={{
                    padding: 24,
                    background: "#ffffff",
                    borderRadius: 8,
                    boxShadow: "0 0 0 1px rgba(143, 117, 72, 0.18), 0 8px 24px rgba(10, 31, 46, 0.04)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-source-serif), 'Source Serif 4', Georgia, serif",
                      fontWeight: 600,
                      fontSize: 18,
                      color: "#0a1f2e",
                    }}
                  >
                    {eq.name}
                  </div>
                  <div style={{ marginTop: 8, fontSize: 14, color: "#2a3f4f", lineHeight: 1.55 }}>
                    {eq.description.en}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <BookCtaDark
          headline={dp.bookCta.headline.en}
          description={dp.bookCta.description.en}
        />
      </main>
      <Footer />
    </>
  );
}
