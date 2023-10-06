import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const CarouselHome = () => {
  return (
    <>
      <Carousel id='carouselHome' interval={3000} slide className='mt-1'>
        <Carousel.Item>
          <img
            className="d-block w-100 carouselResponsive__img"
            src="./image/banner-yamaha.webp"
            alt="first slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img 
            className="d-block w-100 carouselResponsive__img"
            src="./image/banner-steinberg.webp"
            alt="Second slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carouselResponsive__img"
            src="./image/banner-vox.webp"
            alt="Second slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carouselResponsive__img"
            src="./image/banner-bose.webp"
            alt="Second slide"
          />

        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default CarouselHome