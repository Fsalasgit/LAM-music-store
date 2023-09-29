import * as yup from "yup"

export const REGISTRO_SCHEMA = yup.object({
    username: yup
        .string()
        .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            "Debe ser una dirección de correo electrónico válida"
        )
        .max(25, "El correo electrónico debe tener como máximo 25 caracteres")
        .required("El correo electrónico es requerido"),
    name: yup.string().max(25, "El maximo son 25 caracteres").min(5, "El minimo son 5 caracteres").required("El nombre completo es requerido"),
    password: yup
        .string()
        .min(8, "La contraseña debe tener al menos 8 caracteres")
        .max(20, "La contraseña debe tener como máximo 20 caracteres")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,10}$/,
            "La contraseña debe contener al menos una mayúscula, una minúscula, un número y tener entre 8 y 10 caracteres"
        )
        .required("La contraseña es obligatoria")
})

export const LOGIN_SCHEMA = yup.object({
    username: yup.string().required("El email es requerido"),
    password: yup.string().required("La contraseña es obligatoria"),
})

export const RECOVERPASSWORD_SCHEMA = yup.object({
    username: yup.string().required("El email es requerido")
    .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        "Debe ser una dirección de correo electrónico válida"
    )
    .required("El email es requerido")
})