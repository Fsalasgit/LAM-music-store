import React from 'react'
import ProductTable from '../components/Admin/ProductTable'

const Admin = () => {
  return (
    <>
    <div className="container">
        <div className="row mt-5">
            <div className="col-12">
                <h1 className='mb-4'>Administracion</h1>
                <button className='btn btn-primary'>Agregar producto</button>
                <hr />
            </div>
        </div>
        <div className="row">
            <div className="col text-center mt-5 mb-5">
                <h1>Adiminstracion de Productos</h1>
            </div>
        </div>
        <div className="row">
             <ProductTable/>
        </div>
    </div>
    </>
  )
}

export default Admin