/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Example: Path to your HTML file
    "./src/**/*.{html,jsx}", // Example: For a 'src' directory with HTML and JS
    // Add more paths as needed
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
}

