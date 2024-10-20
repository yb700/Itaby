import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary1: '#003366',   // Navy Blue
        primary2: '#4B4F54',   // Steel Gray
        secondary1: '#00A8E1', // Sky Blue
        secondary2: '#C0C0C0', // Silver
        accent1: '#00FF00',    // Electric Green
        accent2: '#FF4500',    // Sunset Orange
        neutral1: '#FFFFFF',   // White
        neutral2: '#333333',   // Charcoal
      },
    },
  },
  plugins: [],
};
export default config;
