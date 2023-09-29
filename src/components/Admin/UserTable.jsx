import React from 'react'
import DataTable from 'react-data-table-component';
import { users } from '../../helpers/products';


const UserTable = () => {
    const columns = [ 
        {
            name: "Name",
            selector: (row) => row.name,
            sortable: true
        },
        {
            name: "Username",
            selector: (row) => row.username,
            sortable: true
        },
        {
            name: "Password",
            selector: (row) => row.password,
            sortable: true
        },
        {
            name: "Rol",
            selector: (row) => row.rol,
        },
        {
            name:"Acciones",
            selector: row => (
                <div>
                    <button className='btn btn-warning btn-sm me-3'>Editar</button>
                    <button className='btn btn-danger btn-sm'>Eliminar</button>

                </div>
            )
        }
    ]
  return (
    <DataTable 
        columns={columns}
        data = {users}
        pagination
    />
  )
}

export default UserTable