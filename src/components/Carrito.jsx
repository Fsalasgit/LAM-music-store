import React, {useState} from 'react'

import {  RiShoppingCart2Fill } from "react-icons/ri";



const Carrito = ({
	cartProducts,
	setCartProducts,
	total,
	countProducts,
	setCountProducts,
	setTotal,
}) => {

    const [active, setActive] = useState(false);

	const onDeleteProduct = product => {
		const results = cartProducts?.filter(
			item => item.id !== product?.id
			);


		setTotal(total - product?.price * product?.stock);
		setCountProducts(countProducts - product?.stock);
		setCartProducts(results);
	
	};

	const onCleanCart = () => {
		setCartProducts([]);
		setTotal(0);
		setCountProducts(0);
	};
	
	let convertToPesos = (numb) => {
		const pesos = numb.toLocaleString('es-AR', {
		  style: 'currency',
		  currency: 'ARS'
		});
	
		return pesos
	  }
	


  return (
    <>
        <span >

			<div className='container-icon'>
				<div
					className='container-cart-icon'
					onClick={() => setActive(!active)}
				>
					<RiShoppingCart2Fill className="nav-header__cart"/>
						
					<div className='count-products'>
						<span id='contador-productos'>{countProducts}</span>
					</div>
				</div>

				<div
					className={`container-cart-products ${
						active ? '' : 'hidden-cart'
					}`}
				>
					{cartProducts.length ? (
						<>
							<div className='row-product'>
								{cartProducts.map(product => (
									<div className='cart-product' key={product?.id}>
										<div className='info-cart-product'>
											<span className='cantidad-producto-carrito'>
												{product?.stock}
											</span>
											<p className='titulo-producto-carrito'>
												{product?.title}
											</p>
											<span className='precio-producto-carrito'>
												{convertToPesos(product?.price)}
											</span>
										</div>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth='1.5'
											stroke='currentColor'
											className='icon-close'
											onClick={() => onDeleteProduct(product)}
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M6 18L18 6M6 6l12 12'
											/>
										</svg>
									</div>
								))}
							</div>

							<div className='cart-total'>
								<h3>Total:</h3>
								<span className='total-pagar'>{convertToPesos(total)}</span>
							</div>

							<button className='btn-clear-all' onClick={onCleanCart}>
								Vaciar Carrito
							</button>
						</>
					) : (
						<p className='cart-empty'>El carrito está vacío</p>
					)}
				</div>
			</div>
		</span>

    </>
  )
}

export default Carrito