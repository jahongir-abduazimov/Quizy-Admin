/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "#1D1D1D",
        mainColor2: "#6295F7"
      }
    },
  },
  plugins: [],
}

