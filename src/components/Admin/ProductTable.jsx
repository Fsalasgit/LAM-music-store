import React, {useState} from 'react'
import DataTable from 'react-data-table-component';
import { products } from '../../helpers/products';
import ModalNuevo from './ModalNuevo';

const ProductTable = () => {
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const columns = [
        {
            name: "Title",
            selector: (row) => row.title,
            sortable: true
        },
        {
            name: "Category",
            selector: (row) => row.category,
            sortable: true
        },
        {
            name: "Price",
            selector: (row) => row.price,
            sortable: true
        },
        {
            name: "Description",
            selector: (row) => row.description,
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
            name: "Acciones",
            selector: row => {
                return (
                    <div>
                        <button className='btn btn-warning btn-sm me-3'>Editar</button>
                        <button className='btn btn-danger btn-sm'>Eliminar</button>

                    </div>
                )
            }
        }
    ]
    return (
        <>
            <div className="row">
                <div className="col text-end">
                    <button className='btn btn-primary mb-4' onClick={handleShow}>Agregar Producto</button>
                </div>
            </div>
            <DataTable
                columns={columns}
                data={products}
                pagination
            />
            <ModalNuevo show={show} handleClose={handleClose}/>
        </>

    )
}

export default ProductTable