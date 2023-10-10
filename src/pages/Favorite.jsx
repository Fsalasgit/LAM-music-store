import React, {useState} from 'react'
import FavoriteList from '../components/FavoriteList'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import WhatsappLink from '../components/WhatsappLink';

const Favorite = () => {
    const [cartProducts, setCartProducts] = useState([]);
  
  return (
    <>

    <Container className='container'>
        <Row className="row">
            <Col >
            <FavoriteList
              setCartProducts={setCartProducts}
              cartProducts={cartProducts}
            />
            </Col>
        </Row>
    </Container>
    <WhatsappLink/>
    </>
  )
}

export default Favorite