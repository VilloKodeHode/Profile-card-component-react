/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
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
      },
    },
  },
  plugins: [require("daisyui")],
};
