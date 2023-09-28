
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import RecoverPasswordPage from './pages/RecoverPasswordPage'
import ProductCard from "./components/ProductCard"
import ProductList from "./components/ProductList"
import DetailPage from './pages/detailPage'
import Navigation from './components/Navigation'

function App() {


  return (
    <>
    <Navigation/>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/registro' element={<RegisterPage />} />
        <Route path='/repassword' element={<RecoverPasswordPage />} />
        <Route path='/producto/:id' element={<DetailPage />} />
      </Routes>

    </>
  )
}

export default App
