import React from "react";
import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { REGISTRO_SCHEMA } from "../helpers/validationsSchemas";
import { Link, useNavigate } from 'react-router-dom';
import { axiosInstance } from '../config/axiosInstance';

const RecoverPassword = () => {
    const {
        register, handleSubmit, formState: { errors }, reset } = useForm(
            //     {
            //   resolver: yupResolver(REGISTRO_SCHEMA),
            // }
        );

    const navigate = useNavigate()

    const onSubmit = async (data) => {
        console.log(data)
        try {
            const response = await axiosInstance.post("/user/register", data)
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

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <img className="img-repassword" src="../../public/apple-touch-icon.png" alt="" />
            <p className="enlace"> Ingresá el correo electrónico con el que te registraste y te enviaremos instrucciones para restablecer tu contraseña. </p>
            <div className="form-group mb/2">
                <input
                    type="usuario"
                    name="correo"
                    placeholder="Email"
                    {...register("username")}
                //   value={formValues.usuario}
                //   onChange={handleChange}
                />
            </div>
            <span className="error"></span>
            <button type="submit">Enviar</button>
            <button className="enlace-repassword">
          <Link to="/login">Volver</Link>
          </button>
        </form>
    );
};

export default RecoverPassword;
