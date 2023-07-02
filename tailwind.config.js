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
        "custom-lighter-green": "#738678",
        "custom-light-green": "#ABB4AF",
        "custom-medium-green": "#5A7362",
        "custom-dark-green": "#365443",
        "custom-darker-green": "#21332e",
        "custom-darker-green-text": "#324a43",
        "custom-darkest-green": "#152621",
        "custom-off-white": "#e3e3e3",
        "custom-off-black": "#191a19",
      },
      fontFamily: {
        ubuntu: "var(--font-ubuntu)",
        inter: "var(--font-inter)",
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fill, minmax(3rem, 1fr))",
      },
    },
  },
  plugins: [],
};
