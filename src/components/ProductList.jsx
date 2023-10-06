import React, { useEffect, useState } from 'react'
import { products } from '../helpers/products'
import ProductCard from './ProductCard'
import { axiosInstance } from '../config/axiosInstance'

const ProductList = ({ 

  allProducts,
	setAllProducts,
	countProducts,
	setCountProducts,
	total,
	setTotal,
  
}) => {

  
  

  return (
    <>

      <div className="container containerProductList ">
        <div className="row">
          <div className="col text-center my-3">
            <h3 id='ourProducts'>Nuestros Productos</h3>

          </div>
        </div>

        <div className="row">
          {
            products.map((product) => (
              <ProductCard product={product} key={product._id}
              allProducts={allProducts}
              setAllProducts={setAllProducts}
              total={total}
              setTotal={setTotal}
              countProducts={countProducts}
              setCountProducts={setCountProducts}
              />
            )
            )}
        </div>
      </div>

    </>
  )
}

export default ProductList