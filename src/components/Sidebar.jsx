import React, { useState, useEffect } from 'react';
import SelectOrder from './PagesComponents/SelectOrder';
import Categories from './PagesComponents/Categories';
import Container from 'react-bootstrap/Container';
import { axiosInstance } from '../config/axiosInstance';
import { IoIosClose } from 'react-icons/io';


const Sidebar = ({ onOrderChange, onCategorySelect,filteredCategory }) => {
  const [categories, setCategories] = useState([]);
 


  const loadCategories = async () => {
    try {
      const resp = await axiosInstance.get("/categories");
      setCategories(resp.data.categories);
    } catch (error) {
      console.log(error);
    }
  };


  const handleCategoryClick = () =>{
    onCategorySelect(null);
  }

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <>
      <Container className='aside'>
        {filteredCategory && <div className='filterInfo'>         
          {filteredCategory}
          <IoIosClose className='filterInfo__icon' onClick={handleCategoryClick}/>
        </div>}
        
        <SelectOrder onOrderChange={onOrderChange} />
        <Categories categories={categories} onCategorySelect={onCategorySelect} />
      </Container>
    </>
  );
};

export default Sidebar;


