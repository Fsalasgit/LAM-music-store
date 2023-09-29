import React, { useState } from 'react'
import ProductTable from '../components/Admin/ProductTable'
import ModalNuevo from '../components/Admin/ModalNuevo'

const Admin = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <div className="container">
        <div className="row mt-5">
            <div className="col-12">
                <h1 className='mb-4'>Administracion</h1>
                <button className='btn btn-primary' onClick={handleShow}>Agregar producto</button>
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
        <ModalNuevo show={show} handleClose={handleClose} />
    </div>
    </>
  )
}

export default Admin