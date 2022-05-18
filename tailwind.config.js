module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['VT323', 'sans-serif'],
      serif: ['monospace', 'sans-serif'],
    },
    listStyleType: {
      none: 'none',
    },
    colors: {
      'red': '#FF0000',
      'white': '#FFFFFF',
    },
    extend: {
      rotate: {
        '220': '220deg',
      },
      keyframes: {
        'fade-in': {
          '0%': {
            'opacity': '0',
          },
          '100%': {
            'opacity': '1',
          }
        }
      }
    },
    animation: {
      'fade-in': 'fade-in 1s'
    }
  },
  plugins: [],
}
