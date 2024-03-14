<script>
    import { goto } from '$app/navigation';

    let searchTerm = '';

    function formSubmitted() {
        goto(`/r/${searchTerm}`) 
    }
</script>

<h1>Reddit</h1>
<div>
    <p>
        Examples:
    </p>
    <a href="/r/javascript">reddit - javascript</a>
    <a href="/r/aww">reddit - aww</a>
    <br>
    <form on:submit|preventDefault={formSubmitted}>
        <label>
            <input
                bind:value={searchTerm}
                placeholder="Search reddits..."
            >
        </label>
    
        <button>Search Reddit</button>
    </form>    
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
    }
</style>