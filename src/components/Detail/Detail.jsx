import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carrusel from "./Carousel";
import miImagen from "./mediospago.png";
import {products} from "../../helpers/products"
import ProductCard from "../ProductCard";
import "../../sass/pages/_paginaDetalle.scss"

const Detail = () => {
  const urlParams= new URLSearchParams(window.location.search)
  const id = urlParams.get("id")
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    setProductos(products);
    console.log(urlParams)
    console.log(id)
  
  }, []);

  const producto = productos.find(product => product.id == id )

  return (
    <>
    <body id="fondo-detalle">
    <Container id="Container">
        <Row className="mt-5">
          <Col lg={7}>
            <div>
              <Carrusel />
            </div>
          </Col>
          <Col lg={5}>
            <Row>
              <Col>
                      {producto ? <Col key={producto.id}>
                        <div>
                          {/* <img src={producto.imagen} alt={producto.nombre} /> */}
                          <h2 className="mb-5">{producto.title}</h2>
                          <h5 className="mt-3">{producto.category}</h5>
                          <p className="mt-3">Precio: ${producto.price}</p>
                          <a href = {'/detalle?id=' + (producto.id+1)}>DETALLE</a>
                        </div>
                      </Col> : ""}

                <div>
                  <form
                    action=""
                    className="container d-flex flex-column align-items-center mt-3"
                  >
                    <input
                      type="text"
                      placeholder="Cantidad: 1 (ultimo disponible)"
                      className="w-50"
                    />
                    <a className="btn btn-warning mt-2 w-50">
                      Agregar al carrito
                    </a>
                  </form>
                </div>
                <p>Compra Protegida</p>
                <a href="" className="justify-content-center">
                  Compartir
                </a>
                <hr />
                <h6 className="text-center">
                  Tenemos la mejor financiacion para vos!
                </h6>
                <img src={miImagen} alt="" className="img-fluid" />
                <hr />
                <a href="">¿Alguna consulta? ¡Estamos para ayudarte!</a>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col lg={12} className="mt-4">
            <h4>Descripción</h4>
                        {producto && <div>
                          <p>{producto.description}</p>
                        </div>}
          </Col>
        </Row>
        <hr />
        <Row>
          <Col lg={12} className="mt-4">
            <h4>Medios de Pago</h4>
            <p>
              Podes pagar online de forma segura mediante las plataformas Mobbex
              o Viumi (se debe realizar validación de identidad y se hará
              entrega al titular de la tarjeta). Podes elegir pagar en 1 pago o
              en cuotas, incluidos los pagos con Planes Ahora 3, 6, 12 y 18.
              <br />
              También podes hacerlo con MercadoPago con tarjetas de crédito de
              todos los bancos.
              <br />
              Además podes realizar tu pedido y abonarlo por depósito o
              transferencia bancaria o bien, en nuestro local al retirarlo.
              <br />
              Agregá el producto al carrito y continuá con el proceso de pago
              online!
            </p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col lg={12} className="mt-4">
            <h4>Medios de Envío</h4>
            <p>
              Te lo enviamos al lugar de la Argentina donde te encuentres de
              forma segura y rápida.
              <br />
              Queremos que puedas disfrutar de tus productos lo antes posible.
              Es por eso que procesamos su pedido rápidamente para que pueda
              comenzar a tocar cuanto antes.
              <br />
              Todos nuestros instrumentos son calibrados y afinados por nuestro
              Luthier previo a ser embalado y enviado, para garantizar una
              entrega en óptimas condiciones.
              <br />
              Retiro en el Local
              <br />
              Los artículos serán entregados al titular de la compra y en caso
              de que el pago se haya realizado con tarjetas de crédito o débito,
              la entrega se hará al titular de la tarjeta.
              <br />
              Devoluciones
              <br />
              Estamos comprometidos con su satisfacción como miembro de la
              familia SwanMusic. Todos los productos comprados a través del
              sitio web pueden ser devueltos o cambiados dentro de los 30 días
              posteriores a la compra.
            </p>
          </Col>
        </Row>
        <hr />
        <Row>
          <h4 className="text-center mt-2">Puede Interesarte</h4>
          <hr />
        </Row>
        <Row>
          {producto && <Col className="d-flex align-items-center text-center justify-content-center">
            < ProductCard product={producto} />
          </Col>}
        </Row>
      </Container>
    </body>
    </>
  );
};

export default Detail;
