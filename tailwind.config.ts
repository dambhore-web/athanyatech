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
        "brand-navy":         "#102A5C",
        "brand-navy-mid":     "#17346E",
        "brand-navy-light":   "#1B3E86",
        "brand-blue":         "#1769E0",
        "brand-cyan":         "#12B8D9",
        "brand-indigo":       "#4338B8",
        "brand-slate":        "#526579",
        "brand-ink":          "#20303F",
        "brand-ink-soft":     "#4B5B6B",
        "brand-paper":        "#F6F8FB",
        "brand-surface":      "#FFFFFF",
        "brand-sunken":       "#EEF2F7",
        "brand-line":         "#DFE6EE",
        "brand-line-strong":  "#C7D2DE",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body:    ["var(--font-manrope)", "sans-serif"],
        mono:    ["var(--font-jetbrains-mono)", "monospace"],
      },
      boxShadow: {
        brand: "0 1px 2px rgba(16,42,92,.06), 0 8px 24px rgba(16,42,92,.06)",
        "brand-md": "0 2px 4px rgba(16,42,92,.08), 0 12px 32px rgba(16,42,92,.10)",
      },
      borderRadius: {
        DEFAULT: "8px",
        card: "14px",
      },
    },
  },
  plugins: [],
};
export default config;
