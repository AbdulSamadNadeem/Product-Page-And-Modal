/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow:{
        'custom':'20px 20px 20px #2980b9'
      },
      boxShadow:{
        'custom-shadow':'rgba(0, 0, 0, 0.35) 0px 5px 15px;',
        'primary-shadow':'0px 0px 10px 8px rgba(41,128,185,0.47);;'
      },
      backgroundImage:{
        'gradient':'linear-gradient(to right , #2c3e50 , #7f8c8d)'
      }

    },
  },
  plugins: [],
}