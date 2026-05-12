import Portrait from "./Portrait";
import { clinicConfig } from "@/lib/clinic-config";

export default function Team() {
  const t = clinicConfig.team;
  return (
    <section className="section" id="doctors">
      <div className="container-page">
        <div className="text-center" style={{ marginBottom: 48 }}>
          <div className="overline" style={{ color: "#b29362" }}>
            {t.eyebrow.en}
          </div>
          <h2 className="h-xl" style={{ marginTop: 16 }}>
            {t.headlinePartA.en}
            <br />
            <em style={{ fontStyle: "italic" }}>{t.headlineEm.en}</em>
          </h2>
        </div>
        <div className="grid gap-5 team-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
          {t.items.map((item, i) => (
            <a
              key={i}
              href="/doctors"
              className="card card-interactive"
              style={{ padding: 0, overflow: "hidden", textDecoration: "none" }}
            >
              <Portrait
                variant={item.variant}
                style={{ width: "100%", height: 260 }}
                rounded={0}
              />
              <div
                className="flex items-center justify-between"
                style={{ padding: 24 }}
              >
                <div>
                  <div className="overline">{item.tag.en}</div>
                  <div className="h-md" style={{ fontSize: 22, marginTop: 6 }}>
                    {item.name}
                  </div>
                </div>
                <span
                  className="flex items-center justify-center"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 999,
                    background: "#b29362",
                    color: "#ffffff",
                    fontSize: 18,
                    flexShrink: 0,
                  }}
                >
                  →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
