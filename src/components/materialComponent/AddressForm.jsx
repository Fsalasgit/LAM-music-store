import React from 'react'
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

const AddressForm = ({setAddressInfo}) => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  



  return (
    <>
    <form action="" className='addresForm'>
    <Typography variant="h6" gutterBottom >
        Datos de envio
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Nombre"
            fullWidth
            variant="standard"
            className='addresForm__textField'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Apellido"
            fullWidth
            variant="standard"
            className='addresForm__textField'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Dirección"
            fullWidth
            variant="standard"
            className='addresForm__textField'
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            required
            id="number"
            name="number"
            label="Número"
            fullWidth
            variant="standard"
            className='addresForm__textField'
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            required
            id="floor"
            name="floor"
            label="Piso"
            fullWidth
            variant="standard"
            className='addresForm__textField'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl variant="standard" fullWidth >
            <InputLabel id="demo-simple-select-standard-label" className='addresForm__textField'>Provincia</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              onChange={handleChange}
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
            label="Ciudad"
            fullWidth
            variant="standard"
            className='addresForm__textField'
          />
        </Grid>
        
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Usa esta dirección como datos de facturacion"
            
          />
        </Grid>
      </Grid>
    </form>

    </>
  )
}

export default AddressForm