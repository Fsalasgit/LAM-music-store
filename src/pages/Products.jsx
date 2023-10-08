import React, {useState, useEffect} from 'react'
import ProductList from '../components/ProductList'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from '../components/Sidebar';
import WhatsappLink from '../components/WhatsappLink';




const Products = ({}) => {

  const [selectedOrder, setSelectedOrder] = useState('1');
  const [cartProducts, setCartProducts] = useState([]);


  const handleOrderChange = (selectedValue) => {
    setSelectedOrder(selectedValue);
  };


  

  return (
    <>

    <Container className='container'>
        <Row className="row">
            <Col>
              <Sidebar onOrderChange={handleOrderChange}/>


            </Col>
            <Col xs={9}>
              <ProductList 
              selectedOrder={selectedOrder}
              setCartProducts={setCartProducts}
              cartProducts={cartProducts}
              />

            </Col>
        </Row>
    </Container>
    <WhatsappLink/>
    </>
  )
}

export default Products