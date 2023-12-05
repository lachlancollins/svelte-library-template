# Svelte Library Template

## Why did I make this?

As I was working on the [TanStack Query Svelte adapter](https://github.com/TanStack/query/tree/main/packages/svelte-query), there were several ways to bundle and release Svelte packages. These are the two extremes I saw:

1. Many older packages still used a custom Rollup setup to bundle their code; however this often has issues as it compiles `.svelte` files to `.js` rather than leaving that to the end user's app build.
2. The Svelte team recommended using `svelte-package` alongside the entirety of SvelteKit; this works well, but requires you to run `svelte-kit sync`, and you don't always need an entire metaframework to build a library.

## What does this offer?

The `svelte-package` only actually needs `@sveltejs/vite-plugin-svelte`. This approach of using `svelte-package` without requiring SvelteKit was the most ergonomic (no `tsconfig.json` syncing) and future-proof (ESM, preserving `.svelte` files) solution I could find.

It also comes with some other goodies out-of-the-box, including TypeScript, Prettier, ESLint, Vitest, and Publint.

## Limitations

If you want to be able to visualise your code as you develop (e.g. UI components), or plan to use SvelteKit-specific utils, you are probably better off using the SvelteKit/svelte-package combination. However, if your library can be reliably checked with tests, this template may be more appropriate.

## Usage

If starting a new library, you can simply select "Use This Template" to create a copy of the repo. Feel free to remove any tools you do not wish to use. If you have an existing library, you can selectively choose which parts of this template to use - I would strongly suggest at least using `svelte-package` and `@sveltejs/vite-plugin-svelte` for build, and the `package.json` exports config.

You can test Prettier, ESLint, TS, and Vitest by running `pnpm lint`. You can test build and Publint by running `pnpm build`. The provided `.github/workflows/pr.yaml` will run these automatically on PRs.

## Suggestions

If you have any ideas or improvements, please feel free to contribute either a PR or write an issue!
