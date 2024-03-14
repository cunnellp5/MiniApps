import { error } from "@sveltejs/kit";
import { posts } from "$lib/data/posts";

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  return { posts };
}
