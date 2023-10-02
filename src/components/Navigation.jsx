import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RiLoginBoxLine } from "react-icons/ri";


const Navigation = () => {
  return (
    <Navbar sticky="top" expand="lg" className="bg-body-tertiary nav-header" bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="/">LAM Music Store</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Form className='ms-auto'> 
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
        <Nav className="ms-auto">
          <Nav.Link href="#home" className='me-3'>Inicio</Nav.Link>
          <Nav.Link href="/productos" className='me-3'>Productos</Nav.Link>
          <Nav.Link href="/login" className='me-3'><RiLoginBoxLine/></Nav.Link>
          <Nav.Link href="/registro" >Registro</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navigation