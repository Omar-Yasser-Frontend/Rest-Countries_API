/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Ubuntu", "serif"],
      },

      colors: {
        "dark-mod-el": "hsl(209, 23%, 22%)",
        "dark-mod-bg": "hsl(207, 26%, 17%)",
        "light-mod-txt": "hsl(200, 15%, 8%)",
        "light-mod-input": "hsl(0, 0%, 52%)",
        "light-mod-bg": "hsl(0, 0%, 98%)",
        "dark-txt-light-el": "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
