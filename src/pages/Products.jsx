import React, {useState} from 'react'
import ProductList from '../components/ProductList'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from '../components/Sidebar';


const Products = () => {
  const [selectedOrder, setSelectedOrder] = useState('1');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleOrderChange = (selectedValue) => {
    setSelectedOrder(selectedValue);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  console.log(selectedCategory)
  return (
    <>
    <Container className='container'>
        <Row className="row">
            <Col>
              <Sidebar onOrderChange={handleOrderChange} onCategoryChange={handleCategoryChange} />


            </Col>
            <Col xs={9}>
              <ProductList selectedOrder={selectedOrder} selectedCategory={selectedCategory} />
                

            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Products