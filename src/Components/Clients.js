import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PNG1 from './Image/client-1.png'
import PNG2 from './Image/client-2.png'
import PNG3 from './Image/client-3.png'
import PNG4 from './Image/client-4.png'
import PNG5 from './Image/client-5.png'
import PNG6 from './Image/client-6.png'

function Clients() {
    return (
        <>
            <section id='client'>
                <Container className='client1'>
                    <Row className='client2'>
                        <Col lg={2} md={4} sm={6} className='client3'><img src={PNG1} alt="" /></Col>
                        <Col lg={2} md={4} sm={6} className='client3'><img src={PNG2} alt="" /></Col>
                        <Col lg={2} md={4} sm={6} className='client3'><img src={PNG3} alt="" /></Col>
                        <Col lg={2} md={4} sm={6} className='client3'><img src={PNG4} alt="" /></Col>
                        <Col lg={2} md={4} sm={6} className='client3'><img src={PNG5} alt="" /></Col>
                        <Col lg={2} md={4} sm={6} className='client3'><img src={PNG6} alt="" /></Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Clients
