import React from 'react'
import CarouselHome from '../components/PagesComponents/CarouselHome'
import ShippingType from '../components/PagesComponents/ShippingType'
import FeaturedCarousel from '../components/PagesComponents/FeaturedCarousel'



const Home = () => {
  return (
    <>
    <CarouselHome />
    <ShippingType />
    <div className="featuredProducts">
      <hr />
      <h2 className="featuredProducts__title">Productos destacados</h2>
      <FeaturedCarousel />
    </div>


    
    </>
  )
}

export default Home