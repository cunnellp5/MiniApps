<script>
    import PlayerScore from "$lib/PlayerScore.svelte";

    /** @type {Number} **/
    let player1Score;

    /** @type {Number} **/
    let player2Score;

    function resetScore() {
        player1Score = 0;
        player2Score = 0;
    }
</script>

<main>
    <h1>Home page</h1>

    <h2>Player Score Counter:</h2>
    <PlayerScore bind:playerScore={player1Score} playerName="Player 1"></PlayerScore>
    <PlayerScore bind:playerScore={player2Score} playerName="Player 2"></PlayerScore>

    <button on:click={resetScore}>Reset</button>
</main>

<style>
    main {
        padding: 1rem;
        margin: 1rem;
    }
    h1 {
        margin: 0;
    }
    h2 {
        margin: 2rem;
    }
</style>
