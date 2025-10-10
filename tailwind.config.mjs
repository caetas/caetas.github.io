import defaultTheme from 'tailwindcss/defaultTheme.js';
import tailwindcssTypography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: {
          DEFAULT: '#2563eb',
          light: '#3b82f6',
          dark: '#1d4ed8',
          surface: '#eef4ff',
        },
        ink: {
          DEFAULT: '#0f172a',
          subtle: '#475569',
        },
      },
      boxShadow: {
        floating: '0 20px 45px -22px rgba(37,99,235,0.45)',
      },
      backgroundImage: {
        'hero-dusk': 'linear-gradient(135deg,#eef2ff 20%,#c7d2fe 60%,#2563eb 120%)',
      },
    },
  },
  plugins: [tailwindcssTypography],
};
