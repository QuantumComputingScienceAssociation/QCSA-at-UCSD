/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        main: '#003E74',
        gold: '#FFCD00',
        midblue: '#006A96',
        shadow: '#B3D4E8',
        lighter: '#F8FAFF',
        background: '#F3F8FF',
      },
      fontFamily: {
        // make Kantumruy the default sans utility and keep a named utility
        sans: ['Kantumruy', 'system-ui', '-apple-system', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial'],
        kantumruy: ['Kantumruy'],
      },
    },
  },
  plugins: [],
}
