/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Source Sans Pro', 'system-ui', 'sans-serif'],
        display: ['Cabin', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#2b2b2b',
          muted: '#777',
        },
      },
    },
  },
  plugins: [],
};
