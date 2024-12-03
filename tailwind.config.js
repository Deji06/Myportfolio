/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        spaceGrotesk: ['space Grotesk', 'sans-serif'],
        Zeyada:['zeyada']
      }
    },
  },
  plugins: [],
}

