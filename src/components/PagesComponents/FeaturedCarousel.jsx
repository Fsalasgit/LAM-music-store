import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import FeaturedCards from './FeaturedCards';
import { axiosInstance } from '../../config/axiosInstance';

const FeaturedCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [visibleItems, setVisibleItems] = useState(3); // Cantidad de elementos visibles en pantallas grandes

  const handleSelect = (selectedIndex) => {
    setStartIndex(selectedIndex);
  };

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const resp = await axiosInstance.get("/products");
        const allProducts = resp.data.products;
        const featuredProducts = allProducts.filter(product => product.isFeatured === true);
        setFeaturedProducts(featuredProducts);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFeaturedProducts();
  }, []);

  const updateVisibleItems = () => {
    if (window.innerWidth < 968) { // Cambiar a 768px o el ancho deseado para cambiar a un solo elemento en pantallas pequeñas
      setVisibleItems(1);
    } else {
      setVisibleItems(3); // Volver a mostrar 3 elementos en pantallas más grandes
    }
  };

  useEffect(() => {
    updateVisibleItems();
    window.addEventListener('resize', updateVisibleItems);
    return () => {
      window.removeEventListener('resize', updateVisibleItems);
    };
  }, []);

  const productsChunks = [];
  for (let i = 0; i < featuredProducts.length; i += visibleItems) {
    productsChunks.push(featuredProducts.slice(i, i + visibleItems));
  }

  return (
    <Carousel id='carouselCards' activeIndex={startIndex} onSelect={handleSelect} className='mt-1'>
      {productsChunks.map((chunk, index) => (
        <Carousel.Item key={index}>
          <div className="d-flex justify-content-around">
            {chunk.map((product, productIndex) => (
              <FeaturedCards key={productIndex} product={product} />
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default FeaturedCarousel;