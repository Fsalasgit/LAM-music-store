import React from 'react'
import { RiInstagramLine } from "react-icons/ri";
import { RiFacebookBoxFill } from "react-icons/ri";
import { RiTwitterXFill } from "react-icons/ri";
import { RiTiktokFill } from "react-icons/ri";



const Footer = () => {
  return (
    <>
      <div className="container-fluid footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-between mt-3">
              <div>
                <img src="" alt="Logo" />
              </div>
              <div className='d-flex'>
                <a href="" className='me-4'> <RiInstagramLine/> </a>
                <a href="" className='me-4'> <RiFacebookBoxFill/> </a>
                <a href="" className='me-4'><RiTwitterXFill/></a>
                <a href=""><RiTiktokFill/></a>
              </div>
            </div>
          </div>
            <hr />
            <div className="row text-center">
              <div className="col-lg-3 col-md-5 col-sm-5">
                <h3>Titulo</h3>
                <ul>
                  <li>Categoria</li>
                  <li>Categoria</li>
                  <li>Categoria</li>
                  <li>Categoria</li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-5 col-sm-5">
              <h3>Titulo</h3>
                <ul>
                  <li>Categoria</li>
                  <li>Categoria</li>
                  <li>Categoria</li>
                  <li>Categoria</li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-5 col-sm-5">
              <h3>Titulo</h3>
                <ul>
                <li>Categoria</li>
                <li>Categoria</li>
                <li>Categoria</li>
                <li>Categoria</li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-5 col-sm-5">
              <h3>Titulo</h3>
                <ul>
                <li>Categoria</li>
                <li>Categoria</li>
                <li>Categoria</li>
                <li>Categoria</li>
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