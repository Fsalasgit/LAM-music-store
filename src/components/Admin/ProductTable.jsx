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
                title: '¿Estas seguro?',
                text: "No podrás revertir esto!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#F8A126',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, eliminar!',
                cancelButtonText: 'Cancelar'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await axiosInstance.delete(`/product/${row}`)
                    getProducts()
                }
            })
        } catch (error) {
            console.log(error)
        } finally {
            getProducts()
        }
    }


    const changeFeaturedStatus = async (row) => {
        try {
            const newIsFeaturedStatus = row.isFeatured === true ? false : true;

            await axiosInstance.put(`/product/feacture/${row._id}`, { isFeatured: newIsFeaturedStatus });

            await getProducts();
            Swal.fire({
                icon: 'success',
                title: 'Producto destacado con éxito.',
                showConfirmButton: false,
                timer: 1000,
            });
        } catch (error) {
            console.error(error);

            Swal.fire({
                icon: 'error',
                title: 'Hubo un error al destacar el producto.',
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };

    const columns = [
        {
            name: "Titulo",
            selector: (row) => {
                const maxTitleLength = 20;
                const title = row.title || '';
                return title.length > maxTitleLength
                    ? (
                        <>
                            {title.slice(0, maxTitleLength) + "... "}
                        </>
                    )
                    : title;
            },
            sortable: true,
            maxWidth: "40%", 
        },
        {
            name: "Detallado",
            selector: (row) => {
                const maxDescriptionLength = 20;
                const description = row.description || ''; // Verifica si row.description es undefined
                return description.length > maxDescriptionLength
                    ? (
                        <>
                            {description.slice(0, maxDescriptionLength) + "... "}
                        </>
                    )
                    : description;
            },
            sortable: true,
            hide: 'sm',
            width: "10%"
        },
        {
            name: "Descripcion",
            selector: (row) => {
                const maxDescriptionLength = 20;
                const shortDescription = row.shortDescription || ''; // Verifica si row.shortDescription es undefined
                return shortDescription.length > maxDescriptionLength
                    ? (
                        <>
                            {shortDescription.slice(0, maxDescriptionLength) + "... "}
                        </>
                    )
                    : shortDescription;
            },
            sortable: true,
            hide: 'sm',
            width: "10%",
        },

        {
            name: "Precio",
            selector: (row) => row.price,
            sortable: true,
            hide: 'sm',
            format: (row) => {
                const formattedPrice = `$${row.price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
                return formattedPrice;
            },
            width: "8%"
        },
        {
            name: "Categoria",
            selector: (row) => row.category.name,
            sortable: true,
            hide: 'sm',
            width: "11%"
        },
        {
            name: "Imagen",
            selector: (row) => (
                <div>
                    <img src={row.image} alt={row.title} width={75} />
                </div>
            ),
            hide: 'lg',
            width: "10%"
        },
        {
            name: "Stock",
            selector: (row) => row.stock,
            sortable: true,
            width: "9%",
            hide: 'sm'
        },
        {
            name: "Destacado",
            selector: (row) => (row.isFeatured ? "true" : "false"),
            sortable: true,
            width: "11%",
            hide: 'sm'
        },
        {
            name: "Acciones",
            selector: row => {
                return (
                    <div>

                        <button className='btn btn-warning btn-md me-3 ' onClick={() => changeFeaturedStatus(row)}>Destacado</button>
                        <button className='btn btn-warning btn-md me-3' onClick={() => handleUpdate(row)}>Edit</button>
                        <button className='btn btn-danger btn-md ' onClick={() => deleteCurso(row._id)}>Delete</button>
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
                title="Administración de Productos"
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