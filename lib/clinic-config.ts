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
    phone: "920024428",
    whatsapp: "+966 55 733 7555",
    whatsappLink: "https://wa.me/966557337555",
    email: "info@brightclinics.sa",
    address: { en: "Prince Faisal Bin Fahd Rd, Al Hada District, Al Khobar 34439 — branch in Al Ahsa (Mubarraz)", ar: "شارع الأمير فيصل بن فهد، حي الهدا، الخبر ٣٤٤٣٩ — وفرع في الأحساء (المبرز)" },
    hours: { en: "Sat – Thu · 9 AM – 11 PM · Friday after Asr prayer", ar: "السبت – الخميس · ٩ صباحاً – ١١ مساءً · الجمعة بعد صلاة العصر" },
    parking: { en: "Dedicated parking at both branches", ar: "مواقف خاصة في كلا الفرعين" },
  },
  seo: {
    title: { en: "Bright Specialized Clinics — Eastern Province, Saudi Arabia", ar: "عيادات برايت التخصصية — المنطقة الشرقية، السعودية" },
    description: {
      en: "Ten specialty departments under one roof — dermatology, plastic surgery, cosmetic dentistry, OB/GYN, paediatrics, bariatric, day surgery, laser, and more. Two branches: Al Khobar HQ + Al Ahsa.",
      ar: "عشرة أقسام تخصّصية تحت سقف واحد — الجلدية، التجميل، الأسنان، النساء والولادة، الأطفال، السمنة، الجراحة، الليزر، وأكثر. فرعان: المركز الرئيسي في الخبر + الأحساء.",
    },
    keywords: ["عيادات برايت", "Bright Specialized Clinics", "الخبر", "Al Khobar", "الأحساء", "Al Ahsa", "تجميل", "Eastern Province aesthetic", "cosmetic dentistry", "dermatology Khobar", "veneers Saudi", "filler Eastern Province"],
  },
  navigation: {
    items: [
      { key: "services", label: { en: "Departments", ar: "الأقسام" }, href: "/services" },
      { key: "doctors", label: { en: "Our Clinicians", ar: "أطبّاؤنا" }, href: "/doctors" },
      { key: "branches", label: { en: "Branches", ar: "الفروع" }, href: "/about" },
      { key: "trust", label: { en: "Trust", ar: "موثوقية" }, href: "/trust" },
      { key: "journal", label: { en: "Journal", ar: "المجلّة" }, href: "/journal" },
      { key: "contact", label: { en: "Contact", ar: "تواصل" }, href: "/booking" },
    ],
    bookCta: { en: "Book on WhatsApp", ar: "احجزي عبر واتساب" },
  },
  footer: {
    tagline: {
      en: "Ten specialty departments. Two branches. One promise: excellence as the only standard.",
      ar: "عشرة أقسام تخصّصية. فرعان. وعدٌ واحد: التميّز كمعيارٍ وحيد.",
    },
    chips: [
      { en: "MOH Licensed", ar: "مرخّصة من وزارة الصحة" },
      { en: "Saudi Arabia · Eastern Province", ar: "المملكة العربية السعودية · المنطقة الشرقية" },
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
          { label: { en: "Khobar HQ", ar: "الخبر — المركز الرئيسي" }, href: "/about" },
          { label: { en: "Al Ahsa branch", ar: "فرع الأحساء" }, href: "/about" },
          { label: { en: "Call 920024428", ar: "اتصل ٩٢٠٠٢٤٤٢٨" }, href: "tel:920024428" },
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
    eyebrow: { en: "✦ Eastern Province · Since 2018", ar: "✦ المنطقة الشرقية · منذ ٢٠١٨" },
    headlinePartA: { en: "Excellence", ar: "للتميّز" },
    headlineEm: { en: "is our only title.", ar: "عنوانٌ واحد." },
    headlinePartB: { en: "", ar: "" },
    leadItalic: { en: "Ten specialty departments. Two branches. One standard.", ar: "عشرة أقسام تخصّصية. فرعان. ومعيارٌ واحد." },
    lead: {
      en: "Dermatology, plastic surgery, cosmetic dentistry, OB/GYN, paediatrics, bariatric and more — under one quiet roof in Al Khobar and Al Ahsa.",
      ar: "الجلدية وجراحة التجميل وتجميل الأسنان والنساء والولادة وطب الأطفال وجراحة السمنة — تحت سقف هادئٍ واحد في الخبر والأحساء.",
    },
    primaryCta: { en: "Book on WhatsApp", ar: "احجزي عبر واتساب" },
    secondaryCta: { en: "Our departments", ar: "أقسامنا" },
    pullQuote: { en: "\"They explained three options, then said the simplest one suited me best.\"", ar: "«شرحوا لي ثلاث خيارات، ثم قالوا إنّ الخيار الأبسط هو الأنسب لي.»" },
    pullQuoteAttribution: { en: "Patient · Khobar", ar: "مريضة · الخبر" },
    stats: [
      { value: { en: "10 departments", ar: "١٠ أقسام" }, label: { en: "Under one roof", ar: "تحت سقفٍ واحد" } },
      { value: { en: "4.4 ★", ar: "٤٫٤ ★" }, label: { en: "1,500+ patient reviews", ar: "أكثر من ١٬٥٠٠ تقييم" } },
      { value: { en: "2 branches", ar: "فرعان" }, label: { en: "Al Khobar · Al Ahsa", ar: "الخبر · الأحساء" } },
    ],
  },
  marqueeStrip: {
    line1: { en: "Dermatology · Plastic Surgery · Cosmetic Dentistry · OB/GYN · Paediatrics · Bariatric · Day Surgery · Laser", ar: "الجلدية · التجميل · الأسنان · النساء والولادة · الأطفال · السمنة · الجراحة · الليزر" },
    line2: { en: "Al Khobar HQ · Al Ahsa branch · One hotline 920024428", ar: "المركز الرئيسي في الخبر · فرع الأحساء · الخط الموحّد ٩٢٠٠٢٤٤٢٨" },
  },
  founder: {
    chapterRoman: "II",
    chapterTitle: { en: "Leadership", ar: "القيادة" },
    headlinePartA: { en: "An operation built", ar: "مؤسّسةٌ بُنيت" },
    headlineEm: { en: "around the patient.", ar: "حول المريضة." },
    paragraphs: [
      {
        en: "Bright Specialized Clinics opened in Al Khobar with a single principle: treat every patient like the only patient. From a small dermatology practice, we grew into ten specialty departments — dermatology, plastic surgery, cosmetic dentistry, OB/GYN, paediatrics, bariatric, day surgery, laser, interventional radiology, and psychiatry — all in one place.",
        ar: "افتُتحت عيادات برايت التخصصية في الخبر بمبدأٍ واحد: عاملي كل مريضة كأنّها المريضة الوحيدة. من ممارسة جلدية صغيرة، نمونا إلى عشرة أقسام تخصّصية — الجلدية، التجميل، الأسنان، النساء والولادة، الأطفال، السمنة، الجراحة اليومية، الليزر، الأشعّة التداخلية، والطب النفسي — كلّها في مكانٍ واحد.",
      },
      {
        en: "In 2025 we opened a second branch in Al Ahsa to serve the families of Mubarraz, with the same standard. The promise hasn't changed since day one: excellence is our only title.",
        ar: "وفي عام ٢٠٢٥ افتتحنا فرعنا الثاني في الأحساء لخدمة عوائل المبرّز بنفس المعيار. الوعد لم يتغيّر منذ اليوم الأول: للتميّز عنوانٌ واحد.",
      },
    ],
    name: "Mr. Manea El Manea",
    role: { en: "General Manager · Bright Specialized Clinics", ar: "المدير العام · عيادات برايت التخصصية" },
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
    description: { en: "Saudi privacy by default — we publish the journey, not the face. Time-anchored testimonials from real patients across both branches.", ar: "خصوصية سعودية كافتراضٍ أوّل — ننشر الرحلة، لا الوجه. شهاداتٌ موثَّقة بالزمن من مريضات حقيقيات عبر الفرعين." },
    cta: { en: "See the full gallery", ar: "اطّلعي على المعرض كاملاً" },
    beforeLabel: { en: "Before", ar: "قبل" },
    afterLabel: { en: "After · 8 weeks", ar: "بعد · ٨ أسابيع" },
  },
  reviews: {
    eyebrow: { en: "★ 4.4 / 5 — 1,500+ verified reviews", ar: "★ ٤٫٤ / ٥ — أكثر من ١٬٥٠٠ تقييم موثَّق" },
    pullQuote: { en: "The trusted name across the Eastern Province.", ar: "الاسم الموثوق في المنطقة الشرقية." },
    items: [
      {
        quote: { en: "They explained three options, then said the simplest one suited me best. No upsell, just honest care.", ar: "شرحوا لي ثلاث خيارات، ثم قالوا إنّ الخيار الأبسط هو الأنسب. بلا بيع، رعاية صادقة فقط." },
        name: { en: "Patient · Khobar", ar: "مريضة · الخبر" },
        role: { en: "Filler with Dr. Marina", ar: "فيلر مع د. مارينا" },
        variant: "terracotta",
      },
      {
        quote: { en: "My mother came with me to the first visit. By the third, she had booked her own.", ar: "أمّي أتت معي في الزيارة الأولى. وفي الثالثة، حجزت موعدها الخاص." },
        name: { en: "Patient · Al Ahsa", ar: "مريضة · الأحساء" },
        role: { en: "Hydrafacial with Dr. Wafaa", ar: "هيدرافيشيال مع د. وفاء" },
        variant: "sage",
      },
    ],
    cta: { en: "Read all reviews", ar: "اقرئي كل الآراء" },
  },
  team: {
    eyebrow: { en: "✦ Our clinicians", ar: "✦ أطبّاؤنا" },
    headlinePartA: { en: "Named clinicians.", ar: "أطبّاء بأسمائهم." },
    headlineEm: { en: "Verifiable credentials.", ar: "شهاداتٌ قابلة للتحقّق." },
    items: [
      { name: "Dr. Hassan Nazzal", tag: { en: "Maxillofacial Surgery · Jordanian Board + RCSI Fellowship", ar: "جراحة الفم والوجه · زمالة الكلية الملكية للجرّاحين أيرلندا" }, variant: "terracotta" },
      { name: "Dr. Marina Naddaf", tag: { en: "Senior Dermatology · AAD member since 2004", ar: "الجلدية · عضوة الأكاديمية الأمريكية للأمراض الجلدية" }, variant: "sand" },
      { name: "Dr. Wafaa Saeed", tag: { en: "Dermatology · Al Ahsa branch lead", ar: "الجلدية · رئيسة فرع الأحساء" }, variant: "sage" },
    ],
  },
  bookCta: {
    eyebrow: { en: "✦ Two branches. One number.", ar: "✦ فرعان. خطٌّ موحَّد." },
    headline: { en: "Reach us today.", ar: "تواصلي معنا اليوم." },
    description: { en: "Al Khobar HQ · Al Ahsa branch · Saturday – Thursday 9 AM – 11 PM · Friday after Asr. Same-day WhatsApp confirmation.", ar: "المركز الرئيسي في الخبر · فرع الأحساء · السبت – الخميس ٩ صباحاً – ١١ مساءً · الجمعة بعد العصر. تأكيد عبر واتساب في نفس اليوم." },
    primary: { en: "Book on WhatsApp", ar: "احجزي عبر واتساب" },
    secondary: { en: "Call 920024428", ar: "اتصلي ٩٢٠٠٢٤٤٢٨" },
  },
  faq: {
    eyebrow: { en: "✦ Frequent questions", ar: "✦ أسئلة متكرّرة" },
    headlinePartA: { en: "We've got", ar: "لدينا" },
    headlineEm: { en: "answers.", ar: "الإجابات." },
    description: { en: "Short answers to the questions we hear most. Don't find yours? Message us on WhatsApp.", ar: "إجابات قصيرة لأكثر الأسئلة تكراراً. لا تجدين سؤالك؟ راسلينا على واتساب." },
    cta: { en: "WhatsApp us", ar: "تواصل عبر واتساب" },
    items: [
      { q: { en: "What departments do you offer?", ar: "ما الأقسام التي تقدّمونها؟" }, a: { en: "Ten specialty departments under one roof: dermatology and laser, plastic and aesthetic surgery, cosmetic dentistry and maxillofacial, OB/GYN, paediatrics, bariatric surgery, day surgery, interventional radiology, psychiatry, and a dedicated laser center.", ar: "عشرة أقسام تخصّصية تحت سقف واحد: الجلدية والليزر، جراحة التجميل، الأسنان والفم والوجه، النساء والولادة، طب الأطفال، جراحة السمنة، الجراحة اليومية، الأشعّة التداخلية، الطب النفسي، ومركز ليزر متخصّص." } },
      { q: { en: "Which branches do you have?", ar: "ما هي فروعكم؟" }, a: { en: "Two confirmed branches in Saudi Arabia's Eastern Province: Al Khobar headquarters (Prince Faisal Bin Fahd Road, Al Hada district) and Al Ahsa branch (Khalid Ibn Al-Walid Street, Mubarraz).", ar: "فرعان مؤكّدان في المنطقة الشرقية بالسعودية: المركز الرئيسي في الخبر (شارع الأمير فيصل بن فهد، حي الهدا) وفرع الأحساء (شارع خالد بن الوليد، المبرّز)." } },
      { q: { en: "How do I book?", ar: "كيف أحجز؟" }, a: { en: "WhatsApp 0557337555, call our unified hotline 920024428, or use the booking form. Same-day confirmation on WhatsApp during business hours.", ar: "راسلينا على واتساب ٠٥٥٧٣٣٧٥٥٥، أو اتّصلي على الخط الموحّد ٩٢٠٠٢٤٤٢٨، أو استخدمي نموذج الحجز. التأكيد عبر واتساب في نفس اليوم خلال ساعات العمل." } },
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
      eyebrow: { en: "✦ Departments", ar: "✦ الأقسام" },
      title: { en: "Ten specialties,", ar: "عشرة تخصّصات،" },
      titleEm: { en: "two branches.", ar: "فرعان." },
      sub: { en: "A full index of what Bright Specialized Clinics offers across the Eastern Province — Al Khobar HQ and Al Ahsa branch, since 2018.", ar: "فهرس كامل لما تقدّمه عيادات برايت التخصصية عبر المنطقة الشرقية — المركز الرئيسي بالخبر وفرع الأحساء، منذ ٢٠١٨." },
    },
    items: [
      {
        num: "I",
        name: { en: "Department I — Dermatology & Laser", ar: "القسم الأوّل — الجلدية والليزر" },
        sub: { en: "Skin science under Dr. Marina Naddaf", ar: "علم البشرة تحت إشراف د. مارينا نداف" },
        blurb: { en: "Medical and cosmetic dermatology led by Dr. Marina Naddaf — AAD member since 2004, Canadian Laser Diploma, twenty-five years across the Gulf. Restrained protocols that age gracefully.", ar: "الجلدية الطبّية والتجميلية بقيادة د. مارينا نداف — عضوة الأكاديمية الأمريكية للأمراض الجلدية منذ ٢٠٠٤، دبلوم الليزر الكندي، خمسة وعشرون عاماً في الخليج. بروتوكولات معتدلة تشيخ بكرامة." },
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
        sub: { en: "Maxillofacial under Dr. Hassan Nazzal", ar: "الفم والوجه تحت إشراف د. حسن نزال" },
        blurb: { en: "Aesthetic and reconstructive surgery led by Dr. Hassan Nazzal — Jordanian Board, Royal College of Surgeons in Ireland Fellowship. Restraint and proportion over volume.", ar: "جراحة التجميل والترميم بقيادة د. حسن نزال — المجلس الأردني، زمالة الكلية الملكية للجرّاحين في أيرلندا. الاعتدال والتناسق فوق الحجم." },
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
        blurb: { en: "Gynecology, intimate health, and women's wellness led by Dr. Nadeen Kabboura. Female-only sessions available on request — booking via WhatsApp 0557337555.", ar: "أمراض النساء والولادة والصحّة الحميمة وعافية المرأة بقيادة د. نادين كبورا. جلسات نسائية فقط متاحة عند الطلب — الحجز عبر واتساب ٠٥٥٧٣٣٧٥٥٥." },
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
      { name: "Maxillofacial surgical suite", description: { en: "Full surgical setup for Dr. Hassan Nazzal's procedures.", ar: "غرفة جراحية كاملة لإجراءات د. حسن نزال." } },
    ],
    bookCta: {
      headline: { en: "Not sure which department fits?", ar: "غير متأكّدة أي قسم يناسبك؟" },
      description: { en: "WhatsApp us — we will help you book with the right specialist.", ar: "راسلينا على واتساب — نُساعدك على اختيار الموعد المناسب مع الأخصّائي الصحيح." },
    },
  },

  doctorsPage: {
    hero: {
      roman: "I",
      eyebrow: { en: "✦ Our Clinicians", ar: "✦ أطبّاؤنا" },
      title: { en: "Named clinicians.", ar: "أطبّاءٌ بأسمائهم." },
      titleEm: { en: "Verifiable credentials.", ar: "شهاداتٌ قابلة للتحقّق." },
      sub: { en: "Eight specialist physicians and a full medical team across two branches. Every name listed here is publicly verifiable.", ar: "ثمانية أطبّاء تخصّصيين وفريق طبّي كامل عبر فرعين. كل اسم هنا قابل للتحقّق علناً." },
    },
    items: [
      {
        name: "Dr. Hassan Nazzal",
        role: { en: "Maxillofacial Surgery · Senior partner", ar: "جراحة الفم والوجه والفكين · شريك أول" },
        bio: { en: "Jordanian Board–certified maxillofacial surgeon with Fellowship from the Royal College of Surgeons in Ireland. Featured as the senior partner of the Khobar HQ.", ar: "جرّاح فم ووجه وفكّين معتمَد من المجلس الأردني، حاصل على زمالة الكلية الملكية للجرّاحين في أيرلندا. الشريك الأوّل في المركز الرئيسي بالخبر." },
        credentials: ["MD · Jordanian Board of Maxillofacial Surgery", "FRCS · Royal College of Surgeons in Ireland", "Senior partner · Bright Specialized Clinics"],
        variant: "terracotta",
      },
      {
        name: "Dr. Marina Naddaf",
        role: { en: "Senior Dermatology · Laser specialist", ar: "الجلدية · أخصّائية ليزر" },
        bio: { en: "American Academy of Dermatology member since 2004. Canadian Laser Diploma. Twenty-five years of patient care across the Gulf — quiet results, never theatrical.", ar: "عضوة الأكاديمية الأمريكية للأمراض الجلدية منذ ٢٠٠٤. دبلوم الليزر الكندي. خمسة وعشرون عاماً من العناية بالمريضات في الخليج — نتائج هادئة، بلا مبالغة." },
        credentials: ["MD · MSc Dermatology", "AAD member since 2004", "Canadian Laser Diploma", "25+ years in practice"],
        variant: "sand",
      },
      {
        name: "Dr. Wafaa Saeed",
        role: { en: "Dermatology · Al Ahsa branch lead", ar: "الجلدية · رئيسة فرع الأحساء" },
        bio: { en: "Egyptian Fellowship in dermatology. Leads the Al Ahsa branch as its face and primary clinician. Specialises in full-face aesthetic protocols.", ar: "زمالة مصرية في الأمراض الجلدية. تقود فرع الأحساء كوجهه الأوّل وطبيبته الرئيسية. متخصّصة في بروتوكولات تجميل الوجه الكامل." },
        credentials: ["MD · Egyptian Fellowship Dermatology", "Al Ahsa branch lead since 2025"],
        variant: "sage",
      },
      {
        name: "Dr. Doaa Goda",
        role: { en: "Cosmetic Aesthetics · Injectables", ar: "تجميل · حقن" },
        bio: { en: "Specialist in fillers, Botox, and body cosmetic procedures. Patient-favourite for natural, undetectable results.", ar: "متخصّصة في الفيلر والبوتوكس والإجراءات التجميلية للجسم. مفضّلة المريضات للنتائج الطبيعية غير الملحوظة." },
        credentials: ["MD · Cosmetic Aesthetics", "Filler & Botox specialist"],
        variant: "terracotta",
      },
      {
        name: "Dr. Nadeen Kabboura",
        role: { en: "OB/GYN · Intimate health", ar: "النساء والولادة · الصحّة الحميمة" },
        bio: { en: "Consultant in gynecology and intimate health. Provides discreet, women-only consultations.", ar: "استشاريّة في النساء والولادة والصحّة الحميمة. تقدّم استشارات نسائية بسرية تامّة." },
        credentials: ["MD · OB/GYN Consultant"],
        variant: "sand",
      },
      {
        name: "Dr. Amirah Mohannadi",
        role: { en: "Aesthetic injectables · Lip work", ar: "حقن تجميلية · شفاه" },
        bio: { en: "Specialist in lip filler artistry. Known for restrained volumes that respect natural facial proportions.", ar: "متخصّصة في فيلر الشفاه. مشهورة بكميّات معتدلة تحترم تناسق الوجه الطبيعي." },
        credentials: ["MD · Aesthetic Medicine"],
        variant: "sage",
      },
    ],
  },

  aboutPage: {
    hero: {
      roman: "I",
      eyebrow: { en: "✦ About Bright", ar: "✦ عن برايت" },
      title: { en: "Two branches.", ar: "فرعان." },
      titleEm: { en: "One standard.", ar: "ومعيارٌ واحد." },
      sub: { en: "Bright Specialized Clinics opened in Al Khobar in 2018. Today we serve Eastern Province families across ten specialty departments and two branches — Al Khobar HQ and Al Ahsa.", ar: "افتُتحت عيادات برايت التخصصية في الخبر عام ٢٠١٨. اليوم نخدم عوائل المنطقة الشرقية عبر عشرة أقسام تخصّصية وفرعين — المركز الرئيسي بالخبر والأحساء." },
    },
    chapters: [
      { n: "I", title: { en: "Khobar, 2018", ar: "الخبر، ٢٠١٨" }, body: { en: "Bright opened on Prince Faisal Bin Fahd Road in Al Hada district with a simple operational principle: treat every patient as if she were the only patient. The first department was dermatology, under the eye of Dr. Marina Naddaf, already an American Academy of Dermatology member since 2004.", ar: "افتُتحت برايت في شارع الأمير فيصل بن فهد بحي الهدا بمبدأٍ تشغيليّ بسيط: عاملي كل مريضة كأنّها المريضة الوحيدة. القسم الأوّل كان الجلدية، تحت إشراف د. مارينا نداف، التي كانت آنذاك عضوة الأكاديمية الأمريكية للأمراض الجلدية منذ ٢٠٠٤." }, variant: "sand" },
      { n: "II", title: { en: "Ten departments", ar: "عشرة أقسام" }, body: { en: "Over the next years, the clinic expanded into ten specialty departments under one roof — dermatology, plastic surgery, cosmetic dentistry, OB/GYN, paediatrics, bariatric surgery, day surgery, interventional radiology, psychiatry, and a dedicated laser centre. Dr. Hassan Nazzal joined as senior partner, bringing his Royal College of Surgeons in Ireland Fellowship to the maxillofacial wing.", ar: "وعلى مدى السنوات التالية، توسّعت العيادة لتشمل عشرة أقسام تخصّصية تحت سقفٍ واحد — الجلدية، التجميل، الأسنان، النساء والولادة، الأطفال، السمنة، الجراحة اليومية، الأشعّة التداخلية، الطب النفسي، ومركز ليزر متخصّص. د. حسن نزال انضمّ شريكاً أوّل، حاملاً معه زمالته من الكلية الملكية للجرّاحين في أيرلندا إلى قسم الفمّ والوجه." }, variant: "terracotta" },
      { n: "III", title: { en: "Al Ahsa, 2025", ar: "الأحساء، ٢٠٢٥" }, body: { en: "In January 2025, Bright opened its second branch in Al Ahsa — on Khalid Ibn Al-Walid Street in Mubarraz — under the clinical leadership of Dr. Wafaa Saeed. The promise: same standard as Khobar, closer to the families of Hofuf and Mubarraz.", ar: "في يناير ٢٠٢٥، افتتحت برايت فرعها الثاني في الأحساء — على شارع خالد بن الوليد في المبرّز — تحت إشراف د. وفاء سعيد سريرياً. الوعد: نفس معيار الخبر، أقرب لعوائل الهفوف والمبرّز." }, variant: "sage" },
      { n: "IV", title: { en: "What stays the same", ar: "ما يبقى ثابتاً" }, body: { en: "Across two branches, ten departments, six named clinicians, and thousands of patients — the promise hasn't moved. Excellence is our only title. We listen first, run diagnostics second, treat third, and follow up always. No upsell. No theatre. No claim we cannot verify.", ar: "عبر فرعين، عشرة أقسام، ستة أطبّاء بأسمائهم، وآلاف المريضات — الوعد لم يتحرّك. للتميّز عنوانٌ واحد. نُصغي أولاً، نُشخّص ثانياً، نُعالج ثالثاً، ونتابع دائماً. لا بيع. لا استعراض. لا ادّعاء لا نستطيع إثباته." }, variant: "dark" },
    ],
    commitments: [
      { n: "I", title: { en: "Specialist-led", ar: "بإشراف الأخصّائيين" }, description: { en: "Every department led by a board-certified or fellowship-trained specialist physician — not a general practitioner.", ar: "كل قسم يقوده طبيب أخصّائي معتمَد أو حاصل على زمالة — لا طبيب عام." } },
      { n: "II", title: { en: "Verifiable credentials", ar: "شهادات قابلة للتحقّق" }, description: { en: "Every credential we display is independently checkable through the issuing authority — RCSI, AAD, SCFHS, SFDA.", ar: "كل شهادة نعرضها قابلة للتحقّق المستقل عبر الجهة المُصدِرة — RCSI، AAD، الهيئة السعودية للتخصّصات الصحية، الهيئة العامة للغذاء والدواء." } },
      { n: "III", title: { en: "Saudi privacy first", ar: "الخصوصية السعودية أولاً" }, description: { en: "No patient face photographs. No biometric data. Female-only sessions on request. PDPL-compliant data handling.", ar: "لا صور وجوه مريضات. لا بيانات حيوية. جلسات نسائية فقط عند الطلب. تعامل مع البيانات متوافق مع قانون حماية البيانات الشخصية." } },
      { n: "IV", title: { en: "Same standard, both branches", ar: "نفس المعيار، في كلا الفرعين" }, description: { en: "Khobar HQ and Al Ahsa operate to the same clinical and service standard. The Al Ahsa team is led by Dr. Wafaa Saeed.", ar: "المركز الرئيسي بالخبر وفرع الأحساء يعملان بنفس المعيار السريري والخدمي. فريق الأحساء بقيادة د. وفاء سعيد." } },
    ],
    location: {
      eyebrow: { en: "✦ Visit", ar: "✦ زورونا" },
      headlinePartA: { en: "Two branches.", ar: "فرعان." },
      headlineEm: { en: "Same standard.", ar: "نفس المعيار." },
      description: { en: "Khobar HQ — Prince Faisal Bin Fahd Rd, Al Hada district (opposite Toyota agency), Al Khobar 34439. Al Ahsa branch — Khalid Ibn Al-Walid Street, Mubarraz. Unified hotline 920024428. Same-day WhatsApp confirmation on 0557337555.", ar: "المركز الرئيسي بالخبر — شارع الأمير فيصل بن فهد، حي الهدا (مقابل وكالة تويوتا)، الخبر ٣٤٤٣٩. فرع الأحساء — شارع خالد بن الوليد، المبرّز. الخط الموحّد ٩٢٠٠٢٤٤٢٨. تأكيد عبر واتساب في نفس اليوم على ٠٥٥٧٣٣٧٥٥٥." },
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
      { shortQuote: { en: "\"They explained three options, then said the simplest one suited me best.\"", ar: "«شرحوا لي ثلاث خيارات، ثم قالوا إنّ الخيار الأبسط هو الأنسب لي.»" }, longQuote: { en: "No upsell, no pressure. Dr. Marina walked me through three filler approaches, then recommended the most conservative one. Six weeks later my husband noticed I 'looked rested' — that's the whole point.", ar: "لا بيع، لا ضغط. د. مارينا شرحت لي ثلاثة أساليب للفيلر، ثم اقترحت الأكثر اعتدالاً. بعد ستة أسابيع لاحظ زوجي أنّي «أبدو مرتاحة» — هذا هو الهدف كلّه." }, name: "Patient · Khobar", date: { en: "Apr 2026", ar: "أبريل ٢٠٢٦" }, variant: "terracotta", stars: 5 },
      { shortQuote: { en: "\"My mother came with me, then she booked for herself.\"", ar: "«أمّي أتت معي، ثم حجزت موعدها.»" }, longQuote: { en: "First visit was for me — Hydrafacial with Dr. Wafaa at the Al Ahsa branch. By my third visit my mother had her own appointment. We're now three patients from the same family.", ar: "الزيارة الأولى كانت لي — هيدرافيشيال مع د. وفاء في فرع الأحساء. بحلول زيارتي الثالثة كانت أمّي قد حجزت موعدها. أصبحنا الآن ثلاث مريضات من نفس العائلة." }, name: "Patient · Al Ahsa", date: { en: "Mar 2026", ar: "مارس ٢٠٢٦" }, variant: "sage", stars: 5 },
      { shortQuote: { en: "\"Dr. Hassan rebuilt my smile around my face, not a template.\"", ar: "«د. حسن أعاد بناء ابتسامتي حول وجهي، لا حول قالب.»" }, longQuote: { en: "I went to two clinics for veneer consultations — both showed me the same six-shape templates. Dr. Hassan Nazzal photographed my face and designed the veneers around my actual proportions. Different conversation.", ar: "ذهبت إلى عيادتين لاستشارات الفينير — كلتاهما عرضت عليّ نفس الستّة قوالب. د. حسن نزال صوّر وجهي وصمّم الفينير حول تناسقي الفعلي. محادثة مختلفة." }, name: "Patient · Khobar", date: { en: "Feb 2026", ar: "فبراير ٢٠٢٦" }, variant: "sand", stars: 5 },
      { shortQuote: { en: "\"I came for a consult, stayed for ten years.\"", ar: "«جئت لاستشارة، بقيت عشر سنوات.»" }, longQuote: { en: "Started at Bright with Dr. Marina before they had the Al Ahsa branch. Watched the chain grow — same hands, same standard. That kind of continuity is rare in this market.", ar: "بدأت في برايت مع د. مارينا قبل أن يكون لديهم فرع الأحساء. شاهدت السلسلة تنمو — نفس الأيدي، نفس المعيار. هذه الاستمرارية نادرة في هذا السوق." }, name: "Patient · Khobar", date: { en: "Jan 2026", ar: "يناير ٢٠٢٦" }, variant: "terracotta", stars: 5 },
      { shortQuote: { en: "\"They accept Tabby — that mattered.\"", ar: "«يقبلون تابي — هذا فرّق معي.»" }, longQuote: { en: "Full Hollywood Smile would have been impossible to budget in one payment. The coordinator quietly mentioned Tabby and Tamara, both within the SAR 10K cap. Made everything possible.", ar: "ابتسامة هوليوود الكاملة كانت مستحيلة بدفعة واحدة في ميزانيتي. المنسّقة ذكرت بهدوء تابي وتمارا، كلاهما ضمن سقف ١٠ آلاف ريال. جعلت كل شيء ممكناً." }, name: "Patient · Al Ahsa", date: { en: "Mar 2026", ar: "مارس ٢٠٢٦" }, variant: "sage", stars: 5 },
      { shortQuote: { en: "\"Female-only session — they made it normal, not exceptional.\"", ar: "«جلسة نسائية فقط — جعلوها طبيعية، لا استثناء.»" }, longQuote: { en: "Asked for an all-female team at booking. The receptionist confirmed without questions. Female specialist, female nurse, female receptionist on the floor that day. No drama, no extra fee.", ar: "طلبت فريقاً نسائياً كاملاً عند الحجز. الاستقبال أكّدت بدون أسئلة. أخصّائية، ممرّضة، استقبال — كلهنّ نساء في ذلك اليوم. بلا دراما، بلا رسوم إضافية." }, name: "Patient · Khobar", date: { en: "Feb 2026", ar: "فبراير ٢٠٢٦" }, variant: "sand", stars: 5 },
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
      tag: { en: "Featured essay", ar: "مقال مميّز" },
      title: { en: "Eid prep without panic — a six-week glow plan", ar: "تجهيز العيد بدون قلق — خطّة إشراقة لستّة أسابيع" },
      excerpt: { en: "What I recommend for patients booking their first visit four to six weeks before Eid — restraint over rush, science over season.", ar: "ما أوصي به للمريضات اللاتي يحجزن أوّل موعد قبل العيد بأربعة إلى ستة أسابيع — الاعتدال فوق الاستعجال، العلم فوق الموسم." },
      author: "Dr. Marina Naddaf",
      date: { en: "May 2026", ar: "مايو ٢٠٢٦" },
      variant: "terracotta",
    },
    posts: [
      { tag: { en: "Dentistry", ar: "أسنان" }, title: { en: "When veneers are the right call (and when they're not)", ar: "متى يكون الفينير الخيار الصحيح (ومتى لا يكون)" }, author: "Dr. Hassan Nazzal", date: { en: "12 Apr 2026", ar: "١٢ أبريل ٢٠٢٦" }, variant: "sand" },
      { tag: { en: "Women's Health", ar: "صحّة المرأة" }, title: { en: "Three questions to ask your OB/GYN this year", ar: "ثلاثة أسئلة لطبيبة النساء والولادة في هذا العام" }, author: "Dr. Nadeen Kabboura", date: { en: "28 Mar 2026", ar: "٢٨ مارس ٢٠٢٦" }, variant: "sage" },
      { tag: { en: "Dermatology", ar: "جلدية" }, title: { en: "Laser hair removal in summer — what actually works in Saudi heat", ar: "إزالة الشعر بالليزر في الصيف — ما يعمل فعلاً في حرارة السعودية" }, author: "Dr. Marina Naddaf", date: { en: "14 Mar 2026", ar: "١٤ مارس ٢٠٢٦" }, variant: "terracotta" },
      { tag: { en: "Aesthetics", ar: "تجميل" }, title: { en: "Lip filler — three volumes I recommend, and the one I refuse", ar: "فيلر الشفاه — ثلاثة أحجام أوصي بها، وحجمٌ واحد أرفضه" }, author: "Dr. Amirah Mohannadi", date: { en: "01 Mar 2026", ar: "١ مارس ٢٠٢٦" }, variant: "sand" },
      { tag: { en: "Practice", ar: "ممارسة" }, title: { en: "When we say no — three cases we declined this month", ar: "متى نقول «لا» — ثلاث حالات رفضناها هذا الشهر" }, author: "Bright Clinical Team", date: { en: "14 Feb 2026", ar: "١٤ فبراير ٢٠٢٦" }, variant: "dark" },
      { tag: { en: "Saudi Care", ar: "رعاية سعودية" }, title: { en: "What our Al Ahsa patients taught us in year one", ar: "ما علّمتنا إيّاه مريضات الأحساء في عامنا الأوّل" }, author: "Dr. Wafaa Saeed", date: { en: "28 Jan 2026", ar: "٢٨ يناير ٢٠٢٦" }, variant: "sage" },
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
