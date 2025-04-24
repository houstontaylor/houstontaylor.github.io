/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          background: 'rgb(var(--background) / <alpha-value>)',
          foreground: 'rgb(var(--foreground) / <alpha-value>)',
          muted: 'rgb(var(--muted) / <alpha-value>)',
          accent: 'rgb(var(--accent) / <alpha-value>)',
        },
        fontFamily: {
          sans: ['var(--font-inter)'],
          display: ['var(--font-playfair)'],
        },
        keyframes: {
          fadeIn: {
            from: { opacity: 0 },
            to: { opacity: 1 },
          },
          fadeOut: {
            from: { opacity: 1 },
            to: { opacity: 0 },
          },
        },
        animation: {
          fadeIn: 'fadeIn 0.5s ease-in-out forwards',
          fadeOut: 'fadeOut 0.5s ease-in-out forwards',
        },
      },
    },
    plugins: [],
  };