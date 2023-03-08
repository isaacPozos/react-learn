import { useFetch } from "../hooks/useFetch"

export const MultipleCustomHooks = () => {
    const {data, isLoading, hasError} = useFetch('https://rickandmortyapi.com/api/character/1');
    console.log(data);

    return (
        <div>
            <h1>Rick & Morty</h1>
            <hr />
            {
                (isLoading)? (
                    <div className="alert alert-light" role="alert">
                        Cargando...
                    </div>
                ):(
                    <div className="card">
                        <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                )
            }
            

            
        </div>
    )
}
