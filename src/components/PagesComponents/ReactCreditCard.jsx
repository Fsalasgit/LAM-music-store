import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


const ReactCreditCard = ({addresses, setUserAddresses, setError, error, customErrorMessages  }) => {
    
      const handleInputChange = (evt) => {
        const { name, value } = evt.target;
        switch (name) {
          case 'numberCard':
            if (isNaN(value) || value.length !== 16 ) {
              setError({ ...error, numberCard: true });
            } else {
              setError({ ...error, numberCard: false });
            }
            break;
          case 'nameCard':
            if (/[^a-zA-ZáéíóúÁÉÍÓÚüÜ ]/.test(value) || value.length <9 || value.length >21 ) {
              setError({ ...error, nameCard: true });
            } else {
              setError({ ...error, nameCard: false });
            }    
            break;
          case 'expiry':
            let month = Math.floor(value / 100);
            let year = value % 100 + 2000;
            const date = new Date(year, month - 1, 1);
            const currentDate = new Date();
            const comparativeDate =  new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);

            if (comparativeDate > date || value.length !== 4) {
              setError({ ...error, expiry: true });
            } else {
              setError({ ...error, expiry: false });
            }    
          break;
          case 'cvc':
            if (isNaN(value) || value.length !== 3) {
              setError({ ...error, cvc: true });
            } else {
              setError({ ...error, cvc: false });
            }    
          break;          
          default:
            break;
        }
        
        setUserAddresses((prev) => ({ ...prev, [name]: value }));
      }
    
      const handleInputFocus = (evt) => {
        setUserAddresses((prev) => ({ ...prev, focus: evt.target.name }));
      }
  return (
    <>
      
    
      <Cards 
        number={addresses.numberCard}
        expiry={addresses.expiry}
        cvc={addresses.cvc}
        name={addresses.nameCard}
        focused={addresses.focus}
      />
      <Grid container spacing={2} className='mt-4' > 
          <Grid item xs={12} sm={6} >
            <TextField
              required
              id="numberCard"
              name="numberCard"
              label="Número de tarjeta"
              fullWidth
              error={error.numberCard}
              helperText={error.numberCard && customErrorMessages.numberCard}
              variant="standard"
              value={addresses.numberCard}
              onChange={handleInputChange}
              onFocus={handleInputFocus} 
              className='addresForm__textField'
            />
          </Grid>
          <Grid item xs={12} sm={12}>
          <TextField
            required
            id="cardName"
            name="nameCard"
            label="Nombre en tarjeta"
            fullWidth
            error={error.nameCard}
            helperText={error.nameCard && customErrorMessages.nameCard}
            variant="standard"
            value={addresses.nameCard}
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
            error={error.expiry}
            helperText={error.expiry && customErrorMessages.expiry}
            variant="standard"
            value={addresses.expiry}
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
            error={error.cvc}
            helperText={error.cvc && customErrorMessages.cvc}
            variant="standard"
            value={addresses.cvc}
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
