export const prerender = true;

export async function load({ url }: { url: URL }) {
  return {
    url: url.pathname,
  };
}
