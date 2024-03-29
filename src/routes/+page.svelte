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
            <pre>A place to keep track of player scores and games</pre>
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
            <pre>List of todos that are saved to localStorage</pre>
        </li>
        <li>
            <h3>
                Reddit
            </h3>
            <pre>Reaches out to the reddit api and renders the page that is searched by appending the search term to the url query param, has two examples</pre>
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
