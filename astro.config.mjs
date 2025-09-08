// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://tiamei.design',
    output: 'static',
    outDir: './docs',
    build: {  assets: 'astro-assets' },
});
