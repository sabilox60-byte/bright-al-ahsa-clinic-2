"use client";

import { useEffect, useState } from "react";
import { clinicConfig } from "@/lib/clinic-config";
import type { Locale } from "@/lib/i18n";

/**
 * Mobile-only sticky bottom action bar.
 *
 * The single most impactful mobile pattern for luxury clinic conversion:
 * three primary actions ALWAYS reachable in the thumb zone — no scrolling
 * back, no hunting for a CTA. Appears after user scrolls past hero (~480px).
 *
 * Layout:  [Call]  [Book WhatsApp]  [Ask]
 * Desktop: hidden via display: none in media query.
 */
export default function MobileBookBar({ locale = "en" }: { locale?: Locale }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 480);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <aside
      className="mobile-book-bar"
      aria-label={locale === "ar" ? "إجراءات سريعة" : "Quick actions"}
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 55,
        padding: "10px 14px calc(10px + env(safe-area-inset-bottom))",
        background: "rgba(10, 31, 46, 0.94)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderTop: "1px solid rgba(178, 147, 98, 0.32)",
        display: "none", // Mobile-only via media query in globals.css
        gap: 8,
        transform: visible ? "translateY(0)" : "translateY(110%)",
        transition: "transform 320ms cubic-bezier(0.4, 0, 0.2, 1)",
        boxShadow: "0 -12px 36px rgba(10, 31, 46, 0.25)",
      }}
    >
      {/* Call */}
      <a
        href={`tel:${clinicConfig.contact.phone.replace(/\s/g, "")}`}
        aria-label={locale === "ar" ? "اتصلي" : "Call"}
        style={{
          flex: "0 0 auto",
          width: 52,
          height: 52,
          borderRadius: 999,
          background: "rgba(253, 251, 246, 0.08)",
          border: "1px solid rgba(178, 147, 98, 0.4)",
          color: "#ffffff",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 18,
          textDecoration: "none",
        }}
      >
        ☏
      </a>

      {/* Book on WhatsApp — primary */}
      <a
        href={clinicConfig.contact.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          flex: 1,
          height: 52,
          borderRadius: 999,
          background: "linear-gradient(180deg, #c9a570 0%, #b29362 50%, #8f7548 100%)",
          color: "#ffffff",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 14,
          fontWeight: 600,
          letterSpacing: "0.04em",
          textDecoration: "none",
          boxShadow:
            "0 0 0 1px rgba(143, 117, 72, 0.6), 0 1px 0 rgba(255, 240, 210, 0.4) inset",
          textTransform: "uppercase",
        }}
      >
        <span aria-hidden style={{ marginRight: 8, fontSize: 16 }}>
          ✦
        </span>
        {locale === "ar" ? "احجزي على واتساب" : "Book on WhatsApp"}
      </a>

      {/* Ask the clinic — Voice Concierge trigger via custom event */}
      <button
        type="button"
        aria-label={locale === "ar" ? "اسألي العيادة" : "Ask the clinic"}
        onClick={() => {
          window.dispatchEvent(new CustomEvent("concierge:open"));
        }}
        style={{
          flex: "0 0 auto",
          width: 52,
          height: 52,
          borderRadius: 999,
          background: "rgba(253, 251, 246, 0.08)",
          border: "1px solid rgba(178, 147, 98, 0.4)",
          color: "#ffffff",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 18,
          cursor: "pointer",
        }}
      >
        ✦
      </button>
    </aside>
  );
}
