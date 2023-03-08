import { useEffect, useState } from "react"
import { Message } from "./Message";


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'ikpo',
        email: 'mail@mail.com'
    })
    const {username, email} = formState;
    const onInputChange = (e) => {
        const {name, value} = e.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    }

    useEffect(() => {
    //   console.log('Use effect Called');
    }, [])
    useEffect(() => {
    //   console.log('formState changed!');
    }, [formState])
    useEffect(() => {
    //   console.log('email changed!');
    }, [email])
    

    return (
        <form>
            <h1>SimpleForm</h1>
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
           { ( username === 'ikpovi' )&& <Message /> }
        </form>
    )
}
