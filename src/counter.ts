export class CounterTs {
  value: number = 0
  state: DurableObjectState
  initializePromise: Promise<void> | undefined
  env: Env
  constructor(state: DurableObjectState, env: Env) {
    this.state = state;
    // attempt to pass env to class object
    this.env = env;
  }

  async initialize() {
    let stored = await this.state.storage.get<number>("value");
    this.value = stored || 0;
  }

  // Handle HTTP requests from clients.
  async fetch(request: Request) {
    	const error_post = new Request(this.env.post_to_client, {
      body: "Hello from minimal Class object" + JSON.stringify(request),
      method: "POST",
    });
    await globalThis.fetch(error_post)

      return new Response("Response from class object");
  }
}
interface Env {
  COUNTER: DurableObjectNamespace
}
