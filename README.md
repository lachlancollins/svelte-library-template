# Svelte Library Template

## Why did I make this?

As I was working on the [TanStack Query Svelte adapter](https://github.com/TanStack/query/tree/main/packages/svelte-query), there were several ways to bundle and release Svelte packages. These are the two extremes I saw:

1. Many older packages still used a custom Rollup setup to bundle their code; however this often has issues as it compiles `.svelte` files to `.js` rather than leaving that to the end user's app build.
2. The Svelte team recommended using `svelte-package` alongside the entirety of SvelteKit; this works well, but requires you to run `svelte-kit sync`, and you don't always need an entire metaframework to build a library.

## What does this offer?

The `svelte-package` only actually needs the Vite plugin. This approach of using `svelte-package` without requiring SvelteKit was the most ergonomic (no `tsconfig.json` syncing) and future-proof (ESM, preserving `.svelte` files) solution I could find.

It also comes with some other goodies out-of-the-box, including TypeScript, Prettier, ESLint, and Vitest. These are all checked when `pnpm lint` is run. The provided `.github/workflows/pr.yaml` will run this automatically on PRs.

## Limitations

If you want to be able to visualise your code as you develop (e.g. UI components), or plan to use SvelteKit-specific utils, you are probably better off using the SvelteKit/svelte-package combination. However, if your library can be reliably checked with tests, this template may be more appropriate.
