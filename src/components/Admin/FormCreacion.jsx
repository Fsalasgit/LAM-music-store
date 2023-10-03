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
      console.log(resp.data);
      setCategories(resp.data.categories);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategorias();
  }, []);

  const handleChangeDatos = (e) => {
    const { name, value } = e.target;

    if (name === 'price') {
      // Llama a la función de formateo de precio antes de actualizar el estado
      const formattedPrice = formatPrice(value);
      setFormDatos({
        ...formDatos,
        [name]: formattedPrice,
      });
    } else {
      setFormDatos({
        ...formDatos,
        [name]: value,
      });
    }
  };

  const formatPrice = (value) => {
    // Remueve caracteres no deseados (todo excepto dígitos, punto y signo de pesos)
    const cleanedValue = value.replace(/[^0-9.$]/g, '');

      // Reemplaza el símbolo de dólar y la coma por un espacio vacío
  const sanitizedValue = cleanedValue.replace(/[$,]/g, '');

    // Separa el valor en parte entera y decimal
    const parts = sanitizedValue.split('.');
    let integerPart = parts[0] || '';
    let decimalPart = parts[1] || '';
  

    // Formatea la parte entera con comas (para miles) y el signo de pesos
    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    
    // Limita la parte decimal a dos decimales
    decimalPart = decimalPart.slice(0, 2);

    // Une la parte entera y decimal de nuevo
    const formattedValue = `$${integerPart}${decimalPart ? '.' + decimalPart : ''}`;

    return formattedValue;
  };

  const handleImage = (e) => {
    setImgFile([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formDatos);
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
          <label htmlFor="nombre">Detalle del producto</label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
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
