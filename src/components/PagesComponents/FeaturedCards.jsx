import React from 'react'
import Card from 'react-bootstrap/Card';
import { FaHeart} from 'react-icons/fa';

const FeaturedCards = (props) => {

   

  return (
    <>
    <Card className='productCard'>
        <Card.Img className='productCard__img' variant="top" src={props.url} alt="img-2"/>
        <Card.Body>
          <a href='https://www.swanmusic.com.ar/product-cort-mr500e-br-brown-burst-2010011450197359.h' target="_blank" className='a-para-borrar'> {/*Esto lo voy a modificar cuando tenga instalado react router dom por un Link */}
            <Card.Title className='productCard__title mt-1rem' >Guitarra</Card.Title>
            <Card.Subtitle className='productCard__itemprice mt-1rem'>${props.price} ars</Card.Subtitle>
            <Card.Text className='productCard__description mt-1rem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, illum!</Card.Text>
          </a>
          
     
            <button className='productCard__favorite favorite'>
              <FaHeart className='productCard__favorite-icons' />
            </button>
          
        </Card.Body>
      </Card>

    </>
  )
}

export default FeaturedCards