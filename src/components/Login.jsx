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
      const response = await axiosInstance.post("/user/login", data)
      // guardamos el token en localstorage
      localStorage.setItem("token", response.data.token)
      navigate("/admin")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-group'>
          <input 
          type="email" 
          name='username'
          placeholder="Email"
          {...register("username")}
        //   value={formValues.correo}
        //   onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <input 
          type="password" 
          name='password'
          placeholder="Contraseña"
          {...register("password")}
        //   value={formValues.password}
        //   onChange={handleChange}
          />
        </div>
        <div>
        <span className="enlace">
          <Link to="/repassword" className='link'> ¿Olvidaste la contraseña?</Link>
          </span>
          </div>
        <button type="submit" className='btn btn-info btn-block w-100 mt-3'>Entrar</button>
    </form>
  )
}

export default Login