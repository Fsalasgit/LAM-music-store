import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LOGIN_SCHEMA } from "../helpers/validationsSchemas";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from "../config/axiosInstance";
import jwt_decode from 'jwt-decode';
import Swal from "sweetalert2";


const Login = () => {
  const [userNotFound, setUserNotFound] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(LOGIN_SCHEMA),
  });
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axiosInstance.post("/login", data);
      const token = response.data.token;
      localStorage.setItem("token", token);

      const decodedToken = jwt_decode(token);
      const userRole = decodedToken.rol;
      console.log("response", response)
      if (userRole === 'admin') {
        navigate('/admin');
      } else if (userRole === 'user') {
        navigate('/');
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 404) {
        setUserNotFound(true);
        Swal.fire({
          icon: "error",
          title: "Usuario no registrado",
          text: "El usuario ingresado no está registrado",
        });
      }
    }
  };

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
