import Portrait from "./Portrait";
import Image from "next/image";
import { clinicConfig } from "@/lib/clinic-config";

export default function Journal() {
  const j = clinicConfig.journal;
  return (
    <section className="section" id="journal">
      <div className="container-page">
        <div
          className="flex items-baseline justify-between flex-wrap gap-3"
          style={{ marginBottom: 40 }}
        >
          <div>
            <div className="overline" style={{ color: "#b29362" }}>
              {j.eyebrow.en}
            </div>
            <h2 className="h-xl" style={{ marginTop: 14 }}>
              {j.headline.en}
            </h2>
          </div>
          <p
            className="font-prose italic"
            style={{
              maxWidth: 440,
              color: "#7f8487",
              fontSize: 17,
            }}
          >
            {j.description.en}
          </p>
        </div>
        <div className="grid gap-5 journal-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
          {j.items.map((post, i) => (
            <a
              key={i}
              href="/journal"
              className="card card-interactive"
              style={{ padding: 0, overflow: "hidden", textDecoration: "none" }}
            >
              {post.image ? (
                <div style={{ position: "relative", width: "100%", height: 200, overflow: "hidden" }}>
                  <Image
                    src={post.image}
                    alt={post.title.en}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                  <div
                    aria-hidden
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(10,31,46,0.16) 0%, rgba(10,31,46,0) 40%, rgba(10,31,46,0) 60%, rgba(10,31,46,0.14) 100%)",
                      pointerEvents: "none",
                    }}
                  />
                </div>
              ) : (
                <Portrait
                  variant={post.variant}
                  style={{ width: "100%", height: 200 }}
                  rounded={0}
                />
              )}
              <div style={{ padding: 24 }}>
                <div className="overline" style={{ color: "#7f8487" }}>
                  {post.tag.en} · {post.date.en}
                </div>
                <h3
                  className="h-md"
                  style={{ fontSize: 22, marginTop: 12, lineHeight: 1.3 }}
                >
                  {post.title.en}
                </h3>
                <div
                  style={{
                    marginTop: 14,
                    fontSize: 12,
                    color: "#b29362",
                    fontWeight: 600,
                    letterSpacing: "0.6px",
                    textTransform: "uppercase",
                  }}
                >
                  Read more →
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
