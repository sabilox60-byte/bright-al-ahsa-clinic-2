import Portrait from "./Portrait";
import ChapterMark from "./ChapterMark";
import Image from "next/image";
import { type PortraitVariant } from "@/lib/clinic-config";

interface PageHeroProps {
  roman: string;
  eyebrow: string;
  title: string;
  titleEm: string;
  sub: string;
  variant?: PortraitVariant;
  /** Optional cinematic banner (21:8). When set, replaces the Portrait side panel. */
  image?: string;
  /** CSS object-position for fine-tuning crop (default: "center"). */
  imagePosition?: string;
}

export default function PageHero({
  roman,
  eyebrow,
  title,
  titleEm,
  sub,
  variant = "terracotta",
  image,
  imagePosition = "center",
}: PageHeroProps) {
  if (image) {
    return (
      <section
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "21 / 8",
          minHeight: 520,
          overflow: "hidden",
          background: "#0a1f2e",
          borderBottom: "1px solid #ece5d4",
          zIndex: 2,
        }}
      >
        <Image
          src={image}
          alt=""
          fill
          sizes="100vw"
          priority
          style={{ objectFit: "cover", objectPosition: imagePosition }}
        />

        {/* Layer 1 — soft white haze across the whole banner (premium, dream-like) */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.10) 35%, rgba(255,255,255,0.05) 65%, rgba(255,255,255,0) 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Layer 2 — dark bottom fade for white-text legibility */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(10,31,46,0) 0%, rgba(10,31,46,0) 50%, rgba(10,31,46,0.22) 75%, rgba(10,31,46,0.65) 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Text overlay — bottom-left, on the gradient */}
        <div
          className="container-page"
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            padding: "0 0 56px",
            color: "#ffffff",
          }}
        >
          <ChapterMark roman={roman} title={eyebrow} dark />
          <h1
            className="h-display"
            style={{
              marginTop: 18,
              fontSize: "clamp(40px, 5.6vw, 68px)",
              color: "#ffffff",
              textShadow: "0 2px 24px rgba(10,31,46,0.45)",
            }}
          >
            {title}
            <br />
            <em style={{ fontStyle: "italic", color: "#d4b899" }}>{titleEm}</em>
          </h1>
          <p
            className="font-prose italic"
            style={{
              fontSize: 19,
              color: "rgba(255,255,255,0.92)",
              marginTop: 18,
              maxWidth: 720,
              lineHeight: 1.55,
              textShadow: "0 1px 12px rgba(10,31,46,0.4)",
            }}
          >
            {sub}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      style={{
        padding: "64px 0 56px",
        background: "#f6f5f4",
        borderBottom: "1px solid #ece5d4",
        position: "relative",
        zIndex: 2,
      }}
    >
      <div
        className="container-page grid gap-10 items-end page-hero-grid"
        style={{ gridTemplateColumns: "1.4fr 0.6fr" }}
      >
        <div>
          <ChapterMark roman={roman} title={eyebrow} />
          <h1
            className="h-display"
            style={{ marginTop: 20, fontSize: "clamp(40px, 5.6vw, 68px)" }}
          >
            {title}
            <br />
            <em style={{ fontStyle: "italic", color: "#b29362" }}>{titleEm}</em>
          </h1>
          <p
            className="font-prose italic"
            style={{
              fontSize: 19,
              color: "#2a3f4f",
              marginTop: 20,
              maxWidth: 580,
              lineHeight: 1.55,
            }}
          >
            {sub}
          </p>
        </div>
        <Portrait
          variant={variant}
          className="page-hero-portrait"
          style={{ width: 220, height: 220, borderRadius: 24, marginLeft: "auto" }}
          rounded={24}
        />
      </div>
    </section>
  );
}
