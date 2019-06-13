import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

function ProductoLista(props) {

    const { categoria , id, nombrePlatillo, precioPlatillo } = props.producto;
    const { guardarRecargarProductos } = props.guardarRecargarProductos;

    const eliminarProducto = async id => {
        console.log('Eliminando...', id);

        // TODO: Eliminar los Registros
        Swal.fire({
            title: '¿Estás Seguro?',
            text: "Un Platillo eliminado no se puede recuperar",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar!',
            cancelButtonText : 'Cancelar'
          }).then( async (result) => {

            if (result.value) {
            
                try {

                    const url = `http://localhost:4000/restaurant/${id}`;
                    console.log(url);
                    const resultado = await axios.delete(url);
                    console.log(resultado);       
                    
                    if(resultado.status === 200) {
                        Swal.fire(
                            '¡Eliminado!',
                            'El Producto se ha eliminado',
                            'success'
                        )
                        // Consultar la API
                        guardarRecargarProductos(true);
                    }

                } catch (error) {
                    console.log(error);
                    Swal.fire({
                        type: 'error',
                        title: 'Oops...',
                        text: 'Hubo un error, vuelve a intentarlo',
                    })
                }
            }
          })
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