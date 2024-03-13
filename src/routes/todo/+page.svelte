<script>
    import TodoForm from "$lib/TodoForm.svelte";

    /** @type {{ title: string; done: boolean; }[]} **/
    let todos = [];
    if (typeof window !== 'undefined') {
        todos = localStorage.getItem('todos') 
            // @ts-ignore
            ? JSON.parse(localStorage.getItem('todos'))
            : [];
    }


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

    /** @param {number} index **/
    function removeTodos(index) {
        todos.splice(index, 1);
        todos = todos;
    }

    
    $: if (typeof window !== 'undefined') {
        localStorage.setItem('todos', JSON.stringify(todos));
    }
</script>

<main>
    <h1>Todo</h1>
    
    <div class="todosWrapper">
        <TodoForm addTodo={addTodo}/>
        
        <ul>
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            {#each todos as { title, done }, i}
                <li class="todo" class:done={done}>
                    <!-- <div class="deleteWrapper"> -->
                    {#if done}
                        <span>✅</span>
                    {/if}
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <span on:click={() => done = !done}>
                        {title}
                    </span>
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <span 
                        class="delete" 
                        on:click={() => removeTodos(i)}>
                        🗑️
                    </span>
                    <!-- </div> -->
                </li>
            {/each}
        </ul>
    </div>
</main>

<style>
    /* .deleteWrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
    } */
    .todosWrapper {
        margin: 0 2rem;
        width: 360px;
    }
    .done{
        text-decoration: line-through;
    }
    .todo {
        cursor: pointer;
    }
    .delete {
        display: inline-block;
    }
    .delete:hover {
        transform: scale(2);
    }
</style>