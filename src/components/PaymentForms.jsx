import React, { useState, useContext, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Box from '@mui/material/Box';
import AddressForm from './materialComponent/AddressForm';
import ReactCreditCard from './PagesComponents/ReactCreditCard';
import Review from './materialComponent/Review';
import { GlobalContext } from '../context/GlobalContext';
import { clearCart } from '../context/GlobalActions';
import { Link } from 'react-router-dom';



const steps = ['Datos de envio', 'Detalle de pago', 'Revise su orden'];



const PaymentForms = ({ show, setShow }) => {
  const [activeStep, setActiveStep] = useState(0);
  const { state, dispatch } = useContext(GlobalContext);
  const [orderPlaced, setOrderPlaced] = useState(false);


  const [addresses, setUserAddresses] = useState({
    firstName:'',
    lastName:'',
    address:'',
    number:'',
    floor:'',
    province:'',
    city:'',
    numberCard: '',
    expiry: '',
    cvc: '',
    nameCard: '',
    focus: '',
    cardTipe:"Visa",
  
  })

  const [payments, setPayments] = useState({
    
    cardHolder:"Pincky Moon",
    cardNumber:"xxxx-xxxx-xxxx-1234",
    expiryDate:"12/23"

  })

  const [error, setError] = useState({
    firstName: false,
    lastName: false,
    address:false,
    number: false,
    
  });

  const isAllfalse = () =>{
    let count = 0
  for (let key in error) {
    
    
    if (error.hasOwnProperty(key)) {
      const value = error[key];
      value && count++
    
    }
  }
  let stateValue = count === 0 ? false : true

  return stateValue
}



  useEffect(() => {
    if (activeStep === steps.length && !orderPlaced) {
      dispatch(clearCart());
      setOrderPlaced(true);
    }
  }, [activeStep, orderPlaced, dispatch]);

  const customErrorMessages = {
    firstName: 'No puede contener número y menos de 3 caracteres',
    lastName:'No puede contener número y menos de 3 caracteres',
    number:'Debe ser un numero',
    address:'Debe tener al menos 5 caracteres',
    city:'No puede contener menos de 3 caractere',
  };


  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSubmit = (e) => {    
    e.preventDefault();
    !isAllfalse() && handleNext()    
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <AddressForm setUserAddresses={setUserAddresses} addresses={addresses} error={error} setError={setError} customErrorMessages={customErrorMessages}/>;
      case 1:
        return <ReactCreditCard setUserAddresses={setUserAddresses} addresses={addresses}/>;
      case 2:
        return <Review  payments={payments} addresses={addresses}/>;
      default:
        throw new Error('Algo salió mal');
    }
  }
  
  return (
    <>
        <Modal className='modalContainer' show={show} onHide={() => setShow(false)} dialogClassName='modal-100' aria-labelledby='example-custom-modal-styling-title'>
        

          <CssBaseline />
            <AppBar
              position="absolute"
              color="default"
              className='headerForms'
              elevation={0}
              sx={{
                position: 'relative',
                borderBottom: (t) => `1px solid ${t.palette.divider}`,
              }}
            >
            <Toolbar>
              <Typography variant="h6" color="inherit" className='p-3' noWrap>
                <img src="/lan (150 x 100 px).png" alt="Logo" className="mx-auto my-auto d-lg-inline align-top" />
              </Typography>
            </Toolbar>
          </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <form onSubmit={handleSubmit}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            LAM Music Store  - Pagos
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom className='titleEnd'>
                Gracias por su compra
              </Typography>
              <Typography variant="subtitle1" className='textEnd'>
                Su número de pedido es <strong className='textEnd__strong'>#2001539</strong>. Hemos enviado su pedido por correo electrónico y le enviaremos una actualización cuando su pedido haya sido
                enviado.
         
              </Typography>
              <Link to={'/'}>Ir al inicio</Link>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }} className='backButton'>
                    Volver
                  </Button>
                )}

                <Button
                  variant="contained"
                  type='submit'
                  sx={{ mt: 3, ml: 1 }}
                  className={activeStep === steps.length - 1 ? 'buyButton' : 'nextButton'}
                >
                  {activeStep === steps.length - 1 ? 'Comprar' : 'Siguiente'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
        </form>
      </Container>


          
   

        
      </Modal>
    </>
  );
};

export default PaymentForms;