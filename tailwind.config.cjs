module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,html}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'raven-yellow': '#f5c400',
        'raven-yellow-2': '#ffd54a',
        'bg-dark': '#0b0b0b',
        page: '#0b0b0b'
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
}
