import Image from "next/image";
import ChapterMark from "./ChapterMark";
import { clinicConfig } from "@/lib/clinic-config";

export default function TailoredCare() {
  const c = clinicConfig.tailoredCare;
  return (
    <section className="section section-dark">
      <div
        className="container-page grid gap-10 items-center mobile-stack"
        style={{ gridTemplateColumns: "1fr 1fr" }}
      >
        <div className="relative" style={{ width: "100%", height: 420, borderRadius: 14, overflow: "hidden" }}>
          <Image
            src="/media/care/standard.webp"
            alt={c.headlinePartA.en + " " + c.headlineEm.en}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div
            style={{
              position: "absolute",
              top: 20,
              left: 20,
              background: "#b29362",
              color: "#ffffff",
              borderRadius: 20,
              padding: "6px 14px",
              fontSize: 11,
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              fontWeight: 600,
              boxShadow: "0 4px 12px rgba(10,31,46,0.25)",
            }}
          >
            {c.badge.en}
          </div>
        </div>
        <div>
          <ChapterMark roman={c.chapterRoman} title={c.chapterTitle.en} />
          <h2 className="h-xl" style={{ marginTop: 24, color: "#0a1f2e" }}>
            {c.headlinePartA.en}
            <br />
            <em style={{ fontStyle: "italic", color: "#8f7548" }}>{c.headlineEm.en}</em>
          </h2>
          <p
            className="font-prose"
            style={{
              color: "#2a3f4f",
              fontSize: 18,
              lineHeight: 1.65,
              marginTop: 20,
              maxWidth: 520,
            }}
          >
            {c.description.en}
          </p>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "32px 0",
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            {c.points.map((p) => (
              <li
                key={p.num}
                className="flex items-baseline"
                style={{
                  gap: 18,
                  paddingBottom: 14,
                  borderBottom: "1px dotted rgba(143, 117, 72, 0.35)",
                }}
              >
                <span
                  className="font-prose italic"
                  style={{ color: "#b29362", fontSize: 15, width: 28 }}
                >
                  {p.num}.
                </span>
                <span style={{ color: "#0a1f2e", fontSize: 16 }}>{p.label.en}</span>
              </li>
            ))}
          </ul>
          <a href="/about" className="btn-primary">
            {c.cta.en}
          </a>
        </div>
      </div>
    </section>
  );
}
