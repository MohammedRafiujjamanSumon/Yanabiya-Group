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
          50: "#eef7f2",
          100: "#d6ebdf",
          200: "#aed8c0",
          300: "#7fbf9b",
          400: "#4fa277",
          500: "#2e855a",
          600: "#1f6b48",
          700: "#195239",
          800: "#123a29",
          900: "#0b231a",
        },
        gold: {
          400: "#e0b85b",
          500: "#c99a34",
          600: "#a57c21",
        },
        ink: {
          900: "#0a0f14",
          800: "#121923",
          700: "#1b2432",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["'Plus Jakarta Sans'", "Inter", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(12, 35, 26, 0.25)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(1200px 600px at 20% 0%, rgba(79,162,119,0.25), transparent 60%), radial-gradient(800px 400px at 90% 20%, rgba(201,154,52,0.18), transparent 60%)",
        grid:
          "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
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
