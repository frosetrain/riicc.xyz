// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
	site: "https://riicc.xyz",

	vite: {
		plugins: [tailwindcss()],
	},

	integrations: [react()],

	experimental: {
		fonts: [
			{
				provider: fontProviders.fontsource(),
				name: "Public Sans",
				cssVariable: "--font-public-sans",
			},
		],
	},
});
