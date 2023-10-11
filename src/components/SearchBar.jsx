import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { axiosInstance } from "../config/axiosInstance";
import { RiSearch2Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [allProducts, setAllProducts] = useState([]);

  const getProducts = async () => {
    try {
      const resp = await axiosInstance.get("/products");
      setAllProducts(resp.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const [selectedProductId, setSelectedProductId] = useState(null);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (selectedProductId) {
      // Redirige a la página de detalle del producto con el id como parámetro
      navigate(`/productos/${selectedProductId}`);
    }
  };

  return (
    <>
      <Stack spacing={2} sx={{ width: 300 }}>
        <Autocomplete
          freeSolo
          id="search"
          disableClearable
          options={allProducts.map((option) => option.title)}
          onChange={(event, newValue) => {
            const selectedProduct = allProducts.find(
              (product) => product.title === newValue
            );
            if (selectedProduct) {
              setSelectedProductId(selectedProduct._id);
            }
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Buscar productos"
              variant="filled"
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        />
      </Stack>
      <button className="btn btn-outline-warning" onClick={handleSearch}>
        <RiSearch2Line className="nav-header__search" />
      </button>
    </>
  );
};

export default SearchBar;
