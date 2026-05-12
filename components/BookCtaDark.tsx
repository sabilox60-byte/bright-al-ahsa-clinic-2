import { clinicConfig } from "@/lib/clinic-config";

interface BookCtaDarkProps {
  headline?: string;
  description?: string;
}

export default function BookCtaDark({ headline, description }: BookCtaDarkProps) {
  const h = headline ?? clinicConfig.departmentsPage.bookCta.headline.en;
  const d = description ?? clinicConfig.departmentsPage.bookCta.description.en;
  return (
    <section className="section section-dark" style={{ position: "relative", zIndex: 2 }}>
      <div className="container-page text-center">
        <h2 className="h-xl" style={{ color: "#ffffff" }}>
          {h}
        </h2>
        <p
          className="font-prose italic"
          style={{ color: "#ece5d4", fontSize: 18, marginTop: 16, maxWidth: 560, marginInline: "auto" }}
        >
          {d}
        </p>
        <a
          href={clinicConfig.contact.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ marginTop: 28, display: "inline-block" }}
        >
          {clinicConfig.navigation.bookCta.en}
        </a>
      </div>
    </section>
  );
}
