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

  useEffect(() => {
    const consultarApi = async () => {
      // Consultar la API de json-server
      const resultado = await axios.get('http://localhost:4000/restaurant');
      const { data } = resultado;
      // console.log(data);
      // Colocarlo en el state
      guardarProductos(data);
    }
    consultarApi();
  }, []);

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
                  ></Productos>
          ) }>
          </Route>
          { /* Route: AgregarProducto */}
          <Route exact path="/nuevo-producto" component={AgregarProducto}></Route>
          { /* Route: Producto */}
          <Route exact path="/productos/:id" component={Producto}></Route>
          { /* Route: EditarProducto */}
          <Route exact path="/productos/editar/:id" component={EditarProducto}></Route>
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
