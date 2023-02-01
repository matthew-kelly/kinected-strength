/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-light": "#A6DBD7", //"rgb(177 217 214)", // "#A6DBD7",
        "primary-dark": "#164AA0", //"rgb(37 75 154)", //"#164AA0",
        "secondary-light": "#E1B5D4", //"rgb(218 183 211)", //"#E1B5D4",
        "secondary-dark": "#EF3633", //"rgb(220 72 61)", // "#EF3633", 213	47	59 224	224	220
        "light-gray": "#E2E2E2",
      },
      fontFamily: {
        display: ["Raleway", "sans-serif"],
      },
      minWidth: {
        md: "28rem",
        lg: "32rem",
        xl: "36rem",
        "2xl": "42rem",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "rgb(37 75 154)",
            a: {
              color: "#333",
              "&:hover": {
                color: "rgb(220 72 61)",
              },
            },
          },
        },
      },
      width: {
        "screen-half": "50vw",
      },
    },
    fontFamily: {
      sans: ["Raleway", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
