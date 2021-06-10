
// In order for the workers runtime to find the class that implements
// our Durable Object namespace, we must export it from the root module.
export { CounterTs } from './counter'

export default {
  async fetch(request: Request, env: Env) {
    const error_post = new Request(env.post_to_client, {
      body: "Hello from minimal Default object" + JSON.stringify(request),
      method: "POST",
    });
    await globalThis.fetch(error_post)
    try {	    
      return await handleRequest(request, env)
    } catch (e) {
      return new Response(e.message)
    }
  },
}

async function handleRequest(request: Request, env: Env) {
  let id = env.COUNTER.idFromName('A')
  let obj = env.COUNTER.get(id)
  let resp = await obj.fetch("foober")

  return new Response(resp.message)
}

interface Env {
  COUNTER: DurableObjectNamespace
}
