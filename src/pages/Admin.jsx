import React, { useState } from 'react';
import ProductTable from '../components/Admin/ProductTable';
import UserTable from '../components/Admin/UserTable';

const Admin = () => {
  const [showProductTable, setShowProductTable] = useState(true);

  const showProductView = () => {
    setShowProductTable(true);
  };

  const showUserView = () => {
    setShowProductTable(false);
  };

  return (
    <>
      <div className="container admin-body">
        <div className="row">
          <div className="col mt-5 mb-5">
            <h1 className='text-center text-black'>Administración de Productos y Usuarios</h1>
            <button className='btn btn-primary' onClick={showProductView}>Mostrar Productos</button>
            <button className='btn btn-warning ms-5' onClick={showUserView}>Mostrar Usuarios</button>
          </div>
        </div>
        {showProductTable && <ProductTable />}
        {!showProductTable && <UserTable />}
      </div>
    </>
  );
}

export default Admin;