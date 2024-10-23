/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '868px',
      'lg': '1124px',
      'xl': '1380px',
      '2xl': '1536px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      screens: {
        'sm': '640px',
        'md': '868px',
        'lg': '1124px',
        'xl': '1380px',
        '2xl': '1536px',
      },
    },
    extend: {
      colors: {
        form: '#F4F7FE',
        primary: {
          100: '#F4F7FE',
          500: '#2F80ED',
        },
        burem: {
          100: '#ACACAC',
          200: '#797979',
          500: '#444444',
        },
        abang : {
          500: '#FF2929',
        },
        kuneng: '#FFF826',
        ping: '#FCEEF7',
        green: {
          500: '#00C9A7',
        },
      }
    },
  },
  plugins: [],
}

