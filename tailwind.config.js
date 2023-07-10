/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#585A56",
        secondary: "#272424",
        balance: "#727476",
        balanceText: "#F7E00D",
        bgHistory: "#31383C",
        income: "#2EDC69",
        outgoing: "#FF7459",
        yellowBtn: "#FFD700",
        hashtag: "#81A3A7"
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      boxShadow: {
        'blockShadow': '0 2px 10px rgba(0, 0, 0, 0.25)',
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};

