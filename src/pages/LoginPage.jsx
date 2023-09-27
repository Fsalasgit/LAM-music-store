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
              <a href="./html/error404.html"><BsFacebook className="facebook " /></a>
            </div>
            <div className="border-icon">
              <a href="./html/error404.html"><FcGoogle /></a>
            </div>

            <div className="border-icon">
              <a href="./html/error404.html"><BsApple className="apple" /></a>
            </div>
          </div>
          <Login />
          <div className="enlace">
            <span >
              ¿Aún no tienes una cuenta? <Link to="/registro" className="link">Registrate</Link>
            </span>
          </div>
        </form>
      </div>
    </>
  );
};


export default LoginPage;

