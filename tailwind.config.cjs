const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.svelte', './src/**/*.css'],
  darkMode: false,
  daisyui: {
    styled: true,
    themes: ['synthwave'],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
  theme: {
    colors: {
      white: colors.white,
      gray: colors.warmGray,
      'svelte-prime': '#ff5030',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}