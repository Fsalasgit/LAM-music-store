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


const steps = ['Datos de envio', 'Detalle de pago', 'Revise su orden'];



const PaymentForms = ({ show, setShow }) => {
  const [activeStep, setActiveStep] = useState(0);
  const {state, dispatch} = useContext(GlobalContext)
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    if (activeStep === steps.length && !orderPlaced) {
      dispatch(clearCart());
      setOrderPlaced(true);
    }
  }, [activeStep, orderPlaced, dispatch]);


  function getStepContent(step) {
    switch (step) {
      case 0:
        return <AddressForm />;
      case 1:
        return <ReactCreditCard />;
      case 2:
        return <Review />;
      default:
        throw new Error('Ulgo salios mal');
    }
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  
  
  return (
    <>
        <Modal className='modalContainer' show={show} onHide={() => setShow(false)} dialogClassName='modal-100' aria-labelledby='example-custom-modal-styling-title'>
        

          <CssBaseline />
            <AppBar
              position="absolute"
              color="default"
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
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Lam house music - Pagos
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
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                  className={activeStep === steps.length - 1 ? 'buyButton' : 'nextButton'}
                >
                  {activeStep === steps.length - 1 ? 'Comprar' : 'Siguiente'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>

      </Container>


          
   

        
      </Modal>
    </>
  );
};

export default PaymentForms;