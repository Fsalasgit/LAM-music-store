import React from "react";
import Register from "../components/Register";
import { FcGoogle } from 'react-icons/fc';
import { BsApple, BsFacebook } from 'react-icons/Bs';
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <>
      <div className="register-container">
        <div className="registerPage">
          <div className="registerPage__form">
            <h2 className="registerPage__createAccount">Crear una cuenta</h2>
            <div className="registerPage__iconos">
              <div className="registerPage__borderIcon">
                <Link to="/error404"><BsFacebook className="registerPage__facebook" /></Link>
              </div>
              <div className="registerPage__borderIcon">
                <Link to="/error404"><FcGoogle /></Link>
              </div>
              <div className="registerPage__borderIcon">
                <Link to="/error404"><BsApple className="registerPage__apple" /></Link>
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
      </div>
    </>
  );
};

export default RegisterPage;
