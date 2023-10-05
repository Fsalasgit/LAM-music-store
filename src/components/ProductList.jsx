import React, { useEffect, useState } from 'react'
// import { products } from '../helpers/products'
import ProductCard from './ProductCard'
import { axiosInstance } from '../config/axiosInstance'

const ProductList = ({ selectedOrder, selectedCategory }) => {
  const [allProducts, setAllProducts] = useState([])
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const product = allProducts

  console.log(`producis `, {total})

  const getProducts = async () => {
    try {
      const resp = await axiosInstance.get("/products")
      setAllProducts(resp.data.product)
      console.log(resp.data)
     
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  const sortProduct = (product, order) => {

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

  }


  const sortedProducts = sortProduct(product, selectedOrder) || []
  const filteredProducts = selectedCategory
    ? sortedProducts.filter((product) => product.category === selectedCategory)
    : sortedProducts;
  console.log(selectedOrder)


  const onAddProduct = product => {

    
    console.log("click")
		 if (allProducts.find(item => item.id === product.id)) {
		const products = allProducts.map(item =>
				item.id === product.id
					? { ...item, stock: item.stock + 1 }
					: item
			);
		 	setTotal(total + product.price * product.stock);
	 	  setCountProducts(countProducts + product.stock);
		 	return setAllProducts([...products]);
		 }

		 setTotal(total + product.price * product.stock);
		 setCountProducts(countProducts + product.stock);
		 setAllProducts([...allProducts, product]);
	};

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
              <ProductCard product={product} key={product._id} propsFunction={onAddProduct}/>
            )
            )}
        </div>
      </div>

    </>
  )
}

export default ProductList