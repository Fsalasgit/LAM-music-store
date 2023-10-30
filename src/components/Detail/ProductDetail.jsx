import React, { useState, useContext } from "react";
import mediosPago from "./mediospago.png";
import { addCart } from "../../context/GlobalActions";
import { GlobalContext } from "../../context/GlobalContext";
import { RiShareFill } from "react-icons/ri";
import { RiLockFill } from "react-icons/ri";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ProductDetail = ({ product }) => {
  const { state, dispatch } = useContext(GlobalContext);
  const [cartProducts, setCartProducts] = useState([]);

  const onAddProduct = () => {
    const existingProductIndex = state.productCart.findIndex((item) => item._id === product._id);

    if (existingProductIndex !== -1) {
      state.productCart[existingProductIndex].cantidad++;
      state.productCart[existingProductIndex].counterProduct++;
    } else {
      const updatedCartProducts = [...cartProducts, { ...product, cantidad: 1, counterProduct: 1 }];
      setCartProducts(updatedCartProducts);
      dispatch(addCart({ ...product, cantidad: 1, counterProduct: 1 }));
    }
    Swal.fire({
      icon: 'success',
      title: 'Producto Añadido con Éxito',
      text: 'El producto se ha añadido al carrito con éxito.',
      timer: 1500,
    });
  };

  let convertToPesos = (number) => {
    const pesos = number?.toLocaleString("es-AR", {
      style: "currency",
      currency: "ARS",
    });
    return pesos;
  };

  return (
    <>
      {product !== null ? (
        <div className="container mt-4" id="Container">
          <div className="row">
            <div className="col-lg-7 d-flex justify-content-center align-items-center">
              <div className="text-center">
                <img
                  src={product?.image}
                  alt=""
                  className="img-fluid img-product"
                />
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
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      onAddProduct();
                    }}
                    className="btn btn-warning mt-4 mb-4"
                  >
                    Añadir al carrito
                  </button>
                </div>
                <p><RiLockFill /> Compra Protegida</p>
                <Link to="/error404" className="justify-content-center">
                  <RiShareFill /> Compartir
                </Link>
                <hr />
                <h4 className="text-center">
                  Tenemos la mejor financiación para vos!
                </h4>
                <img src={mediosPago} alt="" className="img-fluid img-pagos" />
                <hr />
                <Link to="/error404">¿Alguna consulta? ¡Estamos para ayudarte!</Link>
              </div>
            </div>
          </div>
          <hr />
          <div className="container-pre">
            <div className="row">
              <div className="col-12 mt-4">
                <h3>Descripción</h3>
                <pre className="mt-5 fs-5 pre">{product?.shortDescription}</pre>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-12 mt-4 pre">
              <h3>Medios de Pago</h3>
              <p>
                Podes pagar online de forma segura mediante las plataformas
                Mobbex o Viumi (se debe realizar validación de identidad y se
                hará entrega al titular de la tarjeta). Podes elegir pagar en 1
                pago o en cuotas, incluidos los pagos con Planes Ahora 3, 6, 12
                y 18.
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
                Todos nuestros instrumentos son calibrados y afinados por
                nuestro Luthier previo a ser embalado y enviado, para garantizar
                una entrega en óptimas condiciones.
                <br />
                Retiro en el Local
                <br />
                Los artículos serán entregados al titular de la compra y en caso
                de que el pago se haya realizado con tarjetas de crédito o
                débito, la entrega se hará al titular de la tarjeta.
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
