import React from "react";
import Register from "../components/Register";
import { FcGoogle } from 'react-icons/fc';
import { BsApple, BsFacebook } from 'react-icons/Bs';
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <>
      <div className="container-form">
        <form className="formulario-registro">
          <h2 className="create-account">Crear una cuenta</h2>
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
          <Register />
          <div className="enlace">
          <span >
            ¿Ya tienes una cuenta? <Link to="/login" className="link">Iniciá Sesión</Link>
          </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterPage;
