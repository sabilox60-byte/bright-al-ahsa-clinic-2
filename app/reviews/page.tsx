import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Portrait from "@/components/Portrait";
import BookCtaDark from "@/components/BookCtaDark";
import { clinicConfig } from "@/lib/clinic-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Reviews — ${clinicConfig.brand.name.en}`,
  description: clinicConfig.reviewsPage.hero.sub.en,
};

export default function ReviewsPage() {
  const { reviewsPage: rp } = clinicConfig;

  return (
    <>
      <Nav />
      <main className="page-in">
        <PageHero
          roman={rp.hero.roman}
          eyebrow={rp.hero.eyebrow.en}
          title={rp.hero.title.en}
          titleEm={rp.hero.titleEm.en}
          sub={rp.hero.sub.en}
          variant="sage"
        />

        {/* Rating summary */}
        <section
          style={{
            padding: "40px 0",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div
            className="container-page flex items-center justify-between flex-wrap gap-6"
          >
            <div className="flex gap-5 items-center">
              <div>
                <div
                  className="font-prose"
                  style={{
                    fontSize: 56,
                    lineHeight: 1,
                    color: "#0a1f2e",
                    fontWeight: 500,
                  }}
                >
                  {rp.rating}
                </div>
                <div style={{ color: "#b29362", letterSpacing: 3, fontSize: 16, marginTop: 4 }}>
                  ★★★★★
                </div>
              </div>
              <div
                style={{
                  borderLeft: "1px solid #f0ece1",
                  paddingLeft: 20,
                }}
              >
                <div className="overline">Google Rating</div>
                <div
                  className="font-prose"
                  style={{ fontSize: 18, marginTop: 6, color: "#2a3f4f" }}
                >
                  {rp.reviewCount.en}
                </div>
              </div>
            </div>
            <a href="#" className="btn-ghost">
              Open on Google ↗
            </a>
          </div>
        </section>

        {/* Reviews grid */}
        <section className="section" style={{ paddingTop: 0, position: "relative", zIndex: 2 }}>
          <div
            className="container-page grid gap-6 mobile-stack"
            style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
          >
            {rp.items.map((r, i) => (
              <figure
                key={i}
                className="card"
                style={{
                  margin: 0,
                  padding: 28,
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                <div style={{ color: "#b29362", letterSpacing: 2, fontSize: 14 }}>
                  {"★".repeat(r.stars)}
                </div>
                <blockquote
                  className="font-prose italic"
                  style={{
                    margin: 0,
                    fontSize: 22,
                    lineHeight: 1.35,
                    color: "#0a1f2e",
                  }}
                >
                  {r.shortQuote.en}
                </blockquote>
                <p style={{ fontSize: 14, color: "#7f8487", lineHeight: 1.6, margin: 0 }}>
                  {r.longQuote.en}
                </p>
                <figcaption
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginTop: "auto",
                    paddingTop: 16,
                    borderTop: "1px dotted #8f7548",
                  }}
                >
                  <Portrait
                    variant={r.variant}
                    style={{ width: 44, height: 44, borderRadius: 999 }}
                    rounded={999}
                  />
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 500, color: "#0a1f2e" }}>
                      {r.name}
                    </div>
                    <div style={{ fontSize: 12, color: "#7f8487", marginTop: 2 }}>
                      {r.date.en}
                    </div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <BookCtaDark />
      </main>
      <Footer />
    </>
  );
}
