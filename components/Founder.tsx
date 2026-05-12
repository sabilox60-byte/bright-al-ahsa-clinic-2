import Portrait from "./Portrait";
import ChapterMark from "./ChapterMark";
import { clinicConfig } from "@/lib/clinic-config";

export default function Founder() {
  const f = clinicConfig.founder;
  return (
    <section className="section" id="about">
      <div
        className="container-page grid gap-10 items-center mobile-stack"
        style={{ gridTemplateColumns: "0.9fr 1.1fr" }}
      >
        <div className="relative">
          <Portrait variant="sand" className="w-full" style={{ height: 420 }} />
          <div
            style={{
              position: "absolute",
              bottom: -20,
              right: -20,
              background: "#0a1f2e",
              color: "#ffffff",
              borderRadius: 14,
              padding: "16px 20px",
              boxShadow: "0 0 0 6px #f6f5f4",
            }}
          >
            <div
              style={{
                fontSize: 11,
                color: "#ece5d4",
                letterSpacing: "0.5px",
                textTransform: "uppercase",
              }}
            >
              Leadership
            </div>
            <div
              className="font-serif"
              style={{ fontWeight: 600, fontSize: 20, marginTop: 4 }}
            >
              {f.name}
            </div>
            <div
              className="font-prose italic"
              style={{ fontSize: 12, color: "#d4b899", marginTop: 4 }}
            >
              {f.role.en}
            </div>
          </div>
        </div>
        <div>
          <ChapterMark roman={f.chapterRoman} title={f.chapterTitle.en} />
          <h2 className="h-xl" style={{ marginTop: 24 }}>
            {f.headlinePartA.en}
            <br />
            <em style={{ fontStyle: "italic", color: "#b29362" }}>{f.headlineEm.en}</em>
          </h2>
          <div className="prose mt-6" style={{ maxWidth: 540 }}>
            {f.paragraphs.map((p, i) => (
              <p key={i}>{p.en}</p>
            ))}
          </div>
          <a
            href="/about"
            className="btn-ghost"
            style={{ marginTop: 28, display: "inline-flex" }}
          >
            {f.cta.en} →
          </a>
        </div>
      </div>
    </section>
  );
}
