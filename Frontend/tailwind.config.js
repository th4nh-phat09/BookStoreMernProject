/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Bao gồm tất cả file trong thư mục src
    "./public/index.html" // Bao gồm file HTML gốc nếu cần
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ["Montserrat", "sans-serif"],
        'secondary' : ["Nunito Sans", "sans-serif"]
      },
      colors: {
        'primary':'#FFCE1A',
        'secondary':'#0D0842',
        'blackBG':'#F3F3F3',
        'favourite':'#FF5841',
      }
    }
  },
  plugins: [],
}

