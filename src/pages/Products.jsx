import React, {useState} from 'react'
import ProductList from '../components/ProductList'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from '../components/Sidebar';


const Products = () => {
  const [selectedOrder , setSelectedOrder] = useState ('1');


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
              <ProductList selectedOrder={selectedOrder}/>
                

            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Products