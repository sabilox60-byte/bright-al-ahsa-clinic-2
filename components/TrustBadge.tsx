import type { TrustVault } from "@/lib/clinic-extras";
import type { Locale } from "@/lib/i18n";

type Badge = TrustVault["badges"][number];

/**
 * TrustBadge — single credential card used inside Trust Vault page.
 *
 * Uses Unicode symbols for each iconKind, never emoji. Premium look via
 * letterpress border + dotted divider + verifiable URL.
 */
export default function TrustBadge({ badge, locale = "en" }: { badge: Badge; locale?: Locale }) {
  const symbol = symbolFor(badge.iconKind);

  return (
    <article
      className="card"
      style={{
        padding: 28,
        display: "flex",
        flexDirection: "column",
        gap: 14,
        height: "100%",
      }}
    >
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
        <span
          aria-hidden
          style={{
            fontFamily: "var(--font-italiana), serif",
            fontSize: 32,
            lineHeight: 1,
            color: "#8f7548",
          }}
        >
          {symbol}
        </span>
        {badge.credentialNumber && (
          <code
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: 11,
              color: "#7f8487",
              letterSpacing: "0.05em",
            }}
          >
            № {badge.credentialNumber}
          </code>
        )}
      </header>

      <h3 className="font-serif" style={{ fontSize: 20, lineHeight: 1.2, color: "#0a1f2e" }}>
        {badge.name[locale]}
      </h3>
      <hr className="rule-dotted" />
      <p
        className="font-prose"
        style={{
          fontSize: 15,
          lineHeight: 1.55,
          color: "#2a3f4f",
          flex: 1,
        }}
      >
        {badge.description[locale]}
      </p>

      <footer style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 8 }}>
        <span style={{ fontSize: 11, color: "#7f8487", letterSpacing: "0.04em" }}>
          {locale === "ar" ? "الجهة المُصدِرة" : "Issued by"}
          <br />
          <span style={{ color: "#0a1f2e", fontWeight: 500, fontSize: 12 }}>{badge.issuer[locale]}</span>
        </span>
        {badge.verifyUrl && (
          <a
            href={badge.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="tlink"
            style={{
              fontSize: 11,
              color: "#8f7548",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            {locale === "ar" ? "تحقّقي" : "Verify"} ↗
          </a>
        )}
      </footer>
    </article>
  );
}

function symbolFor(kind: string): string {
  // Unicode-only badges. No emoji per design constraint.
  const map: Record<string, string> = {
    moh: "✚",
    maaroof: "❖",
    sfda: "✦",
    pdpl: "❋",
    sama: "✱",
    scfhs: "✜",
    iso: "✪",
    vision2030: "✧",
    custom: "❉",
  };
  return map[kind] || "✦";
}
