import React from 'react'
import SelectOrder from './PagesComponents/SelectOrder'
import Categories from './PagesComponents/Categories'
import RangePriceImput from './PagesComponents/RangePriceImput'
import Container from 'react-bootstrap/Container';


const Sidebar = () => {
  return (
    <>
      <Container className='aside'>

        <div>seccion de filtros</div>
        <SelectOrder />
        <Categories />
        <RangePriceImput />
      </Container>
        
    </>
  )
}

export default Sidebar