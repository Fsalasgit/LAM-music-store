import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="container-fluid footer">
        <div className="row">
          <div className="col-lg-3 text-center ps-auto mt-3">
            <a href="#">
              <img src="" alt=""/>
            </a>
            <h4>LAM Music Store</h4>
          </div>
          <div className="col-lg-3 text-center mt-3">
            <h4>Redes Sociales</h4>
            <div className="mt-4 d-flex justify-content-evenly">
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
            </div>
          </div>
          <div className="col-lg-3 mt-3">
            <h4 className="text-center">Metodos de Pago</h4>
            <ul className="text-center pe-4">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className="col-lg-3 text-center mt-3 d-flex flex-column">
            <a href="#" className="mt-4">Contáctanos</a>
            <a href="#" className="mt-2">Sucursales</a>
            <a href="#" className="mt-2">Politicas de Privacidad</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer