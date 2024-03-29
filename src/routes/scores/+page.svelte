<script lang='ts'>
    import PlayerScore from "$lib/PlayerScore.svelte";
    import GameForm from "$lib/GameForm.svelte";

    // /** @type {boolean} **/
    // let showResetButton = false;

    /** @type {Player} **/
    type Player = { name: string, score: number }

    type Game = {
        players: Player[],
        gameName: string
    }

    let games:Game[] = [];

    if(typeof window !== 'undefined') {
        // @ts-ignore
        games = JSON.parse(window.localStorage.getItem('games')) || [];
    }

    function addGame (game: Game) { 
        games.push(game);
        games = games
    }
    
    function resetScoreForGame(game: Game) {
        game.players = game.players.map(player => ({ ...player, score: 0 }));
        games = games;
    }

    function deleteGame(i: number) {
        if(confirm('Are you sure you want to delete this game?')) {
            games.splice(i, 1);
            games = games;
        }
    }
    
    $: {
        if (typeof window !== 'undefined') {
            window.localStorage.setItem('games', JSON.stringify(games));
        }
    }
</script>

<header>
    <h1>Score keeper</h1>
    
    <p>
        Add games with n-number of players to keep track of player scores
    </p>
    <ul>
        <li>In order to start a game, you need a name and at least one player</li>
        <br>
        Features:
        <ul>
            <li>Reset all player scores</li>
            <li>Delete a game</li>
            <li>Increment or decrement player scores</li>
        </ul>
    </ul>

    <div class="formWrapper">
        <GameForm addGame={addGame}/>
    </div>
</header>


{#each games as game, i}
    <div class=gameWrapper>
        <h2>Game {game.gameName}</h2>
        {#each game.players as player}
            <PlayerScore 
                bind:playerScore={player.score} 
                playerName={player.name}
                >
            </PlayerScore>        
        {/each}
        <button on:click={() => resetScoreForGame(game)}>RESET '{game.gameName}'</button>
        <button class="removeAll" on:click={() => deleteGame(i)}>DELETE '{game.gameName}''</button>
    </div>
{/each}

<style>
    .gameWrapper {
        margin: 4rem 2rem;
        border: 1px solid #f4f4f4;
        box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.08);
        padding: 16px;
    }

    button {
        margin: 1rem 0;
        padding: 1em 2em;
        border: none;
        color: inherit;
        cursor: pointer
    }

    button:hover{
        background-color: #f4f4f4;
    }

    .formWrapper {
        margin: 4rem 2rem;
    }

    .removeAll {
        box-sizing: border-box;
        appearance: none;
        background-color: transparent;
        border: 2px solid rgb(255, 85, 85);
        color: rgb(255, 85, 85);
        cursor: pointer;
        text-transform: uppercase;
        transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
    }
    .removeAll:hover {
        box-shadow: 0 0 40px 40px rgb(255, 85, 85) inset;
        color: white;
    }
</style>