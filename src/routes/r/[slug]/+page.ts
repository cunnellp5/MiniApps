/** @type {import('./$types').PageLoad} **/
export async function load({ fetch, params }: { fetch: any; params: string }) {
  const url = `https://api.reddit.com/r/${params.slug}.json`;

  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Response not OK");
    }

    return { posts: (await res.json()).data.children };
  } catch (error) {
    throw error;
  }
}
