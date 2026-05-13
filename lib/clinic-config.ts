/**
 * CLINIC CONFIG — single source of truth.
 * Edit per clinic. Bilingual (EN/AR). All copy is generic placeholder.
 * To deploy: update brand, contact, and content fields below.
 */

export type Bilingual = { en: string; ar: string };
export type PortraitVariant = "terracotta" | "sand" | "sage" | "dark";

export interface ClinicConfig {
  brand: { name: Bilingual; tagline: Bilingual; established: number };
  contact: {
    phone: string;
    whatsapp: string;
    whatsappLink: string;
    email: string;
    address: Bilingual;
    hours: Bilingual;
    parking?: Bilingual;
  };
  seo: { title: Bilingual; description: Bilingual; keywords: string[] };
  navigation: { items: { key: string; label: Bilingual; href: string }[]; bookCta: Bilingual };
  footer: {
    tagline: Bilingual;
    chips: Bilingual[];
    columns: { title: Bilingual; links: { label: Bilingual; href: string }[] }[];
    colophon: Bilingual;
  };
  // ── Homepage sections ─────────────────────────────────────────────────────
  hero: {
    eyebrow: Bilingual;
    headlinePartA: Bilingual;
    headlineEm: Bilingual;
    headlinePartB?: Bilingual;
    leadItalic: Bilingual;
    lead: Bilingual;
    primaryCta: Bilingual;
    secondaryCta: Bilingual;
    pullQuote: Bilingual;
    pullQuoteAttribution: Bilingual;
    stats: { value: Bilingual; label: Bilingual }[];
  };
  marqueeStrip: { line1: Bilingual; line2: Bilingual };
  founder: {
    chapterRoman: string;
    chapterTitle: Bilingual;
    headlinePartA: Bilingual;
    headlineEm: Bilingual;
    paragraphs: Bilingual[];
    name: string;
    role: Bilingual;
    cta: Bilingual;
  };
  services: {
    eyebrow: Bilingual;
    headlinePartA: Bilingual;
    headlineEm: Bilingual;
    description: Bilingual;
    items: { num: string; name: Bilingual; description: Bilingual; variant: PortraitVariant }[];
  };
  tailoredCare: {
    chapterRoman: string;
    chapterTitle: Bilingual;
    headlinePartA: Bilingual;
    headlineEm: Bilingual;
    description: Bilingual;
    points: { num: string; label: Bilingual }[];
    cta: Bilingual;
    badge: Bilingual;
  };
  beforeAfter: {
    chapterRoman: string;
    chapterTitle: Bilingual;
    headlinePartA: Bilingual;
    headlineEm: Bilingual;
    description: Bilingual;
    cta: Bilingual;
    beforeLabel: Bilingual;
    afterLabel: Bilingual;
  };
  reviews: {
    eyebrow: Bilingual;
    pullQuote: Bilingual;
    items: { quote: Bilingual; name: Bilingual; role: Bilingual; variant: PortraitVariant }[];
    cta: Bilingual;
  };
  team: {
    eyebrow: Bilingual;
    headlinePartA: Bilingual;
    headlineEm: Bilingual;
    items: { name: string; tag: Bilingual; variant: PortraitVariant }[];
  };
  bookCta: {
    eyebrow: Bilingual;
    headline: Bilingual;
    description: Bilingual;
    primary: Bilingual;
    secondary: Bilingual;
  };
  faq: {
    eyebrow: Bilingual;
    headlinePartA: Bilingual;
    headlineEm: Bilingual;
    description: Bilingual;
    cta: Bilingual;
    items: { q: Bilingual; a: Bilingual }[];
  };
  journal: {
    eyebrow: Bilingual;
    headline: Bilingual;
    description: Bilingual;
    items: { tag: Bilingual; title: Bilingual; date: Bilingual; variant: PortraitVariant }[];
  };
  // ── Inner pages ───────────────────────────────────────────────────────────
  departmentsPage: {
    hero: { roman: string; eyebrow: Bilingual; title: Bilingual; titleEm: Bilingual; sub: Bilingual };
    items: {
      num: string;
      name: Bilingual;
      sub: Bilingual;
      blurb: Bilingual;
      treatments: Bilingual[];
      pricing: Bilingual;
      variant: PortraitVariant;
    }[];
    equipment: { name: string; description: Bilingual }[];
    bookCta: { headline: Bilingual; description: Bilingual };
  };
  doctorsPage: {
    hero: { roman: string; eyebrow: Bilingual; title: Bilingual; titleEm: Bilingual; sub: Bilingual };
    items: {
      name: string;
      role: Bilingual;
      bio: Bilingual;
      credentials: string[];
      variant: PortraitVariant;
    }[];
  };
  aboutPage: {
    hero: { roman: string; eyebrow: Bilingual; title: Bilingual; titleEm: Bilingual; sub: Bilingual };
    chapters: { n: string; title: Bilingual; body: Bilingual; variant: PortraitVariant }[];
    commitments: { n: string; title: Bilingual; description: Bilingual }[];
    location: { eyebrow: Bilingual; headlinePartA: Bilingual; headlineEm: Bilingual; description: Bilingual };
  };
  galleryPage: {
    hero: { roman: string; eyebrow: Bilingual; title: Bilingual; titleEm: Bilingual; sub: Bilingual };
    categories: { id: string; label: Bilingual }[];
    cases: { id: number; cat: string; treatment: Bilingual; weeks: number; before: PortraitVariant; after: PortraitVariant; name: string }[];
    disclaimer: Bilingual;
  };
  reviewsPage: {
    hero: { roman: string; eyebrow: Bilingual; title: Bilingual; titleEm: Bilingual; sub: Bilingual };
    rating: string;
    reviewCount: Bilingual;
    items: { shortQuote: Bilingual; longQuote: Bilingual; name: string; date: Bilingual; variant: PortraitVariant; stars: number }[];
  };
  journalPage: {
    hero: { roman: string; eyebrow: Bilingual; title: Bilingual; titleEm: Bilingual; sub: Bilingual };
    featured: { tag: Bilingual; title: Bilingual; excerpt: Bilingual; author: string; date: Bilingual; variant: PortraitVariant };
    posts: { tag: Bilingual; title: Bilingual; author: string; date: Bilingual; variant: PortraitVariant }[];
    newsletter: { headline: Bilingual; description: Bilingual; placeholder: Bilingual; cta: Bilingual };
  };
  bookingPage: {
    hero: { roman: string; eyebrow: Bilingual; title: Bilingual; titleEm: Bilingual; sub: Bilingual };
    services: { id: string; name: Bilingual; duration: Bilingual }[];
    slots: string[];
    steps: { choose: Bilingual; when: Bilingual; details: Bilingual; confirmed: Bilingual }[];
    labels: { name: Bilingual; phone: Bilingual; email: Bilingual; note: Bilingual; back: Bilingual; continue: Bilingual; confirm: Bilingual; bookAnother: Bilingual; namePrompt: Bilingual; emailPrompt: Bilingual; notePrompt: Bilingual };
    confirmed: { title: Bilingual; body: Bilingual };
    contact: { chapter: string; title: Bilingual; quote: Bilingual };
  };
}

export const clinicConfig: ClinicConfig = {
  brand: {
    name: { en: "Bright Specialized Clinics", ar: "عيادات برايت التخصصية" },
    tagline: { en: "Excellence is our title.", ar: "للتميّز عنوان." },
    established: 2018,
  },
  contact: {
    phone: "0502022292",
    whatsapp: "+966 55 733 7555",
    whatsappLink: "https://wa.me/966557337555",
    email: "info@brightclinics.sa",
    address: { en: "Khalid Ibn Al-Walid Street, Al Mubarraz, Al Ahsa", ar: "شارع خالد بن الوليد، المبرّز، الأحساء" },
    hours: { en: "Sat – Thu · 9 AM – 11 PM · Friday after Asr prayer", ar: "السبت – الخميس · ٩ صباحاً – ١١ مساءً · الجمعة بعد صلاة العصر" },
    parking: { en: "Dedicated patient parking on site", ar: "مواقف خاصة بالمراجعين داخل المجمّع" },
  },
  seo: {
    title: { en: "Bright Specialized Clinics — Al Ahsa, Saudi Arabia", ar: "عيادات برايت التخصصية — الأحساء، السعودية" },
    description: {
      en: "Bright comes to Al Ahsa — specialty dermatology, aesthetic care, cosmetic dentistry, OB/GYN, and more on Khalid Ibn Al-Walid Street in Mubarraz. The Bright standard, closer to Hofuf and Mubarraz families. Led by Dr. Wafaa Saeed.",
      ar: "برايت تأتي إلى الأحساء — جلدية تخصّصية، رعاية تجميلية، أسنان، نساء وولادة، وأكثر على شارع خالد بن الوليد بالمبرّز. معيار برايت، أقرب لعوائل الهفوف والمبرّز. بقيادة د. وفاء سعيد.",
    },
    keywords: ["عيادات برايت الأحساء", "Bright Al Ahsa", "الأحساء", "Al Ahsa clinic", "المبرز", "Mubarraz medical", "تجميل الأحساء", "Al Ahsa aesthetic", "Dr Wafaa Saeed", "Khalid Ibn Al-Walid Mubarraz", "جلدية الأحساء", "dermatology Al Ahsa"],
  },
  navigation: {
    items: [
      { key: "services", label: { en: "Services", ar: "الخدمات" }, href: "/services" },
      { key: "doctors", label: { en: "Dr. Wafaa", ar: "د. وفاء" }, href: "/doctors" },
      { key: "gallery", label: { en: "Before & After", ar: "قبل وبعد" }, href: "/gallery" },
      { key: "trust", label: { en: "Trust", ar: "موثوقية" }, href: "/trust" },
      { key: "journal", label: { en: "Journal", ar: "المجلّة" }, href: "/journal" },
      { key: "contact", label: { en: "Contact", ar: "تواصل" }, href: "/booking" },
    ],
    bookCta: { en: "Book on WhatsApp", ar: "احجزي عبر واتساب" },
  },
  footer: {
    tagline: {
      en: "Female-led specialty clinic on Khalid Ibn Al-Walid Street, Mubarraz. Bright Al Ahsa — opened January 2025. Women-only sessions on request.",
      ar: "عيادة تخصّصية بقيادة طبيبة على شارع خالد بن الوليد بالمبرّز. برايت الأحساء — افتُتح في يناير ٢٠٢٥. جلسات نسائية فقط عند الطلب.",
    },
    chips: [
      { en: "MOH Licensed", ar: "مرخّصة من وزارة الصحة" },
      { en: "Al Ahsa · Mubarraz", ar: "الأحساء · المبرّز" },
    ],
    columns: [
      {
        title: { en: "Departments", ar: "الأقسام" },
        links: [
          { label: { en: "Dermatology & Laser", ar: "الجلدية والليزر" }, href: "/services" },
          { label: { en: "Plastic Surgery", ar: "جراحة التجميل" }, href: "/services" },
          { label: { en: "Cosmetic Dentistry", ar: "تجميل الأسنان" }, href: "/services" },
          { label: { en: "OB/GYN", ar: "النساء والولادة" }, href: "/services" },
          { label: { en: "Paediatrics", ar: "طب الأطفال" }, href: "/services" },
          { label: { en: "Bariatric Surgery", ar: "جراحة السمنة" }, href: "/services" },
        ],
      },
      {
        title: { en: "The Clinic", ar: "العيادة" },
        links: [
          { label: { en: "Branches", ar: "الفروع" }, href: "/about" },
          { label: { en: "Our Clinicians", ar: "أطبّاؤنا" }, href: "/doctors" },
          { label: { en: "Trust & Credentials", ar: "موثوقية وشهادات" }, href: "/trust" },
          { label: { en: "Journal", ar: "المجلّة" }, href: "/journal" },
        ],
      },
      {
        title: { en: "Reach Us", ar: "تواصل" },
        links: [
          { label: { en: "Book on WhatsApp", ar: "احجزي عبر واتساب" }, href: "/booking" },
          { label: { en: "Visit · Al Mubarraz", ar: "زورونا · المبرّز" }, href: "/about" },
          { label: { en: "Direct 0502022292", ar: "اتصل ٠٥٠٢٠٢٢٢٩٢" }, href: "tel:+966502022292" },
          { label: { en: "WhatsApp 0557337555", ar: "واتساب ٠٥٥٧٣٣٧٥٥٥" }, href: "https://wa.me/966557337555" },
        ],
      },
    ],
    colophon: {
      en: "Bright Specialized Clinics — Al-Maha Bright Skin Medical Complex.",
      ar: "عيادات برايت التخصصية — مجمّع الماها برايت الطبي للبشرة.",
    },
  },

  // ══ HOMEPAGE SECTIONS ═══════════════════════════════════════════════════
  hero: {
    eyebrow: { en: "✦ Al Ahsa · Mubarraz · Bright Specialized Clinics", ar: "✦ الأحساء · المبرّز · عيادات برايت التخصصية" },
    headlinePartA: { en: "The Mubarraz clinic", ar: "العيادة التي" },
    headlineEm: { en: "women trust first.", ar: "اختارتها سيدات المبرّز." },
    headlinePartB: { en: "", ar: "" },
    leadItalic: { en: "Female-led. Discreet. Closer to home.", ar: "بقيادة طبيبة. سرّيّة. أقرب لكِ." },
    lead: {
      en: "Specialty dermatology, aesthetic care, cosmetic dentistry, OB/GYN, laser — under Dr. Wafaa Saeed on Khalid Ibn Al-Walid Street, Mubarraz. Women-only sessions on request. Same-day WhatsApp confirmation.",
      ar: "جلدية تخصّصية، رعاية تجميلية، تجميل الأسنان، نساء وولادة، ليزر — تحت إشراف د. وفاء سعيد على شارع خالد بن الوليد بالمبرّز. جلسات نسائية فقط عند الطلب. تأكيد واتساب في نفس اليوم.",
    },
    primaryCta: { en: "Book on WhatsApp", ar: "احجزي عبر واتساب" },
    secondaryCta: { en: "Meet Dr. Wafaa", ar: "تعرّفي على د. وفاء" },
    pullQuote: { en: "\"She listened. She explained three options. Then she said the simplest one suited me best.\"", ar: "«أصغت. شرحت ثلاث خيارات. ثم قالت إنّ الأبسط هو الأنسب لي.»" },
    pullQuoteAttribution: { en: "Patient · Mubarraz", ar: "مريضة · المبرّز" },
    stats: [
      { value: { en: "Female-led", ar: "بقيادة طبيبة" }, label: { en: "Egyptian Fellowship Dermatology", ar: "زمالة مصرية في الجلدية" } },
      { value: { en: "10+ services", ar: "+١٠ خدمات" }, label: { en: "Under one quiet roof", ar: "تحت سقفٍ هادئٍ واحد" } },
      { value: { en: "Same-day", ar: "في يومكِ" }, label: { en: "WhatsApp confirmation", ar: "تأكيد واتساب" } },
    ],
  },
  marqueeStrip: {
    line1: { en: "Dermatology · Aesthetic Care · Cosmetic Dentistry · OB/GYN · Laser · Family Health", ar: "الجلدية · الرعاية التجميلية · الأسنان · النساء والولادة · الليزر · صحّة العائلة" },
    line2: { en: "Khalid Ibn Al-Walid St · Mubarraz · Al Ahsa · Direct 0502022292 · WhatsApp 0557337555", ar: "شارع خالد بن الوليد · المبرّز · الأحساء · المباشر ٠٥٠٢٠٢٢٢٩٢ · واتساب ٠٥٥٧٣٣٧٥٥٥" },
  },
  founder: {
    chapterRoman: "II",
    chapterTitle: { en: "Leadership", ar: "القيادة" },
    headlinePartA: { en: "An operation built", ar: "مؤسّسةٌ بُنيت" },
    headlineEm: { en: "around the patient.", ar: "حول المريضة." },
    paragraphs: [
      {
        en: "Bright Al Ahsa was opened in January 2025 on Khalid Ibn Al-Walid Street in Mubarraz with a single principle: treat every patient like the only patient. The team works from the same operating principle that earned 1,500+ verified patient reviews across the Eastern Province — quiet rooms, named clinicians, written treatment plans, no rushed visits.",
        ar: "افتُتح برايت الأحساء في يناير ٢٠٢٥ على شارع خالد بن الوليد بالمبرّز بمبدأٍ واحد: عاملي كل مريضة كأنّها المريضة الوحيدة. الفريق يعمل بنفس المبدأ الذي حصد أكثر من ١٬٥٠٠ تقييم موثَّق من المريضات في المنطقة الشرقية — غرفٌ هادئة، أطبّاء بأسمائهم، خطط علاج مكتوبة، لا زيارات معجَّلة.",
      },
      {
        en: "Dr. Wafaa Saeed leads our day-to-day clinical practice. Egyptian Fellowship-certified in dermatology. Known by her patients for one habit above all others — she listens before she prescribes, and writes the plan down before you leave the room.",
        ar: "د. وفاء سعيد تقود ممارستنا السريرية اليومية. حاصلة على زمالة مصرية في الأمراض الجلدية. تعرفها مريضاتها بعادةٍ واحدة فوق كل شيء — تُصغي قبل أن تَصِف، وتكتب الخطّة قبل أن تغادري الغرفة.",
      },
    ],
    name: "Dr. Wafaa Saeed",
    role: { en: "Lead Dermatologist · Bright Al Ahsa", ar: "رئيسة الجلدية · برايت الأحساء" },
    cta: { en: "About our clinic", ar: "عن العيادة" },
  },
  services: {
    eyebrow: { en: "✦ Ten departments. One promise.", ar: "✦ عشرة أقسام. وعدٌ واحد." },
    headlinePartA: { en: "Everything you need,", ar: "كلّ ما تحتاجينه،" },
    headlineEm: { en: "under one roof.", ar: "في مكانٍ واحد." },
    description: {
      en: "Ten integrated specialty departments led by named clinicians. From dermatology to maxillofacial surgery to women's health — your visit covers the family.",
      ar: "عشرة أقسام تخصّصية متكاملة يقودها أطبّاء بأسمائهم. من الجلدية إلى جراحة الفم والوجه والفكين إلى صحّة المرأة — زيارتكِ تشمل العائلة.",
    },
    items: [
      { num: "01", name: { en: "Dermatology & Laser", ar: "الجلدية والليزر" }, description: { en: "Medical and cosmetic dermatology — acne, pigmentation, vascular, laser hair removal, anti-aging.", ar: "الجلدية الطبّية والتجميلية — حبّ الشباب، التصبّغ، الأوعية، إزالة الشعر بالليزر، مكافحة الشيخوخة." }, variant: "terracotta" },
      { num: "02", name: { en: "Plastic & Aesthetic Surgery", ar: "جراحة التجميل" }, description: { en: "Maxillofacial, body contouring, and aesthetic surgical procedures — by board-certified surgeons.", ar: "جراحة الفم والوجه والفكين، نحت الجسم، والإجراءات التجميلية الجراحية — على يد جرّاحين معتمَدين." }, variant: "sand" },
      { num: "03", name: { en: "Cosmetic Dentistry", ar: "تجميل الأسنان" }, description: { en: "Smile design, veneers, Hollywood smile, whitening — restoring teeth and confidence together.", ar: "تصميم الابتسامة، الفينير، ابتسامة هوليوود، التبييض — استعادة الأسنان والثقة معاً." }, variant: "sage" },
    ],
  },
  tailoredCare: {
    chapterRoman: "III",
    chapterTitle: { en: "The care", ar: "الرعاية" },
    headlinePartA: { en: "Care held to a", ar: "رعاية بمعيارٍ" },
    headlineEm: { en: "standard, not a trend.", ar: "لم يتغيّر." },
    description: { en: "Every treatment we offer must be safe, effective, and beautiful. That rule has not changed since day one.", ar: "كل علاج نقدّمه يجب أن يكون آمناً، فعّالاً، وجميلاً. هذه القاعدة لم تتغيّر منذ اليوم الأول." },
    points: [
      { num: "I", label: { en: "Consultation with the relevant specialist", ar: "استشارة مع أخصّائي القسم المعني" } },
      { num: "II", label: { en: "A written plan, backed by diagnostics", ar: "خطّة مكتوبة، مدعومة بالتشخيص" } },
      { num: "III", label: { en: "Regular follow-up, never rushed", ar: "متابعة منتظمة، بلا استعجال" } },
      { num: "IV", label: { en: "Cross-department coordination when needed", ar: "تنسيق بين الأقسام عند اللزوم" } },
    ],
    cta: { en: "Learn how we work", ar: "تعرّفي على طريقتنا" },
    badge: { en: "How we work", ar: "كيف نعمل" },
  },
  beforeAfter: {
    chapterRoman: "IV",
    chapterTitle: { en: "The journey", ar: "الرحلة" },
    headlinePartA: { en: "Real change,", ar: "تغييرٌ حقيقي،" },
    headlineEm: { en: "documented with words and time.", ar: "موثَّق بالكلمات والزمن." },
    description: { en: "Saudi privacy by default — we publish the journey, not the face. Time-anchored testimonials from real Al Ahsa patients.", ar: "خصوصية سعودية كافتراضٍ أوّل — ننشر الرحلة، لا الوجه. شهاداتٌ موثَّقة بالزمن من مريضات الأحساء الحقيقيات." },
    cta: { en: "See the full gallery", ar: "اطّلعي على المعرض كاملاً" },
    beforeLabel: { en: "Before", ar: "قبل" },
    afterLabel: { en: "After · 8 weeks", ar: "بعد · ٨ أسابيع" },
  },
  reviews: {
    eyebrow: { en: "★ 4.4 / 5 — 1,500+ verified reviews", ar: "★ ٤٫٤ / ٥ — أكثر من ١٬٥٠٠ تقييم موثَّق" },
    pullQuote: { en: "The trusted name across the Eastern Province.", ar: "الاسم الموثوق في المنطقة الشرقية." },
    items: [
      {
        quote: { en: "She listened first. Explained three options. Then told me the simplest one suited me best. No upsell, no rush — and the result is exactly what we discussed.", ar: "أصغت أوّلاً. شرحت ثلاث خيارات. ثم قالت إنّ الأبسط هو الأنسب لي. بلا بيع، بلا استعجال — والنتيجة تماماً كما اتّفقنا." },
        name: { en: "Patient · Mubarraz", ar: "مريضة · المبرّز" },
        role: { en: "Full-face filler with Dr. Wafaa", ar: "فيلر وجه كامل مع د. وفاء" },
        variant: "terracotta",
      },
      {
        quote: { en: "Booked a women-only session by WhatsApp. The room was quiet, the team was all women. My mother came to the next visit on her own.", ar: "حجزتُ جلسة نسائية فقط عبر واتساب. الغرفة كانت هادئة، الفريق كان نسائياً بالكامل. أمّي أتت بنفسها في الزيارة التالية." },
        name: { en: "Patient · Hofuf", ar: "مريضة · الهفوف" },
        role: { en: "Hydrafacial with Dr. Wafaa", ar: "هيدرافيشيال مع د. وفاء" },
        variant: "sage",
      },
    ],
    cta: { en: "Read all reviews", ar: "اقرئي كل الآراء" },
  },
  team: {
    eyebrow: { en: "✦ The Mubarraz team", ar: "✦ فريق المبرّز" },
    headlinePartA: { en: "Female-led care.", ar: "رعاية بقيادة طبيبة." },
    headlineEm: { en: "Discreet by default.", ar: "سرّيّة كافتراضٍ أوّل." },
    items: [
      { name: "Dr. Wafaa Saeed", tag: { en: "Lead Dermatologist · Egyptian Fellowship", ar: "رئيسة الجلدية · زمالة مصرية" }, variant: "terracotta" },
      { name: "The Women's Studio", tag: { en: "Hydrafacial · Laser · Plasma · Aesthetic care", ar: "هيدرافيشيال · ليزر · بلازما · رعاية تجميلية" }, variant: "sand" },
      { name: "Women-Only Concierge", tag: { en: "Bookings · Family scheduling · Modesty by default", ar: "حجوزات · مواعيد العائلة · سرّيّةٌ أصيلة" }, variant: "sage" },
    ],
  },
  bookCta: {
    eyebrow: { en: "✦ Al Ahsa direct line.", ar: "✦ الخط المباشر للأحساء." },
    headline: { en: "Reach us today.", ar: "تواصلي معنا اليوم." },
    description: { en: "Khalid Ibn Al-Walid Street · Al Mubarraz · Saturday – Thursday 9 AM – 11 PM · Friday after Asr. Same-day WhatsApp confirmation.", ar: "شارع خالد بن الوليد · المبرّز · السبت – الخميس ٩ صباحاً – ١١ مساءً · الجمعة بعد العصر. تأكيد عبر واتساب في نفس اليوم." },
    primary: { en: "Book on WhatsApp", ar: "احجزي عبر واتساب" },
    secondary: { en: "Call 0502022292", ar: "اتصلي ٠٥٠٢٠٢٢٢٩٢" },
  },
  faq: {
    eyebrow: { en: "✦ Frequent questions", ar: "✦ أسئلة متكرّرة" },
    headlinePartA: { en: "We've got", ar: "لدينا" },
    headlineEm: { en: "answers.", ar: "الإجابات." },
    description: { en: "Short answers to the questions we hear most. Don't find yours? Message us on WhatsApp.", ar: "إجابات قصيرة لأكثر الأسئلة تكراراً. لا تجدين سؤالك؟ راسلينا على واتساب." },
    cta: { en: "WhatsApp us", ar: "تواصل عبر واتساب" },
    items: [
      { q: { en: "What departments do you offer?", ar: "ما الأقسام التي تقدّمونها؟" }, a: { en: "Ten specialty departments under one roof: dermatology and laser, plastic and aesthetic surgery, cosmetic dentistry and maxillofacial, OB/GYN, paediatrics, bariatric surgery, day surgery, interventional radiology, psychiatry, and a dedicated laser center.", ar: "عشرة أقسام تخصّصية تحت سقف واحد: الجلدية والليزر، جراحة التجميل، الأسنان والفم والوجه، النساء والولادة، طب الأطفال، جراحة السمنة، الجراحة اليومية، الأشعّة التداخلية، الطب النفسي، ومركز ليزر متخصّص." } },
      { q: { en: "Where in Al Ahsa is the clinic?", ar: "أين تقعون في الأحساء؟" }, a: { en: "Khalid Ibn Al-Walid Street, Al Mubarraz, Al Ahsa. Open since January 2025. Dedicated patient parking on site. Easy access from Hofuf, Mubarraz, and surrounding villages.", ar: "شارع خالد بن الوليد، المبرّز، الأحساء. مفتوح منذ يناير ٢٠٢٥. مواقف خاصة بالمراجعين داخل المجمّع. سهل الوصول من الهفوف والمبرّز والقرى المجاورة." } },
      { q: { en: "How do I book?", ar: "كيف أحجز؟" }, a: { en: "Direct line 0502022292, WhatsApp 0557337555, or use the booking form. Same-day confirmation on WhatsApp during business hours.", ar: "الخط المباشر ٠٥٠٢٠٢٢٢٩٢، أو واتساب ٠٥٥٧٣٣٧٥٥٥، أو استخدمي نموذج الحجز. التأكيد عبر واتساب في نفس اليوم خلال ساعات العمل." } },
      { q: { en: "What should I expect on my first visit?", ar: "ماذا أتوقّع في زيارتي الأولى؟" }, a: { en: "A consultation with the specialist of the relevant department. We listen first, run any needed diagnostics, then propose a written plan. No commitment to treatment on the first visit.", ar: "استشارة مع أخصّائي القسم المعني. نُصغي أوّلاً، نُجري التشخيص اللازم، ثم نقترح خطّة مكتوبة. لا التزام بالعلاج في الزيارة الأولى." } },
      { q: { en: "What are your hours?", ar: "ما هي ساعات العمل؟" }, a: { en: "Saturday – Thursday, 9 AM to 11 PM. Friday after Asr prayer for selected clinics. Prayer-time pauses respected.", ar: "السبت – الخميس، من ٩ صباحاً إلى ١١ مساءً. الجمعة بعد صلاة العصر لبعض العيادات. نحترم أوقات الصلاة." } },
      { q: { en: "Do you offer female-only sessions?", ar: "هل تقدّمون جلسات للسيدات فقط؟" }, a: { en: "Yes. Our team includes female specialists in dermatology, OB/GYN, and aesthetics. Request a female-only session at booking — WhatsApp 0557337555.", ar: "نعم. فريقنا يضمّ طبيبات متخصّصات في الجلدية والنساء والولادة والتجميل. اطلبي جلسة نسائية فقط عند الحجز — واتساب ٠٥٥٧٣٣٧٥٥٥." } },
      { q: { en: "Do you accept Tabby and Tamara?", ar: "هل تقبلون تابي وتمارا؟" }, a: { en: "Yes — both Tabby and Tamara are available for treatments within the SAMA SAR 10,000 BNPL cap. Mada, Visa, Mastercard, and Apple Pay also accepted.", ar: "نعم — تابي وتمارا متاحان للعلاجات ضمن سقف ١٠٬٠٠٠ ريال المعتمَد من ساما. كما نقبل مدى، فيزا، ماستركارد، وآبل باي." } },
    ],
  },
  journal: {
    eyebrow: { en: "✦ The Bright Journal", ar: "✦ مجلّة برايت" },
    headline: { en: "Notes from our clinicians.", ar: "مقالات من أطبّائنا." },
    description: { en: "Practical writing from our team on what works in dermatology, dental, and women's health — and what we'd choose for our own families.", ar: "كتابات عملية من فريقنا حول ما يعمل فعلاً في الجلدية وطبّ الأسنان وصحّة المرأة — وما نختاره لعائلاتنا نحن." },
    items: [
      { tag: { en: "Dermatology", ar: "جلدية" }, title: { en: "Eid prep without panic — a six-week glow plan", ar: "تجهيز العيد بدون قلق — خطّة إشراقة لستّة أسابيع" }, date: { en: "May 2026", ar: "مايو ٢٠٢٦" }, variant: "sand" },
      { tag: { en: "Dental", ar: "أسنان" }, title: { en: "When veneers are the right call (and when they're not)", ar: "متى يكون الفينير الخيار الصحيح (ومتى لا يكون)" }, date: { en: "April 2026", ar: "أبريل ٢٠٢٦" }, variant: "terracotta" },
      { tag: { en: "Women's Health", ar: "صحّة المرأة" }, title: { en: "Three questions to ask your OB/GYN this year", ar: "ثلاثة أسئلة لطبيبة النساء والولادة في هذا العام" }, date: { en: "March 2026", ar: "مارس ٢٠٢٦" }, variant: "sage" },
    ],
  },

  // ══ INNER PAGES ═══════════════════════════════════════════════════════════
  departmentsPage: {
    hero: {
      roman: "I",
      eyebrow: { en: "✦ Departments at Al Ahsa", ar: "✦ الأقسام في الأحساء" },
      title: { en: "Specialty care,", ar: "رعاية تخصّصية،" },
      titleEm: { en: "closer to Mubarraz.", ar: "أقرب إلى المبرّز." },
      sub: { en: "Dermatology, aesthetic care, cosmetic dentistry, OB/GYN, laser, and family care — under one quiet roof on Khalid Ibn Al-Walid Street. Women-only sessions on request.", ar: "الجلدية، الرعاية التجميلية، تجميل الأسنان، النساء والولادة، الليزر، ورعاية العائلة — تحت سقفٍ هادئٍ واحد على شارع خالد بن الوليد. جلسات نسائية فقط عند الطلب." },
    },
    items: [
      {
        num: "I",
        name: { en: "Department I — Dermatology & Laser", ar: "القسم الأوّل — الجلدية والليزر" },
        sub: { en: "Skin science under Dr. Wafaa Saeed", ar: "علم البشرة تحت إشراف د. وفاء سعيد" },
        blurb: { en: "Medical and cosmetic dermatology led by Dr. Wafaa Saeed — Egyptian Fellowship in dermatology. Restrained, written protocols that age gracefully. Every plan documented before you leave the room.", ar: "الجلدية الطبّية والتجميلية بقيادة د. وفاء سعيد — زمالة مصرية في الأمراض الجلدية. بروتوكولات مكتوبة معتدلة تشيخ بكرامة. كل خطّة موثَّقة قبل أن تغادري الغرفة." },
        treatments: [
          { en: "Hydrafacial", ar: "هيدرافيشيال" },
          { en: "Laser Hair Removal", ar: "إزالة الشعر بالليزر" },
          { en: "Plasma · PRP Therapy", ar: "البلازما · علاج بـ PRP" },
          { en: "Skin Rejuvenation", ar: "تجديد البشرة" },
          { en: "Acne Therapy", ar: "علاج حب الشباب" },
          { en: "Pigmentation & Brown Spots", ar: "علاج التصبّغ والبقع البنّية" },
          { en: "Mesotherapy", ar: "الميزوثيرابي" },
          { en: "Chemical Peeling", ar: "التقشير الكيميائي" },
          { en: "Microneedling", ar: "الإبر الدقيقة" },
        ],
        pricing: { en: "From SAR 199 · packages available", ar: "تبدأ من ١٩٩ ر.س · باقات متاحة" },
        variant: "terracotta",
      },
      {
        num: "II",
        name: { en: "Department II — Plastic & Aesthetic Surgery", ar: "القسم الثاني — جراحة التجميل" },
        sub: { en: "Non-surgical aesthetic procedures", ar: "إجراءات تجميلية غير جراحية" },
        blurb: { en: "Filler, Botox, thread lift, and non-surgical face contouring — all under Dr. Wafaa's supervision. Restraint over volume; proportion over trend. For surgical procedures, scheduled by appointment.", ar: "فيلر، بوتوكس، شدّ بالخيوط، ونحت الوجه غير الجراحي — كلّها تحت إشراف د. وفاء. الاعتدال فوق الحجم؛ التناسق فوق الموضة. للإجراءات الجراحية، تُحدَّد بالموعد." },
        treatments: [
          { en: "Full-face Filler", ar: "فيلر الوجه الكامل" },
          { en: "Lip Filler", ar: "فيلر الشفاه" },
          { en: "Botox", ar: "البوتوكس" },
          { en: "Thread Lift", ar: "الشدّ بالخيوط" },
          { en: "Body Contouring", ar: "نحت الجسم" },
          { en: "Maxillofacial Surgery", ar: "جراحة الفم والوجه والفكّين" },
          { en: "Reconstructive consultation", ar: "استشارات الجراحة الترميمية" },
        ],
        pricing: { en: "Consultation-based · SAR 800–8,000+", ar: "حسب الاستشارة · ٨٠٠–٨٬٠٠٠+ ر.س" },
        variant: "sand",
      },
      {
        num: "III",
        name: { en: "Department III — Cosmetic Dentistry", ar: "القسم الثالث — تجميل الأسنان" },
        sub: { en: "Smile design & Hollywood Smile", ar: "تصميم الابتسامة وابتسامة هوليوود" },
        blurb: { en: "Cosmetic and restorative dentistry. Hollywood Smile, veneers, whitening, dental implants, and gummy-smile correction — designed around your face proportions.", ar: "تجميل وترميم الأسنان. ابتسامة هوليوود، فينير، تبييض، زراعة، وتصحيح الابتسامة اللثوية — مصمَّمة حول تناسق وجهكِ." },
        treatments: [
          { en: "Hollywood Smile · Veneers", ar: "ابتسامة هوليوود · فينير" },
          { en: "Teeth Whitening (chair-side & laser)", ar: "تبييض الأسنان (في العيادة وبالليزر)" },
          { en: "Gummy Smile Correction", ar: "تصحيح الابتسامة اللثوية" },
          { en: "Dental Implants", ar: "زراعة الأسنان" },
          { en: "Composite Fillings", ar: "حشوات تجميلية" },
          { en: "Crowns & Bridges", ar: "التيجان والجسور" },
          { en: "Root Canal · Endodontics", ar: "علاج عصب الأسنان" },
          { en: "Periodontics", ar: "علاج اللثة" },
          { en: "Paediatric Dentistry", ar: "طبّ أسنان الأطفال" },
        ],
        pricing: { en: "From SAR 250 · Hollywood Smile up to SAR 16,000", ar: "تبدأ من ٢٥٠ ر.س · ابتسامة هوليوود تصل إلى ١٦٬٠٠٠ ر.س" },
        variant: "sage",
      },
      {
        num: "IV",
        name: { en: "Department IV — OB/GYN & Women's Health", ar: "القسم الرابع — النساء والولادة وصحّة المرأة" },
        sub: { en: "Discreet, women-only consultations", ar: "استشارات نسائية بسرّية تامّة" },
        blurb: { en: "Women's health consultations in a fully discreet, women-only environment. Dermatology, intimate skin care, and aesthetic protocols designed for women — booked via WhatsApp 0557337555.", ar: "استشارات صحّة المرأة في بيئة نسائية تماماً وسرّية. الجلدية، العناية الحميمة بالبشرة، والبروتوكولات التجميلية المصمَّمة للنساء — الحجز عبر واتساب ٠٥٥٧٣٣٧٥٥٥." },
        treatments: [
          { en: "Gynecological consultation", ar: "استشارة نسائية" },
          { en: "Intimate health treatments", ar: "علاجات الصحّة الحميمة" },
          { en: "Postnatal recovery", ar: "تعافي ما بعد الولادة" },
          { en: "Women's wellness check-ups", ar: "فحوصات عافية المرأة" },
        ],
        pricing: { en: "Consultation from SAR 250", ar: "الاستشارة تبدأ من ٢٥٠ ر.س" },
        variant: "terracotta",
      },
      {
        num: "V",
        name: { en: "Department V — Paediatrics", ar: "القسم الخامس — طب الأطفال" },
        sub: { en: "Family medicine for the youngest", ar: "طب العائلة للأصغر سنّاً" },
        blurb: { en: "General paediatrics and family-coordinated care. Convenient for families booking multiple members on the same visit.", ar: "طب أطفال عام ورعاية منسّقة على مستوى العائلة. مناسب للعوائل التي تحجز أكثر من فرد في زيارة واحدة." },
        treatments: [
          { en: "Paediatric general consultation", ar: "استشارة طب أطفال عامّة" },
          { en: "Vaccination & developmental check-ups", ar: "اللقاحات وفحوصات النمو" },
          { en: "Paediatric dermatology referral", ar: "إحالة جلدية أطفال" },
        ],
        pricing: { en: "Consultation from SAR 200", ar: "الاستشارة تبدأ من ٢٠٠ ر.س" },
        variant: "sand",
      },
      {
        num: "VI",
        name: { en: "Department VI — Bariatric Surgery", ar: "القسم السادس — جراحة السمنة" },
        sub: { en: "Weight & metabolic management", ar: "إدارة الوزن والاستقلاب" },
        blurb: { en: "Bariatric and metabolic surgical consultations. Pre-operative workup, surgical procedures, and structured post-operative follow-up.", ar: "استشارات جراحة السمنة والاستقلاب. الفحص ما قبل العملية، الإجراءات الجراحية، والمتابعة المنظَّمة بعدها." },
        treatments: [
          { en: "Bariatric consultation", ar: "استشارة جراحة السمنة" },
          { en: "Sleeve & bypass procedures", ar: "إجراءات تكميم وتحويل المسار" },
          { en: "Pre/post-operative care", ar: "الرعاية قبل وبعد الجراحة" },
        ],
        pricing: { en: "Quote at consultation", ar: "السعر يُحدَّد بعد الاستشارة" },
        variant: "sage",
      },
      {
        num: "VII",
        name: { en: "Department VII — Day Surgery", ar: "القسم السابع — الجراحة اليومية" },
        sub: { en: "Same-day surgical procedures", ar: "إجراءات جراحية في نفس اليوم" },
        blurb: { en: "Outpatient surgical procedures in a fully equipped facility. Discharge same day in most cases.", ar: "إجراءات جراحية للمرضى الخارجيّين في منشأة مجهّزة بالكامل. خروج في نفس اليوم في معظم الحالات." },
        treatments: [
          { en: "Outpatient surgical consultations", ar: "استشارات الجراحة الخارجية" },
          { en: "Minor surgical procedures", ar: "إجراءات جراحية صغيرة" },
        ],
        pricing: { en: "Quote at consultation", ar: "السعر يُحدَّد بعد الاستشارة" },
        variant: "dark",
      },
      {
        num: "VIII",
        name: { en: "Department VIII — Interventional Radiology", ar: "القسم الثامن — الأشعّة التداخلية" },
        sub: { en: "Image-guided diagnosis & therapy", ar: "تشخيص وعلاج موجّه بالصورة" },
        blurb: { en: "Diagnostic imaging and image-guided minimally invasive procedures. Available by referral.", ar: "تصوير تشخيصي وإجراءات أقل توغّلاً موجّهة بالصورة. متاح بالإحالة." },
        treatments: [
          { en: "Diagnostic imaging", ar: "تصوير تشخيصي" },
          { en: "Image-guided interventions", ar: "تدخّلات موجّهة بالصورة" },
        ],
        pricing: { en: "Referral-based", ar: "حسب الإحالة" },
        variant: "terracotta",
      },
      {
        num: "IX",
        name: { en: "Department IX — Psychiatry", ar: "القسم التاسع — الطب النفسي" },
        sub: { en: "Confidential mental-health care", ar: "رعاية صحّة نفسية بسرّية" },
        blurb: { en: "Adult psychiatric consultation in a private, discreet setting. Bilingual care.", ar: "استشارة نفسية للبالغين في بيئة خاصّة وسرّية. رعاية ثنائية اللغة." },
        treatments: [
          { en: "Psychiatric consultation", ar: "استشارة نفسية" },
          { en: "Therapy referral", ar: "إحالة للعلاج النفسي" },
        ],
        pricing: { en: "Consultation from SAR 350", ar: "الاستشارة تبدأ من ٣٥٠ ر.س" },
        variant: "sand",
      },
      {
        num: "X",
        name: { en: "Department X — Laser Centre", ar: "القسم العاشر — مركز الليزر" },
        sub: { en: "Dedicated laser & energy-based therapies", ar: "علاجات الليزر والطاقة المكرَّسة" },
        blurb: { en: "Dedicated laser room with SFDA-registered devices spanning hair removal, vascular, pigmentation, and skin resurfacing.", ar: "غرفة ليزر مكرَّسة مع أجهزة مسجَّلة لدى الهيئة العامة للغذاء والدواء، تشمل إزالة الشعر والأوعية والتصبّغ وإعادة تسطيح البشرة." },
        treatments: [
          { en: "Laser hair removal — all skin types", ar: "إزالة الشعر بالليزر — لكل أنواع البشرة" },
          { en: "Vascular laser (broken capillaries)", ar: "ليزر الأوعية (الشعيرات المكسورة)" },
          { en: "Pigmentation laser", ar: "ليزر التصبّغ" },
          { en: "Laser skin resurfacing", ar: "إعادة تسطيح البشرة بالليزر" },
          { en: "Laser tattoo removal", ar: "إزالة الوشم بالليزر" },
        ],
        pricing: { en: "Per-session from SAR 250", ar: "الجلسة تبدأ من ٢٥٠ ر.س" },
        variant: "sage",
      },
    ],
    equipment: [
      { name: "SFDA-registered laser fleet", description: { en: "Hair removal, vascular, pigmentation, and skin resurfacing devices — all SFDA registered.", ar: "أجهزة ليزر مسجَّلة لدى الهيئة العامة للغذاء والدواء — إزالة الشعر، الأوعية، التصبّغ، إعادة تسطيح البشرة." } },
      { name: "Hydrafacial system", description: { en: "Three-step facial protocol — cleanse, extract, hydrate.", ar: "بروتوكول وجه من ثلاث مراحل — تنظيف، استخراج، ترطيب." } },
      { name: "RF / Ultrasound body contouring", description: { en: "Non-invasive body shaping for face and body.", ar: "نحت غير جراحي للوجه والجسم." } },
      { name: "Chair-side teeth-whitening unit", description: { en: "In-clinic whitening with same-day results.", ar: "تبييض في العيادة بنتائج في نفس اليوم." } },
      { name: "Treatment room — women-only configuration", description: { en: "Private aesthetic treatment room with women-only staffing on request.", ar: "غرفة علاج تجميلي خاصّة بفريقٍ نسائيٍ كامل عند الطلب." } },
    ],
    bookCta: {
      headline: { en: "Not sure which department fits?", ar: "غير متأكّدة أي قسم يناسبك؟" },
      description: { en: "WhatsApp us — we will help you book with the right specialist.", ar: "راسلينا على واتساب — نُساعدك على اختيار الموعد المناسب مع الأخصّائي الصحيح." },
    },
  },

  doctorsPage: {
    hero: {
      roman: "I",
      eyebrow: { en: "✦ Bright Al Ahsa Clinical Team", ar: "✦ فريق برايت الأحساء السريري" },
      title: { en: "Female-led.", ar: "بقيادة طبيبة." },
      titleEm: { en: "Named. Verifiable.", ar: "بالاسم. قابلة للتحقّق." },
      sub: { en: "Dr. Wafaa Saeed leads our day-to-day clinical practice on Khalid Ibn Al-Walid Street. Egyptian Fellowship-certified in dermatology. Known by her patients for one habit above all others: she listens before she prescribes, and writes the plan down before you leave the room.", ar: "د. وفاء سعيد تقود ممارستنا السريرية اليومية على شارع خالد بن الوليد. حاصلة على زمالة مصرية في الأمراض الجلدية. تعرفها مريضاتها بعادةٍ واحدة فوق كل شيء: تُصغي قبل أن تَصِف، وتكتب الخطّة قبل أن تغادري الغرفة." },
    },
    items: [
      {
        name: "Dr. Wafaa Saeed",
        role: { en: "Lead Dermatologist · Bright Al Ahsa", ar: "رئيسة الجلدية · برايت الأحساء" },
        bio: { en: "Egyptian Fellowship-certified dermatologist. Leads the Bright Al Ahsa clinic since opening day in January 2025. Specialises in restrained, written aesthetic protocols — full-face filler design, Hydrafacial regimens, Hydra-Botox combinations, and conservative anti-aging care. Trained on the Cairo school of dermatology and developed a Khaleeji-tailored approach to skin care in her years across the Gulf. Every consultation ends with a written plan you take home — never a verbal upsell.", ar: "طبيبة جلدية حاصلة على زمالة مصرية. تقود عيادة برايت الأحساء منذ افتتاحها في يناير ٢٠٢٥. متخصّصة في بروتوكولات تجميل مكتوبة ومعتدلة — تصميم فيلر الوجه الكامل، أنظمة الهيدرافيشيال، تركيبات الهيدرا-بوتوكس، والعناية المعتدلة بمكافحة الشيخوخة. تدرّبت على مدرسة القاهرة في الجلدية وطوّرت مقاربة خليجية لرعاية البشرة عبر سنواتها في الخليج. كل استشارة تنتهي بخطّة مكتوبة تأخذينها معكِ — أبداً بيع شفويّ." },
        credentials: ["MD · Egyptian Fellowship in Dermatology", "Cairo School of Dermatology — clinical training", "Bright Al Ahsa Lead since January 2025", "Female-only session protocol on request"],
        variant: "terracotta",
      },
    ],
  },

  aboutPage: {
    hero: {
      roman: "I",
      eyebrow: { en: "✦ About Bright Al Ahsa", ar: "✦ عن برايت الأحساء" },
      title: { en: "The Mubarraz clinic", ar: "العيادة" },
      titleEm: { en: "women trust first.", ar: "التي اختارتها سيدات المبرّز." },
      sub: { en: "Bright Al Ahsa opened in January 2025 on Khalid Ibn Al-Walid Street in Mubarraz — a quiet, female-led specialty clinic for the women of Al Ahsa. Led on-site by Dr. Wafaa Saeed.", ar: "افتُتح برايت الأحساء في يناير ٢٠٢٥ على شارع خالد بن الوليد بالمبرّز — عيادة تخصّصية هادئة بقيادة طبيبة لنساء الأحساء. تقودها موقعياً د. وفاء سعيد." },
    },
    chapters: [
      { n: "I", title: { en: "Why we opened in Mubarraz", ar: "لماذا افتتحنا في المبرّز" }, body: { en: "Women in Al Ahsa told us the same thing: for a serious dermatology consultation or a properly designed full-face filler, the standard required a two-hour drive. So we brought the standard to Mubarraz instead — opened January 2025 on Khalid Ibn Al-Walid Street, women-led from day one.", ar: "أخبرتنا نساء الأحساء بالشيء نفسه: لاستشارة جلدية جدّية أو فيلر وجه كامل مصمَّم بإتقان، المعيار يتطلّب قيادة ساعتين. فأتينا بالمعيار إلى المبرّز بدلاً من ذلك — افتُتح في يناير ٢٠٢٥ على شارع خالد بن الوليد، بقيادة نسائية منذ اليوم الأوّل." }, variant: "sand" },
      { n: "II", title: { en: "Female-led, by design", ar: "بقيادة نسائية، بالتصميم" }, body: { en: "Dr. Wafaa Saeed runs the day-to-day clinical practice — Egyptian Fellowship in dermatology, restrained-by-default protocols, every plan written down before you leave the room. Around her: a women-only operations team for any patient who requests one.", ar: "تُدير د. وفاء سعيد الممارسة السريرية اليومية — زمالة مصرية في الجلدية، بروتوكولات معتدلة بالتصميم، كل خطّة مكتوبة قبل أن تغادري الغرفة. ومن حولها: فريق تشغيليّ نسائي بالكامل لأي مريضة تطلب ذلك." }, variant: "terracotta" },
      { n: "III", title: { en: "Saudi privacy as default", ar: "الخصوصية السعودية كافتراضٍ أوّل" }, body: { en: "No patient face photographs anywhere — on the website, in WhatsApp, on the gallery. Anonymous inquiry option on the booking form. PDPL-compliant data handling. Modesty isn't a feature; it's the default.", ar: "لا صور وجوه مريضات في أيّ مكان — على الموقع، على واتساب، في المعرض. خيار استفسار مجهول الهوية في نموذج الحجز. تعامل مع البيانات متوافق مع قانون حماية البيانات الشخصية. الستر ليس ميزة، بل افتراض أساسي." }, variant: "sage" },
      { n: "IV", title: { en: "What you can expect", ar: "ما يمكنكِ توقّعه" }, body: { en: "Quiet rooms. Long consultations. Written plans. No pressure to book a procedure on the first visit. Same-day WhatsApp confirmation. Tabby and Tamara accepted for treatments inside the SAMA cap. Saturday – Thursday 9 AM – 11 PM; Friday after Asr.", ar: "غرفٌ هادئة. استشارات طويلة. خطط مكتوبة. لا ضغطٌ لحجز إجراء في الزيارة الأولى. تأكيد عبر واتساب في نفس اليوم. تابي وتمارا مقبولان للعلاجات ضمن سقف ساما. السبت – الخميس ٩ صباحاً – ١١ مساءً؛ الجمعة بعد العصر." }, variant: "dark" },
    ],
    commitments: [
      { n: "I", title: { en: "Female-led", ar: "بقيادة طبيبة" }, description: { en: "On-site every day: Dr. Wafaa Saeed, Egyptian Fellowship-certified dermatologist. Women-only operations team available on request.", ar: "موقعياً كل يوم: د. وفاء سعيد، طبيبة جلدية بزمالة مصرية. فريق تشغيليّ نسائيّ بالكامل عند الطلب." } },
      { n: "II", title: { en: "Verifiable credentials", ar: "شهادات قابلة للتحقّق" }, description: { en: "Every credential we display is independently checkable through the issuing authority — SCFHS, SFDA, and the dermatology fellowship registry.", ar: "كل شهادة نعرضها قابلة للتحقّق المستقل عبر الجهة المُصدِرة — الهيئة السعودية للتخصّصات الصحية، الهيئة العامة للغذاء والدواء، وسجلّ زمالات الجلدية." } },
      { n: "III", title: { en: "Saudi privacy first", ar: "الخصوصية السعودية أولاً" }, description: { en: "No patient face photographs. No biometric data. Female-only sessions on request. PDPL-compliant data handling.", ar: "لا صور وجوه مريضات. لا بيانات حيوية. جلسات نسائية فقط عند الطلب. تعامل مع البيانات متوافق مع قانون حماية البيانات الشخصية." } },
      { n: "IV", title: { en: "Restraint over volume", ar: "الاعتدال فوق الحجم" }, description: { en: "Conservative protocols. Written plans before any procedure. No upsell on the first visit. Quiet results that age gracefully — never theatrical.", ar: "بروتوكولات معتدلة. خطط مكتوبة قبل أي إجراء. لا بيع في الزيارة الأولى. نتائج هادئة تشيخ بكرامة — أبداً مبالغ فيها." } },
    ],
    location: {
      eyebrow: { en: "✦ Visit Bright Al Ahsa", ar: "✦ زورونا في برايت الأحساء" },
      headlinePartA: { en: "Khalid Ibn Al-Walid St.", ar: "شارع خالد بن الوليد." },
      headlineEm: { en: "Al Mubarraz.", ar: "المبرّز." },
      description: { en: "Khalid Ibn Al-Walid Street, Al Mubarraz, Al Ahsa. Dedicated patient parking on site. Direct line 0502022292 · WhatsApp 0557337555 · Same-day confirmation during business hours.", ar: "شارع خالد بن الوليد، المبرّز، الأحساء. مواقف خاصة بالمراجعين داخل المجمّع. الخط المباشر ٠٥٠٢٠٢٢٢٩٢ · واتساب ٠٥٥٧٣٣٧٥٥٥ · تأكيد في نفس اليوم خلال ساعات العمل." },
    },
  },

  galleryPage: {
    hero: {
      roman: "I",
      eyebrow: { en: "✦ Before & After", ar: "✦ قبل وبعد" },
      title: { en: "Moments", ar: "لحظات" },
      titleEm: { en: "of honest change.", ar: "صادقة." },
      sub: { en: "No filters, no hype. Every case is shared with patient consent — every result verifiable.", ar: "لا فلاتر، لا مبالغة. كل حالة موافق عليها من المريض، وكل نتيجة قابلة للتحقّق." },
    },
    categories: [
      { id: "all", label: { en: "All", ar: "الكل" } },
      { id: "skin", label: { en: "Skin", ar: "البشرة" } },
      { id: "body", label: { en: "Body", ar: "الجسم" } },
      { id: "laser", label: { en: "Laser", ar: "الليزر" } },
      { id: "injectables", label: { en: "Injectables", ar: "الحقن" } },
    ],
    cases: [
      { id: 1, cat: "skin", treatment: { en: "Skin rejuvenation", ar: "تجديد البشرة" }, weeks: 8, before: "sand", after: "terracotta", name: "Case 001" },
      { id: 2, cat: "laser", treatment: { en: "Hair removal", ar: "إزالة الشعر" }, weeks: 12, before: "sage", after: "sand", name: "Case 012" },
      { id: 3, cat: "injectables", treatment: { en: "Lip fillers", ar: "فيلر الشفاه" }, weeks: 2, before: "terracotta", after: "sand", name: "Case 023" },
      { id: 4, cat: "body", treatment: { en: "Waist contouring", ar: "نحت الخصر" }, weeks: 16, before: "dark", after: "terracotta", name: "Case 041" },
      { id: 5, cat: "skin", treatment: { en: "Acne treatment", ar: "علاج حب الشباب" }, weeks: 10, before: "sand", after: "sage", name: "Case 055" },
      { id: 6, cat: "laser", treatment: { en: "Pigmentation", ar: "إزالة التصبّغ" }, weeks: 6, before: "terracotta", after: "sand", name: "Case 067" },
    ],
    disclaimer: {
      en: "Results vary by person. Images shared with written consent.",
      ar: "النتائج تختلف من شخص لآخر. الصور مشاركة بموافقة كتابية.",
    },
  },

  reviewsPage: {
    hero: {
      roman: "I",
      eyebrow: { en: "✦ Reviews", ar: "✦ الآراء" },
      title: { en: "Their words,", ar: "كلماتهم،" },
      titleEm: { en: "not ours.", ar: "لا كلماتنا." },
      sub: { en: "Selections from Google and firsthand experience. We chose only honesty.", ar: "مقتطفات من غوغل وتجارب حقيقية. لم نختَر سوى الحقيقة." },
    },
    rating: "4.4",
    reviewCount: { en: "From 1,500+ Google reviews", ar: "من أكثر من ١٬٥٠٠ تقييم جوجل" },
    items: [
      { shortQuote: { en: "\"Dr. Wafaa explained three options, then said the simplest one suited me best.\"", ar: "«د. وفاء شرحت لي ثلاث خيارات، ثم قالت إنّ الأبسط هو الأنسب.»" }, longQuote: { en: "No upsell, no pressure. Dr. Wafaa walked me through three filler approaches at the Mubarraz branch, then recommended the most conservative one. Six weeks later my husband noticed I 'looked rested' — that's the whole point.", ar: "لا بيع، لا ضغط. د. وفاء شرحت لي ثلاثة أساليب للفيلر في فرع المبرّز، ثم اقترحت الأكثر اعتدالاً. بعد ستة أسابيع لاحظ زوجي أنّي «أبدو مرتاحة» — هذا هو الهدف كلّه." }, name: "Patient · Al Ahsa", date: { en: "Apr 2026", ar: "أبريل ٢٠٢٦" }, variant: "terracotta", stars: 5 },
      { shortQuote: { en: "\"My mother came with me, then she booked for herself.\"", ar: "«أمّي أتت معي، ثم حجزت موعدها.»" }, longQuote: { en: "First visit was for me — Hydrafacial with Dr. Wafaa at the Mubarraz branch. By my third visit my mother had her own appointment. We're now three patients from the same family, all here in Al Ahsa.", ar: "الزيارة الأولى كانت لي — هيدرافيشيال مع د. وفاء في فرع المبرّز. بحلول زيارتي الثالثة كانت أمّي قد حجزت موعدها. أصبحنا الآن ثلاث مريضات من نفس العائلة، كلّنا هنا في الأحساء." }, name: "Patient · Al Mubarraz", date: { en: "Mar 2026", ar: "مارس ٢٠٢٦" }, variant: "sage", stars: 5 },
      { shortQuote: { en: "\"Fifteen minutes from our house — that changed everything.\"", ar: "«خمس عشرة دقيقة من بيتنا — هذا غيّر كل شيء.»" }, longQuote: { en: "I used to drive two hours each way for a proper dermatology consultation. Now Dr. Wafaa is fifteen minutes from our house in Mubarraz. Same clinical care, half the day saved. My skincare routine actually became sustainable.", ar: "كنتُ أقود ساعتين ذهاباً ومثلهما إياباً لاستشارة جلدية جدّية. الآن د. وفاء على بعد خمس عشرة دقيقة من بيتنا في المبرّز. نفس الرعاية السريرية، نصف اليوم وفّرناه. روتين العناية بالبشرة أصبح مستداماً فعلاً." }, name: "Patient · Hofuf", date: { en: "Feb 2026", ar: "فبراير ٢٠٢٦" }, variant: "sand", stars: 5 },
      { shortQuote: { en: "\"She wrote the plan down. I still have the paper.\"", ar: "«كتبت الخطّة. ما زلت أحتفظ بالورقة.»" }, longQuote: { en: "After three years of clinics trying to sell me filler I didn't need, Dr. Wafaa did the opposite — she explained why I should wait six months on one area, and only treat another. Wrote the whole plan down. I still have it.", ar: "بعد ثلاث سنوات من عيادات تحاول بيعي فيلر لا أحتاجه، فعلت د. وفاء العكس — شرحت لي لماذا يجب أن أنتظر ستّة أشهر في منطقة، وأعالج فقط منطقة أخرى. كتبت الخطّة كاملةً. ما زلت أحتفظ بها." }, name: "Patient · Al Mubarraz", date: { en: "Jan 2026", ar: "يناير ٢٠٢٦" }, variant: "terracotta", stars: 5 },
      { shortQuote: { en: "\"They accept Tabby — that mattered.\"", ar: "«يقبلون تابي — هذا فرّق معي.»" }, longQuote: { en: "Full Hollywood Smile would have been impossible to budget in one payment. The Mubarraz coordinator quietly mentioned Tabby and Tamara, both within the SAR 10K cap. Made everything possible.", ar: "ابتسامة هوليوود الكاملة كانت مستحيلة بدفعة واحدة في ميزانيتي. منسّقة المبرّز ذكرت بهدوء تابي وتمارا، كلاهما ضمن سقف ١٠ آلاف ريال. جعلت كل شيء ممكناً." }, name: "Patient · Al Ahsa", date: { en: "Mar 2026", ar: "مارس ٢٠٢٦" }, variant: "sage", stars: 5 },
      { shortQuote: { en: "\"Female-only session — they made it normal, not exceptional.\"", ar: "«جلسة نسائية فقط — جعلوها طبيعية، لا استثناء.»" }, longQuote: { en: "Asked for an all-female team at booking. The Mubarraz receptionist confirmed without questions. Female specialist (Dr. Wafaa), female nurse, female receptionist on the floor that day. No drama, no extra fee.", ar: "طلبت فريقاً نسائياً كاملاً عند الحجز. استقبال المبرّز أكّدت بدون أسئلة. أخصّائية (د. وفاء)، ممرّضة، استقبال — كلهنّ نساء في ذلك اليوم. بلا دراما، بلا رسوم إضافية." }, name: "Patient · Al Mubarraz", date: { en: "Feb 2026", ar: "فبراير ٢٠٢٦" }, variant: "sand", stars: 5 },
    ],
  },

  journalPage: {
    hero: {
      roman: "I",
      eyebrow: { en: "✦ The Bright Journal", ar: "✦ مجلّة برايت" },
      title: { en: "Notes", ar: "ملاحظات" },
      titleEm: { en: "from our clinicians.", ar: "من أطبّائنا." },
      sub: { en: "Practical writing from our team on dermatology, dentistry, women's health, and Saudi-specific care — what we'd choose for our own families.", ar: "كتابات عملية من فريقنا حول الجلدية، الأسنان، صحّة المرأة، والرعاية الخاصّة بالسوق السعودي — ما نختاره لعائلاتنا نحن." },
    },
    featured: {
      tag: { en: "Featured essay · Al Ahsa", ar: "مقال مميّز · الأحساء" },
      title: { en: "What our Al Ahsa patients taught us in year one", ar: "ما علّمتنا إيّاه مريضات الأحساء في عامنا الأوّل" },
      excerpt: { en: "Twelve months after opening on Khalid Ibn Al-Walid Street, here's what changed about how I practice dermatology — and what Hofuf and Mubarraz patients have in common that I didn't expect.", ar: "بعد اثني عشر شهراً من افتتاحنا على شارع خالد بن الوليد، إليكم ما تغيّر في كيفية ممارستي للجلدية — وما يجمع مريضات الهفوف والمبرّز ولم أتوقّعه." },
      author: "Dr. Wafaa Saeed",
      date: { en: "May 2026", ar: "مايو ٢٠٢٦" },
      variant: "terracotta",
    },
    posts: [
      { tag: { en: "Modesty", ar: "ستر" }, title: { en: "Female-only sessions — how to ask, what to expect", ar: "جلسات نسائية فقط — كيف تطلبيها، وماذا تتوقّعين" }, author: "Bright Al Ahsa Team", date: { en: "12 Apr 2026", ar: "١٢ أبريل ٢٠٢٦" }, variant: "sand" },
      { tag: { en: "Mubarraz", ar: "المبرّز" }, title: { en: "Why driving two hours for dermatology used to be standard — and isn't anymore", ar: "لماذا كان قيادة ساعتين للجلدية معياراً — ولم يعد كذلك" }, author: "Dr. Wafaa Saeed", date: { en: "28 Mar 2026", ar: "٢٨ مارس ٢٠٢٦" }, variant: "sage" },
      { tag: { en: "Dermatology", ar: "جلدية" }, title: { en: "Laser hair removal in summer — what actually works in Saudi heat", ar: "إزالة الشعر بالليزر في الصيف — ما يعمل فعلاً في حرارة السعودية" }, author: "Dr. Wafaa Saeed", date: { en: "14 Mar 2026", ar: "١٤ مارس ٢٠٢٦" }, variant: "terracotta" },
      { tag: { en: "Aesthetics", ar: "تجميل" }, title: { en: "Lip filler — three volumes I recommend, and the one I refuse", ar: "فيلر الشفاه — ثلاثة أحجام أوصي بها، وحجمٌ واحد أرفضه" }, author: "Dr. Wafaa Saeed", date: { en: "01 Mar 2026", ar: "١ مارس ٢٠٢٦" }, variant: "sand" },
      { tag: { en: "Practice", ar: "ممارسة" }, title: { en: "When we say no — three cases we declined this month", ar: "متى نقول «لا» — ثلاث حالات رفضناها هذا الشهر" }, author: "Bright Al Ahsa Team", date: { en: "14 Feb 2026", ar: "١٤ فبراير ٢٠٢٦" }, variant: "dark" },
      { tag: { en: "Mubarraz Care", ar: "رعاية المبرّز" }, title: { en: "What our Al Ahsa patients taught us in year one", ar: "ما علّمتنا إيّاه مريضات الأحساء في عامنا الأوّل" }, author: "Dr. Wafaa Saeed", date: { en: "28 Jan 2026", ar: "٢٨ يناير ٢٠٢٦" }, variant: "sage" },
    ],
    newsletter: {
      headline: { en: "A letter, once a month.", ar: "رسائل، مرة كل شهر." },
      description: { en: "Practical clinical writing from Bright. No promotions, no urgency. Subscribe if you want one thoughtful note in your inbox monthly.", ar: "كتابات سريرية عملية من برايت. لا إعلانات، لا استعجال. اشتركي إذا أردتِ ملاحظةً واحدة هادئة في بريدكِ شهرياً." },
      placeholder: { en: "your@email.com", ar: "بريدكِ الإلكتروني" },
      cta: { en: "Subscribe", ar: "اشتركي" },
    },
  },

  bookingPage: {
    hero: {
      roman: "I",
      eyebrow: { en: "✦ Book", ar: "✦ احجز" },
      title: { en: "Book a visit,", ar: "احجز" },
      titleEm: { en: "or write to us.", ar: "أو اكتب لنا." },
      sub: { en: "Three short steps. We confirm by SMS right away.", ar: "ثلاث خطوات قصيرة. نرسل التأكيد في الحال عبر رسالة نصّية." },
    },
    services: [
      { id: "consult", name: { en: "Free consultation", ar: "استشارة مجانية" }, duration: { en: "30 min · free", ar: "٣٠ دقيقة · مجانية" } },
      { id: "hydrafacial", name: { en: "Hydrafacial", ar: "هيدرافيشيال" }, duration: { en: "45 min", ar: "٤٥ دقيقة" } },
      { id: "full-face-filler", name: { en: "Full-face Filler", ar: "فيلر الوجه الكامل" }, duration: { en: "60 min", ar: "٦٠ دقيقة" } },
      { id: "lip-filler", name: { en: "Lip Filler", ar: "فيلر الشفاه" }, duration: { en: "30 min", ar: "٣٠ دقيقة" } },
      { id: "botox", name: { en: "Botox", ar: "البوتوكس" }, duration: { en: "30 min", ar: "٣٠ دقيقة" } },
      { id: "veneers", name: { en: "Hollywood Smile · Veneers", ar: "ابتسامة هوليوود · فينير" }, duration: { en: "2 hr", ar: "ساعتان" } },
      { id: "whitening", name: { en: "Teeth Whitening", ar: "تبييض الأسنان" }, duration: { en: "60 min", ar: "٦٠ دقيقة" } },
      { id: "laser-hair", name: { en: "Laser Hair Removal", ar: "إزالة الشعر بالليزر" }, duration: { en: "45 min", ar: "٤٥ دقيقة" } },
      { id: "plasma-prp", name: { en: "Plasma / PRP", ar: "بلازما / PRP" }, duration: { en: "45 min", ar: "٤٥ دقيقة" } },
      { id: "obgyn", name: { en: "OB/GYN consultation (female-only)", ar: "استشارة نساء وولادة (نسائي فقط)" }, duration: { en: "30 min", ar: "٣٠ دقيقة" } },
    ],
    slots: [
      "Tue · Apr 28 · 10:00",
      "Wed · Apr 29 · 14:30",
      "Thu · Apr 30 · 09:00",
      "Sat · May 02 · 16:00",
      "Mon · May 04 · 11:00",
      "Tue · May 05 · 15:30",
    ],
    steps: [
      { choose: { en: "Step 1 of 3 · Choose a treatment", ar: "خطوة ١ من ٣ · اختَر العلاج" }, when: { en: "Step 2 of 3 · Choose a time", ar: "خطوة ٢ من ٣ · اختَر الوقت" }, details: { en: "Step 3 of 3 · Your details", ar: "خطوة ٣ من ٣ · تفاصيلك" }, confirmed: { en: "Confirmed", ar: "تمّ التأكيد" } },
    ],
    labels: {
      name: { en: "Name", ar: "الاسم" },
      phone: { en: "Phone", ar: "الهاتف" },
      email: { en: "Email (optional)", ar: "البريد الإلكتروني (اختياري)" },
      note: { en: "Note (optional)", ar: "ملاحظة (اختياري)" },
      back: { en: "← Back", ar: "← رجوع" },
      continue: { en: "Continue →", ar: "متابعة →" },
      confirm: { en: "Confirm booking", ar: "تأكيد الحجز" },
      bookAnother: { en: "Book another visit", ar: "احجز موعداً آخر" },
      namePrompt: { en: "Your name", ar: "اسمك الكريم" },
      emailPrompt: { en: "you@example.com", ar: "you@example.com" },
      notePrompt: { en: "Anything you'd like us to know in advance.", ar: "أي شيء تريديننا أن نعرفه مسبقاً." },
    },
    confirmed: {
      title: { en: "You're on the calendar.", ar: "تمّ الحجز." },
      body: { en: "A short confirmation is on its way to your phone.", ar: "تأكيد قصير في طريقه إلى هاتفك." },
    },
    contact: {
      chapter: "II",
      title: { en: "Or reach us directly.", ar: "أو تواصل مباشرةً." },
      quote: { en: "\"Most patients reach us on WhatsApp. Messages are read the same day.\"", ar: "«معظم مرضانا يصلوننا عبر واتساب. الرسائل تُقرأ في نفس اليوم.»" },
    },
  },
};
