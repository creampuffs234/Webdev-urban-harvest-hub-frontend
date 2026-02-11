/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "chelsea-cucumber": "#4e381bff",
        atlantis: "#ffe600ff",
        oreyelo: "#4a793bff",
      },
      fontFamily: {
        helvetica: ["Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};
