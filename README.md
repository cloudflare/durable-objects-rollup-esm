# 👷 Durable Objects Counter template

## Note: You must use [wrangler](https://developers.cloudflare.com/workers/wrangler/get-started/#install) 2.0.0 or newer to use this template.

## Please read the [Durable Object documentation](https://developers.cloudflare.com/workers/learning/using-durable-objects) before using this template.

A template for kick starting a Cloudflare Workers project using:

- Durable Objects
- Modules (ES Modules to be specific)
- Rollup
- Wrangler

Worker code is in `src/`. The Durable Object `Counter` class is in `src/counter.mjs`, and the eyeball script is in `index.mjs`.

Rollup is configured to output a bundled ES Module to `dist/index.mjs`.

Once you have published the worker, you can interact with it as follows:

```
bash-3.2$ curl worker.your-account-name.workers.dev/
Select a Durable Object to contact by using the `name` URL query string parameter. e.g. ?name=A
bash-3.2$ curl worker.your-account-name.workers.dev/?name=A
Durable Object 'A' 0 is even
bash-3.2$ curl worker.your-account-name.workers.dev/increment?name=A
Durable Object 'A' 1 is odd
bash-3.2$ curl worker.your-account-name.workers.dev/increment?name=A
Durable Object 'A' 2 is even
bash-3.2$ curl worker.your-account-name.workers.dev/decrement?name=A
Durable Object 'A' 1 is odd
```
