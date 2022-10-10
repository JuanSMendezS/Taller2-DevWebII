import React from 'react'

const Api = () => {
    const [personajes, setPersonajes] = React.useState([])

    const obtenerPersonajes = async () => {

        try {
            const res = await fetch('https://rickandmortyapi.com/api/character')
            const { results } = await res.json();
            setPersonajes(results)
            console.log(results)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <h1>Prueba</h1>
            <button onClick={obtenerPersonajes}>Acción</button>
            {
                personajes.map(({ id, name, image, status }) => (
                    <div key={id}>
                        <h4 key={id}>{id} - {name}</h4>
                        <img src={image} alt={name} />
                        <h5 key={id}>{status}</h5>
                    </div>
                ))
            }
        </div>
    )
}

export default Api