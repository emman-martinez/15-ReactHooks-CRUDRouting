import React, { Fragment } from 'react';
import ProductoLista from './ProductoLista';

function Productos(props) {

    return(
        <Fragment>
            <h1 className="text-center">Productos</h1>
            <ul className="list-group mt-5">
                {props.productos.map(producto => (
                    <ProductoLista
                                    key={producto.id}
                                    producto={producto}
                    ></ProductoLista>
                ))}
            </ul>
        </Fragment>
        
    )
}

export default Productos;