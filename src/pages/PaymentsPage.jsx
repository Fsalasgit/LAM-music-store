import React, {  useContext,useState  } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { GlobalContext } from '../context/GlobalContext';
import { clearCart } from '../context/GlobalActions';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import PaymentForms from '../components/PaymentForms';


const PaymentsPage = () => {
    const [show, setShow] = useState(false);

    const {state, dispatch} = useContext(GlobalContext)

  
  
    const onDeleteProduct = (productId) => {
      const updatedCartProducts = state.productCart
        .map((item) => (item._id === productId ? { ...item, cantidad: item.cantidad - 1 } : item))
        .filter((item) => item.cantidad > 0);
  
    };
  
    const onCleanCart = () => {
      dispatch(clearCart())
      
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
    <Container className='mainPage mt-5'>
        <h1>Mi carrito</h1>
       
        <Row className='mt-5'>
            {(state.productCart.length > 0) && <Col xl={8}>
    
                <table striped bordered hover size="sm" className='payTable'>
                    <thead className='payTable__header'>
                        <tr>
                        <th colSpan={2} className='payTable__title'>Producto</th>
                        <th className='payTable__title '>Precio</th>
                        <th className='payTable__title payTable__title-dnone'>cantidad</th>
                        <th className='payTable__title'>subtotal</th>
                        <th className='payTable__title'></th>
                        </tr>
                    </thead>


                    <tbody>
                    {state.productCart.map((product) => (
                            <tr key={product._id} className=''>
                            
                                <td className='payTable__item'><img className='payTable__img' src={product.image} alt={product.title} /></td>
                                <td className='payTable__item payTable__item-long'>{product.title}</td>
                                <td className='payTable__item'>{convertToPesos(product.price)}</td>
                                <td className='payTable__item'>{product.cantidad}</td>

                                <td className='payTable__item'>{convertToPesos(product.price*product.cantidad)}</td>
                                <td className='payTable__item'></td>

                                
                            </tr>
                        ))}
                        
                    </tbody>
                </table>
                <Link to="/" className='payTable__button'>Continuar Comprando</Link>
            </Col>
            }
            <Col xs={10} xl={3} className='ms-auto totalPay'>
                <h2 className='totalPay__title'>Resumen de compra</h2>


                <div className='cart-total totalPay__card'>
                    <h3 >Total</h3>
                    <span className='total-pagar'>
                        {convertToPesos(
                        state.productCart.reduce((acc, item) => acc + item.price * item.cantidad, 0)
                        )}
                    </span>
                </div>

                <div className='buttonContainer'>
                    <button className='buttonContainer__button' onClick={onCleanCart}>
                    Cancelar
                    </button>
                    <button
                    className='buttonContainer__button buttonContainer__button--buy'
                    onClick={() => setShow(true)}  
                    >
                    Pagar
                    </button>
                </div>

            </Col>
            <PaymentForms show={show} setShow={setShow} /> 
      



        </Row>

    </Container>
    <PaymentForms />

    </>
  )
}

export default PaymentsPage