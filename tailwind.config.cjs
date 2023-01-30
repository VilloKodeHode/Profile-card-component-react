/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      fontFamily: { Kumbhsans: ["Kumbh Sans", "sans-serif"] },
      colors: {
        design: {
          DarkGray: "#969696",
          DarkBlue: "#6A6F81",
          DarkerBlue: "#2D3248",
          DarkCyan: "#19A2AE",
        },
        screens: {
          ms: "320px",

          mm: "375px",

          ml: "425px",

          sm: "640px",

          md: "768px",

          lg: "1024px",

          xl: "1280px",

          "2xl": "1440px",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
