import React, {useState, useEffect} from 'react'
import FavoriteList from '../components/FavoriteList'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import WhatsappLink from '../components/WhatsappLink';
import { axiosInstance } from '../config/axiosInstance';
import jwt_decode from 'jwt-decode';

const Favorite = () => {
    const [cartProducts, setCartProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]);

  const getFavorite = async () => {
    try {
      const token = localStorage.getItem("token");
      const decodedToken = jwt_decode(token);
      const userId = decodedToken.sub;
      const resp = await axiosInstance.get(`/favorite/${userId}`);
      setAllProducts(resp.data.favoriteProducts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFavorite();
  }, []);
  return (
    <>

    <Container className='container'>
        <Row className="row">
            <Col >
            <FavoriteList
              setCartProducts={setCartProducts}
              cartProducts={cartProducts}
              allProducts={allProducts}
            />
            </Col>
        </Row>
    </Container>
    <WhatsappLink/>
    </>
  )
}

export default Favorite