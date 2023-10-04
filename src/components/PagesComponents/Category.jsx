import React from 'react'

const Category = ({category, onCategoryClick }) => {
  const handleCategoryClick = () => {
    onCategoryClick(category.name);
  };

  return (
    <li className='categoryList' onClick={handleCategoryClick}>
      {category.name}
      </li>
  )
}

export default Category