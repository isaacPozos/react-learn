import { useCounter, useFetch } from "../hooks";
import { CharacterCard } from "./CharacterCard";
import { LoadingQuote } from "./LoadingQuote";

export const MultipleCustomHooks = () => {
    const { counter, increment } = useCounter(1);
    const {data, isLoading, hasError} = useFetch(`https://rickandmortyapi.com/api/character/${counter}`);

    return (
        <div>
            <h1>Rick & Morty</h1>
            <hr />
            {
                (isLoading)
                    ? <LoadingQuote />
                    : <CharacterCard data={ data } />
            }
            
            <button 
                className="btn btn-info"
                disabled={isLoading}
                onClick={()=>increment()}>Siguiente Personaje</button>

            
        </div>
    )
}
