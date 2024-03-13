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

<main class="scores">
    <h2>
        { playerName.toUpperCase() }:
        <span class="playerScore">
            <!-- <small>score:</small> -->
            { playerScore }
        </span>
    </h2>
    <div class=incrementors>
        <button on:click={incrementPlayerScore}>⬆️</button>
        <button on:click={decreasePlayerScore} disabled={playerScore === 0}>⬇️</button>
    </div>
</main>

<style>
    h2 {
        margin: 0;
    }

    button {
        margin: 5px;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;
    }

    .scores {
        display: flex;
        justify-content: space-between;
        align-items: center;

        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.08);
        padding: 1rem;
        margin: 1rem 0;
        width: 20%;
    }

    .incrementors{
        display: flex;
        flex-direction: column;
    }

    .playerScore {
        display: inline-block;
        text-align: center;
        color: rgb(0, 169, 0);
        width: 45%;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
    }
</style>