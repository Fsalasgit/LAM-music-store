import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import RecoverPasswordPage from './pages/RecoverPasswordPage'
import ProductList from "./components/ProductList"





function App() {


  return (
    <>


      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/registro' element={<RegisterPage />} />
        <Route path='/repassword' element={<RecoverPasswordPage />} />
        <Route path='/productos'element={<ProductList/>}/>
      </Routes>


    </>
  )
}

export default App
