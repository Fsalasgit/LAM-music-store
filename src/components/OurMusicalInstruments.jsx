import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const OurMusicalInstruments = () => {
  return (
    <div>
        <Container>
            <Row className='mb-5'>
                <Col>
                    <h3>Pianos</h3>
                </Col>
                <Col xs={9}>
                <img
                    className="w-100"
                    src="https://es.yamaha.com/es/files/Pianos_L_e35cd543e83938b3e48072d633c9c354.jpg?impolicy=large&imwid=735&imhei=245"
                    alt="pianos"
                />
                </Col>
            </Row>
            <Row className='mb-5'>
                <Col  xs={9}>
                <img
                    className="w-100"
                    src="https://es.yamaha.com/es/files/mi_drums_5a52d802f1ca99307fa811499f4c3be4.jpg?impolicy=resize&imwid=735&imhei=245"
                    alt="pianos"
                />
                </Col>
                <Col>
                    <h3>Baterias</h3>
                </Col>
            </Row>
            <Row className='mb-5'>
                <Col>
                    <h3>Guitarras y bajos</h3>
                </Col>
                <Col xs={9}>
                <img
                    className="w-100"
                    src="https://es.yamaha.com/es/files/guitars_basses_540x180_847381a8738a577f87fd67f992383dee.jpg?impolicy=large&imwid=735&imhei=245"
                    alt="pianos"
                />
                </Col>
            </Row>
        </Container>

    </div>
  )
}

export default OurMusicalInstruments