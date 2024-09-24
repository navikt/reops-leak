import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import htmx from 'astro-htmx';

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind({
        applyBaseStyles: false,
    }), react(), htmx()],
    site: 'https://leak.ansatt.nav.no',
    output: 'hybrid',
    adapter: node({
        mode: 'standalone',
    }),
    experimental: {
        serverIslands: true
    },
});