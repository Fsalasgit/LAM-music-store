import React from 'react'



const ProductCard  = ({product,
  	cartProducts,
	setCartProducts,
	countProducts,
	setCountProducts,
	total,
	setTotal,}) => {




  let convertToPesos = (numb) => {
    const pesos = numb.toLocaleString('es-AR', {
      style: 'currency',
      currency: 'ARS'
    });

    return pesos
  }
  const onAddProduct = product => {
	  console.log(cartProducts)
	  if (cartProducts?.find(item => item?.id === product?.id)) {
		const products = cartProducts.map(item =>
			item?.id === product?.id
				? { ...item, quantity: item?.quantity + 1 }
				: item
		);
		setTotal(total + product?.price * product?.quantity);
		setCountProducts(countProducts + product?.quantity);
		return setCartProducts([...products]);
	}

	setTotal(total + product?.price * product?.quantity);
	setCountProducts(countProducts + product?.quantity);
	setCartProducts([...cartProducts, product]);
};
  

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
						<button onClick={() => onAddProduct(product)}>
							Añadir al carrito
						</button>
					</div>
				</div>

    
    </>
  )
}

export default ProductCard 