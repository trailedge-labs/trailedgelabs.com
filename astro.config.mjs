import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";
import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://trailedgelabs.com',
  integrations: [tailwind(), alpinejs(), sitemap(), mdx()]
});