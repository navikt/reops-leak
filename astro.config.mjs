import { defineConfig } from 'astro/config';
import node from '@astrojs/node';



// https://astro.build/config
export default defineConfig({
    integrations: [],
    site: 'https://leak.ansatt.nav.no',
    output: 'hybrid',
    adapter: node({
        mode: 'standalone',
    }),
});
