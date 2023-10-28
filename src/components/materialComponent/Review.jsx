import React, { useState, useContext } from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { GlobalContext } from '../../context/GlobalContext';





const Review = ({payments, addresses}) => {
  const {state, dispatch} = useContext(GlobalContext)

  let convertToPesos = (numb) => {
    const pesos = numb.toLocaleString('es-AR', {
      style: 'currency',
      currency: 'ARS',
    });
    return pesos;
  };
  
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
          <Typography gutterBottom>{addresses.firstName + " "+  addresses.lastName}</Typography>
          <Typography gutterBottom>{addresses.address + " " +  addresses.number}</Typography>
          <Typography gutterBottom>{addresses.province + ", " +  addresses.city}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Detalle de pago
          </Typography>
          <Grid container>

            <React.Fragment>
                <Grid item xs={6}>
                  <Typography gutterBottom>Tipo de tarjeta: </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{addresses.cardTipe}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>Nombre de titular: </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{addresses.nameCard}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>Numero de tarjeta: </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography gutterBottom>XXXX-XXX-XXXX-{addresses.numberCard.slice(-4)}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>Fecha de vencimiento: </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{addresses.expiry}</Typography>
                </Grid>
              </React.Fragment>
          </Grid>
        </Grid>
      </Grid>

    </>
  )
}

export default Review