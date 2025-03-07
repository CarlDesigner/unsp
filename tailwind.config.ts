import type { Config } from 'tailwindcss'
import  defaultTheme  from 'tailwindcss/defaultTheme'
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          '2xl': '1248px',
        },
      }
    },
    fontFamily: {
      sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
      serif: ['var(--font-serif)', ...defaultTheme.fontFamily.serif],
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
  },

  daisyui: {
    themes: ["light", "dark"],
    darkTheme: "dark",
    logs: false,
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
  ],
} satisfies Config

