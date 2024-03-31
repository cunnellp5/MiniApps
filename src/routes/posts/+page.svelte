<script>
    export let data;
</script>

<h1>Posts</h1>

{#each data?.posts as post}
    <li>
        &nbsp;<a href={`/posts/${post?.slug}`}>{post?.title}</a>
    </li>
{/each}

<style>
    a {
        text-decoration: none;
        color: #000;
    }
    a:hover {
        text-decoration: underline;
        cursor: pointer;
    }
    li {
        list-style-type: '▶️';
        font-size: 20px;
    }
</style>