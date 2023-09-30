import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import RecoverPasswordPage from './pages/RecoverPasswordPage'
import ProductList from "./components/ProductList"
import DetailPage from './pages/detailPage'
import Navigation from './components/Navigation'
import Admin from './pages/Admin'

function App() {


  return (
    <>
    <Navigation/>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/registro' element={<RegisterPage />} />
        <Route path='/repassword' element={<RecoverPasswordPage />} />
        <Route path='/producto/:id' element={<DetailPage />} />
        <Route path='/productos'element={<ProductList/>}/>
        <Route path='/admin' element={ <Admin />} />
      </Routes>

    </>
  )
}

export default App
