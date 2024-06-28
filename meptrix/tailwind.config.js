module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      maxHeight: {
        '96': '24rem',  // Default value
        'custom': '40rem', // Your custom value
      },
      colors: {
        'custom-color': '#f8faf9', // Your custom color
        primary: '#1DA1F2',
        secondary: '#FFAD1F',
        tertiary: '#17BF63',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },

}
