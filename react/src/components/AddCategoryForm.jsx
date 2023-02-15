import { useState } from "react";


export const AddCategoryForm = ({onNewCategory}) => {

    const [InputValue, setInputValue] = useState('')
    const onInputChange = (event)=> setInputValue(event.target.value);

    const enviarFormulario = (event)=> {
        event.preventDefault();
        const valor = InputValue.trim();
        if(valor.length <= 1) return;
        // En vez de un valor le pasamos un callback para manejar el arrary
        onNewCategory(valor);
        setInputValue('');
    }
    return (
        <form onSubmit={ (event) => enviarFormulario(event) }>
            <input type="text" placeholder="Buscar Gifs" onChange={(event)=>onInputChange(event)} value={InputValue} />
        </form>
    )
}
