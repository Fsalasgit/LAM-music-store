import React ,{useState} from 'react'
import Card from 'react-bootstrap/Card';
import { FaRegHeart,FaHeart} from 'react-icons/fa';

const ProductCard  = ({product}) => {
 
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavourite = () => {
    setIsFavorite(!isFavorite)
  }

  return (
    <>
      <Card className='productCard'>
        <Card.Img className='productCard__img' variant="top" src={product?.image} alt={product?.title}/>
        <Card.Body>
          <a href='https://www.swanmusic.com.ar/product-cort-mr500e-br-brown-burst-2010011450197359.h' target="_blank" className='a-para-borrar'> {/*Esto lo voy a modificar cuando tenga instalado react router dom por un Link */}
            <Card.Title className='productCard__title mt-1rem' >{product?.title}</Card.Title>
            <Card.Subtitle className='productCard__itemprice mt-1rem'>${product?.price}</Card.Subtitle>
            <Card.Text className='productCard__description mt-1rem'>{product?.description}</Card.Text>
          </a>
          
          {isFavorite ? (
            <button className='productCard__favourite favorite' onClick={handleFavourite}>
              <FaHeart className='productCard__favourite-icons' />
            </button>
          ) : (
            <button className='productCard__favourite' onClick={handleFavourite}>
              <FaRegHeart className='productCard__favourite-icons' />
            </button>
          )}
        </Card.Body>
      </Card>

    
    </>
  )
}

export default ProductCard 