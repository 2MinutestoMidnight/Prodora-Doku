/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        prodora: {
          red: '#DC2626',
          'red-dark': '#991b1b',
          'red-light': '#fef2f2',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['DM Mono', 'SF Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
