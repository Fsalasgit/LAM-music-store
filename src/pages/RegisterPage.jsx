import React from "react";
import Register from "../components/Register";
import { FcGoogle } from 'react-icons/fc';
import { BsApple, BsFacebook } from 'react-icons/Bs';
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <>
        <div className="registerPage">
          <div className="registerPage__form">
            <h2 className="registerPage__createAccount">Crear una cuenta</h2>
            <div className="registerPage__iconos">
              <div className="registerPage__borderIcon">
                <a href="./html/error404.html"><BsFacebook className="registerPage__facebook " /></a>
              </div>
              <div className="registerPage__borderIcon">
                <a href="./html/error404.html"><FcGoogle /></a>
              </div>

              <div className="registerPage__borderIcon">
                <a href="./html/error404.html"><BsApple className="registerPage__apple" /></a>
              </div>
            </div>
            <Register />
            <div className="registerPage__enlace">
              <span >
                ¿Ya tienes una cuenta? <Link to="/login" className="registerPage__link">Iniciá Sesión</Link>
              </span>
            </div>
          </div>
        </div>
    </>
  );
};

export default RegisterPage;
