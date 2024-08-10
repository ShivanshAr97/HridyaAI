/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {},
    fontFamily:{
      inter: ["Inter", "sans-serif"], 
      pjs:["Plus Jakarta Sans", "sans-serif"],
      shrik:["Shrikhand", "cursive"],
      sans:["Helvetica" ,"Arial","sans-serif"],
      poppins:["Poppins","sans-serif"],
      nunito:["Nunito","sans-serif"],
      playfair:["Playfair Display","serif"],
      merri:["Merriweather","serif"],
      cardo:["Cardo","serif"]
    },
  },
  plugins: [],
}