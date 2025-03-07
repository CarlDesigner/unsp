import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import { SITE } from "./src/lib/config";
import { modifiedTime, readingTime } from "./src/lib/utils/remarks.mjs";
import pagefind from "astro-pagefind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: SITE.url,
  base: SITE.basePath,
  markdown: {
    remarkPlugins: [readingTime, modifiedTime],
  },
  integrations: [tailwind(), mdx(), sitemap(), pagefind()],
  experimental: {
    responsiveImages: true,
  },
  devToolbar: {
    enabled: false
  }
});
