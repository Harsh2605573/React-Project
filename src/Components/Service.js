import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import IMG from './Image/services.jpg'
import { BiReceipt } from "react-icons/bi";
import { TbCube } from "react-icons/tb";
import { BiImages } from "react-icons/bi";
import { LuShield } from "react-icons/lu";

function Service() {
    return (
        <>
            <Container className='service1'>
                <div className='service2'>
                    <h2>Service</h2>
                    <p>Magnam dolores commodi suscipit eius consequatur ex aliquid fuga eum quidem</p>
                </div>
                <Row>
                    <Col lg={6}>
                        <div className='service3'>
                                <div className='ser3'>
                                    <BiReceipt  className='icon' />
                                    <h4>Est labore ad</h4>
                                    <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                                </div>
                                <div className='ser3'>
                                    <TbCube  className='icon' />
                                    <h4>Harum esse qui</h4>
                                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                                </div>
                                <div className='ser3'>
                                    <BiImages  className='icon' />
                                    <h4>Aut occaecati</h4>
                                    <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                                </div>
                                <div className='ser3'>
                                    <LuShield   className='icon' />
                                    <h4>Beatae veritatis</h4>
                                    <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
                                </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className='serviceimg'>
                            <img src={IMG} alt="" style={{ width: '100%' }} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Service
