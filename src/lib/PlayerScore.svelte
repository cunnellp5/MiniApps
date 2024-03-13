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
    <h2>{ playerName }</h2>
    <p>{ playerScore }</p>
    <button on:click={incrementPlayerScore}>Up</button>
    <button on:click={decreasePlayerScore} disabled={playerScore === 0}>Down</button>
</div>

<style>
    div {
        padding: 1rem;
        margin: 1rem;
    }
    h2 {
        margin: 0;
    }
    p {
        margin: 0;
    }
    button {
        margin: 5px;
    }
</style>