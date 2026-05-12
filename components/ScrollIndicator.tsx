"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";

/**
 * Mobile-only "continue scrolling" indicator at hero bottom.
 * Auto-hides after first scroll. Premium-magazine pattern.
 */
export default function ScrollIndicator({ locale = "en" }: { locale?: Locale }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY < 80);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="scroll-indicator"
      aria-hidden
      style={{
        position: "absolute",
        bottom: 28,
        left: "50%",
        transform: `translateX(-50%) translateY(${visible ? 0 : 16}px)`,
        opacity: visible ? 1 : 0,
        transition: "opacity 320ms, transform 320ms",
        display: "none", // mobile-only via media query
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        pointerEvents: "none",
        zIndex: 4,
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-italiana), serif",
          fontSize: 10,
          letterSpacing: "0.32em",
          textTransform: "uppercase",
          color: "#8f7548",
        }}
      >
        {locale === "ar" ? "اسحبي" : "Scroll"}
      </span>
      <span
        style={{
          width: 1,
          height: 32,
          background: "linear-gradient(180deg, rgba(178,147,98,0.6) 0%, transparent 100%)",
          animation: "scrollPulse 2.4s ease-in-out infinite",
        }}
      />
    </div>
  );
}
