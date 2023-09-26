import React from "react";
import RecoverPassword from "../components/RecoverPassword";
import { Link } from "react-router-dom";

const RecoverPasswordPage = () => {
  return (
    <>
      <div className="container-form">
        <form className="formulario-registro">
          <RecoverPassword />
        </form>
      </div>
    </>
  );
};

export default RecoverPasswordPage;
