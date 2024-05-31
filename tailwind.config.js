/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        "xs": "320px",
      },
      boxShadow: {
        'glow': '0 0 10px #ffc86b',
      },
    },
    colors: {
      glow: '#ffc86b',
      dark100: '#31333b',
      dark200: '#484849',
      white: '#f9f9f9',
      light100: '#c8c8c8',
    },
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
      'josefin-sans': ['Josefin Sans', 'monospace'],
      'roboto-slab': ['Roboto Slab', 'serif'],
    },
  },
  plugins: [],
}

