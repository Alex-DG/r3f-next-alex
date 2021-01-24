module.exports = {
  purge: ['./src/pages/**/*.js', './src/components/**/*.js'], // remove unused styles in production
  darkMode: 'media',
  theme: {
    colors: {
      black: '#000000',
      white: '#ffffff',
      'cool-dark': '#363537',
    },
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
