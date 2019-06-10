import React from 'react';

const Error = (props) => (
    <p className="alert alert-danger p3 my-5 text-center text-uppercase font-weight-bold">{props.mensaje}</p>
);

export default Error;