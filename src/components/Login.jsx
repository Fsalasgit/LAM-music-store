import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LOGIN_SCHEMA } from "../helpers/validationsSchemas";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(LOGIN_SCHEMA),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  console.log(errors);

  return (
    <div className="login">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            name="username"
            placeholder="Email"
            className="login__input"
            {...register("username")}
          />
          {errors.username && (
            <p className="register__error-message">{errors.username.message}</p>
          )}
        </div>
        <div>
          <input
            type="password"
            name="password"
            className="login__input"
            placeholder="Contraseña"
            {...register("password")}
          />
          {errors.password && (
            <p className="register__error-message">{errors.password.message}</p>
          )}
        </div>
        <div className="login__enlace">
          <span>
            <Link to="/repassword" className="login__link">
              {" "}
              ¿Olvidaste tu contraseña?
            </Link>
          </span>
        </div>
        <button type="submit" className="login__button">
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
