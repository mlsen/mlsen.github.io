const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      scale: {
        '101': '1.01'
      },
      colors: {
        teal: colors.teal,
        'brand-teal': '#4BBAC0',
        'brand-teal-light': '#CBF2F4',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
