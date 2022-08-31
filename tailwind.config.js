const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        border1: "var(--border)",
        button: "var(--button)",
        text1: "var(--text1)",
        text2: "var(--text2)",
        darkPrimary: "var(--darkPrimary)",
        darkSecondary: "var(--darkSecondary)",
        darkBorder1: "var(--darkBorder)",
        darkButton: "var(--darkButton)",
        darkText1: "var(--darkText1)",
        darkText2: "var(--darkText2)",
      },
    },
  },
  plugins: [],
};
