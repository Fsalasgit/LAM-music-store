import React from 'react'
import ProductList from '../components/ProductList'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from '../components/Sidebar';

const Products = () => {
  return (
    <>
    <Container className='container'>
        <Row className="row">
            <Col>
              <Sidebar />


            </Col>
            <Col xs={9}>
              <ProductList />
                

            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Products