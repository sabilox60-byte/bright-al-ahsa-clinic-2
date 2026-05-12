import { getActiveOccasion, formatCountdown } from "@/lib/saudi-calendar";
import type { Locale } from "@/lib/i18n";
import Link from "next/link";

/**
 * Saudi Calendar Engine banner. Server component.
 * Auto-detects most-relevant active occasion and renders a discreet banner above Nav.
 * If no occasion is in its window, returns null (no DOM at all).
 *
 * Designed to look like a typeset masthead announcement — never a screaming sale banner.
 */
export default function EidBanner({ locale = "en" }: { locale?: Locale }) {
  const occ = getActiveOccasion();
  if (!occ) return null;

  const countdown = formatCountdown(occ);
  const palette = occ.palette ?? { accent: "#b29362", surface: "#0a1f2e" };

  return (
    <div
      role="status"
      aria-live="polite"
      className="eid-banner"
      style={{
        background: palette.surface,
        color: "#ffffff",
        padding: "10px 0",
        borderBottom: `1px solid ${palette.accent}33`,
        position: "relative",
        zIndex: 51,
      }}
    >
      <div
        className="container-page eid-banner-row"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        <span
          className="eid-banner-text"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            fontSize: 12,
            letterSpacing: "0.04em",
            minWidth: 0,
            flex: "1 1 auto",
          }}
        >
          <span
            className="eid-banner-eyebrow"
            style={{
              fontFamily: "var(--font-italiana), serif",
              fontSize: 11,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: palette.accent,
              whiteSpace: "nowrap",
            }}
          >
            {occ.banner.eyebrow[locale]}
          </span>
          <span className="eid-banner-dash" style={{ opacity: 0.5 }}>—</span>
          <span
            className="eid-banner-line"
            style={{
              color: "rgba(253,251,246,0.92)",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {occ.banner.line[locale]}
          </span>
        </span>
        <span
          className="eid-banner-actions"
          style={{ display: "inline-flex", alignItems: "center", gap: 14, flex: "0 0 auto" }}
        >
          <span
            className="eid-banner-countdown"
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: 11,
              color: palette.accent,
              letterSpacing: "0.06em",
              whiteSpace: "nowrap",
            }}
          >
            {countdown[locale]}
          </span>
          <Link
            href={locale === "ar" ? "/ar/booking" : "/booking"}
            className="eid-banner-cta"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "6px 14px",
              background: palette.accent,
              color: palette.surface,
              borderRadius: 3,
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            {occ.banner.cta[locale]} →
          </Link>
        </span>
      </div>
    </div>
  );
}
