import React from 'react'
import CarouselHome from '../components/PagesComponents/CarouselHome'
import SaleType from '../components/PagesComponents/SaleType'
import ShippingType from '../components/PagesComponents/ShippingType'
import FeaturedCarousel from '../components/PagesComponents/FeaturedCarousel'
import OurMusicalInstruments from '../components/OurMusicalInstruments'
import WhatsappLink from '../components/WhatsappLink'


const Home = () => {
  return (
    <>
    <CarouselHome />
    <ShippingType />
    <div className="featuredProducts">
      <div className="featuredProducts__image-container d-none d-sm-block">
      <img
        src="https://res.cloudinary.com/dcwpf7ghu/image/upload/v1696879269/ARG-banner-web-MagiaDeVerdad-octagonos-desktop_1_nehdno.jpg"
        alt="Descripción de la imagen"
        className="featuredProducts__image"
      />
    </div>
      <h2 className="featuredProducts__titleText">Productos destacados</h2>
      <FeaturedCarousel />
    </div>  
    <SaleType />
    <div className="featuredProducts">
      <hr />
      <h2 className="featuredProducts__titleText">¿Por qué comprar en LAM?</h2>
      <img 
          className="mt-3 w-100 featuredProducts__img"
          src="https://bairesrocks.vteximg.com.br/arquivos/ids/237535/1920x680_02.jpg?v=637913244060900000"
          alt="Store"
        /> 
      <p className='mt-5 featuredProducts__paragraphs'>
        En <strong>LAM</strong>  Music Store, aspiramos a ser la mayor casa de instrumentos musicales. Estamos comprometidos en ofrecerte más que simples productos musicales; estamos aquí para brindarte una experiencia musical excepcional. 
        </p>
        <br/>
      <div className="featuredProducts__contOurMusInstruments">   
      <OurMusicalInstruments />
      <WhatsappLink/>
      </div>
      

    </div>



    
    </>
  )
}

export default Home