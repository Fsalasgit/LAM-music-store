import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { axiosInstance } from '../../config/axiosInstance';
import FeaturedCards from './FeaturedCards';
import FeaturedCardsSkeleton from './FeaturedCardsSkeleton';


const FeaturedCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [visibleItems, setVisibleItems] = useState(3);
  const [isLoading, setIsLoading] = useState(true)

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
      } finally {
        setIsLoading(false)
      }
    };
    fetchFeaturedProducts();
  }, []);
  const updateVisibleItems = () => {
    if (window.innerWidth < 968) {
      setVisibleItems(1);
    } else {
      setVisibleItems(3);
      setStartIndex(0);
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
    <>
    {
      isLoading ? (
        <Carousel id='carouselCards' activeIndex={startIndex} onSelect={handleSelect} className='mt-1'>
          <Carousel.Item>
            <div className="d-flex justify-content-around">
              {Array(visibleItems).fill().map((_, index) => (
                <FeaturedCardsSkeleton key={index} />
              ))}
            </div>
          </Carousel.Item>
        </Carousel>
      ) : (
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
      )
    }
    </>


  );
};
export default FeaturedCarousel;