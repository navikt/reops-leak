import { defineConfig } from 'astro/config';
import node from '@astrojs/node';



import tailwind from '@astrojs/tailwind';



// https://astro.build/config
export default defineConfig({
    integrations: [tailwind()],
    site: 'https://leak.ansatt.nav.no',
    output: 'hybrid',
    adapter: node({
        mode: 'standalone',
    }),
});