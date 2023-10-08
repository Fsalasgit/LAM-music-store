import React from 'react'
import { RiInstagramLine } from "react-icons/ri";
import { RiFacebookBoxFill } from "react-icons/ri";
import { RiTwitterXFill } from "react-icons/ri";
import { RiTiktokFill } from "react-icons/ri";
import { RiWhatsappLine } from "react-icons/ri";
import { RiMailLine } from "react-icons/ri";
import { RiPinDistanceLine } from "react-icons/ri";
import { AiOutlineClockCircle } from "react-icons/ai";
const Footer = () => {
  return (
    <>
      <div className="container-fluid footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-between mt-3">
              <div>
                <img src="../../public/lan (150 x 100 px).png" alt="Logo" />
              </div>
              <div className='d-flex align-items-end'>
                <a href="" className='me-4'> <RiInstagramLine /> </a>
                <a href="" className='me-4'> <RiFacebookBoxFill /> </a>
                <a href="" className='me-4'><RiTwitterXFill /></a>
                <a href=""><RiTiktokFill /></a>
              </div>
            </div>
          </div>
          <hr />
          <div className="row text-center">
            <div className="col-lg-3">
              <h3>LAM Music Store</h3>
              <p className='text-start mt-4'>Nuestra Misión es acompañar a todos aquellos que buscan inspirar, divertir, emocionar y trascender a través de la música.</p>
            </div>
            <div className="col-lg-3">
              <h3>Preguntas frecuentes</h3>
              <ul className='text-start'>
                <li>¿Quienes Somos?</li>
                <li>Envios</li>
                <li>Cancelar orden</li>
              </ul>
            </div>
            <div className="col-lg-6">
              <h3>Contacto y Medios de pago</h3>
              <ul className='text-start'>
                <li> <RiWhatsappLine /> Escríbenos por WhatsApp!</li>
                <li>+549381 555 05 37</li>
                <li> <RiMailLine /> swanmusiconlinetuc@gmail.com</li>
                <li> <RiPinDistanceLine /> Gral. Paz 576, T4000 San Miguel de Tucumán, Tucumán</li>
                <li> <AiOutlineClockCircle /> Lunes a Sábado de 9 a 13 hs y de 17 a 21 hs</li>
                <li><img src="https://hoffmannmusica.com.ar/img/pagos.webp?v=1662789836" alt="" className='img-fluid tarjetas'/></li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-between mb-4">
              <p>© Todos los derechos reservados </p>
              <p>Terminos y Condiciones</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Footer