/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-custom': 'linear-gradient(90deg, #00e2e2 10%, #0097b2 90%)',
      },
    },
  },
  plugins: [],
}

