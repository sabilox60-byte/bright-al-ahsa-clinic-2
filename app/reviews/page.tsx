import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import BookCtaDark from "@/components/BookCtaDark";
import { clinicConfig } from "@/lib/clinic-config";
import { clinicExtras } from "@/lib/clinic-extras";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Reviews — ${clinicConfig.brand.name.en}`,
  description: clinicConfig.reviewsPage.hero.sub.en,
};

export default function ReviewsPage() {
  const { reviewsPage: rp } = clinicConfig;
  const badges = clinicExtras.trustVault.badges;

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

        {/* Trust badges strip — verifiable credentials moved from /trust */}
        <section
          style={{
            padding: "32px 0",
            background:
              "radial-gradient(circle at 50% 0%, rgba(212, 184, 153, 0.45) 0%, transparent 70%), linear-gradient(180deg, #f5efe1 0%, #ece5d4 100%)",
            borderBottom: "1px solid rgba(143, 117, 72, 0.18)",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div className="container-page">
            <div className="overline" style={{ color: "#8f7548", marginBottom: 16, textAlign: "center" }}>
              ✦ Verifiable trust
            </div>
            <div
              className="flex items-center justify-center flex-wrap gap-3"
              style={{ rowGap: 10 }}
            >
              {badges.map((badge) => (
                <span
                  key={badge.id}
                  className="chip"
                  style={{
                    background: "rgba(255, 255, 255, 0.85)",
                    fontSize: 11,
                    padding: "8px 14px",
                  }}
                  title={badge.description.en}
                >
                  {badge.name.en}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Rating summary */}
        <section
          style={{
            padding: "40px 0 20px",
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

        {/* Reviews grid — mixed AR / EN cards */}
        <section className="section" style={{ paddingTop: 24, position: "relative", zIndex: 2 }}>
          <div
            className="container-page grid gap-6 mobile-stack"
            style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
          >
            {rp.items.map((r, i) => {
              const isArabic = r.lang === "ar";
              const shortQuote = isArabic ? r.shortQuote.ar : r.shortQuote.en;
              const longQuote = isArabic ? r.longQuote.ar : r.longQuote.en;
              const dateText = isArabic ? (r.date.ar || r.date.en) : r.date.en;
              const treatment = r.treatment
                ? (isArabic ? r.treatment.ar : r.treatment.en)
                : null;

              return (
                <figure
                  key={i}
                  dir={isArabic ? "rtl" : "ltr"}
                  className="card"
                  style={{
                    margin: 0,
                    padding: 28,
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                    textAlign: isArabic ? "right" : "left",
                  }}
                >
                  <div
                    style={{
                      color: "#b29362",
                      letterSpacing: 2,
                      fontSize: 14,
                      textAlign: isArabic ? "right" : "left",
                    }}
                  >
                    {"★".repeat(r.stars)}
                  </div>
                  <blockquote
                    className="font-prose italic"
                    style={{
                      margin: 0,
                      fontSize: isArabic ? 20 : 22,
                      lineHeight: isArabic ? 1.6 : 1.35,
                      color: "#0a1f2e",
                      fontFamily: isArabic
                        ? "var(--font-amiri), serif"
                        : undefined,
                    }}
                  >
                    {shortQuote}
                  </blockquote>
                  <p
                    style={{
                      fontSize: isArabic ? 15 : 14,
                      color: "#2a3f4f",
                      lineHeight: isArabic ? 1.85 : 1.6,
                      margin: 0,
                      fontFamily: isArabic
                        ? "var(--font-amiri), serif"
                        : undefined,
                    }}
                  >
                    {longQuote}
                  </p>
                  <figcaption
                    style={{
                      marginTop: "auto",
                      paddingTop: 16,
                      borderTop: "1px dotted #8f7548",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: 14,
                          fontWeight: 500,
                          color: "#0a1f2e",
                          fontFamily: isArabic
                            ? "var(--font-amiri), serif"
                            : undefined,
                        }}
                      >
                        {r.name}
                      </div>
                      <div
                        style={{
                          fontSize: 12,
                          color: "#7f8487",
                          marginTop: 2,
                        }}
                      >
                        {dateText}
                        {treatment && (
                          <>
                            <span style={{ padding: "0 6px", color: "#b29362" }}>·</span>
                            <span>{treatment}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </figcaption>
                </figure>
              );
            })}
          </div>

          {/* Disclaimer — bilingual */}
          {rp.disclaimer && (
            <div
              className="container-page"
              style={{
                marginTop: 56,
                paddingTop: 32,
                borderTop: "1px dotted rgba(178, 147, 98, 0.45)",
              }}
            >
              <p
                dir="rtl"
                className="font-prose italic"
                style={{
                  fontFamily: "var(--font-amiri), serif",
                  fontSize: 15,
                  color: "#2a3f4f",
                  lineHeight: 1.85,
                  textAlign: "center",
                  maxWidth: 680,
                  margin: "0 auto 12px",
                }}
              >
                {rp.disclaimer.ar}
              </p>
              <p
                className="font-prose italic"
                style={{
                  fontSize: 13,
                  color: "#7f8487",
                  lineHeight: 1.6,
                  textAlign: "center",
                  maxWidth: 680,
                  margin: "0 auto",
                }}
              >
                {rp.disclaimer.en}
              </p>
            </div>
          )}
        </section>

        <BookCtaDark />
      </main>
      <Footer />
    </>
  );
}
