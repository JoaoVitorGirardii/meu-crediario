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
    },
    colors: {
      'primary-lightest': '#8CBFB7',
      'primary-light': '#00856E',
      'primary': '#006151',
      'primary-dark': '#004A3F',

      'secondary-light': '#02E09F',
      'secondary': '#01865F',
      'secondary-dark': '#016F4F',

      'white': '#FFFFFF',
      'white-dark': '#F5F5F5',

      'gray-light': '#DDDDDD',
      'gray': '#CCCCCC',
      'gray-dark': '#BBBBBB',
      'gray-darkest': '#333333',

      'background': '#F1F6F5',
      'text': '#505050',

      'info-lightest': '#EAF4FB',
      'info': '#0066AB',
      'info-dark': '#003D66',

      'success-lightest': '#E6FFF7',
      'success-light': '#D7F4F0',
      'success': '#006151',
      'success-dark': '#004A3F',

      'alert-lightest': '#FFF9E5',
      'alert-light': '#FFEBCC',
      'alert': '#F6AB35',
      'alert-dark': '#734B0C',

      'danger-lightest': '#FFE5E6',
      'danger': '#C91D1D',
      'danger-dark': '#801212'
    },
    typography: {
      DEFAULT: {
        css: {
          h1: {
            fontSize: '31px',
            letterSpacing: '0px',
            lineHeight: '120%',
            fontWeight: '800',
          },
          h2: {
            fontSize: '28px',
            letterSpacing: '0px',
            lineHeight: '120%',
            fontWeight: '800',
          },
          h3: {
            fontSize: '25px',
            letterSpacing: '0px',
            lineHeight: '120%',
            fontWeight: '700',
          },
          h4: {
            fontSize: '22px',
            letterSpacing: '0px',
            lineHeight: '150%',
            fontWeight: '700',
          },
          h5: {
            fontSize: '20px',
            letterSpacing: '0px',
            lineHeight: '150%',
            fontWeight: '600',
          },
          h6: {
            fontSize: '17px',
            letterSpacing: '0px',
            lineHeight: '150%',
            fontWeight: '600',
          },
          p: {
            fontSize: '16px',
            letterSpacing: '0px',
            lineHeight: '150%',
            fontWeight: '400',
          },
          'p-bold': {
            fontSize: '16px',
            letterSpacing: '0px',
            lineHeight: '150%',
            fontWeight: '700',
          },
          small: {
            fontSize: '14px',
            letterSpacing: '0px',
            lineHeight: '150%',
            fontWeight: '400',
          },
          'small-bold': {
            fontSize: '14px',
            letterSpacing: '0px',
            lineHeight: '150%',
            fontWeight: '700',
          },
          'extra-small': {
            fontSize: '12px',
            letterSpacing: '0px',
            lineHeight: '150%',
            fontWeight: '400',
          },
          'extra-small-bold': {
            fontSize: '12px',
            letterSpacing: '0px',
            lineHeight: '150%',
            fontWeight: '700',
          },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('@tailwindcss/typography')
  ],
} satisfies Config

export default config