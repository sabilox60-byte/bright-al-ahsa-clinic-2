import { clinicConfig } from "@/lib/clinic-config";

export default function MarqueeBand() {
  const items = [clinicConfig.marqueeStrip.line1.en, clinicConfig.marqueeStrip.line2.en];
  return (
    <div
      className="overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #f5efe1 0%, #ece5d4 100%)",
        color: "#0a1f2e",
        padding: "20px 0",
        borderTop: "1px solid rgba(143, 117, 72, 0.18)",
        borderBottom: "1px solid rgba(143, 117, 72, 0.18)",
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
