import { clinicExtras } from "@/lib/clinic-extras";
import type { Locale } from "@/lib/i18n";

/**
 * Living Pulse — top-of-homepage band showing real-time clinic signals.
 * Server component. Fetches from `livingPulse.endpoint` if set, else uses fallback.
 *
 * Renders as a slim, restrained ribbon. No emoji. No animation noise.
 * Designed to read like newspaper masthead — not promotional.
 */

interface PulseData {
  consultationsToday?: string;
  nextAvailable?: { en: string; ar: string };
  mostBooked?: { en: string; ar: string };
}

async function fetchPulse(): Promise<PulseData> {
  const cfg = clinicExtras.livingPulse;
  if (!cfg.enabled || !cfg.endpoint) return {};
  try {
    const res = await fetch(cfg.endpoint, { next: { revalidate: cfg.refreshSeconds ?? 300 } });
    if (!res.ok) return {};
    return (await res.json()) as PulseData;
  } catch {
    return {};
  }
}

export default async function LivingPulse({ locale = "en" }: { locale?: Locale }) {
  const cfg = clinicExtras.livingPulse;
  if (!cfg.enabled) return null;

  const live = await fetchPulse();
  const f = cfg.fallback;

  const items = [
    {
      label: f.consultationsTodayLabel[locale],
      value: live.consultationsToday ?? f.consultationsTodayValue,
    },
    {
      label: f.nextAvailableLabel[locale],
      value: live.nextAvailable?.[locale] ?? f.nextAvailableValue[locale],
    },
    {
      label: f.mostBookedLabel[locale],
      value: live.mostBooked?.[locale] ?? f.mostBookedValue[locale],
    },
  ];

  return (
    <aside
      aria-label="Today at the clinic"
      className="living-pulse"
      style={{
        position: "relative",
        zIndex: 2,
        background: "rgba(253, 251, 246, 0.88)",
        backdropFilter: "blur(8px)",
        borderTop: "1px solid rgba(178, 147, 98, 0.18)",
        borderBottom: "1px solid rgba(178, 147, 98, 0.18)",
        padding: "10px 0",
        fontSize: 12,
        letterSpacing: "0.04em",
      }}
    >
      <div
        className="container-page living-pulse-row"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
          flexWrap: "nowrap",
          overflowX: "auto",
        }}
      >
        <span
          className="overline living-pulse-badge"
          style={{
            fontSize: 10,
            letterSpacing: "0.32em",
            color: "#8f7548",
            whiteSpace: "nowrap",
            flex: "0 0 auto",
          }}
        >
          ✦ {locale === "ar" ? "الآن" : "Live"}
        </span>
        <div
          className="living-pulse-items"
          style={{
            display: "flex",
            gap: 28,
            flex: 1,
            justifyContent: "center",
            flexWrap: "nowrap",
          }}
        >
          {items.map((item, i) => (
            <span
              key={i}
              className="living-pulse-item"
              style={{ display: "inline-flex", alignItems: "baseline", gap: 8, whiteSpace: "nowrap" }}
            >
              <span
                className="living-pulse-label"
                style={{ color: "#7f8487", textTransform: "uppercase", fontSize: 10, letterSpacing: "0.2em" }}
              >
                {item.label}
              </span>
              <span style={{ color: "#0a1f2e", fontWeight: 500, fontSize: 13 }}>{item.value}</span>
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}
