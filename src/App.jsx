import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import RecoverPasswordPage from './pages/RecoverPasswordPage'
import DetailPage from './pages/DetailPage'
import Navigation from './components/Navigation'
import Admin from './pages/Admin'
import PrivateRoutes from './components/Routes/PrivateRoutes'
import Products from './pages/Products'
import Footer from './components/Footer'
import Home from './pages/Home'
import { Header } from './components/Cart/Header'

function App() {


  return (
    <>
    <Navigation/>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/registro' element={<RegisterPage />} />
        <Route path='/repassword' element={<RecoverPasswordPage />} />
        <Route path='/productos/:id' element={<DetailPage />} />
        <Route path='/productos'element={<Products/>}/>
        <Route path='productos/cart' element={<Header/>}/>
        
        <Route element={<PrivateRoutes/>}>
        <Route path='/admin' element={ <Admin />} />
        </Route>
      </Routes>
    < Footer />
    </>
  )
}

export default App
