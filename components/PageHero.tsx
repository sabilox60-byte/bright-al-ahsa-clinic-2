import Portrait from "./Portrait";
import ChapterMark from "./ChapterMark";
import { type PortraitVariant } from "@/lib/clinic-config";

interface PageHeroProps {
  roman: string;
  eyebrow: string;
  title: string;
  titleEm: string;
  sub: string;
  variant?: PortraitVariant;
}

export default function PageHero({ roman, eyebrow, title, titleEm, sub, variant = "terracotta" }: PageHeroProps) {
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
