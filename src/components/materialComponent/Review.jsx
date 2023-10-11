import React, { useState, useContext } from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { GlobalContext } from '../../context/GlobalContext';



  
  const addresses = ['Gral. Paz 576', 'San Miguel de Tucumán', 'Tucumán'];
  const payments = [
    { name: 'Card type', detail: 'Visa' },
    { name: 'Card holder', detail: 'Pinky Moom' },
    { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
    { name: 'Expiry date', detail: '12/2023' },
  ];

  let convertToPesos = (numb) => {
    const pesos = numb.toLocaleString('es-AR', {
      style: 'currency',
      currency: 'ARS',
    });
    return pesos;
  };


const Review = () => {
  const {state, dispatch} = useContext(GlobalContext)
  
  return (
    <>
      <Typography variant="h6" gutterBottom>        
        Resumen del pedido
      </Typography>
      <List disablePadding className='reviewList'>
        {state.productCart.map((product) => (
          
          <ListItem key={product?._id} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product?.title} secondary={product.desc} className='reviewList__item reviewList__item-long'/>
            <ListItemText className='reviewList__item'>x {product?.cantidad}</ListItemText>
            <Typography variant="body2" className='reviewList__item reviewList__item-price'>{convertToPesos((product?.price*product?.cantidad))}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className='reviewList__total' sx={{ fontWeight: 700 }}>
            {convertToPesos(
              state.productCart.reduce((acc, item) => acc + item.price * item.cantidad, 0)
            )}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Datos de envio
          </Typography>
          <Typography gutterBottom>Pincky Moom</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            detalle de pago
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>

    </>
  )
}

export default Review