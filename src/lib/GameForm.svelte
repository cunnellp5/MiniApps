<script lang='ts'>
  export let addGame: (game: any) => void;

  type Player = { name: string, score: number };

  let gameName: string = '';
  let players: Player[] = [];
  let playerCount: number = 0;

  function formSubmit() {
    console.log("game created");
    addGame({ gameName, players })

    gameName = '';
    playerCount = 0;
    players = [];
  }

  $: {
    players = Array(playerCount)
      .fill(null)
      .map((_, i) => ({ name: `Player ${i + 1}`, score: 0 }));
  }
</script>

<form on:submit|preventDefault={formSubmit} action="" method="post">
    <label>
        <input 
          bind:value={gameName}
          type="text" 
          placeholder="Enter a game name...">
    </label>
    <label>
        <input 
          bind:value={playerCount} 
          type="number"
          min="0"
          placeholder="how many players?"
        >
    </label>
    {#if playerCount > 0 && gameName.length > 0}
      {#each players as player, i}
        <label>
            <input
              bind:value={player.name}
              type="text" 
              placeholder="Player name"
            >
        </label>
      {/each}
      <button>add game</button>
    {/if}
</form>

<style>
    form {
        z-index: 1;
        background: #FFFFFF;
        max-width: 360px;
    }
    form input {
        font-family: "Roboto", sans-serif;
        outline: 0;
        background: #f2f2f2;
        width: 100%;
        border: 0;
        margin: 0 0 15px;
        padding: 15px;
        box-sizing: border-box;
        font-size: 14px;
    }
    form button {
        font-family: "Roboto", sans-serif;
        text-transform: uppercase;
        outline: 0;
        background: #4CAF50;
        width: 100%;
        border: 0;
        padding: 10px;
        color: #FFFFFF;
        font-size: 14px;
        -webkit-transition: all 0.3 ease;
        transition: all 0.3 ease;
        cursor: pointer;
    }
    form button:hover,form button:active,form button:focus {
        background: #43A047;
    }
</style>