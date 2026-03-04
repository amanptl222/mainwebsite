import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./config/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1F3A",
          dark: "#061428",
          light: "#122a47",
        },
        accent: {
          blue: "#2563EB",
          "blue-light": "#3B82F6",
          "blue-dark": "#1D4ED8",
        },
        gray: {
          soft: "#94A3B8",
          muted: "#64748B",
          border: "#334155",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display": ["clamp(2.5rem, 5vw, 4rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(3rem, 6vw, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
      },
      spacing: {
        "18": "4.5rem",
        "30": "7.5rem",
        "section": "clamp(5rem, 10vw, 7rem)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        "soft": "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
        "card": "0 4px 6px -1px rgba(11, 31, 58, 0.08), 0 2px 4px -2px rgba(11, 31, 58, 0.06)",
        "card-hover": "0 20px 25px -5px rgba(11, 31, 58, 0.1), 0 8px 10px -6px rgba(11, 31, 58, 0.08)",
        "glow": "0 0 40px -10px rgba(37, 99, 235, 0.35)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
