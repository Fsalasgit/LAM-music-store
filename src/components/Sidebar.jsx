import React, { useState, useEffect } from 'react';
import SelectOrder from './PagesComponents/SelectOrder';
import Categories from './PagesComponents/Categories';
import Container from 'react-bootstrap/Container';
import { axiosInstance } from '../config/axiosInstance';


const Sidebar = ({ onOrderChange, onCategorySelect }) => {
  const [categories, setCategories] = useState([]);

  const loadCategories = async () => {
    try {
      const resp = await axiosInstance.get("/categories");
      setCategories(resp.data.categories);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <>
      <Container className='aside'>
        <div>seccion de filtros</div>
        <SelectOrder onOrderChange={onOrderChange} />
        <Categories categories={categories} onCategorySelect={onCategorySelect} />
      </Container>
    </>
  );
};

export default Sidebar;


