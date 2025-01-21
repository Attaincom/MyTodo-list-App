/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this path based on your project structure
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          100: '#f5f5f5',
          200: '#d9d9d9',
          300: '#b2b2b2',
          400: '#8c8c8c',
          500: '#6e4f39', // Example of brown (medium brown)
          600: '#5c3d2e', // Darker brown
          700: '#4a2a23', // Even darker brown
          800: '#3d1c1a',
          900: '#2f0f10',
        },
      },
    },
  },
  plugins: [],
};
