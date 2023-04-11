import { useForm } from "../../hooks/useForm";

export const TodoAddForm = ({onNewTodo}) => {
  const {description, onInputChange, onResetForm} = useForm({description: ''});

    const onSubmitHandler = (e)=> {
        e.preventDefault();

        if(description.length < 1) return;

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description: description
        }

        onNewTodo(newTodo);
        onResetForm();
    }
  return (
    <form onSubmit={ onSubmitHandler }>
        <input type="text" name="description" value={description} onChange={onInputChange} placeholder="¿Que hay que hacer?" className="form-control" />
        <button type="submit" className="btn btn-primary mt-2">Agregar</button>
    </form>
  )
}
