/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        offWhite: "#dddddd",
        brunswickGreen: "#003d39",
        dutchWhite: "#e2d4b7",
        russianBlue: "#0d0630",
        carolinaBlue: "#74b3ce",
        fireEngineRed: "#c51b29",
        sinopia: "#c73e1d",
      },
      // Optionally, define gradients
      backgroundImage: (theme) => ({
        "blue-gradient": "linear-gradient(160deg, #0c3279, #87b2cf)",
      }),
    },
  },
  plugins: [],
};
