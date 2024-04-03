import { posts } from "$lib/data/posts";
import { error } from "@sveltejs/kit";
import type { RequestEvent } from "./$types";

/** @type {import('./$types').PageLoad} */
export async function load({ locals }: RequestEvent) {
  const session = await locals.auth();

  if (!session?.user) {
    throw error(401, "Unauthorized. Sign in! (must have github, for now)");
  }

  return { posts };
}
