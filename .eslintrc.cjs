// @ts-check

/** @type {import('eslint').Linter.Config} */
const config = {
	root: true,
	env: {
		es2022: true,
		node: true,
	},
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: true,
		sourceType: "module",
		ecmaVersion: 2022,
		extraFileExtensions: [".svelte"],
	},
	plugins: ["@typescript-eslint", "svelte"],
	extends: [
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/stylistic",
		"plugin:svelte/recommended",
	],
	overrides: [
		{
			files: ["*.svelte"],
			parser: "svelte-eslint-parser",
			parserOptions: {
				parser: "@typescript-eslint/parser",
			},
		},
	],
	rules: {
		"svelte/block-lang": ["error", { script: ["ts"] }],
	},
};

module.exports = config;
