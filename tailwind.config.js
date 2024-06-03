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
        backgroundImage: {
          doggy: "url('/img/doggy.png')",
        },
      },
      backgroundImage: (theme) => ({
        "blue-gradient": "linear-gradient(160deg, #0c3279, #87b2cf)",
      }),
      boxShadow: {
        "custom-shadow":
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      },
    },
  },
  plugins: [],
};
