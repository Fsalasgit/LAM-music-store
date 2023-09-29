import React from 'react'
import { products } from '../helpers/products'
import ProductCard from './ProductCard'

const ProductList = () => {


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
                products.map((product) => (
                    
                    <ProductCard product={product} key={product.id}/>
                ))
            }
        </div>
    </div>

    </>
  )
}

export default ProductList