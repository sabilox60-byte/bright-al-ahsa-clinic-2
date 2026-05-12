import type { CSSProperties } from "react";

type Variant = "terracotta" | "sand" | "sage" | "dark";

const palettes: Record<Variant, { skin: string; line: string; accent: string; bg: string }> = {
  terracotta: { skin: "#f0ece1", line: "#0a1f2e", accent: "#b29362", bg: "#ffffff" },
  sand: { skin: "#f0ece1", line: "#0a1f2e", accent: "#b29362", bg: "#f0ece1" },
  sage: { skin: "#ece5d4", line: "#0a1f2e", accent: "#7f8487", bg: "#ece5d4" },
  dark: { skin: "#2a3f4f", line: "#ffffff", accent: "#b29362", bg: "#0a1f2e" },
};

export default function Portrait({
  variant = "terracotta",
  className = "",
  style = {},
  rounded = 24,
}: {
  variant?: Variant;
  className?: string;
  style?: CSSProperties;
  rounded?: number;
}) {
  const p = palettes[variant];
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        background: p.bg,
        borderRadius: rounded,
        boxShadow: "0 0 0 1px rgba(0,0,0,0.06)",
        ...style,
      }}
    >
      <svg
        viewBox="0 0 240 240"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        {/* head + shoulders silhouette */}
        <path
          d="M 40 240 C 40 190 60 170 80 165 C 70 150 68 130 80 110 C 92 88 118 76 140 84 C 168 94 180 120 174 150 C 172 160 168 170 164 178 C 180 186 196 204 200 240 Z"
          fill={p.skin}
          stroke={p.line}
          strokeWidth="1.8"
        />
        {/* hair sweep */}
        <path
          d="M 80 110 C 78 90 95 70 120 68 C 145 66 168 84 174 108 C 176 118 174 128 170 134 C 164 120 150 112 136 114 C 120 117 108 128 104 138 C 95 128 84 122 80 110 Z"
          fill={p.line}
          opacity="0.9"
        />
        {/* subtle profile line */}
        <path
          d="M 160 140 Q 170 146 165 156 Q 162 162 168 168"
          fill="none"
          stroke={p.line}
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.7"
        />
        {/* accent dot (cheek highlight) */}
        <circle cx="148" cy="148" r="3" fill={p.accent} />
        {/* collar / garment */}
        <path
          d="M 70 210 L 100 200 L 120 220 L 140 200 L 170 210"
          fill="none"
          stroke={p.accent}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
