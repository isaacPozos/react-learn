import { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter";

const heavyStuff = (itearations = 100)=>{
    for(let i=0 ; i < itearations; i++){
        console.log('iteraciones');
    }
    return `${itearations} iteraciones realizadas`;
}

export const MemorizeHook = () => {
    const { counter, increment } = useCounter(500);
    const [show, setShow] = useState(true);

    const valorMemorizado = useMemo(() => heavyStuff(counter), [counter])

    return (
        <>
            <h1>Counter: <small>{ counter }</small></h1>
            <hr />
            <h4>{ valorMemorizado }</h4>
            <button className="btn btn-primary" onClick={ () => increment() }>
                +1
            </button>
            <button className="btn btn-outline-primary" onClick={ () => setShow( !show ) }>Show / Hide {JSON.stringify(show)}</button>
        </>
    )
}
