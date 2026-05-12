import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.5rem", lg: "2rem" },
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        ink: "#0a1f2e",
        "ink-soft": "#2a3f4f",
        muted: "#6a7785",
        primary: "#b8935a",
        "primary-deep": "#9a7847",
        warm: "#d4b87a",
        canvas: "#f8f6f0",
        "canvas-soft": "#fdfbf6",
        sand: "#ede5d3",
        "card-warm": "#f0ead8",
        border: "#d4cdb8",
      },
      fontFamily: {
        serif: ["var(--font-source-serif)", "Source Serif 4", "Georgia", "serif"],
        garamond: ["var(--font-cormorant)", "Cormorant Garamond", "Georgia", "serif"],
        display: ["var(--font-italiana)", "Italiana", "Georgia", "serif"],
        sans: ["var(--font-inter-tight)", "Inter Tight", "system-ui", "sans-serif"],
        arabic: ["var(--font-amiri)", "Amiri", "Noto Naskh Arabic", "serif"],
      },
      animation: {
        "fade-up": "fadeUp 700ms cubic-bezier(0.4, 0, 0.2, 1) both",
        marquee: "marquee 40s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
