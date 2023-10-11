import React, { useEffect, useState } from 'react';
import FeaturedCards from '../components/PagesComponents/FeaturedCards'
import { axiosInstance } from '../config/axiosInstance';
import jwt_decode from 'jwt-decode';

const ProductList = ({
  selectedOrder,
  setCartProducts,
  cartProducts,
  filteredCategory  // Nueva prop para recibir la categoría filtrada
}) => {
  const [allProducts, setAllProducts] = useState([]);
   const [favorites, setFavorites] = useState ([])

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

  useEffect(() =>{
   const getFavorite = async () => {
    const token = localStorage.getItem("token");
    const decodedToken = jwt_decode(token);
    const userId = decodedToken.sub;
    const resp = await axiosInstance.get(`/favorite/${userId}`);
    console.log(resp)
    setFavorites(resp?.data?.favoriteProducts.map(({_id}) => _id));
   }
   getFavorite()
  },[])

  

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
            <h3 id="ourProducts" className="featuredProducts__titleText">Nuestros Productos</h3>
          </div>
        </div>

        <div className="row">
                    {filteredProducts.map((product) => (
            <FeaturedCards
              product={product}
              key={product._id}
              setCartProducts={setCartProducts}
              cartProducts={cartProducts}
              favorites={favorites}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
