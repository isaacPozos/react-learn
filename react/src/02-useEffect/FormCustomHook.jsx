import { useEffect } from "react"
import { useForm } from "../hooks/useForm"


export const FormCustomHook = () => {

    const {formState, onInputChange, onResetForm} = useForm({
        username: '',
        email: '',
        password: ''
    })

    const {username, email, password} = formState;
    
    return (
        <form>
            <h1>Form with custom Hook</h1>
            <hr />
            <input 
                type="text" 
                className="form-control" 
                placeholder="Username" 
                name="username" 
                value={username}
                onChange={onInputChange}
            />
            <input 
                type="email" 
                className="form-control mt-2" 
                placeholder="Email" 
                name="email" 
                value={email} 
                onChange={onInputChange}
            />
            <input 
                type="password" 
                className="form-control mt-2" 
                placeholder="Contraseña" 
                name="password" 
                value={password} 
                onChange={onInputChange}
            />
           <button className="btn btn-secondary mt-3" onClick={onResetForm}>Borrar</button>
        </form>
    )
}
