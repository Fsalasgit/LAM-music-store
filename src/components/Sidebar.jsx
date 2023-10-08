import React from 'react'
import SelectOrder from './PagesComponents/SelectOrder'
import Categories from './PagesComponents/Categories'
import Container from 'react-bootstrap/Container';


const Sidebar = ({ onOrderChange }) => {


  return (
    <>
      <Container className='aside'>

        <div>seccion de filtros</div>
        <SelectOrder onOrderChange={onOrderChange}/>
        <Categories />
 
      </Container>
        
    </>
  )
}

export default Sidebar