/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // fontFamily: {
      //   'sans': ['Roboto', 'sans']  // Add your font name and any fallbacks
      // },
      boxShadow: {
        'custom-shadow': '0 -2px 3px rgba(0,0,0,.06)'
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
