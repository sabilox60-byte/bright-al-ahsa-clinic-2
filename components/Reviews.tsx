import { clinicConfig } from "@/lib/clinic-config";

export default function Reviews() {
  const r = clinicConfig.reviews;
  // Pull 4 Khaleeji Arabic reviews from this site's own reviews page data
  type RP = {
    stars: number;
    name: string;
    lang?: string;
    date: { en: string; ar: string };
    treatment?: { en: string; ar: string };
    shortQuote: { ar: string };
    longQuote: { ar: string };
  };
  const allItems = (clinicConfig.reviewsPage?.items || []) as unknown as RP[];
  const arItems = allItems.filter((i) => i.lang === "ar").slice(0, 4);

  if (arItems.length === 0) return null;

  return (
    <section className="section" id="reviews">
      <div className="container-page">
        <div className="text-center" style={{ marginBottom: 48 }}>
          <div className="overline" style={{ color: "#b29362" }}>
            {r.eyebrow.en}
          </div>
          <p
            className="font-prose italic"
            style={{
              fontSize: 22,
              lineHeight: 1.4,
              color: "#2a3f4f",
              marginTop: 16,
              maxWidth: 580,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {r.pullQuote.en}
          </p>
        </div>

        <div
          className="grid gap-6 mobile-stack"
          style={{ gridTemplateColumns: "repeat(2, 1fr)", alignItems: "stretch" }}
        >
          {arItems.map((item, i) => (
            <figure
              key={i}
              dir="rtl"
              className="m-0"
              style={{
                padding: 32,
                background: "#ffffff",
                borderRadius: 16,
                boxShadow:
                  "0 0 0 1px rgba(178,147,98,0.3), 0 12px 32px rgba(10,31,46,0.06)",
                display: "flex",
                flexDirection: "column",
                gap: 18,
                minHeight: 280,
                textAlign: "right",
                fontFamily: "var(--font-amiri), serif",
              }}
            >
              <header
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <span
                  aria-hidden
                  style={{
                    fontSize: 56,
                    lineHeight: 0.6,
                    color: "rgba(178,147,98,0.55)",
                    fontFamily: "var(--font-source-serif), serif",
                  }}
                >
                  &rdquo;
                </span>
                <span
                  style={{
                    color: "#b29362",
                    letterSpacing: "2px",
                    fontSize: 13,
                    marginTop: 8,
                  }}
                  aria-label={`${item.stars} stars`}
                >
                  {"★".repeat(item.stars)}
                </span>
              </header>

              <blockquote
                className="m-0"
                style={{
                  fontSize: 18,
                  lineHeight: 1.7,
                  color: "#0a1f2e",
                  fontWeight: 500,
                  margin: 0,
                }}
              >
                {item.shortQuote.ar}
              </blockquote>

              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.85,
                  color: "#2a3f4f",
                  margin: 0,
                  flex: 1,
                }}
              >
                {item.longQuote.ar}
              </p>

              <figcaption
                style={{
                  paddingTop: 16,
                  borderTop: "1px dotted rgba(178,147,98,0.4)",
                }}
              >
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: "#0a1f2e",
                  }}
                >
                  {item.name}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "#7f8487",
                    marginTop: 4,
                    fontFamily: "var(--font-inter-tight), system-ui, sans-serif",
                  }}
                >
                  {item.date.ar || item.date.en}
                  {item.treatment && (
                    <>
                      <span style={{ padding: "0 6px", color: "#b29362" }}>·</span>
                      <span>{item.treatment.ar}</span>
                    </>
                  )}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="text-center" style={{ marginTop: 40 }}>
          <a
            href="/reviews"
            className="tlink"
            style={{
              fontSize: 13,
              color: "#2a3f4f",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            {r.cta.en} →
          </a>
        </div>
      </div>
    </section>
  );
}
