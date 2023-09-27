import React from "react";
import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { REGISTRO_SCHEMA } from "../helpers/validationsSchemas";
import { Link, useNavigate } from 'react-router-dom';
import { axiosInstance } from '../config/axiosInstance';

const Register = () => {
  const {
    register, handleSubmit, formState: { errors }, reset } = useForm(
  //     {
  //   resolver: yupResolver(REGISTRO_SCHEMA),
  // }
  );

  const navigate= useNavigate()

  const onSubmit = async (data) => {
    console.log(data)
    try {
      const response = await axiosInstance.post("/register", data)
      // guardamos el token en localstorage
      localStorage.setItem("token", response.data.token)
      navigate("/admin")
      alert("El formulario se ha enviado")
    reset()
    } catch (error) {
      console.log(error);
    }
  }

  // const onSubmit = (data) => {
  //   console.log(data);
    
  // };
  // console.log(errors)

  const handlePaste = (e) => {
    e.preventDefault()
  }

  return (
    <div className="register">
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          type="usuario"
          name="correo"
          placeholder="Email"
          className="register__input"
          {...register("username")}
        //   value={formValues.usuario}
        //   onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="name"
          name="name"
          placeholder="Nombre"
          className="register__input"
          {...register("name")}
        //   value={formValues.usuario}
        //   onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="Contraseña" 
          className="register__input"
          {...register("password")}
        //   value={formValues.password}
        //   onChange={handleChange}
        />
      </div>
        <p className="register__description"> Tu contraseña debe tener al menos una mayúscula, una minúscula, un número y 8 caracteres como mínimo y 10 como máximo </p>
        <button type="submit" className="register__button">Registrarse</button>

    </form>
    </div>
  );
};

export default Register;
