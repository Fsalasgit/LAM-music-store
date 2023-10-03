
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import FeaturedCards from './FeaturedCards';

const FeaturedCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setStartIndex(selectedIndex * 3); // Mostrar el conjunto correspondiente
  };

  return (
    <>
      <Carousel activeIndex={startIndex / 3} onSelect={handleSelect} className='mt-1'>
        <Carousel.Item>
          <div className="d-flex justify-content-around">
            <FeaturedCards price="1" url="https://www.heavenimagenes.com/heavencommerce/0c5cacb8-dfbd-471a-ac7e-5c09a26f6da9/images/v2/YAMAHA/21650_small.jpg"/>
            <FeaturedCards price="2" url="https://www.heavenimagenes.com/heavencommerce/0c5cacb8-dfbd-471a-ac7e-5c09a26f6da9/images/v2/FENDER/17600_small.jpg" />
            <FeaturedCards price="3" url="https://www.heavenimagenes.com/heavencommerce/0c5cacb8-dfbd-471a-ac7e-5c09a26f6da9/images/v2/YAMAHA/8037_small.jpg" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-around">
            <FeaturedCards price="4" url="https://www.heavenimagenes.com/heavencommerce/0c5cacb8-dfbd-471a-ac7e-5c09a26f6da9/images/v2/MUSEDO/11110_small.jpg"/>
            <FeaturedCards price="5" url="https://www.heavenimagenes.com/heavencommerce/0c5cacb8-dfbd-471a-ac7e-5c09a26f6da9/images/v2/CAMPANA/1110141704354771_01_small.jpg"/>
            <FeaturedCards price="6" url="https://www.heavenimagenes.com/heavencommerce/0c5cacb8-dfbd-471a-ac7e-5c09a26f6da9/images/v2/FENDER/17600_small.jpg"/>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-around">
            <FeaturedCards price="7" url="https://www.heavenimagenes.com/heavencommerce/0c5cacb8-dfbd-471a-ac7e-5c09a26f6da9/images/v2/YAMAHA/10698_small.jpg"/>
            <FeaturedCards price="8" url="https://www.heavenimagenes.com/heavencommerce/0c5cacb8-dfbd-471a-ac7e-5c09a26f6da9/images/v2/CASIO/1712231809507673_01_small.jpg"/>
            <FeaturedCards price="9" url="https://www.heavenimagenes.com/heavencommerce/0c5cacb8-dfbd-471a-ac7e-5c09a26f6da9/images/v2/CASIO/1712231809507673_01_small.jpg"/>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default FeaturedCarousel;