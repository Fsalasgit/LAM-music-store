import React, { useEffect, useState } from 'react';
import ProductTable from '../components/Admin/ProductTable';
import UserTable from '../components/Admin/UserTable';
import { axiosInstance } from '../config/axiosInstance';

const Admin = () => {
  const [showProductTable, setShowProductTable] = useState(true);
  const [allProducts, setAllProducts] = useState([])

  const showProductView = () => {
    setShowProductTable(true);
  };

  const showUserView = () => {
    setShowProductTable(false);
  };

  const getProducts = async () => {
    try {
       const resp = await axiosInstance.get("/products")
    setAllProducts(resp.data.product)
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() =>{
    getProducts()
  }, [])

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col mt-5 mb-5">
            <h1 className='text-center text-black'>Administración de Productos y Usuarios</h1>
            <button className='btn btn-primary' onClick={showProductView}>Mostrar Productos</button>
            <button className='btn btn-warning ms-5' onClick={showUserView}>Mostrar Usuarios</button>
          </div>
        </div>
        {showProductTable && <ProductTable allProducts={allProducts} getProducts={getProducts}/>}
        {!showProductTable && <UserTable />}
      </div>
    </>
  );
}

export default Admin;

