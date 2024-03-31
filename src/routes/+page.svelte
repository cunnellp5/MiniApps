<script>
    // import Cube from '../lib/Cube.svelte';
</script>

<main>
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
</style>
