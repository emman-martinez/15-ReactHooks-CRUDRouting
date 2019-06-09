import React from 'react';
import logo from './../img/logo.svg';

const Imagen = () => {
    return (
        <div className="App centro">
            <div className="centro">
                <img src={logo} className="App-logo" alt="logo"/>
            </div>
            <div className="centro">
                <h1 className="tamano subrayado">ReactJS</h1>
            </div>
        </div>
    );
};

export default Imagen;