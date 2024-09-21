import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind({
        applyBaseStyles: false,
    }), react()],
    site: 'https://leak.ansatt.nav.no',
    output: 'hybrid',
    adapter: node({
        mode: 'standalone',
    }),
});