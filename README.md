# Svelte Library Template

## Why

As I was working on the @tanstack/svelte-query adapter, there were several ways to bundle and release Svelte packages. These are the two extremes I saw:

1. Many older packages still used a custom Rollup setup to bundle their code, however often has issues as it compiles `.svelte` files to `.js` rather than leaving that to the end user's app build.
2. The Svelte team recommended using `svelte-package` alongside the entirety of SvelteKit; this works great, but requires you to run `svelte-kit sync`, and you shouldn't need an entire metaframework to build a library.

## What

I realised that the `svelte-package` only actually needed the vite plugin. This approach of using `svelte-package` without requiring SvelteKit was the most ergonomic (no `tsconfig.json` syncing) and future-proof (ESM, preserving `.svelte` files) solution I could find.
