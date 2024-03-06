import React, { useState } from 'react'
import { Button, Card, Col, Collapse, Row } from 'react-bootstrap'
import media from '../assets/mediaPlayer.jpeg'
import ekart from '../assets/eKart.jpeg'
import restaurant from '../assets/restaurant.jpeg'
import counter from '../assets/counter.jpeg'
import simpleInterest from '../assets/simpleInterest.png'
import netflix from '../assets/netflix.png'

function Projects() {
  return (
    <>
      <div id='projects' className='p-5 d-flex flex-column text-align-center justify-content-center'>
        <div className='d-flex align-items-center justify-content-center mt-3 text-justify'>
          <h3><b className="heading" style={{ color: "#AB274F", fontSize: "65px" }}>Projects</b></h3>
        </div>
        <div className='d-flex align-items-center justify-content-center ms-5'>
          <Row className='container'>
            <Col lg={4} xs={12} md={6} s={12} className='mt-5'>
              <Card style={{ width: '13rem' }} className='' id='card'>
                <Card.Img height={'200px'} width={'100%'} variant="top" src={media} />
                <Card.Body style={{ width: '100%' }} className=' w-100'>
                  <Card.Title><b className='d-flex justify-content-center'>Media Player</b></Card.Title>
                  <Card.Text className='d-flex flex-column justify-content-center text-align-center mt-3'>
                    <Col xs={12} className='mb-2'>
                      <a href="https://github.com/Achu-Raj-Aswathy/Media-player" style={{ textDecoration: "none" }} target="_blank">
                        <Button style={{ backgroundColor: '#AB274F', color: "white", width: "100%" }}>
                          <i className="bg-transparent text-light fa-brands fa-github me-2"></i>Github
                        </Button>
                      </a>
                    </Col>
                    <Col xs={12} className='mb-1'>
                      <a href="https://media-player-pied.vercel.app/" style={{ textDecoration: "none" }} target="_blank">
                        <Button style={{ backgroundColor: '#AB274F', color: "white", width: "100%" }}>
                          <i className="bg-transparent text-light fa-solid fa-link me-2"></i>Website
                        </Button>
                      </a>
                    </Col>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} xs={12} md={6} s={12} className='mt-5'>
              <Card style={{ width: '13rem' }} className='' id='card'>
                <Card.Img height={'200px'} width={'100%'} variant="top" src={ekart} />
                <Card.Body className=' w-100'>
                  <Card.Title><b className='d-flex justify-content-center'>E-Kart</b></Card.Title>
                  <Card.Text className='d-flex flex-column justify-content-center text-align-center mt-3'>
                    <Col xs={12} className='mb-2'>
                      <a href="https://github.com/Achu-Raj-Aswathy/ekart-redux" style={{ textDecoration: "none" }} target="_blank">
                        <Button style={{ backgroundColor: '#AB274F', color: "white", width: "100%" }}>
                          <i className="bg-transparent text-light fa-brands fa-github me-2"></i>Github
                        </Button>
                      </a>
                    </Col>
                    <Col xs={12} className='mb-1'>
                      <a href="https://ekart-redux-roan.vercel.app/" style={{ textDecoration: "none" }} target="_blank">
                        <Button style={{ backgroundColor: '#AB274F', color: "white", width: "100%" }}>
                          <i className="bg-transparent text-light fa-solid fa-link me-2"></i>Website
                        </Button>
                      </a>
                    </Col>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} xs={12} md={6} s={12} className='mt-5'>
              <Card style={{ width: '13rem' }} className='' id='card'>
                <Card.Img height={'200px'} width={'100%'} variant="top" src={restaurant} />
                <Card.Body className=' w-100'>
                  <Card.Title><b className='d-flex justify-content-center'>Restaurant</b></Card.Title>
                  <Card.Text className='d-flex flex-column justify-content-center text-align-center mt-3'>
                    <Col xs={12} className='mb-2'>
                      <a href="https://github.com/Achu-Raj-Aswathy/restaurant-redux" style={{ textDecoration: "none" }} target="_blank">
                        <Button style={{ backgroundColor: '#AB274F', color: "white", width: "100%" }}>
                          <i className="bg-transparent text-light fa-brands fa-github me-2"></i>Github
                        </Button>
                      </a>
                    </Col>
                    <Col xs={12} className='mb-1'>
                      <a href="https://restaurant-redux-tawny.vercel.app/" style={{ textDecoration: "none" }} target="_blank">
                        <Button style={{ backgroundColor: '#AB274F', color: "white", width: "100%" }}>
                          <i className="bg-transparent text-light fa-solid fa-link me-2"></i>Website
                        </Button>
                      </a>
                    </Col>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} xs={12} md={6} s={12} className='mt-5'>
              <Card style={{ width: '13rem' }} className='' id='card'>
                <Card.Img height={'200px'} width={'100%'} variant="top" src={netflix} />
                <Card.Body className=' w-100'>
                  <Card.Title><b className='d-flex justify-content-center'>Netflix Clone</b></Card.Title>
                  <Card.Text className='d-flex flex-column justify-content-center text-align-center mt-3'>
                    <Col xs={12} className='mb-2'>
                      <a href="https://github.com/Achu-Raj-Aswathy/netflix" style={{ textDecoration: "none" }} target="_blank">
                        <Button style={{ backgroundColor: '#AB274F', color: "white", width: "100%" }}>
                          <i className="bg-transparent text-light fa-brands fa-github me-2"></i>Github
                        </Button>
                      </a>
                    </Col>
                    <Col xs={12} className='mb-1'>
                      <a href="https://netflix-delta-ashy.vercel.app/" style={{ textDecoration: "none" }} target="_blank">
                        <Button style={{ backgroundColor: '#AB274F', color: "white", width: "100%" }}>
                          <i className="bg-transparent text-light fa-solid fa-link me-2"></i>Website
                        </Button>
                      </a>
                    </Col>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} xs={12} md={6} s={12} className='mt-5'>
              <Card style={{ width: '13rem' }} className='' id='card'>
                <Card.Img height={'200px'} width={'100%'} variant="top" src={counter} />
                <Card.Body className=' w-100'>
                  <Card.Title><b className='d-flex justify-content-center'>Counter</b></Card.Title>
                  <Card.Text className='d-flex flex-column justify-content-center text-align-center mt-3'>
                    <Col xs={12} className='mb-2'>
                      <a href="https://github.com/Achu-Raj-Aswathy/counter-redux" style={{ textDecoration: "none" }} target="_blank">
                        <Button style={{ backgroundColor: '#AB274F', color: "white", width: "100%" }}>
                          <i className="bg-transparent text-light fa-brands fa-github me-2"></i>Github
                        </Button>
                      </a>
                    </Col>
                    <Col xs={12} className='mb-1'>
                      <a href="https://counter-redux-sandy.vercel.app/" style={{ textDecoration: "none" }} target="_blank">
                        <Button style={{ backgroundColor: '#AB274F', color: "white", width: "100%" }}>
                          <i className="bg-transparent text-light fa-solid fa-link me-2"></i>Website
                        </Button>
                      </a>
                    </Col>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} xs={12} md={6} s={12} className='mt-5'>
              <Card style={{ width: '13rem' }} className='' id='card'>
                <Card.Img height={'200px'} width={'100%'} variant="top" src={simpleInterest} />
                <Card.Body className=' w-100'>
                  <Card.Title><b className='d-flex justify-content-center'>Simple Interest</b></Card.Title>
                  <Card.Text className='d-flex flex-column justify-content-center text-align-center mt-3'>
                    <Col xs={12} className='mb-2'>
                      <a href="https://github.com/Achu-Raj-Aswathy/simpleInterest" style={{ textDecoration: "none" }} target="_blank">
                        <Button style={{ backgroundColor: '#AB274F', color: "white", width: "100%" }}>
                          <i className="bg-transparent text-light fa-brands fa-github me-2"></i>Github
                        </Button>
                      </a>
                    </Col>
                    <Col xs={12} className='mb-1'>
                      <a href="https://simple-interest-amber.vercel.app/" style={{ textDecoration: "none" }} target="_blank">
                        <Button style={{ backgroundColor: '#AB274F', color: "white", width: "100%" }}>
                          <i className="bg-transparent text-light fa-solid fa-link me-2"></i>Website
                        </Button>
                      </a>
                    </Col>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>




          </Row>


        </div>

      </div>
    </>
  )
}

export default Projects