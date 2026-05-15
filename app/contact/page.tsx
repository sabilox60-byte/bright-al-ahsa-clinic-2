import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import SchemaInjector from "@/components/SchemaInjector";
import { clinicConfig } from "@/lib/clinic-config";
import { clinicExtras } from "@/lib/clinic-extras";
import { organizationLd, breadcrumbLd } from "@/lib/schema-ld";

export const metadata: Metadata = {
  title: `Contact — ${clinicConfig.brand.name.en}`,
  description: "Reach us by WhatsApp, phone, or in person. Same-day reply. Olaya District, Riyadh.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const branches = clinicExtras.identity.branches;

  return (
    <>
      <SchemaInjector
        schemas={[
          organizationLd("en"),
          breadcrumbLd([
            { label: "Home", href: "/" },
            { label: "Contact", href: "/contact" },
          ]),
        ]}
      />
      <Nav />
      <main className="page-in">
        <PageHero
          roman="VII"
          eyebrow="✦ Contact"
          title="Reach us"
          titleEm="the way you prefer."
          sub="Most patients reach us on WhatsApp — messages are read the same day. For something private, voicemail or in-person."
          image="/media/heros/journal-hero.webp"
        />

        <section className="section" style={{ background: "#f6f5f4", position: "relative", zIndex: 2 }}>
          <div className="container-page">
            <div
              className="grid gap-10 items-start mobile-stack"
              style={{ gridTemplateColumns: "1fr 1fr" }}
            >
              {/* Channels */}
              <ScrollReveal variant="slide-right">
                <div className="overline" style={{ color: "#b29362", marginBottom: 18 }}>
                  ✦ Channels
                </div>
                <h2 className="h-lg" style={{ marginBottom: 32 }}>
                  Pick the door <em style={{ fontStyle: "italic", color: "#b29362" }}>that fits.</em>
                </h2>

                <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                  <ChannelCard
                    label="WhatsApp"
                    description="Same-day reply. Most-used channel."
                    href={clinicConfig.contact.whatsappLink}
                    primary
                  />
                  <ChannelCard
                    label="Phone"
                    description={clinicConfig.contact.phone}
                    href={`tel:${clinicConfig.contact.phone.replace(/\s/g, "")}`}
                  />
                  <ChannelCard
                    label="Email"
                    description={clinicConfig.contact.email}
                    href={`mailto:${clinicConfig.contact.email}`}
                  />
                  {clinicExtras.social.instagram && (
                    <ChannelCard
                      label="Instagram"
                      description={clinicExtras.social.instagram}
                      href={`https://instagram.com/${clinicExtras.social.instagram.replace(/^@/, "")}`}
                    />
                  )}
                </div>
              </ScrollReveal>

              {/* Branches */}
              <ScrollReveal variant="slide-left">
                <div className="overline" style={{ color: "#b29362", marginBottom: 18 }}>
                  ✦ Locations
                </div>
                <h2 className="h-lg" style={{ marginBottom: 32 }}>
                  Where to <em style={{ fontStyle: "italic", color: "#b29362" }}>find us.</em>
                </h2>

                <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  {branches.map((b, i) => (
                    <article key={i} className="card" style={{ padding: 22 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10 }}>
                        <h3 className="font-serif" style={{ fontSize: 19, color: "#0a1f2e" }}>
                          {b.name.en}
                          {b.isHQ && (
                            <span className="chip chip-sage" style={{ marginLeft: 10 }}>
                              HQ
                            </span>
                          )}
                        </h3>
                      </div>
                      <p className="font-prose" style={{ fontSize: 15, color: "#2a3f4f", lineHeight: 1.5 }}>
                        {b.address.en}
                      </p>
                      <hr className="rule-dotted" style={{ margin: "14px 0" }} />
                      <div style={{ display: "flex", gap: 18, fontSize: 13, color: "#7f8487", flexWrap: "wrap" }}>
                        <span>📞 {b.phone}</span>
                        <span>WhatsApp {b.whatsapp}</span>
                      </div>
                      {b.googleMapsUrl && (
                        <a
                          href={b.googleMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="tlink"
                          style={{ marginTop: 12, display: "inline-block", fontSize: 12, color: "#8f7548", letterSpacing: "0.06em", textTransform: "uppercase" }}
                        >
                          Open in Google Maps ↗
                        </a>
                      )}
                    </article>
                  ))}
                </div>

                <div
                  style={{
                    marginTop: 24,
                    padding: 18,
                    background: "rgba(178,147,98,0.08)",
                    borderRadius: 8,
                    fontSize: 13,
                    color: "#2a3f4f",
                    fontFamily: "var(--font-cormorant), serif",
                    fontStyle: "italic",
                    lineHeight: 1.5,
                  }}
                >
                  Hours: {clinicConfig.contact.hours.en}
                  {clinicConfig.contact.parking && (
                    <>
                      <br />
                      {clinicConfig.contact.parking.en}
                    </>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function ChannelCard({
  label,
  description,
  href,
  primary = false,
}: {
  label: string;
  description: string;
  href: string;
  primary?: boolean;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="card card-interactive"
      style={{
        padding: "20px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 16,
        background: primary ? "linear-gradient(180deg, #14283a 0%, #0a1f2e 100%)" : undefined,
        color: primary ? "#ffffff" : "inherit",
        textDecoration: "none",
      }}
    >
      <div>
        <div
          className="overline"
          style={{ color: primary ? "#b29362" : "#8f7548", marginBottom: 4, fontSize: 10 }}
        >
          ✦ {label}
        </div>
        <div className="font-serif" style={{ fontSize: 18, color: primary ? "#ffffff" : "#0a1f2e" }}>
          {description}
        </div>
      </div>
      <span style={{ color: primary ? "#b29362" : "#8f7548", fontSize: 18 }}>→</span>
    </a>
  );
}
