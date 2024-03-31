import { posts } from "$lib/data/posts";

/** @type {import('./$types').PageLoad} */
export async function load({}) {
  return { posts };
}
