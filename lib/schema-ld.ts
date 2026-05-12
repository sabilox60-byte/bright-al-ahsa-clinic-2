/**
 * JSON-LD schema generators for AEO + traditional SEO.
 *
 * Coverage: MedicalClinic, LocalBusiness, Physician, MedicalProcedure,
 * Service, FAQPage, BreadcrumbList, Review, AggregateRating, WebSite.
 *
 * Every page should call ONE relevant generator and inject via <script type="application/ld+json">.
 */

import { clinicConfig } from "./clinic-config";
import { clinicExtras } from "./clinic-extras";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

// ─────────────────────────────────────────────────────────────────────────────
// Organization / MedicalClinic — root entity, used on homepage + sitewide WebSite
// ─────────────────────────────────────────────────────────────────────────────
export function organizationLd(locale: "en" | "ar" = "en") {
  const hq = clinicExtras.identity.branches.find((b) => b.isHQ) ?? clinicExtras.identity.branches[0];
  const all = clinicExtras.identity.branches;

  const sameAs = [
    clinicExtras.social.instagram && `https://instagram.com/${stripAt(clinicExtras.social.instagram)}`,
    clinicExtras.social.snapchat && `https://snapchat.com/add/${stripAt(clinicExtras.social.snapchat)}`,
    clinicExtras.social.tiktok && `https://tiktok.com/@${stripAt(clinicExtras.social.tiktok)}`,
    clinicExtras.social.twitter && `https://twitter.com/${stripAt(clinicExtras.social.twitter)}`,
    clinicExtras.social.linkedin,
    clinicExtras.social.youtube,
    clinicExtras.social.facebook,
    clinicExtras.social.wikipedia,
    clinicExtras.social.wikidata,
  ].filter(Boolean) as string[];

  return {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "LocalBusiness"],
    "@id": `${baseUrl}#clinic`,
    name: clinicConfig.brand.name[locale],
    legalName: clinicExtras.identity.legalName[locale],
    description: clinicConfig.seo.description[locale],
    url: baseUrl,
    foundingDate: String(clinicExtras.identity.foundedYear),
    telephone: hq.phone,
    image: `${baseUrl}${clinicExtras.aeo.ogImage}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: hq.address[locale],
      addressLocality: hq.city[locale],
      addressRegion: hq.region[locale],
      postalCode: hq.postalCode,
      addressCountry: hq.countryCode,
    },
    geo: { "@type": "GeoCoordinates", latitude: hq.geo.lat, longitude: hq.geo.lng },
    openingHoursSpecification: openingHoursLd(locale),
    sameAs,
    medicalSpecialty: ["Dermatology", "CosmeticDentistry", "Surgical"],
    branchOf: all.length > 1 ? all.slice(1).map((b) => branchLd(b, locale)) : undefined,
    aggregateRating: clinicExtras.structuredData.aggregateRating
      ? {
          "@type": "AggregateRating",
          ratingValue: clinicExtras.structuredData.aggregateRating.ratingValue,
          reviewCount: clinicExtras.structuredData.aggregateRating.reviewCount,
          bestRating: clinicExtras.structuredData.aggregateRating.bestRating ?? 5,
          worstRating: clinicExtras.structuredData.aggregateRating.worstRating ?? 1,
        }
      : undefined,
    hasCredential: clinicExtras.trustVault.badges.map((b) => ({
      "@type": "EducationalOccupationalCredential",
      name: b.name[locale],
      credentialCategory: b.iconKind,
      recognizedBy: { "@type": "Organization", name: b.issuer[locale] },
      url: b.verifyUrl,
      identifier: b.credentialNumber,
    })),
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// WebSite — enables Sitelinks Search Box in SERPs
// ─────────────────────────────────────────────────────────────────────────────
export function websiteLd(locale: "en" | "ar" = "en") {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}#website`,
    url: baseUrl,
    name: clinicConfig.brand.name[locale],
    inLanguage: locale === "ar" ? "ar-SA" : "en-SA",
    publisher: { "@id": `${baseUrl}#clinic` },
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${baseUrl}/search?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// Physician — per-doctor page
// ─────────────────────────────────────────────────────────────────────────────
export function physicianLd(slug: string, locale: "en" | "ar" = "en") {
  const d = clinicExtras.structuredData.doctors.find((x) => x.slug === slug);
  if (!d) return null;
  const name = locale === "ar" ? d.nameAr : d.nameEn;
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${baseUrl}/doctors/${slug}#physician`,
    name,
    url: `${baseUrl}/doctors/${slug}`,
    medicalSpecialty: d.medicalSpecialty,
    knowsLanguage: d.languages,
    description: d.bio[locale],
    image: d.photoUrl ? `${baseUrl}${d.photoUrl}` : undefined,
    identifier: d.scfhsNumber
      ? { "@type": "PropertyValue", propertyID: "SCFHS", value: d.scfhsNumber }
      : undefined,
    worksFor: { "@id": `${baseUrl}#clinic` },
    sameAs: d.socialUrls,
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// MedicalProcedure — per-treatment landing
// ─────────────────────────────────────────────────────────────────────────────
export function procedureLd(slug: string, locale: "en" | "ar" = "en") {
  const p = clinicExtras.structuredData.procedures.find((x) => x.slug === slug);
  if (!p) return null;
  const name = locale === "ar" ? p.nameAr : p.nameEn;
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "@id": `${baseUrl}/services/${slug}#procedure`,
    name,
    procedureType: p.procedureType,
    bodyLocation: p.bodyLocation,
    preparation: p.preparation?.[locale],
    followup: p.followup?.[locale],
    howPerformed: p.howPerformed?.[locale],
    performer: { "@id": `${baseUrl}#clinic` },
    offers:
      p.estimatedPriceMin && p.estimatedPriceMax
        ? {
            "@type": "AggregateOffer",
            priceCurrency: p.currency || "SAR",
            lowPrice: p.estimatedPriceMin,
            highPrice: p.estimatedPriceMax,
            offerCount: 1,
            availability: "https://schema.org/InStock",
          }
        : undefined,
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// FAQPage — used on /faq, every treatment page, every goal page
// ─────────────────────────────────────────────────────────────────────────────
export function faqLd(items: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// BreadcrumbList — site-wide navigational schema
// ─────────────────────────────────────────────────────────────────────────────
export function breadcrumbLd(crumbs: Array<{ label: string; href: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: c.href.startsWith("http") ? c.href : `${baseUrl}${c.href}`,
    })),
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// Service — package / offer pages
// ─────────────────────────────────────────────────────────────────────────────
export function serviceLd(args: {
  slug: string;
  name: string;
  description: string;
  category?: string;
  priceMin?: number;
  priceMax?: number;
  currency?: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${args.url}#service`,
    serviceType: args.category,
    name: args.name,
    description: args.description,
    provider: { "@id": `${baseUrl}#clinic` },
    areaServed: { "@type": "Country", name: "Saudi Arabia" },
    offers:
      args.priceMin
        ? {
            "@type": "AggregateOffer",
            priceCurrency: args.currency || "SAR",
            lowPrice: args.priceMin,
            highPrice: args.priceMax ?? args.priceMin,
          }
        : undefined,
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────
function openingHoursLd(_locale: "en" | "ar") {
  // Saturday-Thursday default. Override per clinic if needed.
  return [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "11:00",
      closes: "21:00",
    },
  ];
}

function branchLd(branch: typeof clinicExtras.identity.branches[number], locale: "en" | "ar") {
  return {
    "@type": "MedicalClinic",
    name: branch.name[locale],
    address: {
      "@type": "PostalAddress",
      streetAddress: branch.address[locale],
      addressLocality: branch.city[locale],
      addressRegion: branch.region[locale],
      addressCountry: branch.countryCode,
      postalCode: branch.postalCode,
    },
    geo: { "@type": "GeoCoordinates", latitude: branch.geo.lat, longitude: branch.geo.lng },
    telephone: branch.phone,
  };
}

function stripAt(handle: string): string {
  return handle.replace(/^@/, "");
}

/**
 * Tiny helper to inject schema as a <script> tag. Use in any page:
 *   <Script id="ld-clinic" type="application/ld+json"
 *      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd("en")) }} />
 */
export function ldString(obj: unknown): string {
  return JSON.stringify(obj, null, 0);
}
