import React, { useState } from 'react'
import DataTable from 'react-data-table-component';
// import { products } from '../../helpers/products';
import { axiosInstance } from '../../config/axiosInstance';
import Swal from 'sweetalert2'
import ModalUpdate from './Update/ModalUpdate';
import ModalNuevo from './ModalNuevo';

const ProductTable = ({ allProducts, getProducts }) => {
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);
    const [datoProduct, setDatoProduct] = useState({})

    const handleCloseUpdateModal = () => setShowUpdateModal(false);
    const handleShowUpdateModal = () => setShowUpdateModal(true);

    const handleCloseAddModal = () => setShowAddModal(false);
    const handleShowAddModal = () => setShowAddModal(true);

    const handleUpdate = (row) => {
        handleShowUpdateModal();
        handleShowAddModal
        setDatoProduct(row)
    }

    const deleteCurso = async (row) => {
        try {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await axiosInstance.delete(`/product/${row}`)
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                    getProducts()
                }
            })
        } catch (error) {
            console.log(error)
        } finally {
            getProducts()
        }
    }

    const columns = [
        {
            name: "Title",
            selector: (row) => row.title,
            sortable: true
        },
        {
            name: "Description",
            selector: (row) => row.description,
        },
        {
            name: "Price",
            selector: (row) => row.price,
            sortable: true
        },
        {
            name: "Category",
            selector: (row) => row.category.name,
            sortable: true
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
            name: "Stock",
            selector: (row) => row.stock,
            sortable: true
        },
        {
            name: "Acciones",
            selector: row => {
                return (
                    <div>
                        <div>
                            <button className='btn btn-warning btn-sm me-3' onClick={() => handleUpdate(row)}>Editar</button>
                            <button className='btn btn-danger btn-sm' onClick={() => deleteCurso(row._id)}>Eliminar</button>
                        </div>

                    </div>
                )
            }
        }
    ]
    return (
        <>
            <div className="row">
                <div className="col text-end">
                    <button className='btn btn-primary mb-4' onClick={handleShowAddModal}>Agregar Producto</button>
                </div>
            </div>
            <DataTable
                columns={columns}
                data={allProducts}
                pagination
            />
            <ModalUpdate show={showUpdateModal} handleClose={handleCloseUpdateModal} datoProduct={datoProduct} getProducts={getProducts} />
            <ModalNuevo show={showAddModal} handleClose={handleCloseAddModal} datoProduct={datoProduct} getProducts={getProducts} />
        </>

    )
}

export default ProductTable