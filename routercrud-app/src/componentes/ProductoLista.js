import React from 'react';
import { Link } from 'react-router-dom';

function ProductoLista(props) {

    const { categoria , id, nombrePlatillo, precioPlatillo } = props.producto;

    const eliminarProducto = (id) => {
        console.log('Eliminando...', id);
        // TODO: Eliminar los Registros
    };

    return (
        <div>
            <li data-categoria={categoria} className="list-group-item d-flex justify-content-between align-items-center">
                <p>
                    {nombrePlatillo}
                    <span className="font-weight-bold"> ${precioPlatillo}</span>
                </p>
                <div>
                    <Link 
                            to={`/productos/editar/${id}`}
                            className="btn btn-success mr-2"
                    >Editar</Link>
                    <button
                            type="button"
                            className="btn btn-danger"
                            onClick={ () => eliminarProducto(id) }
                    >Eliminar &times;</button>
                </div>
            </li>
        </div>
    )
}

export default ProductoLista;