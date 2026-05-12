import { clinicExtras } from "@/lib/clinic-extras";
import type { Locale } from "@/lib/i18n";

/**
 * Above-fold trust ribbon — Maaroof rating + review count + clickable verify.
 *
 * Saudi female buyer's #1 trust filter = verifiable, government-aligned reviews.
 * Maaroof is a Saudi MoC trustmark — most clinics hide it in footer fine print.
 * We place it RIGHT under hero (or top of nav), tiny but always visible.
 *
 * Auto-hides if no Maaroof badge configured.
 */
export default function MaaroofRibbon({ locale = "en" }: { locale?: Locale }) {
  const maaroof = clinicExtras.trustVault.badges.find((b) => b.iconKind === "maaroof");
  const rating = clinicExtras.structuredData.aggregateRating;
  if (!maaroof || !rating) return null;

  return (
    <a
      href={maaroof.verifyUrl || "/trust"}
      target={maaroof.verifyUrl ? "_blank" : undefined}
      rel={maaroof.verifyUrl ? "noopener noreferrer" : undefined}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 12,
        padding: "8px 14px",
        background: "rgba(253, 251, 246, 0.92)",
        border: "1px solid rgba(178, 147, 98, 0.3)",
        borderRadius: 999,
        fontSize: 12,
        color: "#0a1f2e",
        textDecoration: "none",
        transition: "all 200ms cubic-bezier(0.4,0,0.2,1)",
      }}
    >
      <span style={{ color: "#8f7548", fontSize: 14 }} aria-hidden>
        ❖
      </span>
      <span
        style={{
          fontFamily: "var(--font-italiana), serif",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          fontSize: 10,
          color: "#8f7548",
        }}
      >
        {locale === "ar" ? "معروف الذهبية" : "Maaroof Golden"}
      </span>
      <span style={{ color: "rgba(178,147,98,0.5)" }}>·</span>
      <span style={{ fontWeight: 500, color: "#0a1f2e" }}>
        {rating.ratingValue.toFixed(1)}
      </span>
      <span style={{ color: "#7f8487", fontSize: 11 }}>
        {locale === "ar"
          ? `من ${rating.reviewCount} تقييم موثَّق`
          : `${rating.reviewCount} verified reviews`}
      </span>
      <span style={{ color: "#8f7548", fontSize: 10, marginLeft: 4 }} aria-hidden>
        ↗
      </span>
    </a>
  );
}
