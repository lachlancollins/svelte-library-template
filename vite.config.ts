import { defineConfig } from "vitest/config";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { svelteTesting } from "@testing-library/svelte/vite";

export default defineConfig({
	plugins: [svelte(), svelteTesting()],
	test: {
		watch: false,
		include: ["tests/**/*.{test,spec}.{js,ts}"],
		setupFiles: ["tests/setup.ts"],
	},
});
