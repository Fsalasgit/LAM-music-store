import React from 'react'
import DataTable from 'react-data-table-component';
import { products } from '../../helpers/products';


const ProductTable = () => {
    const columns = [ 
        {
            name: "Title",
            selector: (row) => row.title
        },
        {
            name: "Category",
            selector: (row) => row.category
        },
        {
            name: "Price",
            selector: (row) => row.price
        },
        {
            name: "Description",
            selector: (row) => row.description
        },
        {
            name: "Image",
            selector: (row) => (
                <div>
                    <img src={row.image} alt={row.title} width={100} />
                </div>
            )
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
        data = {products}
    />
  )
}

export default ProductTable