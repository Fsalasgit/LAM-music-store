import React from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const RangePriceImput = () => {
  return (
    <>

    <Form className='mt-5'>
      <p className='titlePrice'>Seleccionar por rango</p>
      <Row>
        <Col>
          <Form.Control placeholder="Precio minimo" className='formPrice'/>
        </Col>
        <Col>
          <Form.Control placeholder="Precio maximo" className='formPrice'/>
        </Col>
      </Row>
    </Form>

    </>
  )
}

export default RangePriceImput