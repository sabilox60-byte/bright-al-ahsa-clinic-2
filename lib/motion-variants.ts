/**
 * Motion variants — used by ScrollReveal + AnimatedSection.
 * Matches the existing `--ease-standard` cubic-bezier(0.4,0,0.2,1).
 *
 * Designed to feel inevitable, not decorated. Restraint is the brand.
 */

export const EASE = [0.4, 0, 0.2, 1] as const;
export const EASE_GENTLE = [0.16, 1, 0.3, 1] as const;
export const EASE_BREATH = [0.45, 0, 0.55, 1] as const;

export const fadeUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.6, ease: EASE },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.4, ease: EASE },
};

export const slideRight = {
  initial: { opacity: 0, x: -16 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5, ease: EASE },
};

export const slideLeft = {
  initial: { opacity: 0, x: 16 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5, ease: EASE },
};

/** Stagger children for hero stat rows, service grids, etc. */
export const staggerContainer = (stagger = 0.08, delay = 0) => ({
  animate: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

export const staggerChild = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

/** Image reveal — clip-path mask wipe. Use for hero portrait reveal. */
export const clipReveal = {
  initial: { clipPath: "inset(0 100% 0 0)" },
  animate: { clipPath: "inset(0 0 0 0)" },
  transition: { duration: 1.0, ease: EASE_GENTLE },
};

/** Headline mask — reveals each line from below. */
export const lineRise = (delay = 0) => ({
  initial: { y: "100%", opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.7, ease: EASE_GENTLE, delay },
});

/** Subtle attention pulse — used once on CTAs to draw eye without nagging. */
export const breathPulse = {
  animate: {
    scale: [1, 1.012, 1],
    transition: { duration: 4.2, ease: EASE_BREATH, repeat: Infinity, repeatType: "loop" as const },
  },
};
