import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
	site: "http://localhost:4321/",
	integrations: [
		react(),
		tailwind({
			applyBaseStyles: false,
		}),
	],
	output: "server",
	adapter: netlify(),
});
