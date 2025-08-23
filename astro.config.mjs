// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import svelte from "@astrojs/svelte";

import simpleStackQuery from "simple-stack-query";

// https://astro.build/config
export default defineConfig({
    site: "https://riicc.xyz",

    vite: {
        plugins: [tailwindcss()],
    },

    integrations: [react(), svelte(), simpleStackQuery()],
});
