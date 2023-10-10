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
    <div className=''>
      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}
      />
      <form className='formContainer'> 
        <FloatingLabel
            controlId="floatingInput"
            label="Numero de tarjeta"
            className="formContainer__w100Item"
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
            className="formContainer__w100Item"
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
        <div className='formContainer__w100Item formContainer__w100Item-sub'>
            <FloatingLabel
                controlId="floatingInput"
                label="fecha de vencimiento"
                className="formContainer__w50Item"
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
                label="Clave de seguridad"
                className="formContainer__w50Item formContainer__w50Item-right"
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
        </div>

      
        
      </form>
    </div>

    </>
  )
}

export default ReactCreditCard
