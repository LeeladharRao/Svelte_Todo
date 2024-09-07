<script>
    import "../app.css";
    import TodoForm from "../components/TodoForm.svelte";
    import Todo from "../components/Todo.svelte";
    import { todos, loadTodos } from "../stores/todoStore";

    if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
        loadTodos(JSON.parse(localStorage?.getItem("todos")));
    }
</script>

<div class="container mx-auto my-10">
    <div class="flex flex-wrap">
        <div class="basis-2/6">20%</div>
        <div class="basis-4/6">
            <h1
                class="text-2xl font-bold text-center text-gray-800 md:text-3xl"
            >
                TODO Headline
            </h1>
            <TodoForm />
            
                {#each $todos as todo}
                    <Todo {todo} index={todo.id} />
                {/each}
    
        </div>
    </div>
</div>
