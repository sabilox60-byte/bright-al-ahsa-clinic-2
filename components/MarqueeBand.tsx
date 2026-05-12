import { clinicConfig } from "@/lib/clinic-config";

export default function MarqueeBand({ dark = true }: { dark?: boolean }) {
  const items = [clinicConfig.marqueeStrip.line1.en, clinicConfig.marqueeStrip.line2.en];
  return (
    <div
      className="overflow-hidden"
      style={{
        background: dark ? "#0a1f2e" : "#b29362",
        color: "#ffffff",
        padding: "20px 0",
        borderTop: dark ? "1px solid #14283a" : "none",
        borderBottom: dark ? "1px solid #14283a" : "none",
      }}
    >
      <div
        className="flex gap-12 whitespace-nowrap font-prose italic animate-marquee"
        style={{ fontSize: 22 }}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i} className="inline-flex items-center gap-12">
            {items.map((item, j) => (
              <span key={j} className="inline-flex items-center gap-12">
                <span style={{ padding: "0 24px" }}>{item}</span>
                <span style={{ color: "#b29362" }}>❊</span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
