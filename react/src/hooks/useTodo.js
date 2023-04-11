import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = ()=> JSON.parse(localStorage.getItem('todos')) || [];

export const useTodo = (initialState = []) => {
    
    const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));      
    }, [todos])

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        }
        dispatchTodo(action);
    }

    const HandleDeleteTodo = (id) => {
        dispatchTodo({
            type: '[TODO] Remove Todo',
            payload: id
        });
    }
    const handleToggleTodo = (id) => {
        dispatchTodo({
            type: '[TODO] Toggle Todo',
            payload: id,
        });
    }
    const pendingTodosCount = todos.filter( todo => todo.done===false).length;

    return {
        todos, 
        handleNewTodo, 
        HandleDeleteTodo, 
        handleToggleTodo,
        todosCount: todos.length,
        pendingTodosCount,
    }
}
