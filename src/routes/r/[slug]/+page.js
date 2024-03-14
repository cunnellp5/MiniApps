/** @type {import('./$types').PageLoad} **/
export async function load({ fetch, params }) {
  const url = `https://api.reddit.com/r/${params.slug}.json`;
  const res = await fetch(url);

  if (res.ok) {
    return { posts: (await res.json()).data.children };
  }

  return {
    status: res.status,
    error: new Error(`Could not load ${url}`),
  };
}
