import React, { useState } from 'react'
import ProductTable from '../components/Admin/ProductTable'
import ModalNuevo from '../components/Admin/ModalNuevo'
import UserTable from '../components/Admin/UserTable';

const Admin = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col  mt-5 mb-5">
                <h1 className='text-center'>Adiminstracion de Productos</h1>
                <button className='btn btn-primary' onClick={handleShow}>Agregar producto</button>
                <button className='btn btn-warning ms-5' onClick={<UserTable/>}>Admin de usuario</button>

            </div>
        </div>
        <div className="row">
             <ProductTable />
        </div>
        <ModalNuevo show={show} handleClose={handleClose} />
    </div>
    <div className="container mt-4">
        <div className="row">
            <div className="col  mt-5 mb-5">
                <h1 className='text-center'>Adiminstracion de Usuarios</h1>
            </div>
        </div>
        <div className="row">
             <UserTable />
        </div>
    </div>
    </>
  )
}

export default Admin