import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import IMAGE1 from './Image/team-1.jpg'
import IMAGE2 from './Image/team-2.jpg'
import IMAGE3 from './Image/team-3.jpg'
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
function Team() {
    return (
        <div id='team'>
            <Container className='team1'>
                <div className='team2'>
                    <h2>Team</h2>
                    <p>Magnam dolores commodi suscipit eius consequatur ex aliquid fuga eum quidem</p>
                </div>
                <Row className='team3'>
                    <Col lg={4} className='team4'>
                        <div>
                            <div className='team-img'>
                                <img src={IMAGE1} alt="" className='team-image' />
                                <div className='team-social'>
                                    <a href=""><FaTwitter /></a>
                                    <a href=""><FaFacebook /></a>
                                    <a href=""><FaInstagram /></a>
                                    <a href=""><FaLinkedin /></a>
                                </div>
                            </div>
                            <div className='team-info'>
                                <h4>Walter White</h4>
                                <span>Chief Executive Officer</span>
                                <p>Animi est delectus alias quam repellendus nihil nobis dolor. Est sapiente occaecati et dolore. Omnis aut ut nesciunt explicabo qui. Eius nam deleniti ut omnis</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} className='team4'><div>
                        <div className='team-img'>
                            <img src={IMAGE2} alt="" className='team-image' />
                            <div className='team-social'>
                                <a href=""><FaTwitter /></a>
                                <a href=""><FaFacebook /></a>
                                <a href=""><FaInstagram /></a>
                                <a href=""><FaLinkedin /></a>
                            </div>
                        </div>
                        <div className='team-info'>
                            <h4>Sarah Jhonson</h4>
                            <span>PRODUCT MANAGER</span>
                            <p>Aspernatur iste esse aliquam enim et corporis. Molestiae voluptatem aut eligendi quis aut. Libero vel amet voluptatem eos rerum non doloremque</p>
                        </div>
                    </div></Col>
                    <Col lg={4} className='team4'><div>
                        <div className='team-img'>
                            <img src={IMAGE3} alt="" className='team-image' />
                            <div className='team-social'>
                                <a href=""><FaTwitter /></a>
                                <a href=""><FaFacebook /></a>
                                <a href=""><FaInstagram /></a>
                                <a href=""><FaLinkedin /></a>
                            </div>
                        </div>
                        <div className='team-info'>
                            <h4>William Anderson</h4>
                            <span>CTO</span>
                            <p>Ut enim possimus nihil cupiditate beatae. Veniam facere quae non qui necessitatibus rerum eos vero. Maxime sit sunt quo dolor autem est qui quaerat</p>
                        </div>
                    </div></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Team
