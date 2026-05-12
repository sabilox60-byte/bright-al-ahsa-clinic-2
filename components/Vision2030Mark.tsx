import type { Locale } from "@/lib/i18n";

/**
 * Vision 2030 wordmark — Saudi national alignment signal.
 * Place in Footer next to colophon. Subtle, never loud.
 */
export default function Vision2030Mark({ locale = "en" }: { locale?: Locale }) {
  return (
    <a
      href="https://www.vision2030.gov.sa"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Vision 2030"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "6px 12px",
        border: "1px solid rgba(0, 110, 70, 0.25)",
        borderRadius: 4,
        fontSize: 11,
        color: "#006e46",
        letterSpacing: "0.05em",
        textDecoration: "none",
        background: "rgba(0, 110, 70, 0.04)",
        fontFamily: "var(--font-italiana), serif",
      }}
    >
      <span aria-hidden style={{ fontSize: 12 }}>
        ✦
      </span>
      <span style={{ textTransform: "uppercase" }}>
        {locale === "ar" ? "رؤية ٢٠٣٠" : "Vision 2030"}
      </span>
      <span style={{ opacity: 0.6 }}>
        {locale === "ar" ? "متوافق" : "aligned"}
      </span>
    </a>
  );
}
