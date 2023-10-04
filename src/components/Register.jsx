import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { REGISTRO_SCHEMA } from "../helpers/validationsSchemas";
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from "../config/axiosInstance";

const Register = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(REGISTRO_SCHEMA)
  });

  const navigate= useNavigate()

  const onSubmit = async (data) => {
    console.log(data);
    try {
   await axiosInstance.post("/register", data)
      // console.log(response.data.token)
      //  localStorage.setItem("token", response.data.token)
      navigate("/login")
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            name="username"
            placeholder="Email"
            className="register__input"
            {...register("username")}
          />
          {errors.username && (
            <p className="register__error-message">{errors.username.message}</p>
          )}
        </div>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            className="register__input"
            {...register("name")}
          />
          {errors.name && (
            <p className="register__error-message">{errors.name.message}</p>
          )}
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            className="register__input"
            {...register("password")}
          />
          {errors.password && (
            <p className="register__error-message">{errors.password.message}</p>
          )}
        </div>
        <p className="register__description"> Tu contraseña debe tener al menos una mayúscula, una minúscula, un número y 8 caracteres como mínimo y 20 como máximo </p>
        <button type="submit" className="register__button">Registrarse</button>

      </form>
    </div>
  );
};

export default Register;

