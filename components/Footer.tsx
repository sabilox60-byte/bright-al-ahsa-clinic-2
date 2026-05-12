import Logo from "./Logo";
import Vision2030Mark from "./Vision2030Mark";
import { clinicConfig } from "@/lib/clinic-config";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #f0ece1",
        padding: "72px 0 32px",
        background: "#f6f5f4",
        position: "relative",
        zIndex: 2,
      }}
    >
      <div className="container-page">
        <div
          className="grid gap-10 items-start mobile-stack"
          style={{ gridTemplateColumns: "1.3fr 1fr 1fr 1fr" }}
        >
          <div>
            <Logo size={24} />
            <p
              className="font-prose"
              style={{
                fontSize: 17,
                lineHeight: 1.6,
                color: "#7f8487",
                marginTop: 14,
                maxWidth: 320,
              }}
            >
              {clinicConfig.footer.tagline.en}
            </p>
            <div className="mt-5 flex gap-2 items-center">
              {clinicConfig.footer.chips.map((chip, i) => (
                <span key={i} className={i === 0 ? "chip chip-sage" : "chip"}>
                  {chip.en}
                </span>
              ))}
            </div>
          </div>
          {clinicConfig.footer.columns.map((col) => (
            <div key={col.title.en}>
              <div className="overline" style={{ marginBottom: 14 }}>
                {col.title.en}
              </div>
              <ul className="m-0 p-0 list-none flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l.label.en}>
                    <a
                      href={l.href}
                      className="tlink"
                      style={{ fontSize: 15, color: "#2a3f4f" }}
                    >
                      {l.label.en}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div
          className="mt-14 pt-5 flex justify-between flex-wrap items-center gap-3"
          style={{
            borderTop: "1px dotted #8f7548",
            fontSize: 12,
            color: "#7f8487",
          }}
        >
          <span className="font-prose italic">
            © {new Date().getFullYear()} {clinicConfig.brand.name.en} —{" "}
            {clinicConfig.footer.colophon.en}
          </span>
          <Vision2030Mark locale="en" />
          <span>
            <a href="/privacy" className="tlink" style={{ color: "#7f8487" }}>
              Privacy
            </a>
            <span style={{ padding: "0 8px" }}>·</span>
            <a href="/terms" className="tlink" style={{ color: "#7f8487" }}>
              Terms
            </a>
            <span style={{ padding: "0 8px" }}>·</span>
            <a href="/accessibility" className="tlink" style={{ color: "#7f8487" }}>
              Accessibility
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
