import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Photo from './Image/about.jpg'
import { List, ListItem } from '@mui/material'
import { LuCheckCheck } from "react-icons/lu";

function About() {
    return (
        <>
            <Container className='about1'>
                <div className='about2'>
                    <h2>About Us</h2>
                    <p>Magnam dolores commodi suscipit eius consequatur</p>
                </div>
                <Row>
                    <Col lg={6}>
                        <div className='aboutimg'>

                            <img src={Photo} alt="" style={{ width: '100%' }} />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className='about3'>
                            <h3>Voluptatem dignissimos provident quasi corporis</h3>
                            <p className='first'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua.
                            </p>
                            <List className='ul'>
                                <ListItem className='li'>
                                    <LuCheckCheck className='icon' />
                                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </ListItem>
                                <ListItem className='li'>
                                    <LuCheckCheck className='icon' />
                                    Duis aute irure dolor in reprehenderit in voluptate velit.
                                </ListItem>
                                <ListItem className='li'>
                                    <LuCheckCheck className='icon'/>
                                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                </ListItem>
                            </List>
                            <p className='second'>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default About
