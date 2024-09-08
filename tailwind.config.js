/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        cyan: "#00e6e6",
        fuchsia: {
          "100": "#cc00ff",
          "200": "rgba(204, 0, 255, 0.2)",
        },
    },
  },
},
  plugins: [],
}

