import React, { useState, useEffect, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { addCart } from '../context/GlobalActions';
import { GlobalContext } from '../context/GlobalContext';

const ProductCard = ({ product }) => {
  const { state, dispatch } = useContext(GlobalContext);
  const [cartProducts, setCartProducts] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favoritesFromLocalStorage = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(favoritesFromLocalStorage.includes(product.id));
  }, [product.id]);

  const handleFavourite = () => {
    const newFavorite = !isFavorite;
    setIsFavorite(newFavorite);

    const favoritesFromStorage = JSON.parse(localStorage.getItem('favorites')) || [];

    const updatedFavorites = newFavorite
      ? [...favoritesFromStorage, product._id]
      : favoritesFromStorage.filter((id) => id !== product._id);

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  }

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
      <Card className='productCard' key={product._id}>
        <div className='productCard__header'>
          {isFavorite ? (
            <button className='productCard__favorite favorite' onClick={handleFavourite}>
              <FaHeart className='productCard__favorite-icons' />
            </button>
          ) : (
            <button className='productCard__favorite' onClick={handleFavourite}>
              <FaRegHeart className='productCard__favorite-icons' />
            </button>
          )}
        </div>
        <Card.Img className='productCard__img' variant="top" src={product.image} alt={product.title} />
        <Card.Body className='productCard_body'>
          <Card.Title className='productCard__title mt-1rem'>{product.title}</Card.Title>
          <Card.Subtitle className='productCard__itemprice mt-1rem'>{convertToPesos(product.price)}</Card.Subtitle>
          <Card.Text className='productCard__description mt-1rem'>
            {product.description}
          </Card.Text>
          <button onClick={onAddProduct}>Añadir al carrito</button>
        </Card.Body>

        
      </Card>
    </>
  );
};

export default ProductCard;




  