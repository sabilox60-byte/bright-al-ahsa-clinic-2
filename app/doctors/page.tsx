import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Portrait from "@/components/Portrait";
import BookCtaDark from "@/components/BookCtaDark";
import { clinicConfig } from "@/lib/clinic-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Clinicians — ${clinicConfig.brand.name.en}`,
  description: clinicConfig.doctorsPage.hero.sub.en,
};

export default function DoctorsPage() {
  const { doctorsPage: dp } = clinicConfig;

  return (
    <>
      <Nav />
      <main className="page-in">
        <PageHero
          roman={dp.hero.roman}
          eyebrow={dp.hero.eyebrow.en}
          title={dp.hero.title.en}
          titleEm={dp.hero.titleEm.en}
          sub={dp.hero.sub.en}
          variant="sage"
        />

        <section className="section" style={{ position: "relative", zIndex: 2 }}>
          <div
            className="container-page doctors-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(480px, 1fr))",
              gridAutoRows: "minmax(480px, auto)",
              gap: 40,
              justifyItems: "center",
            }}
          >
            {dp.items.map((member, i) => (
              <article
                key={i}
                className="card doctor-card"
                style={{
                  padding: 0,
                  overflow: "hidden",
                  width: "100%",
                  maxWidth: 560,
                  minHeight: 480,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  className="doctor-card-inner"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "0.8fr 1.2fr",
                    flex: 1,
                  }}
                >
                  <Portrait
                    variant={member.variant}
                    className="doctor-portrait"
                    style={{ width: "100%", height: "100%", minHeight: 280, borderRadius: 0 }}
                    rounded={0}
                  />
                  <div
                    style={{
                      padding: 28,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div className="overline" style={{ color: "#b29362" }}>
                      {member.role.en}
                    </div>
                    <h3 className="h-md" style={{ fontSize: 26, marginTop: 10 }}>
                      {member.name}
                    </h3>
                    <p
                      className="font-prose"
                      style={{
                        fontSize: 15,
                        lineHeight: 1.6,
                        color: "#7f8487",
                        marginTop: 12,
                      }}
                    >
                      {member.bio.en}
                    </p>
                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: "16px 0 0",
                        display: "flex",
                        flexDirection: "column",
                        gap: 6,
                      }}
                    >
                      {member.credentials.map((cred) => (
                        <li
                          key={cred}
                          className="font-mono"
                          style={{
                            fontSize: 13,
                            color: "#7f8487",
                            display: "flex",
                            gap: 10,
                          }}
                        >
                          <span style={{ color: "#b29362" }}>—</span>
                          {cred}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <BookCtaDark />
      </main>
      <Footer />
    </>
  );
}
