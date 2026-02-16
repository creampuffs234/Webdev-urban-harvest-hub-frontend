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
        
        "chelsea-cucumber": "#4e381b",
        "atlantis": "#ffe600",
        "oreyelo": "#6db655",

        
            "dark-bg": "#1d2c19",      
            "dark-secondary": "#34613e", 
            "dark-tertiary": "#ac810a",  
      },
      fontFamily: {
        helvetica: ["Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};
