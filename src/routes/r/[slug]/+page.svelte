<script>
    import { page } from '$app/stores';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h1>
    r/{$page.params.slug}
</h1>

{#each data.posts as post}
    <div class="post">
        <a 
            target="_blank"
            rel="noopener noreferrer"
            href={`https://reddit.com/${post.data.permalink}`}
        >
            <h3>{post.data.title}</h3>
        </a>
        {#if post.data.secure_media}
            {#if post.data.secure_media.reddit_video}
                <video muted autoplay loop src={post.data.secure_media.reddit_video.fallback_url}></video>
            {/if}
        {:else if post.data.post_hint === 'image'}
            <img alt={post.data.title} src={post.data.url} />
        {/if}
    </div>
{/each}


<style>
    .post {
        margin: 1rem;
        padding: 1rem;
        border: 2px solid #000;
    }
    h3 {
        margin: 0;
    }
    video, img {
        width: 100%;
    }
</style>