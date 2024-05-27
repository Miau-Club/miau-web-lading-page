import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      textShadow: {
        "black": "4px 4x 4px rgba(0, 0, 0, 0.5)",
      },
      colors: {
        miau: {
          branding: "#365EFC",
          blueLight: "#7792F1",
          blueDark: "#576AAC",
          blueContrast: "#7D97F1",
          white: "#F7F7F7",
          yellow: "#EFC708",
          yellowDark: "#9D8513",
          black: "#434343",
          grayDark: "#B8C2C9",
        },
        blue: {
          bg: "#395ADB",
          bgEnd: "#8DA9F4",
          bgTutors: "#3966DB",
          bgPartners: "#021252",
          bgTutorsSquare: "#295AD7",
          navigationBar: "#A1B0EE",
          blueCardOneHome: "#5B70BA",
          blueCardTwoHome: "#697BC2",
          blueCardThreeHome: "#7289DB",
        },
        black: {
          bgPartnersEnd: "#0B0B0B",
        },

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "bounce-home": {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-1px) translateX(1px)" },
        },
        "left-slide": {
          from: { "margin-right": "-5rem" },
          to: { "margin-right": "0" },
        },
        "scroll-x": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "scroll-to-top": {
          "0%": { top: "0" },
          "100%": { top: "1rem" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "bounce-home": "bounce-home 1s ease-in-out infinite",
        "left-slide": "left-slide 0.8s forwards",
        "scroll-x": "scroll-x 100s linear infinite",
        "scroll-to-top": "scroll-to-top 0.8s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), function ({ addUtilities }: any) {
    const newUtilities = {
      ".text-shadow-black": {
        textShadow: "4px 4px 4px rgba(0, 0, 0, 0.5)",
      },
    };
    addUtilities(newUtilities, ["responsive", "hover"]);
  }],
} satisfies Config;

export default config;
