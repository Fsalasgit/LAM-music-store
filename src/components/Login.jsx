import React from 'react'
import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { LOGIN_SCHEMA } from '../helpers/validationsSchemas';
import { Link, useNavigate } from 'react-router-dom';
import { axiosInstance } from '../config/axiosInstance';

const Login = () => {
  const {
    register, handleSubmit, formState: { errors }, reset } = useForm(
      // {
  //   resolver: yupResolver(LOGIN_SCHEMA),
  // }
  );
  const navigate= useNavigate()

  const onSubmit = async (data) => {
    console.log(data)
    try {
      const response = await axiosInstance.post("/login", data)
      // guardamos el token en localstorage
      localStorage.setItem("token", response.data.token)
      navigate("/admin")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="login">
    <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input 
          type="email" 
          name='username'
          placeholder="Email"
          className='login__input'
          {...register("username")}
        //   value={formValues.correo}
        //   onChange={handleChange}
          />
        </div>
        <div>
          <input 
          type="password" 
          name='password'
          className='login__input'
          placeholder="Contraseña"
          {...register("password")}
        //   value={formValues.password}
        //   onChange={handleChange}
          />
        </div>
        <div className="login__enlace">
        <span >
          <Link to="/repassword" className='login__link'> ¿Olvidaste tu contraseña?</Link>
          </span>
          </div>
        <button type="submit" className='login__button'>Entrar</button>
    </form>
    </div>
  )
}

export default Login