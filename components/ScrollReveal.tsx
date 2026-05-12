"use client";

import { useEffect, useRef, useState } from "react";

type Variant = "fade-up" | "fade" | "clip-reveal" | "slide-right" | "slide-left";

interface Props {
  children: React.ReactNode;
  variant?: Variant;
  /** Delay before transition begins (ms) */
  delay?: number;
  /** Trigger when element is N% in view (0–1). Default 0.15 */
  threshold?: number;
  /** Once revealed, never hide again. Default true. */
  once?: boolean;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

/**
 * Plain IntersectionObserver-based reveal. No motion library needed.
 * Respects `prefers-reduced-motion`.
 */
export default function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  threshold = 0.15,
  once = true,
  className = "",
  as: As = "div",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) obs.disconnect();
          } else if (!once) {
            setVisible(false);
          }
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, once]);

  const styles = baseStyles(variant, visible, delay);
  const Tag = As as React.ElementType;

  return (
    <Tag ref={ref} className={className} style={styles}>
      {children}
    </Tag>
  );
}

function baseStyles(variant: Variant, visible: boolean, delay: number): React.CSSProperties {
  const transition = `opacity 700ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 700ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, clip-path 1100ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`;
  if (variant === "fade") {
    return { opacity: visible ? 1 : 0, transition };
  }
  if (variant === "fade-up") {
    return { opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(14px)", transition };
  }
  if (variant === "slide-right") {
    return { opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(-16px)", transition };
  }
  if (variant === "slide-left") {
    return { opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(16px)", transition };
  }
  if (variant === "clip-reveal") {
    return {
      clipPath: visible ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
      transition,
    };
  }
  return {};
}
