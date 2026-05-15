"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Portrait from "@/components/Portrait";
import BookCtaDark from "@/components/BookCtaDark";
import { clinicConfig } from "@/lib/clinic-config";

export default function GalleryPage() {
  const { galleryPage: gp } = clinicConfig;
  const [filter, setFilter] = useState("all");

  const visible =
    filter === "all" ? gp.cases : gp.cases.filter((c) => c.cat === filter);

  return (
    <>
      <Nav />
      <main className="page-in">
        <PageHero
          roman={gp.hero.roman}
          eyebrow={gp.hero.eyebrow.en}
          title={gp.hero.title.en}
          titleEm={gp.hero.titleEm.en}
          sub={gp.hero.sub.en}
          variant="sand"
          image="/media/heros/contact-hero.webp"
        />

        {/* Filter tabs */}
        <section
          style={{
            padding: "32px 0",
            background: "#f6f5f4",
            borderBottom: "1px dotted #8f7548",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div className="container-page flex gap-2.5 flex-wrap">
            {gp.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                style={{
                  padding: "10px 18px",
                  borderRadius: 24,
                  fontSize: 13,
                  fontWeight: 500,
                  background: filter === cat.id ? "#0a1f2e" : "transparent",
                  color: filter === cat.id ? "#ffffff" : "#2a3f4f",
                  border: "none",
                  boxShadow: filter === cat.id ? "none" : "0 0 0 1px #f0ece1",
                  cursor: "pointer",
                  fontFamily: "var(--font-inter-tight), 'Inter Tight', system-ui, sans-serif",
                  transition: "all 150ms cubic-bezier(0.4,0,0.2,1)",
                }}
              >
                {cat.label.en}
              </button>
            ))}
          </div>
        </section>

        {/* Cases grid — 1-per-row on mobile, 2-per-row on desktop */}
        <section className="section" style={{ position: "relative", zIndex: 2 }}>
          <div
            className="container-page grid gap-8 mobile-stack"
            style={{ gridTemplateColumns: "repeat(2, 1fr)" }}
          >
            {visible.map((c) => (
              <figure
                key={c.id}
                className="card"
                style={{ margin: 0, padding: 20 }}
              >
                <div
                  className="gallery-grid"
                  style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}
                >
                  <div style={{ position: "relative" }}>
                    <Portrait
                      variant={c.before}
                      style={{ width: "100%", height: 260, borderRadius: 10 }}
                      rounded={10}
                    />
                    <span
                      className="chip"
                      style={{ position: "absolute", top: 10, left: 10 }}
                    >
                      Before
                    </span>
                  </div>
                  <div style={{ position: "relative" }}>
                    <Portrait
                      variant={c.after}
                      style={{ width: "100%", height: 260, borderRadius: 10 }}
                      rounded={10}
                    />
                    <span
                      className="chip"
                      style={{
                        position: "absolute",
                        top: 10,
                        left: 10,
                        background: "#0a1f2e",
                        color: "#ffffff",
                      }}
                    >
                      After · {c.weeks} wks
                    </span>
                  </div>
                </div>
                <figcaption
                  style={{
                    marginTop: 16,
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div className="overline">{c.name}</div>
                    <div className="h-md" style={{ fontSize: 20, marginTop: 4 }}>
                      {c.treatment.en}
                    </div>
                  </div>
                  <span
                    className="font-prose italic"
                    style={{ color: "#b29362" }}
                  >
                    {c.weeks} weeks
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>

          <p
            className="font-prose italic"
            style={{
              marginTop: 40,
              textAlign: "center",
              color: "#7f8487",
              fontSize: 13,
            }}
          >
            {gp.disclaimer.en}
          </p>
        </section>

        <BookCtaDark />
      </main>
      <Footer />
    </>
  );
}
