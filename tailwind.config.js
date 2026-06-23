/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Koyu gri / grafit tonları
        graphite: {
          950: "#0E1013",
          900: "#14171C",
          800: "#1C2026",
          700: "#262B33",
          600: "#363C46",
          500: "#4A5260",
        },
        // Altın detay tonları
        gold: {
          DEFAULT: "#C8A24C",
          light: "#E3C77E",
          dark: "#A9863A",
        },
        // Açık nötr (beyaz alanlar)
        cloud: "#F6F5F2",
      },
      fontFamily: {
        display: ['"Sora"', "system-ui", "sans-serif"],
        body: ['"Manrope"', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.25em",
      },
      backgroundImage: {
        // Mimari ızgara dokusu (signature element)
        "blueprint-grid":
          "linear-gradient(to right, rgba(200,162,76,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(200,162,76,0.06) 1px, transparent 1px)",
        "gold-line":
          "linear-gradient(90deg, transparent, #C8A24C 50%, transparent)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slow-zoom": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.12)" },
        },
        "line-grow": {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "fade-in": "fade-in 1.2s ease forwards",
        "slow-zoom": "slow-zoom 18s ease-out forwards",
      },
    },
  },
  plugins: [],
};