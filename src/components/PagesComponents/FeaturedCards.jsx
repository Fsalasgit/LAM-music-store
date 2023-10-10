import React, { useState, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { addCart } from '../../context/GlobalActions';
import { GlobalContext } from '../../context/GlobalContext';
import { Link } from 'react-router-dom';
import { axiosInstance } from '../../config/axiosInstance';
import jwt_decode from 'jwt-decode';

const ProductCard = ({ product }) => {
  const { state, dispatch } = useContext(GlobalContext);
  const [cartProducts, setCartProducts] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavourite = async () => {
    setIsFavorite(!isFavorite);

    try {
      const token = localStorage.getItem("token");
      const decodedToken = jwt_decode(token);
      const userId = decodedToken.sub;

      const response = await axiosInstance.post(`/user/favorite/${userId}`, {
        productId: product._id,
        addToFavorites: !isFavorite,
      });
      // Utiliza el nuevo estado de isFavorite de la respuesta para actualizar el botón
      setIsFavorite(response.data.newIsFavorite);
      console.log(response);
    } catch (error) {
      console.error('Error al actualizar los favoritos:', error);
    }
  };

  const onAddProduct = () => {
    const existingProductIndex = state.productCart.findIndex((item) => item._id === product._id);

    if (existingProductIndex !== -1) {
      state.productCart[existingProductIndex].cantidad++;
    } else {
      const updatedCartProducts = [...cartProducts, { ...product, cantidad: 1 }];
      setCartProducts(updatedCartProducts);
      dispatch(addCart({ ...product, cantidad: 1 }));
    }
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
    <button
      className={`productCard__favorite${isFavorite ? ' favorite' : ''}`}
      onClick={handleFavourite}
    >
      {isFavorite ? (
        <FaHeart className='productCard__favorite-icons' />
      ) : (
        <FaRegHeart className='productCard__favorite-icons' />
      )}
    </button>
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


export default ProductCard;
