<script>
    import { addTodo } from "../stores/todoStore";

    let todo = "";

    let priority = "High";
    let options = ["High", "Medium", "Low"];

    const handleSubmit = () => {
        addTodo(todo, priority);
        todo = "";
    };
</script>

<div class="container">
    <form class="my-6" on:submit|preventDefault={handleSubmit}>
        <div
            class="container flex justify-center items-center flex-col text-base mb-2"
        >
            <div class="w-4/5">
                <div class="relative">
                    <div class="absolute top-4 left-3">
                        <i class="fa fa-search text-gray-400 z-20"></i>
                    </div>
                    <input
                        bind:value={todo}
                        type="text"
                        name="todo"
                        placeholder="Enter Task"
                        class="py-5 p-5 w-full focus:shadow focus:outline-none shadow-sm border border-gray-200
                    focus:outline-none focus:border-gray-400 rounded-lg"
                    />

                    <div class="absolute inset-y-0 right-20 flex items-center">
                        <!-- <label for="currency" class="sr-only">Currency</label> -->
                        <select
                            bind:value={priority}
                            id="priority"
                            name="priority"
                            class="h-full rounded-md border-0 bg-transparent py-2 pl-2 pr-5 text-gray-500 focus:ring-2
                            focus:ring-inset focus:ring-gray-400"
                        >
                            {#each options as value}<option {value}
                                    >{value}</option
                                >{/each}
                        </select>
                    </div>

                    <div class="absolute top-3 right-2">
                        <button
                            class="py-2 p-4 text-white rounded-lg bg-red-500 hover:bg-red-600"
                            >Add</button
                        >
                    </div>
                </div>
            </div>
        </div>
    </form>
</div>
