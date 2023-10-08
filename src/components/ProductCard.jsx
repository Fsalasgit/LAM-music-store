import React, { useState, useEffect, useContext } from 'react';
import { addCart } from '../context/GlobalActions';
import { GlobalContext } from '../context/GlobalContext';


const ProductCard = ({ product }) => {
  const {state, dispatch} = useContext(GlobalContext)
  const [cartProducts, setCartProducts] = useState([])
  

  // useEffect(() => {
    //   const savedCartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
    //   setCartProducts(savedCartProducts);
    // }, []);
    let arrCart = [...cartProducts];
    const onAddProduct = (producto) => {
      const updatedCartProducts = [...cartProducts];
      const existingProductIndex = state.productCart.findIndex((item) => item._id === product._id);
  
      if (existingProductIndex !== -1) {
        state.productCart[existingProductIndex].cantidad++;
      } else {
        updatedCartProducts.push({ ...product, cantidad: 1 });
        dispatch(addCart({ ...product, cantidad: 1 }))
      }
  console.log(state)
      //setCartProducts(updatedCartProducts);
      //localStorage.setItem('cartProducts', JSON.stringify(updatedCartProducts));
      //console.log(updatedCartProducts)
  
      

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
          <button onClick={()=> onAddProduct(product)}>Añadir al carrito</button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;