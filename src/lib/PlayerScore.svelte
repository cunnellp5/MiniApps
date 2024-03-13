<script>
    /** @type {string} **/
     export let playerName;

    let playerScore = 0;

    function incrementPlayerScore() {
        playerScore += 1;
    }

    function decreasePlayerScore() {
        if(playerScore > 0) {
            playerScore -= 1;
        }
    }
</script>

<div>
    <h2>{ playerName }</h2>
    <p>{ playerScore }</p>
    <button on:click={incrementPlayerScore}>Up</button>
    <button on:click={decreasePlayerScore}>down</button>
</div>