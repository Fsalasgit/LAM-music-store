import React, { useState, useEffect } from 'react';

const ProductCard = ({ product }) => {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const savedCartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
    setCartProducts(savedCartProducts);
  }, [cartProducts]);

  const onAddProduct = () => {
    const updatedCartProducts = [...cartProducts];
    const existingProductIndex = updatedCartProducts.findIndex((item) => item._id === product._id);

    if (existingProductIndex !== -1) {
      updatedCartProducts[existingProductIndex].quantity++;
    } else {
      updatedCartProducts.push({ ...product, quantity: 1 });
    }

    setCartProducts(updatedCartProducts);
    localStorage.setItem('cartProducts', JSON.stringify(updatedCartProducts));
  };

  let convertToPesos = (numb) => {
    const pesos = numb.toLocaleString('es-AR', {
      style: 'currency',
      currency: 'ARS',
    });
    return pesos;
  };


  return (
    <>
      <div className='item col-3 m-3' key={product._id}>
        <figure>
          <img src={product.image} alt={product.title} />
        </figure>
        <div className='info-product'>
          <h2>{product.title}</h2>
          <p className='description'>{product.description}</p>
          <p className='price'>{convertToPesos(product.price)}</p>
          <button onClick={onAddProduct}>Añadir al carrito</button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;