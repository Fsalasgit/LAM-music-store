import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormCreacion from './FormCreacion';

const ModalNuevo = ({show, handleClose, getProducts}) => {

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FormCreacion getProducts={getProducts}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalNuevo