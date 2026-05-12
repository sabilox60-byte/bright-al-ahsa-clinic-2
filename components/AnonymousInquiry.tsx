"use client";

import { useState } from "react";
import { clinicConfig } from "@/lib/clinic-config";
import { clinicExtras } from "@/lib/clinic-extras";
import type { Locale } from "@/lib/i18n";

/**
 * Anonymous inquiry — KSA-specific conversion pattern.
 *
 * Saudi women avoid lead-gen forms for sensitive procedures.
 * Pattern: no name, no email — just a treatment dropdown + an anonymous
 * WhatsApp deep link with a pre-formatted message that hides the patient's
 * identity from us until SHE chooses to reveal it.
 *
 * Conversion psychology: "I can ask without committing to my name yet."
 */

const TOPICS: Array<{ slug: string; en: string; ar: string }> = [
  { slug: "consultation", en: "Free consultation slot", ar: "موعد استشارة مجانية" },
  { slug: "price-range", en: "Anonymous price range", ar: "نطاق سعر دون اسم" },
  { slug: "female-staff", en: "Female-only session", ar: "جلسة طاقم نسائي" },
  { slug: "after-hours", en: "After-hours visit", ar: "زيارة خارج ساعات العمل" },
  { slug: "second-opinion", en: "Second-opinion review", ar: "رأي ثاني" },
];

export default function AnonymousInquiry({ locale = "en" }: { locale?: Locale }) {
  const [topic, setTopic] = useState<string>(TOPICS[0].slug);

  const buildMessage = () => {
    const t = TOPICS.find((x) => x.slug === topic) || TOPICS[0];
    const intro =
      locale === "ar"
        ? "السلام عليكم — أرغب بمعرفة المزيد بدون مشاركة اسمي بعد."
        : "Hello — I'd like to know more without sharing my name yet.";
    const ask =
      locale === "ar" ? `الموضوع: ${t.ar}` : `Topic: ${t.en}`;
    return `${intro}\n\n${ask}`;
  };

  const waLink = `${clinicConfig.contact.whatsappLink}?text=${encodeURIComponent(buildMessage())}`;

  if (!clinicExtras.privacy.anonymousInquiryEnabled) return null;

  return (
    <div
      className="card"
      style={{
        padding: 28,
        background: "rgba(178,147,98,0.04)",
        border: "1px dotted rgba(178,147,98,0.4)",
        boxShadow: "none",
      }}
    >
      <div className="overline" style={{ color: "#8f7548", marginBottom: 12 }}>
        ✦ {locale === "ar" ? "استفسار مجهول" : "Anonymous inquiry"}
      </div>
      <h3 className="font-serif" style={{ fontSize: 22, color: "#0a1f2e", marginBottom: 8 }}>
        {locale === "ar" ? "اسألي قبل أن تشاركي اسمكِ." : "Ask before you share your name."}
      </h3>
      <p
        className="font-prose italic"
        style={{
          fontSize: 15,
          color: "#2a3f4f",
          lineHeight: 1.5,
          marginBottom: 18,
        }}
      >
        {locale === "ar"
          ? "اختاري موضوعكِ، نُرسلكِ لواتساب بدون نموذج، بدون اسم. نجاوبكِ خلال اليوم."
          : "Pick a topic — we WhatsApp you with no form, no name. Same-day reply."}
      </p>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <select
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          aria-label={locale === "ar" ? "اختاري الموضوع" : "Pick a topic"}
          className="input"
          style={{ flex: "1 1 auto", maxWidth: 320, fontSize: 14 }}
        >
          {TOPICS.map((t) => (
            <option key={t.slug} value={t.slug}>
              {locale === "ar" ? t.ar : t.en}
            </option>
          ))}
        </select>
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ flex: "0 0 auto" }}
        >
          {locale === "ar" ? "أرسلي على واتساب" : "Open WhatsApp"} →
        </a>
      </div>
    </div>
  );
}
