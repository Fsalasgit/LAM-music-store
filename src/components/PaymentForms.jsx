import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ReactCreditCard from './PagesComponents/ReactCreditCard';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import ShippingFormsData from './PagesComponents/ShippingFormsData';


const PaymentForms = ({ show, setShow }) => {
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)} dialogClassName='modal-100' aria-labelledby='example-custom-modal-styling-title'>
        <Modal.Header closeButton>
          <Modal.Title id='example-custom-modal-styling-title'>Realizar Pago</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
            <Nav variant='tabs'>
              <Nav.Item>
                <Nav.Link eventKey='first'>Datos de Envío</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='second'>Pago con Tarjeta</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
             
              <Tab.Pane eventKey='first'>
                <div>
                  <h2>Datos de Entrega</h2>
                  <ShippingFormsData />
                </div>
              </Tab.Pane>

              
              <Tab.Pane eventKey='second'>
                <div>
                  <h2>Pago con Tarjeta</h2>
                  <Form>
                    <ReactCreditCard />
                    
                   
                  </Form>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={() => setShow(false)}>
            Cerrar
          </Button>
          <Button variant='primary'>Pagar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PaymentForms;