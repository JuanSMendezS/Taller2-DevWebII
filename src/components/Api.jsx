import React from 'react'

const Api = () => {
    const [personajes, setPersonajes] = React.useState([])
    const [paginacion, setPaginacion] = React.useState(1)

    const obtenerPersonajes = async () => {

        try {            
            const res = await fetch(`https://randomuser.me/api/?page=${paginacion}&results=20&seed=foobar`)
            const { results } = await res.json();
            setPersonajes(results)
        } catch (error) {
            console.log(error)
        }
    }

    const siguientePagina = async () => {
        await setPaginacion(paginacion + 1);
        obtenerPersonajes();
    }

    const retornarPagina = async () => {
        await setPaginacion(paginacion - 1);
        obtenerPersonajes();
    }
    return (
        <div>
            <h1>Prueba</h1>
            <button onClick={obtenerPersonajes}>Acción</button>
            <button onClick={siguientePagina}>Siguiente</button>
            <button onClick={retornarPagina}>Atrás</button>
            {
                personajes.map(({ name, picture, gender, email }) => (
                    <div id='contenedor'>
                        <h4>{name.first} - {email}</h4>
                        <img src={picture.medium} alt={name.first} />
                        <h5>{gender}</h5>                        
                    </div>
                ))
            }
        </div>
    )
}

export default Api