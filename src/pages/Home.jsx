import React from 'react'
import CarouselHome from '../components/PagesComponents/CarouselHome'
import ShippingType from '../components/PagesComponents/ShippingType'
import FeaturedCarousel from '../components/PagesComponents/FeaturedCarousel'
import OurLocation from '../components/PagesComponents/OurLocation'



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
    <div className="ourLocation">
      <hr />
      <h2 className="ourLocation__title">Donde encontrarnos</h2>
      <OurLocation />
      
    </div>


    
    </>
  )
}

export default Home