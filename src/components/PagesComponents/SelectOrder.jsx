import React from 'react'
import Form from 'react-bootstrap/Form';

const SelectOrder = () => {
  return (
    <>
    <p className='titleSelect'>Ordenar por</p>
    <Form.Select aria-label="Default select example" className='formSelect'>
      <option value="1">Más relevante</option>
      <option value="2">Menor precio</option>
      <option value="3">Mayor precio</option>
      <option value="5">A-Z</option>
      <option value="6">Z-A</option>
    </Form.Select>

    </>
  )
}

export default SelectOrder