import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      colors: {
        background: "#1c1c1c", // Deep black background
        foreground: "#1a1a1a", // Dark panels/cards
        primary: "#dc2626",    // Albanian red
        secondary: "#1f2937",  // Dark gray for contrast
        accent: "#fbbf24",     // Gold accent for highlights
        light: "#374151",      // Medium gray for subtle backgrounds
        textDark: "#ffffff",   // Pure white text
        textHeading: "#fbbf24", // Gold headings
        albanianRed: "#dc2626", // Albanian flag red
        albanianGold: "#fbbf24", // Albanian flag gold
        ultraBlack: "#000000",  // Ultra black
      },
      
      fontFamily: {
        myfont: ['MyFont', 'sans-serif'],
        poppins: ["Poppins", "sans-serif"], // Font for the website
      },
      borderRadius: {
        btn: "8px", // Button radius
      },
      boxShadow: {
        btn: "0 4px 6px rgba(0, 0, 0, 0.1)", // Button shadow
        input: "0 2px 4px rgba(0, 0, 0, 0.1)", // Input shadow
      },
    },
  },
  plugins: [],
} satisfies Config;
