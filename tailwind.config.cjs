/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ProximaNova: "Proxima Nova",
      },
      colors: {
        blueLogo: "#0A20E6",
        textNav: "#A6AFBA",
        primaryText: "#13171B",
        bgInput: "#F6F7F9",
        filterText: "#4C5C6B",
        shadow1: "rgba(76, 92, 107, 0.15)",
        shadow2: "rgba(166, 175, 186, 0.2)",
      },
    },
  },
  plugins: [],
};
