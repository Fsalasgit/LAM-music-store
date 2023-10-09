import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { axiosInstance } from '../config/axiosInstance';

const FavoriteList = () => {
  const [allProducts, setAllProducts] = useState([]);

  const getFavorite = async () => {
    try {
      const resp = await axiosInstance.get('/favorite');
      setAllProducts(resp.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFavorite();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col text-center my-3">
            <h3 id="ourProducts">Favoritos</h3>
          </div>
        </div>

        <div className="row d-flex justify-content-center">
          {allProducts.map((product) => (
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
