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

