import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
      colors: {
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
        "dark-gray": "#424245",
        "light-gray": "#D2D2D7",
        "gray": "#808080"
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontSize: {
        // Desktop Typography
        'heading-1': ['67px', { lineHeight: '120%', fontWeight: '600' }],
        'heading-2': ['50px', { lineHeight: '120%', fontWeight: '600' }],
        'heading-3': ['38px', { lineHeight: '120%', fontWeight: '500' }],
        'heading-4': ['28px', { lineHeight: '120%', fontWeight: '500' }],
        'heading-5': ['21px', { lineHeight: '120%', fontWeight: '500' }],
        'heading-6': ['16px', { lineHeight: '120%', fontWeight: '500' }],
        'subtitle': ['18px', { lineHeight: '120%', fontWeight: '500' }],
        'body': ['16px', { lineHeight: '140%', fontWeight: '400' }],
        'button': ['16px', { lineHeight: '120%', fontWeight: '500' }],
        'links': ['16px', { lineHeight: '120%', fontWeight: '500' }],
        'overline': ['14px', { lineHeight: '120%', fontWeight: '500' }],
        'caption': ['14px', { lineHeight: '120%', fontWeight: '400' }],
        'caption-small': ['12px', { lineHeight: '120%', fontWeight: '500' }],

        // Mobile Typography
        'mobile-heading-1': ['40px', { lineHeight: '120%', fontWeight: '500' }],
        'mobile-heading-2': ['34px', { lineHeight: '120%', fontWeight: '500' }],
        'mobile-heading-3': ['26px', { lineHeight: '120%', fontWeight: '400' }],
        'mobile-heading-4': ['22px', { lineHeight: '120%', fontWeight: '400' }],
        'mobile-heading-5': ['18px', { lineHeight: '120%', fontWeight: '500' }],
        'mobile-heading-6': ['16px', { lineHeight: '100%', fontWeight: '500' }],
        'mobile-subtitle': ['18px', { lineHeight: '140%', fontWeight: '500' }],
        'mobile-body': ['16px', { lineHeight: '140%', fontWeight: '400' }],
        'mobile-button': ['14px', { lineHeight: '100%', fontWeight: '500' }],
        'mobile-links': ['14px', { lineHeight: '120%', fontWeight: '500' }],
        'mobile-overline': ['12px', { lineHeight: '120%', fontWeight: '500' }],
        'mobile-caption': ['14px', { lineHeight: '120%', fontWeight: '400' }],
        'mobile-caption-small': ['12px', { lineHeight: '120%', fontWeight: '500' }],
      },
      fontFamily: {
        zapfino: "zapfino",
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config