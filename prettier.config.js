// @ts-check

/** @type {import('prettier').Config} */
const config = {
	bracketSpacing: true,
	endOfLine: "auto",
	printWidth: 120,
	singleQuote: false,
	tabWidth: 4,
	useTabs: true,
	plugins: ["prettier-plugin-svelte", "prettier-plugin-tailwindcss"],
	overrides: [{ files: "*.svelte", options: { parser: "svelte" } }],
};

export default config;
