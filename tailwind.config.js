/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      'green': '#7ec281',
      'nav-purple': '#332945',
      'accent-purple': '#4d455c',
      'accent-dark': '#2D292F',
      'lightPurple': '#9A7FB5',
      'orange': '#c2a47e',
      'background': '#231e24',
      'gray':'#D9D9D9',
      'white':'#ffffff',
      'black':'#000000',
      'off-white':'#DEDEDE',
      'italic-gray':'#524F59',
      'dark-gray': '#C8C8C8',
      'darker-gray': '#444444',
      'link': '#cce3e3',
    },
    extend: {
      scale: {
        '175': '1.75',
        '200': '2.00',
        '300': '3.00',
      },
      spacing: {
        '-0.25': '-0.25rem', //negative spacing
      },
      fontSize: {
        'xxs': '0.5rem',
      },
      fontFamily: {
        'plex-mono': ['IBM Plex Mono', 'monospace'],
        'space-grotesk':['Space Grotesk','monospace'],
        'keania-one':['Keania-one','monospace'],
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')]
};