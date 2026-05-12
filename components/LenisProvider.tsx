"use client";

import { useEffect } from "react";

/**
 * Lenis smooth-scroll provider. Add once at root layout.
 * 2.13 KB. Doesn't hijack scroll — eases native scroll, preserving keyboard nav.
 *
 * NOTE: Requires `lenis` package. Falls back to noop if not installed.
 */
export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let lenisInstance: { destroy: () => void } | null = null;
    let raf: number;

    (async () => {
      try {
        const mod = await import("lenis");
        const Lenis = (mod as { default: new (opts?: Record<string, unknown>) => { raf: (t: number) => void; destroy: () => void } }).default;
        const lenis = new Lenis({
          duration: 1.05,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: "vertical",
          gestureOrientation: "vertical",
          smoothWheel: true,
          syncTouch: false, // off on mobile — native scroll is better
        });
        lenisInstance = lenis;
        const tick = (time: number) => {
          lenis.raf(time);
          raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      } catch {
        // lenis not installed — degrade gracefully to native scroll
      }
    })();

    return () => {
      if (raf) cancelAnimationFrame(raf);
      lenisInstance?.destroy();
    };
  }, []);

  return <>{children}</>;
}
