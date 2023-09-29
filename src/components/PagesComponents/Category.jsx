import React from 'react'

const Category = ({category}) => {

  return (
    <li className='categoryList'>{category.category}</li>
  )
}

export default Category