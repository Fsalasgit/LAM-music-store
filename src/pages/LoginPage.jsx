import React from "react";
import Login from "../components/Login";
import { FcGoogle } from 'react-icons/fc';
import { BsApple, BsFacebook } from 'react-icons/Bs';
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
    <div className="login-container">
      <div className="loginPage">
        <div className="loginPage__form">
          <h2 className="loginPage__createAccount">Iniciar Sesión</h2>
          <div className="loginPage__iconos">
            <div className="loginPage__borderIcon">
              <a href="/error404"><BsFacebook className="loginPage__facebook " /></a>
            </div>
            <div className="loginPage__borderIcon">
              <a href="/error404"><FcGoogle /></a>
            </div>
            <div className="loginPage__borderIcon">
              <a href="/error404"><BsApple className="loginPage__apple" /></a>
            </div>
          </div>
          <Login />
          <div className="loginPage__enlace">
            <span >
              ¿Aún no tienes una cuenta? <Link to="/registro" className="loginPage__link">Registrate</Link>
            </span>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};


export default LoginPage;

