import React, {useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const OurMusicalInstruments = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    
  return (
    <>
        <Container className='container-fluid'>
            <Row data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1000" className='mb-5'>
                <Col className="flex-column">
                    <h3>Pianos</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia maxime quae aliquid aspernatur architecto totam eum dicta a id nostrum? Inventore asperiores cupiditate ullam unde omnis aspernatur repudiandae odio ad.e</p>
                    

                    <a className='buttonContainer' href='#'>
                        <button className="readMoreButton">Leer Más...</button>
                    </a>
                </Col>
                <Col xs={7}>
                <img
                    className="w-100"
                    src="https://es.yamaha.com/es/files/Pianos_L_e35cd543e83938b3e48072d633c9c354.jpg?impolicy=large&imwid=735&imhei=245"
                    alt="pianos"
                />
                </Col>
            </Row>
            <Row data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1000" className='mb-5'>
                <Col xs={7}>
                <img
                    className="w-100"
                    src="https://es.yamaha.com/es/files/guitars_basses_540x180_847381a8738a577f87fd67f992383dee.jpg?impolicy=large&imwid=735&imhei=245"
                    alt="pianos"
                    />
                </Col>
                <Col>
                    <h3>Guitarras y bajos</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus sed, nisi, odio aliquid quaerat sit, eum temporibus eos aperiam voluptatibus ipsa iste a dolores tenetur nostrum. Sit quod dolorum tempora.</p>
                    <a className='buttonContainer' href='#'>
                        <button className="readMoreButton">Leer Más...</button>
                    </a>
                </Col>
            </Row>
            <Row data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1000" className='mb-5'>
                <Col>
                    <h3>Bateria</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nostrum libero reiciendis quia dicta nihil ipsa, voluptatum sapiente veritatis modi, architecto, sunt tempore id. Natus ad porro deleniti voluptatem. Magni!</p>
                    <a className='buttonContainer' href='#'>
                        <button className="readMoreButton">Leer Más...</button>
                    </a>
                </Col>
                <Col xs={7}>
                <img
                    className="w-100"
                    src="https://es.yamaha.com/es/files/mi_drums_5a52d802f1ca99307fa811499f4c3be4.jpg?impolicy=resize&imwid=735&imhei=245"
                    alt="pianos"
                />
                
                </Col>
            </Row>
            <Row data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1000" className='mb-5'>
                <Col xs={7}>
                <img
                    className="w-100"
                    src="https://es.yamaha.com/es/files/Image-Index_24e38d6521ad0bf58511b545b6267b42.jpg?impolicy=large&imwid=735&imhei=245"
                    alt="pianos"
                    />
                </Col>
                <Col>
                    <h3>Percusion</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus sed, nisi, odio aliquid quaerat sit, eum temporibus eos aperiam voluptatibus ipsa iste a dolores tenetur nostrum. Sit quod dolorum tempora.</p>
                    <a className='buttonContainer' href='#'>
                        <button className="readMoreButton">Leer Más...</button>
                    </a>
                </Col>
            </Row>
            
        </Container>

    </>
  )
}

export default OurMusicalInstruments