import React ,{useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card';
import { FaRegHeart,FaHeart} from 'react-icons/fa';

const ProductCard  = ({product}) => {
 
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favoritesFromLocalStorage = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(favoritesFromLocalStorage.includes(product._id));
  }, [product._id]);

  const handleFavourite = () => {
    const newFavorite = !isFavorite;
    setIsFavorite(newFavorite);

    const favoritesFromStorage = JSON.parse(localStorage.getItem('favorites')) || [];

    const updatedFavorites = newFavorite
      ? [...favoritesFromStorage, product._id]
      : favoritesFromStorage.filter((id) => id !== product._id);

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
          <a href='https://www.swanmusic.com.ar/product-cort-mr500e-br-brown-burst-2010011450197359.h' target="_blank" className='a-para-borrar'> {/*Esto lo voy a modificar cuando tenga instalado react router dom por un Link */}
            <Card.Title className='productCard__title mt-1rem' >{product?.title}</Card.Title>
            <Card.Subtitle className='productCard__itemprice mt-1rem'>{convertToPesos(product?.price)}
            <Card.Text className='productCard__description mt-1rem'>{product?.description}</Card.Text>
            </Card.Subtitle>
          </a>
          
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
        <button>Añadir a Carrito</button>
      </Card>

    
    </>
  )
}

export default ProductCard 