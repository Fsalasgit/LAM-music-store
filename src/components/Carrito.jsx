import React, { useState, useContext } from 'react';
import { RiShoppingCart2Fill } from 'react-icons/ri';
import { GlobalContext } from '../context/GlobalContext';
import { clearCart } from '../context/GlobalActions';
import { Link } from 'react-router-dom';


const Carrito = () => {
  const [active, setActive] = useState(false);
  const { state, dispatch } = useContext(GlobalContext)


  const onDeleteProduct = (productId) => {
    const updatedCartProducts = state.productCart
      .map((item) => (item._id === productId ? { ...item, cantidad: item.cantidad - 1 } : item))
      .filter((item) => item.cantidad > 0);

  };


  const onCleanCart = () => {
    dispatch(clearCart())
    setActive(!active)

  };

  let convertToPesos = (numb) => {
    const pesos = numb.toLocaleString('es-AR', {
      style: 'currency',
      currency: 'ARS',
    });
    return pesos;
  };


  return (
    <>
      <span>
        <div className='container-icon'>
          <div className='container-cart-icon' >
            <RiShoppingCart2Fill className='nav-header__cart' onClick={() => setActive(!active)} />
            <div className='count-products'>{state.productCart.reduce((total, item) => total + item.counterProduct, 0)}</div>
          </div>

          <div className={`container-cart-products ${active ? '' : 'hidden-cart'
            }`} >
            {state.productCart.length ? (
              <>
                <div className='row-product'>
                  {state.productCart.map((product) => (
                    <div className='cart-product' key={product._id}>
                      <div className='info-cart-product'>
                        <span className='cantidad-producto-carrito'>{product.cantidad}</span>
                        <p className='titulo-producto-carrito'>{product.title}</p>
                        <span className='precio-producto-carrito'>{convertToPesos(product.price)}</span>
                      </div>

                    </div>
                  ))}
                </div>

                <div className='cart-total'>
                  <h3>Total:</h3>
                  <span className='total-pagar'>
                    {convertToPesos(
                      state.productCart.reduce((acc, item) => acc + item.price * item.cantidad, 0)
                    )}
                  </span>
                </div>

                <div className='buttonContainer'>

                  <button className='buttonContainer__button' onClick={onCleanCart} >
                    Vaciar Carrito
                  </button>
                  <Link to={`/pagos`} className='buttonContainer__button buttonContainer__button--buy' onClick={() => setActive(!active)}>Comprar</Link>
                </div>

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



