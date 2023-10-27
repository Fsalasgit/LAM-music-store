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

const AddressForm = ({addresses, setUserAddresses,setError, error, customErrorMessages }) => {


  
  const handleChangeDatos = (e) => {
    const { name, value } = e.target;
    let counLetter = value.length
    switch (name) {
      case 'firstName':
        if (/[^a-zA-ZáéíóúÁÉÍÓÚüÜ ]/.test(value) || value.length <2 ) {
          setError({ ...error, firstName: true });
        } else {
          setError({ ...error, firstName: false });
        }
        break;
      case 'lastName':
        if (/[^a-zA-ZáéíóúÁÉÍÓÚüÜ ]/.test(value) || value.length <2 ) {
          setError({ ...error, lastName: true });
        } else {
          setError({ ...error, lastName: false });
        }    
        break;
      case 'address':
        if (value.length <4 ) {
          setError({ ...error, address: true });
        } else {
          setError({ ...error, address: false });
        }    
      break;
      case 'number':
        if (isNaN(value) || value.trim() === "" ) {
          setError({ ...error, number: true });
        } else {
          setError({ ...error, number: false });
        }    
      break;
      case 'city':
        if (value.length <2 ) {
          setError({ ...error, city: true });
        } else {
          setError({ ...error, city: false });
        }
        break;
      default:
        break;
    }
    counLetter <26 && setUserAddresses({
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
            label="Nombre"
            variant="standard"
            id="firstName"
            name="firstName"
            type="text"
            fullWidth
            error={error.firstName}
            helperText={error.firstName && customErrorMessages.firstName}
            className='addresForm__textField'
            onChange={handleChangeDatos}
            value={addresses.firstName}
            
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
            error={error.lastName}
            helperText={error.lastName && customErrorMessages.lastName}
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
            error={error.address}
            helperText={error.address && customErrorMessages.address}
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
            error={error.number}
            helperText={error.number && customErrorMessages.number}
            variant="standard"
            className='addresForm__textField'
            onChange={handleChangeDatos}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="floor"
            name="floor"
            value={addresses?.floor}
            label="Piso-dpto"
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
              required
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
            error={error.city}
            helperText={error.city && customErrorMessages.city}
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