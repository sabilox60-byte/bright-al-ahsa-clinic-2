import Image from "next/image";
import Link from "next/link";

export default function Logo({
  dark = false,
  size = 22,
}: {
  dark?: boolean;
  size?: number;
}) {
  // Full bilingual lockup — 2.5x token so both Arabic + Latin lines read with presence.
  const displayHeight = Math.round(size * 2.5);

  return (
    <Link
      href="/"
      className="inline-flex items-center no-underline"
      aria-label="Bright Medical Center · مجمع برايت الطبي"
    >
      <Image
        src="/brand/bright-logo.png"
        alt="Bright Medical Center"
        width={520}
        height={178}
        priority
        style={{
          height: displayHeight,
          width: "auto",
          filter: dark ? "brightness(0) invert(1)" : "none",
        }}
      />
    </Link>
  );
}
