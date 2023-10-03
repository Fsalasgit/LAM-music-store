import React, { useEffect, useState } from 'react'
// import { products } from '../helpers/products'
import ProductCard from './ProductCard'
import { axiosInstance } from '../config/axiosInstance'

const ProductList = ({ selectedOrder, selectedCategory }) => {
  const [allProducts, setAllProducts] = useState([])
  const products = allProducts

  const getProducts = async () => {
    try {
      const resp = await axiosInstance.get("/products")
      setAllProducts(resp.data.product)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  const sortProduct = (products, order) => {

    switch (order) {
      case '1':
        return products.slice().sort((a, b) => a.id - b._id);
      case '2':
        return products.slice().sort((a, b) => a.price - b.price);
      case '3':
        return products.slice().sort((a, b) => b.price - a.price);
      case '4':
        return products.slice().sort((a, b) => a.title.localeCompare(b.title));
      case '5':
        return products.slice().sort((a, b) => b.title.localeCompare(a.title));
      default:
        return products.slice();

    }

  }


  const sortedProducts = sortProduct(products, selectedOrder) || []
  const filteredProducts = selectedCategory
    ? sortedProducts.filter((product) => product.category === selectedCategory)
    : sortedProducts;
  console.log(selectedOrder)




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
            filteredProducts.map((product) => (
              <ProductCard product={product} key={product.id} />
            )
            )}
        </div>
      </div>

    </>
  )
}

export default ProductList