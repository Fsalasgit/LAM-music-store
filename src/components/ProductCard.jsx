import React from 'react'
import Card from 'react-bootstrap/Card';
import { FiHeart } from 'react-icons/fi';

const ProductCard  = ({product}) => {
  console.log(product)
  // const { title, price, description, image, id } = product;
  
  return (
    <>
        <Card className='productCard'>
        <Card.Img className='productCard__img' variant="top" src="https://www.heavenimagenes.com/heavencommerce/0c5cacb8-dfbd-471a-ac7e-5c09a26f6da9/images/v2/CORT/6449_small.jpg" />
        <Card.Body>
        <a href='https://www.swanmusic.com.ar/product-cort-mr500e-br-brown-burst-2010011450197359.h' target="_blank" className='a-para-borrar'> {/*Esto lo voy a modificar cuando tenga instalado react router dom por un Link */}
            <Card.Title className='productCard__title mt-1rem' >titlle</Card.Title>
            <Card.Subtitle className='productCard__itemprice mt-1rem'>$350.000</Card.Subtitle>
            <Card.Text className='productCard__description mt-1rem'>
                GUITARRA ELECTROACUSTICA ACERO
                CORT MR500E-BR BROWN BURST  
            </Card.Text>
        </a>
            <button className='productCard__favourite' favourite="false"><FiHeart className='productCard__favourite-icons'/></button>
        </Card.Body>
        </Card>

    
    </>
  )
}

export default ProductCard 