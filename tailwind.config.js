/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // FIXME: update colors
        "primary-light": "#A8D6CB", // "#A6DBD7",
        "primary-dark": "#234285", //"#164AA0",
        "secondary-light": "#D8AEC6", //"#E1B5D4",
        "secondary-dark": "#D52F3B", // "#EF3633", 213	47	59 224	224	220
        "light-gray": "#E0E0DC",
      },
      fontFamily: {
        display: ["Mundial", "sans-serif"],
      },
      width: {
        "screen-half": "50vw",
      },
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
