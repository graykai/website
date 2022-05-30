module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      currentColor: "currentColor",
      graykai: "#4B5255",
      gray: {
        100: "#F7F8FF",
        500: "#1C204F",
      },
      red: {
        100: "#FEF9FF",
        500: "#441B4E",
      },
      green: {
        100: "#F8FAF9",
        500: "#4B5255"
      },
    },
    fontFamily: {
      baseFont: ["acumin-pro", "sans-serif"],
      headerFont: [" acumin-pro-wide", "sans-serif"]
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('./src/helpers/tailwind').contentBoxPlugin
  ],
}
