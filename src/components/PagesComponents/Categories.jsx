import React, {useEffect,useState} from 'react'
import Category from './Category.jsx';


const Categories = ({ categories, onCategorySelect }) => {
  const handleCategoryClick = (category) => {
    onCategorySelect(category);
  };

  return (
    <>
      <p className='titleCategories'>Categorias</p>
      <ul className='categoryContainer'>
        {categories.map((category) => (
          <Category
            category={category}
            key={category.id}
            onCategoryClick={() => handleCategoryClick(category.name)}
          />
        ))}
      </ul>
    </>
  );
};

export default Categories;


