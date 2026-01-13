/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Use for big headings and hero sections
        heading: ["Space Grotesk", "sans-serif"],
        // Use for all body text and descriptions (clean & professional)
        sans: ["Inter", "sans-serif"],
        // Use for your Logo and "Code" snippets
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};