export const CharacterCard = ({data}) => {
    
  return (
    <div className="card">
        <img src={data.image} className="card-img-top" alt={data.name} />
        <div className="card-body">
            <h5 className="card-title">{data.name}</h5>
            <p className="card-text">
                Origen: {data.origin.name}<br />
                Especie: {data.species}
            </p>
        </div>
        <div className="card-footer">{data.status}</div>
    </div>
  )
}
