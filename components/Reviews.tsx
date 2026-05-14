import { clinicConfig } from "@/lib/clinic-config";

export default function Reviews() {
  const r = clinicConfig.reviews;
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
          className="grid gap-8 mobile-stack"
          style={{ gridTemplateColumns: "1fr 1fr", alignItems: "stretch" }}
        >
          {r.items.map((item, i) => (
            <figure
              key={i}
              className="m-0"
              style={{
                padding: 32,
                background: "#ffffff",
                borderRadius: 16,
                boxShadow:
                  "0 0 0 1px rgba(178,147,98,0.3), 0 12px 32px rgba(10,31,46,0.06)",
                display: "flex",
                flexDirection: "column",
                gap: 20,
                minHeight: 280,
              }}
            >
              {/* Decorative quote mark + 5 stars top */}
              <header
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <span
                  aria-hidden
                  className="font-prose"
                  style={{
                    fontSize: 64,
                    lineHeight: 0.6,
                    color: "rgba(178,147,98,0.55)",
                  }}
                >
                  &ldquo;
                </span>
                <span
                  style={{
                    color: "#b29362",
                    letterSpacing: "2px",
                    fontSize: 13,
                    marginTop: 8,
                  }}
                  aria-label="5 stars"
                >
                  ★★★★★
                </span>
              </header>

              {/* The quote — flex:1 keeps cards equal height */}
              <blockquote
                className="font-prose italic m-0"
                style={{
                  fontSize: 20,
                  lineHeight: 1.5,
                  color: "#0a1f2e",
                  flex: 1,
                }}
              >
                {item.quote.en}
              </blockquote>

              {/* Attribution row */}
              <figcaption
                style={{
                  paddingTop: 18,
                  borderTop: "1px dotted rgba(178,147,98,0.4)",
                }}
              >
                <div style={{ minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: "#0a1f2e",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {item.name.en}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: "#7f8487",
                      marginTop: 3,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {item.role.en}
                  </div>
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
