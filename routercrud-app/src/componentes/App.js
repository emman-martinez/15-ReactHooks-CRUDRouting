import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Productos from './Productos';
import EditarProducto from './EditarProducto';
import AgregarProducto from './AgregarProducto';
import Producto from './Producto';
import Imagen from './Imagen';
import './../css/App.css';

function App() {

  const [ productos, guardarProductos ] = useState([]);
  const [ recargarProductos, guardarRecargarProductos ] = useState(true);

  useEffect(() => {
    if(recargarProductos === true) {
      const consultarApi = async () => {
        // Consultar la API de json-server
        const resultado = await axios.get('http://localhost:4000/restaurant');
        const { data } = resultado;
        // console.log(data);
        // Colocarlo en el state
        guardarProductos(data);
      }
      consultarApi();

      // Cambiar a false la recarga de los productos
      guardarRecargarProductos(false);
    }
  }, [recargarProductos]);

  return (
    <Router>
      { /* ***** Componente: Header ***** */ }
      <Header></Header>
      <main className="container mt-5">
        <Switch>
          {/*<Route exact path="/productos" component={Productos}></Route>*/}
          { /* Route: Productos */}
          <Route  exact path="/productos" 
                    render={ () => (
                      <Productos
                                  productos={productos}
                                  guardarRecargarProductos={guardarRecargarProductos}
                      ></Productos>
                    )}
          ></Route>
          { /* Route: AgregarProducto */}
          <Route exact path="/nuevo-producto" 
                  render={() => (
                    <AgregarProducto
                                      guardarRecargarProductos={guardarRecargarProductos}
                    ></AgregarProducto>
                  )}
          ></Route>
          { /* Route: Producto */}
          <Route exact path="/productos/:id" component={Producto}></Route>
          { /* Route: EditarProducto */}
          <Route exact path="/productos/editar/:id"
                  render={props => {
                    // console.log(typeof props.match.params.id)
                    // Tomar el ID del producto
                    const idProducto = parseInt(props.match.params.id);
                    // El producto que se pasa al state
                    const producto = productos.filter(producto => producto.id === idProducto);

                    return(
                      <EditarProducto
                                      producto={producto[0]}
                                      guardarRecargarProductos={guardarRecargarProductos}
                      ></EditarProducto>
                      )
                  }}
          ></Route>
        </Switch>
      </main>
      <p className="mt-4 p2 text-center">Todos los Derechos Reservados</p>
      <div className="App">
        { /* ***** Componente: Imagen ***** */ }
        <Imagen></Imagen>
      </div>
    </Router>
    
  );
}

export default App;
