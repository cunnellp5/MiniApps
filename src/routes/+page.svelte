<script lang="ts">
    import { signIn, signOut } from '@auth/sveltekit/client'
    import { page } from '$app/stores'

    let imgSrc: string = $page?.data?.session?.user?.image ?? 'https://cdn.pixabay.com/photo/2017/08/11/19/36/vw-2632486_1280.png';
</script>

<main>

    {#if $page.data.session?.user}
        <img class="avatar" alt="avatar" src={imgSrc} />
        <p>Signed in as {$page.data.session.user.email}</p>
        <button on:click={() => signOut()}>Sign out</button>
    {:else}
        <p>Not signed in.</p>
        <button on:click={() => signIn()}>Sign in</button>
    {/if}

    <h1>
        A playground to learn.
    </h1>

    <ul>
        <li>
            <h3>
                Scores
            </h3>
            <pre>A place to keep track of games that tracks player scores (uses localStorage)</pre>
        </li>
        <li>
            <h3>
                Posts
            </h3>
            <pre>A blog beginnings, demonstrating slug routes. Data is hardcoded</pre>
        </li>
        <li>
            <h3>
                Todos
            </h3>
            <pre>List of todos. Items saved to localStorage</pre>
        </li>
        <li>
            <h3>
                Reddit clone
            </h3>
            <pre>Uses Reddit API to agregate items for a given reddit page</pre>
        </li>
    </ul>
</main>

<style>
    ul {
        list-style-type: none;
    }

    li {
        margin-block: 3rem;
    }

    pre {
        white-space: pre-wrap;
    }

    .avatar {
        border-radius: 50%;
        width: 100px;
        height: 100px;
    }
</style>
