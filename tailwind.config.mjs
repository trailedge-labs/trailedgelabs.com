/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    extend: {
      fontFamily: {
        baunk: 'Baunk',
        triakis: 'Triakis'
      },

      colors: {
        'pri-dark': 'rgb(var(--pri-dark))',
        'sec-dark': 'rgb(var(--sec-dark))',
        'sec-half-dark': 'rgba(var(--sec-dark),0.5)',
        'acc-dark': 'rgb(var(--acc-dark))',
        'acc-shadow-dark': 'rgba(var(--acc),0.4)',
        'pri': 'rgb(var(--pri))',
        'sec': 'rgb(var(--sec))',
        'sec-half': 'rgba(var(--sec),0.5)',
        'acc': 'rgb(var(--acc))',
        'acc-shadow': 'rgba(var(--acc-dark),0.4)',
      }
    },
  },
  darkMode: 'selector',
	plugins: [],
}
