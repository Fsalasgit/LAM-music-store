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
        <>
            <div className="recoverPassword">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div >
                        <input
                            type="usuario"
                            name="correo"
                            placeholder="Email"
                            className="recoverPassword__input"
                            {...register("username")}
                        //   value={formValues.usuario}
                        //   onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="recoverPassword__button">Enviar</button>

                </form>
                <div className="recoverPassword__enlace">
                    <span>
                        <Link to="/login" className="recoverPassword__link">Volver</Link>
                    </span>
                </div>
            </div>
        </>
    );
};

export default RecoverPassword;
