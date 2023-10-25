import React, {useState} from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const provinces = [
  'Buenos Aires',
  'Catamarca',
  'Chaco',
  'Chubut',
  'Córdoba',
  'Corrientes',
  'Entre Ríos',
  'Formosa',
  'Jujuy',
  'La Pampa',
  'La Rioja',
  'Mendoza',
  'Misiones',
  'Neuquén',
  'Río Negro',
  'Salta',
  'San Juan',
  'San Luis',
  'Santa Cruz',
  'Santa Fe',
  'Santiago del Estero',
  'Tierra del Fuego',
  'Tucumán',
];

const AddressForm = ({addresses, setUserAddresses }) => {
  
  const handleChangeDatos = (e) => {
    setUserAddresses({
      ...addresses,
      [e.target.name]: e.target.value
    })
  }


  

  return (
    <>

      <Typography variant='h6' gutterBottom>
        Datos de envío
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Nombre"
            value={addresses?.firstName}
            fullWidth
            variant="standard"
            className='addresForm__textField'
            onChange={handleChangeDatos}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            value={addresses?.lastName}
            label="Apellido"
            fullWidth
            variant="standard"
            className='addresForm__textField'
            onChange={handleChangeDatos}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="address"
            name="address"
            value={addresses?.address}
            label="Dirección"            
            fullWidth
            variant="standard"
            className='addresForm__textField'
            onChange={handleChangeDatos}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            required
            id="number"
            name="number"
            value={addresses?.number}
            label="Número"
            fullWidth
            variant="standard"
            className='addresForm__textField'
            onChange={handleChangeDatos}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            required
            id="floor"
            name="floor"
            value={addresses?.floor}
            label="Piso"
            fullWidth
            variant="standard"
            className='addresForm__textField'
            onChange={handleChangeDatos}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl variant="standard" fullWidth id="province">
            <InputLabel id="a-label" className='addresForm__textField'>Provincia</InputLabel>
            <Select
              labelId="a-label"
              id="provincew"
              name='province'
              value={addresses?.province}
              onChange={handleChangeDatos}
            >
              <MenuItem value="">
                <em>Selecione provincia</em>
              </MenuItem>
              {provinces.map((province) => (
              <MenuItem key={province} value={province}>
                  {province}
              </MenuItem>
              ))}

            </Select>
        </FormControl>
          
        </Grid>
        
       
        
      <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            value={addresses?.city}
            label="Ciudad"
            fullWidth
            variant="standard"
            className='addresForm__textField'
            onChange={handleChangeDatos}
          />
        </Grid>
        
        <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  color='secondary'
                  name='saveAddress'
                  // checked={formData.saveAddress}
                  // onChange={handleFormChange}
                />
              }
              label='Usa esta dirección como datos de facturación'
            />
          </Grid>
        </Grid>


    </>
  )
}

export default AddressForm