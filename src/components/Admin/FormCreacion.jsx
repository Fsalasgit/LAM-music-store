import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../../config/axiosInstance';

const FormCreacion = ({ getProducts }) => {
  const [categories, setCategories] = useState([]);
  const [imgFile, setImgFile] = useState([]);
  const [formDatos, setFormDatos] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    stock: '',
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
      formData.append('description', formDatos.description);
      formData.append('price', formDatos.price);
      formData.append('category', formDatos.category);
      formData.append('image', imgFile[0]);
      formData.append('stock', formDatos.stock);
      await axiosInstance.post('/product', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    } catch (error) {
      console.log(error);
    } finally {
      getProducts();
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="nombre">Titulo</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            onChange={handleChangeDatos}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="description">Descripción del producto</label>
          <textarea
            name="description"
            id="description"
            className="form-control"
            onChange={handleChangeDatos}
            cols="30"
            rows="5" 
          ></textarea>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="nombre">Precio</label>
          <input
            type="text"
            className="form-control"
            id="price"
            name="price"
            onChange={handleChangeDatos}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="nombre">Categoria</label>
          <select
            name="category"
            className="form-control"
            onChange={handleChangeDatos}
          >
            <option value="">Seleciona una categoria</option>
            {categories.map((category, index) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="nombre">Imagen del producto</label>
          <input
            type="file"
            className="form-control"
            id="image"
            name="image"
            onChange={handleImage}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="nombre">Stock</label>
          <input
            type="number"
            className="form-control"
            id="stock"
            name="stock"
            onChange={handleChangeDatos}
          />
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormCreacion;
