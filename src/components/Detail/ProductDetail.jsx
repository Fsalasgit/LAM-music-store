import React from "react";
import mediosPago from "./mediospago.png"

const ProductDetail = ({ product }) => {
  console.log(product);
  console.log(typeof (product.price))

  let convertToPesos = (number) => {
    const pesos = number?.toLocaleString('es-AR', {
      style: 'currency',
      currency: 'ARS',
    });
    return pesos;
  };

  return (
    <>
      {product !== null ? (
        <div className="container mt-4" id="Container">
          <div className="row">
            <div className="col-lg-7">
              <div className="text-center">
                <img src={product?.image} alt="" className="img-product" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="row">
                <div className="col mt-5">
                  <h1>{product?.title}</h1>
                </div>
                <div className="mt-4">
                  <h2>{product?.description}</h2>
                </div>
                <div className="mt-4">
                  <h4>{product?.category?.name}</h4>
                </div>
                <div className="mt-4">
                  <h3>{convertToPesos(product?.price)}</h3>
                </div>
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
                <h4 className="text-center">
                  Tenemos la mejor financiacion para vos!
                </h4>
                <img
                  src={mediosPago}
                  alt=""
                  className="img-fluid img-pagos"
                />
                <hr />
                <a href="">¿Alguna consulta? ¡Estamos para ayudarte!</a>
              </div>
            </div>
          </div>
          <hr />
          <div className="container-pre">
            <div className="row">
              <div className="col-12 mt-4">
                <h3>Descripcion</h3>
                <pre className="mt-5 fs-5 pre">{product?.shortDescription}</pre>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-12 mt-4 pre">
              <h3>Medios de Pago</h3>
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
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-12 mt-4 pre">
              <h3>Medios de Envío</h3>
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
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h3>Producto no encontrado</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
