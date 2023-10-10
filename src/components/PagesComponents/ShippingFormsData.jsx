import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import Modal from 'react-bootstrap/Modal';

const ShippingFormsData = ({setformDataSend}) => {
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

    const { Formik } = formik;

    const schema = yup.object().shape({
      firstName: yup.string().required(),
      lastName: yup.string().required(),
      city: yup.string().required(),
      state: yup.string().required(),
      terms: yup.bool().required().oneOf([true], 'terms must be accepted'),
    });

    
  return (
    <>
        <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
            firstName: '',
            lastName: '',
            username: '',
            city: '',
            cp:'',
            state: '',
            street:'',
            numberStreet:'',
            terms: false,
        }}
        >
            {({ handleSubmit, handleChange, values, touched, errors }) => (
                <Form noValidate onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group
                    as={Col}
                    md="7"
                    controlId="validationFormik101"
                    className="position-relative"
                    >
                    <Form.Label>Nombres</Form.Label>
                    <Form.Control
                        type="text"
                        name="firstName"
                        placeholder='Ingrese nombres'
                        onChange={handleChange}
                        isInvalid={!!errors.firstName}
                    />
                
                    </Form.Group>
                    <Form.Group
                    as={Col}
                    md="5"
                    controlId="validationFormik102"
                    className="position-relative"
                    >
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                        type="text"
                        name="lastName"
                        placeholder='Ingrese apellido'
                        onChange={handleChange}
                        isInvalid={!!errors.lastName}
                    />
                    </Form.Group>
                    
                </Row>
                <Row className="mb-3">
                    <Form.Group
                    as={Col}
                    md="6"
                    controlId="validationFormik103"
                    className="position-relative"
                    >
                    <Form.Label>Provincia</Form.Label>
                    <Form.Select aria-label="Default select example"  id="province" name="province">
                    {provinces.map((province) => (
                        <option key={province} value={province}>
                            {province}
                        </option>
                        ))}
                    </Form.Select>
                    
                    
                    </Form.Group>
                    <Form.Group
                    as={Col}
                    md="3"
                    controlId="validationFormik104"
                    className="position-relative"
                    >
                    <Form.Label>CP</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Codigo postal"
                        name="cp"
                        onChange={handleChange}
                        isInvalid={!!errors.state}
                    />
                    
                    </Form.Group>
                    <Form.Group
                    as={Col}
                    md="3"
                    controlId="validationFormik105"
                    className="position-relative"
                    >

                    </Form.Group>
                </Row>
                <Row className="mb-3">
      
                    <Form.Group
                    as={Col}
                    md="6"
                    controlId="validationFormik104"
                    className="position-relative"
                    >
                    <Form.Label>Localidad</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Codigo postal"
                        name="state"
                        onChange={handleChange}
                        isInvalid={!!errors.state}
                    />
                    
                    </Form.Group>
                    <Form.Group
                    as={Col}
                    md="3"
                    controlId="validationFormik105"
                    className="position-relative"
                    >

                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group
                    as={Col}
                    md="5"
                    controlId="validationFormik101"
                    className="position-relative"
                    >
                    <Form.Label>Calle</Form.Label>
                    <Form.Control
                        type="text"
                        name="street"
                        placeholder='Ingrese nombres'
                        onChange={handleChange}
                        isInvalid={!!errors.firstName}
                    />
                
                    </Form.Group>
                    <Form.Group
                    as={Col}
                    md="3"
                    controlId="validationFormik102"
                    className="position-relative"
                    >
                    <Form.Label>Numero</Form.Label>
                    <Form.Control
                        type="number"
                        name="numberStreet"
                        placeholder='Opcional'
                        onChange={handleChange}
                        isInvalid={!!errors.lastName}
    
                    />
                    </Form.Group>
                    <Form.Group
                    as={Col}
                    md="2"
                    controlId="validationFormik102"
                    className="position-relative"
                    >
                    <Form.Label>Piso</Form.Label>
                    <Form.Control
                        type="number"
                        name="lastName"
                        placeholder='Ingrese apellido'
                        onChange={handleChange}
                        
                    />
                    </Form.Group>
                    
                </Row>
               
              
           
                </Form>
            )}
        </Formik>

        
    </>
  )
}

export default ShippingFormsData