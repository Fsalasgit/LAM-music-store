import React from 'react'

const Category = ({category, onCategoryClick }) => {
  const handleCategoryClick = () => {
    onCategoryClick(category.category);
  };

  return (
    <li className='categoryList' onClick={handleCategoryClick}>
      {category.category}
      </li>
  )
}

export default Category