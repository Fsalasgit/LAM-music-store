import React, {useEffect,useState} from 'react'
import Category from './Category.jsx';
import { axiosInstance } from '../../config/axiosInstance.js';

const Categories = ({onCategoryClick}) => {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [allCategory, setAllCategory] = useState([])
  const categories = allCategory

  const getCategory = async () => {
      try {
         const resp = await axiosInstance.get("/categories")
         console.log(resp.data)
      setAllCategory(resp.data.categories)
      } catch (error) {
        console.log(error)
      }
    }
    
    useEffect(() =>{
      getCategory()
    }, [])

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onCategoryClick(category)
  };

  return (
    <>
    <p className='titleCategories'>Categorias</p>
    <span>{selectedCategory}</span>
    <ul className='categoryContainer'>
  {categories.map((category) => (
    <Category
      category={category}
      key={category}
      onCategoryClick={handleCategoryClick}
    />
  ))
}
</ul>

    </>
  )
}

export default Categories

