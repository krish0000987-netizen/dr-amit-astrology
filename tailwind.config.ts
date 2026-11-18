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
        ivory: {
          DEFAULT: "#FAF8F3",
          warm: "#F4EBDD",
          light: "#FDFCF9",
        },
        gold: {
          DEFAULT: "#C6A15B",
          dark: "#A77B35",
          light: "#DFC38D",
          pale: "#F4EBDD",
        },
        charcoal: {
          DEFAULT: "#242424",
          dark: "#171717",
          muted: "#777777",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        editorial: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        luxury: "0 20px 50px -12px rgba(198, 161, 91, 0.14), 0 4px 20px -4px rgba(23, 23, 23, 0.05)",
        "luxury-hover": "0 28px 60px -12px rgba(167, 123, 53, 0.22), 0 8px 28px -4px rgba(23, 23, 23, 0.08)",
        card: "0 10px 35px -8px rgba(23, 23, 23, 0.06), 0 2px 10px -2px rgba(198, 161, 91, 0.08)",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #C6A15B 0%, #DFC38D 50%, #A77B35 100%)",
        "ivory-gradient": "linear-gradient(180deg, #FFFFFF 0%, #FAF8F3 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
