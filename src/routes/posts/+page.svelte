<script>
    export let data;
    console.log(data, 'what')
</script>

<h1>Posts</h1>
{#each data.posts as post}
    <h4>
        <a href={`/posts/${post.slug}`}>{post.title}</a>
    </h4>
{/each}

<style>
    h4 {
        margin: 10px;
    }
    a {
        text-decoration: none;
        color: #000;
    }
    a:hover {
        text-decoration: underline;
        cursor: pointer;
    }
</style>