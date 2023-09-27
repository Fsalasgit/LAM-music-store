import React from 'react'
import { products } from '../helpers/products'
import ProductCard from './ProductCard'

const ProductList = () => {


  return (
    <>
    <div className='background-curso'>
        <div className="container">
            <div className="row">
                <div className="col text-center my-5">
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
    </div>
    </>
  )
}

export default ProductList