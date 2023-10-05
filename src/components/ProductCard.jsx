import React ,{useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card';
import { FaRegHeart,FaHeart} from 'react-icons/fa';

const ProductCard  = ({product,propsFunction}) => {

  // console.log(product)
 
  // const [isFavorite, setIsFavorite] = useState(false);

  // useEffect(() => {
  //   const favoritesFromLocalStorage = JSON.parse(localStorage.getItem('favorites')) || [];
  //   setIsFavorite(favoritesFromLocalStorage.includes(product.id));
  // }, [product.id]);

  // const handleFavourite = () => {
  //   const newFavorite = !isFavorite;
  //   setIsFavorite(newFavorite);

  //   const favoritesFromStorage = JSON.parse(localStorage.getItem('favorites')) || [];

  //   const updatedFavorites = newFavorite
  //     ? [...favoritesFromStorage, product.id]
  //     : favoritesFromStorage.filter((id) => id !== product.id);

  //   localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  // }

  let convertToPesos = (numb) => {
    const pesos = numb.toLocaleString('es-AR', {
      style: 'currency',
      currency: 'ARS'
    });

    return pesos
  }

  

  return (
    <>
      <div className='item col-3 m-3' key={product.id}>
					<figure>
						<img src={product.image} alt={product.title} />
					</figure>
					<div className='info-product'>
						<h2>{product.title}</h2>
						<p className='price'>{convertToPesos(product.price)}</p>
            <p className='price'></p>
						<button onClick={() => propsFunction(product)}>
							Añadir al carrito
						</button>
					</div>
				</div>

    
    </>
  )
}

export default ProductCard 