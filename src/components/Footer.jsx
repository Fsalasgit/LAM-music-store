import React from "react";
import { RiInstagramLine } from "react-icons/ri";
import { RiFacebookBoxFill } from "react-icons/ri";
import { RiTwitterXFill } from "react-icons/ri";
import { RiTiktokFill } from "react-icons/ri";
import { RiWhatsappLine } from "react-icons/ri";
import { RiMailLine } from "react-icons/ri";
import { RiPinDistanceLine } from "react-icons/ri";
import { AiOutlineClockCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="container-fluid footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-between mt-3">
              <div>
                <img src="/lan (150 x 100 px).png" alt="Logo" />
              </div>
              <div className="d-flex align-items-end">
                <Link to="/error404" className="me-4">
                  <RiInstagramLine />
                </Link>
                <Link to="/error404" className="me-4">
                  <RiFacebookBoxFill />
                </Link>
                <Link to="/error404" className="me-4">
                  <RiTwitterXFill />
                </Link>
                <Link to="/error404">
                  <RiTiktokFill />
                </Link>
              </div>
            </div>
          </div>
          <hr />
          <div className="row text-center">
            <div className="col-lg-4">
              <h3 className="footer__title2">LAM Music Store</h3>
              <p className="footer__text1">
                Nuestra Misión es acompañar a todos aquellos que buscan
                inspirar, divertir, emocionar y trascender a través de la
                música.
              </p>
            </div>
            <div className="col-lg-4">
              <h3 className="footer__title">Preguntas frecuentes</h3>
              <ul>
                <li>¿Quiénes Somos?</li>
                <li>Envíos</li>
                <li>Cancelar orden</li>
              </ul>
            </div>
            <div className="col-lg-4">
              <h3 className="footer__title">Contacto y Medios de pago</h3>
              <ul>
                <li>
                  <div>
                    <RiWhatsappLine /> Escríbenos por WhatsApp!
                  </div>
                </li>
                <li>
                  <div className="contact-item">+549381 555 05 37</div>
                </li>
                <li>
                  <div>
                    <RiMailLine /> swanmusiconlinetuc@gmail.com
                  </div>
                </li>
                <li>
                  <div>
                    <RiPinDistanceLine /> Gral. Paz 576, T4000 San Miguel de
                    Tucumán, Tucumán
                  </div>
                </li>
                <li>
                  <div>
                    <AiOutlineClockCircle /> Lunes a Sábado de 9 a 13 hs y de 17
                    a 21 hs
                  </div>
                </li>
                <li>
                  <div>
                    <img
                      src="https://hoffmannmusica.com.ar/img/pagos.webp?v=1662789836"
                      alt=""
                      className="img-fluid footer__tarjetas"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-between mb-4">
              <p>© Todos los derechos reservados </p>
              <p>Términos y Condiciones</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
