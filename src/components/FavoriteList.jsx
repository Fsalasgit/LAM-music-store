import React from 'react';
import ProductCard from './ProductCard';

const FavoriteList = ({allProducts}) => {

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col text-center my-3">
            <h3 id="ourProducts" className='titleText'>Favoritos</h3>
          </div>
        </div>

        <div className="row d-flex justify-content-center">
          {allProducts?.map((product) => (
            <ProductCard
              product={product}
              key={product._id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FavoriteList;
