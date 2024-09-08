import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import { remarkReadingTime } from './src/utils/readTime.ts';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://unsp.vercel.app/',
  // Write here your website url
  markdown: {
    remarkPlugins: [remarkReadingTime],
    drafts: true,
    shikiConfig: {
      theme: 'one-dark-pro',
      wrap: true
    }
  },
  integrations: [
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: {
        experimentalThemes: {
          light: 'vitesse-light',
          dark: 'one-dark-pro'
        },
        wrap: true
      },
      drafts: true
    }),
    sitemap(),
    tailwind(),
    icon(),
    react()
  ],

  // Desactiva la barra de herramientas de Astro DevTools
  devToolbar: {
    enabled: false
  },

  // Configuración de Vite para resolver el problema
  vite: {
    optimizeDeps: {
      noDiscovery: true, // Deshabilita el descubrimiento de dependencias
      include: [] // Deja vacío si no necesitas incluir dependencias específicas
    }
  }
});
