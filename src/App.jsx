
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import RecoverPasswordPage from './pages/RecoverPasswordPage'
import ProductCard from "./components/ProductCard"
import ProductList from "./components/ProductList"
import PaginaDetalle from './pages/PaginaDetalle/PaginaDetalle'



function App() {


  return (
    <>

      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/registro' element={<RegisterPage />} />
        <Route path='/repassword' element={<RecoverPasswordPage />} />
        <Route path='/detalle' element={<PaginaDetalle />} />
      </Routes>

    </>
  )
}

export default App
