import React from 'react'

const Api = () => {
    const [usuarios, setUsuarios] = React.useState([])
    const [paginacion, setPaginacion] = React.useState(1)

    const obtenerUsuarios = async () => {
        try {
            const res = await fetch(`https://randomuser.me/api/?page=${paginacion}&results=20`)
            const { results } = await res.json();
            setUsuarios(results)
        } catch (error) {
            console.log(error)
        }
    }

    const siguientePagina = async () => {
        await setPaginacion(paginacion + 1);
        obtenerUsuarios();
    }

    const retornarPagina = async () => {
        await setPaginacion(paginacion - 1);
        obtenerUsuarios();
    }
    return (
        <div class="container text-center">
            <div class="row align-items-start">
                <div class='col text-center'>
                    <nav aria-label="Page navigation example">
                        <ul class="pagination justify-content-center">                            
                            <li class="page-item"> <button class='page-link' onClick={retornarPagina}>Atrás</button> </li>
                            <li class="page-item"> <button class='page-link' onClick={obtenerUsuarios}>Traer Usuarios</button> </li>
                            <li class="page-item"> <button class='page-link' onClick={siguientePagina}>Siguiente</button> </li>
                        </ul>
                    </nav>
                </div>

                {
                    usuarios.map(({ id, name, picture, gender, email }) => (
                        <div class="container text-center">
                            <div class='row align-items-center'>
                                <div class='col'>
                                    <img src={picture.medium} alt={name.first} />
                                </div>
                                <div class='col'>
                                    <h4> {id.value} - {name.first} - {email} </h4>
                                </div>
                                <div class='col'>
                                    <h5>{gender}</h5>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Api