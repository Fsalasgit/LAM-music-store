import React from "react";
import RecoverPassword from "../components/RecoverPassword";

const RecoverPasswordPage = () => {
  return (
    <>
    <div>
      <div className="recoverPasswordPage">
        <form className="recoverPasswordPage__form">
        <h2 className="recoverPasswordPage__createAccount">Recuperar contraseña</h2>
            <p className="recoverPasswordPage__description"> Ingresá el correo electrónico con el que te registraste y te enviaremos instrucciones para restablecer tu contraseña. </p>
          <RecoverPassword />
        </form>
      </div>
      </div>
    </>
  );
};

export default RecoverPasswordPage;
