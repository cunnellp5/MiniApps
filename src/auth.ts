import { GITHUB_ID, GITHUB_SECRET } from "$env/static/private";
import { SvelteKitAuth } from "@auth/sveltekit";
import Facebook from "@auth/sveltekit/providers/facebook";
import GitHub from "@auth/sveltekit/providers/github";
import Google from "@auth/sveltekit/providers/google";

export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [
    GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET }),
    // Google, // figure this out
    // Facebook, // figure this out
  ],
});
