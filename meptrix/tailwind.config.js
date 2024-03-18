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
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
