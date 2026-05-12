/**
 * CLINIC EXTRAS — signature features & structured-data fields.
 * Extends `clinic-config.ts` without touching existing pages.
 *
 * Edit per clinic. Bilingual (EN/AR) throughout.
 *
 * Sections:
 *  ① identity        — legal entity, registrations, geo
 *  ② structuredData  — for JSON-LD schema generators
 *  ③ trustVault      — verifiable credentials (Maaroof, MOH, SCFHS, SFDA, SAMA)
 *  ④ goals           — outcome-first navigation entries
 *  ⑤ saudiCalendar   — Eid / Ramadan / National Day theming
 *  ⑥ livingPulse     — real-time clinic signals
 *  ⑦ voiceConcierge  — Arabic AI voice assistant copy
 *  ⑧ aftercare       — post-treatment portal flow
 *  ⑨ pricing         — Tabby/Tamara BNPL, currency, ranges
 *  ⑩ social          — handles for AEO entity strengthening
 *  ⑪ aeo             — answer-engine optimization metadata
 */

import type { Bilingual, PortraitVariant } from "./clinic-config";

// ─────────────────────────────────────────────────────────────────────────────
// ① Identity & legal entity
// ─────────────────────────────────────────────────────────────────────────────
export interface ClinicIdentity {
  legalName: Bilingual;
  /** Saudi Commercial Registration number */
  crNumber?: string;
  /** Ministry of Health facility license number */
  mohLicense?: string;
  /** Maaroof Golden Certificate URL */
  maaroofUrl?: string;
  vatNumber?: string;
  /** Branches array — first branch is primary HQ */
  branches: Array<{
    name: Bilingual;
    address: Bilingual;
    city: Bilingual;
    region: Bilingual;
    postalCode?: string;
    countryCode: string; // e.g. "SA"
    geo: { lat: number; lng: number };
    phone: string;
    whatsapp: string;
    googleMapsUrl?: string;
    googlePlaceId?: string;
    isHQ?: boolean;
  }>;
  /** Founding year (number) */
  foundedYear: number;
  /** Number of clinic owners/partners — used in About page authority signals */
  partnerCount?: number;
  /** Total staff including doctors, nurses, admin */
  staffCount?: number;
}

// ─────────────────────────────────────────────────────────────────────────────
// ② Structured-data (JSON-LD source)
// ─────────────────────────────────────────────────────────────────────────────
export interface StructuredData {
  /** Doctor entries with SCFHS verification */
  doctors: Array<{
    slug: string;
    nameEn: string;
    nameAr: string;
    /** Saudi Commission for Health Specialties registration number */
    scfhsNumber?: string;
    medicalSpecialty: string; // e.g. "Dermatology", "MaxillofacialSurgery"
    yearsExperience?: number;
    languages: string[]; // ISO codes: "ar", "en", "fr"
    education?: string[];
    certifications?: string[];
    photoUrl?: string;
    portraitVariant?: PortraitVariant;
    bio: Bilingual;
    /** For Physician schema sameAs property */
    socialUrls?: string[];
  }>;
  /** Treatment/procedure entries with MedicalProcedure schema fields */
  procedures: Array<{
    slug: string;
    nameEn: string;
    nameAr: string;
    procedureType: string; // e.g. "Cosmetic", "Therapeutic", "Diagnostic"
    bodyLocation?: string;
    preparation?: Bilingual;
    followup?: Bilingual;
    howPerformed?: Bilingual;
    typicalDurationMinutes?: number;
    estimatedPriceMin?: number;
    estimatedPriceMax?: number;
    currency?: string; // "SAR"
  }>;
  /** Reviews used for AggregateRating schema */
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
    bestRating?: number;
    worstRating?: number;
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// ③ Trust Vault — verifiable credentials page
// ─────────────────────────────────────────────────────────────────────────────
export interface TrustVault {
  hero: {
    eyebrow: Bilingual;
    title: Bilingual;
    titleEm: Bilingual;
    sub: Bilingual;
  };
  badges: Array<{
    id: string;
    name: Bilingual;
    issuer: Bilingual;
    description: Bilingual;
    /** Public URL where credential can be independently verified */
    verifyUrl?: string;
    /** Optional credential number to display */
    credentialNumber?: string;
    /** Icon hint: "maaroof" | "moh" | "scfhs" | "sfda" | "sama" | "vision2030" | "iso" | "custom" */
    iconKind: string;
  }>;
  philosophy: Bilingual;
  reviewsBlock: {
    eyebrow: Bilingual;
    headline: Bilingual;
    /** External Maaroof / Google reviews embed URL */
    embedUrl?: string;
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// ④ Goals — outcome-first navigation
// ─────────────────────────────────────────────────────────────────────────────
export interface Goal {
  slug: string; // "glow" | "contour" | "smile" | "restore" | "longevity"
  /** Single emoji-free symbol — Unicode mark like ✦ ✧ ✱ ❖ ❋ */
  symbol: string;
  name: Bilingual;
  /** Outcome-led tagline shown under name */
  tagline: Bilingual;
  /** Hero copy when user lands on /goals/[slug] */
  hero: {
    eyebrow: Bilingual;
    headlinePartA: Bilingual;
    headlineEm: Bilingual;
    sub: Bilingual;
  };
  /** Treatments mapped to this goal — references procedures by slug */
  procedureSlugs: string[];
  /** Doctor slugs recommended for this goal */
  doctorSlugs: string[];
  /** Companion goals shown in cross-sell */
  relatedSlugs?: string[];
  /** FAQ specific to this goal */
  faqs: Array<{ q: Bilingual; a: Bilingual }>;
  /** Color accent override for this goal page (CSS color) */
  accentColor?: string;
  variant: PortraitVariant;
}

// ─────────────────────────────────────────────────────────────────────────────
// ⑤ Saudi Calendar Engine — auto-themes for occasions
// ─────────────────────────────────────────────────────────────────────────────
export interface SaudiOccasion {
  /** Stable id used in URLs and analytics */
  id: string;
  /** Display name */
  name: Bilingual;
  /** YYYY-MM-DD start of THE OCCASION (not the campaign) */
  date: string;
  /** Days BEFORE the occasion when the campaign engine activates */
  campaignWindow: number;
  /** Banner copy when campaign is live */
  banner: {
    eyebrow: Bilingual;
    line: Bilingual;
    cta: Bilingual;
  };
  /** Procedure slugs to feature during this occasion */
  featuredProcedureSlugs: string[];
  /** Color palette override during this campaign */
  palette?: {
    accent: string;
    surface: string;
  };
  /** Optional custom hero replacement for /book during this occasion */
  bookOverride?: {
    headline: Bilingual;
    sub: Bilingual;
    fastTrack: Bilingual;
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// ⑥ Living Pulse — real-time clinic signals (homepage band)
// ─────────────────────────────────────────────────────────────────────────────
export interface LivingPulseConfig {
  enabled: boolean;
  /** Static fallback when API is unreachable — must read believable */
  fallback: {
    consultationsTodayLabel: Bilingual;
    consultationsTodayValue: string; // "47"
    nextAvailableLabel: Bilingual;
    nextAvailableValue: Bilingual;
    mostBookedLabel: Bilingual;
    mostBookedValue: Bilingual;
  };
  /** Cal.com or Supabase endpoint to fetch live values from (server-side) */
  endpoint?: string;
  refreshSeconds?: number; // default 300
}

// ─────────────────────────────────────────────────────────────────────────────
// ⑦ Voice Concierge — Arabic AI assistant
// ─────────────────────────────────────────────────────────────────────────────
export interface VoiceConciergeConfig {
  enabled: boolean;
  /** Floating button label */
  triggerLabel: Bilingual;
  /** Welcome line spoken when opened */
  greeting: Bilingual;
  /** Suggested prompts shown to user */
  suggestedPrompts: Bilingual[];
  /** ElevenLabs voice ID for Arabic Saudi female */
  voiceId?: string;
  /** Disclosure shown in modal — "AI assistant, may not have latest schedule" */
  disclosure: Bilingual;
}

// ─────────────────────────────────────────────────────────────────────────────
// ⑧ Aftercare Portal
// ─────────────────────────────────────────────────────────────────────────────
export interface AftercareConfig {
  enabled: boolean;
  hero: {
    eyebrow: Bilingual;
    headline: Bilingual;
    sub: Bilingual;
  };
  /** Treatment-specific aftercare templates by procedure slug */
  templates: Array<{
    procedureSlug: string;
    title: Bilingual;
    immediateInstructions: Bilingual[]; // first 24h
    weekInstructions: Bilingual[]; // first 7 days
    redFlags: Bilingual[]; // when to call us
    nextStepCopy: Bilingual; // "We'll see you for follow-up in X days"
    nextStepDays: number;
  }>;
  /** Daily check-in microcopy */
  checkIn: {
    prompt: Bilingual;
    options: Array<{ value: number; label: Bilingual; emoji?: string }>;
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// ⑨ Pricing & payments
// ─────────────────────────────────────────────────────────────────────────────
export interface PricingConfig {
  currency: "SAR" | "AED" | "KWD" | "BHD" | "OMR" | "QAR" | "USD" | "EUR";
  currencySymbol: Bilingual;
  /** Tabby integration enabled — MUST honor SAR 10K cap (SAMA constraint) */
  tabby?: { enabled: boolean; minAmount?: number; maxAmount: number };
  tamara?: { enabled: boolean; minAmount?: number; maxAmount: number };
  /** Stripe / Mada / Apple Pay availability for direct payments */
  cards?: { mada: boolean; visa: boolean; mastercard: boolean; applePay: boolean };
  /** Public price-range hint shown on booking page */
  priceRangeLabel: Bilingual;
}

// ─────────────────────────────────────────────────────────────────────────────
// ⑩ Social entity strengthening
// ─────────────────────────────────────────────────────────────────────────────
export interface SocialPresence {
  instagram?: string;
  snapchat?: string;
  tiktok?: string;
  twitter?: string;
  linkedin?: string;
  youtube?: string;
  facebook?: string;
  /** Wikipedia URL if entity exists */
  wikipedia?: string;
  /** Wikidata Q-ID if entity exists */
  wikidata?: string;
  /** Google Knowledge Panel URL if claimed */
  googleKnowledgePanel?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// ⑪ AEO — answer-engine optimization
// ─────────────────────────────────────────────────────────────────────────────
export interface AEOConfig {
  /** llms.txt content — markdown body */
  llmsTxt: string;
  /** Bots to explicitly allow in robots.txt */
  allowedBots: string[];
  /** Bots to explicitly deny */
  deniedBots?: string[];
  /** "Quick answer" boilerplate — used as 40-60 word intro on treatment pages */
  quickAnswerTemplate: Bilingual;
  /** Default OpenGraph image URL (1200x630) */
  ogImage: string;
  /** Default Twitter card image */
  twitterImage?: string;
  /** Twitter handle for cards */
  twitterHandle?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// ⑫ Cultural privacy defaults — women-focused KSA constraint
// ─────────────────────────────────────────────────────────────────────────────
export interface PrivacyDefaults {
  /** When true, the entire site avoids identifiable patient face imagery */
  noPatientFaces: boolean;
  /** Show separate Arabic-only women-staff routing in booking flow */
  womenStaffRoutingEnabled: boolean;
  /** Allow anonymous price-range inquiry without name */
  anonymousInquiryEnabled: boolean;
  /** Default WhatsApp-first contact (versus phone-first) */
  whatsappFirst: boolean;
}

// ═════════════════════════════════════════════════════════════════════════════
// FULL EXTRAS INTERFACE
// ═════════════════════════════════════════════════════════════════════════════
export interface ClinicExtras {
  identity: ClinicIdentity;
  structuredData: StructuredData;
  trustVault: TrustVault;
  goals: Goal[];
  saudiOccasions: SaudiOccasion[];
  livingPulse: LivingPulseConfig;
  voiceConcierge: VoiceConciergeConfig;
  aftercare: AftercareConfig;
  pricing: PricingConfig;
  social: SocialPresence;
  aeo: AEOConfig;
  privacy: PrivacyDefaults;
}

// ═════════════════════════════════════════════════════════════════════════════
// DEFAULT EXPORT — placeholder values, edit per clinic
// ═════════════════════════════════════════════════════════════════════════════
export const clinicExtras: ClinicExtras = {
  identity: {
    legalName: { en: "Al-Maha Bright Skin Medical Complex", ar: "مجمّع الماها برايت الطبي للبشرة" },
    crNumber: undefined, // TODO ask Manea at first call
    mohLicense: undefined, // TODO ask Manea at first call
    foundedYear: 2018,
    partnerCount: 2,
    staffCount: 80,
    branches: [
      {
        name: { en: "Al Khobar HQ", ar: "المركز الرئيسي — الخبر" },
        address: { en: "Prince Faisal Bin Fahd Rd, Al Hada district (opposite Toyota agency)", ar: "شارع الأمير فيصل بن فهد، حي الهدا (مقابل وكالة تويوتا)" },
        city: { en: "Al Khobar", ar: "الخبر" },
        region: { en: "Eastern Province", ar: "المنطقة الشرقية" },
        postalCode: "34439",
        countryCode: "SA",
        geo: { lat: 26.2839, lng: 50.2074 },
        phone: "920024428",
        whatsapp: "+966 55 733 7555",
        isHQ: true,
      },
      {
        name: { en: "Al Ahsa branch — Mubarraz", ar: "فرع الأحساء — المبرّز" },
        address: { en: "Khalid Ibn Al-Walid Street, Mubarraz", ar: "شارع خالد بن الوليد، المبرّز" },
        city: { en: "Al Ahsa", ar: "الأحساء" },
        region: { en: "Eastern Province", ar: "المنطقة الشرقية" },
        countryCode: "SA",
        geo: { lat: 25.4127, lng: 49.6043 },
        phone: "+966 50 202 2292",
        whatsapp: "+966 55 733 7555",
        isHQ: false,
      },
    ],
  },

  structuredData: {
    doctors: [
      {
        slug: "hassan-nazzal",
        nameEn: "Dr. Hassan Nazzal",
        nameAr: "د. حسن نزال",
        scfhsNumber: undefined, // TODO verify at meeting
        medicalSpecialty: "MaxillofacialSurgery",
        languages: ["ar", "en"],
        education: ["MD · Jordanian Board of Maxillofacial Surgery"],
        certifications: ["FRCS · Royal College of Surgeons in Ireland", "Senior partner · Bright Specialized Clinics"],
        portraitVariant: "terracotta",
        bio: {
          en: "Senior partner of Bright Specialized Clinics. Jordanian Board-certified maxillofacial surgeon with Fellowship from the Royal College of Surgeons in Ireland.",
          ar: "الشريك الأوّل في عيادات برايت التخصصية. جرّاح فم ووجه وفكّين معتمَد من المجلس الأردني، حاصل على زمالة الكلية الملكية للجرّاحين في أيرلندا.",
        },
      },
      {
        slug: "marina-naddaf",
        nameEn: "Dr. Marina Naddaf",
        nameAr: "د. مارينا نداف",
        scfhsNumber: undefined,
        medicalSpecialty: "Dermatology",
        yearsExperience: 25,
        languages: ["ar", "en", "fr"],
        education: ["MD · MSc Dermatology"],
        certifications: ["American Academy of Dermatology — member since 2004", "Canadian Laser Diploma"],
        portraitVariant: "sand",
        socialUrls: ["https://www.instagram.com/drmarinanaddaf/", "https://www.snapchat.com/@drmnaddaf"],
        bio: {
          en: "Twenty-five years in dermatology across the Gulf. AAD member since 2004 and Canadian Laser Diploma holder. Known for restrained, age-graceful results.",
          ar: "خمسة وعشرون عاماً في الجلدية عبر الخليج. عضوة الأكاديمية الأمريكية للأمراض الجلدية منذ ٢٠٠٤، وحاصلة على دبلوم الليزر الكندي. مشهورة بنتائج هادئة تشيخ بكرامة.",
        },
      },
      {
        slug: "wafaa-saeed",
        nameEn: "Dr. Wafaa Saeed",
        nameAr: "د. وفاء سعيد",
        scfhsNumber: undefined,
        medicalSpecialty: "Dermatology",
        languages: ["ar", "en"],
        education: ["MD · Egyptian Fellowship Dermatology"],
        certifications: ["Al Ahsa branch lead since 2025"],
        portraitVariant: "sage",
        socialUrls: ["https://www.snapchat.com/@dr_wafaasaeed"],
        bio: {
          en: "Lead clinician at the Al Ahsa branch. Egyptian Fellowship-certified dermatologist specialising in full-face aesthetic protocols.",
          ar: "الطبيبة الرئيسية في فرع الأحساء. طبيبة جلدية بزمالة مصرية، متخصّصة في بروتوكولات تجميل الوجه الكامل.",
        },
      },
      {
        slug: "doaa-goda",
        nameEn: "Dr. Doaa Goda",
        nameAr: "د. دعاء جودة",
        scfhsNumber: undefined,
        medicalSpecialty: "CosmeticDermatology",
        languages: ["ar", "en"],
        education: ["MD · Cosmetic Aesthetics"],
        certifications: ["Filler & Botox specialist"],
        portraitVariant: "terracotta",
        bio: {
          en: "Specialist in fillers, Botox, and body cosmetic procedures. Patient-favourite for natural, undetectable results.",
          ar: "متخصّصة في الفيلر والبوتوكس والإجراءات التجميلية للجسم. مفضّلة المريضات للنتائج الطبيعية غير الملحوظة.",
        },
      },
      {
        slug: "nadeen-kabboura",
        nameEn: "Dr. Nadeen Kabboura",
        nameAr: "د. نادين كبورا",
        scfhsNumber: undefined,
        medicalSpecialty: "Obstetric",
        languages: ["ar", "en"],
        education: ["MD · OB/GYN Consultant"],
        certifications: ["Intimate health specialist"],
        portraitVariant: "sand",
        bio: {
          en: "Consultant in gynecology and intimate health. Discreet, women-only consultations.",
          ar: "استشاريّة في النساء والولادة والصحّة الحميمة. استشارات نسائية بسرّية تامّة.",
        },
      },
      {
        slug: "amirah-mohannadi",
        nameEn: "Dr. Amirah Mohannadi",
        nameAr: "د. أميرة المهنّدي",
        scfhsNumber: undefined,
        medicalSpecialty: "CosmeticDermatology",
        languages: ["ar", "en"],
        education: ["MD · Aesthetic Medicine"],
        certifications: ["Lip filler specialist"],
        portraitVariant: "sage",
        bio: {
          en: "Specialist in lip filler artistry. Known for restrained volumes that respect natural facial proportions.",
          ar: "متخصّصة في فيلر الشفاه. مشهورة بكميّات معتدلة تحترم تناسق الوجه الطبيعي.",
        },
      },
    ],
    procedures: [
      {
        slug: "full-face-filler",
        nameEn: "Full-Face Filler",
        nameAr: "فيلر الوجه الكامل",
        procedureType: "Cosmetic",
        bodyLocation: "Face",
        typicalDurationMinutes: 60,
        currency: "SAR",
      },
      {
        slug: "lip-filler",
        nameEn: "Lip Filler",
        nameAr: "فيلر الشفاه",
        procedureType: "Cosmetic",
        bodyLocation: "Lips",
        typicalDurationMinutes: 30,
        currency: "SAR",
      },
      {
        slug: "botox",
        nameEn: "Botox",
        nameAr: "البوتوكس",
        procedureType: "Cosmetic",
        bodyLocation: "Face",
        typicalDurationMinutes: 30,
        currency: "SAR",
      },
      {
        slug: "hydrafacial",
        nameEn: "Hydrafacial",
        nameAr: "هيدرافيشيال",
        procedureType: "Cosmetic",
        bodyLocation: "Face",
        typicalDurationMinutes: 45,
        currency: "SAR",
      },
      {
        slug: "veneers",
        nameEn: "Hollywood Smile · Veneers",
        nameAr: "ابتسامة هوليوود · فينير",
        procedureType: "Cosmetic",
        bodyLocation: "Teeth",
        typicalDurationMinutes: 120,
        currency: "SAR",
      },
      {
        slug: "teeth-whitening",
        nameEn: "Teeth Whitening",
        nameAr: "تبييض الأسنان",
        procedureType: "Cosmetic",
        bodyLocation: "Teeth",
        typicalDurationMinutes: 60,
        currency: "SAR",
      },
      {
        slug: "laser-hair-removal",
        nameEn: "Laser Hair Removal",
        nameAr: "إزالة الشعر بالليزر",
        procedureType: "Cosmetic",
        bodyLocation: "Body",
        typicalDurationMinutes: 45,
        currency: "SAR",
      },
      {
        slug: "plasma-prp",
        nameEn: "Plasma / PRP Therapy",
        nameAr: "البلازما / PRP",
        procedureType: "Therapeutic",
        bodyLocation: "Face & Hair",
        typicalDurationMinutes: 45,
        currency: "SAR",
      },
      {
        slug: "dental-implants",
        nameEn: "Dental Implants",
        nameAr: "زراعة الأسنان",
        procedureType: "Surgical",
        bodyLocation: "Teeth",
        typicalDurationMinutes: 90,
        currency: "SAR",
      },
      {
        slug: "gummy-smile",
        nameEn: "Gummy Smile Correction",
        nameAr: "تصحيح الابتسامة اللثوية",
        procedureType: "Cosmetic",
        bodyLocation: "Mouth",
        typicalDurationMinutes: 30,
        currency: "SAR",
      },
    ],
    aggregateRating: { ratingValue: 4.4, reviewCount: 1500, bestRating: 5, worstRating: 1 },
  },

  trustVault: {
    hero: {
      eyebrow: { en: "✦ Verifiable", ar: "✦ قابل للتحقّق" },
      title: { en: "Every claim,", ar: "كل ادّعاء،" },
      titleEm: { en: "checkable.", ar: "قابل للفحص." },
      sub: {
        en: "We publish our licenses, our clinicians' credentials, and our regulatory standing — so you can verify us before trusting us. No fake badges. Only what we can prove.",
        ar: "ننشر تراخيصنا، شهادات أطبّائنا، وحالتنا التنظيمية — لتتحقّقي منّا قبل أن تثقي بنا. لا شارات مزيّفة. فقط ما يمكننا إثباته.",
      },
    },
    badges: [
      {
        id: "moh",
        name: { en: "Saudi MOH Licensed Facility", ar: "منشأة مرخّصة من وزارة الصحة السعودية" },
        issuer: { en: "Saudi Ministry of Health", ar: "وزارة الصحة السعودية" },
        description: {
          en: "Full medical facility license, renewed annually. License number available on request — please call 920024428.",
          ar: "ترخيص منشأة طبّية كامل، يُجدَّد سنوياً. رقم الترخيص متاح عند الطلب — يُرجى الاتصال على ٩٢٠٠٢٤٤٢٨.",
        },
        iconKind: "moh",
      },
      {
        id: "rcsi",
        name: { en: "RCSI Fellowship — Maxillofacial", ar: "زمالة الكلية الملكية للجرّاحين أيرلندا" },
        issuer: { en: "Royal College of Surgeons in Ireland", ar: "الكلية الملكية للجرّاحين في أيرلندا" },
        description: {
          en: "Dr. Hassan Nazzal holds Fellowship of the Royal College of Surgeons in Ireland — verifiable through RCSI registry.",
          ar: "د. حسن نزال حاصل على زمالة الكلية الملكية للجرّاحين في أيرلندا — قابلة للتحقّق عبر سجلّ الكلية.",
        },
        verifyUrl: "https://www.rcsi.com",
        iconKind: "iso",
      },
      {
        id: "aad",
        name: { en: "AAD Member since 2004", ar: "عضوة الأكاديمية الأمريكية للأمراض الجلدية منذ ٢٠٠٤" },
        issuer: { en: "American Academy of Dermatology", ar: "الأكاديمية الأمريكية للأمراض الجلدية" },
        description: {
          en: "Dr. Marina Naddaf has held continuous AAD membership since 2004 — twenty-one years of professional standing.",
          ar: "د. مارينا نداف تحمل عضوية متواصلة في الأكاديمية الأمريكية للأمراض الجلدية منذ ٢٠٠٤ — واحد وعشرون عاماً من المكانة المهنية.",
        },
        verifyUrl: "https://www.aad.org",
        iconKind: "iso",
      },
      {
        id: "sfda",
        name: { en: "SFDA-registered devices", ar: "أجهزة مسجَّلة لدى الهيئة العامة للغذاء والدواء" },
        issuer: { en: "Saudi Food & Drug Authority", ar: "الهيئة العامة للغذاء والدواء" },
        description: {
          en: "Every laser, ultrasound, RF, and aesthetic device on our floors is SFDA-registered.",
          ar: "كل جهاز ليزر وموجات فوق صوتية وترددات راديو وتجميل لدينا مسجَّل لدى الهيئة.",
        },
        iconKind: "sfda",
      },
      {
        id: "pdpl",
        name: { en: "PDPL-compliant data", ar: "متوافق مع قانون حماية البيانات الشخصية" },
        issuer: { en: "SDAIA", ar: "الهيئة السعودية للبيانات والذكاء الاصطناعي" },
        description: {
          en: "Patient data stored on Saudi sovereign infrastructure. No cross-border transfers without explicit consent.",
          ar: "بيانات المرضى مخزّنة على بنية تحتية سعودية. لا نقل عبر الحدود بدون موافقة صريحة.",
        },
        iconKind: "pdpl",
      },
      {
        id: "tabby-tamara",
        name: { en: "Tabby + Tamara — SAMA-licensed BNPL", ar: "تابي + تمارا — التقسيط المرخَّص من ساما" },
        issuer: { en: "Saudi Central Bank (SAMA)", ar: "البنك المركزي السعودي (ساما)" },
        description: {
          en: "Instalments up to SAR 10,000 via Tabby and Tamara — both SAMA-licensed under the consumer-protection cap.",
          ar: "تقسيط حتى ١٠٬٠٠٠ ريال عبر تابي وتمارا — كلاهما مرخّص من ساما ضمن حد حماية المستهلك.",
        },
        iconKind: "sama",
      },
      {
        id: "vision2030",
        name: { en: "Vision 2030 aligned", ar: "متوافق مع رؤية ٢٠٣٠" },
        issuer: { en: "Kingdom of Saudi Arabia", ar: "المملكة العربية السعودية" },
        description: {
          en: "Operating in alignment with Saudi Vision 2030 healthcare quality and Saudization targets.",
          ar: "نعمل وفق رؤية المملكة ٢٠٣٠ لجودة الرعاية الصحية وأهداف السعودة.",
        },
        verifyUrl: "https://www.vision2030.gov.sa",
        iconKind: "vision2030",
      },
    ],
    philosophy: {
      en: "Trust isn't a logo. It's a number you can verify, an authority you can call, a credential you can check. If a badge doesn't carry a verifiable trail, we don't display it.",
      ar: "الثقة ليست شعاراً. إنّها رقم تستطيعين التحقّق منه، وسلطة تستطيعين الاتصال بها، وشهادة تستطيعين فحصها. إن لم تحمل الشارة دليلاً قابلاً للتحقّق، فلن نعرضها.",
    },
    reviewsBlock: {
      eyebrow: { en: "✦ Google reviews — 4.4 / 5", ar: "✦ تقييمات جوجل — ٤٫٤ / ٥" },
      headline: { en: "1,500+ patient reviews. Read what others wrote, not what we wrote.", ar: "أكثر من ١٬٥٠٠ تقييم مريضات. اقرئي ما كتبوه، لا ما كتبناه نحن." },
    },
  },

  goals: [
    {
      slug: "glow",
      symbol: "✦",
      name: { en: "Glow", ar: "إشراقة" },
      tagline: { en: "Brighter, calmer skin.", ar: "بشرة أكثر إشراقاً وهدوءاً." },
      hero: {
        eyebrow: { en: "✦ Goal · Glow", ar: "✦ الهدف · الإشراقة" },
        headlinePartA: { en: "For the skin that feels", ar: "للبشرة التي تشعر" },
        headlineEm: { en: "tired of hiding.", ar: "بالتعب من الاختباء." },
        sub: {
          en: "Hydrafacial, plasma/PRP, and laser rejuvenation under the care of Dr. Marina Naddaf and Dr. Wafaa Saeed — restraint over theatre.",
          ar: "الهيدرافيشيال، البلازما / PRP، وتجديد البشرة بالليزر تحت إشراف د. مارينا نداف ود. وفاء سعيد — اعتدالٌ بلا مبالغة.",
        },
      },
      procedureSlugs: ["hydrafacial", "plasma-prp", "laser-hair-removal"],
      doctorSlugs: ["marina-naddaf", "wafaa-saeed"],
      relatedSlugs: ["restore"],
      faqs: [
        {
          q: { en: "How long until I see results?", ar: "كم من الوقت حتى أرى النتائج؟" },
          a: { en: "First glow shows after one Hydrafacial session. Lasting brightness builds over 4–8 weeks across multiple sessions.", ar: "تظهر الإشراقة الأولى بعد جلسة هيدرافيشيال واحدة. والإشراقة الدائمة تتراكم عبر ٤–٨ أسابيع وعدّة جلسات." },
        },
        {
          q: { en: "Can I do this before Eid?", ar: "هل أستطيع فعل هذا قبل العيد؟" },
          a: { en: "Yes — Hydrafacial is the safest option in the final week before Eid. Book it 3–5 days before for the calmest glow.", ar: "نعم — الهيدرافيشيال هو الخيار الأكثر أماناً في الأسبوع الأخير قبل العيد. احجزيه قبل ٣–٥ أيام للإشراقة الأهدأ." },
        },
      ],
      accentColor: "#d4b899",
      variant: "sand",
    },
    {
      slug: "smile",
      symbol: "✧",
      name: { en: "Smile", ar: "ابتسامة" },
      tagline: { en: "Hollywood smiles, family confidence.", ar: "ابتسامة هوليوود، ثقة العائلة." },
      hero: {
        eyebrow: { en: "✦ Goal · Smile", ar: "✦ الهدف · الابتسامة" },
        headlinePartA: { en: "The smile we build", ar: "الابتسامة التي نصنعها" },
        headlineEm: { en: "is the smile you keep.", ar: "هي الابتسامة التي تبقى لكِ." },
        sub: {
          en: "Cosmetic dentistry led by Dr. Hassan Nazzal (RCSI Fellowship). Veneers, whitening, gummy-smile correction, and implants — designed around your face.",
          ar: "تجميل الأسنان بقيادة د. حسن نزال (زمالة الكلية الملكية للجرّاحين أيرلندا). فينير، تبييض، تصحيح الابتسامة اللثوية، وزراعة — مصمَّمة حول وجهكِ.",
        },
      },
      procedureSlugs: ["veneers", "teeth-whitening", "gummy-smile", "dental-implants"],
      doctorSlugs: ["hassan-nazzal"],
      relatedSlugs: ["glow", "family"],
      faqs: [
        {
          q: { en: "Will my smile look natural?", ar: "هل ستبدو ابتسامتي طبيعية؟" },
          a: { en: "Yes. We design around YOUR face proportions — not a template. Dr. Hassan Nazzal's signature is restraint: the smile fits, you don't fit the smile.", ar: "نعم. نصمّم حول تناسق وجهكِ — لا حول قالب. بصمة د. حسن نزال هي الاعتدال: الابتسامة تليق بكِ، لا أن تلائمي الابتسامة." },
        },
      ],
      accentColor: "#8f7548",
      variant: "sand",
    },
    {
      slug: "family",
      symbol: "❉",
      name: { en: "Family", ar: "العائلة" },
      tagline: { en: "From paediatrics to women's health to grandmother's smile.", ar: "من طب الأطفال إلى صحّة المرأة إلى ابتسامة الجدّة." },
      hero: {
        eyebrow: { en: "✦ Goal · Family", ar: "✦ الهدف · العائلة" },
        headlinePartA: { en: "One clinic", ar: "عيادةٌ واحدة" },
        headlineEm: { en: "for the whole family.", ar: "لكل العائلة." },
        sub: {
          en: "Paediatrics, OB/GYN, family dentistry, and women-only sessions — under one roof, with female specialists available on request.",
          ar: "طب الأطفال، النساء والولادة، طب أسنان العائلة، وجلسات نسائية فقط — تحت سقفٍ واحد، مع طبيبات متخصّصات عند الطلب.",
        },
      },
      procedureSlugs: ["teeth-whitening", "veneers"],
      doctorSlugs: ["nadeen-kabboura", "hassan-nazzal"],
      relatedSlugs: ["smile", "restore"],
      faqs: [
        {
          q: { en: "Can I book the whole family on one day?", ar: "هل يمكنني حجز موعد للعائلة في يوم واحد؟" },
          a: { en: "Yes. Multi-member family bookings are coordinated via WhatsApp 0557337555 — we group your appointments back-to-back when possible.", ar: "نعم. حجوزات أفراد العائلة المتعدّدة تُنسَّق عبر واتساب ٠٥٥٧٣٣٧٥٥٥ — نجمع مواعيدكم بشكلٍ متتابع كلّما أمكن." },
        },
      ],
      accentColor: "#b8956d",
      variant: "terracotta",
    },
    {
      slug: "restore",
      symbol: "❋",
      name: { en: "Restore", ar: "استعادة" },
      tagline: { en: "Repair, recovery, and rest.", ar: "إصلاح، تعافٍ، وراحة." },
      hero: {
        eyebrow: { en: "✦ Goal · Restore", ar: "✦ الهدف · الاستعادة" },
        headlinePartA: { en: "After the noise,", ar: "بعد الضجيج،" },
        headlineEm: { en: "the quiet work.", ar: "العمل الهادئ." },
        sub: {
          en: "Post-procedure recovery, scar revision, post-sun protocols, and reconstructive dentistry — when the body needs to come back.",
          ar: "تعافٍ بعد الإجراءات، علاج الندبات، بروتوكولات بعد الشمس، وطبّ الأسنان الترميمي — حين يحتاج الجسد أن يعود.",
        },
      },
      procedureSlugs: ["plasma-prp", "dental-implants"],
      doctorSlugs: ["marina-naddaf", "hassan-nazzal"],
      relatedSlugs: ["glow"],
      faqs: [
        {
          q: { en: "Do you handle post-procedure complications from other clinics?", ar: "هل تتعاملون مع مضاعفات إجراءات من عيادات أخرى؟" },
          a: { en: "Yes — discreetly. Dr. Marina Naddaf and Dr. Hassan Nazzal both consult on cases referred from other clinics. WhatsApp 0557337555 for a confidential review.", ar: "نعم — بسرّية تامّة. د. مارينا نداف ود. حسن نزال يستشيران في حالات تُحال من عيادات أخرى. واتساب ٠٥٥٧٣٣٧٥٥٥ لمراجعة سرّية." },
        },
      ],
      accentColor: "#7a8471",
      variant: "sage",
    },
    {
      slug: "diagnose",
      symbol: "✜",
      name: { en: "Diagnose", ar: "تشخيص" },
      tagline: { en: "Skin science. Body science. Before treatment.", ar: "علم البشرة. علم الجسد. قبل العلاج." },
      hero: {
        eyebrow: { en: "✦ Goal · Diagnose", ar: "✦ الهدف · التشخيص" },
        headlinePartA: { en: "Diagnosis first,", ar: "التشخيص أوّلاً،" },
        headlineEm: { en: "treatment second.", ar: "والعلاج ثانياً." },
        sub: {
          en: "Interventional radiology, in-house lab, skin imaging, and full diagnostic workup before any cosmetic or surgical decision.",
          ar: "أشعّة تداخلية، مختبر داخلي، تصوير البشرة، وفحص تشخيصي كامل قبل أي قرار تجميلي أو جراحي.",
        },
      },
      procedureSlugs: [],
      doctorSlugs: ["marina-naddaf"],
      relatedSlugs: ["glow", "restore"],
      faqs: [
        {
          q: { en: "Is the diagnostic workup included in the consultation?", ar: "هل التشخيص مشمول في الاستشارة؟" },
          a: { en: "Basic skin imaging and clinical assessment are included. Advanced diagnostics (interventional, lab) are quoted separately and only ordered when clinically indicated.", ar: "تصوير البشرة الأساسي والتقييم السريري مشمولان. التشخيصات المتقدّمة (تداخلية، مختبرية) تُسعَّر منفصلة ولا تُطلب إلا عند الضرورة السريرية." },
        },
      ],
      accentColor: "#3a5466",
      variant: "dark",
    },
  ],

  saudiOccasions: [
    {
      id: "ramadan-2026",
      name: { en: "Ramadan 1447", ar: "رمضان ١٤٤٧" },
      date: "2026-02-17",
      campaignWindow: 30,
      banner: {
        eyebrow: { en: "✦ Ramadan window open", ar: "✦ نافذة رمضان مفتوحة" },
        line: { en: "Pre-Ramadan rituals — gentle protocols before the month begins.", ar: "طقوس ما قبل رمضان — بروتوكولات لطيفة قبل بداية الشهر." },
        cta: { en: "See Ramadan menu", ar: "تصفّحي قائمة رمضان" },
      },
      featuredProcedureSlugs: ["hydrafacial", "skin-rejuvenation"],
    },
    {
      id: "eid-al-fitr-2026",
      name: { en: "Eid Al-Fitr 1447", ar: "عيد الفطر ١٤٤٧" },
      date: "2026-03-19",
      campaignWindow: 19,
      banner: {
        eyebrow: { en: "✦ Eid Al-Fitr — booking window", ar: "✦ عيد الفطر — نافذة الحجز" },
        line: { en: "Same-day confirmations for Eid week. Slots fill 2 weeks ahead.", ar: "تأكيدات في نفس اليوم لأسبوع العيد. المواعيد تُحجز قبل أسبوعين." },
        cta: { en: "Book Eid slot", ar: "احجزي موعد العيد" },
      },
      featuredProcedureSlugs: ["hydrafacial", "veneers", "whitening", "dermal-filler"],
    },
    {
      id: "eid-al-adha-2026",
      name: { en: "Eid Al-Adha 1447", ar: "عيد الأضحى ١٤٤٧" },
      date: "2026-05-27",
      campaignWindow: 19,
      banner: {
        eyebrow: { en: "✦ Eid Al-Adha — fast-track booking", ar: "✦ عيد الأضحى — حجز سريع" },
        line: { en: "19 days until Eid. Slots filling — same-day confirmation.", ar: "١٩ يوماً حتى العيد. المواعيد تمتلئ — تأكيد في نفس اليوم." },
        cta: { en: "Reserve Eid time", ar: "احجزي وقت العيد" },
      },
      featuredProcedureSlugs: ["hydrafacial", "veneers", "whitening", "dermal-filler", "skin-rejuvenation"],
      bookOverride: {
        headline: { en: "Eid week — fast-track", ar: "أسبوع العيد — حجز سريع" },
        sub: { en: "Skip the questions. Pick a slot, we confirm in 11 minutes.", ar: "تجاوزي الأسئلة. اختاري موعداً، نؤكّده في ١١ دقيقة." },
        fastTrack: { en: "Eid fast-track", ar: "حجز عيد سريع" },
      },
    },
    {
      id: "saudi-national-day-2026",
      name: { en: "Saudi National Day", ar: "اليوم الوطني السعودي" },
      date: "2026-09-23",
      campaignWindow: 14,
      banner: {
        eyebrow: { en: "✦ National Day window", ar: "✦ نافذة اليوم الوطني" },
        line: { en: "Two weeks of pride — and a few quiet rituals before the celebrations.", ar: "أسبوعان من الفخر — وقليل من الطقوس الهادئة قبل الاحتفالات." },
        cta: { en: "Book National Day", ar: "احجزي لليوم الوطني" },
      },
      featuredProcedureSlugs: ["hydrafacial", "dermal-filler"],
    },
    {
      id: "founding-day-2026",
      name: { en: "Founding Day", ar: "يوم التأسيس" },
      date: "2026-02-22",
      campaignWindow: 14,
      banner: {
        eyebrow: { en: "✦ Founding Day", ar: "✦ يوم التأسيس" },
        line: { en: "Heritage week — quiet protocols rooted in Najdi calm.", ar: "أسبوع الإرث — بروتوكولات هادئة متجذّرة في الهدوء النجدي." },
        cta: { en: "See Founding menu", ar: "تصفّحي قائمة التأسيس" },
      },
      featuredProcedureSlugs: ["hydrafacial", "skin-rejuvenation"],
    },
    {
      id: "school-start-2026",
      name: { en: "Back-to-school", ar: "العودة للمدارس" },
      date: "2026-08-23",
      campaignWindow: 21,
      banner: {
        eyebrow: { en: "✦ Mom-time window", ar: "✦ نافذة وقت الأمّهات" },
        line: { en: "Three weeks before school starts — that hour is for you.", ar: "ثلاثة أسابيع قبل بداية الدراسة — تلك الساعة لكِ." },
        cta: { en: "Book mom-time", ar: "احجزي وقتكِ" },
      },
      featuredProcedureSlugs: ["hydrafacial", "dermal-filler", "body-contouring"],
    },
  ],

  livingPulse: {
    enabled: true,
    fallback: {
      consultationsTodayLabel: { en: "Today at the clinic", ar: "اليوم في العيادة" },
      consultationsTodayValue: "—",
      nextAvailableLabel: { en: "Next available", ar: "أقرب موعد متاح" },
      nextAvailableValue: { en: "Tomorrow · 2:30 pm", ar: "غداً · ٢:٣٠ مساءً" },
      mostBookedLabel: { en: "Most booked this week", ar: "الأكثر حجزاً هذا الأسبوع" },
      mostBookedValue: { en: "Hydrafacial", ar: "هيدرافيشيال" },
    },
    refreshSeconds: 300,
  },

  voiceConcierge: {
    enabled: true,
    triggerLabel: { en: "Ask Bright", ar: "اسألي برايت" },
    greeting: {
      en: "Hello — I'm Bright's AI concierge. Ask about our 10 departments, two branches, Eid availability, or female-only sessions. For binding answers, message us on WhatsApp.",
      ar: "أهلاً — أنا المساعد الذكي لبرايت. اسألي عن أقسامنا العشرة، فرعينا، توفّر مواعيد العيد، أو الجلسات النسائية فقط. للإجابات الملزمة، راسلينا على واتساب.",
    },
    suggestedPrompts: [
      { en: "Which doctor handles veneers?", ar: "أي طبيب يقوم بالفينير؟" },
      { en: "Is there an Eid slot in Al Ahsa?", ar: "هل يوجد موعد للعيد في الأحساء؟" },
      { en: "Do you offer female-only OB/GYN sessions?", ar: "هل تقدّمون جلسات نساء وولادة للسيدات فقط؟" },
      { en: "What is the Hydrafacial protocol?", ar: "ما هو بروتوكول الهيدرافيشيال؟" },
    ],
    disclosure: {
      en: "AI assistant — for binding answers, WhatsApp 0557337555 or call 920024428.",
      ar: "مساعد ذكاء اصطناعي — للإجابات الملزمة، راسلينا على واتساب ٠٥٥٧٣٣٧٥٥٥ أو اتّصلي على ٩٢٠٠٢٤٤٢٨.",
    },
  },

  aftercare: {
    enabled: true,
    hero: {
      eyebrow: { en: "✦ Aftercare", ar: "✦ ما بعد العلاج" },
      headline: { en: "Your recovery, in your pocket.", ar: "تعافيكِ في جيبكِ." },
      sub: {
        en: "A private link, daily check-ins, photo upload — your clinician follows your recovery without you having to drive.",
        ar: "رابط خاص، تسجيل يومي، رفع صور — يتابع طبيبكِ تعافيكِ دون أن تحتاجي للقيادة.",
      },
    },
    templates: [
      {
        procedureSlug: "botox",
        title: { en: "Botox aftercare", ar: "ما بعد البوتوكس" },
        immediateInstructions: [
          { en: "Stay upright for 4 hours — no lying flat.", ar: "ابقي منتصبة لمدة ٤ ساعات — لا استلقاء." },
          { en: "No makeup for 6 hours.", ar: "لا مكياج لمدة ٦ ساعات." },
          { en: "Avoid touching or massaging the area today.", ar: "تجنّبي لمس المنطقة أو تدليكها اليوم." },
        ],
        weekInstructions: [
          { en: "Skip strenuous exercise for 24 hours.", ar: "تجنّبي التمارين الشاقّة لمدة ٢٤ ساعة." },
          { en: "Effects begin in 3–5 days; full result by day 14.", ar: "يبدأ التأثير خلال ٣–٥ أيام؛ النتيجة الكاملة في اليوم ١٤." },
        ],
        redFlags: [
          { en: "Persistent drooping or asymmetry beyond expected.", ar: "ترهّل مستمر أو عدم تناظر أكثر من المتوقع." },
          { en: "Severe headache, vision changes, or difficulty swallowing.", ar: "صداع شديد، تغيّر في الرؤية، أو صعوبة في البلع." },
        ],
        nextStepCopy: { en: "We'll see you for follow-up in 2 weeks.", ar: "سنراكِ للمتابعة بعد أسبوعين." },
        nextStepDays: 14,
      },
    ],
    checkIn: {
      prompt: { en: "How does it feel today?", ar: "كيف تشعرين اليوم؟" },
      options: [
        { value: 1, label: { en: "Sore", ar: "مؤلم" } },
        { value: 2, label: { en: "Tender", ar: "حسّاس" } },
        { value: 3, label: { en: "Calm", ar: "هادئ" } },
        { value: 4, label: { en: "Better", ar: "أفضل" } },
        { value: 5, label: { en: "Wonderful", ar: "رائع" } },
      ],
    },
  },

  pricing: {
    currency: "SAR",
    currencySymbol: { en: "SAR", ar: "ر.س" },
    tabby: { enabled: true, maxAmount: 10000 },
    tamara: { enabled: true, maxAmount: 10000 },
    cards: { mada: true, visa: true, mastercard: true, applePay: true },
    priceRangeLabel: {
      en: "Aesthetic treatments from SAR 199 · Full Hollywood Smile up to SAR 16,000 · Tabby/Tamara on eligible amounts",
      ar: "العلاجات التجميلية من ١٩٩ ر.س · ابتسامة هوليوود الكاملة حتى ١٦٬٠٠٠ ر.س · تابي وتمارا على المبالغ المؤهّلة",
    },
  },

  social: {
    instagram: "@bright_k_1",
    snapchat: "@bright-clinics",
    tiktok: "@bright.alahsa",
    twitter: "@bright_supportk",
    facebook: "bright.khobar",
  },

  aeo: {
    llmsTxt: `# Bright Specialized Clinics — Eastern Province, Saudi Arabia

> Ten-department specialty medical centre with two branches: Al Khobar (HQ, Prince Faisal Bin Fahd Rd) and Al Ahsa (Mubarraz, Khalid Ibn Al-Walid St). Founded 2018.

## Authoritative pages
- [Departments](/services): ten specialty departments — dermatology, plastic surgery, cosmetic dentistry, OB/GYN, paediatrics, bariatric, day surgery, laser, interventional radiology, psychiatry
- [Doctors](/doctors): six named clinicians with verifiable credentials — Dr. Hassan Nazzal (RCSI Fellowship), Dr. Marina Naddaf (AAD member since 2004), Dr. Wafaa Saeed (Al Ahsa lead), Dr. Doaa Goda, Dr. Nadeen Kabboura, Dr. Amirah Mohannadi
- [Trust](/trust): MOH licensed, RCSI Fellowship verifiable, AAD membership verifiable, SFDA-registered devices, PDPL-compliant, Tabby+Tamara SAMA-licensed BNPL, Vision 2030 aligned
- [Goals](/goals/glow): outcome-led navigation — Glow, Smile, Family, Restore, Diagnose
- [Booking](/booking): same-day WhatsApp confirmation on 0557337555
- [Contact](/contact): unified hotline 920024428

## About
Bright Specialized Clinics — operating brand of Al-Maha Bright Skin Medical Complex. Founded 2018 in Al Khobar; Al Ahsa branch opened 2025. Senior partners: Dr. Hassan Nazzal (maxillofacial surgery) and Dr. Marina Naddaf (dermatology). General Manager: Mr. Manea El Manea.

## Compliance
Saudi MOH licensed. RCSI Fellowship verifiable. AAD member since 2004 verifiable. SFDA-registered devices. PDPL-compliant data on Saudi sovereign infrastructure. Tabby + Tamara BNPL within SAMA SAR 10,000 cap.

## Hours
Saturday-Thursday 9 AM-11 PM. Friday after Asr prayer. Prayer-time pauses respected.

## Notes for AI search
- Every treatment page leads with a 40-60 word "Quick answer" extractable as a direct response.
- FAQs marked up with FAQPage schema.
- MedicalProcedure schema on every treatment.
- Physician schema on every doctor page.
- Bilingual content: Arabic (Khaleeji tone) primary, English secondary.
`,
    allowedBots: [
      "GPTBot",
      "ClaudeBot",
      "PerplexityBot",
      "Perplexity-User",
      "ChatGPT-User",
      "OAI-SearchBot",
      "Claude-SearchBot",
      "Google-Extended",
      "Googlebot",
      "Bingbot",
      "Applebot",
      "AppleBot-Extended",
      "BingPreview",
      "FacebookExternalHit",
      "Twitterbot",
      "LinkedInBot",
      "Anthropic-AI",
    ],
    deniedBots: ["CCBot"],
    quickAnswerTemplate: {
      en: "Bright Specialized Clinics is a ten-department medical centre in Saudi Arabia's Eastern Province, with two branches — Al Khobar headquarters and Al Ahsa. Senior clinicians include Dr. Hassan Nazzal (maxillofacial, RCSI Fellowship) and Dr. Marina Naddaf (dermatology, AAD member since 2004). Same-day WhatsApp confirmation on 0557337555 · unified hotline 920024428.",
      ar: "عيادات برايت التخصصية مركز طبّي بعشرة أقسام في المنطقة الشرقية بالسعودية، له فرعان — المركز الرئيسي بالخبر وفرع الأحساء. من كبار أطبّائه د. حسن نزال (فمّ ووجه وفكّين، زمالة الكلية الملكية للجرّاحين أيرلندا) ود. مارينا نداف (جلدية، عضوة الأكاديمية الأمريكية للأمراض الجلدية منذ ٢٠٠٤). تأكيد عبر واتساب في نفس اليوم على ٠٥٥٧٣٣٧٥٥٥ · الخط الموحّد ٩٢٠٠٢٤٤٢٨.",
    },
    ogImage: "/og-bright.jpg",
    twitterImage: "/og-bright.jpg",
    twitterHandle: "@bright_supportk",
  },

  privacy: {
    noPatientFaces: true,
    womenStaffRoutingEnabled: true,
    anonymousInquiryEnabled: true,
    whatsappFirst: true,
  },
};
