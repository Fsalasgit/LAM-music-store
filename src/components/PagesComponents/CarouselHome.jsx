import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const CarouselHome = () => {
  return (
    <>
      <Carousel interval={3000} slide className='mt-1'>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://bairesrocks.vteximg.com.br/arquivos/ids/242928/25_09_banner_web1.jpg?v=638312449406930000"
            alt="first slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://bairesrocks.vteximg.com.br/arquivos/ids/242929/25_09_banner_web2.jpg?v=638312449629070000"
            alt="Second slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://bairesrocks.vteximg.com.br/arquivos/ids/242930/25_09_banner_web3.jpg?v=638312449980900000"
            alt="Second slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://bairesrocks.vteximg.com.br/arquivos/ids/242771/bose2_web.jpg?v=638294280399270000"
            alt="Second slide"
          />

        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default CarouselHome