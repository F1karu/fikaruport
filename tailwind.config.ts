import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'font-roboto': ['Roboto', 'sans-serif'],
      },
      backgroundVideo: {
        'home': "url('/video/DarkPolygon.mp4')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: "0" },
          '100%': { opacity: "1" },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out forwards',
      },
    },
  },
  plugins: [],
  images: {
    domains: ['i.pinimg.com'], // Add the domain of the external image source here
  },
} satisfies Config;
