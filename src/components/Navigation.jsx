import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";
import { RiUser3Fill, RiShoppingCart2Fill, RiHeart3Fill, RiSearch2Line } from "react-icons/ri";
import jwt_decode from 'jwt-decode';

const Navigation = () => {
  const token = localStorage.getItem('token');
  const isLogged = !!token;
  let userName = '';
  

  let userRole = '';
  if (isLogged) {
    const decodedToken = jwt_decode(token);
    userRole = decodedToken.rol;
    userName = decodedToken.name
  }

  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("token")
    localStorage.removeItem('userRole');
    navigate("/login")
  }
  return (
    <Navbar sticky="top" expand="lg" className="nav-header" >
    <Container>
      <Navbar.Brand><img src="../../public/lan (150 x 100 px).png" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <form className="custom-search">
      <input
        type="text"
        placeholder="Buscar"
        className="custom-search-input"
      />
      <button type="submit" className="custom-search-button">
        < RiSearch2Line className='search'/>
      </button>
    </form>
        <Nav>

          <Nav.Link className='nav-header__link' href="/">Inicio</Nav.Link>
          <Nav.Link className='nav-header__link' href="/productos">Productos</Nav.Link>
         
          {isLogged ? (
              <>
                {userRole === 'admin' && (
                  <Nav.Link className='nav-header__link' href="/admin">Administracion</Nav.Link>
                )}
                 <span className="nav-header__user-name">{userName}</span>
                <button className="nav-header__cerrar-sesion" onClick={logOut}>
                  Cerrar Sesión
                </button>
              </>
            ) : (
              <>
                <Nav.Link href="/login"><RiUser3Fill className="nav-header__login"/></Nav.Link>
                
              </>
            )} 
            <Nav.Link href='/cart'><RiHeart3Fill className="nav-header__heart"/></Nav.Link>
            <Nav.Link href='/cart'><RiShoppingCart2Fill className="nav-header__cart"/></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navigation