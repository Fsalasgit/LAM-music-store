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

const AddressForm = ({ setUserAddresses }) => {
  const [prov, setProv] = React.useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    number: '',
    floor: '',
    province: '',
    city: '',
    saveAddress: false,
  });

  const handleProvChange = (event) => {
    setProv(event.target.value);
    setFormData({
      ...formData,
      province: event.target.value,
    });
  };

  const handleFormChange = (event) => {
    const { name, value, checked } = event.target;
    setFormData({
      ...formData,
      [name]: name === 'saveAddress' ? checked : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí llamas a setUserAddresses con los datos del formulario
    setUserAddresses(formData);
  };





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
            id="address"
            name="address"
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
            <InputLabel id="a-label" className='addresForm__textField'>Provincia</InputLabel>
            <Select
              labelId="a-label"
              id="a-standard"
              onChange={handleProvChange}
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
              control={
                <Checkbox
                  color='secondary'
                  name='saveAddress'
                  checked={formData.saveAddress}
                  onChange={handleFormChange}
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