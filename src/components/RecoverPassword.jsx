import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RECOVERPASSWORD_SCHEMA } from "../helpers/validationsSchemas";
import { Link } from 'react-router-dom';


const RecoverPassword = () => {
    const {
        register, handleSubmit, formState: { errors }, reset } = useForm(
                {
              resolver: yupResolver(RECOVERPASSWORD_SCHEMA),
            }
        );

    const onSubmit = (data) => {
        console.log(data)
        reset()
    }

    console.log(errors)

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
