import React from 'react'

const Error404 = () => {
  return (
    <>
    <div className="container-fluid d-flex justify-content-center align-items-center w-100 vh-100" id='error404'>
        <div className="row">
            <div className="col-12 text-center fondo-error">
                <h1 className='text-white'>Error 404 Page not found</h1>
                <button className='btn btn-warning mt-5'>Volver al Inicio</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Error404