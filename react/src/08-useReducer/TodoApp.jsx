import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer";
import { TodoList } from "./components/TodoList";
import { TodoAddForm } from "./components/TodoAddForm";

const initialState = [];

const init = ()=> JSON.parse(localStorage.getItem('todos')) || [];

export const TodoApp = () => {

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
        dispatchTodo
    }

    return (
        <>
            <h1>Tareas por hacer (1), </h1><small className="">pendientes 10</small>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} onDeleteTodo={ id => HandleDeleteTodo(id)} onToggleTodo={ id => handleToggleTodo(id)} />
                </div>
                <div className="col-5">
                    <h4>Agregar Tarea</h4>
                    <hr />
                    <TodoAddForm onNewTodo={ handleNewTodo } />
                </div>
            </div>
            
        </>
    )
}
