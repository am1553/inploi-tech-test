/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "mint": "#4AC29A",
      "desaturated-mint": "#BDFFF3",
      "white": "#fff"
    }
  },
  plugins: [],
}