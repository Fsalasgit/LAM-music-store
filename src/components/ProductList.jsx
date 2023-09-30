import React from 'react'
import { products } from '../helpers/products'
import ProductCard from './ProductCard'

const ProductList = ({selectedOrder}) => {

    const sortProduct = (products,order) => {

        switch (order) {
            case '1':
                return products.slice().sort((a, b) => a.id - b.id);
            case '2':
                return products.slice().sort((a, b) => a.price - b.price);
            case '3':
                return products.slice().sort((a, b) => b.price - a.price);
            case '4':
                return products.slice().sort((a, b) => a.title.localeCompare(b.title));
            case '5':
                return products.slice().sort((a, b) => b.title.localeCompare(a.title));
            default:
                return console.log(order)
        }
    }


    const sortedProducts = sortProduct(products, selectedOrder) || []
    

  return (
    <>

    <div className="container containerProductList ">
        <div className="row">
            <div className="col text-center my-3">
                <h3>Nuestros Productos</h3>
                
            </div>
        </div>
        
        <div className="row">
        {
            sortedProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
            )
        )}
        </div>
    </div>

    </>
  )
}

export default ProductList