import { defineConfig } from "vitest/config";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
	plugins: [svelte()],
	test: {
		watch: false,
		include: ["tests/**/*.{test,spec}.{js,ts}"],
		setupFiles: ["tests/setup.ts"],
	},
});
