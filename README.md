# LAM Music Store

LAM Music Store es una aplicación web desarrollada utilizando React, un framework popular de JavaScript, y algunas librerías clave para la interfaz de usuario. La plataforma ofrece una amplia gama de instrumentos musicales para músicos de todos los niveles y gustos. Este proyecto utiliza React Bootstrap y Bootstrap para la interfaz, React Hook Form para el manejo de formularios y React Icons para la integración de íconos. Además, se utiliza Sass como preprocesador de CSS para una gestión eficiente del estilo.

## Integrantes del Equipo
- Bruno Busnelli
- Lorenzo Albornoz
- Franco Salas

Instalación
Para comenzar a trabajar con este proyecto en tu entorno local, sigue estos pasos:

Clona el repositorio desde GitHub:

git clone https://github.com/Fsalasgit/LAM-music-store.git
cd lam-music-store
Instala las dependencias usando npm:
npm install
Este comando instalará todas las dependencias necesarias para ejecutar la aplicación.

## Inicia la aplicación:

npm run dev
La aplicación se iniciará en tu navegador predeterminado en la dirección http://localhost:3000.

Tecnologías Utilizadas
React: Framework de JavaScript para la construcción de interfaces de usuario interactivas y dinámicas.
React Bootstrap y Bootstrap: Utilizados para diseñar y desarrollar componentes de interfaz de usuario con un estilo moderno y responsivo.
React Hook Form: Librería para el manejo de formularios en React, facilitando la validación y gestión de datos del usuario.
React Icons: Librería que proporciona una amplia gama de iconos para mejorar la interfaz de usuario.
Sass: Preprocesador CSS que permite escribir estilos más estructurados y reutilizables.
Contribución
Si deseas contribuir al desarrollo de LAM Music Store, por favor sigue estos pasos:

Crea un fork del repositorio en GitHub.
Clona tu fork localmente: git clone https://github.com/Fsalasgit/lam-music-store.git
Crea una nueva rama para tu contribución: git checkout -b mi-contribucion
Realiza los cambios y mejoras deseadas.
Haz commit de tus cambios: git commit -m "Agregado: mi contribución"
Haz push de la rama: git push origin mi-contribucion
Crea un pull request en GitHub.
Agradecemos tus contribuciones para mejorar este proyecto y hacerlo aún mejor.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Login, register y recoverPassword

Registro de Usuarios
Los usuarios tienen la capacidad de crear una cuenta proporcionando su nombre, correo electrónico y contraseña. Se aplican validaciones para asegurar que todos los campos estén completos y que el correo electrónico y la contraseña cumplan con los requisitos específicos de seguridad.

Inicio de Sesión
Los usuarios pueden iniciar sesión en la plataforma ingresando su correo electrónico y contraseña. El sistema verifica que la combinación de correo electrónico y contraseña coincida con los datos almacenados en el sistema antes de permitir el acceso.

Interfaz Interactiva
La interfaz de usuario es altamente interactiva y presenta botones que permiten a los usuarios alternar fácilmente entre la pantalla de inicio de sesión y la de registro. Si un usuario no tiene cuenta, puede hacer clic en el botón "Registrarse" para crear una cuenta. Si un usuario ya tiene una cuenta pero olvidó la contraseña, puede hacer clic en el botón "Recuperar Contraseña" en la página de inicio de sesión para iniciar el proceso de recuperación.

Mensajes de Confirmación
Para mejorar la experiencia del usuario, se utilizan mensajes de SweetAlert para mostrar confirmaciones al realizar acciones importantes, como el registro exitoso o el cierre de sesión. Esto proporciona retroalimentación visual y asegura que los usuarios estén al tanto de las acciones realizadas.

Administración de Usuarios
Se lleva a cabo una verificación para determinar si el usuario está autenticado y, en caso de ser un administrador, se le otorgan funcionalidades adicionales dentro de la plataforma. Esto permite la gestión eficiente de los roles y permisos de los usuarios.

Validación de Datos
Además, se han implementado esquemas de validación utilizando la librería 'yup' para garantizar que los datos ingresados cumplan con los criterios específicos de formato y seguridad.

Esquema de Registro de Usuarios (REGISTRO_SCHEMA)
Este esquema asegura que el correo electrónico sea válido, el nombre esté completo y dentro de los límites de caracteres, y la contraseña cumpla con los criterios de seguridad.

Esquema de Inicio de Sesión de Usuarios (LOGIN_SCHEMA)
Este esquema valida el correo electrónico y garantiza que la contraseña cumpla con los criterios de seguridad.

Esquema de Recuperación de Contraseña (RECOVERPASSWORD_SCHEMA)
Este esquema verifica que se proporcione un correo electrónico válido para la recuperación de contraseña.

Comandos de Instalación

Para instalar las dependencias necesarias para este módulo, ejecuta los siguientes comandos en el directorio correspondiente de tu proyecto:

npm install sweetalert
npm install yup

## Crud de administracion

Uso de react-data-table-component
Tablas de Administración
Se han implementado tablas tanto para la administración de usuarios como de productos. Estas tablas ofrecen una vista organizada y filtrable de los datos esenciales, facilitando la gestión y supervisión de usuarios y productos en la aplicación.

Adaptación a Dispositivos Pequeños
Se ha implementado una funcionalidad que oculta algunos componentes en dispositivos más pequeños para mejorar la experiencia del usuario. Esto incluye la ocultación de elementos como la descripción y la imagen del producto en tablas de productos en dispositivos móviles.

Uso de react-bootstrap/modal
Formularios para Editar y Agregar Productos
Se han creado formularios que permiten a los administradores editar información existente de productos y agregar nuevos productos a la aplicación.

Funciones de Administración
Editar Productos: Los administradores pueden editar la información detallada de los productos directamente desde los formularios modales, lo que incluye ajustar el precio, actualizar el stock, modificar la descripción y más. Esto se realiza de manera eficiente a través de las tablas de administración de productos.

Crear Nuevos Productos: Los administradores pueden agregar nuevos productos al catálogo con los formularios modales diseñados para la inserción de datos. Esto facilita la expansión y actualización del inventario de productos en la tienda.

Eliminar Productos: Los administradores pueden eliminar productos directamente desde la tabla de administración de productos, eliminando el registro correspondiente.

Editar el Rol del Usuario: Los administradores también pueden modificar el rol de los usuarios en el sistema. Esto proporciona una manera sencilla de cambiar el estado de un usuario de "usuario" a "administrador" y viceversa.

Eliminar Usuarios: La eliminación de usuarios del sistema se realiza mediante la administración de usuarios en tablas. Los administradores pueden seleccionar y eliminar usuarios según sea necesario, lo que es fundamental para mantener una base de datos de usuarios actualizada y ordenada.

Comandos de Instalación
Para instalar las dependencias necesarias para este módulo, ejecuta los siguientes comandos en el directorio correspondiente de tu proyecto:

npm install react-data-table-component
npm install react-bootstrap modal

## Union del Front-end con el Back-end

Instalación e Importación de Axios
Para realizar solicitudes HTTP en la aplicación, utilizamos la librería Axios. Además, configuramos la URL base por defecto para las solicitudes HTTP.

npm install axios

Uso de useForm de React Hook Form
El formulario en el frontend se gestiona con React Hook Form, utilizando la función useForm. Esto nos permite controlar y gestionar el estado del formulario, y proporciona funciones útiles como register y handleSubmit.

npm install react-hook-form

Almacenamiento de Tokens JWT
El token JWT se almacena en el almacenamiento local del navegador del usuario para mantenerlo autenticado en sesiones posteriores.

Decodificación de Tokens JWT
Para acceder a la información contenida en el token JWT, como el rol del usuario (userRole), utilizamos la función jwt_decode.

npm install jwt-decode

Redirección basada en el Rol del Usuario
Basado en el rol del usuario extraído del token JWT, utilizamos la función navigate de React Router para redirigir al usuario a diferentes rutas dentro de la aplicación. Si el usuario es un administrador, se redirige a '/admin', y si es un usuario regular, se redirige a '/product'.

Protección de Rutas con React Router
En el frontend, utilizamos las bibliotecas react-router-dom, navigate, y outlet para proteger rutas y gestionar la navegación de la aplicación.