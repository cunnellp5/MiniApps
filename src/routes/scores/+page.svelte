<script lang='ts'>
    import PlayerScore from "$lib/PlayerScore.svelte";
    import GameForm from "$lib/GameForm.svelte";
  import { GammaCorrectionShader } from "three/examples/jsm/Addons.js";

    /** @type {boolean} **/
    let showResetButton = false;

    /** @type {Players} **/
    type Players = { name: string, score: number }

    /** @type {Game} **/
    type Game = {
        players: Players[],
        gameName: string
    }

    let games:Game[] = [];

    // let game: Game = {
    //     players: [
    //         { name: "Player 1", score: 0 },
    //         { name: "Player 2", score: 0 }
    //     ],
    //     gameName: "Tic Tac Toe"
    // }

    function addGame (game) { 
        console.log(game, "game created");
        games.push(game);
        games = games
    }

    function resetScore(game) {
       game.players = game.players.map(player => ({ ...player, score: 0 }));
    }

    $: {
        console.log(games, 'testing')
        // games.forEach((game) => {
        //     showResetButton = game.players.some(player => player.score > 0)
        // })
    }
</script>

<h1>Score:</h1>

<GameForm addGame={addGame}/>

{#each games as game}
    <!-- <Game game={game} showResetButton={showResetButton} resetScore={resetScore}></Game> -->
    <div class=gameWrapper>
        Game {game.gameName}
    
        {#each game.players as player}
            <PlayerScore bind:playerScore={player.score} playerName={player.name}></PlayerScore>        
        {/each}
<!--     
        {#if showResetButton}
            <button on:click={() => resetScore(game)}>RESET</button>
        {/if} -->
    </div>
{/each}

<style>
    .gameWrapper {
        margin: 0 2rem;
        border: 1px solid #f4f4f4;
        box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.08);
        padding: 16px;
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