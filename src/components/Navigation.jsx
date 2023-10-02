import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const isLogged = localStorage.getItem("token")
  const navigate = useNavigate()

  const logOut = () => {
    localStorage.removeItem("token")
    navigate("/login")
  }
  return (
    <Navbar sticky="top" expand="lg" className="bg-body-tertiary nav-header" bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">LAM Music Store</Navbar.Brand>
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
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="/productos">Productos</Nav.Link>
          {
          isLogged ? (<button className="items me-3" onClick={logOut}>Cerrar Sesión</button>) : (
                <>
          <Nav.Link href="/login">Iniciar Sesion</Nav.Link>
          <Nav.Link href="/registro">Registro</Nav.Link>
                </>
              )
            }
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navigation