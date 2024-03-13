<script>
    /** @type {string} **/
    export let playerName;
    export let playerScore = 0;

    function incrementPlayerScore() {
        playerScore += 1;
    };

    function decreasePlayerScore() {
        if(playerScore > 0) {
            playerScore -= 1;
        }
    };    
</script>

<div>
    <h2>
        { playerName }:
        { playerScore }
    </h2>
    <button on:click={incrementPlayerScore}>⬆️</button>
    <button on:click={decreasePlayerScore} disabled={playerScore === 0}>⬇️</button>
</div>

<style>
    h2 {
        margin: 0;
    }
    button {
        margin: 5px;
    }
</style>