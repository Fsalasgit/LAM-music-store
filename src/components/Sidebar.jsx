import React, {useState} from 'react'
import SelectOrder from './PagesComponents/SelectOrder'
import Categories from './PagesComponents/Categories'
import RangePriceImput from './PagesComponents/RangePriceImput'
import Container from 'react-bootstrap/Container';


const Sidebar = ({ onOrderChange, onCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);


  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    console.log(category)
  };

  return (
    <>
      <Container className='aside'>

        <div>seccion de filtros</div>
        <SelectOrder onOrderChange={onOrderChange}/>
        <Categories onCategoryClick={handleCategoryClick}/>
        <RangePriceImput />
      </Container>
        
    </>
  )
}

export default Sidebar