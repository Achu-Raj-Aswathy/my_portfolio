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
      <div id='projects' className='p-5 text-align-center justify-content-center'>
        <div className='d-flex align-items-center justify-content-center mt-3 text-justify'>
          <h3><b className="heading" style={{ color: "#AB274F", fontSize: "65px" }}>Projects</b></h3>
        </div>
        <div className='d-flex p-5 align-items-center justify-content-center'>
          <Row>
            <Col LG={4} lg={4} xs={12} md={6} s={12} className='mt-5'>
              <Card style={{ width: '13rem' }} className='me-5' id='card'>
                <Card.Img height={'200px'} width={'100%'} variant="top" src={media} />
                <Card.Body>
                  <Card.Title><b className='d-flex justify-content-center'>Media Player</b></Card.Title>
                  <Card.Text className='d-flex flex-column justify-content-center text-align-center mt-3'>
                    <a href="https://github.com/Achu-Raj-Aswathy/Media-player" style={{ textDecoration: "none" }}
                      className='mb-2 d-flex flex-column justify-content-center text-align-center' target="_blank">
                      <Button style={{ backgroundColor: '#AB274F', color: "white" }}><i class="bg-transparent text-light fa-brands fa-github me-2"></i>Github</Button>
                    </a>
                    <a href="https://media-player-pied.vercel.app/" style={{ textDecoration: "none" }}
                      className='mb-1 d-flex flex-column justify-content-center text-align-center' target="_blank">
                      <Button style={{ backgroundColor: '#AB274F', color: "white" }}><i class="bg-transparent text-light fa-solid fa-link me-2"></i>Website</Button>
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col LG={4} lg={4} xs={12} md={6} s={12} className='mt-5'>
              <Card style={{ width: '13rem' }} className='me-5' id='card'>
                <Card.Img height={'200px'} width={'100%'} variant="top" src={ekart} />
                <Card.Body>
                  <Card.Title><b className='d-flex justify-content-center'>E-Kart</b></Card.Title>
                  <Card.Text className='d-flex flex-column justify-content-center text-align-center mt-3'>
                    <a href="https://github.com/Achu-Raj-Aswathy/ekart-redux" style={{ textDecoration: "none" }}
                      className='mb-2 d-flex flex-column justify-content-center text-align-center' target="_blank">
                      <Button style={{ backgroundColor: '#AB274F', color: "white" }}><i class="bg-transparent text-light fa-brands fa-github me-2"></i>Github</Button>
                    </a>
                    <a href="https://ekart-redux-roan.vercel.app/" style={{ textDecoration: "none" }}
                      className='mb-1 d-flex flex-column justify-content-center text-align-center' target="_blank">
                      <Button style={{ backgroundColor: '#AB274F', color: "white" }}><i class="bg-transparent text-light fa-solid fa-link me-2"></i>Website</Button>
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col LG={4} lg={4} xs={12} md={6} s={12} className='mt-5'>
              <Card style={{ width: '13rem' }} className='me-5' id='card'>
                <Card.Img height={'200px'} width={'100%'} variant="top" src={restaurant} />
                <Card.Body>
                  <Card.Title><b className='d-flex justify-content-center'>Restaurant</b></Card.Title>
                  <Card.Text className='d-flex flex-column justify-content-center text-align-center mt-3'>
                    <a href="https://github.com/Achu-Raj-Aswathy/restaurant-redux" style={{ textDecoration: "none" }}
                      className='mb-2 d-flex flex-column justify-content-center text-align-center' target="_blank">
                      <Button style={{ backgroundColor: '#AB274F', color: "white" }}><i class="bg-transparent text-light fa-brands fa-github me-2"></i>Github</Button>
                    </a>
                    <a href="https://restaurant-redux-tawny.vercel.app/" style={{ textDecoration: "none" }}
                      className='mb-1 d-flex flex-column justify-content-center text-align-center' target="_blank">
                      <Button style={{ backgroundColor: '#AB274F', color: "white" }}><i class="bg-transparent text-light fa-solid fa-link me-2"></i>Website</Button>
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col LG={4} lg={4} xs={12} md={6} s={12} className='mt-5'>
              <Card style={{ width: '13rem' }} className='me-5' id='card'>
                <Card.Img height={'200px'} width={'100%'} variant="top" src={netflix} />
                <Card.Body>
                  <Card.Title><b className='d-flex justify-content-center'>Netflix Clone</b></Card.Title>
                  <Card.Text className='d-flex flex-column justify-content-center text-align-center mt-3'>
                    <a href="https://github.com/Achu-Raj-Aswathy/restaurant-redux" style={{ textDecoration: "none" }}
                      className='mb-2 d-flex flex-column justify-content-center text-align-center' target="_blank">
                      <Button style={{ backgroundColor: '#AB274F', color: "white" }}><i class="bg-transparent text-light fa-brands fa-github me-2"></i>Github</Button>
                    </a>
                    <a href="https://restaurant-redux-tawny.vercel.app/" style={{ textDecoration: "none" }}
                      className='mb-1 d-flex flex-column justify-content-center text-align-center' target="_blank">
                      <Button style={{ backgroundColor: '#AB274F', color: "white" }}><i class="bg-transparent text-light fa-solid fa-link me-2"></i>Website</Button>
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col LG={4} lg={4} xs={12} md={6} s={12} className='mt-5'>
              <Card style={{ width: '13rem' }} className='me-5' id='card'>
                <Card.Img height={'200px'} width={'100%'} variant="top" src={counter} />
                <Card.Body>
                  <Card.Title><b className='d-flex justify-content-center'>Counter</b></Card.Title>
                  <Card.Text className='d-flex flex-column justify-content-center text-align-center mt-3'>
                    <a href="https://github.com/Achu-Raj-Aswathy/counter-redux" style={{ textDecoration: "none" }}
                      className='mb-2 d-flex flex-column justify-content-center text-align-center' target="_blank">
                      <Button style={{ backgroundColor: '#AB274F', color: "white" }}><i class="bg-transparent text-light fa-brands fa-github me-2"></i>Github</Button>
                    </a>
                    <a href="https://counter-redux-sandy.vercel.app/" style={{ textDecoration: "none" }}
                      className='mb-1 d-flex flex-column justify-content-center text-align-center' target="_blank">
                      <Button style={{ backgroundColor: '#AB274F', color: "white" }}><i class="bg-transparent text-light fa-solid fa-link me-2"></i>Website</Button>
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col LG={4} lg={4} xs={12} md={6} s={12} className='mt-5'>
              <Card style={{ width: '13rem' }} className='me-5' id='card'>
                <Card.Img height={'200px'} width={'100%'} variant="top" src={simpleInterest} />
                <Card.Body>
                  <Card.Title><b className='d-flex justify-content-center'>Simple Interest</b></Card.Title>
                  <Card.Text className='d-flex flex-column justify-content-center text-align-center mt-3'>
                    <a href="https://github.com/Achu-Raj-Aswathy/simpleInterest" style={{ textDecoration: "none" }}
                      className='mb-2 d-flex flex-column justify-content-center text-align-center' target="_blank">
                      <Button style={{ backgroundColor: '#AB274F', color: "white" }}><i class="bg-transparent text-light fa-brands fa-github me-2"></i>Github</Button>
                    </a>
                    <a href="https://simple-interest-amber.vercel.app/" style={{ textDecoration: "none" }}
                      className='mb-1 d-flex flex-column justify-content-center text-align-center' target="_blank">
                      <Button style={{ backgroundColor: '#AB274F', color: "white" }} ><i class="bg-transparent text-light fa-solid fa-link me-2"></i>Website</Button>
                    </a>
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