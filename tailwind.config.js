module.exports = {
  mode: "jit",
  content: [
    "./content/**/*.{html,js}",
    "./layouts/**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        "serif": ["Garamond", "serif"],
        "sans": ["Helvetica", "sans"],
      },
    },
  },
  plugins: [
  ],
}