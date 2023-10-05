import React, {useState, useEffect} from 'react'
import ProductList from '../components/ProductList'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from '../components/Sidebar';
import WhatsappLink from '../components/WhatsappLink';
import Carrito from '../components/Carrito';
import { axiosInstance } from '../config/axiosInstance'


const Products = ({
  allProducts,
	setAllProducts,
	countProducts,
	setCountProducts,
	total,
	setTotal,

}) => {




  

  return (
    <>
    {/* <Carrito 
      allProducts={allProducts}
      setAllProducts={setAllProducts}
      total={total}
      setTotal={setTotal}
      countProducts={countProducts}
      setCountProducts={setCountProducts}
    /> */}
    <Container className='container'>
        <Row className="row">
            <Col>
              <Sidebar />


            </Col>
            <Col xs={9}>
              <ProductList
                allProducts={allProducts}
                setAllProducts={setAllProducts}
                total={total}
                setTotal={setTotal}
                countProducts={countProducts}
                setCountProducts={setCountProducts}


                />
                

            </Col>
        </Row>
    </Container>
    <WhatsappLink/>
    </>
  )
}

export default Products