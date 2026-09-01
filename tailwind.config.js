/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wice: {
          primary: "#00C896",      // Figma Primary Mint Teal
          light: "#E6FAF4",        // Figma Mint Light background tint
          dark: "#0E382C",         // Figma Dark Mint Teal text/icon
          surface: "#F7FAFA",      // Figma App surface background
          border: "#E2F0ED",       // Subtle border color
          cyan: "#EBF7F5",         // Figma Info banner Cyan tint
          cyanText: "#056B61",     // Figma Cyan text
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '32px',
      },
      boxShadow: {
        'card': '0px 4px 20px rgba(0, 0, 0, 0.04)',
        'sheet': '0px -8px 30px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
}
