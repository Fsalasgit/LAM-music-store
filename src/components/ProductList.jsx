import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { axiosInstance } from '../config/axiosInstance';

const ProductList = ({
  selectedOrder,
  setCartProducts,
  cartProducts,
  filteredCategory  // Nueva prop para recibir la categoría filtrada
}) => {
  const [allProducts, setAllProducts] = useState([]);

  const getProducts = async () => {
    try {
      const resp = await axiosInstance.get('/products');
      setAllProducts(resp.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);


  const sortProduct = (product, order) => {
    let sortedProducts = [...product];

    switch (order) {
      case '1':
        return product.slice().sort((a, b) => a._id - b._id);
      case '2':
        return product.slice().sort((a, b) => a.price - b.price);
      case '3':
        return product.slice().sort((a, b) => b.price - a.price);
      case '4':
        return product.slice().sort((a, b) => a.title.localeCompare(b.title));
      case '5':
        return product.slice().sort((a, b) => b.title.localeCompare(a.title));
      default:
        return product.slice();
    }
  };

  const sortedProducts = sortProduct(allProducts, selectedOrder);


  const filteredProducts = filteredCategory
    ? sortedProducts.filter((product) => product.category.name === filteredCategory) 
    : sortedProducts;



  return (
    <>
      <div className="container containerProductList">
        <div className="row">
          <div className="col text-center my-3">
            <h3 id="ourProducts" className="titleText">Nuestros Productos</h3>
          </div>
        </div>

        <div className="row">
          {filteredProducts.map((product) => (
            <ProductCard
              product={product}
              key={product._id}
              setCartProducts={setCartProducts}
              cartProducts={cartProducts}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
