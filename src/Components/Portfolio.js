import { List, ListItem } from '@mui/material'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Img1 from './Image/portfolio-1.jpg'
import Img2 from './Image/portfolio-2.jpg'
import Img3 from './Image/portfolio-3.jpg'
import Img4 from './Image/portfolio-4.jpg'
import Img5 from './Image/portfolio-5.jpg'
import Img6 from './Image/portfolio-6.jpg'
import Img7 from './Image/portfolio-7.jpg'
import Img8 from './Image/portfolio-8.jpg'
import Img9 from './Image/portfolio-9.jpg'


import { FaPlus } from "react-icons/fa6";
import { IoIosLink } from "react-icons/io";

function Portfolio() {
  return (
    <>
      <Container className='portfolio1'>
        <div className='portfolio2'>
          <h2>PORTFOLIO</h2>
          <p>Magnam dolores commodi suscipit eius consequatur ex aliquid fuga eum quidem</p>
        </div>
        <Row>
          <Col lg={12} className='portfolio3'>
            <List className='ul'>
              <ListItem className='li'>ALL</ListItem>
              <ListItem className='li'>App</ListItem>
              <ListItem className='li'>Card</ListItem>
              <ListItem className='li'>Web</ListItem>
            </List>
          </Col>
        </Row>
        <Row>
          <Col lg={4} className='portfo'>
            <div className='portfolio4'>
              <img src={Img1} alt='img1' className='porimg1' />
              <div className='portfolio-info'>
                <h4>App 1</h4>
                <p>APP</p>
                <div className='portfolio-link'>
                  <a href={Img1}>
                    <FaPlus />
                  </a>
                  <a href="#">
                    <IoIosLink />
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} className='portfo'>
            <div className='portfolio4'>
              <img src={Img2} alt='img1' className='porimg1' />
              <div className='portfolio-info'>
                <h4>Web 3</h4>
                <p>WEB</p>
                <div className='portfolio-link'>
                  <a href={Img2}>
                    <FaPlus />
                  </a>
                  <a href="#">
                    <IoIosLink />
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} className='portfo'>
            <div className='portfolio4'>
              <img src={Img3} alt='img1' className='porimg1' />
              <div className='portfolio-info'>
                <h4>App 2</h4>
                <p>APP</p>
                <div className='portfolio-link'>
                  <a href={Img3}>
                    <FaPlus />
                  </a>
                  <a href="#">
                    <IoIosLink />
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} className='portfo'>
            <div className='portfolio4'>
              <img src={Img4} alt='img1' className='porimg1' />
              <div className='portfolio-info'>
                <h4>Card 2</h4>
                <p>CARD</p>
                <div className='portfolio-link'>
                  <a href={Img4}>
                    <FaPlus />
                  </a>
                  <a href="#">
                    <IoIosLink />
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} className='portfo'>
            <div className='portfolio4'>
              <img src={Img5} alt='img1' className='porimg1' />
              <div className='portfolio-info'>
                <h4>Web 2</h4>
                <p>WEB</p>
                <div className='portfolio-link'>
                  <a href={Img5}>
                    <FaPlus />
                  </a>
                  <a href="#">
                    <IoIosLink />
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} className='portfo'>
            <div className='portfolio4'>
              <img src={Img6} alt='img1' className='porimg1' />
              <div className='portfolio-info'>
                <h4>App 3</h4>
                <p>APP</p>
                <div className='portfolio-link'>
                  <a href={Img6}>
                    <FaPlus />
                  </a>
                  <a href="#">
                    <IoIosLink />
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} className='portfo'>
            <div className='portfolio4'>
              <img src={Img7} alt='img1' className='porimg1' />
              <div className='portfolio-info'>
                <h4>Card 1</h4>
                <p>CARD</p>
                <div className='portfolio-link'>
                  <a href={Img7}>
                    <FaPlus />
                  </a>
                  <a href="#">
                    <IoIosLink />
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} className='portfo'>
            <div className='portfolio4'>
              <img src={Img8} alt='img1' className='porimg1' />
              <div className='portfolio-info'>
                <h4>Card 3</h4>
                <p>CARD</p>
                <div className='portfolio-link'>
                  <a href={Img8}>
                    <FaPlus />
                  </a>
                  <a href="#">
                    <IoIosLink />
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} className='portfo'>
            <div className='portfolio4'>
              <img src={Img9} alt='img1' className='porimg1' />
              <div className='portfolio-info'>
                <h4>Web 3</h4>
                <p>WEB</p>
                <div className='portfolio-link'>
                  <a href={Img9} >
                    <FaPlus />
                  </a>
                  <a href="#">
                    <IoIosLink />
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Portfolio
