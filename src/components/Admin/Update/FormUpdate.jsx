import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../../../config/axiosInstance'
import { Form, InputGroup } from 'react-bootstrap';
import Swal from 'sweetalert2'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FORM_SCHEMA } from '../../../helpers/validationsSchemas';
const FormUpdate = ({ datoProduct, getProducts }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(FORM_SCHEMA)
  });

  const [categories, setCategories] = useState([])
  const { title, description, price, category, stock, shortDescription } = datoProduct
  const [formDatos, setFormDatos] = useState({
    title,
    description,
    price,
    category,
    stock,
    shortDescription
  })

  const getCategorias = async () => {
    const resp = await axiosInstance.get("/categories")
    setCategories(resp.data.categories)
  }

  useEffect(() => {
    getCategorias()
  }, [])

  const onSubmit = async (data) => {
    try {
      await axiosInstance.put(`/product/${datoProduct._id}`, data);
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
       <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="nombre">Titulo</Form.Label>
          <Form.Control
            type="text"
            id="title"
            name="title"
            defaultValue={formDatos.title}
            // onChange={handleChangeDatos}
            {...register("title")}
          />
                                {errors.title && (
            <p className="register__error-message">{errors.title.message}</p>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label htmlFor="description">Detalle del producto</Form.Label>
            <Form.Control
              type="text"
              id="description"
              name="description"
              defaultValue={formDatos.description}
              // onChange={handleChangeDatos}
              {...register("description")}
            />
                                  {errors.description && (
            <p className="register__error-message">{errors.description.message}</p>
          )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="description">Descripción del producto</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              id="shortDescription"
              name="shortDescription"
              defaultValue={formDatos.shortDescription}
              // onChange={handleChangeDatos}
              {...register("shortDescription")}
            />
                                  {errors.shortDescription && (
            <p className="register__error-message">{errors.shortDescription.message}</p>
          )}
          </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="nombre">Precio</Form.Label>
          <InputGroup>
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control
              type="text"
              id="price"
              name="price"
              defaultValue={formDatos.price}
              // onChange={handleChangeDatos}
              {...register("price")}
            />
          </InputGroup>
          {errors.price && (
            <p className="register__error-message">{errors.price.message}</p>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="nombre">Categoria</Form.Label>
          <Form.Select
            name="category"
            defaultValue={formDatos.category._id}
            // onChange={handleChangeDatos}
            {...register("category")}
          >
            <option value="">Seleccione una categoría</option>
            {categories.map((category, index) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </Form.Select>
          {errors.category && (
            <p className="register__error-message">{errors.category.message}</p>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="nombre">Stock</Form.Label>
          <Form.Control
            type="number"
            id="stock"
            name="stock"
            defaultValue={formDatos.stock}
            // onChange={handleChangeDatos}
            {...register("stock")}
          />
                                {errors.stock && (
            <p className="register__error-message">{errors.stock.message}</p>
          )}
        </Form.Group>

        <div className='form-group text-end'>
          <button type='submit' className='modal-button'>Modificar</button>
        </div>
      </Form>
    </div>
  )
}

export default FormUpdate

