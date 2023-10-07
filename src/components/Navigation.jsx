import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";
import { RiUser3Fill, RiShoppingCart2Fill, RiHeart3Fill, RiSearch2Line } from "react-icons/ri";
import jwt_decode from 'jwt-decode';
import Carrito from './Carrito';

const Navigation = ({ 

  cartProducts,
	setCartProducts,
	countProducts,
	setCountProducts,
	total,
	setTotal,
  
}) => {
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
      <Navbar.Brand><img src="../../public/lan (150 x 100 px)-PhotoRoom.png-PhotoRoom.png" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <form className="custom-search">
      <input
        type="text"
        placeholder="Buscar"
        className="custom-search__input"
      />
      <button type="submit" className="custom-search__button">
        < RiSearch2Line className='custom-search__search'/>
      </button>
    </form>
        <Nav className='me-3'>

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
            <Nav.Link href='/favorite'><RiHeart3Fill className="nav-header__heart"/></Nav.Link>
            
            <Nav.Link > <Carrito cartProducts={cartProducts}
              setCartProducts={setCartProducts}
              total={total}
              setTotal={setTotal}
              countProducts={countProducts}
              setCountProducts={setCountProducts}
              
            /></Nav.Link> 
           
            
                    
        </Nav>
      </Navbar.Collapse>
      
    </Container>
  </Navbar>
  )
}

export default Navigation