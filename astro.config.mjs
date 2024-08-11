import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { remarkReadingTime } from './src/utils/readTime.ts';
import dotenv from 'dotenv';
import icon from "astro-icon";
dotenv.config();


// https://astro.build/config
export default defineConfig({
  site: 'https://unsp.vercel.app/',
  // Write here your website url
  markdown: {
    remarkPlugins: [remarkReadingTime],
    drafts: true,
    shikiConfig: {
      theme: 'material-theme-palenight',
      wrap: true
    }
  },
  integrations: [mdx({
    syntaxHighlight: 'shiki',
    shikiConfig: {
      experimentalThemes: {
        light: 'vitesse-light',
        dark: 'material-theme-palenight'
      },
      wrap: true
    },
    drafts: true
  }), sitemap(), tailwind(), icon()]
});