/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
module.exports = {
  content: [
    "./app/*/.{js,ts,jsx,tsx,mdx}",
    "./pages/*/.{js,ts,jsx,tsx,mdx}",
    "./components/*/.{js,ts,jsx,tsx,mdx}",

    "./src/*/.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      l: "1.5rem",
      xl: "2.5rem",
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
};
