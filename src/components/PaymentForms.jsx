import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const PaymentForms = ({ show, setShow }) => {
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)} dialogClassName='modal-90w' aria-labelledby='example-custom-modal-styling-title'>
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
                  <Form>
                    
                    <Form.Group controlId='formBasicName'>
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control type='text' placeholder='Nombre' />
                    </Form.Group>
                    <Form.Group controlId='formBasicAddress'>
                      <Form.Label>Dirección</Form.Label>
                      <Form.Control type='text' placeholder='Dirección' />
                    </Form.Group>
                    
                  </Form>
                </div>
              </Tab.Pane>

              
              <Tab.Pane eventKey='second'>
                <div>
                  <h2>Pago con Tarjeta</h2>
                  <Form>
                    
                    <Form.Group controlId='formCardNumber'>
                      <Form.Label>Número de Tarjeta</Form.Label>
                      <Form.Control type='text' placeholder='Número de Tarjeta' />
                    </Form.Group>
                    <Form.Group controlId='formExpiration'>
                      <Form.Label>Fecha de Expiración</Form.Label>
                      <Form.Control type='text' placeholder='MM/YY' />
                    </Form.Group>
                    <Form.Group controlId='formCVV'>
                      <Form.Label>CVV</Form.Label>
                      <Form.Control type='text' placeholder='CVV' />
                    </Form.Group>
                   }
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