import React from 'react'



const ProductCard  = ({product,
  allProducts,
	setAllProducts,
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