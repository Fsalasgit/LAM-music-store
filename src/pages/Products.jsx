import React, {useState, useEffect} from 'react'
import ProductList from '../components/ProductList'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from '../components/Sidebar';
import WhatsappLink from '../components/WhatsappLink';




const Products = ({}) => {

  const [selectedOrder, setSelectedOrder] = useState('1');
  const [cartProducts, setCartProducts] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState(null);
  const [categories, setCategories] = useState([]);

  const handleOrderChange = (selectedValue) => {
    setSelectedOrder(selectedValue);
  };

  const handleCategorySelect = (category) => {
    setFilteredCategory(category);
  };

 
  return (
    <>

    <Container className='container'>
        <Row className="row">
            <Col xl={3}>
            <Sidebar onOrderChange={handleOrderChange} onCategorySelect={handleCategorySelect} filteredCategory={filteredCategory} />


            </Col>
            <Col >
            <ProductList
              selectedOrder={selectedOrder}
              setCartProducts={setCartProducts}
              cartProducts={cartProducts}
              filteredCategory={filteredCategory}
            />

            </Col>
        </Row>
    </Container>
    <WhatsappLink/>
    </>
  )
}

export default Products