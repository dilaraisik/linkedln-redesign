module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './src/**/*.{html,js}',
  ],
  theme: {
    fontFamily: {
      'gothamPro': ['Gotham Pro', 'sans-serif'],
    },
    boxShadow: {
          xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
          sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
          default: '0px 10px 40px rgba(89, 120, 150, 0.06)',
          md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          none: 'none',
},
      colors: {
          blue: '#0275B1',
          white: '#ffffff',
          textBlack: '#181818',
          silver: 'C0C0C0',
          gray: '#F4F4F4',
          footerBg: '#F7F9FB',
          footerLine: '#E7E7E7',
      },
    extend: {},
  },
  plugins: [],
}
