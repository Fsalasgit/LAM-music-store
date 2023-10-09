import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../../../config/axiosInstance'
import { Form, InputGroup } from 'react-bootstrap';
import Swal from 'sweetalert2'

const FormUpdate = ({ datoProduct, getProducts }) => {
  const [categories, setCategories] = useState([])
  const { title, description, price, category, stock } = datoProduct
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
      Swal.fire({
        icon: 'success',
        title: 'Producto modificado con éxito',
      });
    } catch (error) {
      console.log(error)
    } finally {
      getProducts()
    }
  }
  return (
    <div>
      <Form onSubmit={handletSubmit}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="nombre">Titulo</Form.Label>
          <Form.Control
            type="text"
            id="title"
            name="title"
            value={formDatos.title}
            onChange={handleChangeDatos}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="description">Descripción del producto</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            id="description"
            name="description"
            onChange={handleChangeDatos}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="nombre">Precio</Form.Label>
          <InputGroup>
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control
              type="text"
              id="price"
              name="price"
              value={formDatos.price}
              onChange={handleChangeDatos}
              aria-label="Amount (to the nearest dollar)"
            />
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="nombre">Categoria</Form.Label>
          <Form.Select
            name="category"
            value={formDatos.category._id}
            onChange={handleChangeDatos}
          >
            <option value="">Seleccione una categoría</option>
            {categories.map((category, index) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="nombre">Stock</Form.Label>
          <Form.Control
            type="number"
            id="stock"
            name="stock"
            value={formDatos.stock}
            onChange={handleChangeDatos}
          />
        </Form.Group>

        <div className='form-group'>
          <button type='submit' className='modal-button'>Modificar</button>
        </div>
      </Form>
    </div>
  )
}

export default FormUpdate

