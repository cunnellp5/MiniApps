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

<div>
    <h1>Player Score Counter:</h1>
    <PlayerScore bind:playerScore={player1Score} playerName="Player 1"></PlayerScore>
    <PlayerScore bind:playerScore={player2Score} playerName="Player 2"></PlayerScore>
    <button on:click={resetScore}>Reset</button>
</div>