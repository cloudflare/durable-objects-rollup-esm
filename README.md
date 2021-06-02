# 👷 Durable Objects Counter template

## Note: You must use [wrangler](https://developers.cloudflare.com/workers/cli-wrangler/install-update) 1.17 or newer to use this template.

## Please read the [Durable Object documentation](https://developers.cloudflare.com/workers/learning/using-durable-objects) before using this template.

A template for kick starting a Cloudflare Workers project using:

- Durable Objects
- Modules (ES Modules to be specific)
- Rollup
- Wrangler

Worker code is in `src/`. The Durable Object `Counter` class is in `src/counter.mjs`, and the eyeball script is in `index.mjs`.

Rollup is configured to output a bundled ES Module to `dist/index.mjs`.

On your first publish, you must use `wrangler publish --new-class Counter` to allow the Counter class to implement Durable Objects.
