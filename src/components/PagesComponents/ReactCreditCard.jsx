import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


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
      
    
      <Cards 
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}
      />
      <Grid container spacing={2} className='mt-4' > 
          <Grid item xs={12} sm={6} >
            <TextField
              required
              id="cardName"
              name="number"
              label="Número de tarjeta"
              fullWidth
              variant="standard"
              value={state.number}
              onChange={handleInputChange}
              onFocus={handleInputFocus} 
              className='addresForm__textField'
            />
          </Grid>
          <Grid item xs={12} sm={12}>
          <TextField
            required
            id="cardName"
            name="name"
            label="Nombre en tarjeta"
            fullWidth
            variant="standard"
            value={state.name}
            onChange={handleInputChange}
            onFocus={handleInputFocus} 
            className='addresForm__textField'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="expDate"
            name="expiry"
            label="Fecha vencimiento"
            variant="standard"
            value={state.expiry}
            onChange={handleInputChange}
            onFocus={handleInputFocus} 
            className='addresForm__textField'
          />
        </Grid>
        <Grid item xs={12} sm={6}>       
          
          <TextField
            required
            id="cvv"
            name="cvc"
            label="CVV"
            helperText="Reverso de la tarjeta"
            variant="standard"
            value={state.cvc}
            onChange={handleInputChange}
            onFocus={handleInputFocus} 
            className='addresForm__textField'
          />
          
        </Grid>
        
      </Grid>


    </>
  )
}

export default ReactCreditCard
