/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: { primary: "#40e2e6", secondary: "#d17eb9", dark: "#5c8093" },
      screens: {
        xs: "420px",
      },
    },
    fontFamily: {
      sans: ["Space Grotesk", "regular"],
      fira: ["Fira Code", "regular"],
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
