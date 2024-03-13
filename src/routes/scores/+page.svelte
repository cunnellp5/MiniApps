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

<h1>Player Score Counter:</h1>
<div class=scoreWrapper>
    <PlayerScore bind:playerScore={player1Score} playerName="Player 1"></PlayerScore>
    <PlayerScore bind:playerScore={player2Score} playerName="Player 2"></PlayerScore>
    {#if player1Score > 0 || player2Score > 0}
        <button on:click={resetScore}>RESET</button>
    {/if}
</div>

<style>
    .scoreWrapper {
        margin: 0 2rem;
    }

    button {
        margin: 1rem 0;
        width: 100px;
        padding: 1em 2em;
        border: none;
        color: inherit;
        cursor: pointer
    }

    button:hover{
        background-color: #f4f4f4;
    }
</style>