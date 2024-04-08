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
        // Replace with your desired color value (e.g., '#f0f2f5')
        color1: '#440A67',
        color2: '#93329E',
        color3: '#B4AEF7',
        color4: '#FFE3FE'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
