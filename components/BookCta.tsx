import Portrait from "./Portrait";
import { clinicConfig } from "@/lib/clinic-config";

export default function BookCta() {
  const b = clinicConfig.bookCta;
  return (
    <section className="section section-terra" id="contact">
      <div
        className="container-page grid gap-8 items-center"
        style={{ gridTemplateColumns: "1fr 2fr 1fr" }}
      >
        <Portrait
          variant="sand"
          style={{ width: 200, height: 240, background: "#f0ece1" }}
          rounded={20}
        />
        <div className="text-center">
          <div
            style={{
              fontSize: 11,
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              color: "rgba(253,251,246,0.8)",
              marginBottom: 14,
              fontWeight: 600,
            }}
          >
            {b.eyebrow.en}
          </div>
          <h2 className="h-xl" style={{ color: "#ffffff" }}>
            {b.headline.en}
          </h2>
          <p
            className="font-prose italic"
            style={{
              color: "rgba(253,251,246,0.9)",
              fontSize: 18,
              marginTop: 12,
              maxWidth: 480,
              marginInline: "auto",
            }}
          >
            {b.description.en}
          </p>
          <div className="flex gap-3 justify-center flex-wrap" style={{ marginTop: 28 }}>
            <a
              href={clinicConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#ffffff",
                color: "#0a1f2e",
                padding: "14px 28px",
                borderRadius: 4,
                fontWeight: 600,
                textDecoration: "none",
                fontSize: 12,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              {b.primary.en}
            </a>
            <a
              href={`tel:${clinicConfig.contact.phone}`}
              style={{
                background: "transparent",
                color: "#ffffff",
                padding: "14px 28px",
                borderRadius: 4,
                fontWeight: 600,
                textDecoration: "none",
                fontSize: 12,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                boxShadow: "0 0 0 1px rgba(253,251,246,0.5)",
              }}
            >
              {b.secondary.en}
            </a>
          </div>
        </div>
        <Portrait
          variant="terracotta"
          style={{ width: 200, height: 240, background: "#d4b899" }}
          rounded={20}
        />
      </div>
    </section>
  );
}
