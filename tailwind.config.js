/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
 
    extend: {
      animation: {
        rndm: 'rndm 5s ease-in-out infinite',
        rndmOne: 'rndmOne 5s ease-in-out infinite',
        'spin-slow': 'spin 10s linear infinite'
      },
      keyframes: {
        rndm: {
          '0%, 100%': { left: "50px", top: "90px" },
          '20%': { left: "70px", top: "-40px" },
          '50%': { left: "20px", top: "70px" },
        },
        rndmOne: {
          '0%, 100%': { left: "50px", top: "90px" },
          '20%': { left: "20px", top: "70px" },
          '50%': { left: "70px", top: "-40px" },
        },

      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        Poppins: ["poppins"],
       },
      colors: {
        "base" : "#1F2350",
        "secondary" : "#7D40FF",
        "aksen" : "#FF40B3",
        "gray" : "#cacaca",
        "white" : "#fff"
      },
    },
  },
  plugins: [],
}
