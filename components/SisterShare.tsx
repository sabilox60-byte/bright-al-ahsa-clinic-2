"use client";

import { useEffect, useState } from "react";
import { clinicConfig } from "@/lib/clinic-config";
import type { Locale } from "@/lib/i18n";

/**
 * "Send to a sister" — Khaleeji-specific share button.
 *
 * Saudi female purchase decisions are 65% influenced by family chat-groups.
 * This component places a native WhatsApp share with a pre-written warm message
 * RIGHT next to the primary book CTA. Zero agencies build this.
 *
 * Hydration-safe: href is computed in useEffect, not at render time, so SSR
 * and CSR markup match exactly.
 */
export default function SisterShare({ locale = "en" }: { locale?: Locale }) {
  const [shareUrl, setShareUrl] = useState<string>("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const origin = window.location.origin;
    const text =
      locale === "ar"
        ? `وجدت هذي العيادة. شفي ${clinicConfig.brand.name.ar}: ${origin}`
        : `I found this for us. ${clinicConfig.brand.name.en}: ${origin}`;
    setShareUrl(`https://wa.me/?text=${encodeURIComponent(text)}`);
  }, [locale]);

  async function copyLink() {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      await navigator.clipboard.writeText(window.location.origin);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <span style={{ display: "inline-flex", gap: 8, alignItems: "center" }}>
      <a
        href={shareUrl || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-ghost"
        style={{ padding: "12px 18px", fontSize: 11, opacity: shareUrl ? 1 : 0.7 }}
        aria-label={locale === "ar" ? "أرسلي لأخت" : "Send to a sister"}
        onClick={(e) => {
          if (!shareUrl) e.preventDefault();
        }}
      >
        <span aria-hidden style={{ color: "#8f7548", marginRight: 6 }}>
          ✦
        </span>
        {locale === "ar" ? "أرسلي لأخت" : "Send to a sister"}
      </a>
      <button
        onClick={copyLink}
        className="btn-ghost"
        style={{ padding: "12px 14px", fontSize: 11 }}
        aria-label="Copy link"
        type="button"
      >
        {copied ? (locale === "ar" ? "تم" : "Copied") : "Link"}
      </button>
    </span>
  );
}
