import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../../../config/axiosInstance'

const FormUpdate = ({ datoProduct, getProducts}) => {
    const [categories, setCategories] = useState([])
    const { title, description, price, category, stock} = datoProduct
    const [formDatos, setFormDatos] = useState({
        title,
        description,
        price,
        category,
        stock
    })

    const handleChangeDatos = (e) => {
      setFormDatos({
          ...formDatos,
          [e.target.name]: e.target.value
      })
  }

    const getCategorias = async () => {
            const resp = await axiosInstance.get("/categories")
            setCategories(resp.data.categories)
    }

    useEffect(() => {
        getCategorias()
    }, [])

    const handletSubmit = async (e) => {
        e.preventDefault()
        try {
           await axiosInstance.put(`/product/${datoProduct._id}`, formDatos);
        } catch (error) {
          console.log(error)  
        }finally{
         getProducts()
        }
    }
    return (
        <div>
        <form onSubmit={handletSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="nombre">Titulo</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={formDatos.title}
              onChange={handleChangeDatos}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="nombre">Detalle del producto</label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              value={formDatos.description}
              onChange={handleChangeDatos}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="nombre">Precio</label>
            <input
              type="text"
              className="form-control"
              id="price"
              name="price"
              value={formDatos.price}
              onChange={handleChangeDatos}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="nombre">Categoria</label>
            <select
              name="category"
              className="form-control"
              value={formDatos.category._id}
              onChange={handleChangeDatos}
            >
   
              {categories.map((category, index) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="nombre">Stock</label>
            <input
              type="number"
              className="form-control"
              id="stock"
              name="stock"
              value={formDatos.stock}
              onChange={handleChangeDatos}
            />
          </div>
                <div className='form-group'>
                    <button type='submit' className='btn btn-primary'>Modificar</button>
                </div>
            </form>
        </div>
    )
}

export default FormUpdate

