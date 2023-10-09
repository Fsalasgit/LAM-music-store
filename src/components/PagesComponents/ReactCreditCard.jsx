import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


const ReactCreditCard = () => {
    const [state, setState] = useState({
        number: '',
        expiry: '',
        cvc: '',
        name: '',
        focus: '',
      });
    
      const handleInputChange = (evt) => {
        const { name, value } = evt.target;
        
        setState((prev) => ({ ...prev, [name]: value }));
      }
    
      const handleInputFocus = (evt) => {
        setState((prev) => ({ ...prev, focus: evt.target.name }));
      }
  return (
    <>
    <div>
      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}
      />
      <form className='mt-5'> 
        <FloatingLabel
            controlId="floatingInput"
            label="Numero de tarjeta"
            className="mb-3"
        >
            <Form.Control 
            type="number"
            name="number"
            placeholder="Card Number"
            value={state.number}
            onChange={handleInputChange}
            onFocus={handleInputFocus} 
            />
        </FloatingLabel>


        <FloatingLabel
            controlId="floatingInput"
            label="Nombre del titular"
            className="mb-3"
        >
            <Form.Control 
            type="name"
            name="name"
            placeholder="Card name"
            value={state.name}
            onChange={handleInputChange}
            onFocus={handleInputFocus} 
            />
        </FloatingLabel>
        <FloatingLabel
            controlId="floatingInput"
            label="fecha de vencimiento"
            className="mb-3 col-3"
        >
            <Form.Control 
            type="expiry"
            name="expiry"
            placeholder="Card expiry"
            value={state.expiry}
            onChange={handleInputChange}
            onFocus={handleInputFocus} 
            />
        </FloatingLabel>
        <FloatingLabel
            controlId="floatingInput"
            label="fecha de vencimiento"
            className="mb-3 col-3"
        >
            <Form.Control 
            type="cvc"
            name="cvc"
            placeholder="Card cvc"
            value={state.cvc}
            onChange={handleInputChange}
            onFocus={handleInputFocus} 
            />
        </FloatingLabel>

      
        
      </form>
    </div>

    </>
  )
}

export default ReactCreditCard
