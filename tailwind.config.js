/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},     
    fontFamily:{
      "fira-code":["Fira code","sans-serif"],
      "roboyto-bold":["Roboto bold","san-serif"],
    },
  },
  
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

