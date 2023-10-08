import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { RiHeart3Fill, RiSearch2Line } from "react-icons/ri";
import jwt_decode from 'jwt-decode';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

import Carrito from './Carrito';


const Navigation = () => {


  const token = localStorage.getItem('token');
  const isLogged = !!token;

  let userRole = '';
  if (isLogged) {
    const decodedToken = jwt_decode(token);
    userRole = decodedToken.rol;
  }

  const navigate = useNavigate();

  const logOut = () => {
    Swal.fire({
      title: '¿Estás seguro que quieres cerrar sesión?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#F8A126',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, cerrar sesión',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('token');
        localStorage.removeItem('userRole');
        navigate('/');
      }
    });
  }

  return (
    <>
      <Navbar expand="lg" className="nav-header">
        <Container fluid='md'>
          <Navbar.Brand as={Link} to="/" className="d-flex justify-content-center">
            <img src="../../public/lan (150 x 100 px).png" alt="Logo" className="mx-auto my-auto d-lg-inline align-top" />
          </Navbar.Brand>
          <Form className="d-flex ">
            <Form.Control
              type="search"
              placeholder="Buscar"
              style={{ fontSize: '20px', height: '30px', width: '250px' }}
              className="me-2 custom-search"
              aria-label="Search"
            />
            <Button variant="outline-warning">
              <RiSearch2Line className='nav-header__search' />
            </Button>
          </Form>
          <div className='d-flex icons-group'>
            {isLogged && (
              <div className='icons'>
                <Nav.Link as={Link} to='/favorite'>
                  <RiHeart3Fill className="nav-header__heart" />
                </Nav.Link>
              </div>
            )}
            <div className='icons'>
              <Nav.Link> <Carrito /></Nav.Link>
            </div>
            {isLogged && (
              <div className='icons user-actions d-none d-sm-flex'>
                <Button className="nav-header__cerrar-sesion" onClick={logOut}>
                  Cerrar Sesión
                </Button>
              </div>
            )}
          </div>
        </Container>
      </Navbar>

      <Navbar expand="lg" className="nav-header">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="text-center">
            <Nav navbarScroll className="mx-auto">
              <Nav.Link as={Link} to="/" className='nav-header__link'>Inicio</Nav.Link>
              <Nav.Link as={Link} to="/productos" className='nav-header__link'>Productos</Nav.Link>
              <Nav.Link as={Link} to="/nosotros" className='nav-header__link'>Acerca de Nosotros</Nav.Link>
              {userRole === 'admin' && (
                <Nav.Link as={Link} to="/admin" className='nav-header__link'>Administración</Nav.Link>
              )}
              {isLogged ? (
                <div className='icons d-lg-flex d-lg-none'>
                  <Button className="nav-header__cerrar-sesion" onClick={logOut}>
                    Cerrar Sesión
                  </Button>
                </div>
              ) : (
                <div className='icons'>
                  <Nav.Link as={Link} to="/login" className='nav-header__link'>
                    Iniciar Sesión
                  </Nav.Link>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
