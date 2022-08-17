/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-light": "#A6DBD7",
        "primary-dark": "#164AA0",
        "secondary-light": "#E1B5D4",
        "secondary-dark": "#EF3633",
      },
      fontFamily: {
        display: ["Mundial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
