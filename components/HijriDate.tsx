/**
 * Hijri + Gregorian dual date display.
 *
 * Saudi cultural marker — every premium clinic should show both calendars.
 * Zero agencies do this. Tiny detail, massive Khaleeji trust signal.
 *
 * Uses Intl.DateTimeFormat with Islamic-umalqura calendar.
 */

interface Props {
  date: Date | string;
  locale?: "en" | "ar";
  separator?: string;
  /** show "1 March 2026" or "01.03.26" — long is default */
  format?: "long" | "short";
}

export default function HijriDate({ date, locale = "en", separator = "·", format = "long" }: Props) {
  const d = typeof date === "string" ? new Date(date) : date;
  const localeTag = locale === "ar" ? "ar-SA" : "en-GB";

  const gregOptions: Intl.DateTimeFormatOptions =
    format === "long"
      ? { day: "numeric", month: "long", year: "numeric" }
      : { day: "2-digit", month: "2-digit", year: "2-digit" };

  const hijriOptions: Intl.DateTimeFormatOptions =
    format === "long"
      ? { day: "numeric", month: "long", year: "numeric", calendar: "islamic-umalqura" } as Intl.DateTimeFormatOptions
      : { day: "2-digit", month: "2-digit", year: "2-digit", calendar: "islamic-umalqura" } as Intl.DateTimeFormatOptions;

  let gregorian = "";
  let hijri = "";
  try {
    gregorian = new Intl.DateTimeFormat(localeTag, gregOptions).format(d);
    hijri = new Intl.DateTimeFormat(localeTag, hijriOptions).format(d);
  } catch {
    gregorian = d.toLocaleDateString();
  }

  return (
    <time dateTime={d.toISOString()} style={{ fontSize: 13, color: "#7f8487", letterSpacing: "0.03em" }}>
      {gregorian}
      {hijri && (
        <>
          <span style={{ margin: "0 8px", opacity: 0.5 }}>{separator}</span>
          <span style={{ fontFamily: locale === "ar" ? "var(--font-amiri), serif" : "var(--font-source-serif), serif" }}>
            {hijri}
          </span>
        </>
      )}
    </time>
  );
}
