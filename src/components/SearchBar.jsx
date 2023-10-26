import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { axiosInstance } from "../config/axiosInstance";
import { RiSearch2Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [searchOptions, setSearchOptions] = useState([]); // Opciones de búsqueda filtradas
  const [searchText, setSearchText] = useState(""); // Texto de búsqueda
  const navigate = useNavigate();

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

  const handleSearch = () => {
    if (searchText) {
      // Redirige a la página de detalle del producto con el texto de búsqueda como parámetro
      navigate(`/productos/${searchText}`);
    }
  };

  // Filtra las opciones de búsqueda cuando el usuario escribe
  useEffect(() => {
    if (searchText) {
      const filteredProducts = allProducts.filter((product) =>
        product.title.toLowerCase().includes(searchText.toLowerCase())
      );
      setSearchOptions(filteredProducts.map((product) => product.title));
    } else {
      setSearchOptions([]); // Vacía las opciones si no hay texto de búsqueda
    }
  }, [searchText, allProducts]);

  return (
    <>
      <Stack spacing={2} sx={{ width: 300 }}>
        <Autocomplete
          freeSolo
          id="search"
          disableClearable
          options={searchOptions}
          onInputChange={(event, newInputValue) => {
            setSearchText(newInputValue);
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
