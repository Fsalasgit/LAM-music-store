import React from 'react';
import Card from 'react-bootstrap/Card';


const FeaturedCards = ({ product }) => {
 
  let convertToPesos = (numb) => {
    const pesos = numb.toLocaleString('es-AR', {
      style: 'currency',
      currency: 'ARS',
    });
    return pesos;
  };

  return (
    <Card className='productCard'>
      <Card.Img className='productCard__img' variant="top" src={product.image} alt="img-2" />
      <Card.Body>
        <a href='' target="_blank" className='a-para-borrar'>
          <Card.Title className='productCard__title mt-1rem' >{product.title}</Card.Title>
          <Card.Subtitle className='productCard__itemprice mt-1rem'>{convertToPesos(product.price)}</Card.Subtitle>
          <Card.Text className='productCard__description mt-1rem'>{product.description}</Card.Text>
        </a>
      </Card.Body>
      
    </Card>
  );
};

export default FeaturedCards;