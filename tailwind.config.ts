import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0f7ff",
          100: "#e0effe",
          200: "#bae0fd",
          300: "#7cc5fb",
          400: "#36a6f7",
          500: "#0c8ce9",
          600: "#006ec7",
          700: "#0158a1",
          800: "#064b84",
          900: "#0b3f6f",
          950: "#07284a",
          azure: "#0066FF",
          electric: "#0052FF",
          cyan: "#00D2FF",
        },
        surface: {
          white: "#FFFFFF",
          ice: "#F4F8FC",
          mist: "#EBF3FB",
          card: "rgba(255, 255, 255, 0.8)",
          cardHover: "rgba(255, 255, 255, 0.95)",
          border: "rgba(0, 102, 255, 0.12)",
          borderHover: "rgba(0, 102, 255, 0.35)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-outfit)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      boxShadow: {
        glow: "0 0 30px -5px rgba(0, 102, 255, 0.25)",
        "glow-lg": "0 0 50px -10px rgba(0, 102, 255, 0.35)",
        "glow-cyan": "0 0 35px -5px rgba(0, 210, 255, 0.3)",
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.07)",
        card: "0 4px 20px -2px rgba(15, 23, 42, 0.05), 0 2px 6px -1px rgba(15, 23, 42, 0.03)",
        "card-hover": "0 20px 40px -15px rgba(0, 102, 255, 0.15), 0 0 1px 1px rgba(0, 102, 255, 0.2)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shimmer: "shimmer 2.5s linear infinite",
        spinSlow: "spin 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
