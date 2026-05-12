import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Portrait from "@/components/Portrait";
import ChapterMark from "@/components/ChapterMark";
import { clinicConfig } from "@/lib/clinic-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `About — ${clinicConfig.brand.name.en}`,
  description: clinicConfig.aboutPage.hero.sub.en,
};

export default function AboutPage() {
  const { aboutPage: ap, contact } = clinicConfig;

  return (
    <>
      <Nav />
      <main className="page-in">
        <PageHero
          roman={ap.hero.roman}
          eyebrow={ap.hero.eyebrow.en}
          title={ap.hero.title.en}
          titleEm={ap.hero.titleEm.en}
          sub={ap.hero.sub.en}
          variant="terracotta"
        />

        {/* Chapter cards — alternating layout */}
        {ap.chapters.map((chapter, idx) => (
          <section
            key={chapter.n}
            className="section"
            style={{
              background: idx % 2 === 0 ? "#f6f5f4" : "#ffffff",
              borderTop: "1px dotted #8f7548",
              position: "relative",
              zIndex: 2,
            }}
          >
            <div
              className="container-page grid gap-10 items-center mobile-stack"
              style={{ gridTemplateColumns: "1fr 1fr" }}
            >
              {idx % 2 === 0 ? (
                <>
                  <div>
                    <ChapterMark roman={chapter.n} title={chapter.title.en} />
                    <h2 className="h-xl" style={{ marginTop: 20 }}>
                      {chapter.title.en}
                    </h2>
                    <p
                      className="font-prose"
                      style={{ marginTop: 22, fontSize: 19, lineHeight: 1.6, color: "#2a3f4f" }}
                    >
                      {chapter.body.en}
                    </p>
                  </div>
                  <Portrait
                    variant={chapter.variant}
                    style={{ width: "100%", aspectRatio: "4/5", borderRadius: 24 }}
                  />
                </>
              ) : (
                <>
                  <Portrait
                    variant={chapter.variant}
                    style={{ width: "100%", aspectRatio: "4/5", borderRadius: 24 }}
                  />
                  <div>
                    <ChapterMark roman={chapter.n} title={chapter.title.en} />
                    <h2 className="h-xl" style={{ marginTop: 20 }}>
                      {chapter.title.en}
                    </h2>
                    <p
                      className="font-prose"
                      style={{ marginTop: 22, fontSize: 19, lineHeight: 1.6, color: "#2a3f4f" }}
                    >
                      {chapter.body.en}
                    </p>
                  </div>
                </>
              )}
            </div>
          </section>
        ))}

        {/* Commitments — dark */}
        <section className="section section-dark" style={{ position: "relative", zIndex: 2 }}>
          <div className="container-page">
            <div className="text-center" style={{ marginBottom: 56 }}>
              <ChapterMark roman="V" title="Commitments" dark />
              <h2 className="h-xl" style={{ color: "#ffffff", marginTop: 20 }}>
                Four commitments,
                <br />
                <em style={{ fontStyle: "italic", color: "#b29362" }}>we stand by.</em>
              </h2>
            </div>
            <div
              className="grid gap-6 mobile-2col"
              style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
            >
              {ap.commitments.map((v) => (
                <div
                  key={v.n}
                  style={{ borderTop: "1px solid #2a3f4f", paddingTop: 22 }}
                >
                  <span
                    className="font-prose italic"
                    style={{ color: "#b29362", fontSize: 14 }}
                  >
                    {v.n}.
                  </span>
                  <h3 className="h-md" style={{ color: "#ffffff", marginTop: 10, fontSize: 22 }}>
                    {v.title.en}
                  </h3>
                  <p
                    className="font-prose"
                    style={{ color: "#ece5d4", fontSize: 15, marginTop: 10, lineHeight: 1.65 }}
                  >
                    {v.description.en}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location callout */}
        <section
          className="section section-sand"
          style={{ position: "relative", zIndex: 2 }}
        >
          <div className="container-page text-center">
            <div className="overline" style={{ color: "#b29362" }}>
              {ap.location.eyebrow.en}
            </div>
            <h2 className="h-xl" style={{ marginTop: 16 }}>
              {ap.location.headlinePartA.en}
              <br />
              <em style={{ fontStyle: "italic" }}>{ap.location.headlineEm.en}</em>
            </h2>
            <p
              className="font-prose italic"
              style={{
                fontSize: 19,
                color: "#2a3f4f",
                marginTop: 18,
                maxWidth: 540,
                marginInline: "auto",
                lineHeight: 1.55,
              }}
            >
              {ap.location.description.en}
            </p>
            <div
              className="flex gap-3 justify-center flex-wrap"
              style={{ marginTop: 28 }}
            >
              <a
                href={contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book on WhatsApp
              </a>
              <a href={`tel:${contact.phone}`} className="btn-ghost">
                Call reception
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
