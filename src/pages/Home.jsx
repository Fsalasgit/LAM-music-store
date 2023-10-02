import React from 'react'
import CarouselHome from '../components/PagesComponents/CarouselHome'
import ShippingType from '../components/PagesComponents/ShippingType'
import FeaturedCarousel from '../components/PagesComponents/FeaturedCarousel'
import OurMusicalInstruments from '../components/OurMusicalInstruments'



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
    <div className="featuredProducts">
      <hr />
      <h2 className="featuredProducts__title">¿Por que comprar en LAM?</h2>
      <img
          className="mt-3 w-100"
          src="https://bairesrocks.vteximg.com.br/arquivos/ids/237535/1920x680_02.jpg?v=637913244060900000"
          alt="Store"
        /> 
      <p className='mt-5'><strong>LAM</strong> representa nuestra aspiración de
        ser la mayor casa de instrumentos musicales. </p>
      <p>Nuestro compromiso es ofrecer una amplia gama de productos y
      servicios de alta calidad para músicos de todos los niveles. En <strong>"LAM,"</strong>
      los amantes de la música encuentran desde instrumentos hasta
      accesorios, en un solo lugar.</p> 
      <div className="contOurMusInstruments">   
      <OurMusicalInstruments />
      </div>
    </div>

    <footer className='footerProvisorio'>
      aqui va un footer provisorio
    </footer>


    
    </>
  )
}

export default Home