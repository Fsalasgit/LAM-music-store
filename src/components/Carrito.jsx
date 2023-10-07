import React, { useState, useEffect } from 'react';
import { RiShoppingCart2Fill } from 'react-icons/ri';

const Carrito = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const savedCartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
    setCartProducts(savedCartProducts);
  }, [cartProducts]);

  const onDeleteProduct = (productId) => {
    const updatedCartProducts = cartProducts
      .map((item) => (item._id === productId ? { ...item, quantity: item.quantity - 1 } : item))
      .filter((item) => item.quantity > 0);

    setCartProducts(updatedCartProducts);
    localStorage.setItem('cartProducts', JSON.stringify(updatedCartProducts));
    updatecart()
  };

  const onCleanCart = () => {
    setCartProducts([]);
    localStorage.removeItem('cartProducts');
  };

  let convertToPesos = (numb) => {
    const pesos = numb.toLocaleString('es-AR', {
      style: 'currency',
      currency: 'ARS',
    });
    return pesos;
  };

  const updatecart = () => {
   
    cartProducts = JSON.parse(localStorage.getItem("cartProducts"));
    
}

  return (
    <>
      <span>
        <div className='container-icon'>
          <div className='container-cart-icon' >
            <RiShoppingCart2Fill className='nav-header__cart' onClick={() => setActive(!active)}/>
            <div className='count-products'>{cartProducts.length}</div>
          </div>

          <div className={`container-cart-products ${
						active ? '' : 'hidden-cart'
					}`} >
            {cartProducts.length ? (
              <>
                <div className='row-product'>
                  {cartProducts.map((product) => (
                    <div className='cart-product' key={product._id}>
                      <div className='info-cart-product'>
                        <span className='cantidad-producto-carrito'>{product.quantity}</span>
                        <p className='titulo-producto-carrito'>{product.title}</p>
                        <span className='precio-producto-carrito'>{convertToPesos(product.price)}</span>
                      </div>
                      <svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='currentColor'
							className='icon-close'
							onClick={() => onDeleteProduct(product._id)}
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
                  <span className='total-pagar'>
                    {convertToPesos(
                      cartProducts.reduce((acc, item) => acc + item.price * item.quantity, 0)
                    )}
                  </span>
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
  );
};

export default Carrito;



