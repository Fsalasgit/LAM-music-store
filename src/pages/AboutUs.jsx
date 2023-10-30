import React from "react";
import { PiNumberCircleOneFill } from "react-icons/pi";
import { PiNumberCircleTwoFill } from "react-icons/pi";
import { PiNumberCircleThreeFill } from "react-icons/pi";

const AboutUs = () => {
  return (
    <>
      <div className="container-fluid pb-5 aboutUs">
        <div className="pb-5" id="Nosotros">
          <div className="row">
            <div className="col-12 mt-5">
              <h3 className="titleText2">Acerca de Nosotros</h3>
            </div>
          </div>
          <hr />
          <div className="row mt-5 mb-5">
            <div className="col-lg-6 col-md-12 order-1 order-lg-0">
              <img src="https://www.educaciontrespuntocero.com/wp-content/uploads/2019/01/soft-skills-trabajo-en-equipo-educacion.jpg.webp" alt="" className="rounded img-fluid" />
            </div>
            <div className="col-lg-6 col-md-12 order-0 order-lg-1 d-flex flex-column justify-content-start">
              <h2>LAM Music Store.</h2>
                <p>Es una aplicación web desarrollada utilizando React, un framework popular de JavaScript, y algunas librerías clave para la interfaz de usuario. La plataforma ofrece una amplia gama de instrumentos musicales para músicos de todos los niveles y gustos. Este proyecto utiliza React Bootstrap y Bootstrap para la interfaz, React Hook Form para el manejo de formularios y React Icons para la integración de íconos. Además, se utiliza Sass como preprocesador de CSS para una gestión eficiente del estilo.</p>
            </div>
          </div>
          
          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="row mt-5">
                <h2 className="text-center mb-5">Nuestra Misión</h2>
                <div>
                  <p>En LAM Music Store, nuestra misión es simple pero poderosa: inspirar y capacitar a músicos de todas las edades y niveles. Creemos en el poder transformador de la música y estamos aquí para proporcionarte las herramientas necesarias para que explores tu creatividad, alcances tus metas musicales y te sumerjas en un viaje musical inolvidable.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row mb-3 mt-5">
                <h2 className="text-center">¿Qué Ofrecemos?</h2>
              </div>
              <div className="row">
                <div className="col-1 text-end aboutUs__icono-numero">
                  <PiNumberCircleOneFill />
                </div>
                <div className="col-11 pt-4">
                  <h4>Instrumentos de Calidad</h4>
                  <p className="mb-1">Amplia selección de instrumentos de alta calidad.</p>
                </div>
              </div>
              <div className="row">
                <div className="col-1 text-end aboutUs__icono-numero">
                  <PiNumberCircleTwoFill />
                </div>
                <div className="col-11 pt-4">
                  <h4>Accesorios y Equipos</h4>
                  <p className="mb-1 ">Variados accesorios y equipos de sonido de última generación.</p>
                </div>
              </div>
              <div className="row">
                <div className="col-1 text-end aboutUs__icono-numero">
                  <PiNumberCircleThreeFill />
                </div>
                <div className="col-11 pt-4">
                  <h4>Asesoramiento Personalizado</h4>
                  <p className="mb-1">Equipo de expertos para ayudarte a elegir instrumentos y equipos.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="row mt-5">
                <h2 className="text-center mb-5">Únete a Nuestra Familia Musical</h2>
                <div>
                  <p>Ya sea que estés comenzando tu viaje musical o seas un músico experimentado, LAM Music Store te da la bienvenida con los brazos abiertos. Estamos comprometidos a ser tu socio musical de confianza y esperamos ser parte de tu historia musical.</p>
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-12 text-center">
                <h2 className="mt-5 mb-5">Conoce Nuestro Equipo</h2>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-4 text-center">
                <img src="https://i.imgur.com/dnXXtCX.jpg" alt="" className="aboutUs__avatar-nosotros" />
                <div className="row mt-4">
                  <div className="col-12">
                    <h2 className="mb-3">Franco Salas</h2>
                    <span className="badge aboutUs__colorBadge mb-3">Especialista en Instrumentos</span> 
                    <p>
                      Con más de 10 años de experiencia en instrumentos musicales y conocimientos profundos en este campo, Franco está aquí para ayudarte a encontrar el instrumento perfecto para tu música.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 text-center">
                <img src="https://i.imgur.com/eaekQY7.png" alt="" className="aboutUs__avatar-nosotros" />
                <div className="row mt-4">
                  <div className="col-12">
                    <h2 className="mb-3">Lorenzo Albornoz</h2>
                    <span className="badge aboutUs__colorBadge  mb-3">Gerente de Ventas</span> 
                    <p>
                      Con una gran pasión por la música y una sólida experiencia en ventas, Lorenzo lidera nuestro equipo de ventas para brindarte la mejor atención y asesoramiento en tus compras musicales.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 text-center">
                <img src="https://i.imgur.com/zR3WSTv.jpg" alt="" className="aboutUs__avatar-nosotros" />
                <div className="row mt-4">
                  <div className="col-12">
                    <h2 className="mb-3">Bruno Busnelli</h2>
                    <span className="badge aboutUs__colorBadge mb-3">Especialista en Sonido</span> 
                    <p>
                      Con una amplia experiencia en equipos de sonido y grabación, Bruno está aquí para ayudarte a mejorar tu experiencia musical con los mejores equipos de sonido y accesorios.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;