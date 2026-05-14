import Portrait from "./Portrait";
import Image from "next/image";
import { clinicConfig } from "@/lib/clinic-config";

export default function Services() {
  const s = clinicConfig.services;
  return (
    <section className="section" id="services" style={{ paddingTop: 48 }}>
      <div className="container-page">
        <div className="text-center" style={{ marginBottom: 56 }}>
          <div className="overline" style={{ color: "#b29362" }}>
            {s.eyebrow.en}
          </div>
          <h2 className="h-xl" style={{ marginTop: 16 }}>
            {s.headlinePartA.en}
            <br />
            <em style={{ fontStyle: "italic" }}>{s.headlineEm.en}</em>
          </h2>
          <p
            className="font-prose"
            style={{
              fontSize: 18,
              color: "#7f8487",
              marginTop: 16,
              maxWidth: 580,
              marginInline: "auto",
            }}
          >
            {s.description.en}
          </p>
        </div>
        <div className="grid gap-5 services-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
          {s.items.map((item) => (
            <div
              key={item.num}
              className="card card-interactive"
              style={{ padding: 0, overflow: "hidden" }}
            >
              {item.image ? (
                <div style={{ position: "relative", width: "100%", height: 260, overflow: "hidden" }}>
                  <Image
                    src={item.image}
                    alt={item.name.en}
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
                        "linear-gradient(180deg, rgba(10,31,46,0.16) 0%, rgba(10,31,46,0) 35%, rgba(10,31,46,0) 65%, rgba(10,31,46,0.14) 100%)",
                      pointerEvents: "none",
                    }}
                  />
                </div>
              ) : (
                <Portrait
                  variant={item.variant}
                  style={{ width: "100%", height: 260 }}
                  rounded={0}
                />
              )}
              <div
                className="flex flex-col gap-3"
                style={{ padding: 28 }}
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="h-md">{item.name.en}</h3>
                  <span
                    className="font-mono"
                    style={{ fontSize: 12, color: "#7f8487" }}
                  >
                    № {item.num}
                  </span>
                </div>
                <p
                  className="font-prose"
                  style={{
                    fontSize: 16,
                    color: "#2a3f4f",
                    margin: 0,
                    lineHeight: 1.55,
                  }}
                >
                  {item.description.en}
                </p>
                <a
                  href="/services"
                  className="tlink"
                  style={{
                    fontSize: 13,
                    color: "#b29362",
                    marginTop: 10,
                    fontWeight: 600,
                    letterSpacing: "0.6px",
                    textTransform: "uppercase",
                  }}
                >
                  Learn more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
