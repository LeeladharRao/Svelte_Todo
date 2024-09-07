import { writable, get } from "svelte/store";

export const todos = writable([])

export const loadTodos = (data) => {
    todos.set(data);
}

export const addTodo = (text, priority) => {
    todos.update((cur) => {
        const newTodos = [...cur, { text, completed: false, id: Date.now(), priority: priority }];
        return newTodos;
    })
    localStorage.setItem('todos', JSON.stringify(get(todos)));
}

export const deleteTodo = (id) => {
    todos.update(todos => todos.filter(todo => todo.id !== id))
    localStorage.setItem('todos', JSON.stringify(get(todos)));
}

export const toggleTodoCompleted = (id) => {
    todos.update(todos => {
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id === id) {
                todos[i].completed = !todos[i].completed;
                break;
            }
        }
        return todos;
    })
    localStorage.setItem('todos', JSON.stringify(get(todos)));
}

export const updateTodo = (id, text) => {
    todos.update(todos => {
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id === id) {
                todos[i].text = text;
                break;
            }
        }
        return todos;
    })
    localStorage.setItem('todos', JSON.stringify(get(todos)));
}