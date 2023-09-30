import React, {useState} from 'react'
import {categories} from '../../helpers/products.js';
import Category from './Category.jsx';

const Categories = ({onCategoryClick}) => {
  const [selectedCategory, setSelectedCategory] = useState(null)

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onCategoryClick(category)
  };

  return (
    <>
    <p className='titleCategories'>Categorias</p>
    <span>{selectedCategory}</span>
    <ul className='categoryContainer'>

      {
        categories.map((category) => (     

          <Category  category={category} key={category.id} onCategoryClick={handleCategoryClick}/>            
            
        ))
      }
    </ul>

    </>
  )
}

export default Categories