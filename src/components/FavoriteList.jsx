import React from 'react';
import ProductCard from './ProductCard';

const FavoriteList = ({allProducts}) => {

  return (
    <>
      <main className="container main-favorite">
        <div className="row">
          <div className="col text-center my-3">
            <h3 id="ourProducts" className='featuredProducts__titleText'>Favoritos</h3>
          </div>
        </div>

        <div className="row d-flex justify-content-center">
          {allProducts?.map((product) => (
            <ProductCard
              product={product}
              key={product._id}
              favorites={[product._id]}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default FavoriteList;
