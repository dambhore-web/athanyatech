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
        "brand-indigo": "#2D3A5E",
        "brand-indigo-light": "#3D4F80",
        "brand-gold": "#D4A847",
        "brand-gold-light": "#F0C96A",
        "brand-cream": "#F7F4EF",
        "brand-slate": "#6B7A99",
        "brand-dark": "#1A2240",
        "brand-surface": "#EFF0F5",
      },
      fontFamily: {
        display: ["var(--font-plus-jakarta)", "sans-serif"],
        body: ["var(--font-lora)", "serif"],
      },
      borderRadius: {
        DEFAULT: "0.375rem",
      },
    },
  },
  plugins: [],
};
export default config;
