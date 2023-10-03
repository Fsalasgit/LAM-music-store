import React ,{useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card';
import { FaRegHeart,FaHeart} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProductCard  = ({product}) => {
 
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
      ? [...favoritesFromStorage, product.id]
      : favoritesFromStorage.filter((id) => id !== product.id);

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  }

  let convertToPesos = (numb) => {
    const pesos = numb.toLocaleString('es-AR', {
      style: 'currency',
      currency: 'ARS'
    });

    return pesos
  }

  return (
    <>
      <Card className='productCard'>
        <Card.Img className='productCard__img' variant="top" src={product?.image} alt={product?.title}/>
        <Card.Body>
        <Link to={`/productos/${product.id}`} className='a-para-borrar'>
            <Card.Title className='productCard__title mt-1rem' >{product?.title}</Card.Title>
            <Card.Subtitle className='productCard__itemprice mt-1rem'>{convertToPesos(product?.price)}
            </Card.Subtitle>
            <Card.Text className='productCard__description mt-1rem'>{product?.description}</Card.Text>
          </Link>
          
          {isFavorite ? (
            <button className='productCard__favorite favorite' onClick={handleFavourite}>
              <FaHeart className='productCard__favorite-icons' />
            </button>
          ) : (
            <button className='productCard__favorite' onClick={handleFavourite}>
              <FaRegHeart className='productCard__favorite-icons' />
            </button>
          )}
        </Card.Body>
      </Card>

    
    </>
  )
}

export default ProductCard 