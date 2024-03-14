<script>
    /** @type {(arg0: string) => void} **/
    export let addTodo;
    let newTodo = '';

    function formSubmitted() {
        console.log('form submitted')
        addTodo(newTodo);
        newTodo = '';
    }
</script>

<form on:submit|preventDefault={formSubmitted}>
    <label>
        <input 
            bind:value={newTodo} 
            placeholder="Enter a todo..."
        >
    </label>

    <button disabled={newTodo.length === 0}>Add Todo</button>
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