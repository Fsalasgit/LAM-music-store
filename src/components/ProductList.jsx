import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { axiosInstance } from '../config/axiosInstance';
import jwt_decode from 'jwt-decode';
import FeaturedCardsSkeleton from './PagesComponents/FeaturedCardsSkeleton';

const ProductList = ({
  selectedOrder,
  setCartProducts,
  cartProducts,
  filteredCategory  // Nueva prop para recibir la categoría filtrada
}) => {
  const [allProducts, setAllProducts] = useState([]);
   const [favorites, setFavorites] = useState ([])
   const [isLoading, setIsLoading] = useState(true)


   const getProducts = async () => {
    try {
      const resp = await axiosInstance.get('/products');
      setAllProducts(resp.data.products);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false)
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() =>{
    // se utiliza para obtener los productos favoritos del usuario desde el servidor cuando el componente se carga por primera vez
   const getFavorite = async () => {
    const token = localStorage.getItem("token");
    const decodedToken = jwt_decode(token);
    const userId = decodedToken.sub;
    const resp = await axiosInstance.get(`/favorite/${userId}`);
    // recorre cada elemento del array favoriteProducts y, en este caso, extrae el valor de la propiedad _id de cada elemento y crea un nuevo array con solo esos valores _id. Actualiza el estado favorites
    setFavorites(resp?.data?.favoriteProducts.map(({_id}) => _id));
   }
   getFavorite()
   // Las operaciones se realizan solo una vez 
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
          {
            isLoading ? (
          Array(12).fill().map((_, index) => (
            <FeaturedCardsSkeleton key={index} />
          ))
            ) : (
                filteredProducts.map((product) => (
                <ProductCard
                  product={product}
                  key={product._id}
                  setCartProducts={setCartProducts}
                  cartProducts={cartProducts}
                  favorites={favorites}
                />
              ))
            )
          }
        </div>
      </div>
    </>
  );
};

export default ProductList;
