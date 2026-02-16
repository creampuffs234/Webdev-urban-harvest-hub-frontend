/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Main Brand Colors
        "chelsea-cucumber": "#4e381b",
        "atlantis": "#ffe600",
        "oreyelo": "#6db655",

        // Dark Mode Specific
        "dark-bg": "#1d2c19",      // Your dark background
        "dark-secondary": "#34613e", // Renamed from 'whitetext' (it is green)
        "dark-tertiary": "#ac810a",  // Renamed from 'thurdcol'
      },
      fontFamily: {
        helvetica: ["Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};
