import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const AboutUs = () => {
  return (
    <>
      <div className="container-fluid hero min-vh-100">

        <div className="row">
          <div className="col-12 text-center mt-5">
            <h1>Conoce Nuestro Equipo</h1>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-4 d-flex justify-content-center">
            <Card style={{ width: "22rem" }} className="fondo-card">
              <Card.Img
                variant="top"
                src="https://images.vexels.com/media/users/3/129616/isolated/preview/fb517f8913bd99cd48ef00facb4a67c0-silueta-de-avatar-de-empresario.png"
              />
              <Card.Body>
                <Card.Title>Franco Salas</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 d-flex justify-content-center">
            <Card style={{ width: "22rem" }} className="fondo-card">
              <Card.Img
                variant="top"
                src="https://images.vexels.com/media/users/3/129616/isolated/preview/fb517f8913bd99cd48ef00facb4a67c0-silueta-de-avatar-de-empresario.png"
              />
              <Card.Body>
                <Card.Title>Lorenzo Albornoz</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 d-flex justify-content-center">
            <Card style={{ width: "22rem" }} className="fondo-card">
              <Card.Img
                variant="top"
                src="https://images.vexels.com/media/users/3/129616/isolated/preview/fb517f8913bd99cd48ef00facb4a67c0-silueta-de-avatar-de-empresario.png"
              />
              <Card.Body>
                <Card.Title>Bruno Busnelli</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
