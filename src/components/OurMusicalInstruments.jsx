import React, {useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


const OurMusicalInstruments = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    
  return (
    <>
        <Container className='container OurMusicalInstruments'>
            <Row data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1000" className='mb-5'>
                <Col className="flex-column">
                    <h3 className='subtitleText'>Pianos</h3>
                    <p className='paragraphs'>"La magia de las 88 teclas: Pianos LAM. Tu música, nuestra pasión. Descubre un mundo de melodías con nuestra colección de pianos. Cada nota, una experiencia única."</p>
                    

                    <span className='buttonContainer'>
                        <Link className="readMoreButton" to={"/Productos#ourProducts"}>Leer Más...</Link>
                    </span>
                </Col>
                <Col lg={7} className='OurMusicalInstruments__img'>
                <img
                    className="w-100 d-none-550"
                    src="https://es.yamaha.com/es/files/Pianos_L_e35cd543e83938b3e48072d633c9c354.jpg?impolicy=large&imwid=735&imhei=245"
                    alt="pianos"
                />
                </Col>
            </Row>
            <Row data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1000" className='mb-5'>
                <Col xl={7} className='OurMusicalInstruments__img'>
                <img
                    className="w-100 d-none-576"
                    src="https://es.yamaha.com/es/files/guitars_basses_540x180_847381a8738a577f87fd67f992383dee.jpg?impolicy=large&imwid=735&imhei=245"
                    alt="pianos"
                    />
                </Col>
                <Col>
                    <h3 className='subtitleText'>Guitarras y bajos</h3>
                    <p className='paragraphs'>"Acordes que resuenan en tu esencia. Guitarras y bajos LAM: arte sonoro en tus manos. Encuentra tu sonido, crea tu riff. La melodía de tu alma, con nuestra colección."</p>
                    <span className='buttonContainer'>
                        <Link className="readMoreButton" to={"/Productos#ourProducts"}>Leer Más...</Link>
                    </span>
                </Col>
            </Row>
            <Row data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1000" className='mb-5'>
                <Col>
                    <h3 className='subtitleText'>Bateria</h3>
                    <p className='paragraphs'>"El latido de tu ritmo, nuestra inspiración. Baterías LAM para percusionistas apasionados. Cada golpe, una historia. Siente la energía, crea tu compás, con nuestra selección de baterías."</p>
                    <span className='buttonContainer'>
                        <Link className="readMoreButton" to={"/Productos#ourProducts"}>Leer Más...</Link>
                    </span>
                </Col>
                <Col xl={7} className='OurMusicalInstruments__img'>
                <img
                    className="w-100 d-none-576"
                    src="https://es.yamaha.com/es/files/mi_drums_5a52d802f1ca99307fa811499f4c3be4.jpg?impolicy=resize&imwid=735&imhei=245"
                    alt="pianos"
                />
                
                </Col>
            </Row>
            <Row data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1000" className='mb-5'>
                <Col xl={7} className='OurMusicalInstruments__img'>
                <img
                    className="w-100 d-none-576"
                    src="https://es.yamaha.com/es/files/Image-Index_24e38d6521ad0bf58511b545b6267b42.jpg?impolicy=large&imwid=735&imhei=245"
                    alt="pianos"
                    />
                </Col>
                <Col>
                    <h3 className='subtitleText'>Percusion</h3>
                    <p className='paragraphs'>"Ritmos que marcan el compás de tu vida. Percusión LAM: el pulso de la música en tus manos. Desde tambores hasta cajones, tu groove hecho realidad. Explora, crea y deja que resuene tu estilo."</p>
                    <span className='buttonContainer'>
                        <Link className="readMoreButton" to={"/Productos#ourProducts"}>Leer Más...</Link>
                    </span>
                </Col>
            </Row>
            
        </Container>

    </>
  )
}

export default OurMusicalInstruments