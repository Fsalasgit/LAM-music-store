import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import RecoverPasswordPage from './pages/RecoverPasswordPage';
import DetailPage from './pages/DetailPage';
import Navigation from './components/Navigation';
import Admin from './pages/Admin';
import PrivateRoutes from './components/Routes/PrivateRoutes';
import Products from './pages/Products';
import Footer from './components/Footer';
import Home from './pages/Home';
import Favorite from './pages/Favorite';
import AboutUs from './pages/AboutUs';
import PaymentsPage from './pages/PaymentsPage';
import Error404 from './pages/Error404';


function App() {
  const location = useLocation();
  const allowedPaths = ['/', '/login', '/registro', '/repassword', '/productos', '/productos/:_id', '/favorite', '/nosotros', '/pagos', '/admin'];
  const shouldRenderFooterAndNavigation = allowedPaths.includes(location.pathname);

  return (
    <>
      {shouldRenderFooterAndNavigation && <Navigation />}
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/registro' element={<RegisterPage />} />
        <Route path='/repassword' element={<RecoverPasswordPage />} />
        <Route path='/productos/:_id' element={<DetailPage />} />
        <Route path='/productos' element={<Products />} />
        <Route path='/favorite' element={<Favorite />} />
        <Route path='/nosotros' element={<AboutUs />} />
        <Route path='/pagos' element={<PaymentsPage />} />
        <Route path='/error404' element={<Error404 />} />

        <Route path='*' element={<Error404/>} />
        
        <Route element={<PrivateRoutes />}>
          <Route path='/admin' element={<Admin />} />
        </Route>
      </Routes>
      
     
      {shouldRenderFooterAndNavigation && <Footer />}
    </>
  );
}

export default App;
