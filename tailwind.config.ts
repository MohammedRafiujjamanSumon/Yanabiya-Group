import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1320px",
      },
    },
    extend: {
      colors: {
        brand: {
          50: "#eaf6ec",
          100: "#cfe9d4",
          200: "#a3d3ad",
          300: "#73b984",
          400: "#3f9a5a",
          500: "#1e8040",
          600: "#0f6431",
          700: "#0a4a25",
          800: "#073819",
          900: "#04240f",
        },
        lime: {
          300: "#cdee47",
          400: "#b6e02e",
          500: "#9bcb20",
        },
        ink: {
          900: "#0a0f14",
          800: "#121923",
          700: "#1b2432",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["'Playfair Display'", "Georgia", "serif"],
        ui: ["'Plus Jakarta Sans'", "Inter", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(12, 35, 26, 0.25)",
      },
      backgroundImage: {
        "hero-green":
          "radial-gradient(1100px 700px at 75% 50%, rgba(63,154,90,0.55), transparent 65%), linear-gradient(180deg, #073819 0%, #04240f 100%)",
        grid:
          "linear-gradient(rgba(205,238,71,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(205,238,71,0.10) 1px, transparent 1px)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out both",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
