module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    theme: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'sky' : {
          900: '#33cbec'
        }
      },
    },
  },
  plugins: [],
}