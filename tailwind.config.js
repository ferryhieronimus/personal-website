/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-off-white": "#ddd",
        "custom-off-black": "#222",
        "custom-almost-white": "#f7f7f7",
      },
      fontFamily: {
        ubuntu: "var(--font-ubuntu)",
        poppins: "var(--font-poppins)",
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fill, minmax(3rem, 1fr))",
      },
    },
  },
  plugins: [],
};
