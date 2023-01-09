/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-rgba': 'rgba(35, 60, 123, 0)'
      },
      keyframes: {
        fadein: {
          '0%': { opacity: '0', top: '50vh' },
          '100%': { opacticy: '1', top: '0' }
        }
      },
      animation: {
        'fade-in': 'fadein 1.3s ease-out forwards',
      },
      backgroundImage: {
        'custom-grad': "linear-gradient(to top, rgba(35, 60, 123, 0.8), rgba(35, 60, 123, 0.6))"
      },
    },
  },
  plugins: [],
}
