/**
 * Saudi Occasion Engine — auto-detects which campaign window is currently active.
 *
 * Returns the SINGLE most-relevant occasion within its campaign window today.
 * Used by EidBanner, BookingPage hero override, and homepage Living Pulse.
 *
 * No external dependencies. Pure date math.
 */

import { clinicExtras, type SaudiOccasion } from "./clinic-extras";

export type ActiveOccasion = SaudiOccasion & {
  /** Whole days remaining until the occasion date (0 = today, negative = past) */
  daysUntil: number;
  /** Whether the campaign window is currently active */
  isActive: boolean;
  /** Whether the occasion itself is happening today */
  isToday: boolean;
};

/**
 * Get the most-relevant active Saudi occasion right now (or null if none).
 *
 * "Most-relevant" rule: among all occasions whose campaign window is active,
 * the one happening SOONEST wins. If none are active, returns null.
 *
 * @param now Optional override — useful for SSR consistency or tests.
 */
export function getActiveOccasion(now: Date = new Date()): ActiveOccasion | null {
  const today = stripTime(now);

  const candidates: ActiveOccasion[] = clinicExtras.saudiOccasions
    .map((occ) => {
      const occDate = stripTime(new Date(occ.date + "T00:00:00"));
      const daysUntil = daysBetween(today, occDate);
      const isActive = daysUntil >= 0 && daysUntil <= occ.campaignWindow;
      const isToday = daysUntil === 0;
      return { ...occ, daysUntil, isActive, isToday };
    })
    .filter((o) => o.isActive)
    .sort((a, b) => a.daysUntil - b.daysUntil);

  return candidates[0] ?? null;
}

/**
 * Get all upcoming occasions within the next N days (for journal landing or sitemap).
 */
export function getUpcomingOccasions(withinDays = 90, now: Date = new Date()): ActiveOccasion[] {
  const today = stripTime(now);
  return clinicExtras.saudiOccasions
    .map((occ) => {
      const occDate = stripTime(new Date(occ.date + "T00:00:00"));
      const daysUntil = daysBetween(today, occDate);
      return {
        ...occ,
        daysUntil,
        isActive: daysUntil >= 0 && daysUntil <= occ.campaignWindow,
        isToday: daysUntil === 0,
      };
    })
    .filter((o) => o.daysUntil >= 0 && o.daysUntil <= withinDays)
    .sort((a, b) => a.daysUntil - b.daysUntil);
}

/**
 * Format the days-until countdown as bilingual copy.
 * Examples: "19 days · 14 hours" / "١٩ يوماً · ١٤ ساعة"
 */
export function formatCountdown(occ: ActiveOccasion, now: Date = new Date()): { en: string; ar: string } {
  const occDate = new Date(occ.date + "T00:00:00");
  const ms = occDate.getTime() - now.getTime();
  if (ms <= 0) return { en: "Today", ar: "اليوم" };
  const totalHours = Math.floor(ms / 3_600_000);
  const days = Math.floor(totalHours / 24);
  const hours = totalHours % 24;
  return {
    en: days > 0 ? `${days} days · ${hours} hours` : `${hours} hours`,
    ar: days > 0 ? `${arabicNumber(days)} يوماً · ${arabicNumber(hours)} ساعة` : `${arabicNumber(hours)} ساعة`,
  };
}

// ─── Helpers ─────────────────────────────────────────────────────────────────
function stripTime(d: Date): Date {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

function daysBetween(from: Date, to: Date): number {
  const ms = to.getTime() - from.getTime();
  return Math.round(ms / 86_400_000);
}

function arabicNumber(n: number): string {
  const map = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
  return String(n)
    .split("")
    .map((c) => (c >= "0" && c <= "9" ? map[Number(c)] : c))
    .join("");
}
