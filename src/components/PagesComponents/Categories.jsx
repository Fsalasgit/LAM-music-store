import React from 'react'
import {categories} from '../../helpers/products.js';
import Category from './Category.jsx';

const Categories = () => {

  return (
    <>
    <p className='titleCategories'>Categorias</p>
    <ul className='categoryContainer'>

      {
        categories.map((category) => (     

          <Category  category={category} key={category.id} />            
            
        ))
      }
    </ul>

    </>
  )
}

export default Categories