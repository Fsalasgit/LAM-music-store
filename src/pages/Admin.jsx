import React from 'react'
import ProductTable from '../components/Admin/ProductTable'

const Admin = () => {
  return (
    <>
    <div className="container">
        <div className="row mt-5">
            <div className="col text-center mt-5 mb-5">
                <h1>Adiminstacion de Productos</h1>
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