import React from "react";
import Login from "../components/Login";
import { FcGoogle } from 'react-icons/fc';
import { BsApple, BsFacebook } from 'react-icons/Bs';
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
    <div className="container-form">
    <form className="formulario-login">
      <h2 className="create-account">Iniciar Sesión</h2>
      <div className="iconos">
            <div className="border-icon">
              <a href="./html/error404.html"><BsFacebook className="bx bxl-facebook-circle" /></a>
            </div>
            <div className="border-icon">
              <a href="./html/error404.html"><FcGoogle className="bx bxl-instagram" /></a>
            </div>

            <div className="border-icon">
              <a href="./html/error404.html"><BsApple className="bx bxl-facebook-circle" /></a>
            </div>
          </div>
          <Login/>
          <span className="enlace">
            ¿Aun no tienes una cuenta? <Link to="/registro">Registrarse</Link>
          </span>
    </form>
  </div>
  </>
    );
  };


export default LoginPage;

