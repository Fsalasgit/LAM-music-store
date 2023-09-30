import * as yup from "yup"

export const REGISTRO_SCHEMA = yup.object({
    username: yup
        .string()
        .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            "Ingresa una dirección de correo electrónico válida"
        )
        .max(25, "El correo electrónico debe tener como máximo 25 caracteres")
        .required("El correo electrónico es requerido"),
    name: yup.string().required("El nombre completo es requerido").max(25, "El maximo son 25 caracteres").min(5, "El minimo son 5 caracteres"),
    password: yup
        .string()
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,20}$/,
            "Ingresa una constraseña válida"
        )
        .min(8, "La contraseña debe tener al menos 8 caracteres")
        .max(20, "La contraseña debe tener como máximo 20 caracteres")
        .required("La contraseña es obligatoria")

})

export const LOGIN_SCHEMA = yup.object({
    username: yup
        .string()
        .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            "Ingresa una dirección de correo electrónico válida"
        )
        .required("El correo electrónico es requerido"),
    password: yup
        .string()
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,20}$/,
            "Ingresa una constraseña válida"
        )
        .required("La contraseña es obligatoria"),
})

export const RECOVERPASSWORD_SCHEMA = yup.object({
    username: yup.string().required("El email es requerido")
        .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            "Ingresa una dirección de correo electrónico válida"
        )
        .required("El email es requerido")
})