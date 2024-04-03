import type { LayoutServerLoad } from "./$types";

export const prerender = true;

export const load: LayoutServerLoad = async (event) => {
  return {
    session: await event.locals.auth(),
  };
};
