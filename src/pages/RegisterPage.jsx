import React from "react";
import Register from "../components/Register";
import { FcGoogle } from 'react-icons/fc';
import { BsApple, BsFacebook } from 'react-icons/Bs';
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <>
      <div className="container-form sign-up">
        <form className="formulario-registro">
          <h2 className="create-account">Crear una cuenta</h2>
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
          <Register />
          <span className="enlace">
            ¿Ya tienes una cuenta? <Link to="/login">Iniciar Sesión</Link>
          </span>
        </form>
      </div>
    </>
  );
};

export default RegisterPage;
