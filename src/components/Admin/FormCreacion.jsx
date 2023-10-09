import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../../config/axiosInstance';
import { Form, InputGroup } from 'react-bootstrap';
import Swal from 'sweetalert2'

const FormCreacion = ({ getProducts }) => {
  const [categories, setCategories] = useState([]);
  const [imgFile, setImgFile] = useState([]);
  const [formDatos, setFormDatos] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    stock: '',
    shortDescription: ''
  });

  const getCategorias = async () => {
    try {
      const resp = await axiosInstance.get('/categories');
      setCategories(resp.data.categories);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategorias();
  }, []);

  const handleChangeDatos = (e) => {
    setFormDatos({
      ...formDatos,
      [e.target.name]: e.target.value
    })
  }

  const handleImage = (e) => {
    setImgFile([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('title', formDatos.title);
      formData.append('description', formDatos.description.replace(/\n/g, 'saltosDeUsuario'));
      formData.append('price', formDatos.price);
      formData.append('category', formDatos.category);
      formData.append('image', imgFile[0]);
      formData.append('stock', formDatos.stock);
      formData.append('shortDescription', formDatos.shortDescription);
      await axiosInstance.post('/product', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
          Swal.fire({
      icon: 'success',
      title: 'Producto agregado con éxito',
    });
    } catch (error) {
      console.log(error);
    } finally {
      getProducts();
    }
  };

  return (
      <div>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="nombre">Titulo</Form.Label>
            <Form.Control
              type="text"
              id="title"
              name="title"
              onChange={handleChangeDatos}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="description">Detalle del producto</Form.Label>
            <Form.Control
              type="text"
              rows={5}
              id="description"
              name="description"
              onChange={handleChangeDatos}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="description">Descripción del producto</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              id="shortDescription"
              name="shortDescription"
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
                onChange={handleChangeDatos}
                aria-label="Amount (to the nearest dollar)"
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="nombre">Categoría</Form.Label>
            <Form.Select
              name="category"
              onChange={handleChangeDatos}
            >
              <option value="">Selecciona una categoría</option>
              {categories.map((category, index) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="nombre">Imagen del producto</Form.Label>
            <Form.Control
              type="file"
              id="image"
              name="image"
              onChange={handleImage}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="nombre">Stock</Form.Label>
            <Form.Control
              type="number"
              id="stock"
              name="stock"
              onChange={handleChangeDatos}
            />
          </Form.Group>
  
          <div className="form-group">
            <button type="submit" className="modal-button">
              Agregar
            </button>
          </div>
        </Form>
      </div>
  );
};

export default FormCreacion;
