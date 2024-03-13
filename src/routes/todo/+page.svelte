<script>
    import TodoForm from "$lib/TodoForm.svelte";

    /** @type {{ title: string; done: boolean; }[]} **/
    let todos = [];

    /** @param {string} todo **/
    function addTodo(todo) {
        if(todo.length) {
            todos.push({
                title: todo,
                done: false
            })
            console.log(todos);
            todos = todos;
        }
    }
</script>

<main>
    <h1>Todo</h1>
    
    <div class="todosWrapper">
        <TodoForm addTodo={addTodo}/>
        
        <ul>
            {#each todos as { title, done }}
                <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <li class:done={done} on:click={() => done = !done}>
                    {title}
                </li>
            {/each}
        </ul>
    </div>
</main>

<style>
    .todosWrapper {
        margin: 0 2rem;
    }
    .done{
        text-decoration: line-through;   
    }
</style>