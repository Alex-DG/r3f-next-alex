module.exports = {
  purge: ['./src/pages/**/*.js', './src/components/**/*.js'], // remove unused styles in production
  darkMode: 'class',
  theme: {
    maxWidth: {
      170: '170px',
    },
    extend: {
      zIndex: {
        '-10': '-10',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    fontFamily: false,
  },
}
