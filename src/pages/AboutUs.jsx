import React from "react";
import ProgressBar1 from "../components/PagesComponents/ProgressBar1";
import ProgressBar2 from "../components/PagesComponents/ProgressBar2";
import ProgressBar3 from "../components/PagesComponents/ProgressBar3";
import ProgressBar4 from "../components/PagesComponents/ProgressBar4";
import { PiNumberCircleOneFill } from "react-icons/pi";
import { PiNumberCircleTwoFill } from "react-icons/pi";
import { PiNumberCircleThreeFill } from "react-icons/pi";


const AboutUs = () => {
  return (
    <>
      <div className="container-fluid pb-5 hero min-vh-100">
        <div className="container pb-5" id="Nosotros">
          <div className="row">
            <div className="col-12 mt-5">
              <h2>Acerca de nosotros</h2>
            </div>
          </div>
          <hr />
          <div className="row mt-5 mb-5">
            <div className="col-6">
              <img src="https://www.educaciontrespuntocero.com/wp-content/uploads/2019/01/soft-skills-trabajo-en-equipo-educacion.jpg.webp" alt=""className="rounded img-fluid about-img" />
            </div>
            <div className="col-6 d-flex flex-column justify-content-center">
              <h3>LAM Music Store.</h3>
              <p>LAM Music Store es una aplicación web desarrollada utilizando React, un framework popular de JavaScript, y algunas librerías clave para la interfaz de usuario. La plataforma ofrece una amplia gama de instrumentos musicales para músicos de todos los niveles y gustos. Este proyecto utiliza React Bootstrap y Bootstrap para la interfaz, React Hook Form para el manejo de formularios y React Icons para la integración de íconos. Además, se utiliza Sass como preprocesador de CSS para una gestión eficiente del estilo.</p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-4">
              <h2 className="text-center mt-5 mb-5">Nuestras Skills</h2>
              <div className="row mt-4">
                <div className="col-12 mt-4">
                  <ProgressBar1/>
                </div>
              </div>
              <div className="row mt-4">
              <div className="col-12">
                  <ProgressBar2/>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-12">
                  <ProgressBar3/>
                </div>
              </div>
              <div className="row mt-4 mb-5">
                <div className="col-12">
                  <ProgressBar4/>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row mt-5">
                <h2 className="text-center mb-5">Nuestras Experiencias</h2>
                <div className="ms-5">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro praesentium rerum quaerat?</p>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit atque dolores ea. Placeat, officiis quas.</p>
                <br />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque accusamus ipsa tempore deleniti consequatur, maiores quo inventore ab laudantium fugit!</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row mb-3 mt-5">
              <h2 className="text-center">Nuestros Trabajos</h2>
              </div>
              <div className="row">
                <div className="col-3 text-end icono-numero">
                <PiNumberCircleOneFill/>
                </div>
                <div className="col-9 pt-4">
                  <h4>Lorem ipsum</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, dicta.</p>
                </div>
              </div>
              <div className="row">
                <div className="col-3 text-end icono-numero">
                <PiNumberCircleTwoFill/>
                </div>
                <div className="col-9 pt-4">
                  <h4>Lorem ipsum</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, dicta.</p>
                </div>
              </div>
              <div className="row">
              <div className="col-3 text-end icono-numero">
                <PiNumberCircleThreeFill/>
                </div>
                <div className="col-9 pt-4">
                  <h4>Lorem ipsum</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, dicta.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12 text-center">
              <h2 className="mt-5 mb-5">Conoce nuestro equipo</h2>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-4 text-center">
              <img src="https://trello.com/1/cards/650dc4c9511651b0dba28b40/attachments/650dc62c76eb07e440b8072c/previews/650dc62c76eb07e440b81a15/download/fotoPerfil.jpg" alt="" className="avatar-nosotros" />
              <div className="row mt-4">
                <div className="col-12">
                  <h2 className="mb-5">Franco Salas</h2>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione cum exercitationem unde vel autem dolore nostrum perspiciatis at sunt fuga. Perferendis minima nemo modi totam sapiente debitis dolorum recusandae natus!</p>
                </div>
              </div>
            </div>
            <div className="col-4 text-center">
              <img src="https://trello.com/1/cards/650dc4c5f5767ac991e1ea24/attachments/650e2bab99a7d0c5f96c1d81/previews/650e2bad99a7d0c5f96c1fa8/download/avatarlorenzo.png" alt="" className="avatar-nosotros" />
              <div className="row mt-4">
                <div className="col-12">
                  <h2 className="mb-5">Lorenzo Albornoz</h2>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione cum exercitationem unde vel autem dolore nostrum perspiciatis at sunt fuga. Perferendis minima nemo modi totam sapiente debitis dolorum recusandae natus!</p>
                </div>
              </div>
            </div>
            <div className="col-4 text-center">
              <img src="https://trello.com/1/cards/650dc464bda0497805ac542c/attachments/6511fa83a113592c1e60bd5e/previews/6511fa84a113592c1e60be4b/download/IMG_7026_Original22.jpg" alt="" className="avatar-nosotros" />
              <div className="row mt-4">
                <div className="col-12">
                  <h2 className="mb-5">Bruno Busnelli</h2>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione cum exercitationem unde vel autem dolore nostrum perspiciatis at sunt fuga. Perferendis minima nemo modi totam sapiente debitis dolorum recusandae natus!</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12 text-center mt-5">
              <h2 className="mt-5 mb-5">Tecnologias</h2>
            </div>
          </div>
          <div className="row pb-5">
            <div className="col-2 mb-5 text-center">
              <img src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=360/uploads/users/1125/posts/30546/preview_image/RN.jpg" alt="" className="tecnologias-img" />
            </div>
            <div className="col-2 text-center">
            <img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social-logo.png" alt="" className="tecnologias-img" />
            </div>
            <div className="col-2 text-center">
            <img src="https://silvawebdesigns.com/wp-content/uploads/2020/10/useful-sass-scss-mixins-for-every-website.jpg" alt="" className="tecnologias-img" />
            </div>
            <div className="col-2 text-center">
            <img src="https://cdn.dribbble.com/users/66221/screenshots/1655593/media/63d9b0acd7e81cde54f291bdcf8a24df.png?resize=400x300&vertical=center" alt=""className="tecnologias-img" />
            </div>
            <div className="col-2 text-center">
            <img src="https://newrelic.com/sites/default/files/styles/800w/public/2021-10/mongo_logo.jpg?itok=Z1PabBZB" alt="" className="tecnologias-img" />
            </div>
            <div className="col-2 text-center">
            <img src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=360/uploads/users/1125/posts/30546/preview_image/RN.jpg" alt="" className="tecnologias-img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
