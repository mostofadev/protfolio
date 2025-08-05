const config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-one": "var(--bg-one)",
        "bg-two": "var(--bg-two)",
        "text-one": "var(--text-one)",
        "text-two": "var(--text-two)",
      },
    },
  },
  darkMode: "class",
  plugins: ["@tailwindcss/postcss"],
};

export default config;
