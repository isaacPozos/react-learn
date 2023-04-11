
import { TodoList } from "./components/TodoList";
import { TodoAddForm } from "./components/TodoAddForm";
import { useTodo } from "../hooks/useTodo";

export const TodoApp = () => {

    const {todos, handleNewTodo, HandleDeleteTodo, handleToggleTodo, todosCount, pendingTodosCount} = useTodo();

    return (
        <>
            <h1>Tareas por hacer ({todosCount}), </h1><small className="">pendientes {pendingTodosCount}</small>
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
