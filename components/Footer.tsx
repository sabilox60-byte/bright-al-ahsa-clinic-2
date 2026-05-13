import Logo from "./Logo";
import Vision2030Mark from "./Vision2030Mark";
import { clinicConfig } from "@/lib/clinic-config";
import { clinicExtras } from "@/lib/clinic-extras";

/* Inline SVG brand icons — consistent stroke, no icon-lib version drift. */
function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}
function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.1z" />
    </svg>
  );
}
function SnapchatIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12.166.018C7.95-.157 4.27 2.844 3.842 7.146a23 23 0 0 0-.151 2.97c-.038.31-.176.58-.382.794-.296.305-.71.51-1.142.586-.382.067-.793.224-.793.682 0 1.343 2.07 2.275 2.07 2.275-.077.32-.354 1.022-.964 1.022-.34 0-.62-.18-.95-.18-.288 0-.572.205-.572.494 0 .555.927.91 1.61 1.052 1.045.218 1.43.572 1.654 1.272.224.7.547 1.36 1.81 1.36.503 0 1.05-.21 1.598-.21 1.318 0 1.78 1.476 4.376 1.476s3.058-1.476 4.376-1.476c.547 0 1.094.21 1.598.21 1.262 0 1.586-.66 1.81-1.36.224-.7.61-1.054 1.654-1.272.683-.142 1.61-.497 1.61-1.052 0-.289-.284-.494-.572-.494-.33 0-.61.18-.95.18-.61 0-.887-.702-.964-1.022 0 0 2.07-.932 2.07-2.275 0-.458-.41-.615-.793-.682-.432-.076-.846-.281-1.142-.586a1.5 1.5 0 0 1-.382-.794 23 23 0 0 0-.15-2.97C19.7 2.844 16.02-.157 11.804.018h.362z" />
    </svg>
  );
}

export default function Footer() {
  const social = clinicExtras.social ?? {};
  const igHandle = (social.instagram ?? "@bright.alahsa").replace("@", "");
  const snapHandle = (social.snapchat ?? "@bright-clinics").replace("@", "");
  const tiktokHandle = (social.tiktok ?? "@bright.alahsa").replace("@", "");
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
            {/* Social row — modesty-conscious, women's preferred channels */}
            <div className="mt-6 flex gap-3 items-center" aria-label="Follow Bright Al Ahsa">
              <a
                href={`https://wa.me/${clinicConfig.contact.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="WhatsApp"
                title="WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
              <a
                href={`https://instagram.com/${igHandle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="Instagram"
                title="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href={`https://snapchat.com/add/${snapHandle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="Snapchat"
                title="Snapchat"
              >
                <SnapchatIcon size={18} />
              </a>
              <a
                href={`https://tiktok.com/@${tiktokHandle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="TikTok"
                title="TikTok"
              >
                <TikTokIcon size={18} />
              </a>
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
