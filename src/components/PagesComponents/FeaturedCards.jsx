import React, { useState, useContext, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { addCart } from '../../context/GlobalActions';
import { GlobalContext } from '../../context/GlobalContext';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";
import FeaturedCardsSkeleton from './FeaturedCardsSkeleton';

const FeaturedCards = ({ product}) => {
  const { state, dispatch } = useContext(GlobalContext);
  const [cartProducts, setCartProducts] = useState([]);
  const onAddProduct = () => {
    const existingProductIndex = state.productCart.findIndex((item) => item._id === product._id);

    if (existingProductIndex !== -1) {
      state.productCart[existingProductIndex].cantidad++;
      state.productCart[existingProductIndex].counterProduct++;
    } else {
      const updatedCartProducts = [...cartProducts, { ...product, cantidad: 1, counterProduct: 1 }];
      setCartProducts(updatedCartProducts);
      dispatch(addCart({ ...product, cantidad: 1, counterProduct: 1  }));
    }
    Swal.fire({
      icon: 'success',
      title: 'Producto Añadido con Éxito',
      text: 'El producto se ha añadido al carrito con éxito.',
      timer: 1500,
    });
  };

  const convertToPesos = (numb) => {
    const pesos = numb.toLocaleString('es-AR', {
      style: 'currency',
      currency: 'ARS',
    });
    return pesos;
  };

  return (
<>
      <Card key={product._id} className='productCard'>
      <div className='productCard__header'>
      </div>
      <Link to={`/productos/${product._id}`} className='productCard__link'>
        <div className='productCard__imgContainer'>
          <Card.Img variant="top" src={product.image} alt={product.title} className='productCard__img' />
        </div>
        <Card.Body className='productCard__body'>
          <Card.Title className='productCard__title'>{product.title}</Card.Title>
          <Card.Subtitle className='productCard__itemprice'>{convertToPesos(product.price)}</Card.Subtitle>
          <Card.Text className='productCard__description'>
            {product.description}
          </Card.Text>
        </Card.Body>
      </Link>
      <div className='productCard__footer'>
        <button onClick={onAddProduct} className='productCard__button'>
          Añadir al carrito
        </button>
      </div>
    </Card>
</>

  );
};


export default FeaturedCards;
