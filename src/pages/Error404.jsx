import React from 'react'
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <>
    <div className="container-fluid d-flex justify-content-center align-items-center w-100 vh-100" id='error404'>
        <div className="row">
            <div className="col-12 text-center fondo-error">
                <h1 className='text-white'>Error 404 </h1>
                <h2>Page not found</h2>
                <Link to="/" className='buttonError'>Volver al Inicio</Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Error404