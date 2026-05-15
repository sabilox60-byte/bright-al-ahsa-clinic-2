"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Portrait from "@/components/Portrait";
import { clinicConfig } from "@/lib/clinic-config";

export default function JournalPage() {
  const { journalPage: jp } = clinicConfig;
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <>
      <Nav />
      <main className="page-in">
        <PageHero
          roman={jp.hero.roman}
          eyebrow={jp.hero.eyebrow.en}
          title={jp.hero.title.en}
          titleEm={jp.hero.titleEm.en}
          sub={jp.hero.sub.en}
          variant="terracotta"
          image="/media/heros/contact-hero.webp"
        />

        <section className="section" style={{ position: "relative", zIndex: 2 }}>
          <div className="container-page">
            {/* Featured essay */}
            <a
              href="#"
              className="card card-interactive"
              style={{
                display: "block",
                padding: 0,
                overflow: "hidden",
                textDecoration: "none",
                marginBottom: 60,
              }}
            >
              <div className="mobile-stack" style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr" }}>
                <div
                  style={{
                    padding: 48,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div className="overline" style={{ color: "#b29362" }}>
                    {jp.featured.tag.en}
                  </div>
                  <h2
                    className="h-xl"
                    style={{ marginTop: 16, fontSize: "clamp(28px, 3vw, 40px)" }}
                  >
                    {jp.featured.title.en}
                  </h2>
                  <p
                    className="font-prose"
                    style={{ fontSize: 17, color: "#7f8487", marginTop: 16, lineHeight: 1.6 }}
                  >
                    {jp.featured.excerpt.en}
                  </p>
                  <div
                    className="font-mono"
                    style={{ fontSize: 13, color: "#7f8487", marginTop: 20 }}
                  >
                    {jp.featured.author} · {jp.featured.date.en}
                  </div>
                  <div
                    style={{
                      marginTop: 24,
                      color: "#b29362",
                      fontWeight: 500,
                      fontSize: 14,
                    }}
                  >
                    Read the essay →
                  </div>
                </div>
                <Portrait
                  variant={jp.featured.variant}
                  style={{ width: "100%", height: "100%", minHeight: 360, borderRadius: 0 }}
                  rounded={0}
                />
              </div>
            </a>

            {/* Posts grid */}
            <div
              className="grid gap-6 mobile-stack"
              style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
            >
              {jp.posts.map((post, i) => (
                <a
                  key={i}
                  href="#"
                  className="card card-interactive"
                  style={{ padding: 0, overflow: "hidden", textDecoration: "none" }}
                >
                  <Portrait
                    variant={post.variant}
                    style={{ width: "100%", height: 180, borderRadius: 0 }}
                    rounded={0}
                  />
                  <div style={{ padding: 22 }}>
                    <div className="overline" style={{ color: "#7f8487" }}>
                      {post.tag.en} · {post.date.en}
                    </div>
                    <h3 className="h-md" style={{ fontSize: 20, marginTop: 10, lineHeight: 1.3 }}>
                      {post.title.en}
                    </h3>
                    <div
                      className="font-mono"
                      style={{ fontSize: 12, color: "#7f8487", marginTop: 14 }}
                    >
                      {post.author}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section
          className="section-sand"
          style={{ padding: "64px 0", position: "relative", zIndex: 2 }}
        >
          <div
            className="container-page grid gap-10 items-center mobile-stack"
            style={{ gridTemplateColumns: "1fr 1fr" }}
          >
            <div>
              <h3 className="h-lg">{jp.newsletter.headline.en}</h3>
              <p
                className="font-prose"
                style={{
                  fontSize: 17,
                  color: "#7f8487",
                  marginTop: 12,
                  maxWidth: 460,
                }}
              >
                {jp.newsletter.description.en}
              </p>
            </div>
            <form
              style={{ display: "flex", gap: 8 }}
              onSubmit={(e) => {
                e.preventDefault();
                if (email) setSubscribed(true);
              }}
            >
              {subscribed ? (
                <p className="font-prose italic" style={{ color: "#b29362", fontSize: 16 }}>
                  Thank you — we'll be in touch.
                </p>
              ) : (
                <>
                  <input
                    className="input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={jp.newsletter.placeholder.en}
                    style={{ flex: 1 }}
                  />
                  <button type="submit" className="btn-primary">
                    {jp.newsletter.cta.en}
                  </button>
                </>
              )}
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
