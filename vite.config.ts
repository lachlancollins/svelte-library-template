import { defineConfig } from "vitest/config";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
	plugins: [svelte()],
	test: {
		watch: false,
		include: ["src/__tests__/**/*.{test,spec}.{js,ts}"],
		setupFiles: ["test-setup.ts"],
	},
});
