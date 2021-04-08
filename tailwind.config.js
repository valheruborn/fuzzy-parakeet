module.exports = {
  purge: [
    './content/**.*.md',
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        breeze: 'breeze 10s ease-out infinite alternate',
      },
      keyframes: {
        breeze: {
          '0%': { transform: 'translateX(0px) skewX(0deg)' },
          '100%': { transform: 'translateX(100px) skewX(-15deg)' },
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
