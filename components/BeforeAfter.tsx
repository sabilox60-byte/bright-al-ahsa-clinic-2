import Image from "next/image";
import ChapterMark from "./ChapterMark";
import ScrollReveal from "./ScrollReveal";
import { clinicConfig } from "@/lib/clinic-config";

/**
 * Bright Before/After — single real-case storytelling.
 *
 * Pattern: photo + day-label chip + caption card directly below each photo.
 * No duplicated testimonial section. Arabic Khaleeji review on each card.
 * The full gallery (other cases) is one tap away via the CTA button below.
 *
 * Saudi privacy: faces shown only when patient has signed written consent —
 * acknowledged in the footer disclaimer.
 */

const beforeCard = {
  chipLabel: "قبل",
  dayLabel: "اليوم الأول · الاستشارة",
  quote:
    "كنت أشوف بشرتي باهتة ومتعبة، بس ما كنت متوقّعة إنّ الفرق بيكون واضح لهالدرجة لما أشوف الصور.",
};

const afterCard = {
  chipLabel: "بعد · ١٠ أيام",
  dayLabel: "اليوم العاشر · النتيجة",
  quote:
    "بصراحة النتيجة صدمتني بطريقة حلوة. بشرتي صارت أصفى، أنعم، وفيها نضارة طبيعية بدون أي مبالغة. أكثر شي عجبني إنّ شكلي ظلّ أنا، بس بنسخة أرتب وأنضر. شكراً د. Marina Naddaf.",
};

function CaseCard({
  src,
  alt,
  chipLabel,
  chipDark,
  dayLabel,
  quote,
}: {
  src: string;
  alt: string;
  chipLabel: string;
  chipDark?: boolean;
  dayLabel: string;
  quote: string;
}) {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: 16,
        overflow: "hidden",
        boxShadow:
          "0 0 0 1px rgba(178,147,98,0.18), 0 18px 56px rgba(10,31,46,0.06)",
      }}
    >
      <div className="relative">
        <Image
          src={src}
          alt={alt}
          width={1400}
          height={1045}
          priority
          style={{ width: "100%", height: 420, objectFit: "cover", display: "block" }}
        />
        <span
          className={chipDark ? "chip chip-dark" : "chip"}
          style={{ position: "absolute", top: 16, left: 16 }}
        >
          {chipLabel}
        </span>
      </div>
      <div
        dir="rtl"
        style={{
          padding: "22px 26px 26px",
          textAlign: "right",
        }}
      >
        <div
          className="font-mono"
          style={{
            fontSize: 11,
            color: "#8f7548",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          {dayLabel}
        </div>
        <p
          className="font-prose"
          style={{
            fontFamily: "var(--font-amiri), serif",
            fontSize: 17,
            lineHeight: 1.85,
            color: "#0a1f2e",
            margin: 0,
            position: "relative",
            paddingTop: 4,
          }}
        >
          <span
            aria-hidden
            style={{
              position: "absolute",
              top: -22,
              right: -6,
              fontSize: 56,
              color: "rgba(178,147,98,0.3)",
              fontFamily: "var(--font-source-serif), serif",
              lineHeight: 1,
            }}
          >
            &ldquo;
          </span>
          {quote}
        </p>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  const b = clinicConfig.beforeAfter;

  return (
    <section
      className="section"
      id="gallery"
      style={{ background: "#f0ece1", position: "relative", zIndex: 2 }}
    >
      <div className="container-page">
        {/* Header */}
        <ScrollReveal variant="fade-up">
          <div
            className="grid gap-10 items-end mobile-stack"
            style={{ gridTemplateColumns: "1.1fr 1fr" }}
          >
            <div>
              <ChapterMark roman={b.chapterRoman} title={b.chapterTitle.en} />
              <h2 className="h-xl" style={{ marginTop: 24 }}>
                {b.headlinePartA.en}
                <br />
                <em style={{ fontStyle: "italic", color: "#b29362" }}>
                  {b.headlineEm.en}
                </em>
              </h2>
              <p
                className="font-prose"
                style={{
                  fontSize: 18,
                  color: "#2a3f4f",
                  marginTop: 18,
                  maxWidth: 460,
                }}
              >
                {b.description.en}
              </p>
            </div>
            <p
              className="font-prose italic"
              style={{
                fontSize: 17,
                lineHeight: 1.55,
                color: "#7f8487",
                maxWidth: 380,
              }}
            >
              Real patient photos, shared with written consent. Saudi privacy
              respected — every visible patient signed a release. Names withheld
              by request.
            </p>
          </div>
        </ScrollReveal>

        {/* Two-state case storytelling — photo + caption card per side */}
        <ScrollReveal variant="fade-up" delay={100}>
          <div
            className="grid gap-6 mobile-stack"
            style={{
              gridTemplateColumns: "1fr 1fr",
              marginTop: 56,
              alignItems: "start",
            }}
          >
            <CaseCard
              src="/media/gallery/skin-rejuvenation-before.webp"
              alt="Before — initial consultation"
              chipLabel={beforeCard.chipLabel}
              dayLabel={beforeCard.dayLabel}
              quote={beforeCard.quote}
            />
            <CaseCard
              src="/media/gallery/skin-rejuvenation-after.webp"
              alt="After — 10 days follow-up"
              chipLabel={afterCard.chipLabel}
              chipDark
              dayLabel={afterCard.dayLabel}
              quote={afterCard.quote}
            />
          </div>
        </ScrollReveal>

        {/* CTA + disclaimer */}
        <ScrollReveal variant="fade-up" delay={200}>
          <div
            style={{
              marginTop: 56,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 20,
              paddingTop: 32,
              borderTop: "1px dotted rgba(178,147,98,0.45)",
            }}
          >
            <p
              className="font-prose italic"
              style={{
                fontSize: 14,
                color: "#7f8487",
                maxWidth: 540,
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              All photos and testimonials shared with written consent. Results
              vary by person, treatment plan, and follow-through. Saudi privacy
              by default — patient names withheld by request.
            </p>
            <a
              href="/gallery"
              className="btn-dark"
              style={{ display: "inline-flex" }}
            >
              {b.cta.en} →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
