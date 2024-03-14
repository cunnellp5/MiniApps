<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
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
            todos = todos;
        }
    }

    /** @param {number} index **/
    function removeTodos(index) {
        todos.splice(index, 1);
        todos = todos;
    }

    function deleteAllTodos() {
        todos = [];
    };

    $: if (typeof window !== 'undefined') {
        localStorage.setItem('todos', JSON.stringify(todos));
    };
</script>

<main>
    <h1>Todo</h1>
    <div class="todosWrapper">
        <TodoForm addTodo={addTodo}/>
        <ul>
            {#each todos as { title, done }, i}
                <li class="todo" class:done={done}>
                    <input
                        checked={done}
                        type="checkbox"
                        on:click={() => done = !done}
                    />
                    <label for="todo">{title}</label>
                    <span
                        class="delete"
                        on:click={() => removeTodos(i)}>
                        🗑️
                    </span>
                </li>
            {/each}
        </ul>
        {#if todos.length === 0}
            <p>No todos</p>
        {/if}
        <button class="removeAll" class:hidden={todos.length < 3} on:click={deleteAllTodos}>Delete All</button>
    </div>
</main>

<style>
    ul {
        padding: 0;
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
    .hidden {
        display: none;
    }
    .todosWrapper {
        margin: 0 2rem;
        width: 360px;
    }
    .done{
        text-decoration: line-through;
    }
    .todo {
        cursor: pointer;
        list-style-type: none;
    }
    .delete {
        display: inline-block;
    }
    .delete:hover {
        transform: scale(1.2);
    }
</style>